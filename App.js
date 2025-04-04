import { useRef, useState, useEffect } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.code) {
      case "Space":
        togglePlayPause();
        event.preventDefault();
        break;
      case "ArrowRight":
        videoRef.current.currentTime += 5;
        break;
      case "ArrowLeft":
        videoRef.current.currentTime -= 5;
        break;
      case "KeyF":
        setScale(1);
        setPosition({ x: 0, y: 0 });
        break;
      default:
        break;
    }
  };

  const handleWheel = (event) => {
    setScale((prev) => Math.max(1, prev + event.deltaY * -0.01));
  };

  const handleMouseDown = (event) => {
    setIsPanning(true);
    setStartPan({ x: event.clientX - position.x, y: event.clientY - position.y });
  };

  const handleMouseMove = (event) => {
    if (isPanning) {
      setPosition({ x: event.clientX - startPan.x, y: event.clientY - startPan.y });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        cursor: isPanning ? "grabbing" : "grab",
      }}
    >
      <video
        ref={videoRef}
        src="/sample-video.mp4"
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transition: isPanning ? "none" : "transform 0.1s ease-out",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        controls
      />
    </div>
  );
}

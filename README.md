# ReactVideoPlayer
Video player that allows the user to play 2 different versions of a video simultaneously and switch between both versions seamlessly.

Overview

This is a simple React-based video player that supports the following features:

Play/Pause using the Space key.

Seek Forward/Backward using the Right and Left arrow keys, respectively.

Zoom In/Out using the mouse scroll wheel.

Pan Around when zoomed in by holding and dragging the left mouse button.

Reset Zoom by pressing the F key.

Installation & Setup

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Run the application:

npm start

Usage

Upload a sample video (sample-video.mp4) in the public folder or modify the src attribute in the <video> tag to point to an existing video file.

Open http://localhost:3000 in your browser to interact with the video player.

Keyboard & Mouse Controls

Action

Key / Mouse Input

Play/Pause

Space

Seek Forward

Right Arrow (→)

Seek Backward

Left Arrow (←)

Zoom In/Out

Mouse Scroll

Pan Video

Left Mouse Button Drag

Reset Zoom

F

Notes

Ensure the video file is accessible.

The player scales and moves the video for zoom and pan effects.

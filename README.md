# Timeline editor

![Preview](https://cdn.dribbble.com/userupload/4906747/file/original-832d56102adda9f32de1a699470e498e.jpg?compress=1&resize=1028x771&vertical=center)

As seen in apps like Adobe After Effects, Rive ([rive.app](https://rive.app)), Blender, Final Cut, [motion-canvas](https://github.com/motion-canvas/motion-canvas) etc. a timeline editor is used to assist in editing visual (or even audible) media elements.

In this challenge, you will design a timeline editor with the following features:

1. Layers: the editor panel should consist of three main layers. From top to bottom:

   1. Video. Here, only video elements can be dragged on to it.

   1. Audio. Here, only audio elements can be dragged on to it.

   When an element is added on either of the layers, you should be able to drag them left or right to shift them. Also dragging an element to the other layer should not work.

   Dragging an element outside the editor should remove it.

   You cannot overlap media items on the same sub-layer.

1. Time (frame/seconds) header: this should show the frame or seconds at intervals.

1. Cursor: This component should be movable accross the timeline.

Here is a link showing a simplified UI of what's expected: https://www.tldraw.com/s/v2_c_QudTPHLZAK0D8UJ1gfsMV?viewport=-323%2C-340%2C2608%2C1325&page=page%3AQc0-fhO1f3VTaG0DUtiCU

## [Fake] Asset library

You can develop a fake asset library to help create media which you can drag into the layer. If you prefer to use real media that can be uploaded from the device, that's also acceptable.

Note that this project is about the timeline editor and does not involve stitching/cutting media files, previewing, rendering, etc. as a real media editor would.

## Extra points

- As usual, beautiful UI/UX
- Scalable editor
- Allow to set media duration. Note that deciding to do this will require you to consider how to shrink/expand the timeline so that media elements are visible.

## Helpful tips

One obvious point is that, this editor involves a drag and drop feature. However, you're not required to develop this feature ground-up.

The duration of media elements determine the size/width of its representation on the timeline. That is, if the editor allows for the duration of 2 minutes and a media item spans 30 seconds, then its representation will take a quarter of the timeline. (ie, 30 seconds / 2 \* 60 seconds)

[motion-canvas](https://motioncanvas.io) is an open source motion library that implements a timeline editor. You can reference it.

The audio layer and the video layer essentially have the same features. Therefore a single component could be developed allowing for options that configure their appearance, allowed media, etc.

Ask questions in the server.

# ColorfulVideo
Change background colors by the exact time of a YouTube(R) video in order for it to look fancy

## What is this?

Well, imagine you have a page with a nice video, and it has some big free space around.
Wouldn't it be nice to set the background color so that it matches the video?

This library helps you do that. Before you ask: No, it doesn't scan your video dynamically (it was the first idea).

You just set the colors and the time, and it will execute.

## Demo code

```javascript
var colorAttribute = 'background';
// get the youtube player - you can also set it inside of the youtube callback
// you will need to embed the video with the youtube iframe api, and not via iframe
var videoElement= ytplayer;
var targetElement = document.getElementById('lp-pom-block-11-color-overlay');
var animationSequence=[];
animationSequence[39.80] = '#192133';
animationSequence[48.54] = '#FFFFFF';
animationSequence[50.80] = '#C68492';
animationSequence[52.00] = '#D8AB6D';
animationSequence[53.93] = '#7DA7BE';
animationSequence[56.18] = '#969596';
animationSequence[57] = '#FFFFFF';

ColorfulVideo.start({targetElement:targetElement, videoElement:videoElement, colorAttribute:colorAttribute, animationSequence:animationSequence});
```

---
title: How to generate thumbnails from uploaded video ?
tagline: We will learn how to generate thumbnails from uploaded video using nodejs and ffmpeg.
slug: how-to-generate-thumbnails-from-uploaded-video
created: Fri 12 Dec 2024
author: Lakhyaraj Dash
---

In this tutorial, you will learn how to generate thumbnails from a video file.

### Warning!!! Please use small video files only, if your machine is low-end.

We will primarily use the `fluent-ffmpeg` library to perform the action.

For this, download the ffmpeg library from the official site of ffmpeg [https://ffmpeg.org/](https://ffmpeg.org/). 

Extract the zip and add the `bin` folder to your environment variables path.

---

Steps:

1. Create a folder for the conversion, name it as ```video-thumbnail-generator```.

2. Initialize it as a nodejs package.
```bash
$ npm init -y
```

3. Install the fluent ffmpeg library
```bash
$ npm install fluent-ffmpeg
```

4. Import the library
```js
const ffmpeg = require('fluent-ffmpeg')
```

5. The first argument of the ffmpeg will be the path to the video file
```js
ffmpeg('path_to_videofile')
```

6. Take screenshot and save to the folder (Note: Multiple screenshots can be taken at a time, but we will take only 1)
```js
ffmpeg('path_to_videofile')
  .screenshots({
     count: 1,
     filename: 'thumbnail-%s.png',
     folder: 'output_path/'
  })
```

## Entire code
```js
const ffmpeg = require('fluent-ffmpeg')
ffmpeg('path_to_videofile')
  .on('filenames', (filenames) => {
     console.log(filenames.join(', ') // Display the filenames to be generated
  })
  .on('end', () => {
     console.log('Screenshots taken!');
  })
  .screenshots({
     count: 1,
     filename: 'thumbnail-%s.png',
     folder: 'output_path/'
  })
```


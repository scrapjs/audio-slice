Slice input audio stream to the duration, i. e. sound after N seconds will not be played.

## Usage

[![npm install audio-slice](https://nodei.co/npm/audio-slice.png?mini=true)](https://npmjs.org/package/audio-slice/)

```js
var Generator = require('audio-generator');
var Slice = require('audio-slice');
var Speaker = require('audio-speaker');

Generator().pipe(Slice(2)).pipe(Speaker());
```
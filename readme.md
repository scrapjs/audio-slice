# audio-slice [![Build Status](https://travis-ci.org/audiojs/audio-slice.svg?branch=master)](https://travis-ci.org/audiojs/audio-slice) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![Greenkeeper badge](https://badges.greenkeeper.io/audiojs/audio-slice.svg)](https://greenkeeper.io/)

Slice input audio stream to the duration, i. e. sound after N seconds will not be played and stream will end. Useful to force input stream to end.

## Usage

[![npm install audio-slice](https://nodei.co/npm/audio-slice.png?mini=true)](https://npmjs.org/package/audio-slice/)

```js
var Sine = require('audio-oscillator/sine');
var Slice = require('audio-slice');
var Speaker = require('audio-speaker');

Generator().pipe(Slice(2)).pipe(Speaker());
```

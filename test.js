var Speaker = require('audio-speaker');
var Generator = require('audio-generator');
var Slice = require('./index');


Generator().pipe(Slice(2)).pipe(Speaker());
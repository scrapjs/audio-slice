/**
 * Slice the duration of an audio-stream
 *
 * @module audio-slice
 */

var inherits = require('inherits');
var Through = require('audio-through');
var extend = require('xtend/mutable');


/**
 * @constructor
 */
function AudioSlice (duration) {
	if (!(this instanceof AudioSlice)) return new AudioSlice(duration);

	if (typeof duration === 'number') {
		duration = {
			duration: duration
		}
	}

	Through.call(this, duration);
};

inherits(AudioSlice, Through);


/** Default duration to slice is undefined */
AudioSlice.prototype.duration = Infinity;


AudioSlice.prototype.process = function (chunk) {
	if (this.count + chunk.length >= this.sampleRate * this.duration) {
		this.end();
	}
}



module.exports = AudioSlice;
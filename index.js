/**
 * Slice the duration of an audio-stream
 *
 * @module audio-slice
 */

var inherits = require('inherits');
var Transform = require('stream').Transform;
var extend = require('xtend/mutable');
var util = require('pcm-util');


/**
 * @constructor
 */
function AudioSlice (duration) {
	if (!(this instanceof AudioSlice)) return new AudioSlice(duration);

	Transform.call(this);

	if (typeof duration === 'number') {
		duration = {
			duration: duration
		}
	}

	extend(this, duration);

	//precalculate format variables
	util.normalizeFormat(this);

	this.count = 0;
};

inherits(AudioSlice, Transform);


/** Default duration to slice is undefined */
AudioSlice.prototype.duration = Infinity;


/** Transformer */
AudioSlice.prototype._transform = function (chunk, enc, cb) {
	var frameLength = util.getFrameLength(chunk, this);

	//increase generated data counter
	this.count += frameLength;

	// after getting "duration" second of audio, emit "end"
	if (this.count >= this.sampleRate * this.duration) {
		this.push(null);
	}
	//send data
	else {
		this.push(chunk);
	}

	cb();
}


/** Extend default format */
extend(AudioSlice.prototype, util.defaultFormat);



module.exports = AudioSlice;
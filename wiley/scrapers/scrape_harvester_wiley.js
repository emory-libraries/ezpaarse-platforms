#!/usr/bin/env node

'use strict';

var path = require('path');

var bacon = require(path.join(__dirname, '../../.lib/bacon_harvester.js'));

bacon.generatePkb('wiley', function (err, res) {

	if (err) {
		console.error(err);
	}

	console.log(res + ' files created');
	// body...
});
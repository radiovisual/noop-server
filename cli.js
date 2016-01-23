#!/usr/bin/env node
'use strict';
var meow = require('meow');
var noopServer = require('./');

var cli = meow([
	'Usage',
	'  $ noopserver',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ noopserver',
	'  unicorns & rainbows',
	'  $ noopserver ponies',
	'  ponies & rainbows'
]);

noopServer(cli.input[0]).then(function (info) {
	console.log('info: ', info);
});

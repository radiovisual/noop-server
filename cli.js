#!/usr/bin/env node
'use strict';
var meow = require('meow');
var noopServer = require('./');

var cli = meow([
	'Usage',
	'  $ noopserver'
]);

noopServer(cli.input[0]).then(function (info) {
	//console.log('info: ', info);
});

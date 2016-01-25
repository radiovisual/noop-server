#!/usr/bin/env node
'use strict';
var noopServer = require('./');
var chalk = require('chalk');
var meow = require('meow');

var cli = meow([
	'Usage',
	'  $ noopserver'
]);

noopServer(cli.input[0]).then(function (port) {
	console.log(chalk.bgRed('noop-server port:'), chalk.cyan(port));
});

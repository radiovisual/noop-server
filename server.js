#!/usr/bin/env node
'use strict';
var http = require('http');

var argv = require('minimist')(process.argv.slice(2));

var server = http.createServer(function (req, res) {
	res.end('<a href="https://github.com/radiovisual/noop-server">noop-server</a> only serves noop.');
});

function startServer(port) {
	server.listen(port, function (err) {
		if (err) {
			throw err;
		}
		console.log('noop-server is now running');
	});
}

if (!argv.port) {
	console.log('please supply a port number with --port');
	process.exit(1);
} else {
	startServer(argv.port);
}


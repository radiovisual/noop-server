'use strict';
var childProcess = require('child_process');
var portfinder = require('portfinder');
var chalk = require('chalk');
var pify = require('pify');

require('native-promise-only');

module.exports = function (opts) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		pify(portfinder.getPort)().then(function (port) {

			var cp = childProcess.spawn('node', ['./server.js', '--port=' + port], {
				detached: true
			});

			cp.on('error', reject);
			cp.stdout.setEncoding('utf8');

			cp.stdout.on('data', function (data) {
				if (data.trim() === 'noop-server is now running') {
					log(port);
					cp.stdio = ['ignore', 'ignore', 'ignore'];
					resolve(port);
				}
			});

			cp.unref();
		}).catch(function (err) {
			console.log('noop-server not launched.');
			reject(err);
		});
	});
};

function log(port) {
	console.log(chalk.bgRed('noop-server port:'), chalk.cyan(port));
}


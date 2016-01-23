'use strict';
var childProcess = require('child_process');
var portfinder = require('portfinder');
var chalk = require('chalk');
var pify = require('pify');

require('native-promise-only');

var serverInfo = {};

module.exports = function (opts) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		pify(portfinder.getPort)().then(function (port) {
			serverInfo.port = port;
			serverInfo.pid = process.pid;

			var cp = childProcess.spawn('node', ['./server.js', '--port=' + port]);

			cp.stdout.on('error', reject);

			cp.stdout.setEncoding('utf8');

			cp.stdout.on('data', function (data) {
				if (data.trim() === 'ok') {
					log();
					cp.stdio = ['ignore', 'ignore', 'ignore'];
					resolve(serverInfo);
				}
			});
			cp.stderr.on('data', function (data) {
				console.log('cp.stderr: ', data);
			});
			cp.unref();
		}).catch(function (err) {
			console.log('noop-server not launched.');
			reject(err);
		});
	});
};

function log(serverInfo) {
	console.log(chalk.red('noop-server'), chalk.cyan('port:'), chalk.cyan(serverInfo.port));
	console.log(chalk.red('noop-server'), chalk.yellow('pid:'), chalk.yellow(serverInfo.pid));
}


'use strict';
var Promise = require('pinkie-promise');
var portfinder = require('portfinder');
var chalk = require('chalk');
var pify = require('pify');
var serverInfo = {};

var server = require('http').createServer(function (req, res) {
	res.end('noop-server excels at doing nothing.');
});

function killServer() {
	try {
		process.kill(serverInfo.pid, 'SIGKILL');
	} catch (err) {
		console.log('cant killServer with err:', err);
	}
}

process.on('exit', function () {
	killServer();
});

module.exports = function (opts) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		pify(portfinder.getPort)().then(function (port) {
			server.listen(port, function (err) {
				if (err) {
					reject(err);
				}
			});

			serverInfo.port = port;
			serverInfo.pid = process.pid;

			console.log(chalk.red('noop-server'), chalk.cyan('port:'), chalk.cyan(serverInfo.port));
			console.log(chalk.red('noop-server'), chalk.yellow('pid:'), chalk.yellow(serverInfo.pid));

			resolve(serverInfo);
		}).catch(function (err) {
			console.log('noop-server not launched.');
			console.log('err:', err);
		});
	});
};


'use strict';
var http = require('http');
require('native-promise-only');

var server = http.createServer(function (req, res) {
	res.end('<a href="https://github.com/radiovisual/noop-server">noop-server</a> only serves noop.');
});

module.exports = function (opts) {
	opts = opts || {};

	var listener = server.listen(0);

	return new Promise(function (resolve) {
		var port = listener.address().port;
		resolve(port);
	});
};

require('native-promise-only');
import test from 'ava';
import fn from './';

test('get the pid', async t => {
	await fn().then(server => {
		t.true(server.hasOwnProperty('pid'));
		t.is(typeof server.pid, 'number');
		t.true(server.port >= 1);
	});
});

test('get the port', async t => {
	await fn().then(server => {
		t.true(server.hasOwnProperty('port'));
		t.is(typeof server.port, 'number');
		t.true(server.port >= 8000);
	});
});

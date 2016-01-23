import test from 'ava';
import fn from './';

test('get the pid', async t => {
	fn().then(server => {
		t.true(server.hasOwnProperty('pid'));
		t.true(!isNaN(server.pid));
		t.true(server.port >= 1);
	});
});

test('get the port', async t => {
	fn().then(server => {
		t.true(server.hasOwnProperty('port'));
		t.true(!isNaN(server.port));
		t.true(server.port >= 8000);
	});
});

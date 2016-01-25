import test from 'ava';
import fn from './';

test('get the port', async t => {
	await fn().then(port => {
		t.plan(2);
		t.is(typeof port, 'number');
		t.true(port > 0);
	});
});

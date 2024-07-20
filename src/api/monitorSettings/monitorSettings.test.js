'use strict';

const test = require('tape');
const { createRouteTest } = require('../../shared/helperTest');

let token;

test('/GET /login login with known monitor-settings to get token', async (assert) => {
	const route = {
		method: 'GET',
		url: '/login',
		headers: { authorization: 'Basic am9zOnRlc3Q=' },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	// Asign token for further requests
	token = result.token;

	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /login should return a status code of 200';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/DELETE /monitor-settings brings the monitor-settingss DELETE', async (assert) => {
	const route = {
		method: 'DELETE',
		url: '/monitor-settings/2',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 204;
	const message = 'GET /monitor-settings should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/POST /monitor-settings creates a new data', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			deviceId: 5,
			cattleId: 3,
			description: 'ddddd',
		},
		url: '/monitor-settings',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 201;
	const message = 'POST /monitor-settings should return a status code of 201';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/POST /monitor-settings creates a new data', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			deviceId: 2,
			cattleId: 3,
			description: 'ddddd',
		},
		url: '/monitor-settings',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 400;
	const message = 'POST /monitor-settings should return a status code of 400';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/GET /monitor-settings brings the monitor-settingss list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/monitor-settings',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /monitor-settings should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 3;
	const expectedQuantity = true;
	const messageQuantity = `GET /monitor-settings must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

test('/GET /monitor-settings brings the monitor-settingss list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/monitor-settings/1',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /monitor-settings should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/GET /monitor-settings brings the monitor-settingss list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/monitor-settings',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /monitor-settings should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 3;
	const expectedQuantity = true;
	const messageQuantity = `GET /monitor-settings must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

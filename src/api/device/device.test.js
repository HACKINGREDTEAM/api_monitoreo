'use strict';

const test = require('tape');
const { createRouteTest } = require('../../shared/helperTest');

let token;

test('/GET /login login with known device to get token', async (assert) => {
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

test('/POST /device creates a new data', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			name: 'device 1',
			series: 'dsdsds-sas6',
			model: '2019-06-11',
			description: 'ddddd',
		},
		url: '/device',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 201;
	const message = 'POST /device should return a status code of 400';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/GET /device brings the devices list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/device',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /device should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 6;
	const expectedQuantity = true;
	const messageQuantity = `GET /device must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

test('/GET /device brings the devices list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/device/1',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /device should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/DELETE /device brings the devices DELETE', async (assert) => {
	const route = {
		method: 'DELETE',
		url: '/device/2',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 204;
	const message = 'GET /device should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/GET /device brings the devices list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/device',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /device should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 5;
	const expectedQuantity = true;
	const messageQuantity = `GET /device must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

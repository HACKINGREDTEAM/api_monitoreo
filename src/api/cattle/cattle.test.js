'use strict';

const test = require('tape');
const { createRouteTest } = require('../../shared/helperTest');

let token;

test('/GET /login login with known cattle to get token', async (assert) => {
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

test('/POST /cattle creates a new data', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			name: 'Vaca 4',
			age: 6,
			birthdate: '2019-06-11',
			description: 'Vaca 4',
		},
		url: '/cattle',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 201;
	const message = 'POST /cattle should return a status code of 400';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/GET /cattle brings the cattles list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/cattle',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /cattle should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 4;
	const expectedQuantity = true;
	const messageQuantity = `GET /cattle must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

test('/GET /cattle brings the cattles list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/cattle/1',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /cattle should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/DELETE /cattle brings the cattles DELETE', async (assert) => {
	const route = {
		method: 'DELETE',
		url: '/cattle/2',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 204;
	const message = 'GET /cattle should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

test('/GET /cattle brings the cattles list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/cattle',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode, result } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(2);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /cattle should return status code 200';

	assert.equal(actual, expected, message);

	const actualQuantity = Object.keys(result).length === 3;
	const expectedQuantity = true;
	const messageQuantity = `GET /cattle must return ${result.length} registers`;

	assert.equal(actualQuantity, expectedQuantity, messageQuantity);

	assert.end();
});

'use strict';

const test = require('tape');
const moment = require('moment');
const { createRouteTest } = require('../../shared/helperTest');

let token;

test('/POST /monitoring creates a new data return 400', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			monitoringDate: moment().local().format('YYYY-MM-DD HH:mm:ss'),
			frequency: 1,
			temperature: 99.5,
			latitude: -11.89931300000000,
			longitude: -77.0686420000000,
			serie: 'dsdsds-sas1',
		},
		url: '/monitoring',
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 400;
	const message = 'POST /monitoring should return a status code of 400';

	assert.equal(actual, expected, message);

	assert.end();
});

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

test('/POST /monitoring creates a new data return 201', async (assert) => {
	const route = {
		method: 'POST',
		payload: {
			monitoringDate: moment().local().format('YYYY-MM-DD HH:mm:ss'),
			frequency: 1,
			temperature: 99.5,
			latitude: -11.89931300000000,
			longitude: -77.0686420000000,
			serie: 'dsdsds-sas2',
		},
		url: '/monitoring',
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 201;
	const message = 'POST /monitoring should return a status code of 201';

	assert.equal(actual, expected, message);

	assert.end();
});

test('/GET /monitoring brings the monitorings list', async (assert) => {
	const route = {
		method: 'GET',
		url: '/monitoring/1',
		headers: { authorization: `Bearer ${token}` },
	};
	const { statusCode } = await global.serverTest.inject(
		createRouteTest(route),
	);

	assert.plan(1);

	const actual = statusCode;
	const expected = 200;
	const message = 'GET /monitoring should return status code 200';

	assert.equal(actual, expected, message);
	assert.end();
});

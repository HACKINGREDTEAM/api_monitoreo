'use strict';

const handler = require('./login.handler');

const route = {
	handler,
	method: 'GET',
	path: '/',
	options: {
		auth: 'simple',
	},
};

module.exports = route;

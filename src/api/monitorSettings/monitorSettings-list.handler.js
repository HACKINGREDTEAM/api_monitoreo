'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');

async function handler(request) {
	try {
		const list = await MonitorSettings.getAll(request.query);
		return list;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

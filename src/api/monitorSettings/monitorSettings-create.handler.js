'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');

async function handler(request, h) {
	try {
		const data = request.payload;
		const newMonitorSettings = await MonitorSettings.create(data);
		return h.response(newMonitorSettings).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

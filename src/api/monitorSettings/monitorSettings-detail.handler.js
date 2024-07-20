'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');

async function handler(request) {
	try {
		const { id } = request.params;
		const detail = await MonitorSettings.getById(id);
		return detail;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

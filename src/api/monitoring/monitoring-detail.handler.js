'use strict';

const Boom = require('@hapi/boom');
const Monitoring = require('../../models/Monitoring');

async function handler(request) {
	try {
		const { monitorSettingsId } = request.params;
		const detail = await Monitoring.getMonitorSettingsId(monitorSettingsId);
		return detail;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

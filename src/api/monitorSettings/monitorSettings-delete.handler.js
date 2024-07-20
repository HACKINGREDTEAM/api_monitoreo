'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');

async function handler(request, h) {
	try {
		const { id } = request.params;
		await MonitorSettings.removeById(id);

		return h.response().code(204);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

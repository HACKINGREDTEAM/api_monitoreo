'use strict';

const Boom = require('@hapi/boom');
const MonitorSettings = require('../../models/MonitorSettings');

async function handler(request) {
	try {
		const data = request.payload;
		const edit = await MonitorSettings.edit(request.params.id, data);
		return edit;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

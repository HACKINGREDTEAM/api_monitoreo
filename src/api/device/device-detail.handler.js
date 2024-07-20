'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

async function handler(request) {
	try {
		const { id } = request.params;
		const detail = await Device.getById(id);
		return detail;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

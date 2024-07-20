'use strict';

const Boom = require('@hapi/boom');
const Device = require('../../models/Device');

async function handler(request, h) {
	try {
		const { id } = request.params;
		await Device.removeById(id);

		return h.response().code(204);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

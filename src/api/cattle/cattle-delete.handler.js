'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

async function handler(request, h) {
	try {
		const { id } = request.params;
		await Cattle.removeById(id);

		return h.response().code(204);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

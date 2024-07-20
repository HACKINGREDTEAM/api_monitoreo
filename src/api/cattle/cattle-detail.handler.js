'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

async function handler(request) {
	try {
		const { id } = request.params;
		const cattles = await Cattle.getById(id);
		return cattles;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

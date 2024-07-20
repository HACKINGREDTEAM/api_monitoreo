'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

async function handler(request, h) {
	try {
		const data = request.payload;
		const newCattle = await Cattle.create(data);
		return h.response(newCattle).code(201);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

async function handler(request) {
	try {
		const list = await Cattle.getAll(request.query);
		return list;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

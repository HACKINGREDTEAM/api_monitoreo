'use strict';

const Boom = require('@hapi/boom');
const Cattle = require('../../models/Cattle');

const { existingNotCattle } = require('../shared/error_codes');

async function validateById(request) {
	try {
		const { id } = request.params;
		const cattles = await Cattle.getById(id);
		return cattles || Boom.badRequest(existingNotCattle);
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

const pre = {
	validateById,
};

module.exports = pre;

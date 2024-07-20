'use strict';

const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');

const User = require('../../models/User');

const saltRounds = process.env.SALT_ROUNDS || 10;

async function handler(request) {
	try {
		let newUser = null;
		const data = request.payload;
		const hashedPasswd = await Bcrypt.hash(data.password, saltRounds);
		data.password = hashedPasswd;
		delete data.confirmPassword;
		newUser = await User.edit(request.params.id, data);
		delete newUser.password;
		return newUser;
	} catch (error) {
		return Boom.badImplementation(error, error);
	}
}

module.exports = handler;

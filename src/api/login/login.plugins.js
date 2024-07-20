'use strict';

const login = require('./login.route');

function register(server) {
	server.route(login);
}

const plugin = {
	name: 'login-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;

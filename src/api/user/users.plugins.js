'use strict';

const usersCreateRoute = require('./users-create.route');
const usersDeleteRoute = require('./users-delete.route');
const usersDetailRoute = require('./users-detail.route');
const usersListRoute = require('./users-list.route');
const usersEditRoute = require('./users-edit.route');

function register(server) {
	server.route(usersCreateRoute);
	server.route(usersDeleteRoute);
	server.route(usersDetailRoute);
	server.route(usersListRoute);
	server.route(usersEditRoute);
}

const plugin = {
	name: 'users-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;

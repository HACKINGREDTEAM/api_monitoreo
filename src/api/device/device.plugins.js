'use strict';

const deviceCreateRoute = require('./device-create.route');
const deviceDeleteRoute = require('./device-delete.route');
const deviceDetailRoute = require('./device-detail.route');
const deviceListRoute = require('./device-list.route');
const deviceEditRoute = require('./device-edit.route');

function register(server) {
	server.route(deviceCreateRoute);
	server.route(deviceDeleteRoute);
	server.route(deviceDetailRoute);
	server.route(deviceListRoute);
	server.route(deviceEditRoute);
}

const plugin = {
	name: 'device-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;

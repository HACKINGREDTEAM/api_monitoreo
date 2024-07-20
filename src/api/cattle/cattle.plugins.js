'use strict';

const cattleCreateRoute = require('./cattle-create.route');
const cattleDeleteRoute = require('./cattle-delete.route');
const cattleDetailRoute = require('./cattle-detail.route');
const cattleListRoute = require('./cattle-list.route');
const cattleEditRoute = require('./cattle-edit.route');

function register(server) {
	server.route(cattleCreateRoute);
	server.route(cattleDeleteRoute);
	server.route(cattleDetailRoute);
	server.route(cattleListRoute);
	server.route(cattleEditRoute);
}

const plugin = {
	name: 'cattle-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;

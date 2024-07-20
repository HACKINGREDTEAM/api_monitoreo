'use strict';

const monitorSettingsCreateRoute = require('./monitorSettings-create.route');
const monitorSettingsDeleteRoute = require('./monitorSettings-delete.route');
const monitorSettingsDetailRoute = require('./monitorSettings-detail.route');
const monitorSettingsListRoute = require('./monitorSettings-list.route');
const monitorSettingsEditRoute = require('./monitorSettings-edit.route');

function register(server) {
	server.route(monitorSettingsCreateRoute);
	server.route(monitorSettingsDeleteRoute);
	server.route(monitorSettingsDetailRoute);
	server.route(monitorSettingsListRoute);
	server.route(monitorSettingsEditRoute);
}

const plugin = {
	name: 'monitorSettings-api',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;

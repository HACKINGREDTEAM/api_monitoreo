'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = function upMigration(knex) {
	return knex.schema.createTableIfNotExists('monitor_settings', (table) => {
		table.increments().primary();
		table.integer('device_id').unsigned();
		table.foreign('device_id').references('device.id');
		table.integer('cattle_id').unsigned();
		table.foreign('cattle_id').references('cattle.id');
		table.text('description');
		helper.defaultColumns(table);
	});
};

exports.down = function downMigration(knex) {
	return knex.schema.dropTable('monitor_settings');
};

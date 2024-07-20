'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = function upMigration(knex) {
	return knex.schema.createTableIfNotExists('monitoring', (table) => {
		table.increments().primary();
		table.integer('monitor_settings_id').unsigned();
		table.foreign('monitor_settings_id').references('monitor_settings.id');
		table.timestamp('monitoring_date').nullable();
		table.integer('frequency').notNullable();
		table.decimal('temperature', 19, 16).notNullable();
		table.decimal('latitude', 19, 16).notNullable();
		table.decimal('longitude', 19, 16).notNullable();
		table.text('description');
		helper.defaultColumns(table);
	});
};

exports.down = function downMigration(knex) {
	return knex.schema.dropTable('monitoring');
};

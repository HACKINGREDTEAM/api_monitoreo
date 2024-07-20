'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = function upMigration(knex) {
	return knex.schema.createTableIfNotExists('device', (table) => {
		table.increments().primary();
		table.string('name').notNullable();
		table.string('series').unique().notNullable();
		table.string('model').notNullable();
		table.text('description');
		helper.defaultColumns(table);
	});
};

exports.down = function downMigration(knex) {
	return knex.schema.dropTable('device');
};

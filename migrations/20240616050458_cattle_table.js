'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = function upMigration(knex) {
	return knex.schema.createTableIfNotExists('cattle', (table) => {
		table.increments().primary();
		table.string('name').notNullable();
		table.integer('age').notNullable();
		table.date('birthdate').notNullable();
		table.text('description');
		helper.defaultColumns(table);
	});
};

exports.down = function downMigration(knex) {
	return knex.schema.dropTable('cattle');
};

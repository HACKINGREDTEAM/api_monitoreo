'use strict';

const helper = require('../src/shared/helperMigration');

exports.up = function upMigration(knex) {
	return knex.schema.createTableIfNotExists('user', (table) => {
		table.increments().primary();
		table.string('username', 12).unique().notNullable();
		table.string('password', 124).notNullable();
		table.string('email', 50).unique().notNullable();
		table.string('group', 10);
		table.text('description');
		helper.defaultColumns(table);
	});
};

exports.down = function downMigration(knex) {
	return knex.schema.dropTable('user');
};

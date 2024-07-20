'use strict';

exports.up = function(knex) {
    return knex.schema.alterTable('cattle', (table) => {
		table.string('race').nullable();
        table.string('color').nullable();
        table.string('sex').nullable();
        table.string('earring_number').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('cattle', (table) => {
        table.dropColumn('race');
        table.dropColumn('color');
        table.string('sex').nullable();
        table.string('earring_number').nullable();
    });
};

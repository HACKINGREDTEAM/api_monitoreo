exports.seed = async function (knex) {
	await knex('user').del();
	await knex('monitoring').del();
	await knex('monitor_settings').del();
	await knex('cattle').del();
	await knex('device').del();
};

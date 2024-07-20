exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('monitor_settings').del();
	await knex('monitor_settings').insert([
		{
			id: 1,
			device_id: 1,
			cattle_id: 1,
			description: 'ddddd',
		},
		{
			id: 2,
			device_id: 1,
			cattle_id: 2,
			description: 'ddddd',
		},
		{
      		id: 3,
			device_id: 3,
			cattle_id: 3,
			description: 'ddddd',
		},
	]);
};

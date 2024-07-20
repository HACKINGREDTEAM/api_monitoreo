exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('user').del()
    await knex('user').insert([
        {
            id: 1,
            username: 'jos',
            password: '$2b$10$VnN.arr20V.P27V..eIMzuA.vslvZuvCQ4ZWJ/NCqPhaSUVG9Ok5i',  //test
            email: 'admin@test.com',
            group: 'admin',
        },
        {
            id: 2,
            username: 'superadmin',
            password: '$2b$10$wbn9y.jBAPo9nsm8nspEeuK5sFuj2dWB9P1U0VGa37bE6OecDm7Vi',  //super-admin
            email: 'superadmin@test.com',
            group: 'admin',
        },
    ]);
};
  
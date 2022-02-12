
exports.up = function (knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {

};

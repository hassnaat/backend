
exports.up = function (knex) {
    return knex.schema.createTable('borrowed', (table) => {
        table.increments('borrow_id').primary();
        table.integer('borrowed_by').unsigned().notNullable();
        table.integer('book').unsigned().notNullable();
        table.foreign('borrowed_by').references(["student.id"]);
        table.foreign('book').references("book.id");
        table.string('return_date');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {

};

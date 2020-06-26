
exports.up = function(knex) {
    return knex.schema.createTable('cor_objeto', function(table){
        table.increments('id').primary();
        table.string('descricao', 100).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cor_objeto');
};

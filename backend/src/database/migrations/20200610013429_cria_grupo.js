
exports.up = function(knex) {
    return knex.schema.createTable('grupo', function(table){
        table.increments('id').primary();
        table.string('descricao', 200).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('grupo');
};

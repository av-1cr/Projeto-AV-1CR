exports.up = function(knex) {
    return knex.schema.createTable('esfera_publica', function(table){
        table.increments('id').primary();
        table.string('descricao', 200).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('esfera_publica');
};

exports.up = function(knex) {
    return knex.schema.createTable('tipo_policiamento', function(table){
        table.increments('id').primary();
        table.string('descricao', 100).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipo_policiamento');
};

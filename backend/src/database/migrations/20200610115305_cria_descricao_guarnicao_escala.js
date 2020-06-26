
exports.up = function(knex) {
    return knex.schema.createTable('descricao_guarnicao_escala', function(table){
        table.increments('id').primary();
        table.integer('id_tipo_policiamento').notNullable();
        table.string('descricao', 200).notNullable();

        table.foreign('id_tipo_policiamento').references('id').inTable('tipo_policiamento');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('descricao_guarnicao_escala');
};

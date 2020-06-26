
exports.up = function(knex) {
    return knex.schema.createTable('equipe_funcao', function(table){
        table.increments('id').primary();
        table.integer('id_tipo_policiamento').notNullable();
        table.string('funcao').notNullable();

        table.foreign('id_tipo_policiamento').references('id').inTable('tipo_policiamento');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('equipe_funcao');
};

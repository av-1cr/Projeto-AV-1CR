
exports.up = function(knex) {
    return knex.schema.createTable('evento', function(table){
        table.increments('id').primary();
        table.integer('id_unidade').notNullable();
        table.integer('id_tipo_evento').notNullable();
        table.integer('id_acao').notNullable();
        table.datetime('data').notNullable();
        table.string('descricao', 200).notNullable();
        table.integer('latitude').notNullable();
        table.integer('longitude').notNullable();
        table.string('num_bo', 100);
        table.date('data_bo');

        table.foreign('id_unidade').references('id').inTable('unidade');
        table.foreign('id_tipo_evento').references('id').inTable('tipo_evento');
        table.foreign('id_acao').references('id').inTable('acao');
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('evento');
};

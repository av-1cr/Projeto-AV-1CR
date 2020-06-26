
exports.up = function(knex) {
    return knex.schema.createTable('veiculo', function(table){
        table.increments('id').primary();
        table.integer('id_estado').notNullable();
        table.integer('id_cidade').notNullable();
        table.integer('id_tipo_veiculo').notNullable();
        table.integer('id_marca_veiculo').notNullable();
        table.integer('id_modelo_veiculo').notNullable();
        table.string('placa', 8).notNullable();
        table.string('descricao', 200).notNullable();
        table.float('quantidade').notNullable();
        table.integer('id_cor').notNullable();
        table.integer('id_evento').notNullable();

        table.foreign('id_evento').references('id').inTable('evento');
        table.foreign('id_cor').references('id').inTable('cor_objeto');
        table.foreign('id_estado').references('id').inTable('estado');
        table.foreign('id_cidade').references('id').inTable('cidade');
        table.foreign('id_tipo_veiculo').references('id').inTable('tipo_veiculo');
        table.foreign('id_marca_veiculo').references('id').inTable('marca_veiculo');
        table.foreign('id_modelo_veiculo').references('id').inTable('modelo_veiculo');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('veiculo');
};

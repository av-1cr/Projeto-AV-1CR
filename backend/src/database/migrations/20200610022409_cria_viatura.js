exports.up = function(knex) {
    return knex.schema.createTable('viatura', function(table){
        table.increments('id').primary();
        table.integer('id_estado').notNullable();
        table.integer('id_cidade').notNullable();
        table.integer('id_esfera_publica').notNullable();
        table.integer('id_instituicao').notNullable();
        table.integer('id_unidade').notNullable();
        table.integer('id_tipos_veiculo').notNullable();
        table.integer('id_marca_veiculo').notNullable();
        table.integer('id_modelo_veiculo').notNullable();
        table.string('placa', 8).notNullable();
        table.string('descricao', 100).notNullable();
        table.integer('id_tipo_policiamento').notNullable();
        table.integer('id_status').notNullable();

        table.foreign('id_estado').references('id').inTable('estado');
        table.foreign('id_cidade').references('id').inTable('cidade');
        table.foreign('id_esfera_publica').references('id').inTable('esfera_publica');
        table.foreign('id_instituicao').references('id').inTable('instituicao');
        table.foreign('id_unidade').references('id').inTable('unidade');
        table.foreign('id_tipos_veiculo').references('id').inTable('tipo_veiculo');
        table.foreign('id_marca_veiculo').references('id').inTable('marca_veiculo');
        table.foreign('id_modelo_veiculo').references('id').inTable('modelo_veiculo');
        table.foreign('id_status').references('id').inTable('status');
        table.foreign('id_tipo_policiamento').references('id').inTable('tipo_policiamento');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('viatura');
};

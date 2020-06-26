
exports.up = function(knex) {
  return knex.schema.createTable('setor_local', function(table){
    table.increments('id').primary();
    table.integer('id_estado').notNullable();
    table.integer('id_cidade').notNullable();
    table.integer('id_esfera_publica').notNullable();
    table.integer('id_instituicao').notNullable();
    table.integer('id_unidade').notNullable();
    table.string('descricao', 200).notNullable();

    table.foreign('id_estado').references('id').inTable('estado');
    table.foreign('id_cidade').references('id').inTable('cidade');
    table.foreign('id_esfera_publica').references('id').inTable('esfera_publica');
    table.foreign('id_instituicao').references('id').inTable('instituicao');
    table.foreign('id_unidade').references('id').inTable('unidade');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('setor_local');
};

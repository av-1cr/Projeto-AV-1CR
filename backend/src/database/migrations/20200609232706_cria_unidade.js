
exports.up = function(knex) {
  return knex.schema.createTable('unidade', function(table){
    table.increments('id').primary();
    table.integer('id_estado').notNullable();
    table.integer('id_cidade').notNullable();
    table.integer('id_instituicao').notNullable();
    table.string('descricao', 200).notNullable();
    table.string('acronimo', 100).notNullable();
    table.date('data_lancamento');
    table.date('data_atualizacao');

    table.foreign('id_estado').references('id').inTable('estado');
    table.foreign('id_cidade').references('id').inTable('cidade');
    table.foreign('id_instituicao').references('id').inTable('instituicao');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('unidade');
};

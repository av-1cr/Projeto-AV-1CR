
exports.up = function(knex) {
  return knex.schema.createTable('relacao_unidade', function(Table){
    Table.increments('id').primary();
    Table.integer('unidade_pai');
    Table.integer('unidade_filho');
    Table.date('data_lancamento');
    Table.date('data_atualizacao');

    Table.foreign('unidade_pai').references('id').inTable('unidade');
    Table.foreign('unidade_filho').references('id').inTable('unidade');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('relacao_unidade');
};

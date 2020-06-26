
exports.up = function(knex) {
    return knex.schema.createTable('estado', function(table){
        table.increments('id').primary();
        table.string('descricao', 100).notNullable();
        table.string('sigla', 2).notNullable();
        table.date('data_lancamento').notNullable();
        table.date('data_atualizacao').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('estado');
};

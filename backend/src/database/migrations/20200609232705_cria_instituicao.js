
exports.up = function(knex) {
  return knex.schema.createTable('instituicao', function(table){
      table.increments('id').primary();
      table.integer('id_estado').notNullable();
      table.integer('id_cidade').notNullable();
      table.integer('id_esfera_publica').notNullable();
      table.string('descricao', 200).notNullable();
      table.date('data_lancamento');
      table.date('data_atualizacao');
      
      table.foreign('id_estado').references('id').inTable('estado');
      table.foreign('id_cidade').references('id').inTable('cidade');
      table.foreign('id_esfera_publica').references('id').inTable('esfera_publica');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('instituicao');
}
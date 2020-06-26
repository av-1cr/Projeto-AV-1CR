
exports.up = function(knex) {
  return knex.schema.createTable('relacao_evento_usuario', function(table){
    table.increments('id').primary();
    table.integer('id_usuario').notNullable();
    table.integer('id_evento').notNullable();

    table.foreign('id_evento').references('id').inTable('evento');
    table.foreign('id_usuario').references('id').inTable('usuario');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('relacao_evento_usuario');
};

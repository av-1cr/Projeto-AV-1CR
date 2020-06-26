
exports.up = function(knex) {
  return knex.schema.createTable('tipo_entorpecente', function(table){
    table.increments('id').primary();
    table.string('descricao', 100);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipo_entorpecente');
};

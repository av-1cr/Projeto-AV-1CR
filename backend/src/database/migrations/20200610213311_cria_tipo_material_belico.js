
exports.up = function(knex) {
  return knex.schema.createTable('tipo_material_belico', function(table){
        table.increments('id').primary();
        table.string('descricao', 200);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tipo_material_belico');
};

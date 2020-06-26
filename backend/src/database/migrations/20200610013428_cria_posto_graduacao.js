
exports.up = function(knex) {
    return knex.schema.createTable('posto_graduacao', function(table){
        table.increments('id').primary();
        table.string('descricao', 1150).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posto_graduacao');
};

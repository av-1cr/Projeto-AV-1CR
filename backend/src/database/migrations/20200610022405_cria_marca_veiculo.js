
exports.up = function(knex) {
    return knex.schema.createTable('marca_veiculo', function(table){
        table.increments('id').primary();
        table.varchar('descricao');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('marca_veiculo');
};

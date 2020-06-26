
exports.up = function(knex) {
    return knex.schema.createTable('modelo_veiculo', function(table){
        table.increments('id').primary();
        table.integer('id_marca_veiculo').notNullable();
        table.string('descricao', 100);

        table.foreign('id_marca_veiculo').references('id').inTable('marca_veiculo');
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('modelo_veiculo');
};

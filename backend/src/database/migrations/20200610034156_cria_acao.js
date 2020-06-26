
exports.up = function(knex) {
    return knex.schema.createTable('acao', function(table){
        table.increments('id').primary();
        table.string('descricao', 200).notNullable();
        table.string('observacoes', 400);
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('acao');
};

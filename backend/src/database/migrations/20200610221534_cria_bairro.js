
exports.up = function(knex) {
    return knex.schema.createTable('bairro', function(table){
        table.increments('id').primary();
        table.integer('id_estado').notNullable();
        table.integer('id_cidade').notNullable();
        table.string('descricao', 200).notNullable();

        table.foreign('id_estado').references('id').inTable('estado');
        table.foreign('id_cidade').references('id').inTable('cidade');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('bairro');
};

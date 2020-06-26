
exports.up = function(knex) {
    return knex.schema.createTable('log', function(table){
    table.increments('id').primary();
    table.timestamp('data').notNullable();
    table.integer('id_usuario').notNullable();
    table.string('ip_address', 50).notNullable();
    table.string('action', 100).notNullable();
    table.string('descricao', 100);

    table.foreign('id_usuario').references('id').inTable('usuario');
    });
};

exports.down = function(knex){
    return knex.schema.dropTable('log');
};

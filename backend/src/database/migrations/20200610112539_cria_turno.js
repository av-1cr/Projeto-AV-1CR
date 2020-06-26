
exports.up = function(knex) {
    return knex.schema.createTable('turno', function(table){
        table.increments('id').primary();
        table.timestamp('data_hora_in').notNullable();
        table.timestamp('data_hora_out').notNullable();
        table.string('representacao_turno', 200).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('turno');
};

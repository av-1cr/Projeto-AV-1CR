
exports.up = function(knex) {
    return knex.schema.createTable('entorpecente', function(table){
        table.increments('id').primary();
        table.integer('id_tipo_entorpecente').notNullable();
        table.string('envolucro', 100).notNullable();
        table.string('descricao', 200);
        table.float('quantidade', 2);
        table.integer('id_evento').notNullable();

        table.foreign('id_evento').references('id').inTable('evento');
        table.foreign('id_tipo_entorpecente').references('id').inTable('tipo_entorpecente');
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('entorpecente');
};

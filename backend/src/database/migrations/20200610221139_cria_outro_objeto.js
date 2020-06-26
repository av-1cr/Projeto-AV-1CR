
exports.up = function(knex) {
    return knex.schema.createTable('outro_objeto', function(table){
        table.increments('id').primary();
        table.string('descricao', 300);
        table.float('quantidade');
        table.integer('id_cor_objeto').notNullable();
        table.integer('id_evento').notNullable();

        table.foreign('id_evento').references('id').inTable('evento');
        table.foreign('id_cor_objeto').references('id').inTable('cor_objeto');
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('outro_objeto');
};

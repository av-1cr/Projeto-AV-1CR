
exports.up = function(knex) {
    return knex.schema.createTable('material_belico', function(table){
        table.increments('id').primary();
        table.integer('id_tipo_material_belico').notNullable();
        table.string('calibre', 100).notNullable();
        table.string('fabricante', 100);
        table.string('descricao', 200);
        table.float('quantidade', 2).notNullable();
        table.integer('id_cor_objeto').notNullable();
        table.integer('id_evento').notNullable();

        table.foreign('id_evento').references('id').inTable('evento');
        table.foreign('id_cor_objeto').references('id').inTable('cor_objeto');
        table.foreign('id_tipo_material_belico').references('id').inTable('tipo_material_belico');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('material_belico');
};

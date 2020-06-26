
exports.up = function(knex) {
    return knex.schema.createTable('equipe', function(table){
        table.increments('id').primary();
        table.integer('id_check').notNullable();
        table.integer('id_usuario').notNullable();
        table.integer('id_usuario_parceiro').notNullable();
        table.date('data_entrada').notNullable();
        table.integer('id_descricao_guarnicao_escala').notNullable();

        table.foreign('id_check').references('id').inTable('check');
        table.foreign('id_usuario').references('id').inTable('usuario');
        table.foreign('id_usuario_parceiro').references('id').inTable('usuario');
        table.foreign('id_descricao_guarnicao_escala').references('id').inTable('descricao_guarnicao_escala');
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('equipe');
};

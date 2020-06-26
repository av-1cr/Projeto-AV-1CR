
exports.up = function(knex) {
    return knex.schema.createTable('check', function(table){
        table.increments('id').primary();
        table.timestamp('data').notNullable();
        table.integer('id_usuario').notNullable();
        table.integer('id_unidade').notNullable();
        table.integer('id_turno');
        table.string('ip', 50).notNullable();
        table.integer('id_viatura');
        table.integer('id_equipe_funcao');
        table.timestamp('check_in_confirmado');
        table.timestamp('check_out_em').notNullable();

        table.foreign('id_usuario').references('id').inTable('usuario');
        table.foreign('id_unidade').references('id').inTable('unidade');
        table.foreign('id_turno').references('id').inTable('turno');
        table.foreign('id_viatura').references('id').inTable('viatura');
        table.foreign('id_equipe_funcao').references('id').inTable('equipe_funcao');
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('check');
};

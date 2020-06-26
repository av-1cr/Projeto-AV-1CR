
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function(table){
        table.increments('id').primary();
        table.string('nome', 100).notNullable();
        table.string('qra', 100).notNullable();
        table.string('cpf', 14).notNullable();
        table.string('rgpm', 10).notNullable();
        table.integer('id_estado').notNullable();
        table.integer('id_cidade').notNullable();
        table.integer('id_esfera_publica').notNullable();
        table.integer('id_instituicao').notNullable();
        table.integer('id_unidade').notNullable();
        table.integer('id_setor_local').notNullable();
        table.string('telefone', 12).notNullable();
        table.string('email', 100).notNullable();
        table.integer('id_grupo').notNullable();
        table.string('prov_adm', 200).notNullable();
        table.integer('id_status').notNullable();
        table.integer('id_posto_graduacao').notNullable();
        
        table.foreign('id_estado').references('id').inTable('estado');
        table.foreign('id_cidade').references('id').inTable('cidade');
        table.foreign('id_esfera_publica').references('id').inTable('esfera_publica');
        table.foreign('id_instituicao').references('id').inTable('instituicao');
        table.foreign('id_unidade').references('id').inTable('unidade');
        table.foreign('id_setor_local').references('id').inTable('setor_local');
        table.foreign('id_status').references('id').inTable('status');
        table.foreign('id_grupo').references('id').inTable('grupo');
        table.foreign('id_posto_graduacao').references('id').inTable('posto_graduacao');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};

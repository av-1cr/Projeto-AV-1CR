
exports.up = function(knex) {
  return knex.schema.createTable('pessoa', function(table){
    table.increments('id').primary();
    table.string('nome', 100).notNullable();
    table.string('sobrenome', 100).notNullable();
    table.string('rg', 10).notNullable();
    table.string('cpf', 14).notNullable();
    table.string('mae', 200);
    table.string('pai', 200);
    table.string('compleicao', 100).notNullable();
    table.string('cutis', 100).notNullable();
    table.float('altura').notNullable();
    table.string('tatuagens', 300);
    table.string('cicatrizes', 300);
    table.integer('id_estado');
    table.integer('id_cidade');
    table.integer('id_bairro');
    table.string('endereco', 200);
    table.string('complemento', 100);
    table.integer('id_evento').notNullable();

    table.foreign('id_evento').references('id').inTable('evento');
    table.foreign('id_estado').references('id').inTable('estado');
    table.foreign('id_cidade').references('id').inTable('cidade');
    table.foreign('id_bairro').references('id').inTable('bairro');
  });
};

exports.down = function(knex) {
    return knex.schema.createTable('pessoa');
};

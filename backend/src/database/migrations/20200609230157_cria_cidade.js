exports.up = function(knex) {
    return knex.schema.createTable('cidade', function(table){
        table.increments('id');
        table.integer('id_estado');
        table.string('descricao', 200);
        table.date('data_lancamento');
        table.date('data_atualizacao');
        
        table.foreign('id_estado').references('id').inTable('estado');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('cidade');
  };

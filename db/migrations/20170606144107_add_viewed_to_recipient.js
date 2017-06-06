
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipients', function(table) {
      table.string('viewed').notNullable().defaultTo('false');
    })
  ]);
  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipients', function(table) {
      table.dropColumn('viewed');
    })
  ]);
};

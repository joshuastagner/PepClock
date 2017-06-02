
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('contributions', function(table) {
      table.integer('user_id').references('id').inTable('profiles');
    })
  ]);  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('contributions', function(table) {
      table.dropColumn('user_id');
    })
  ]);
};

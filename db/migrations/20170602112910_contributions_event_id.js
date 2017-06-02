
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('contributions', function(table) {
      table.integer('event_id').references('id').inTable('events');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('contributions', function(table) {
      table.dropColumn('event_id');
    })
  ]);
};


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invitations', function(table) {
      table.boolean('sent').notNullable().defaultTo(true);
    }),

    knex.schema.table('events', function(table) {
      table.dateTime('delivery_time').notNullable().defaultTo('2000-01-01 23:00:00');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invitations', function(table) {
      table.dropColumn('sent');
    }),

    knex.schema.table('events', function(table) {
      table.dropColumn('delivery_time');
    })
  ]);
};

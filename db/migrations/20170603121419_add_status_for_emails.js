exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invitations', function(table) {
      table.dropColumn('sent');
      table.string('status').notNullable().defaultTo('not sent');
    }),

    knex.schema.table('events', function(table) {
      table.string('status').notNullable().defaultTo('not sent');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('invitations', function(table) {
      table.boolean('sent').notNullable().defaultTo(false);
      table.dropColumn('status');
    }),

    knex.schema.table('events', function(table) {
      table.dropColumn('status');
    })
  ]);
};

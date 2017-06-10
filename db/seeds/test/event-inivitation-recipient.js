const models = require('../../models');

exports.seed = function(knex, Promise) {

  var date = new Date(Number.parseInt(1498173960000));

  return models.Profile.where({email: 'test-user@test.com'}).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'Gary',
        last: 'Pepperoni',
        display: 'Pizza Guy',
        email: 'test-user@test.com',
        two_factor_enabled: 1
      }).save();
    })
    .then((profile) => {
      return models.Event.forge({
        title: 'Test Event',
        creator_id: profile.attributes.id,
        delivery_time: date
      }).save();
    })
    .then((event) => {
      return models.Recipient.forge({
        first_name: 'Hot',
        last_name: 'Dog',
        email: 'hotdog@ketchup.com',
        event_id: event.attributes.id
      }).save();
    })
    .tap((event) => {
      return models.Invitation.forge({
        email: 'test2@test.com',
        event_id: event.attributes.id,
        rsvp: 'false',
        status: 'not sent'
      }).save();
    })
    .catch((err) => {
      console.log(err);
    });
};

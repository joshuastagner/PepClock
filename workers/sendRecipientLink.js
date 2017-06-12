const models = require('../db/models');
const email = require('./utils/email');

class sendRecipientLink {
  constructor() {
    this.event = null;
  }

  work (cb) {
    this.getEventsToDeliver((err, data) => {
      if (err) {
        cb(err);
      } else {
        this.sendRecipientEmail(data, (err, data) => {
          if (err) {
            cb(err);
          } else {
            this.updateEventStatus('sent', (err, data) => {
              cb(err, data);
            });
          }
        });
      }
    });
  }

  getEventsToDeliver (cb) {
    models.Event
    .where('delivery_time', '<', 'now()')
    .where({status: 'not sent'})
    .fetch({withRelated: ['recipient']})
        .then(model => {
          if (model) {
            this.event = model;
            const { id: eventId, title } = model.attributes;
            const { first_name: firstName, last_name: lastName, email, id: inviteId } = model.relations.recipient.attributes;

            const result = {
              inviteId,
              eventId,
              title,
              firstName,
              lastName,
              email
            };

            cb(null, result);
          } else {
            cb('No events to send', null);
          }
        });
  }

  sendRecipientEmail (recipient, cb) {
    const link = `${recipient.title}: http://localhost:3000/events/${recipient.eventId}?recipient=${recipient.inviteId}`;
    email.sendToRecipient(link, recipient.email, cb);
  }

  updateEventStatus (status, cb) {
    this.event.save({status: status}, {method: 'update'})
      .then(response => {
        cb(null, response);
        return null;
      })
      .catch(err => cb(err, null));
  }
}

module.exports = sendRecipientLink;

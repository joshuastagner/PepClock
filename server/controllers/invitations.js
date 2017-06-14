const models = require('../../db/models');
const collections = require('../../db/collections');
const db = require('../../db/index');

module.exports.delete = (req, res) => {
  models.Invitation.where({id: req.params.id}).destroy()
  .then(function(result) {
    res.status(200).send(result);
  })
  .catch(function(error) {
    res.status(500).send(error);
  });
};

module.exports.create = (req, res) => {
  models.Invitation.forge({email: req.body.email, event_id: req.body.eventId, rsvp: 0, status: 'not sent'}).save()
  .then(function(result) {
    res.status(200).send(result);
  })
  .catch(function(error) {
    res.status(500).send(error);
  });
};

module.exports.retrieve = (req, res) => {
  models.Event.query(function(qb) {
    qb.select('invitations.id', 'events.title', 'recipients.first_name', 'recipients.last_name', 'invitations.event_id');
    qb.innerJoin('invitations', 'invitations.event_id', 'events.id');
    qb.where('invitations.email', '=', req.user.email);
    qb.where('invitations.rsvp', '=', 'false');
    qb.innerJoin('recipients', 'recipients.event_id', 'events.id');
  }).fetchAll()
    .then((result) => {
      res.status(200).send(result);
    });
};

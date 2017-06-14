const models = require('../../db/models');
const collections = require('../../db/collections');

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
    qb.innerJoin('invitations', 'invitations.event_id', 'events.id');
    qb.where('invitations.email', '=', req.user.email);
    qb.where('invitations.rsvp', '=', 'false');
    qb.innerJoin('recipients', 'recipients.event_id', 'events.id');
  }).fetchAll({withRelated: ['invitations', 'recipient']})
    .then((result) => {
      result.models.forEach((event) => {
        event.relations.invitations.models = event.relations.invitations.models.filter((invite) => {
          return invite.attributes.email === req.user.email;
        });
      });
      res.status(200).send(result);
    });
};

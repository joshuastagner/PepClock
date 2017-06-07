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

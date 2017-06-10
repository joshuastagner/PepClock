const models = require('../../db/models');
const collections = require('../../db/collections');
const moment = require('moment');

module.exports.create = (req, res) => {
  var date = moment(req.body.deliveryTime).utc().format();
  models.Event.forge({title: req.body.eventName, creator_id: req.session.passport.user, delivery_time: date})
    .save()
    .tap(result => {
      return models.Recipient
        .forge({first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email, event_id: result.id})
        .save();
    })
    .tap(result => {
      return models.Contributor
        .forge({user_id: req.session.passport.user,
          event_id: result.id,
          role: 'admin'})
        .save();
    })
    .tap(result => {
      let inviteList = [];
      req.body.inviteEmails.forEach(email => {
        inviteList.push({email: email, event_id: result.id, rsvp: 'false', status: 'not sent'});
      });
      let invites = collections.Invitations.forge(inviteList);
      return invites.invokeThen('save');
    })
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports.getAll = (req, res) => {
  models.Event.fetchAll()
    .then(events => {
      res.status(200).send(events);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getById = (req, res) => {
  models.Event.where({ id: req.params.id }).fetch({withRelated: ['invitations', 'recipient']})
    .then(event => {
      res.status(200).send(event);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports.getEventsByContributor = (req, res) => {
  models.Contributor.where({user_id: req.user.id}).fetchAll({withRelated: ['event']})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.update = (req, res) => {
  models.Event.where({ id: req.params.id }).fetch({withRelated: ['recipient']})
    .then(event => {
      event.set({
        title: req.body.eventName,
        delivery_time: moment(req.body.deliveryTime).utc().format()
      }).save()
      .tap(event => {
        event.related('recipient').set({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email
        }).save();
      });
      res.status(200).send(event);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};


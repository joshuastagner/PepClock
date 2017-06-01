const models = require('../../db/models');

module.exports.create = (req, res) => {
  console.log(req.body);
  models.Event.forge({title: req.body.eventName, creator_id: req.session.passport.user})
    .save()
    .tap(result => {
      return models.Recipient
        .forge({first_name: req.body.firstName, last_name: req.body.lastName, email: req.body.email, event_id: result.id})
        .save();
    })
    .then(result => {
      
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  //first create the event and get the event ID

  //then create the recipient.

  //then create the invites


  // models.Event.forge({ username: req.body.username, password: req.body.password })
  //   .save()
  //   .then(result => {
  //     res.status(201).send(result.omit('password'));
  //   })
  //   .catch(err => {
  //     if (err.constraint === 'users_username_unique') {
  //       return res.status(403);
  //     }
  //     res.status(500).send(err);
  //   });
};

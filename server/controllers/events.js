const models = require('../../db/models');

module.exports.create = (req, res) => {
  console.log(req.session);
  console.log(req.body);
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
  res.send();
};

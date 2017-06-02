const models = require('../../db/models');

module.exports.create = (req, res) => {

  models.Contributor.where({user_id: req.session.passport.user}).fetch().then(function(result) {
    models.Contribution.forge({
      text: req.body.contributionText,
      type: 'message',
      contributor_id: result.id,
      event_id: req.body.eventId,
      user_id: req.session.passport.user 
    })
    .save()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports.getByEvent = (req, res) => {
  console.log(req.params.id);
  models.Contribution.where({event_id: req.params.id}).fetchAll({withRelated: ['user']}).then(result =>{ 
    res.status(200).send(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
};

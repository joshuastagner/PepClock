const models = require('../../db/models');

module.exports.create = (req, res) => {
    models.Contributor.where({user_id: req.session.passport.user, event_id: req.body.eventId}).fetch().then(function(result){
      models.Contribution.forge({
      text: req.body.contributionText,
      type: 'message',
      contributor_id: result.id
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
}

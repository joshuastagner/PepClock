const models = require('../../db/models');

module.exports.create = (req, res) => {
  // console.log(req.body);
    models.Contributor.where({user_id: req.session.passport.user, event_id: req.body.eventId}).fetch().then(function(result){
      console.log(result);
      models.Contribution.forge({
      text: req.body.contributionText,
      type: 'message',
      contributor_id: result.id
    })
    .save()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  });
}

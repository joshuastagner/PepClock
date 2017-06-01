const models = require('../../db/models');

module.exports.addContribution = (req, res) => {
  console.log(req.body, '=======================');
  models.Contribution.forge({
    text: req.body.title,
    creator_id: req.session.passport.user
  })
  .save()
  .then(result => {
    console.log(result);
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(500).send(err);
  });
}

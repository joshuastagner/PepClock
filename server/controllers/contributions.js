const models = require('../../db/models');

module.exports.create = (req, res) => {
  console.log(req.body);
  models.Contribution.forge({
    text: req.body.contributionText,
    type: 'message',
    contributor_id: 1
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
}

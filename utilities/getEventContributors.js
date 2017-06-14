const email = require('../workers/utils/email');
const models = require('../db/models');

const extractContributorEmail = (contributor) => {
  return contributor.relations.user.attributes.email;
};

const getContributorsByEventId = (eventId) => {
  models.Contributor.where({event_id: eventId}).fetchAll({
    withRelated: ['user']
  })
    .then(({ models }) => {
      if (models) {
        const contributorEmails = models.map(extractContributorEmail);
        console.log(contributorEmails);
      }
    })
    .catch(err => console.log(err));
};

getContributorsByEventId(3);

module.exports.getContributorsByEventId = getContributorsByEventId;

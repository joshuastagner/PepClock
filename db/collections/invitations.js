const db = require('../');
const Invitation = require('../models/invitations');

const Invitations = db.Collection.extend({
  model: Invitation
});

module.exports = db.collection('Invitations', Invitations);

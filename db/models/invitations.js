const db = require('../');

const Invitation = db.Model.extend({
  tableName: 'invitations',
  event: function() {
    return this.belongsTo('Event');
  }
  
});

module.exports = db.model('Invitation', Invitation);

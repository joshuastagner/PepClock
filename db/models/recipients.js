const db = require('../');

const Recipient = db.Model.extend({
  tableName: 'recipients',
  event: function() {
    return this.belongsTo('Event');
  }
  
});

module.exports = db.model('Recipient', Recipient);

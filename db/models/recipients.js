const db = require('../');

const Recipient = db.Model.extend({
  tableName: 'recipients',
  creator: function() {
    return this.belongsTo('Event');
  }
  
});

module.exports = db.model('Recipient', Recipient);

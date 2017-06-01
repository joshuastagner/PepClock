const db = require('../');

const Event = db.Model.extend({
  tableName: 'events',
  creator: function() {
    return this.belongsTo('Profile');
  }
  
});

module.exports = db.model('Event', Event);

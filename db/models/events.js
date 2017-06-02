const db = require('../');

const Event = db.Model.extend({
  tableName: 'events',
  creator: function() {
    return this.belongsTo('Profile');
  },
  invitations: function() {
    return this.hasMany('Invitation');
  },
  recipient: function() {
    return this.hasOne('Recipient');
  },
  contributors: function() {
    return this.hasMany('Contributor');
  }

});

module.exports = db.model('Event', Event);

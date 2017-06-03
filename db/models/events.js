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
  },
  contributions: function() {
    return this.hasMany('Contribution');
  }

});

module.exports = db.model('Event', Event);

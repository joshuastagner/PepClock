const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  events: function() {
    return this.hasMany('Event');
  },
  contributions: function() {
    return this.hasMany('Contribution');
  }
});

module.exports = db.model('Profile', Profile);

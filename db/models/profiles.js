const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  events: function() {
    return this.hasMany('Event', 'user_id');
  },
  contributions: function() {
    return this.hasMany('Contribution', 'user_id');
  },
  contributors: function() {
    return this.hasMany('Contributor', 'user_id');
  }
});

module.exports = db.model('Profile', Profile);

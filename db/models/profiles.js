const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  events: function() {
    return this.hasMany('Event');
  }
});

module.exports = db.model('Profile', Profile);

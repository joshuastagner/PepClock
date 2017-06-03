const db = require('../');

const Contributor = db.Model.extend({
  tableName: 'contributors',
  user: function() {
    return this.belongsTo('Profile', 'user_id');
  },
  event: function() {
    return this.belongsTo('Event');
  },
  contributions: function() {
    return this.hasMany('Contribution');
  }

});

module.exports = db.model('Contributor', Contributor);

const db = require('../');

const Contribution = db.Model.extend({
  tableName: 'contributions',
  contributor: function() {
    return this.belongsTo('Contributor');
  },
  event: function() {
    return this.belongsTo('Event');
  },
  user: function() {
    return this.belongsTo('Profile', 'user_id');
  }

});

module.exports = db.model('Contribution', Contribution);

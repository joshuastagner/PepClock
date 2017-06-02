const db = require('../');

const Contributor = db.Model.extend({
  tableName: 'contributors',
  user: function() {
    return this.belongsTo('Profile');
  },
  event: function() {
    return this.belongsTo('Event');
  }

});

module.exports = db.model('Contributor', Contributor);

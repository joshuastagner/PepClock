const db = require('../');

const Contributor = db.Model.extend({
  tableName: 'contributors',
  user: function() {
    return this.belongsTo('Profile');
  }
  
});

module.exports = db.model('Contributor', Contributor);

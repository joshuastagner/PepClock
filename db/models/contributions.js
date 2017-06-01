const db = require('../');

const Contribution = db.Model.extend({
  tableName:'contributions',
  contributor: function() {
    return this.belongsTo('Contributor');
  }

});

module.exports = db.model('Contribution', Contribution);

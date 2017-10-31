'use strict';
module.exports = (sequelize, DataTypes) => {
  var hand = sequelize.define('hand', {
    handID: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return hand;
};
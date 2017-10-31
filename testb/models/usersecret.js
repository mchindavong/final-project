'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersecret = sequelize.define('usersecret', {
    userID: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersecret;
};
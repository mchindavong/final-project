'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    gameID: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return game;
};
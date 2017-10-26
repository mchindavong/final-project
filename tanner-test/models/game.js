module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        host:{
            type: DataTypes.STRING,
            allowNull: false
        },
        guest:{
            type: DataTypes.STRING,
            allowNull: false
        },
        hostHand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        guestHand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tableHand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gameId:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return Game;
};
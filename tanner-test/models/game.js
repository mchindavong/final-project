module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        gameID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        hostID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        guestID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        hostHandID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        guestHandID:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tableHandID:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return Game;
};
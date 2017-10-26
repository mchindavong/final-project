module.exports = function(sequelize, DataTypes) {
    var UserSecret = sequelize.define("UserSecret", {
        userID:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
    return User;
};
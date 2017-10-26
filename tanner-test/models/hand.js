module.exports = function(sequelize, DataTypes) {
    var Hand = sequelize.define("Question", {
        uuid: {
            type: DataTypes.STRING

        },
        city: {
            type: DataTypes.STRING,

        },
        question: {
            type: DataTypes.STRING,

        },
        correct_answer: {
            type: DataTypes.STRING
        },
        visited: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        questionVisit: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Hand.associate = function(models) {
        Hand.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Hand;
};
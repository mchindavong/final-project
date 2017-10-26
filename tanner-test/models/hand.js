module.exports = function(sequelize, DataTypes) {
    var Hand = sequelize.define("Hand", {
        handId:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartAce: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartTwo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartThr: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartFou: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartFiv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartSix: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartSev: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartEig: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartNin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartTen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartJac: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartQue: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heartKin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeAce: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeTwo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeThr: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeFou: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeFiv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeSix: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeSev: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeEig: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeNin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeTen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeJac: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeQue: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spadeKin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoAce: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoTwo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoThr: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoFou: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoFiv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoSix: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoSev: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoEig: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoNin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoTen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoJac: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoQue: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        diamoKin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsAce: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsTwo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsThr: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsFou: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsFiv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsSix: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsSev: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsEig: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsNin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsTen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsJac: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsQue: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        clubsKin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
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
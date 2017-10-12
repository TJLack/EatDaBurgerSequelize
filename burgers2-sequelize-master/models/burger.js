var DataTypes = require('sequelize/lib/data-types');
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        type: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });
    return Burger;
};
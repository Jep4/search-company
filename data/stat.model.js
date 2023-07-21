
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    return sequelize.define(
        'CompanyStat'
        {
            name: { //company name
                autoIncrement: true,
                type: DataTypes.CHAR(20),
                allowNull: false,
                primaryKey: true,
            },
            overview: {
                type: DataTypes.CHAT(50),
                allowNull: true,
            },
            size: {
                type: DataTypes.CHAR(16),
                allowNull: true,
            },
            sallery: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            stock: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
        },

        sequelize,
        tableName: 'CompanyStat',
        indexes[{
        indexes[{
            name: 'PRIMARY',
            unique: true,
            fields: [{ name: name }],
        }],

    );
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'CompanyStat',
        {
            name: { // company name
                type: DataTypes.CHAR(20),
                allowNull: false,
                primaryKey: true,
            },
            overview: {
                type: DataTypes.CHAR(50),
                allowNull: true,
            },
            size: {
                type: DataTypes.CHAR(16),
                allowNull: true,
            },
            salary: { // Corrected 'sallery' to 'salary'
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            stock: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
        },
        {
            tableName: 'CompanyStat',
            indexes: [{
                name: 'PRIMARY',
                unique: true,
                fields: [{ name: 'name' }]
            }],
            timestamps: false, // Corrected 'timestamp' to 'timestamps'
        }
    );
};
const Sequelize = require('sequelize');

//Connecting to database
const config = {
    host: process.env.SEACOM_MYSQL_HOST || '127.0.0.1',
    port: 3306,
    database: 'searcom',
    user: 'searcom_admin',
    password: process.env.SEACOM_MYSQL_HOST || '1234',
};


//Sequelize instance
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
});

module.exports = {
    sequelize,
    CompanyStat: require('./stat.model')(sequelize), //Bring function from stat.model => exported sequelize 
};
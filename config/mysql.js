const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mms_db', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = sequelize;
require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize("ecommerce_db", 'root', "", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        decimalNumbers: true,
    },
});
module.exports = sequelize;

const DB_config = require('../config/db');

const Seq = require('sequelize');

const sequelize = new Seq(
    DB_config.DB,
    DB_config.USER,
    DB_config.PASSWORD, {
        host: DB_config.HOST,
        dialect: DB_config.dialect,
        operatorsAlias: false,
    },
    DB_config.timezone
);
sequelize.authenticate().then( () => {console.log('connected to DB')}).catch(err => {console.log('Error' + err)});

const db = {};

db.sequelize = sequelize;

db.History = require('./history') (sequelize);

db.sequelize.sync({force: false}).then(() => {
    console.log('re-sync done')
});

module.exports = db, sequelize;
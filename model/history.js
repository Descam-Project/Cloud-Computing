const sequelize = require("sequelize");
const db = require("../config/db");

const History = db.define(
    "table_history",
    {
        Email:{type: sequelize.STRING},
        Text:{type: sequelize.STRING},
        Result:{type: sequelize.STRING},
    },
    {
        freezeTableName: true,
        timestamp: false
    }
);

module.exports = History
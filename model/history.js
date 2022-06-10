const Seq = require('sequelize');
module.exports = (sequelize) => {
    const History = sequelize.define(
        "table_history",
        {
            Email:{type: Seq.STRING},
            Text:{type: Seq.STRING},
            Result:{type: Seq.STRING},
        },
        {
            freezeTableName: true,
            timestamp: false
        }
    );
    return History;
}
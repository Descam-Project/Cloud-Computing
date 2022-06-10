require('dotenv').config();
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: 'descam-db',
    dialect: 'mysql',
    dialecOptions: {
        useUCT: false,
        dataString: true,
        typecast: true
    },
    timezone: '+07:00'
}
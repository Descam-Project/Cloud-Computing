require('dotenv').config();
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: 'mysql',
    dialecOptions: {
        useUCT: false,
        dataString: true,
        typecast: true
    },
    timezone: '+07:00'
}
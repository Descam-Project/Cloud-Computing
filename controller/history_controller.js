const db = require("../config/db");
require('dotenv').config();
const History = db.History;
const User = db.User;

const insertHistory = async (req, res) => {
    try {
        const newHistory = new History ({
            email,
            text,
            result
        });
        await newHistory.save();
        res.json({error:"false",status: "success", message:"success insert data"});
    }
    catch(err){
        console.log(err);
        res.status('Internal Server Error');
        res.send({status:"error", message: 'Internal Server Error'})
    }
}

module.exports = {insertHistory}
const db = require("../model");
require('dotenv').config();
const History = db.History;

const addHistory = async (req, res) => {
    try {
        const { Email, Text, Result } = req.body
        console.log(Email)
        const newHistory = new History ({
            Email,
            Text,
            Result
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

module.exports = {addHistory}
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { response } = require("express");
const { json } = require("express/lib/response");
const db = require("./config/db");

const Result = async (req, res) => {
    try {
        
        const {input} = req.body;
        console.log(input);

        const response = await fetch('https://classifiermodel-k5eyux7eqa-et.a.run.app/descam/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({input:input}),
        })

        // res = await response.json();
        console.log(res);

        return res.json(await response.json());
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }

}

module.exports = {Result}
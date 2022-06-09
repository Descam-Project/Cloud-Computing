
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const FormData = require("form-data");
const bodyParser = require("body-parser");
const utf8 = require('utf8');
const { response } = require("express");
const { json } = require("express/lib/response");

// const db = require("./config/db");
// const Scam = require("./models/user");

app.get("/", (req, res) => res.send("respons express berhasil"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// db.authenticate().then(() =>{
//     console.log("berhasil terkoneksi dengan database")}
// );

app.post("/hasil", async (req, res) => {
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

        // console.log(typeof(responseJson));

        // res.json();

        return res.json(await response.json());
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }

});

// const PORT = 8070;
app.listen(8070, () =>
    console.log(`Running server in port 8070`)
);

const express = require("express");
const app = express();
const fetch = require("node-fetch");
const FormData = require("form-data");
const bodyParser = require("body-parser");

// const db = require("./config/db");
// const Scam = require("./models/user");

app.get("/", (req, res) => res.send("respons express berhasil"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// db.authenticate().then(() =>{
//     console.log("berhasil terkoneksi dengan database")}
// );

app.get("/hasil", async (req, res) => {
    try {
        // console.log(req, res);
        // const lemparan = req.body.lemparan;
        const {data} = req.body;
        console.log(data);

        const form = new FormData();
        console.log(form);

        const response = await fetch('http://127.0.0.1:8080/descam/predict', {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify({input: data}),
        })

        const responseJson = await response.json();

        res.json();
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
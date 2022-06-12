const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const {sequelize} = require('./model');
require('dotenv').config();

app.get("/", (req, res) => res.send("respons express berhasil"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sequelize.authenticate().then(() =>{
    console.log("berhasil terkoneksi dengan database")}
);

app.post("/hasil", async (req, res) => {
    try {
        
        const {text} = req.body;

        const response = await fetch('https://127.0.0.1:5000/descam/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({input:text}),
        })
        console.log(response);
        const results = response.json({});
        // const Out = response.output;
        // const Scc = response.success;
        // console.log(Out);
        // console.log(Scc);
        return res.json(await response.json());
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }

    // console.log(text);
});

const history_route = require('./routes/history_route');
app.use('/History', history_route);


// const PORT = 8070;
app.listen(process.env.PORT || 5000, () =>
    console.log(`Running server in port ${process.env.PORT || 5000}`)
);
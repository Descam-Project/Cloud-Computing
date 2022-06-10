
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { response } = require("express");
const { json } = require("express/lib/response");
const db = require("./config/db");
// const History = db.History;
// const db = require("./config/db");
// const Scam = require("./models/user");

app.get("/", (req, res) => res.send("respons express berhasil"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.authenticate().then(() =>{
    console.log("berhasil terkoneksi dengan database")}
);



const history_route = require('./model/history')
app.use('/History', history_route);


// const PORT = 8070;
app.listen(8070, () =>
    console.log(`Running server in port 8070`)
);
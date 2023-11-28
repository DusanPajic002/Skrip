const express = require('express');
const app = express();
const jeloRoutes = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/routes/jela.js");
app.use("/jelo", jeloRoutes);
app.get('/', (req, res) => { res.send('Hello from REST API service')});
app.listen(9000);
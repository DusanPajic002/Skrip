const express = require('express');
const app = express();
const jeloRoutes = require("./jelo.js");
app.use("/jelo", jeloRoutes);
app.get('/', (req, res) => { res.send('Hello from REST API service')});
app.listen(9000);
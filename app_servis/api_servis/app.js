const express = require('express');
const app = express();

const jeloRoutes = require('../routes/jelo.js');
// const kategorijaRoutes = require("../routes/kategorija.js");
// const narudzbinaRoutes = require("../routes/narudzbina.js");
// const sastojakRoutes = require("../routes/sastojak.js");


app.get('/', (req, res) => { res.send('Hello from REST API service') });

app.use("/jelo", jeloRoutes);
// app.use("/kategorija", kategorijaRoutes);
// app.use("/narudzbina", narudzbinaRoutes);
// app.use("/sastojak", sastojakRoutes);

app.listen(9000);



// const kategorijaRoutes = require("../routes/kategorija.js");
// const narudzbinaRoutes = require("../routes/narudzbina.js");
// const sastojakRoutes = require("../routes/sastojak.js");


// app.use("/kategorija", kategorijaRoutes);
// app.use("/narudzbina", narudzbinaRoutes);
// app.use("/sastojak", sastojakRoutes);

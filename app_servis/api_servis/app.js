const express = require('express');
const cors = require('cors');
const app = express();

const { sequelize, Jelo, Dostupnost,KategorijaSastojka, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

const jeloRoutes = require('../routes/jelo.js');
const kategorijaRoutes = require("../routes/kategorija.js");
const narudzbinaRoutes = require("../routes/narudzbina.js");
const sastojakRoutes = require("../routes/sastojak.js");
const dostupnostRoutes = require("../routes/dostupnost.js");


const corsOptions = {
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000']
};
app.use(cors(corsOptions));

app.get('/', (req, res) => { res.send('Hello from REST API service') });

app.use("/jelo", jeloRoutes);
app.use("/kategorija", kategorijaRoutes);
app.use("/narudzbina", narudzbinaRoutes);
app.use("/sastojak", sastojakRoutes);
app.use("/dostupnost", dostupnostRoutes);

app.listen({ port:9000 }, async () => {
	console.log("Started server on localhost:9000");
	await sequelize.sync({force:false});
	console.log("DB synced");
});	
const express = require('express');
const app = express();

// Promenjena putanja zahteva za modele
const { sequelize, Jelo, Kategorija, Sastojak, Narudzbina } = require("./models");

const jeloRoutes = require('../routes/jelo.js');
const kategorijaRoutes = require("../routes/kategorija.js");
const narudzbinaRoutes = require("../routes/narudzbina.js");
const sastojakRoutes = require("../routes/sastojak.js");

app.get('/', (req, res) => { res.send('Hello from REST API service') });

app.use("/jelo", jeloRoutes);
app.use("/kategorija", kategorijaRoutes);
app.use("/narudzbina", narudzbinaRoutes);
app.use("/sastojak", sastojakRoutes);

app.listen({ port:9000 }, async () => {
	console.log("Started server on localhost:8000");
	await sequelize.sync({force:true});
	console.log("DB synced");
  });
const express = require("express");
const route = express.Router();
const { sequelize, Jelo, Dostupnost,KategorijaSastojka, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
     try {
        const dost = await Dostupnost.findAll();
        return res.json(dost);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
});
 
route.get("/:id", async (req, res) => {
     try {
        const dost = await Dostupnost.findByPk(req.params.id);
        return res.json(dost);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
});
 
module.exports = route;






 
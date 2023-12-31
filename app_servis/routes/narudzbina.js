const express = require("express");
const route = express.Router();
const { sequelize, Jelo, Dostupnost,KategorijaSastojka, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
     try {
       const narudzbine = await Narudzbina.findAll();
       return res.json(narudzbine);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
route.get("/:id", async (req, res) => {
     try {
       const narudzbina = await Narudzbina.findByPk(req.params.id);
       return res.json(narudzbina);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
route.post("/", async (req, res) => {
     try {
       const novaNarudzbina = await Narudzbina.create(req.body);
       return res.json(novaNarudzbina);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.put("/:id", async (req, res) => {
     try {
       const narudzbina = await Narudzbina.findByPk(req.params.id);
       narudzbina.naziv = req.body.naziv;
       narudzbina.status = req.body.status;
       narudzbina.cena = req.body.cena;
       narudzbina.zakazano_vreme = req.body.zakazano_vreme;
       narudzbina.adresa = req.body.adresa;
       await narudzbina.save();
       return res.json(narudzbina);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.delete("/:id", async (req, res) => {
     try {
       const narudzbina = await Narudzbina.findByPk(req.params.id);
       await narudzbina.destroy();
       return res.json({ id: narudzbina.id }); // Vraća ID obrisane narudžbine
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});;
 

module.exports = route;


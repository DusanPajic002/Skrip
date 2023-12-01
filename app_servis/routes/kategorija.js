const express = require("express");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
const { sequelize, Kategorija, Jelo, JeloSastojak, Sastojak, StavkaNarudzbine } = require("../models");

route.get("/", async (req, res) => {
     try {
       const kategorije = await Kategorija.findAll();
       return res.json(kategorije);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
route.get("/:id", async (req, res) => {
     try {
       const kategorija = await Kategorija.findByPk(req.params.id);
       return res.json(kategorija);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.post("/", async (req, res) => {
     try {
       const novaKategorija = await Kategorija.create(req.body);
       return res.json(novaKategorija);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.put("/:id", async (req, res) => {
     try {
       const kategorija = await Kategorija.findByPk(req.params.id);
       kategorija.naziv = req.body.naziv; // Pretpostavka da postoji atribut 'naziv'
       kategorija.opis = req.body.opis; 
       await kategorija.save();
       return res.json(kategorija);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.delete("/:id", async (req, res) => {
     try {
       const kategorija = await Kategorija.findByPk(req.params.id);
       await kategorija.destroy();
       return res.json({ id: kategorija.id }); // Vraća ID obrisane kategorije
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 




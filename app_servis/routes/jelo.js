const express = require("express");
const route = express.Router();

// Dodajte modele koje ste destrukturirali iz vašeg models foldera
const { sequelize, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine } = require("../models");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));
module.exports = route;

route.get("/", async (req, res) => {
     try {
         const kategorije = await Kategorija.findAll();
         return res.json(kategorije);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
 });
 
 // U rutu GET /jelo/:id dodajte ovaj kod
 route.get("/:id", async (req, res) => {
     try {
         const jelo = await Jelo.findByPk(req.params.id);
         return res.json(jelo);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
 });

 route.post("/", async (req, res) => {
     try {
         // Ako objekat koji se šalje odgovara strukturi modela
         const novi = await Jelo.create(req.body);
         return res.json(novi);
     } catch (err) {
         // Ako objekat nije iste strukture kao model
         const novi = {
             naziv: req.body.naziv, // ili neko drugo ime atributa koje koristite
             opis: req.body.opis,   // ili neko drugo ime atributa koje koristite
             // ... ostali atributi
         };
         const insertovani = await Jelo.create(novi);
         return res.json(insertovani);
     }
 });
 
 // PUT ruta za izmenu postojećeg jela
 route.put("/:id", async (req, res) => {
     try {
         const jelo = await Jelo.findByPk(req.params.id);
         if (jelo) {
             jelo.naziv = req.body.naziv;
             jelo.opis = req.body.opis;
             jelo.kategorija_id = req.body.kategorija_id; // Pretpostavljam da imate ovaj atribut u modelu
             // ... ostali atributi koje želite ažurirati
             await jelo.save();
             return res.json(jelo);
         } else {
             return res.status(404).json({ error: "Jelo nije pronađeno" });
         }
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
 });

 route.delete("/:id", async (req, res) => {
     try {
         const jelo = await Jelo.findByPk(req.params.id);
         if (jelo) {
             await jelo.destroy();
             return res.json({ id: jelo.id }); // Vraćamo ID obrisane stavke
         } else {
             return res.status(404).json({ error: "Jelo nije pronađeno" });
         }
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greška", data: err });
     }
 });

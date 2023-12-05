const express = require("express");
const route = express.Router();
const { sequelize, Jelo, Dostupnost, KategorijaSastojka, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
     try {
          const sastojci = await Sastojak.findAll({
               include: [
                 {
                   model: KategorijaSastojka,
                   as: 'kategorijasastojka'
                 }
               ]});
          return res.json(sastojci);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greška", data: err });
     }
});

route.get("/:id", async (req, res) => {
     try {
          const sastojak = await Sastojak.findByPk(req.params.id);
          return res.json(sastojak);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greška", data: err });
     }
});
 
 
route.post("/", async (req, res) => {
     try {
       const noviSastojak = await Sastojak.create(req.body);
       return res.json(noviSastojak);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
route.post("/novi-sastojak", async (req, res) => {
     try {
        const novi = await Sastojak.create(req.body);
        return res.json(novi);
     } catch (err) {
         const novi = {
             naziv: req.body.naziv,
             kolicina: req.body.kolicina,
             kategorijasastojka_id: req.body.kategorijasastojka_id,
         };
         const insertovani = await Sastojak.create(novi);
         return res.json(insertovani);
     }
});
route.put("/:id", async (req, res) => {
     try {
          const sastojak = await Sastojak.findByPk(req.params.id);
          sastojak.naziv = req.body.naziv;
          await sastojak.save();
          return res.json(sastojak);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greška", data: err });
     }
});

route.put("/promeni-kolicinu/:id", async (req, res) => {
     try {
        const sastojak = await Sastojak.findByPk(req.params.id);
        sastojak.kolicina = req.body.kolicina;
        await sastojak.save();
        return res.json(sastojak);
     } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
     }
 });


 route.delete("/:id", async (req, res) => {
     try {
        const sastojak = await Sastojak.findByPk(req.params.id);
        if (sastojak) {
            await sastojak.destroy();
            return res.json({ id: sastojak.id });
        } else {
            return res.status(404).json({ error: "Sastojak nije pronađen" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greška", data: err });
    }
  });
 
 



module.exports = route;
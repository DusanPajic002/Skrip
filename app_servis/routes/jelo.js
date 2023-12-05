const express = require("express");
const route = express.Router();
const { sequelize, Jelo, Dostupnost, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));
route.get("/", async (req, res) => {
     try {
        const jela = await Jelo.findAll({
            include: [
              {
                model: Kategorija,
                as: 'kategorija'
              }
            ]
          });
        return res.json(jela);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
});
 
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
       const novi = await Jelo.create(req.body);
       return res.json(novi);
    } catch (err) {
        const novi = {
            naziv: req.body.naziv,
            opis: req.body.opis,
            cena: req.body.cena,
        };
        const insertovani = await Jelo.create(novi);
        return res.json(insertovani);
    }
});

route.post("/nova-pica", async (req, res) => {
     try {
        const novi = await Jelo.create(req.body);
        return res.json(novi);
     } catch (err) {
         const novi = {
             naziv: req.body.naziv,
             opis: req.body.opis,
             cena: req.body.cena,
         };
         const insertovani = await Jelo.create(novi);
         return res.json(insertovani);
     }
});
 
route.put("/:id", async (req, res) => {
     try {
        const jelo = await Jelo.findByPk(req.params.id);
        jelo.naziv = req.body.naziv;
        jelo.opis = req.body.opis;
        jelo.cena = req.body.cena;
        jelo.kategorija_id = req.body.kategorija_id;
        jelo.save();
        return res.json(jelo);
     } catch (err) {
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
     }
});

route.put("/promeni-cenu/:id", async (req, res) => {
    try {
       const jelo = await Jelo.findByPk(req.params.id);
       jelo.cena = req.body.cena;
       await jelo.save();
       return res.json(jelo);
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
           return res.json({ id: jelo.id });
       } else {
           return res.status(404).json({ error: "Jelo nije pronađen" });
       }
   } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
   }
 });

 
module.exports = route;






 
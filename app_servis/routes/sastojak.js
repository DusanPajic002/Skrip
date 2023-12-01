const express = require("express");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
const { sequelize, Kategorija, Jelo, JeloSastojak, Sastojak, StavkaNarudzbine } = require(__dirname + '/../models/model.js');


route.get("/", async (req, res) => {
     try {
          const sastojci = await Sastojak.findAll();
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
 
route.delete("/:id", async (req, res) => {
     try {
       const sastojak = await Sastojak.findByPk(req.params.id);
       await sastojak.destroy();
       return res.json({ id: sastojak.id }); // Vraća ID obrisane sastojka
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 




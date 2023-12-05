const express = require("express");
const route = express.Router();
const { sequelize, Jelo, Dostupnost, Kategorija, Sastojak, Narudzbina } = require("C:/Users/Korisnik/Desktop/Skrip/app_servis/api_servis/models");

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
  try {
     const kategorije = await Kategorija.findAll({
         include: [
           {
             model: Dostupnost,
             as: 'dostupnost'
           }
         ]
       });
     return res.json(kategorije);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Greska", data: err });
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

route.get("/proveraIDa", async (req, res) => {
     try {
        const id = req.params.id; 
        const kategorija = await Kategorija.findByPk(id);
        
        if (kategorija) {
            res.status(200).json({ success: true, message: "ID exists" });
        } else {
            res.status(404).json({ success: false, message: "ID not found" });
        }
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
       kategorija.naziv = req.body.naziv; 
       kategorija.opis = req.body.opis; 
       await kategorija.save();
       return res.json(kategorija);
     } catch (err) {
       console.log(err);
       res.status(500).json({ error: "Greška", data: err });
     }
});
 
route.put("/dostupnost/:id", async (req, res) => {
  try {
     const kategorija = await Kategorija.findByPk(req.params.id);
     kategorija.dostupnost_id = req.body.dostupnost_id;
     await kategorija.save();
     return res.json(kategorija);
  } catch (err) {
     console.log(err);
     res.status(500).json({ error: "Greska", data: err });
  }
});

route.delete("/:id", async (req, res) => {
  try {
     const kategorija = await Kategorija.findByPk(req.params.id);
     if (kategorija) {
         await kategorija.destroy();
         return res.json({ id: kategorija.id });
     } else {
         return res.status(404).json({ error: "Kategorija nije pronađen" });
     }
 } catch (err) {
     console.log(err);
     res.status(500).json({ error: "Greška", data: err });
 }
});


module.exports = route;

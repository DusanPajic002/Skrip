const express = require("express");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
const { sequelize, Kategorija, Jelo, JeloSastojak, Sastojak, StavkaNarudzbine } = require(__dirname + '/../models/model.js');


route.get("/", async (req, res) => {
    try{
         return res.json("sva jela");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 route.get("/:id", async (req, res) => {
    try{
         return res.json("jelo čiji je id=" + req.params.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
         return res.json("unos novog jela čiji su podaci  u req.body");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
         return res.json("izmena podataka jela čiji je id=" +  eq.params.id + " a podaci su u req.body");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
         return res.json(req.params.id);  //id obrisanog
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 




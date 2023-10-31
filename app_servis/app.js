const express = require('express');
const path = require('path');
const app = express();
const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');

app.use( express.static( path.join(__dirname, 'static') ) );
app.use('/novo-jelo', BP.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post("/novo-jelo", (req, res) => {
    const shema = Joi.object().keys({
        Naziv: Joi.string().required(),
        Model: Joi.required(),
        Cena: Joi.number().greater(0).required(),
        Godiste: Joi.number().greater(0).required(),
        Snaga: Joi.number().required(),
        Kubikaza: Joi.number().required(),
        Opis: Joi.string()

    });
    const {error, succ} = shema.validate(req.body);

    if (error) {
        res.send("Greška: " + error.details[0].message);
        return;
    }
    
    req.body.Opis = req.body.Opis.replace(/\r?\n|\r/g, '<br>');

    fs.appendFile("auto.txt", 
    JSON.stringify(req.body) + "\n", 
    function(err, succ){
        res.send("Poruka je poslana, očekujte odgovor uskoro");
    }
);

});

app.get("/jela", (req, res) => {
    const auta = [];

    fs.readFile('auto.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send({ error: "Greška" });
          return;
        }
        else{
        const redovi = data.split('\n');

        for(let i=0; i<redovi.length; i++){
            if(redovi[i].trim() !== ''){
                try{
                    let obj = JSON.parse( redovi[i] ); 
                    auta.push(obj);               
                } catch(parseerror){
                    console.error("Error parsing json",parseerror);
                }
            }
           
        
        }
    
        res.json(auta);
    }

      });
      

    });
    
app.listen(8000);

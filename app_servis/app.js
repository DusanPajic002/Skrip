const express = require('express');
const path = require('path');
const app = express();
const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');

app.use( express.static( path.join(__dirname, 'static') ) );
app.use('/nova-pica', BP.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post("/nova-pica", (req, res) => {
    const shema = Joi.object().keys({
        naziv: Joi.string().trim().min(5).max(25).required(),
        opis: Joi.string().trim().min(1).required(),
        kategorija: Joi.string().required(),
        cena: Joi.number().greater(0).required()
    });
    const {error, succ} = shema.validate(req.body);

    if (error) {
        res.send("Greška 1: " + error.details[0].message);
        return;
    }

    req.body.opis = req.body.opis.replace(/\r?\n|\r/g, '<br>');
    fs.appendFile("jela.txt", 
    JSON.stringify(req.body) + "\n", 
    function(err, succ){
        res.send("Poruka je poslana, očekujte odgovor uskoro");
    });

});
app.get("/jela", (req, res) => {
    const jela  = [];

    fs.readFile('jela.txt', 'utf8', (err, data) => {
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
                    jela.push(obj);               
                } catch(parseerror){
                    console.error("Error parsing json",parseerror);
                }
            }
           
        
        }
        res.json(jela);
        }
      });
    });

app.listen(8000);

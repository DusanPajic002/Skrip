
function validacija(){
    var validno = true;

    if(document.getElementById("naziv").value.length < 3){
        validno = false;
        document.getElementById("naziv").classList.add("error");
        document.getElementById("naziv").classList.remove("success");
    } else{
        document.getElementById("naziv").classList.add("success");
        document.getElementById("naziv").classList.remove("error");

    }

    return validno;
}

document.getElementById("forma").addEventListener("submit", function(event){
    event.preventDefault();  
    var validno = validacija();   
    if(!validno){ return; }
    var pica = {};
    pica.naziv = document.getElementById("naziv").value; 
   
    pica.cena = document.getElementById("cena").value;
    pica.opis = document.getElementById("opis").value;
    let sel = document.getElementById('kategorija');
    let selectedValue = sel.options[sel.selectedIndex].value; 

    fetch("http://localhost:9000/kategorija/")
    .then(succ=>succ.json())
    .then(kategorije => {
        let indeks = -1;
        
        for(let i=0; i<kategorije.length; i++){
            console.log(kategorije[i].naziv);
            console.log(sel[selectedValue-1].innerText);
          if(kategorije[i].naziv == sel[selectedValue-1].innerText)
            indeks = i;
        }

        if (indeks !== -1) {
          console.log(indeks);
          console.log(kategorije[indeks].id);
          pica.kategorija_id = kategorije[indeks].id;
    
          return fetch("http://localhost:9000/jelo/nova-pica", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pica)
          });
        } else {
          throw new Error('Kategorija nije pronađena.');
        }
    }).then(data=>{
        window.location.href=`/jela.html`;
    })
    .catch(err => console.log(err));

});

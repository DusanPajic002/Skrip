
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

window.addEventListener("load", function () {
  fetch("http://localhost:9000/kategorija/")
  .then(resp => resp.json())
  .then(kategorije => {
      const dostupneKategorije = kategorije.filter(kat => kat.dostupnost.id === 1);
      const padajuciMeni = document.getElementById('kategorija');
      dostupneKategorije.forEach(kat => {
          let opcija = document.createElement("option");
          opcija.value = kat.id;
          opcija.text = kat.naziv;
          padajuciMeni.appendChild(opcija);
      });
  })
  .catch(err => console.log(err));
});
document.getElementById("forma").addEventListener("submit", function(event){
    event.preventDefault();  
    var validno = validacija();   
    if(!validno){ return; }

    

    var pica = {};
    pica.naziv = document.getElementById("naziv").value; 
    pica.cena = document.getElementById("cena").value;
    pica.opis = document.getElementById("opis").value;
    let sel = document.getElementById('kategorija');
    let selectedValue = sel.options[sel.selectedIndex].innerText; 

    fetch("http://localhost:9000/kategorija/")
    .then(succ=>succ.json())
    .then(kategorije => {
        let indeks = -1;
      
        for(let i=0; i<kategorije.length; i++)
          if(kategorije[i].naziv == selectedValue){
            indeks = i;
            break;
          }
        if (indeks == -1)
            throw new Error('Kategorija nije pronađena.');

        pica.kategorija_id = kategorije[indeks].id
        return fetch("http://localhost:9000/jelo/nova-pica", {
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pica)
        });

    }).then(data=>{
        window.location.href=`/jela.html`;
    })
    .catch(err => console.log(err));

});
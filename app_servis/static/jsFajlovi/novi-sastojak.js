
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
    fetch("http://localhost:9000/kategorijasastojka/")
    .then(resp => resp.json())
    .then(kategorije => {
        const padajuciMeni = document.getElementById('kategorijasastojka');
        kategorije.forEach(kat => {
            let opcija = document.createElement("option");
            opcija.value = kat.id;
            opcija.text = kat.naziv;
            padajuciMeni.appendChild(opcija);
        });
    })
    .catch(err => console.log(err));
});

document.getElementById("potvrdi").addEventListener('click', function(event) {
    event.preventDefault();  
    var validno = validacija();   
    if(!validno){ return; }
    var sastojak = {};
    sastojak.naziv = document.getElementById("naziv").value; 
    sastojak.kolicina = document.getElementById("kolicina").value;

    let sel = document.getElementById('kategorijasastojka');
    let selectedValue = sel.options[sel.selectedIndex].innerText; 

    fetch("http://localhost:9000/kategorijasastojka/")
    .then(succ=>succ.json())
    .then(kategorijasastojka => {
        let indeks = -1;
        for(let i=0; i<kategorijasastojka.length; i++)
          if(kategorijasastojka[i].naziv == selectedValue){
            indeks = i;
            break;
          }
        if (indeks == -1)
            throw new Error('Kategorija nije pronađena.');

        sastojak.kategorijasastojka_id = kategorijasastojka[indeks].id
        return fetch("http://localhost:9000/sastojak/novi-sastojak", {
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sastojak)
        });

    }).then(data=>{
        window.location.href=`/sastojci.html`;
    })
    .catch(err => console.log(err));
});







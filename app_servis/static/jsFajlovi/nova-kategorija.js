function proveriIdKategorije(id) {

    return fetch(`http://localhost:9000/kategorija/`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(kategorije => {
        let rez = kategorije.some(kategorija => kategorija.id == id);
        return !rez;
    })
    .catch(err => {
        alert("Desila se greška prilikom provere ID-a");
    });

}

async function validacija(id) {
    let validno = true;
    const idZauzet = await proveriIdKategorije(id);
    if(!idZauzet) {
        alert("Postoji navedeni ID");
        return false;
    }
    if(id.length == 0){
        validno = false;
        document.getElementById("idKategorije").classList.add("error");
        document.getElementById("idKategorije").classList.remove("success");
    } else {
        document.getElementById("idKategorije").classList.add("success");
        document.getElementById("idKategorije").classList.remove("error");
    }
    return validno;
}
document.querySelector("#potvrdi").addEventListener('click',async function(event) {
    event.preventDefault();
    let id = document.getElementById("idKategorije").value; 
    const validno =  await validacija(id);
    if(!validno) return;

    let kategorija = {};
    kategorija.id = id
    kategorija.naziv = document.getElementById("naziv").value;
    kategorija.opis = document.getElementById("opis").value;

    let sel = document.getElementById('dostupnost');
    let selectedValue = sel.options[sel.selectedIndex].innerText;

    const dostupnost = await fetch(`http://localhost:9000/dostupnost/`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
    });
    const data = await dostupnost.json();
    let dostupnostID = -1;
    for (let i = 0; i < data.length; i++) 
        if (data[i].naziv === selectedValue)
            dostupnostID = data[i].id;
    if(dostupnostID == -1)
        return;
    
    kategorija.dostupnost_id = dostupnostID;
    console.log(kategorija)
    fetch("http://localhost:9000/kategorija/", {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kategorija)
    })
    .then(response => response.json())
    .then(data => {
        alert("Nova kategorija."); 
        //window.location.href = 'kategorije.html';
    })
    .catch(err => {
        alert("Desila se greska");
        console.log(err);
    });

});






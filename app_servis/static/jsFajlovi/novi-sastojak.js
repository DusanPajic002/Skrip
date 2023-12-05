
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

// document.querySelector("#potvrdi").addEventListener('click',async function(event) {
//     event.preventDefault();  
//     var validno = validacija();   
//     if(!validno){ return; }

//     let kategorija = {};
//     kategorija.id = id
//     kategorija.naziv = document.getElementById("naziv").value;
//     kategorija.opis = document.getElementById("opis").value;

//     let sel = document.getElementById('dostupnost');
//     let selectedValue = sel.options[sel.selectedIndex].innerText;

//     const dostupnost = await fetch(`http://localhost:9000/dostupnost/`, {
//             method: "GET",
//             headers: { 'Content-Type': 'application/json' }
//     });
//     const data = await dostupnost.json();
//     let dostupnostID = -1;
//     for (let i = 0; i < data.length; i++) 
//         if (data[i].naziv === selectedValue)
//             dostupnostID = data[i].id;
//     if(dostupnostID == -1)
//         return;

//     kategorija.dostupnost_id = dostupnostID;
//     console.log(kategorija)
//     fetch("http://localhost:9000/kategorija/", {
//         method:"POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(kategorija)
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Nova kategorija."); 
//         window.location.href = 'kategorije.html';
//     })
//     .catch(err => {
//         alert("Desila se greska");
//         console.log(err);
//     });
// });







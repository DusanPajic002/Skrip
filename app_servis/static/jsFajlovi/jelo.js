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
function dodajSastojak(id){
    document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-sastojaka").selectedIndex = 0;
    let naziv = document.querySelector(`#spisak-sastojaka > option[value='${id}']`).innerHTML;
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.type="button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X";
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = naziv;
    span.appendChild(button);
    document.getElementById("sastojci").appendChild(span);
    document.getElementById("sastojci").appendChild(document.createTextNode(" "));
    button.addEventListener("click", function(){   
    let id = this.parentNode.dataset.id;
    this.parentNode.parentNode.removeChild( this.parentNode );
    document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = false;
 });
}


document.getElementById("dodaj-sastojak").addEventListener("click", function(){
    let id = document.getElementById("spisak-sastojaka").value;
    if(!id){
        alert("Izaberi sastojak");
        return;
    }
    dodajSastojak(id);

});
document.addEventListener('DOMContentLoaded', function() {
    let url = new URL(window.location.href);
    id = url.searchParams.get("id");
    
    fetch("http://localhost:9000/jelo/" + id)
    .then( resp=>resp.json() )
    .then( data=>{
	    document.getElementById("naziv").value = data.naziv; 
	    document.getElementById("opis").value = data.opis; 
	    document.getElementById("cena").value = data.cena; 
    })
    .catch(err=>console.log(err));

});

document.querySelector("#sacuvaj").addEventListener('click', function(event) {
    event.preventDefault();
    let url = new URL(window.location.href);
    id = url.searchParams.get("id");
    let izmeniJelo = {
        naziv: document.getElementById("naziv").value,
        opis: document.getElementById("opis").value,
        cena: document.getElementById("cena").value
    };

    let sel = document.getElementById('kategorija');
    let selectedValue = sel.options[sel.selectedIndex].value; 
    fetch('http://localhost:9000/kategorija/')
    .then(response => response.json())
    .then(kategorije => {
        let indeks = -1; // Definišemo indeks ovde

        for(let i=0; i<kategorije.length; i++){
            console.log(kategorije[i].naziv);
            console.log(sel[selectedValue-1].innerText);
          if(kategorije[i].naziv == sel[selectedValue-1].innerText)
            indeks = i;
        }

            if (indeks !== -1) {
                izmeniJelo.kategorija_id = kategorije[indeks].id;
                return fetch(`http://localhost:9000/jelo/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(izmeniJelo),
                });
        } else {
            throw new Error('Kategorija nije pronađena.');
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        window.location.href = "/jela.html";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('obrisiBtn').addEventListener('click', function() {
        let url = new URL(window.location.href);
        id = url.searchParams.get("id");
        if (confirm("Da li ste sigurni da želite da obrišete ovaj suplement?")) {
            fetch(`http://localhost:9000/jelo/${id}`, {
                method: 'DELETE'
            })
          .then(response => response.json())
          .then(data => {
           alert("Aktivnost je uspešno obrisana.");
           window.location.href = 'jela.html';
        })
       .catch(error => {
           console.error('Došlo je do greške:', error);
     });
   }
});
window.addEventListener("load", function () {
    fetch('http://localhost:9000/sastojak/').then(Response => Response.json())
    .then(sastojci => {
        let povrcerow = document.getElementById("Povrce")
        let sosevi = document.getElementById("Sosevi")
        let namazirow = document.getElementById("Namazi")
        for (let i = 0; i < sastojci.length; i++){
            let tr = document.createElement("tr");
            let td_naziv = document.createElement("td");
            let td_kolicina = document.createElement("td");
            let td_tip = document.createElement("td");
            let td_akcije = document.createElement("td");

            tr.dataset.id = sastojci[i].id;
            td_naziv.innerHTML = sastojci[i].naziv;
            td_kolicina.innerHTML = sastojci[i].kolicina;
            td_tip.innerHTML = sastojci[i].kategorijasastojka.tip;

            tr.appendChild(td_naziv);
            tr.appendChild(td_kolicina);
            tr.appendChild(td_tip);
            tr.appendChild(td_akcije);

            let btn = document.createElement('button');
            btn.type = "button";
            btn.classList.add("btn");
            btn.classList.add("btn-success");
            btn.innerHTML = "Naruci";
            btn.onclick = function () {
                let kolicinaN = prompt("Unesi novu cenu:");
                let id = this.parentNode.parentNode.dataset.id
                console.log(id);
                if (kolicinaN !== null) {
                    fetch("http://localhost:9000/sastojak/promeni-kolicinu/" + id, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ kolicina: kolicinaN })
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert("Cena je azurirana.");
                        td_kolicina.innerHTML = kolicinaN;
                    })
                    .catch(err => {
                        alert("Desila se greska");
                        console.log(err);
                    });
                }
            };
            td_akcije.appendChild(btn);

            if(sastojci[i].kategorijasastojka.naziv != null)
                document.getElementById(sastojci[i].kategorijasastojka.naziv).appendChild(tr);
            else
                this.alert("Ne postoji takva tabela")
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});







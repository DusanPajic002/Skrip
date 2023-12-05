window.addEventListener("load", function () {
    fetch('http://localhost:9000/jelo/').then(Response => Response.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                let td_kategorija = document.createElement("td");
                let td_naziv = document.createElement("td");
                let td_opis = document.createElement("td");
                let td_cena = document.createElement("td");
                let td_akcije = document.createElement("td");

                tr.dataset.id = data[i].id;

                td_kategorija.innerHTML = data[i].kategorija.naziv;

                td_opis.innerHTML = data[i].opis;
                td_cena.innerHTML = data[i].cena;
                td_naziv.innerHTML = data[i].naziv;

                tr.appendChild(td_kategorija);
                tr.appendChild(td_naziv);
                tr.appendChild(td_opis);
                tr.appendChild(td_cena);
                tr.appendChild(td_akcije);

                let btn = document.createElement('button');
                btn.type = "button";
                btn.classList.add("btn");
                btn.classList.add("btn-primary");
                btn.innerHTML = "Promena Cene";
                btn.onclick = function () {
                    var c = prompt("Unesi novu cenu:");
                    let id = this.parentNode.parentNode.dataset.id
                    if (c !== null) {
                        fetch("http://localhost:9000/jelo/promeni-cenu/" + id, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ cena: c })
                        })
                        .then(response => response.json())
                        .then(data => {
                            alert("Cena je azurirana."); 
                            td_cena.innerHTML = c;
                        })
                        .catch(err => {
                            alert("Desila se greska");
                            console.log(err);
                        });
                    }
                };
                td_akcije.appendChild(btn);
                let link = this.document.createElement('a');
                link.setAttribute('href','jelo.html?id=' + data[i].id);
                link.classList.add('btn');
                link.classList.add('btn-dark');
                link.innerHTML = 'Izmeni';
                td_akcije.appendChild(link);

                tr.appendChild(td_akcije);
                document.getElementById("spisak").appendChild(tr);
            }

        })
        .catch(error => {
            console.error('Error:', error);
        });

});







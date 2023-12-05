window.addEventListener("load", function () {
    fetch('http://localhost:9000/kategorija/').then(Response => Response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                let td_id = document.createElement("td");
                let td_naziv = document.createElement("td");
                let td_opis = document.createElement("td");
                let td_akcije = document.createElement("td");

                tr.dataset.id = data[i].id;
                td_id.innerHTML = data[i].id;
                td_naziv.innerHTML = data[i].naziv;
                td_opis.innerHTML = data[i].opis;

                tr.appendChild(td_id);
                tr.appendChild(td_naziv);
                tr.appendChild(td_opis);
                tr.appendChild(td_akcije);
                let btn = document.createElement('button');
                btn.type = "button";
                btn.classList.add("btn");
                btn.innerHTML = data[i].dostupnost.naziv;
                if(data[i].dostupnost.naziv == "Dostupno")
                    btn.classList.add("btn-primary");
                else
                    btn.classList.add("btn-danger");
                td_akcije.appendChild(btn);
                let link = this.document.createElement('a');
                link.setAttribute('href','kategorija.html?id=' + data[i].id);
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







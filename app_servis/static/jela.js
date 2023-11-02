function oreditip(i) {
    if (i == 1)
        return "Pica";
    else if (i == 2)
        return "Sendvic";
}

window.addEventListener("load", function () {
    fetch('/jela').then(Response => Response.json())
        .then(data => {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                let td_kategorija = document.createElement("td");
                let td_opis = document.createElement("td");
                let td_cena = document.createElement("td");
                let td_akcije = document.createElement("td");
                td_kategorija.innerHTML = oreditip(data[i].Model);

                tr.appendChild(td_kategorija);
                tr.appendChild(td_opis);
                tr.appendChild(td_cena);
                tr.appendChild(td_akcije);

                let btn = document.createElement('button');
                btn.type = "button";
                btn.classList.add("btn");
                btn.classList.add("btn-color");
                btn.innerHTML = "Promena Cene";
                td_akcije.appendChild(btn);
                td_akcije.appendChild(this.document.createElement('br'));
                let link = this.document.createElement('a');
                link.setAttribute('href', 'jela.html');
                link.classList.add('btn');
                link.classList.add('btn-secondary');
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

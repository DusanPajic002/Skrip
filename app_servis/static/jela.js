function oreditip(i) {
    if (i == 1)
        return "Margherita";
    else if (i == 2)
        return "Vegetariana";
    else if (i == 3)
        return "Tuna";
    else if (i == 4)
        return "Capriciossa";
    else if (i == 5)
        return "Pepperoni";
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

                td_kategorija.innerHTML = oreditip(data[i].kategorija);
                td_opis.innerHTML = data[i].opis;
                td_cena.innerHTML = data[i].cena;

                tr.appendChild(td_kategorija);
                tr.appendChild(td_opis);
                tr.appendChild(td_cena);
                tr.appendChild(td_akcije);

                let btn = document.createElement('button');
                btn.type = "button";
                btn.classList.add("btn");
                btn.classList.add("btn-primary");
                btn.innerHTML = "Promena Cene";
                td_akcije.appendChild(btn);
                let link = this.document.createElement('a');
                link.setAttribute('href', 'jelo.html');
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

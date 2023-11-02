function oreditip(i) {
    if (i == 1)
        return "Sendvic";
    else if (i == 2)
        return "Kapricoza";
}

window.addEventListener("load", function () {
    fetch('/jela').then(Response => Response.json())
        .then(data => {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                let td_slika = document.createElement("td");
                let td_model = document.createElement("td");
                let td_opis = document.createElement("td");
                let td_cena = document.createElement("td");
                let td_link = document.createElement("td");
                td_model.innerHTML = oreditip(data[i].Model);
                td_model.classList.add('text-center');

                td_opis.innerHTML = data[i].Opis;
                td_opis.classList.add('text-center');
                td_cena.innerHTML = data[i].Cena;
                td_cena.classList.add('text-center');
                td_slika.innerHTML = data[i].Naziv;
                td_slika.classList.add('text-center');
                tr.appendChild(td_slika);
                tr.appendChild(td_model);
                tr.appendChild(td_opis);
                tr.appendChild(td_cena);

                td_link.classList.add('text-center');
                var btn = document.createElement('button');
                btn.type = "button";
                btn.classList.add("btn");
                btn.classList.add("btn-color");
                btn.innerHTML = "Promena Cene";
                td_link.appendChild(btn);
                td_link.appendChild(this.document.createElement('br'));
                var link = this.document.createElement('a');
                link.setAttribute('href', 'jela.html');
                link.classList.add('btn');
                link.classList.add('btn-secondary');
                link.innerHTML = 'Izmeni';
                td_link.appendChild(link);

                tr.appendChild(td_link);
                document.getElementById("spisak").appendChild(tr);
            }

        })
        .catch(error => {
            console.error('Error:', error);
        });

});

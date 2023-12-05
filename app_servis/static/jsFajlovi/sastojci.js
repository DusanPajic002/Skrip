window.addEventListener("load", function () {
    fetch('http://localhost:9000/sastojak/').then(Response => Response.json())
    .then(sastojci => {
        let povrcerow = document.getElementById("povrcerow")
        let sosevi = document.getElementById("sosevirow")
        let namazirow = document.getElementById("namazirow")
        for (let i = 0; i < sastojci.length; i++){
            switch(sastojci[i].kategorijasastojka.naziv){
                case("Namaz"):{
                    let dd = document.createElement("dd");
                        dd.textContent = sastojci[i].naziv;
                    namazirow.appendChild(dd);
                    break;
                }
                case("Sos"):{
                    let dd = document.createElement("dd");
                        dd.textContent = sastojci[i].naziv;
                    sosevi.appendChild(dd);
                    break;
                }
                case("Povrce"):{
                    let dd = document.createElement("dd");
                        dd.textContent = sastojci[i].naziv;
                    povrcerow.appendChild(dd);
                    break;
                }default:{
                    console.log(i);
                }
            } 
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});







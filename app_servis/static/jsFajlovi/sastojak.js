window.addEventListener("load", function () {
    fetch('http://localhost:9000/sastojak/').then(Response => Response.json())
    .then(sastojci => {
        let povrcerow = document.getElementById("Povrce")
        let sosevi = document.getElementById("Sosevi")
        let namazirow = document.getElementById("Namazi")
        for (let i = 0; i < sastojci.length; i++){
            switch(sastojci[i].kategorijasastojka.naziv){
                case("Namaz"):{
                    
                }
                case("Sos"):{
                    
                }
                case("Povrce"):{
                    
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







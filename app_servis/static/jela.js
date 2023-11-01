window.addEventListener("load", function(){
	fetch('/jela')
    .then(response => {
        let data = response.json(); 
        console.log(data);
        //...ovde ide dalja obrada odgovora
    })
    for(let i=0; i<data.length; i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = data[i].naziv;
        tr.appendChild(td1);
        //… ostatak
        document.getElementById("spisak").appendChild(tr);
        //data[i].kategorija
        //data[i].cena
        let btn = document.createElement("button");
        btn.addEventListener("click", function(){
    });
    }
    

    .catch(error => {
        console.error('Error:', error);
    });
});

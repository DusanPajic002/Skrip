
window.addEventListener("load", function(){
	//sadrzaj funkcije koja ce se pozvati kada browser proglasi stranicu ucitanom
    //tj DOM tree potpuno formiranim
});

document.getElementById("forma").addEventListener("submit", function validacija(e){
    let validno = true;

    let spanovi = document.querySelectorAll("#sastojci > span.badge");
    let niz = [];
        for(let i=0; i<spanovi.length; i++){
        niz.push(spanovi[i].dataset.id);
    }

    if( document.getElementById("naziv").value.length < 3 ){
        validno = false;
        document.getElementById("naziv").classList.add("error");
        document.getElementById("naziv").classList.remove("success");
    }
    else {
        document.getElementById("naziv").classList.add("success");
        document.getElementById("naziv").classList.remove("error");
    }
    if (!validno)
        e.preventDefault();
    return validno;
});

document.getElementById("naziv").addEventListener("keypress", function(){
    this.classList.remove('success'); 
    this.classList.remove('error'); 
});

document.getElementById("dodaj-sastojak").addEventListener("click", function(){
    let id = document.getElementById("spisak-sastojaka").value;
    if(!id){
        alert("Izaberi sastojak");
        return;
    }
    dodajSastojak(id);

});
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
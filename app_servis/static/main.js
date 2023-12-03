
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



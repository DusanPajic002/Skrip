window.addEventListener("load", function () {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    
    if (id) {
        fetch(`http://localhost:9000/kategorija/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("id").textContent = data.id;
                document.getElementById("naziv").textContent = data.naziv;
                document.getElementById("opis").textContent = data.opis;
                const selectElement = document.querySelector('.form-select');
                selectElement.value = data.dostupnost_id; 
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    } else {
        console.error('Nije pronadjen.');
    }
});

document.getElementById('primeni').addEventListener('click',async function(event) {
    event.preventDefault();

    const id = new URLSearchParams(window.location.search).get('id');
    let sel = document.getElementById('dostupnost');
    let selectedValue = sel.options[sel.selectedIndex].innerText;

    const dostupnost = await fetch(`http://localhost:9000/dostupnost/`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
    });
    const data = await dostupnost.json();
    let dostupnostID = -1;
    for (let i = 0; i < data.length; i++) 
        if (data[i].naziv === selectedValue)
            dostupnostID = data[i].id;
    if(dostupnostID == -1)
        return;

    const dataToSend = {
        id: id,
        dostupnost_id: dostupnostID
    };
    fetch(`http://localhost:9000/kategorija/dostupnost/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .catch(err => {
        alert("Desila se greska");
    });
});

document.getElementById('obrisiBtn').addEventListener('click', function() {
    let url = new URL(window.location.href);
    id = url.searchParams.get("id");
    if (confirm("Da li ste sigurni da želite da obrišete ovaj suplement?")) {
        fetch(`http://localhost:9000/kategorija/${id}`, {
            method: 'DELETE'
        })
      .then(response => response.json())
      .then(data => {
       alert("Aktivnost je uspešno obrisana.");
       window.location.href = 'kategorije.html';
    })
   .catch(error => {
       console.error('Došlo je do greške:', error);
 });
}
});
window.addEventListener("load", function(){
    fetch('/jela')
    .then(response => {
        let data = response.json(); 
        console.log(data);
        //...ovde ide dalja obrada odgovora
    })
    .catch(error => {
        console.error('Error:', error);
    });

});

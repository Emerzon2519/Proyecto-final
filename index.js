const teclado = document.getElementById("tecla");

teclado.addEventListener("keydown", function(e){
    console.log("presionaste la tecla: " + e.key)
})
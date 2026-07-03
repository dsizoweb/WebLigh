let boton = document.getElementById("botonfondo");
const texto = document.getElementById("principal")

boton.addEventListener("click", function() {
    texto.classList.toggle("h1-cambiado")
    document.body.classList.toggle("fondo-cambiado");
    
    
});



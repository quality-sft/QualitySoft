// NOMBRE DE INTEGRANTES: -JUAN RICARDO RIAÑOS HORTA
//- EMMANUEL DUQUE ARISTIZABAL
//- SEBASTIÁN GARCIA CARDONA
//- SAMUEL FERNANDO PALACIOS SEVILLANO
//FECHA:
//22/06/2024
//DESCRIPCIÓN:
//JavaScrpt de la página de interacción con el usuario


//no borrar
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("imgbienvenida");
    image.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("img");
    image.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("contenedor");
    image.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("siguiente");
    image.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("atras");
    image.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("barra");
    image.style.opacity = "1";
});

var variable=0
function Tabla(){

 if((variable==0)||(variable==1)){
  document.getElementById('Tabla').style.display="block"
  document.getElementById('Contactanos').style.color="black"
  variable=2

 } else{
  document.getElementById('Tabla').style.display="none"
  document.getElementById('Contactanos').style.color="rgb(72, 71, 71)"
  variable=1
 }
  
}





document.getElementById('archivo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('preview');
            img.src = e.target.result;
            img.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});


function Confirmar(){
    var input = document.getElementById('nombre');
    var input2 = document.getElementById('correo');
    var input3 = document.getElementById('persona');
    var input4 = document.getElementById('rol');
    var input5 = document.getElementById('numero');
    input.readOnly = true; 
    input2.readOnly = true; 
    input3.readOnly = true; 
    input4.readOnly = true; 
    input5.readOnly = true; 

    
    document.getElementById("boton").style.display="none"
    document.getElementById("Hijo").style.display="block"
    document.getElementById("PapaInicial").style.display="none"

}

function Finalizar(){
    document.getElementById("FinalizarBoton").style.display="none"
    document.getElementById("Nieto").style.display="block"
    document.getElementById("Hijo").style.display="none"
    document.getElementById("bienvenida").innerHTML = "Señor usuario<br>Entre a este link para agendar la reunión con nuestro programador especializado para su app";

}
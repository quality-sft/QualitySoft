// NOMBRE DE INTEGRANTES: -JUAN RICARDO RIAÑOS HORTA
//- EMMANUEL DUQUE ARISTIZABAL
//- SEBASTIÁN GARCIA CARDONA
//- SAMUEL FERNANDO PALACIOS SEVILLANO
//FECHA:
//22/06/2024
//DESCRIPCIÓN:
//JavaScrpt de la Página de presentación de cada integrante de la empresa para el usuario

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("Video");
    video.play();
});


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

// NOMBRE DE INTEGRANTES: -JUAN RICARDO RIAÑOS HORTA
//- EMMANUEL DUQUE ARISTIZABAL
//- SEBASTIÁN GARCIA CARDONA
//- SAMUEL FERNANDO PALACIOS SEVILLANO
//FECHA:
//22/06/2024
//DESCRIPCIÓN:
//JavaScrpt de la Página de descripción de valores, misión y visión y slogan de la empresa para el usuario

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

function cambiarnormal(){
    document.getElementById("info").textContent=("¡Pasa el mouse por el color para conocer sobre el!")
    document.getElementById("info").style.fontSize="26px"
    document.getElementById("info").style.top="3100px;"
    document.getElementById("info").style.width="260px"
}
function cambiara(){
    document.getElementById("info").textContent=("El azul claro (#0CB1FB) nos asocia con la paz y la serenidad. Es un color que tiene un efecto calmante y relajante. También puede representar la confianza y la fiabilidad, siendo un color que genera sentimientos de seguridad.")
    document.getElementById("info").style.fontSize="26px"
}
function cambiarn(){
    document.getElementById("info").textContent=("El negro (#000000) nos asocia con la elegancia, el lujo y la formalidad. Este color tiene connotaciones de misterio, poder y autoridad.")
    document.getElementById("info").style.fontSize="26px"
    document.getElementById("info").style.width="260px"
    document.getElementById("info").style.left="70%"
}
function cambiarp(){
    document.getElementById("info").textContent=("¿Sabias que históricamente, el púrpura (#C032B5) ha estado asociado con la realeza, la riqueza y la nobleza debido a su rareza y el costo de producir el tinte púrpura? Este color nos vincula con la creatividad, la imaginación y el pensamiento original. Nos representa la sabiduría y la dignidad, surgiendo pensamiento y experiencia.")
    document.getElementById("info").style.fontSize="26px"
    document.getElementById("info").style.width="350px"
    document.getElementById("info").style.left="67%"
}
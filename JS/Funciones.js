// NOMBRE DE INTEGRANTES: -JUAN RICARDO RIAÑOS HORTA
//- EMMANUEL DUQUE ARISTIZABAL
//- SEBASTIÁN GARCIA CARDONA
//- SAMUEL FERNANDO PALACIOS SEVILLANO
//FECHA:
//22/06/2024
//DESCRIPCIÓN:
//JavaScrpt de la algunas páginas vinculadas al estilo de estas. Se complementa con el CSS

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




function siguiente(){

    var imagen = document.getElementById("1");
    var imagen2 = document.getElementById("2");
    var imagen3 = document.getElementById("3");
    var imagen4 = document.getElementById("4");
    var imagen5 = document.getElementById("5");

    if (imagen.style.display === "block") {
        document.getElementById("1").style.display="none"
        document.getElementById("2").style.display="block"

    } else if (imagen2.style.display === "block"){
        document.getElementById("2").style.display="none"
        document.getElementById("3").style.display="block"

    }else if (imagen3.style.display === "block"){
        document.getElementById("3").style.display="none"
        document.getElementById("3").style.transition="2s"
        document.getElementById("4").style.display="block"

    }else if (imagen4.style.display === "block"){
        document.getElementById("4").style.display="none"
        document.getElementById("5").style.display="block"
        document.getElementById("siguiente").style.backgroundColor="rgba(183, 174, 174, 0.5);"
    }else if (imagen5.style.display === "block"){
        document.getElementById("5").style.display="none"
        document.getElementById("1").style.display="block"
    }
}






function atras(){

    var imagen = document.getElementById("1");
    var imagen2 = document.getElementById("2");
    var imagen3 = document.getElementById("3");
    var imagen4 = document.getElementById("4");
    var imagen5 = document.getElementById("5");

  
    if (imagen.style.display === "block") {
        document.getElementById("1").style.display="none"
        document.getElementById("5").style.display="block"

    } else if (imagen5.style.display==="block"){
        document.getElementById("5").style.display="none"
        document.getElementById("4").style.display="block"

    } else if (imagen4.style.display==="block"){
        document.getElementById("4").style.display="none"
        document.getElementById("3").style.display="block"
    } else if (imagen3.style.display==="block"){
        document.getElementById("3").style.display="none"
        document.getElementById("2").style.display="block"
    } else if (imagen2.style.display==="block"){
        document.getElementById("2").style.display="none"
        document.getElementById("1").style.display="block"
    }
}

function priproducto(){
    var pri = document.getElementById("text1");
    if(pri.style.display=="none"){
        document.getElementById("text1").style.display="block"

    } else{
        document.getElementById("text1").style.display="none"
    }
   
}
function secproducto(){
    var sec = document.getElementById("text2");
    if(sec.style.display=="none"){
        document.getElementById("text2").style.display="block"
        
    } else{
        document.getElementById("text2").style.display="none"
    }
   
}
function terproducto(){
    var ter = document.getElementById("text3");
    if(ter.style.display=="none"){
        document.getElementById("text3").style.display="block"
        
    } else{
        document.getElementById("text3").style.display="none"
    }
   
}

function Hola(){
    var hola = document.getElementById("hola");
    var hola2 = document.getElementById("hola2")

    if (hola.style.display=="block"){
        document.getElementById("hola2").style.display="block"
        document.getElementById("hola").style.display="none"

    } else if (hola2.style.display=="block"){
        document.getElementById("hola2").style.display="none"
        document.getElementById("hola").style.display="block"
    }
       
    
}



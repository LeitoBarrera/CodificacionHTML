//Funcion que me aplica el estilo a la opcion seleccionada en el menu
function seleccionar(link){
    var opciones = document.querySelector('#Links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";   
    opciones[4].className ="";
    link.className ="Seleccionado"; 
}

//Desaparecer el menu una vez se ha seleccioando una opcion del modo responsive (creo que tampoco sirve)/
var x =document.getElementById("nav");
x.className= "";

// funcion que muestra el menu responsive, al parecer no sirve :( pero se intento
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detector scrolling para las barras de habilidades//
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("html").classList.add("barra-progreso3");
        document.getElementById("html").classList.add("barra-progreso4");
        document.getElementById("html").classList.add("barra-progreso5");
        document.getElementById("html").classList.add("barra-progreso6");
        
    }
}
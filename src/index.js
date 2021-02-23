function Ocultar (){
    var section1 = document.getElementById("section1");
    section1.style.display = "none"
    var section2 = document.getElementById("section2");
    section2.style.display = "none"
    var section3 = document.getElementById("section3");
    section3.style.display = "none"
    var section4 = document.getElementById("section4");
    section4.style.display = "none"
    var section5 = document.getElementById("section5");
    section5.style.display = "none"
}
 
function Continue_section2(){
    Ocultar()
    section2.style.display = "block"
}

function Continue_section3(){
    var button1 = 
    var button2 = 
    
    //const cifrando = document.querySelector('bcifrar')
    //cifrando.addEventListener ('click',Continue_section3())

    if(// click on button 1)
    {
        Ocultar()
        section3.style.display = "block"
    }
    if(// click on button 2){
        Ocultar()
        section4.style.display = "block"
    }
}
 
//import cipher from './cipher.js';
function GuardarDatos(){
    var des = document.getElementById("input_des").nodeValue;
    var men = document.getElementById("input_men").nodeValue;
    if (des === "" || men === ""){
        alert("Faltan datos por ingresar")}
    else if (typeof men === "number"){
        alert("El mensaje solo puede contener letras")}
    else if (typeof des === "string"){
        alert("El desplazamiento es de tipo numerico")}
    else {
        if 
        Ocultar()
        section5.style.display = "block" 
        cipher.encode(des, men)
    }
    
    
}


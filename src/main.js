function Ocultar (){
    var section1 = document.getElementById("section1");
    section1.style.display = "none"
    var section2 = document.getElementById("section2");
    section2.style.display = "none"
    var section3 = document.getElementById("section3");
    section3.style.display = "none"
    var section4 = document.getElementById("section4");
    section4.style.display = "none"
}
 
function Continue_section2(){
    Ocultar()
    section2.style.display = "block"
}

function Continue_section3(){
    Ocultar()
    section3.style.display = "block"
}

function Continue_section4(){
    Ocultar()
    section4.style.display = "block"   
}

/*function GuardarDatos(){
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
}*/


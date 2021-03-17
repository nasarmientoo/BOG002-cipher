import cipher from './cipher.js';

var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var section4 = document.getElementById('section4');
var section5 = document.getElementById('section5');

document.getElementById('Boton1').addEventListener('click',() => Continue(section2));
document.getElementById('Boton2').addEventListener('click',() => Continue(section3));
document.getElementById('Boton3').addEventListener('click',() => Continue(section4));
document.getElementById('Boton4').addEventListener('click',() => mostrarE);
document.getElementById('Boton4').addEventListener('click',() => Continue(section5));
document.getElementById('Boton5').addEventListener('click',() => Continue(section2));
document.getElementById('Boton6').addEventListener('click',() => mostrarD);
document.getElementById('Boton6').addEventListener('click',() => Continue(section5));
document.getElementById('Boton7').addEventListener('click',() => Continue(section2));
document.getElementById('Boton8').addEventListener('click',() => Continue(section1));

function Ocultar (){
    section1.style.display = 'none'
    section2.style.display = 'none'
    section3.style.display = 'none'
    section4.style.display = 'none'
    section5.style.display = 'none'
}

function Continue(section){
    Ocultar()
    console.log(section)
    section.style.display = 'block'  
}

function mostrarE(){
    var mensajeE = document.getElementById('input_men').value;
    var desplazamientoE = document.getElementById('input_des').value;        
    var mensajeFinal = document.getElementById('mensajeFinal');

    mensajeFinal.innerHTML = cipher.encode(mensajeE,desplazamientoE)
}

function mostrarD(){
    let mensajeD = document.getElementById('input_men2').value;
    let desplazamientoD =  document.getElementById('input_des2').value;
    var mensajeFinal = document.getElementById('mensajeFinal');

    mensajeFinal.innerHTML = cipher.decode(mensajeD,desplazamientoD)
}

/*function cleanImput(){
    var allInputs = document.getElementsByTagName('input')
    for (var i = 0; i < allInputs.length; i++){
        var input = allInputs[i];
        if(input !== '')
         input.value = '';
    }
}*/


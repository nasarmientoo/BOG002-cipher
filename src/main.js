import cipher from './cipher.js';

document.getElementById('Boton1').addEventListener('click',Continue_section2)
document.getElementById('Boton2').addEventListener('click',Continue_section3)
document.getElementById('Boton3').addEventListener('click',Continue_section4)
document.getElementById('Boton5').addEventListener('click',Continue_section2)
document.getElementById('Boton7').addEventListener('click',Continue_section2)
document.getElementById('Boton8').addEventListener('click',Continue_principal)
document.getElementById ('Boton4').addEventListener('click',cipher.encode);
document.getElementById ('Boton6').addEventListener('click',cipher.decode);

function Ocultar (){
    var section1 = document.getElementById('section1');
    section1.style.display = 'none'
    var section2 = document.getElementById('section2');
    section2.style.display = 'none'
    var section3 = document.getElementById('section3');
    section3.style.display = 'none'
    var section4 = document.getElementById('section4');
    section4.style.display = 'none'
    var section5 = document.getElementById('section5');
    section5.style.display = 'none'
}

function Continue_principal(){
    Ocultar()
    section1.style.display = 'block'
}

function Continue_section2(){
    Ocultar()
    section2.style.display = 'block'
}

function Continue_section3(){
    Ocultar()
    section3.style.display = 'block'
}

function Continue_section4(){
    Ocultar()
    section4.style.display = 'block'   
}






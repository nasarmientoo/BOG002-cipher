import cipher from './cipher.js';

document.getElementById('Boton1').addEventListener('click',continueSection2);
document.getElementById('Boton2').addEventListener('click',continueSection3);
document.getElementById('Boton3').addEventListener('click',continueSection4);
document.getElementById('Boton4').addEventListener('click',cipher.encode);
document.getElementById('Boton4').addEventListener('click',continueSection5);
//document.getElementById('Boton4').addEventListener('click',imputValidate('input_men','input_des'));
document.getElementById('Boton5').addEventListener('click',continueSection2);
document.getElementById('Boton5').addEventListener('click',cleanImput);
document.getElementById('Boton6').addEventListener('click',cipher.decode);
document.getElementById('Boton6').addEventListener('click',continueSection5);
document.getElementById('Boton7').addEventListener('click',continueSection2);
document.getElementById('Boton7').addEventListener('click',cleanImput);
document.getElementById('Boton8').addEventListener('click',continuePrincipal);
document.getElementById('Boton8').addEventListener('click',cleanImput);


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

function continuePrincipal(){
    Ocultar()
    section1.style.display = 'block'
}

function continueSection2(){
    Ocultar()
    section2.style.display = 'block'
}

function continueSection3(){
    Ocultar()
    section3.style.display = 'block'
}

function continueSection4(){
    Ocultar()
    section4.style.display = 'block'   
}

function continueSection5(){
    Ocultar()
    section5.style.display = 'block'   
}

function cleanImput(){
    var allInputs = document.getElementsByTagName('input')
    for (var i = 0; i < allInputs.length; i++){
        var input = allInputs[i];
        if(input !== '')
         input.value = '';
    }
}

/*function imputValidate(m,d){
    var mensaje = document.getElementById(m).value;
    var desplazamiento= document.getElementById(d).value;

    if(mensaje === '' || desplazamiento === '' ){
       alert ("Faltan espacios por rellenar")
    }   
}*/
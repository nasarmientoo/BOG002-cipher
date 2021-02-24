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
    Ocultar()
    section3.style.display = "block"
}

function Continue_section4(){
    Ocultar()
    section4.style.display = "block"   
}

export default ocultar;


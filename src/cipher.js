let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

function mostrar(x){
  let mensajeCifrado = x.join ('');
  let mensajeEnPantalla = document.createElement ('p')
  let textoMensajeEnPantalla = document.createTextNode(mensajeCifrado);
  mensajeEnPantalla.appendChild (textoMensajeEnPantalla)
  document.getElementById ('mensaje').appendChild(mensajeEnPantalla);
}

const cipher = {
    // Cifrar
    encode: function(){
      var mensaje = document.getElementById('input_men').value;
      mensaje = mensaje.toUpperCase ();
      var arregloMensaje = mensaje.split ('')
      var desplazamiento =  document.getElementById('input_des').value
      desplazamiento = parseInt(desplazamiento)
      let nuevaPosicionLetra = []

      for (var i = 0;i<arregloMensaje.length;i++) {
        if (abecedario.includes(arregloMensaje[i])){
          let posicionletra = abecedario.indexOf(arregloMensaje[i])
          let indiceDesplazado = (posicionletra+desplazamiento)%abecedario.length;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);
        }else{
          nuevaPosicionLetra.push(arregloMensaje[i])
        }
      }
      mostrar(nuevaPosicionLetra);           
    },
        
    //Descifrar
    decode: function (){ 
      let mensaje = document.getElementById('input_men2').value;
      mensaje = mensaje.toUpperCase ();
      let arregloMensaje = mensaje.split ('')

      let desplazamiento =  document.getElementById('input_des2').value
      desplazamiento = parseInt(desplazamiento)
      let nuevaPosicionLetra = []
      
      for (var i = 0;i<arregloMensaje.length;i++) {
        if (abecedario.includes(arregloMensaje[i])){
          let posicionletra = abecedario.indexOf(arregloMensaje[i])
          let indiceDesplazado = (posicionletra - (desplazamiento % 26 - 26)) % abecedario.length
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push(letradesplazada);
        } else {
          nuevaPosicionLetra.push(arregloMensaje[i])
        }
      }
      mostrar(nuevaPosicionLetra);      
    }
};
export default cipher;

let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']

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
          let posicionletra = abecedario.indexOf(arregloMensaje [i])
          let indiceDesplazado = (posicionletra+desplazamiento)%27;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);   
      }

      let mensajeCifrado = nuevaPosicionLetra.join ('');
      console.log (mensajeCifrado)
      let mensajeEnPantalla = document.createElement ('p')
      let textoMensajeEnPantalla = document.createTextNode(mensajeCifrado);
      mensajeEnPantalla.appendChild (textoMensajeEnPantalla)
      document.getElementById ('mensaje').appendChild(mensajeEnPantalla);
    },

    //Descifrar
    decode: function (){ 
      var mensaje = document.getElementById('input_men2').value;
      mensaje = mensaje.toUpperCase ();
      var arregloMensaje = mensaje.split ('')
      var desplazamiento =  document.getElementById('input_des2').value
      desplazamiento = parseInt(desplazamiento)
      let nuevaPosicionLetra = []
      
      for (var i = 0;i<arregloMensaje.length;i++) {
          let posicionletra = abecedario.indexOf(arregloMensaje [i])
          let indiceDesplazado = (posicionletra-desplazamiento)%27;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);         
      }

      let mensajeDesCifrado = nuevaPosicionLetra.join ('');
      console.log (mensajeDesCifrado)
      let mensajeEnPantalla2 = document.createElement ('p')
      let textoMensajeEnPantalla2 = document.createTextNode(mensajeDesCifrado);
      mensajeEnPantalla2.appendChild (textoMensajeEnPantalla2)
      document.getElementById ('mensaje2').appendChild(mensajeEnPantalla2);
    }
};

export default cipher;

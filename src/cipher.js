let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

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
          let indiceDesplazado = (posicionletra+desplazamiento)%26;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);   
      }

      let mensajeCifrado = nuevaPosicionLetra.join ('');
      console.log (mensajeCifrado)
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
          let indiceDesplazado = (posicionletra+desplazamiento)%26;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);         
      }

      let mensajeDesCifrado = nuevaPosicionLetra.join ('');
      console.log (mensajeDesCifrado)
    }
};

export default cipher;

let abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

const cipher = {
    // Cifrar
    encode: function(mensaje, desplazamiento){
      // mensaje = mensaje + '';
      var arregloMensaje = mensaje.toUpperCase().split ('')
      desplazamiento = parseInt(desplazamiento)
      let nuevaPosicionLetra = []
      let mensajeCifrado = ''

      for (var i = 0;i<arregloMensaje.length;i++) {
        if (abecedario.includes(arregloMensaje[i])){
          let posicionletra = abecedario.indexOf(arregloMensaje[i])
          let indiceDesplazado = (posicionletra+desplazamiento)%abecedario.length;
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push (letradesplazada);
        }else{
          nuevaPosicionLetra.push(arregloMensaje[i])
        }     
         mensajeCifrado = nuevaPosicionLetra.join('')
      }
      return mensajeCifrado;           
    },
        
    //Descifrar
    decode: function (mensaje, desplazamiento){  
      // mensaje = mensaje + '';
      let arregloMensaje = mensaje.toUpperCase().split ('')
      desplazamiento = parseInt(desplazamiento)
      let nuevaPosicionLetra = []
      let mensajeCifrado = ''
      
      for (var i = 0;i<arregloMensaje.length;i++) {
        if (abecedario.includes(arregloMensaje[i])){
          let posicionletra = abecedario.indexOf(arregloMensaje[i])
          let indiceDesplazado = (posicionletra - (desplazamiento % 26 - 26)) % abecedario.length
          let letradesplazada = (abecedario[indiceDesplazado])
          nuevaPosicionLetra.push(letradesplazada);
        } else {
          nuevaPosicionLetra.push(arregloMensaje[i])
        }
        
        mensajeCifrado = nuevaPosicionLetra.join('')
      }
      return mensajeCifrado;     
    }
};
export default cipher;

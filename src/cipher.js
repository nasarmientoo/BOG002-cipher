const cipher = {
  // Descifrar
  encode: function (desplazamiento,letrain){
    var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var letrain = letrain.toUpperCase();
    var desplazamiento = parseInt(desplazamiento);
    var posicionletra = abecedario.indexOf(letrain);
    posicionletra=parseInt(posicionletra);
    var letradesplazada = (posicionletra+desplazamiento)%26;
    var resultado = abecedario[letradesplazada];
    alert (resultado);
  },
  // Cifrar
  decode: function(){

  }
};

export default cipher;

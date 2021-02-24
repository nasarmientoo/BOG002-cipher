const cipher = {
// Cifrar
encode: function(){
  var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  document.getElementById ('valoresIniciales').addEventListener ('click',almacenarmesaje);
  function almacenarmesaje() {
  var mensaje = document.getElementById('input_men').value;
  mensaje = mensaje.toUpperCase ();
  console.log (mensaje)
  var desplazamiento =  document.getElementById('input_des').value
  desplazamiento = parseInt(desplazamiento)
  console.log (desplazamiento)

  let posicionletra = abecedario.indexOf(mensaje);
      posicionletra=parseInt(posicionletra);
      let letradesplazada = (posicionletra+desplazamiento)%26;
      let resultado = abecedario[letradesplazada];
      alert (resultado);
  }
},
//Descifrar
decode: function (){ 
  var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  document.getElementById ('valoresIniciales').addEventListener ('click',almacenarmesaje);
  function almacenarmesaje() {
  var mensaje = document.getElementById('input_men').value;
  mensaje = mensaje.toUpperCase ();
  console.log (mensaje)
  var desplazamiento =  document.getElementById('input_des').value
  desplazamiento = parseInt(desplazamiento)
  console.log (desplazamiento)

  let posicionletra = abecedario.indexOf(mensaje);
      posicionletra=parseInt(posicionletra);
      let letradesplazada = (posicionletra-desplazamiento)%26;
      let resultado = abecedario[letradesplazada];
      alert (resultado);
  }
 }
};


//Numero......
var number1 = document.querySelector('#numero1');

//Boton......
var btnConvertir = document.querySelector('#gradosF');
btnConvertir.addEventListener('click', convertir);

//Funcion.......
function convertir(){
    var resultado = (Number(number1.value) * 1.8 ) + 32;
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
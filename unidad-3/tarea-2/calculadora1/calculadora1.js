//NUMEROS.....
var number1 = document.querySelector('#numero1');
var number2 = document.querySelector('#numero2');

//BOTONES.....
var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', sumar);

var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', restar);

var btnMultiplicar = document.querySelector('#multiplicar');
btnMultiplicar.addEventListener('click', multiplicar);

var btnDividir = document.querySelector('#dividir');
btnDividir.addEventListener('click', dividir);

var btnResiduo = document.querySelector('#residuo');
btnResiduo.addEventListener('click', residuo);

//FUNCIONES.....
function sumar(){
    var resultado = Number(number1.value) + Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
function restar(){
    var resultado = Number(number1.value) - Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
function multiplicar(){
    var resultado = Number(number1.value) * Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
function dividir(){
    var resultado = Number(number1.value) / Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
function residuo(){
    var resultado = Number(number1.value) % Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
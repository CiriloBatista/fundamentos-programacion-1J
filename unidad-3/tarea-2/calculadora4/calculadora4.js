//Numeros.......
var number1 = document.querySelector('#numero1');
var number2 = document.querySelector('#numero2');

//Boton.........
var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', calcular);

//Funcion.......
function calcular(){
    var resultado = Number(number1.value) * Number(number2.value);
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
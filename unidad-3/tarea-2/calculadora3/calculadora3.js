//Numeros....
var number1 = document.querySelector('#numero1');
var number2 = document.querySelector('#numero2');

//Boton......
var btnCalcular = document.querySelector('#area');
btnCalcular.addEventListener('click', calcular);

//Función.....
function calcular(){
    var resultado = (Number(number1.value) * Number(number2.value)) / 2;
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
//Numero.......
var number1 = document.querySelector('#numero1');

//Botones.........
var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', incremento);

var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', decremento);

//Funcion.......
function incremento(){
    var resultado = Number(number1.value) + 1;
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
function decremento(){
    var resultado = Number(number1.value) - 1;
    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
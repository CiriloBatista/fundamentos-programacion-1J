//Variables.....
var inputNumero = document.querySelector('#numero');
var numero = Number(inputNumero.value);

var pResultado = document.querySelector('#resultado');

var btnNumero = document.querySelector('#btnNumero');
btnNumero.addEventListener('click', evalNumero);

var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', evalOpcion);

//Funciones......
function evalNumero(){
    if(numero > 0) {
        pResultado.textContent = 'El número '+ numero +' es positivo';
    }
    else if(numero < 0) {
        pResultado.textContent = 'El número '+ numero +' es negativo';
    }
    else{
        pResultado.textContent = 'El número es 0';
    }
}
function evalOpcion(){
    var numero = Number(inputNumero.value);
    var opcion = opciones.value;

    if (opcion === 'mitad'){
        pResultado.textContent = 'La mitad del número '+ numero +' es '+(numero/2);
    }
    else if(opcion === 'cuadrado'){
        pResultado.textContent = 'El cuadrado del número '+ numero +' es '+ (numero*numero);
    }
    else if(opcion === 'par'){
        if(numero%2 === 0){
            pResultado.textContent = 'El número es par';
        }
        else{
            pResultado.textContent = 'El número es impar';
        }
    }
    else{
        pResultado.textContent = 'No ha seleccionado nada';
    }
}
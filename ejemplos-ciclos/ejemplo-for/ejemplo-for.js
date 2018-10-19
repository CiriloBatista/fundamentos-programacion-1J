//Variables........
var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ejemplo1);

var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);

var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplo3);

var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', ejemplo4);

var numero = document.querySelector('#numero');
var tResultado = document.querySelector('#resultado');
var opciones = document.querySelector('#opciones');

//Funciones..........
function ejemplo1(){
    var number = Number(numero.value);

    for(var i = 0; i <= number; i++){

        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
    }
}
function ejemplo2(){
    var number = Number(numero.value);

    for(var i = 1; i <= number; i++){

        var valor = prompt('Ingresa un Número: ('+i+'/'+number+')');
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}
function ejemplo3(){

    var i = 0;
    while(i < 10){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
        i++;
    }
}
function ejemplo4(){
    var number = Number(numero.value);
    var opciones = document.querySelector('#opciones');

    var i = number;
    while(i > 0){
        var opcion = document.createElement('option');
        opcion.text = i;
        opciones.add(opcion);
        i--;
    }
}
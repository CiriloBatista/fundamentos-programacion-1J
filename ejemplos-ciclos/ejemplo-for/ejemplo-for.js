//Variables........
var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ejemplo1);

var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);

var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplo3);

var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', ejemplo4);

var btnCinco = document.querySelector('#btnCinco');
btnCinco.addEventListener('click', ejemplo5);

var numero = document.querySelector('#numero');
var tResultado = document.querySelector('#resultado');
var opciones = document.querySelector('#opciones');
var lienzo = document.querySelector('#lienzo');

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
function ejemplo5(){
    var c = lienzo.getContext('2d');
    var i = 0;

    do{
        var x = Math.trunc((Math.random() * 501) +1);
        var y = Math.trunc((Math.random() * 501) +1);
        var r = Math.trunc((Math.random() * 50) +1);
        if(x > 250){
            continue;
        }
        c.beginPath();
        c.fillStyle = 'rgba(0,255,0,0.5)';
        c.arc(x, y, r, 0, 2*Math.PI);
        c.fill();
        i++;
    }while(i < 30);
}
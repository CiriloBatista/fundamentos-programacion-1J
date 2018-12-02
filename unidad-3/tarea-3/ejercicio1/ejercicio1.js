//Variables........
var inputNumero1 = document.querySelector('#saldo');
var saldo = Number(inputNumero1.value);
var inputNumero2 = document.querySelector('#retiro');
var retiro = Number(inputNumero2.value);

var pResultado = document.querySelector('#resultado');

var btnNumero = document.querySelector('#btnNumero');
btnNumero.addEventListener('click', Retirar);

//Funciones........
function Retirar(){
    var saldo = Number(inputNumero1.value);
    var retiro = Number(inputNumero2.value);
    
    if (retiro > saldo){
        pResultado.textContent = 'Su saldo es insuficiente';
    }
    else{
        
        pResultado.textContent = 'Retiro exitoso! Su nuevo saldo es: '+ (saldo - retiro);
    }
}
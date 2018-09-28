var edad;

edad = 20;

var title = document.querySelector('h1');
title.addEventListener('click', updateName);

function updateName(){
    var name = prompt('Nombre del jugador');
    title.textContent = 'Jugador 1: ' + name;
}
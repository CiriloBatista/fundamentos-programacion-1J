import productos from './main.js'

document.querySelector('#btnAgregar').addEventListener('click', btnAgregar);
let totalPesos = 0;
let totalDolar = 0;

function btnAgregar(){
    let nombre = document.querySelector('#texto');
    let cantidad = document.querySelector('#numero');
    let precio = document.querySelector('#precio');
    let carro = document.querySelector('#carrito');
    let pesos = document.querySelector('#pesos');
    let dolares = document.querySelector('#dolares');

    var newProductos = new productos(
        nombre.value,
        Number(cantidad.value),
        Number(precio.value)
    );
    let total = newProductos.precio*newProductos.cantidad;
    let totalDolares = (total*0.049);
    
    console.log(newProductos);
    
    let row = carro.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = newProductos.cantidad;
    cell2.innerHTML = newProductos.nombre;
    cell3.innerHTML = '$'+total;
    totalPesos = Math.round((totalPesos+total)*100)/100;
    totalDolar = Math.round((totalDolar+totalDolares)*100)/100;
    console.log('$'+totalPesos);
    pesos.innerHTML = 'Total en Pesos: $'+totalPesos;
    dolares.innerHTML = 'Total en Dólares: $'+totalDolar;
    
}

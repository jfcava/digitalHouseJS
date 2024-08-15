// Funcion que recorre un array y ejecuta un callback

function procesarArray(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

// Funcion de callback que muestra los elementos

function mostrarElementos(elemento){
    console.log(elemento);
}

// Funcion que multiplica cada elemento por dos

function multiplicarPorDos(elemento){
    console.log(elemento * 2);
}

// Funcion que muestra el cuadrado de cada elemento

function cuadradoDeElemento(elemento){
    console.log(elemento * elemento);
}


// Creamos el array

let miArray = [1,2,3,4,5];

// Ejecutamos la funcion

console.log("Mostramos cada elemento:");
procesarArray(miArray, mostrarElementos);

console.log("Cada elemento por dos:");
procesarArray(miArray, multiplicarPorDos);

console.log("Cuadrado de cada elemento:");
procesarArray(miArray, cuadradoDeElemento);

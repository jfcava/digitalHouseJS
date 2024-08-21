// Contar la cantidad de veces que aparece un número en un array: Crea una función que reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.

let numeros = [2,5,5,9,3,5,5,4,6,7,5,1];
let nroABuscar = 5;

function vecesQueApareceNumero(nroBuscado, array){
    let apariciones = 0;
    for( let i = 0; i < array.length ; i++){
        if(array[i] == nroABuscar){
            apariciones += 1;
        }
    }
    return apariciones;
}

console.log("Veces que el numero aparece en el array: " + vecesQueApareceNumero(nroABuscar, numeros));


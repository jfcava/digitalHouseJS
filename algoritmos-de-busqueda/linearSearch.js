// Algoritmo para encontrar un elemento dentro de un array

// Si lo encuentra devuelve la posicion del elemento, sino devuelve un -1

let array = [3,54,67,98,6,2,1,156,43,78];
let elementoBuscado = 1;

function buscarElemento(arr, elemento){
    for( let i = 0; i < arr.length ; i++){
        if(arr[i] === elemento){
            return i;
        }
    }
    return -1;
}

let posicion = buscarElemento(array, elementoBuscado);

if(posicion == -1){
    console.log("El elemento no fue encontrado dentro del array");
}else{
    console.log("La posicion del elemento buscado es: " + posicion);
}


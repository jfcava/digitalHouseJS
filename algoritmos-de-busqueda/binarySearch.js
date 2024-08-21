// BINARY SEARCH

/*
Este algoritmo consume menos recursos.
Divide el arreglo a la mitad, evalua si ese valor es el buscado,
si no lo es, evalua si ese valor es mayor o menor al buscado y elimina
la mitad que no lo es. Luego con el tramo que queda del arreglo vuelve
a realizar la misma accion, hasta encontrar el valor
*/


let arreglo = [1, 2, 3, 4, 5, 6, 7];
let nroABuscar = 2;

function busquedaBinaria (arreglo, valorBuscado){

    let indiceDeBusqueda = 0;

    let limiteDeBusqueda = arreglo.length - 1;

    while(indiceDeBusqueda <= limiteDeBusqueda){

        const INDICEMITAD = Math.round((indiceDeBusqueda + limiteDeBusqueda) / 2);

        const ELEMENTOMEDIO = arreglo[INDICEMITAD];

        if(ELEMENTOMEDIO == valorBuscado){
            return INDICEMITAD;
        }

        if(ELEMENTOMEDIO > valorBuscado){
            limiteDeBusqueda = INDICEMITAD - 1;
        }else{
            indiceDeBusqueda = INDICEMITAD + 1;
        }
    }
    return null;
}

let indiceEncontrado = busquedaBinaria(arreglo, nroABuscar);
console.log(indiceEncontrado);


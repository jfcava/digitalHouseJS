/*
Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:

1. Resolverlo aplicando búsqueda lineal.
2. Resolverlo aplicando búsqueda binaria.
*/


// Resolucion con LINEAR SEARCH

let encuesta = 
[
    {
        tema : "Bittersweet Symphony",
        votos : 68
    },
    {
        tema : "Innerbloom",
        votos : 150
    },
    {
        tema : "On the way home",
        votos : 52
    },
    {
        tema : "Wildfires",
        votos : 15
    },
    {
        tema : "Nevada",
        votos : 28
    }
];

function buscarVotos(array, cancion){
    for( let i = 0; i < array.length ; i++){
        if(array[i].tema === cancion){
            return array[i].votos;
        }
    }
    return "La cancion buscada no se encuentra dentro del array";
}

let temaBuscado = "Nevada";

//console.log("La cantidad de votos del tema " + temaBuscado + " es: " + buscarVotos(encuesta, temaBuscado));







// Resolucion con BINARY SEARCH


function ordenarArray(arr){
    for( let i = 0 ; i < arr.length ; i++){
        for( let j = 0 ; j < arr.length - 1 ; j++){
            if(arr[j].votos > arr[j + 1].votos){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function buscarVotosBinary(array, cancion){
    let indiceBusqueda = 0;
    let limiteBusqueda = array.length - 1;

    while(indiceBusqueda <= limiteBusqueda){
        const INDICEMITAD = Math.round((indiceBusqueda + limiteBusqueda) / 2);

        const ELEMENTOMITAD = array[INDICEMITAD];

        if(ELEMENTOMITAD.tema === cancion){
            return ELEMENTOMITAD.votos;
        }

        if(ELEMENTOMITAD.tema > cancion){
            limiteBusqueda = INDICEMITAD - 1;
        }else{
            indiceBusqueda = INDICEMITAD + 1;
        }
    }
    return null;
}

console.log("La cantidad de votos del tema " + temaBuscado + " es: " + buscarVotosBinary(encuesta, temaBuscado));


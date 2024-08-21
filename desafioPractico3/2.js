// Indicar ordenamiento: Crea una función que reciba por parámetro un array de números 
// e indique si el array se encuentra ordenado de forma ascendente o no.

let numeros = [1, 2, 3, 4, 5, 6];

function indicarSiEstaOrdenado (array) {
    let aviso = true;
    for( let i = 0 ; i < array.length - 1 ; i++){
        if(!(array[i] < array[i + 1])){
            aviso = false;
        }
    }
    return aviso;
}


if(indicarSiEstaOrdenado(numeros)){
    console.log("El array esta ordenado!");
}else{
    console.log("El array no esta ordenado :(");
}
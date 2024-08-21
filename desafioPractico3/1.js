// BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.

let numeros = [5, 8, 1, 3, 4, 2, 7, 6];

function ordenarArray(arr){
    for( let i = 0 ; i < arr.length ; i++){
        for( let j = 0 ; j < arr.length ; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numerosOrdenados = ordenarArray(numeros);
console.log(numerosOrdenados);
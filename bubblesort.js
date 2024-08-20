// Metodo que se utiliza para ordenar un array

let array = [5,4,1,6,3,2];

// Comparo elemento a elemento del array y voy llevando el mayor hacia el final
// Se repite tantas veces como la longitud del array hasta terminar de ordenarlo


for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++) {
        if(array[j] > array[j + 1]){
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }        
    }
}

console.log(array);
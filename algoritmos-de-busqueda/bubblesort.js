// Metodo que se utiliza para ordenar un ARRAY

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


// Tambien puedo utilizarlo para ordenar un ARRAY DE STRINGS

let arrayStrings = ["Zapato", "Cenicero", "Auto"];

for (let i = 0; i < arrayStrings.length; i++){
    for (let j = 0; j < arrayStrings.length; j++) {
        if(arrayStrings[j] > arrayStrings[j + 1]){
            let temp = arrayStrings[j];
            arrayStrings[j] = arrayStrings[j + 1];
            arrayStrings[j + 1] = temp;
        }        
    }
}

console.log(arrayStrings);


// Y tambien puedo utilizarlo para ordenar un ARRAY DE OBJETOS

let arrayObjetos = [
    {
        nombre : "Juan",
        edad : 37
    },
    {
        nombre : "Juliana",
        edad : 36
    },
    {
        nombre: "Ginebra",
        edad : 3
    }
];

for (let i = 0; i < arrayObjetos.length; i++){
    for (let j = 0; j < arrayObjetos.length - 1; j++) { // Al trabajar con array de objetos se resta una posicion para que no haya un desbordamiento.
        if(arrayObjetos[j].edad > arrayObjetos[j + 1].edad){
            let temp = arrayObjetos[j];
            arrayObjetos[j] = arrayObjetos[j + 1];
            arrayObjetos[j + 1] = temp;
        }        
    }
}

console.log(arrayObjetos);
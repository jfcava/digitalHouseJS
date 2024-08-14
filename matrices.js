// Crear una matriz

//Opcion 1
let matriz = [ 
    [1,2,3] ,
    [4,5,6] ,
    [7,8,9]
];

// Opcion 2
let arrayMatriz = [];

let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

//console.table(arrayMatriz);


// Visualizar una matriz
console.table(matriz); // Muestra en formato de tabla

// Acceder a un elemento especifico
console.log(matriz[1][1]) //Mostrar el numero 5

// Modificar un elemento especifico
matriz[0][1] = 15;
console.table(matriz);

// Recorrer una columna especifica
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][0]);
}

// Recorrer una fila especifica
for (let i = 0; i < matriz[0].length; i++) {
    console.log(matriz[0][i]);    
}

// Recorrer la totalidad de los datos de la matriz

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        console.log(matriz[i][j]);        
    }
}

// Filtrar elementos de la matriz (Ejemplo, cuales son pares)
console.log(" ==================== ");
function esPar(num){
    if(num % 2 == 0){
        return true;
    }else
        return false;
}

for (let i = 0; i < matriz.length; i++) { // Recorro las filas
    for (let j = 0; j < matriz[i].length; j++) { // Recorro las columnas, pero en el matriz.length solo toma el numero de filas, entonces para columnas debo indicar la posicion de cada fila
        if(esPar(matriz[i][j])){
            console.log(matriz[i][j]);
        }       
    }
}
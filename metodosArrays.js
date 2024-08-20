// METODOS ARRAYS


// PUSH - Agrega un elemento al final
console.log("METODO PUSH - Agrega un elemento al final");
let frutas = ["Banana", "Manzana", "Frutilla"];

console.log(frutas);
frutas.push("Kiwi");
console.log(frutas);



//POP - Elimina el ultimo elemento
console.log("==================================");
console.log("METODO POP - Elimina el ultimo elemento");
let nombres = ["Juan", "Juliana", "Ginebra"];

console.log(nombres);
nombres.pop();
console.log(nombres);



//SHIFT - Elimina el primer elemento
console.log("==================================");
console.log("SHIFT - Elimina el primer elemento");
let marcas = ["Audi", "Fiat", "Ford"];
console.log(marcas);
let eliminado = marcas.shift();

console.log(marcas);

console.log(`El elemento eliminado es: ${eliminado}`);



//UNSHIFT - Agrega adelante
console.log("==================================");
console.log("UNSHIFT - Agrega adelante");
let trabajos = ["Pescador", "Editor", "Almacenero"];
console.log(trabajos);
let nuevaLongitud = trabajos.unshift("Camarografo", "Plomero");

console.log(trabajos);
console.log(`La nueva longitud del arreglo es: ${nuevaLongitud}`);



//JOIN - Une los elementos de un array
console.log("==================================");

console.log("JOIN - Une los elementos de una array");
let dias = ["Lunes", "Martes", "Miercoles"];
console.log(dias);

let separadoPorComa = dias.join();
console.log(`Separado por coma: ${separadoPorComa}`);

let separadoPorGuion = dias.join(" - ");
console.log(`Separado por guion: ${separadoPorGuion}`);



//INDEXOF - Muestra el indice de un elemento
console.log("==================================");

console.log("INDEXOF - Muestra el indice de un elemento");

let indiceEncontrado = dias.indexOf("Martes");
console.log(`El indice de Martes es: ${indiceEncontrado}`);



//LASTINDEXOF - Igual que INDEXOF pero empieza a buscar de atras hacia adelante
console.log("==================================");

console.log("LASTINDEXOF - Igual que INDEXOF pero empieza a buscar de atras hacia adelante");

let clubes = ["Boca", "River", "Huracan", "River"];

let posicionEncontrada = clubes.lastIndexOf("River");
console.log(posicionEncontrada);



//INCLUDES - Devuelve true o false si existe el elemento
console.log("==================================");

console.log("INCLUDES - Devuelve true o false si existe el elemento");

let partesAuto = ["Motor", "Ruedas", "Asientos"];

console.log(partesAuto.includes("Motor"));


//SLICE - Devuelve una porcion de un array existente.

// Sintaxis -> let newArray = arrayOriginal.slice(inicio, fin);

console.log("==================================");
console.log("SLICE - Devuelve una porcion de un array existente");
let frutas2 = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];
console.log(frutas2);

let primerasTres = frutas2.slice(0, 3); // El 3 ya no lo muestra
console.log(primerasTres);

let desdeNaranja = frutas2.slice(1); // Desde posicion 1 hasta el final
console.log(desdeNaranja);

let ultimasDos = frutas2.slice(-2); // Desde el final, 2 posiciones para atras
console.log(ultimasDos);

let entreDosIndices = frutas2.slice(-3, 4); // Desde el final, 3 posiciones para atras, hasta la posicion 4
console.log(entreDosIndices);



//SPLICE - Elimina elementos desde el inicio, la cantidad que se indica, y puedo agregar elementos desde esa posicion

// Sintaxis -> arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...);

console.log("==================================");
console.log("SPLICE - Elimina elementos desde el inicio, la cantidad que se indica, y puedo agregar elementos desde esa posicion");
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//Elimino dos elementos desde la posicion 1, y agrego dos elementos
//meses.splice(1, 2, "NuevoMes1", "NuevoMes2");
//console.log(meses);

//Agrego dos elementos desde la posicion 2
meses.splice(2, 0 , "NuevoMes3");
console.log(meses);



//SORT - Devuelve el array que se envio, ordenado

// Sintaxis -> arrayOriginal.sort();

console.log("==================================");
console.log("SORT - Devuelve el array que se envio, ordenado");

let numeros = [5,4,8,1,7,3];

// Ordeno numeros de menor a mayor
numeros.sort();
console.log(numeros);

let palabras = ["perro", "gato", "auto", "zorro"];

// Ordeno las palabras alfabeticamente - Cada letra tiene un numero en el CODIGO ASCII
palabras.sort();
console.log(palabras);



//FIND - Devuelve el primer elemento que cumple con la condicion dada en la funcion

//Sintaxis -> let resultado = arrayOriginal.find(funcionDePrueba(elemento));

console.log("==================================");
console.log("FIND - Devuelve el primer elemento que cumple con la condicion dada en la funcion");
let edades = [25, 18, 30, 15, 22];

let mayorDeEdad = edades.find(edad => edad >= 18);
console.log(mayorDeEdad);

let primeraEdadMayor = edades.find(edad => edad > 30);
console.log(primeraEdadMayor);



//MAP - Recorre el arreglo y devuelve un nuevo arreglo con las modificaciones que nosotros le indiquemos en la funcion que le enviamos como callback


console.log("==================================");
console.log("MAP - Recorre el arreglo y devuelve un nuevo arreglo con las modificaciones que nosotros le indiquemos en la funcion que le enviamos como callback");
let numerosMap = [2,4,6];

let numerosMultiplicados = numerosMap.map(function(num){
    return num * 2;
});

console.log(numerosMultiplicados);



//FILTER - Recorrer un array y devuelve un nuevo array con los elementos filtrados segun la funcion callback enviada

console.log("==================================");
console.log("FILTER - Recorrer un array y devuelve un nuevo array con los elementos filtrados segun la funcion callback enviada");

let edades2 = [22, 8, 17, 14, 30];

let mayoresDeEdad = edades2.filter(function(edad){
    return edad > 18;
});

console.log(mayoresDeEdad);



//REDUCE - Recorre un array y devuelve un valor numero unico

console.log("==================================");
console.log("REDUCE - Recorre un array y devuelve un valor numero unico");

let numsAzar = [5,7,16];

let sumaArray = numsAzar.reduce(function(acum, num){
    return acum + num;
});

console.log(sumaArray);



//FOREACH - Itera sobre un array y mediante un callback realiza una accion

console.log("==================================");
console.log("FOREACH - Itera sobre un array y mediante un callback realiza una accion");

let paises = ["Argentina", "Colombia", "Brasil"];

paises.forEach(function(pais){
    console.log(pais);
});

/* 

ASI ES COMO FUNCIONA EL METODO FOREACH

array.forEach(callback(currentValue, index, array));

currentValue: El valor del elemento actual en el array.
index: El índice del elemento actual en el array.
array: El array sobre el que se está llamando forEach (este parámetro es opcional).

*/













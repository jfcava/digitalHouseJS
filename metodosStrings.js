//STRINGS Y ACCESOS UNICOS

let saludo = "Hola!";

console.log(saludo[0]);

//LENGTH
 
let miSerie = "Mad Men";

console.log(miSerie.length);

let arrayNombres = ["Bart", "Lisa", "Moe"];
console.log(arrayNombres.length);

console.log(arrayNombres[0].length);

//INDEXOF

let saludo2 = "Hola! Estamos programando";

console.log(saludo2.indexOf("o"));

//Devuelve el indice de donde comienza la palabra
console.log(saludo2.indexOf("Estamos"));

//Devuelve un valor negativo, ya que la palabra no existe
console.log(saludo2.indexOf("vamos"));


//SLICE - Corta el string y devuelve la parte que indicamos que corte

let frase = "Hola! Como estas?";

//Opcion 1 - Primer parametro indica donde comenzar el corte, y el segundo donde termina
console.log(frase.slice(6, 11));

//Opcion 2 - Desde el parametro hasta el final del string
console.log(frase.slice(6));

//Opcion 3 - Comienza a cortar desde atras hacia adelante la cantidad de unidades
console.log(frase.slice(-10));


//TRIM - Elimina espacios del principio y del final de un string
let nombreCompleto = "   Homero Simpson   ";
console.log(nombreCompleto.trim());

//SPLIT - Divide un string segun lo que elija de separador y devuelve un arreglo
let saludo3 = "Hola!, Como estas?";

console.log(saludo3.split(" "));

let arrayNuevo = saludo3.split(", ");
console.log(arrayNuevo);

//REPLACE - Reemplaza una parte del string por otra
let fraseReplace = "Me encanta Java";

console.log(fraseReplace.replace("Java", ".Net"))



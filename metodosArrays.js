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

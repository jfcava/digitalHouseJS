// Convertir texto: Crea una función que reciba un string por parámetro 
// y lo convierta a mayúsculas y minúsculas respectivamente. 
// La función deberá mostrar los resultados por consola. 
// Para esto, averiguar qué hacen los métodos de Strings: 
// toUpperCase() y toLowerCase()

function convertirString(frase){
    let fraseMayusculas = frase.toUpperCase();
    let fraseMinusculas = frase.toLowerCase();
    console.log(`Frase en mayusculas: ${fraseMayusculas}`);
    console.log(`Frase en minusculas: ${fraseMinusculas}`);
}

let frase = "Hola! Como estas CApO!";
convertirString(frase);

// Manipulación de objetos: Crea un objeto llamado ‘persona’ 
// que contenga como propiedades: nombre, edad y ocupación. 
// Crea una función que muestre cada propiedad de dicho objeto 
// por consola, e invocala para ver sus valores. 
// Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. 
// Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
    nombre : "Juan",
    edad : 37,
    ocupacion : "Camarografo"
}

function mostrarPropiedades(objeto){
    console.log(objeto.nombre);
    console.log(objeto.edad);
    console.log(objeto.ocupacion);
}

mostrarPropiedades(persona);
persona.ocupacion = "Estudiante eterno";
persona.habilidad = "Ninguna en especial";
mostrarPropiedades(persona);

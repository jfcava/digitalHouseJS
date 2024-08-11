// Objetos anidados: Agrega una nueva propiedad al objeto creado 
// en el ejercicio anterior llamada ‘ubicacion’, 
// donde deberás guardar un objeto interno con las propiedades: 
// codigoPostal, ciudad, calle y número. 
// Luego, crea una función que reciba dicho objeto por parámetro 
// y le permita al usuario eliminar solo una de las propiedades del objeto.

let persona = {
    nombre : "Juan",
    edad : 37,
    ocupacion : "Camarografo",
    ubicacion : {codigoPostal:7600, ciudad:"Mar del Plata", calle:"Catamarca", numero:2130}
}

function eliminarPropiedades(objetito, propiedad){
    switch (propiedad) {
        case "nombre":
            delete objetito.nombre;
            break;
        case "edad":
            delete objetito.edad;
            break;
        case "ocupacion":
            delete objetito.ocupacion;
            break;
        case "ubicacion":
            delete objetito.ubicacion;
            break;
        default:
            console.log("La propiedad no existe :(");
            break;
    }
}

console.log(persona);
eliminarPropiedades(persona, "ubicacion");
console.log(persona);
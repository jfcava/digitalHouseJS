//Crear un objeto
let persona = {
    nombre : "Juan",
    apellido : "Cavallieri",
    edad : 37,
    coloresFavoritos : ["Negro", "Naranja"],
    saludar : function(){
        return `Hola ${this.nombre}!!!`
    }
}

//Acceder a las propiedades
console.log(`La edad de ${persona.nombre} es ${persona.edad} y sus colores favoritos son ${persona.coloresFavoritos}`);

//Cargar una nueva propiedad
persona.deporteFavorito = "Tennis";
console.log(`Su deporte favorito es ${persona.deporteFavorito}`);

//Eliminar una propiedad
delete persona.deporteFavorito;
console.log(persona);

//Acceder a un metodo de un objeto

persona.nombre = "Jacinto";
console.log(persona.saludar());

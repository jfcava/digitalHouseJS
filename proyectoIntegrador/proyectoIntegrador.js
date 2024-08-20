// Linea para poder utilizar el prompt
const prompt = require("prompt-sync")({ sigint : true});

// Array para almacenar las tareas

let tareas = [];

// Array para categorias

let categorias = [
    "Personal",
    "Trabajo"
];

// Funcion para mostrar las categorias

function mostrarTodasLasCategorias(){
    console.log("Categorias existentes:");
    categorias.forEach(function(categoria, indice){
        console.log(indice + ": " + categoria);
    });
}


mostrarTodasLasCategorias();

// Funcion para agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null ){
    tareas.push({ nombre : nombreRecibido, completada : false, fechaLimite : fechaLimiteRecibida});    
}

// Eliminar una tarea

function eliminarTarea(indice) {
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice, 1); // Primer valor indice, segundo cantidad de elementos a eliminar
        console.log("Tarea eliminada correctamente!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// Funcion para marcar tarea como completada

function completarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("Tarea completada!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// Funcion para modificar una tarea especifica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre;
        if(nuevaFechaLimite !== null){
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        console.log("Tarea modificada con exito!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// Funcion para mostrar el menu de opciones

function mostrarMenu(){
    console.log(" --- Menu --- ");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

// Funcion para interactuar con el usuario

function interactuarConUsuario(){
    let opcion = -1;

    while(opcion != 0){
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion que desea:"));
        
        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;
            
            case 2:
                let indiceTarea = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceTarea);
                break;

            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indiceACompletar);
                break;

            case 4:
                let indice = parseInt(prompt("Ingrese el indice de la tarea a modificar: "));
                let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");
                modificarTarea(indice, nuevoNombre);
                break;

            case 5:
                console.log(" -- Lista de Tareas -- ");
                console.log(tareas);
                break;
            
            default:
                console.log("Opcion Invalida!");
                break;
        }
    }
}

//interactuarConUsuario();



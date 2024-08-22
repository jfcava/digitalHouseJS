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


// Funcion para crear nuevas categorias

function crearUnaNuevaCategoria(categoria){
    categorias.push(categoria);
    console.log("Categoria " + categoria + " agregada exitosamente!");
}

// Funcion para agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null ){
    
    mostrarTodasLasCategorias();
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea: "));
    
    if(numeroCategoria >= 0 && numeroCategoria < categorias.length){
        tareas.push({ nombre : nombreRecibido, completada : false, fechaLimite : fechaLimiteRecibida, categoria : numeroCategoria});
        console.log("Tarea agregada con exito!");  
    }else{
        console.log("Numero de categoria incorrecto!");
    }

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
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumeroCategoria){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
        tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite;
        tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria;
        console.log("Modificacion correcta!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// Funcion que filtra tareas por categoria
function filtrarTareasPorCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}

// Funcion que muestra cantidad de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador;
    },0);

    let tareasEnTotal = tareasCategoria.length;

    console.log("Tareas completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + " tareas!");
}


// Funcion que muestra todas las tareas no completadas
function mostrarTareasNoCompletadas(){
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){
        if(!tarea.completada){
            console.log("- Nombre: " + tarea.nombre + ", Categoria: " + categorias[tarea.categoria]);
        }
    });
}


// Funcion para ordenar tareas por la propiedad "nombre" utilizando BubbleSort
function ordenarTareasPorNombre(){
    let total = tareas.length;

    for (let j = 0; j < total; j++) {
        for (let i = 0; i < total - 1; i++) {
            if(tareas[i].nombre > tareas[i + 1].nombre){
                let temp = tareas[i];
                tareas[i] = tareas[i + 1];
                tareas[i + 1] = temp;
            }        
        }
    }
}


// Funcion para ordenar tareas por la propiedad "fecha limite" utilizando BubbleSort
function ordenarTareasPorFechaLimite(){
    let total = tareas.length;

    for (let j = 0; j < total; j++) {
        for (let i = 0; i < total - 1; i++) {
            if(tareas[i].fechaLimite > tareas[i + 1].fechaLimite){
                let temp = tareas[i];
                tareas[i] = tareas[i + 1];
                tareas[i + 1] = temp;
            }        
        }
    }
}


// Funcion que busca una tarea por nombre y retorna su posicion
function buscarTareaPorNombre(nombreTarea){
    let inicio = 0;
    let fin = tareas.length - 1;

    while(inicio <= fin){
        let posElementoMedio = Math.round((inicio + fin) / 2);
        let elementoMedio = tareas[posElementoMedio];
        
        if(elementoMedio.nombre === nombreTarea){
            return posElementoMedio;
        }else if(elementoMedio.nombre < nombreTarea){
            inicio = posElementoMedio + 1;
        }else{
            fin = posElementoMedio - 1;
        }
    }
    return -1;
}



// Funcion para mostrar el menu de opciones

function mostrarMenu(){
    console.log(" --- Menu --- ");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Mostrar todas las categorias");
    console.log("7. Crear una nueva categoria");
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("11. Ordenar las tareas alfabeticamente");
    console.log("12. Ordenar las tareas por fecha limite");
    console.log("13. Buscar una tarea por su nombre");
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
                
                if(indice >= 0 && indice < tareas.length){

                    let opcion = parseInt(prompt("Que propiedad desea modificar? 1. Nombre, 2. Fecha Limite, 3. Categoria"));

                    switch(opcion){
                        case 1:
                            let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
                            modificarTarea(indice, nuevoNombre);
                            break;

                        case 2:
                            let nuevaFechaLimite = prompt("Ingrese la nueva fecha limite para su tarea: ");
                            modificarTarea(indice, undefined, nuevaFechaLimite);
                            break;

                        case 3:
                            let nuevoNumeroCategoria = parseInt(prompt("Ingrese nuevo numero de categoria:"));
                            if(nuevoNumeroCategoria >=0 && nuevoNumeroCategoria < categorias.length){
                                modificarTarea(indice, undefined, undefined, nuevoNumeroCategoria);
                            }
                            break;
                        
                        default:
                            console.log("Numero de opcion incorrecto!");
                            break;
                    }

                }else{
                    console.log("Indice de tarea incorrecto!");
                }
                break;

            case 5:
                console.log(" -- Lista de Tareas -- ");
                console.log(tareas);
                break;

            case 6:
                mostrarTodasLasCategorias();
                break;

            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la categoria a ingresar: ");
                crearUnaNuevaCategoria(nuevaCategoria);
                break;

            case 8:
                mostrarTodasLasCategorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a filtrar: "));
                let tareasCategoria = filtrarTareasPorCategoria(nroCategoria);
                console.log("Tareas de la categoria seleccionada: ");
                console.log(tareasCategoria);
                break;
            
            case 9:
                mostrarTodasLasCategorias();
                let nroCateg = parseInt(prompt("Ingrese el numero de la categoria a visualizar"));
                contarTareasCompletadasPorCategoria(nroCateg);
                break;

            case 10:
                mostrarTareasNoCompletadas();
                break;

            case 11:
                ordenarTareasPorNombre();
                console.log("Tareas por nombre: ");
                console.log(tareas);
                break;

            case 12:
                ordenarTareasPorFechaLimite();
                console.log("Tareas por fecha: ");
                console.log(tareas);
                break;

            case 13:
                ordenarTareasPorNombre();

                let nombreABuscar = prompt("Ingrese nombre de la tarea a buscar: ");
                let indiceTareaBuscada = buscarTareaPorNombre(nombreABuscar);

                if(indiceTareaBuscada !== -1){
                    console.log("Tarea encontrada en el indice: " + indiceTareaBuscada);
                }else{
                    console.log("Tarea no encontrada");
                }
                break;
            
            default:
                console.log("Opcion Invalida!");
                break;
        }
    }
}

interactuarConUsuario();



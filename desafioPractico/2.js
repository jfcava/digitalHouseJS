// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’
// que tome un array como parámetro y elimine el primer elemento. 
// La función debe devolver el elemento eliminado.

function eliminarPrimerElemento(unArray){
    return unArray.shift();
}

let nombres = ["Juan", "Juli", "Gini"];
console.log(`El array original es: ${nombres}`);
let elementoEliminado = eliminarPrimerElemento(nombres);

console.log(nombres);
console.log(`El elemento eliminado fue: ${elementoEliminado}`);
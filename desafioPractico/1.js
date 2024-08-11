// 1- Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros 
// y los una en uno solo. 
// La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()

function unirArrays(array1, array2){
    let nuevoArray = array1.concat(array2);
    return nuevoArray;
}

let a1 = ["Juan", "Juli", "Gini"];
let a2 = ["Jacinto", "Placido"];

console.log(unirArrays(a1,a2));
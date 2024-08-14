// FUNCIONES DECLARADAS

// Estas funciones pueden ser llamadas antes de ser declaradas.
// Esto es por un proceso llamado Hoisting, que eleva la declaracion de la funcion automaticamente

console.log(suma(2,2));

function suma(num1, num2){
    return num1, num2;
}


// FUNCIONES EXPRESADAS

// Se asignan a una variable, y no pueden invocarse antes de ser declaradas

let resta = function(num1, num2){
    return num1 - num2;
}

console.log(resta(10, 5));


// FUNCIONES FLECHA (ARROW FUNCTIONS)

// Tampoco pueden invocarse antes de ser declaradas
// No se pueden utilizar en situaciones que tengamos que acceder a la palabra reservada THIS

let multiplicacion = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplicacion(4,3));
/*
Matrices
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una semana específica. Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.

Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. El número correspondiente al día deberá recibirse por parámetro. Recuerda que el número de día es determinado por las columnas.

Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.

Callbacks
Gastos por semana:
Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. Será obligatorio el uso de callbacks para esta función.
*/

const prompt = require("prompt-sync")({ sigint : true});


let gastos = [ 
    [10,15,30,45,70,5,100],
    [32,85,4,12,74,125,65],
    [32,85,2,96,32,17,188],
    [200,58,90,4,32,147,850] 
];

console.table(gastos);

function gastosSemanales(semana){
    let suma = 0;
    for (let i = 0; i < gastos[semana].length; i++) {
        suma += gastos[semana - 1][i];        
    }
    return suma;
}

function gastosDelDia(dia){
    let suma = 0;
    for (let i = 0; i < gastos.length; i++) {
        suma += gastos[i][dia-1];
    }
    return suma;        
}

function gastosDelMes(){
    let suma = 0;
    for (let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            suma += gastos[i][j];            
        }
    }
    return suma;
}

console.log("GASTOS DE TODA LA SEMANA:");
let numSemana = prompt("Ingrese el numero de semana que desea calcular el total: ");
console.log(`El total de gastos de la semana ${numSemana} es ${gastosSemanales(numSemana)}`);


console.log("GASTOS DE UN DIA DE LA SEMANA:");
let numDia = prompt("Ingrese el numero de dia a calcular el total del mes: ");
console.log(`El total de gastos del dia ${numDia} a lo largo del mes es ${gastosDelDia(numDia)}`);

console.log("Gasto total:");
console.log(`El gasto total del mes fue de: ${gastosDelMes()}`);

// Ejercicio 4

function gastosSemanalesPorMes(matriz, callback){
    
    let totalGastosPorSemana = [];
    let gastosSemanales = 0;

    matriz.forEach(function(semana){
        gastosSemanales = semana.reduce(function(total, dia){
            return total + dia;
        });
        totalGastosPorSemana.push(gastosSemanales);
    });
    callback(totalGastosPorSemana);
}

function mostrarLosResultados(resultado){
    console.log("Total de gastos por semana: " + resultado);
}

gastosSemanalesPorMes(gastos,mostrarLosResultados);
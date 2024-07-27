// var nombre = "Natalia";
// console.log(nombre)

// var nombre = "Lidia";
// console.log(nombre)

let nombre1 = "Pepe";
let nombre = "Pepe2";

//Declaración = asignación
let miPrimerString = "Mi primer string es este";
console.log(miPrimerString);

//Hago una declaración de variable:
let nombreDeLaVariable;

//Hago la asignación (puedo declarar en una parte y asignar en otra)
nombreDeLaVariable = "Este es el nombre de la variable";
console.log(nombreDeLaVariable)

//Declaro número:
//Constantes primitivas
//del tipo constantes
const NUMERO = 2;
const LETRA = 'A';
const ESPACIO = " ";

//Constantes no primitivas
//Un string no es una constante primitiva
const stringConstante = "Este es un string constante. No se puede reasignar";


//Operaciones con variables y/o constantes
//Concatenación:
let variablesConcatenadas = miPrimerString + ESPACIO + stringConstante;
console.log(variablesConcatenadas);
console.log(miPrimerString, stringConstante);

//Operaciones matemáticas
const CUATRO = 4;
const CINCO = 5;
const DIEZ = 10;

console.log(CUATRO+DIEZ)
let resultado = CUATRO - CINCO
console.log(resultado);


//Prompt y Alert
// let nombreCompleto = prompt("Ingrese su nombre");
//console.log(nombreCompleto);

// alert(nombreCompleto);
// console.log(nombreCompleto);
const textoPrevioAlPrompt = "Ingrese su nombre"
const textoPrevio = "El nombre ingresado es: "
const textoPosteriorAlPrompt = ", no se olvide de ningún nombre!"
let nombreCompleto = prompt(textoPrevioAlPrompt + textoPosteriorAlPrompt);
console.log(nombreCompleto);

//Alert no admite la coma para concatenar. Tengo que usar +
alert(textoPrevio + ESPACIO + nombreCompleto); 

    
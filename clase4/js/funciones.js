// Cómo declarar una función y cuál es su estructura
// function nombreDeLaFuncion() {
//     // Qué va a hacer? Lo que yo le diga que haga
// }

// Acá la declaramos
// function enviarMensaje(){
//     console.log("Monstrando mensaje")
// }

// enviarMensaje();

// function ingresarNombre (){
//     let nombre = prompt("Ingrese su nombre ")
//     console.log("El nombre ingresado es: " + nombre)
// }

// for (let i = 0; i < 5; i++) {
//     ingresarNombre()
// }

// Funciones con parámetros
// function enviarMensajeConParametros(mensaje1, mensaje2){
//     console.log("Este es el mensaje nro 1: " + mensaje1);
//     console.log("Este es el mensaje nro 2: " + mensaje2);
// }

// enviarMensajeConParametros("Enviar mensaje", "Ganga en zunga");
// enviarMensajeConParametros("Mensaje distinto", "A lo hecho pecho");

// let resultado = 0; //es una variable global

// function sumar(numero1,numero2){
//     resultado = numero1 + numero2
// }

// function mostrarResultado(mensaje){
//     console.log(mensaje)
// }

// sumar(10, 15)
// mostrarResultado("El resultado de la suma es: " + resultado)

// function sumarConReturn(numero1,numero2){
//     return numero1 + numero2
// }

// console.log("El resultado de la suma es: " + sumarConReturn(5,4))

// Programamos una calculadora
// function calculadora(numero1, operacion, numero2){
//     switch(operacion) {
//         case "+":
//             return numero1 + numero2;
//             break
//         case "-":
//             return numero1 - numero2;
//             break
//         case "*":
//             return numero1 * numero2;
//             break
//         case "/":
//             if(numero2 != 0) {
//                 return numero1 / numero2;
//             } else {
//                 return console.error("No se puede dividir por 0")
//             }
//             break
//         default:
//             return 0;
//             break;            
//     }
// }

// function usarCalculadora (){
//     let numero1 = parseFloat(prompt("Ingrese un número"))
//     let operacion = prompt("Ingrese operación")
//     let numero2 = parseFloat(prompt("Ingrese otro número"))
//     return console.log(
//         "El resultado de la operación es: " +
//         calculadora(numero1, operacion, numero2))
// }

// usarCalculadora()

// Scope - Alcance de una variable
// function llamarVariable() {
//     let numero = 10; // Variable local
//     console.log(numero);
// }

// llamarVariable()

// console.log (numero); // Si la llamo por fuera, me da que no está definida

// Funciones anónimas
// const suma = function(a, b) {return a + b}
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b; // Funciones flecha

// console.log(suma(5,4))
// console.log(resta(5,4))

// const iva = x => x * 0.21;
// let precio = 100;


// function calcularPrecioConIva(precio) {
//     const nuevoPrecio = precio + iva(precio)
//     console.log(nuevoPrecio)
// }

// calcularPrecioConIva(100)


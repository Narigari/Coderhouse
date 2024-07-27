// Condiciones
// if(true){
//     console.log("Condición cumplida")
// }

// if(false){
//     console.log("Condición no cumplida. No se imprime")
// }

// Las booleanas también son variables primitivas
// const V = true;
// const F = false;

// if(V){
//     console.log("Condición cumplida usando V")
// }

// const EDAD = 18;
// const edadIngresada = prompt("Ingrese su edad");

// if(edadIngresada >= EDAD) {
//     alert("Puede ingresar!")
// } else {
//     alert("Es menor a " + EDAD + ". No puede pasar!")
// }

// Comparaciones
// const PI = 3.14;
// const numeroIngresado = prompt("Ingrese un número")

// if(numeroIngresado < PI) {
//     console.log("El número ingresado es menor a PI")
// } else if (numeroIngresado == PI) {
//     console.log("El número ingresado es igual a PI")
// } else if (numeroIngresado > PI) {
//     console.log("El número ingresado es mayor a PI")
// } else {
//     console.log("El dato ingresado no es un número")
// }

// Ejemplo con strings
// let color = "Azul"
// let ingreseUnColor = prompt("Ingrese un color")
// if(ingreseUnColor == color) {
//     console.log("El color ingresado es " + color)
// } else {
//     console.warn("El color ingresado NO ES " + color)
// }

// Tabla de verdad (lógica proposicional)
const V = true;
const F = false;

console.log("Tabla de verdad del operador && (y)");
console.log(V && V); //Si ambos valores son V => true
console.log(V && F); //Si al menos uno de los valores es F = false
console.log(F && V); //Si al menos uno de los valores es F = false
console.log(F && F); //Si ambos valores son F => false

console.log("Tabla de verdad del operador || (o)");
console.log(V || V); //Si ambos valores son V => true
console.log(V || F); //Si al menos uno de los valores es V = true
console.log(F || V); //Si al menos uno de los valores es V= true
console.log(F || F); //Si ambos valores son F => false

console.log("Tabla de verdad del operador ! (negación)");
console.log(!V); //Si no es verdadero => false
console.log(!F); //Si no es false => true

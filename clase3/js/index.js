// Ciclos e iteraciones
// Actualización:
// let i = 0;
// console.log(i)
// i = i + 1;
// console.log(i);
// i = i + 1;
// console.log(i);
// i ++
// console.log(i);

// Ciclo for
// for(desde,hasta,actualización){ lo que quiero que se ejecute }

// let i = 0;
// for (i; i <= 10; i++) {
//     console.log("Se está ejecutando un for hasta el " + i)
// }

// let ingreseUnNumero = parseInt(prompt("Ingrese un número"));
// console.log("Tabla de multiplicar del " + ingreseUnNumero);
// for(let i = 1; i <= 10; i++){
//     let r = ingreseUnNumero * i;
//     console.log(ingreseUnNumero + " x " + i + " = " + r )
// }

// let nombre = prompt("Ingrese su nombre")

// for(let i = 1; i <= 5; i++ ) {
//     console.log("Su nombre es: " + nombre)
// }

// for(let i = 1; i <= 10; i++) {
//     if(i == 5) {
//         break;
//     }
//     console.log("Los números son: " + i)
// }

// for(let i = 1; i <= 10; i++) {
//     console.log("Los números son: " + i);
//     if(i == 5) {
//         break;
//     }
// }

// for(let i = 1; i <= 20; i++) {

//     if(i % 2 !== 0) {
//         //console.log("Acá se dio la condición del if")
//         continue; //<-- es como para que siga de largo, que saltee este ciclo
//     }
//     console.log("Los números pares son: " + i);
// }

// let ingreseUnValor = prompt("Ingrese un número")

// while(ingreseUnValor != 0) {
//     console.log("El usuario ingresó " + ingreseUnValor);
//     ingreseUnValor = prompt("Ingrese otro valor")
// }

// Ciclo do while
// let ingreseUnValor = prompt("Ingrese un número");

// do{
//     console.log("El usuario ingresó " + ingreseUnValor);
//     ingreseUnValor = prompt("Ingrese otro valor");
// } while(ingreseUnValor != 0)

// Switch
let ingreseSuNombre = prompt("Ingrese su nombre")

while(ingreseSuNombre != "Chau"){
switch(ingreseSuNombre) {
    case "Alejandro":
        console.log("Su nombre es Alejandro");
        break;
    case "JavaScript":
        console.log(ingreseSuNombre + " no es un nombre");
        break;
    default:
        console.log("Nos vemos en Disney");
        break;
    }
    ingreseSuNombre = prompt("Ingrese otro nombre");
}
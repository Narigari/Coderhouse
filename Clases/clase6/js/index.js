// const arrayDeNumerosVacio = [];
// console.log(arrayDeNumerosVacio)

// const arrayDeNumerosLleno = [1,2,3,89,5,99]
// console.log(arrayDeNumerosLleno)
// console.log(arrayDeNumerosLleno[3])
// let calculoDeSuma = arrayDeNumerosLleno[3] + arrayDeNumerosLleno[4]
// console.log(calculoDeSuma)

// const arrayDeNumerosLlenoDeStrings = ["Hola", "a", "todos"]
// console.log(arrayDeNumerosLlenoDeStrings)

// const arrayDeBooleanos = [true,false,false,true]

// const arrayDeNumerosLleno = [1,2,3,89,5,99,12,444,666,745]
// console.log(arrayDeNumerosLleno)
// for(let i = 0; i < 6 ; i++){
//     console.log("El índice nro: " + i + " contiene el elemento " + arrayDeNumerosLleno[i])
// }

// console.log("Usando length")
// for(let i = 0; i < arrayDeNumerosLleno.length ; i++){
//     console.log("El índice nro: " + i + " contiene el elemento " + arrayDeNumerosLleno[i])
// }
// console.log("Usando length, hay " + arrayDeNumerosLleno.length + " elementos")

// // Agregar elementos al array
// arrayDeNumerosLleno.push(585)
// console.log(arrayDeNumerosLleno)

// // Agregar elementos al principio del array
// arrayDeNumerosLleno.unshift(321)
// console.log(arrayDeNumerosLleno)

// // Para borrar elementos usamos el pop para eliminar el último
// arrayDeNumerosLleno.pop()
// console.log(arrayDeNumerosLleno)

// // Para borrar elementos usamos el shift para eliminar el primero
// arrayDeNumerosLleno.shift()
// console.log(arrayDeNumerosLleno)

// // splice
// arrayDeNumerosLleno.splice(0,2) //start position, cantidad de elementos
// console.log(arrayDeNumerosLleno)

// const arrayDeStrings = ["Hola" , "a" ,"todos"]
// console.log(arrayDeStrings)
// console.log(arrayDeStrings.join("/"))

const nombres1 = ["Sharon", "Jose", "Harold"]
const nombres2 = ["Juan", "David", "Fabian", "Mario"]
// // concat
const nombresConcat = nombres1.concat(nombres2)
console.log(nombresConcat)

// const arrayDePrueba = [1, "abc", true, 2.6]
// console.log(nombresConcat.concat(arrayDePrueba))

// Slice
const nuevoArray = nombresConcat.slice(2,6)
console.log(nuevoArray)

// // IndexOf devuelve el índice
console.log(nuevoArray.indexOf("Fabian"))
console.log(nuevoArray.indexOf("Sharon")) // me devuelve -1... significa que no existe

// includes, devuelve un booleano
console.log(nuevoArray.includes("Juan"))
console.log(nuevoArray.includes("Sharon"))

// // Reverse
// console.log(nuevoArray.reverse())

// // array de objetos
// const objeto1 = {nombre: "Banana", precio: 1200}
// const objeto2 = {nombre: "Manzana", precio: 1450}

// const arrayDeObjetos = [objeto1, objeto2, {nombre: "Frutilla", precio: 1680}]
// console.log(arrayDeObjetos)
// arrayDeObjetos.push({nombre: "Pera", precio: 1350})
// console.log(arrayDeObjetos)

// for (const frutas of arrayDeObjetos){
//     console.log("Fruta: " + frutas.nombre)
// }

// class Producto {
//     constructor (nombre, precio, stock){
//         this.nombre = nombre.toUpperCase()
//         this.precio = parseFloat(precio)
//         this.stock = parseInt(stock)
//     }

//     sumarIva(){
//         this.precio = this.precio * 1.21
//     }

//     mostrarNombre(){
//         console.log("El nombre de la fruta es: " + this.nombre)
//     }
// }

// const productos = []
// console.log(productos)
// productos.push(new Producto("Banana", "1000.5", "12"))
// productos.push(new Producto("Manzana", "334.5", "5"))
// productos.push(new Producto("Pera", "1240.5", "9"))

// for (const fruta of productos){
//     fruta.mostrarNombre()
//     fruta.sumarIva()
// }
// console.log(productos)


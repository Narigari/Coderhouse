// Math
const PI = Math.PI;
const E = Math.E

const A = -6.59
const B = 5.12
const C = 0.49

// // Min y Max
// console.log(Math.min(A, B, C, PI, E))
// console.log(Math.max(A, B, C, PI, E))

// // Ceil
// console.log("Ceil:")
// console.log(Math.ceil(PI))
// console.log(Math.ceil(A))
// console.log(Math.ceil(B))
// console.log(Math.ceil(C))
// console.log(Math.ceil(E))

// // Floor
// console.log("Floor:")
// console.log(Math.floor(PI))
// console.log(Math.floor(A))
// console.log(Math.floor(B))
// console.log(Math.floor(C))
// console.log(Math.floor(E))

// // round
// console.log("Round:")
// console.log(Math.round(PI))
// console.log(Math.round(A))
// console.log(Math.round(B))
// console.log(Math.round(C))
// console.log(Math.round(E))

// // Square root
// console.log("Square Root:")
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(1))
// console.log(Math.sqrt(0))
// console.log(Math.sqrt(-16)) //Nan
// console.log(Math.sqrt(16))

// // Pow
// console.log("Pow:")
// console.log(Math.pow(9,2))
// console.log(Math.pow(9,1/2))

// // Random
// console.log("Random:")
// console.log(Math.random())

// Números entre 100 y 200
// console.log(Math.round(Math.random()*100) + 100)

// const generadorNum = () => Math.round(Math.random()*100)

// for(let i = 0; i < 5; i++) {
//     console.log(generadorNum())
// }

// Clase Date
// console.log (new Date())
// // Construir una fecha > 12/04/1993 8:40 pm
// console.log (new Date(1993, 3, 12, 20, 40, 2))
// Construir una fecha de navidad
const casiNavidad = new Date(2024, 11, 24, 23, 59, 59)

// console.log(casiNavidad.getFullYear())

// Obtener el año actual
const fechaActual = new Date()
// console.log(fechaActual.getFullYear())
// console.log(fechaActual.getMonth() + 1)
// console.log(fechaActual.getDay()) // 1 = lunes
// console.log(fechaActual.getDate())

// console.log(fechaActual.toLocaleString())
// console.log(fechaActual.toDateString())
// console.log(fechaActual.toLocaleDateString())
// console.log(fechaActual.toTimeString())
// console.log(fechaActual.toLocaleTimeString())

// // Diferencia entre fechas
// const MILISEGUNDOS_DIA = 24 * 60 * 60 * 1000
// console.log(MILISEGUNDOS_DIA)
// const DIFERENCIA = Math.round((casiNavidad - fechaActual) / MILISEGUNDOS_DIA)
// console.log("Faltan " + DIFERENCIA + " días para navidad")

// Calcular el tiempo de ejecución de un código
const INICIO = new Date()
for (let i = 1; i <= 1000; i++){
    console.log("Programa ejecutándose")
}
const FIN = new Date()

console.log("El proceso tardó: " + (FIN - INICIO) + " milisegundos")

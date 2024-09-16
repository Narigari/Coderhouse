// setTimeout
// setTimeout(funcionAEjecutar, retardoEnMilisegundos)

// console.log("Hola")

// setTimeout(() => {
//     console.log("Mensaje del medio")
// }, 2000 ) // 2 segundos después

// console.log("Chau")

// //setInterval()
// setInterval(() => {
//     console.log("Tic")
// }, 1000);

// clearTimeout()
// // clearInterval()
// let contador = 0
// const interval = setInterval(() => {
//     contador ++
//     console.log("Vuelta nro " + contador)
//     if (contador == 10){
//         clearInterval(interval)
//         console.log("Proceso terminado")
//     }
// }, 1000);

// console.log("Comenzamos...")

// const finalizar = setTimeout(() => {
//     console.log("Proceso finalizado")
// }, 2000);

// Promesas
const pasarDeNivel = (condicionesCumplidas) => {
    return new Promise ((resolve, reject) =>{
        condicionesCumplidas ?
            resolve("Promesa resuelta") :
            reject("Promesa rechazada")
        
    })
}

console.log(pasarDeNivel(true))
console.log(pasarDeNivel(false))
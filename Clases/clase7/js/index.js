// Funciones de orden superior

// const suma = (a, b) =>  a + b // le asigno una función a esta constante para guardar el resultado del return

// console.log(suma(1,2))

// function mayorQue(numero) {
//     return (otronumero) => otronumero > numero; // retorna otra función
// }

// let mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez(12)) //Hace esta comparación: 12 > 10 ?

// Otro ejemplo
// function asignaOperación (operacion) {
//     if (operacion == "suma"){
//         return (a, b) => a + b
//     } else if (operacion == "resta"){
//         return (a, b) => a - b
//     } else {
//         console.log("Debe ingresar suma o resta")
//     }
// }

// const sumar = asignaOperación("suma")
// const restar = asignaOperación("resta")

// console.log(sumar(4, 5))
// console.log(restar(14, 6))

// Funciones que reciben funciones por parámetro
// const numeros = [1,2,3,4,5,10]
// function porCadaUno(array, funcion) {
//     for (const elemento of array) {
//         funcion(elemento)
//     }
// }

// function potencia(n){
//     return console.log(n*n)
// }
// porCadaUno(numeros,console.log)
// porCadaUno(numeros,potencia)

// const segundoArray = []

// // porCadaUno(numeros, (elemento) => {
// //     segundoArray.push(elemento * 3)
// // })

// function pushear(elemento) {
//     return segundoArray.push(elemento * 3)
// }

// porCadaUno(numeros,pushear)
// console.log(segundoArray)

//////////////////////////////////////////////////////

// Métodos de búsqueda y transformación

// // foreach
// const numeros = [1,2,3,4,5,10]

// numeros.forEach((numero) => {
//     console.log(numero)
// })

// // find
const cursos = [
    {nombre: "JavaScript", estado: "FInalizado"},
    {nombre: "React", estado: "Por empezar"},
    {nombre: "Java", estado: "Por empezar"}
]

const resultado = cursos.find( (elemento) => elemento.nombre === "JavaScript")
console.log(resultado)
const resultadoFalso = cursos.find((elemento) => elemento.nombre ==="Java")
console.log(resultadoFalso)
const resultadoEstadoPorEmpezar = cursos.find((elemento) => elemento.estado === "Por empezar")
console.log(resultadoEstadoPorEmpezar) // Devuelve el primero que encuentra

// // Filter
// const resultado = cursos.filter((elemento) => elemento.nombre === "JavaScript")
// console.log(resultado)
// const resultadoEstadoPorEmpezar = cursos.filter((elemento) => elemento.estado === "Por empezar")
// console.log(resultadoEstadoPorEmpezar) // Genera un nuevo array y con todos los objetos que matchean
// const resultadoFalso = cursos.filter((elemento) => elemento.nombre ==="Python")
// console.log(resultadoFalso)

// // Some
// const resultado = cursos.some( (elemento) => elemento.nombre === "JavaScript")
// console.log(resultado) // Devuelve true o false

// map
const nombres = cursos.map((elemento) => elemento.nombre)
console.log(nombres)

const numeros = [1,2,3,4,5,10]
const dobles = numeros.map(function(numero) {
    return numero * 2
})

console.log(dobles)
console.log(numeros)

// // reduce
// const numeros = [2,1,3,5,4,8,9,7,10,6]
// // const resultado = numeros.reduce((acumulador, elemento) => acumulador + elemento, 10)
// // console.log(resultado)

// // sort
// console.log(numeros.sort((a, b) => a- b))
// console.log(numeros.sort((a, b) => b- a))
// // Spread operator
// const numeros = [1, 2, 56, -10, 25, 100, 0] // cómo imprimo el máximo?
// console.log(Math.max(numeros)) // NaN

// // Solución: 
// console.log(Math.max(...numeros) + "" + Math.min(...numeros) )

// const productos = ["Azúcar", "Yerba", "Café", "Pepsi"]
// const productos2 = ["Coca Cola", "Fernet", "Hielo"]
// // console.log(productos)
// // console.log(...productos)
// // console.log(...productos2)

// // cómo unir todos los elementos de  dos arrays dentro de uno
// const nuevoArray = [...productos, ...productos2]
// // console.log(...nuevoArray)

// const otroNuevoArray = ["Chocolate", "Helado", ...nuevoArray]
// console.log(otroNuevoArray)

// const otroArray = ["Milanesas", "Chivito", "Carne"]

// const objetoProducto = {
//     ...otroNuevoArray
// }
// console.log(objetoProducto)

// const objeto = {
//     ...otroNuevoArray, ...otroArray
// }
// console.log(objeto) // se sobrescriben los índices de los arrays (otroArray sobrescribió a otroNuevoArray)

// const alumno = {
//     nombre: "Sharon",
//     edad: 27,
//     curso: "JavaScript"
// }

// console.log(alumno)
// const nuevoAlumno = {...alumno}
// console.log(nuevoAlumno)

// const comida = {
//     nombre: "Chivito", //chivito va a reemplazar a Sharon porque el key se llama igual (nombre)
//     precio: 1500
// }

// const nuevoObjeto = {
//     ...alumno, 
//     ...comida, 
//     stock: 200
// }
// console.log(nuevoObjeto)

// Rest parámetros
const numeros = [1, 2, 56, -10, 25, 100, 0] 

function sumarElementosDelArray (...numeross){
    // console.log(numeros)
    return console.log(numeross.reduce((acumulador, numero) => acumulador + numero, 0))

}

sumarElementosDelArray(...numeros) //puedo pasarle cualquier cantidad de parámetros, el spread no te limita a la cantidad de elementos
sumarElementosDelArray(1,5,6,8)


function suma(a,b,c){
    return console.log(a+b+c)
}

suma(1,2,3) //a esta función estoy obligada a pasarle 3 parámetros
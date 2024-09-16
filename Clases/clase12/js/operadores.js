// // Acumulador
// let acumulador = 0;
// console.log(acumulador)

// acumulador = acumulador + 1
// console.log(acumulador)
// acumulador = acumulador + 1
// console.log(acumulador)
// acumulador = acumulador + 1
// console.log(acumulador)
// acumulador = acumulador + 1
// console.log(acumulador)
// acumulador += 1
// console.log(acumulador)
// acumulador ++
// console.log(acumulador)

// // Operador ternario
// let temperatura = parseInt(prompt("Ingrese una temperatura"))

// if(temperatura >= 24) {
//     console.log("Está agradable!")
// } else {
//     console.warn("Está de templado a frío")
// }

// temperatura >= 24 ? console.log("Está agradable") : console.warn("Está de templado a frío")

// condición ? true : false
// condición ? caso1 : caso2

// let permiso

// const usuario = {
//     nombre: "Luciano",
//     edad: 3
// }

// if (usuario.edad >= 18) {
//     permiso = true
// } else {
//     permiso = false
// }

// if(permiso){
//     console.log(`El usuario ${usuario.nombre} puede tomar una cervecita`)
// } else {
//     console.warn(`El usuario ${usuario.nombre} es menor de edad`)
// }
// usuario.edad >= 18 ? permiso = true : permiso = false

// const permiso = (usuario.edad >= 18) ? console.log(`El usuario ${usuario.nombre} puede tomar una cervecita`) : console.warn(`El usuario ${usuario.nombre} es menor de edad`)

// // Tabla de verdad (lógica proposicional)
// const V = true;
// const F = false;

// console.log("Tabla de verdad del operador && (y)");
// console.log(V && V); //Si ambos valores son V => true
// console.log(V && F); //Si al menos uno de los valores es F = false
// console.log(F && V); //Si al menos uno de los valores es F = false
// console.log(F && F); //Si ambos valores son F => false

// console.log("Tabla de verdad del operador || (o)");
// console.log(V || V); //Si ambos valores son V => true
// console.log(V || F); //Si al menos uno de los valores es V = true
// console.log(F || V); //Si al menos uno de los valores es V= true
// console.log(F || F); //Si ambos valores son F => false

// console.log("Tabla de verdad del operador ! (negación)");
// console.log(!V); //Si no es verdadero => false
// console.log(!F); //Si no es false => true

// const carritoArray = []

// // if (carritoArray.length === 0) {
// //     console.log("El carrito está vacío")
// // }

// // carritoArray.length === 0 && console.log("El carrito está vacío")

// // Operador || or
// console.log (0 || "Falsy") // Falsy -- un string me da false cuando no está definido
// console.log (40 || "Falsy") // 40
// console.log (null || "Falsy") // Falsy
// console.log (undefined || "Falsy") // Falsy
// console.log ("Hola Mundo" || "Falsy") //Hola Mundo
// console.log ("" || "Falsy") // Falsy -- el primero es string pero no está definido
// console.log (NaN || "Falsy") // Falsy
// console.log (true || "Falsy") // true
// console.log (false || "Falsy") // Falsy

// const usuario = {
//     nombre: "Luciano",
//     edad: 24
// }

// // const usuarioNull = null

// // console.log(usuario || "El usuario no existe")
// // console.log(usuarioNull || "El usuario no existe")

// // Operador Nullish coalescing
console.log( 0 ?? "Nullish") // 0
console.log( 40 ?? "Nullish") // 40
console.log( null ?? 'Nullish') // Nullish
console.log( undefined ?? "Nullish") // Nullish
console.log( "Hola Mundo" ?? "Nullish") // Hola Mundo
console.log( "" ?? "Nullish") // ""
console.log( NaN ?? "Nullish") // NaN
console.log( true ?? "Nullish") // true  
console.log( false ?? "Nullish") // false

// let usuarioNull = null

// console.log(usuario ?? "El usuario no existe")
// console.log(usuarioNull ?? "El usuario no existe")

// Acceso condicional a un objeto
const usuario = {
        nombre: "Luciano",
        edad: 24,
        cursos: {
            desarrolloWeb: "Aprobado",
            javascript: "En curso"
        }
    }

// let usuarioNull = null // o 'let usuarioNull;' <- a secas (no definido)
// console.log(usuario?.nombre || "El usuario no existe")
// console.log(usuarioNull?.nombre || "El usuario no existe")
// console.log(usuario?.cursos?.javascript || "El usuario no existe")
// console.log(usuario?.cursos?.react || "El usuario no existe")
// console.log(usuarioNull?.nombre || "El usuario no existe")

// Desestructuración en parámetros
const usuario1 = {
    nombre: "Luciano",
    edad: 24,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso"
    }
}

const usuario2 = {
    nombre: "Sharon",
    edad: 24,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso"
    }
}

// let nombre = usuario1.nombre
// let edad = usuario.edad
// console.log(nombre, edad)
// let (nombre, edad) = usuario2
// console.log(nombre,edad)

// let {nombre, edad, cursos: {desarrolloWeb, javascript}} = usuario1
// console.log(nombre, edad, desarrolloWeb, javascript) // desestructuré un objeto dentro del objeto

// Alias
// const {
//     nombre: nombreAlias1,
//     edad: edadAlias1,
// } = usuario1;
// const {
//     nombre: nombreAlias2,
//     edad: edadAlias2,
// } = usuario2;

// console.log(nombreAlias2, edadAlias2)
// console.log(nombreAlias1, edadAlias1)

const desestructurarObjetos = (objeto) => {
    const {nombre, edad} = objeto
    console.log(nombre,edad)
}

desestructurarObjetos(usuario1)
desestructurarObjetos(usuario2)

// Desestructuración de arrays
const productos = ["Azúcar", "Yerba", "Café", "Pepsi"]

const [a, b] = productos
console.log(a)
console.log(b)
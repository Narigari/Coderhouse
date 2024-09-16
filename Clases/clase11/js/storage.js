// Evento Submit
let formulario = document.querySelector('#formulario')
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let email = document.getElementById('email');

formulario.addEventListener("submit", (e) => {
    // e.preventDefault()
    let form = e.target

    const nombreStorage = form.children[0].value
    const edadStorage = form.children[1].value
    const emailStorage = form.children[2].value

    localStorage.setItem("nombre", nombreStorage)
    localStorage.setItem("edad", edadStorage)
    localStorage.setItem("email", emailStorage)
    
})

nombre.innerHTML = localStorage.getItem("nombre")
edad.innerHTML = localStorage.getItem("edad")
email.innerHTML = localStorage.getItem("email")

for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i)
    console.log("Clave: " + clave)
    console.log("Valor: " + localStorage.getItem(clave))
}

// localStorage.setItem("carrito", "Manzana")
// sessionStorage.setItem("carrito", "Banana")

// let carrito = localStorage.getItem("carrito")
// console.log(carrito)

const clearLS = document.getElementById("clearLS")

clearLS.addEventListener("click", () => {
    localStorage.clear()
    sessionStorage.clear()
})

const borrarNombre = document.getElementById("borrarNombre")
const borrarEdad = document.getElementById("borrarEdad")
const borrarEmail = document.getElementById("borrarEmail")

borrarNombre.addEventListener("click", () => {
    localStorage.removeItem("nombre")
})

borrarEdad.addEventListener("click", () => {
    localStorage.removeItem("edad")
})

borrarEmail.addEventListener("click", () => {
    localStorage.removeItem("email")
})

// const producto = {
//     nombre: "Azúcar",
//     precio: 1080,
//     stock: 100
// }
// const productoJSON = JSON.stringify(producto)
// console.log(productoJSON)

// localStorage.setItem("producto", productoJSON) // formato JSON
// localStorage.setItem("Nombre de Producto", producto.nombre)
// const productoParseado = JSON.parse(localStorage.getItem("producto")) //Parsear a objeto
// localStorage.setItem("Nombre de Producto en JSON", productoParseado.nombre)

// Guardar un array de productos
const productos = [
    {
        nombre: "Azúcar",
        precio: 1080,
        stock: 100
    },
    {
        nombre: "Yerba",
        precio: 1280,
        stock: 100
    },
    {
        nombre: "Leche",
        precio: 980,
        stock: 100
    },
    {
        nombre: "Café",
        precio: 8000,
        stock: 100
    }

]
const carrito = []

const guardarEnElLocalStorage = (key, value) => {localStorage.setItem(key, value)}

// for (const producto of productos){
//     guardarEnElLocalStorage(producto.nombre, JSON.stringify(producto))
// }

guardarEnElLocalStorage("Productos", JSON.stringify(productos))

for (const producto of productos){
    carrito.push(producto)
}

guardarEnElLocalStorage("carrito", JSON.stringify(carrito))
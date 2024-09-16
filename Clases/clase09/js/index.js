// Acceso a los nodos
// getElementById
let titulo = document.getElementById("titulo").innerText

// getElementsByClassName
// console.log(document.getElementsByClassName("contenedor"))
const contenedores = document.getElementsByClassName("contenedor")
// // console.log(contenedores)
// console.log(contenedores[0])
// console.log(contenedores[1])
// console.log(contenedores[2])
// console.log(contenedores[3])

// console.log(titulo)
// titulo = "Título cambiado"
// console.log(titulo)

// getElementsByTagName
const main = document.getElementsByTagName("main")
console.log(main[0])
const sections = document.getElementsByTagName("section")
// console.log(sections)
// console.log(sections[1].innerHTML)
sections[2].innerHTML = "<h2>Section <strong>3</strong></h2>"

// Recorrer elementos
for(const section of sections) {
    console.log(section.innerHTML)
    console.log(section.innerText)
}

let parrafoAModificar = document.getElementById("parrafo")
let parrafo = document.createElement("p") //creamos un elemento p
parrafo.innerHTML = "Esto es un párrafo creado dinámicamente"

parrafoAModificar.append(parrafo)
// parrafo.remove()
// main[0].remove()
console.log(parrafoAModificar)

let inputName = document.createElement("input")
let inputEdad = document.createElement("input")

parrafoAModificar.appendChild(inputName)
parrafoAModificar.appendChild(inputEdad)
inputName.id = "nombre"
inputEdad.id = "edad"
inputName.value = "lalala"
inputEdad.value = 42

const padre = document.getElementById("padre")
const personas = ["Alejandro", "Sharon", "Carla", "David", "Roberto", "Kevin"]

for(const persona of personas){
    let li = document.createElement("li")
    li.innerHTML = persona
    padre.appendChild(li)
}

// Plantillas literales
let producto = {id: 1, nombre: "Azúcar", precio: 1090}
let concatenando = "ID = " + producto.id + " nombre del Producto es: " + producto.nombre + " y su precio es de $" + producto.precio

console.log(concatenando)

let plantilla = `Id : ${producto.id} nombre del producto es: ${producto.nombre} y su precio es de $ ${producto.precio}`

console.log(plantilla)

const container = document.createElement("div")
container.innerHTML = `
                        <h3>ID: ${producto.id}</h3>
                        <p>Nombre del producto: ${producto.nombre}</p>
                        <h4>Precio $${producto.precio}</h4>
                        `
main[0].appendChild(container) //VER PPT DE ESTA CLASE PARA UN EJEMPLO CON ARRAY

// querySelector -> selecciona 1 solo elemento
// querySelectorAll -> selecciona todos los elementos que cumplan con lo que  estoy pidiendo

const tituloH1 = document.querySelector("#titulo")
console.log(tituloH1)
const contenedoresDiv = document.querySelectorAll(".contenedor")
console.log(contenedoresDiv)
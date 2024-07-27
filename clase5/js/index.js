// // Objetos
// let nombreProducto = "Azúcar"
// let precioProducto = 1000
// let categoriaProducto = "Almacén"
// console.log(nombreProducto)
// console.log(precioProducto)
// console.log(categoriaProducto)

// let nombreProducto1 = "Yerba"
// let precioProducto1 = 1200
// let categoriaProducto1 = "Almacén"
// console.log(nombreProducto1,precioProducto1,categoriaProducto1)

// // Definir Objeto Producto
// const producto1 = {
//     nombre: "Azúcar",
//     precio: 1000,
//     categoria: "Almacén"
// };
// console.log(producto1)
// console.log(producto1.nombre)
// console.log(producto1.precio)
// console.log(producto1.categoria)

// const producto2 = {
//     nombre: "Yerba",
//     precio: 1200,
//     categoria: "Almacén"
// };
// console.log(producto2)
// console.table(producto2)
// console.log(producto2["nombre"])
// console.log(producto2["precio"])
// console.log(producto2["categoria"])

// producto1.categoria = "Dulces" // Reasignación de valor
// console.log(producto1)
// producto1.precio = 1200

// Constructores
// function Producto (nombre, precio, categoria) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
// }

// const producto3 = new Producto("Azúcar",1000,"Almacén")
// console.log(producto3)
// const producto4 = new Producto("Yerba",1200,"Almacén")
// console.log(producto4)

// Otra forma:
// function Producto1 (objeto) {
//     this.nombre = objeto.nombre;
//     this.precio = objeto.precio;
//     this.categoria = objeto.categoria;
// }

// const producto5 = new Producto1({
//     nombre: "Yerba",
//     precio: 1200,
//     categoria: "Almacén"
// })
// console.log(producto5)

// function Auto (marca, color, precio, modelo, cilindraje){
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
// }

// const auto1 = new Auto("Ford", "Azul", 100000, 2024, "2.0")
// const auto2 = new Auto("Toyota", undefined, null ,2024,"1.8")

// console.log(auto1)
// console.log(auto2)

// Diferencia entre funciones y métodos
// function Auto (marca, color, precio, modelo, cilindraje){
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function(){
//         console.log("El auto está encendido")
//     }
//     this.apagar = function(){
//         console.log("El auto está apagado")
//     }
// }

// const auto3 = new Auto("Ford", "Azul", 100000, 2024, "3.0");
// auto3.encender();
// auto3.apagar();

// function Moto(marca, color, precio, modelo, cilindraje){
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function(){
//         console.log("La moto está encendida")
//     }
//     this.apagar = function(){
//         console.log("La moto está apagada")
//     }
// }

// const moto1 = new Moto("Honda", "Negra", 50000, 2022, "1.0");
// moto1.encender();
// moto1.apagar();


// const IVA = 1.21;

// function Producto (nombre, precio, categoria) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
//     this.precioFinal = function() {
//         this.precio = precio * IVA
//     }
// }
// const producto6 = new Producto("Yerba", 1000, "Almacén")
// console.log(producto6)
// producto6.precioFinal();
// console.log(producto6)

// function Auto (marca, color, precio, modelo, cilindraje){
//     this.marca = marca;
//     this.color = color;
//     this.precio = precio;
//     this.modelo = modelo;
//     this.cilindraje = cilindraje;
//     this.encender = function(){
//         console.log("El auto está encendido")
//     }
//     this.apagar = function(){
//         console.log("El auto está apagado")
//     }
// }
// const auto3 = new Auto("Ford", "Azul", 100000, 2024, "3.0");
// auto3.encender();
// auto3.apagar();

// console.log("marca" in auto3) // true
// console.log("nombre" in auto3) // false

// for (const propiedad in auto3) {
//     console.log(auto3[propiedad])
// }

// Clases
class Vehiculo {
    constructor(marca, color, precio, modelo, cilindraje){
            this.marca = marca;
            this.color = color;
            this.precio = precio;
            this.modelo = modelo;
            this.cilindraje = cilindraje;
                this.encender = function(){
        console.log("El " + this.marca + " está encendido")
    }
    this.apagar = function(){
        console.log("El " + this.marca + " está apagado")
    }
    }
}

const auto = new Vehiculo("Ford", "Azul", 100000, 2024, "3.0");
console.log(auto)
const moto = new Vehiculo("Honda", "Negra", 50000, 2022, "1.0")
console.log(moto)

auto.encender();
auto.apagar();
moto.encender();
moto.apagar();
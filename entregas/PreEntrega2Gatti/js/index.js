// Creación de un array fijo de marcas, piezas y tamaños
const marcas = ["Ravensburger", "Clementoni","Educa"]

const cantidadDePiezas = [500, 1000, 1500]

const medidas = [
    {piezas: 500, ancho: 36, largo: 50},
    {piezas: 1000, ancho: 50, largo: 70},
    {piezas: 1500, ancho: 60, largo: 85}
]

// Creo un nuevo array con la combinación de las 3 marcas x las 3 cantidades de piezas = 9 elementos
const marcasYPiezas = []

for (let marca of marcas) {
    for (let piezas of cantidadDePiezas) {
        marcasYPiezas.push({ marca, piezas})
    }
}

// Actualizo el array agregándole dos atributos (ancho y largo), basado en la cantidad de piezas de cada elemento del array
marcasYPiezas.forEach((puzz) => {
    puzz.ancho =  medidas.find( (el) => el.piezas === puzz.piezas).ancho
    puzz.largo =  medidas.find( (el) => el.piezas === puzz.piezas).largo
    }
)

console.log(marcasYPiezas)

// Función para crear nuevos puzzles con sus atributos
class Puzzle {
    constructor(marca, titulo, cantidadPiezas, ancho, largo, vecesArmado) {
        this.marca = marca
        this.titulo = titulo
        this.cantidadPiezas = cantidadPiezas
        this.largo = largo
        this.ancho = ancho
        this.vecesArmado = vecesArmado
    }
}

// Pequeña base de datos hardcodeada
const puzzle1 = new Puzzle("Ravensburger", "Enchanted Christmas", 1500, 60, 85, 15)
const puzzle2 = new Puzzle("Ravensburger", "Evening in Pisa", 500, 36, 50, 32)
const puzzle3 = new Puzzle("Ravensburger", "In the Greenhouse", 1000, 50, 70, 20)
const puzzle4 = new Puzzle("Clementoni", "Unicorns", 500, 36, 50, 9)
const puzzle5 = new Puzzle("Clementoni", "Twilight howl", 1000, 50, 70, 29)
const puzzle6 = new Puzzle("Clementoni", "Antiques & curiosities", 500, 36, 50, 55)
const puzzle7 = new Puzzle("Educa", "Cats on the shelf", 1500, 60, 85, 33)
const puzzle8 = new Puzzle("Educa", "Dragon girl", 1000, 50, 70, 64)
const puzzle9 = new Puzzle("Educa", "London Postcard", 1500, 60, 85, 7)

const puzzleDB = [puzzle1,puzzle2,puzzle3,puzzle4,puzzle5,puzzle6,puzzle7,puzzle8,puzzle9]
console.log(puzzleDB)

// Sort & slice para mostrar el top 5 de puzzles que fueron armados más veces
puzzleDB.sort((a, b) => b.vecesArmado - a.vecesArmado)

const top5 = puzzleDB.slice(0,5)

console.log("Los 5 puzzles más armados son: ")
top5.forEach(item => console.log(item.titulo))


// Función para encontrar ancho y largo cuando el usuario pone la combinación de marca-piezas
function findMarcaYPiezas(marca, piezas) {
        return marcasYPiezas.find(entry => entry.marca === marca && entry.piezas == piezas)
}

function agregarAPuzzleDB(marca, titulo, piezas) {
    let item = findMarcaYPiezas(marca, piezas)
    
    if (item) {
        // Crea un nuevo puzzle y le pone 1 vez armado
        let newPuzzle = {
            marca: marca,
            titulo: titulo,
            piezas: piezas,
            ancho: item.ancho,
            largo: item.largo,
            vecesArmado: 1
        }

        puzzleDB.push(newPuzzle)

        return newPuzzle;
    } else {
        return null; //si no se encuentra la combinación de marca-piezas
    }
}

let marca = prompt("Ingrese la marca:\nRavensburger, Clementoni o Educa")
let titulo = prompt("Ingrese el título:")
let piezas = prompt("Ingrese cantidad de piezas:\n500, 1000 o 1500")

let newEntry = agregarAPuzzleDB(marca, titulo, piezas)

if (newEntry) {
    alert(`Se agregó un nuevo puzzle: Marca: ${newEntry.marca}, Titulo: ${newEntry.titulo}, Ancho: ${newEntry.ancho}, Largo: ${newEntry.largo}, Veces Armado: ${newEntry.vecesArmado}`)
    console.log(puzzleDB)
} else {
    alert("No se encontró esa marca y/o cantidad de piezas")
}

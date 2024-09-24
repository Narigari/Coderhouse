//Datos iniciales que se cargar en el Local Storage como para tener algo para probar la página
const BRANDS = ["Ravensburger", "Clementoni", "Educa"]

const PIECES = [500, 1000, 1500, 2000]

const PUZZLES = [
    {
        title: "Cats on the Shelf",
        brand: "Ravensburger",
        pieces: 500
    },
    {
        title: "Seafood",
        brand: "Ravensburger",
        pieces: 1500
    },
    {
        title: "New York",
        brand: "Ravensburger",
        pieces: 500
    }
]

const USERS = [
    {
        username: "Admin",
        password: "admin1234",
        isAdmin: true,
        ownedPuzzles: []
    },
    {
        username: "User",
        password: "user1234",
        isAdmin: false,
        ownedPuzzles: []
    }
]

function getLocalStorageItem(item){

    return JSON.parse(localStorage.getItem(item))

}

function setLocalStorageItem(item, object){

    localStorage.setItem(item, JSON.stringify(object))

}

//Hace una carga inicital de datos sólo si la cantidad de elementos por item en el Local Storage es menor a la cantidad por itemn arriba listados o si directamente no hay nada cargado.
function loadInitialData(){

    //Primero traigo todo lo que ya esté cargado en el Local Storage
    let lsBrands = getLocalStorageItem("brands")
    let lsUsers = getLocalStorageItem("users")
    let lsPieces = getLocalStorageItem("pieces")
    let lsPuzzles = getLocalStorageItem("puzzles")

    //Si no hay nada cargado en el Local Storage o si la cantidad de elementos por item en el Local Storage es menor a lo que está listado arriba, hago una carga. Si no, dejo lo que ya esté cargado en el Local Storage (por si ya estuve agregando items a mano a través de la página)
    if(lsBrands === null || lsBrands.length < BRANDS.length) setLocalStorageItem("brands", BRANDS)
    if(lsPieces === null || lsPieces.length < PIECES.length) setLocalStorageItem("pieces", PIECES)
    if(lsUsers === null || lsUsers.length < USERS.length) setLocalStorageItem("users", USERS)
    if(lsPuzzles === null || lsPuzzles.length < PUZZLES.length) setLocalStorageItem("puzzles", PUZZLES)

}

loadInitialData()
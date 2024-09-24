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
    },
    {
        username: "User",
        password: "user1234",
        isAdmin: false
    }
]

// Función para asegurarnos una mínima lista de items para marcas y piezas en el LS
function loadInitialData(){

    let lsBrands = JSON.parse(localStorage.getItem("brands"))

    if(lsBrands === null || lsBrands.length < BRANDS.length){
        localStorage.setItem("brands", JSON.stringify(BRANDS))
    }

    let lsPieces = JSON.parse(localStorage.getItem("pieces"))

    if(lsPieces === null || lsPieces.length < PIECES.length){
        localStorage.setItem("pieces", JSON.stringify(PIECES))
    }

    localStorage.setItem("puzzles", JSON.stringify(PUZZLES))

    localStorage.setItem("users", JSON.stringify(USERS))

}

loadInitialData()
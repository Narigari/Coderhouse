const BRANDS = ["Ravensburger", "Clementoni", "Educa"]

const PIECES = [500, 1000, 1500, 2000]

const PUZZLES = [
    {
        title: "Cat's on the Shelf",
        brand: "Ravensburger",
        pieces: 500
    },
    {
        title: "Seafood",
        brand: "Ravensburger",
        pieces: 500
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
        isAdmin: true
    }
]


function loadInitialData(){

    let lsBrands = JSON.parse(localStorage.getItem("brands"))

    if(lsBrands === null || lsBrands.length < BRANDS.length){
        localStorage.setItem("brands", JSON.stringify(BRANDS))
    }

    localStorage.setItem("pieces", JSON.stringify(PIECES))

    localStorage.setItem("puzzles", JSON.stringify(PUZZLES))

    localStorage.setItem("users", JSON.stringify(USERS))

}

loadInitialData()
const BODY = document.getElementsByTagName("body")

function renderPuzzleList(){

    const MAIN = document.getElementsByTagName("main")

    let puzzleListDiv = document.createElement("div")
    let puzzleListName = document.createElement("p")
    let puzzleList = document.createElement("ul")

    puzzleListDiv.id = "puzzleListDiv"
    puzzleListName.id = "puzzleListName"
    puzzleList.id = "puzzleList"

    puzzleListName.innerHTML = "Lista de Puzzles en la DB"
    
    puzzleListDiv.appendChild(puzzleListName)
    puzzleListDiv.appendChild(puzzleList)

    MAIN[0].appendChild(puzzleListDiv)

}

function refreshPuzzleList(puzzleDB){

    const PUZZLE_LIST = document.getElementById("puzzleList")

    PUZZLE_LIST.replaceChildren()

    for (let i = 0; i < puzzleDB.length; i++){

        let puzzleLi = document.createElement("li")

        puzzleLi.innerHTML = `${puzzleDB[i].nombre} de ${puzzleDB[i].marca} de ${puzzleDB[i].piezas} piezas mide ${puzzleDB[i].largo}cm x ${puzzleDB[i].ancho}cm\n`

        PUZZLE_LIST.appendChild(puzzleLi)

    }

}

function renderForm(){

    const MAIN = document.getElementsByTagName("main")

    let formDiv = document.createElement("div")
    let form = document.createElement("form")
    let brandLabel = document.createElement("label")
    let brandInput = document.createElement("select")
    let piecesLabel = document.createElement("label")
    let piecesInput = document.createElement("select")
    let nameLabel = document.createElement("label")
    let nameInput = document.createElement("input")
    let submitButton = document.createElement("button")

    formDiv.id = "formDiv"

    brandLabel.innerHTML = "Seleccione una marca"
    piecesLabel.innerHTML = "Seleccion una cantidad de piezas"
    nameLabel.innerHTML = "Inrese el nombre del puzzle"
    submitButton.innerHTML = "Crear Puzzle"

    form.addEventListener("submit", (event)=>{

        event.preventDefault()

        let puzzleDB = []
        let lStorage = JSON.parse(localStorage.getItem("puzzleDB"))

        if (lStorage) {

            puzzleDB = lStorage

        }

        let newPuzzle = {}
        
        newPuzzle.nombre = "Nuevo puzzle"
        newPuzzle.marca = "Marca de puzzle"
        newPuzzle.piezas = 1000
        newPuzzle.largo = 70
        newPuzzle.ancho = 30

        puzzleDB.push(newPuzzle)
    
        localStorage.setItem("puzzleDB", JSON.stringify(puzzleDB))

        refreshPuzzleList(puzzleDB)

    })
    
    form.appendChild(brandLabel)
    form.appendChild(brandInput)
    form.appendChild(piecesLabel)
    form.appendChild(piecesInput)
    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(submitButton)

    formDiv.appendChild(form)

    MAIN[0].appendChild(formDiv)

}

function renderMain(){

    let main = document.createElement("main")
    
    BODY[0].appendChild(main)

}

renderMain()
renderForm()
renderPuzzleList()
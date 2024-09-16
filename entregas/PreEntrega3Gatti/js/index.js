const header = document.querySelector('#header')
const navegacion = document.createElement('div')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const brands = ["Ravensburger", "Clementoni", "Educa", "Trefl"] //Array dropdown marcas
const pieces = [500, 1000, 1500, 2000] //Array dropdown piezas

const enlaces = [
    {
        link: "index",
        nombre: "Puzzles"
    },
    // {
    //     link: "contact",
    //     nombre: "Contacto"
    // }
]

header.appendChild(navegacion)
navegacion.appendChild(nav)
nav.appendChild(ul)

navegacion.className = "nav_container1"
ul.className = "nav_items"

for (const link of enlaces) {
    const li = document.createElement('li')
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`
    ul.appendChild(li)
    li.className = "nav_items2"
}

const body = document.getElementsByTagName("body")

//Función para renderizar la lista de puzzles
function renderPuzzleList(){

    const main = document.getElementsByTagName("main")

    let puzzleListDiv = document.createElement("div")
    let puzzleListName = document.createElement("p")
    let puzzleList = document.createElement("ul")

    puzzleListDiv.id = "puzzleListDiv"
    puzzleListName.id = "puzzleListName"
    puzzleList.id = "puzzleList"
    puzzleListDiv.className = "bottom_body"

    puzzleListName.innerHTML = "Lista de Puzzles en la DB:"
    puzzleListName.className = "bottom_left"
    puzzleList.className = "bottom_right"
    
    puzzleListDiv.appendChild(puzzleListName)
    puzzleListDiv.appendChild(puzzleList)

    main[0].appendChild(puzzleListDiv)

}

function refreshPuzzleList(puzzleDB){

    const puzzleList = document.getElementById("puzzleList")

    puzzleList.replaceChildren()

    for (let i = 0; i < puzzleDB.length; i++){

        let puzzleLi = document.createElement("li")
        puzzleLi.innerHTML = `${puzzleDB[i].nombre} / ${puzzleDB[i].marca} / ${puzzleDB[i].piezas} piezas\n`
        puzzleList.appendChild(puzzleLi)

    }

}

// Función para crear el contenido de los dropdown menus
function createDropdown(items, parentObject){

    let defaultOption = document.createElement("option")

    defaultOption.innerHTML = "Seleccione una opción"
    defaultOption.disabled = true
    defaultOption.selected = true

    parentObject.appendChild(defaultOption)

    for(element of items){
        let opt = document.createElement("option")
        opt.innerHTML = element
        parentObject.appendChild(opt)
    }

}

// Función para renderizar la zona del formulario
function renderForm(){

    const main = document.getElementsByTagName("main")
    
    let messages = document.createElement("div")
    let errorMessage = document.createElement("p")
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
    form.className = "card_activity2"

    brandLabel.innerHTML = "Seleccione una marca"
    piecesLabel.innerHTML = "Seleccione una cantidad de piezas"
    nameLabel.innerHTML = "Ingrese el título del puzzle"
    submitButton.innerHTML = "Crear Puzzle"
    brandInput.id = "brandInput"
    piecesInput.id = "piecesInput"
    messages.id = "Mensajes"
    messages.className = "link_active"
        
    createDropdown(brands, brandInput)
    createDropdown(pieces, piecesInput)

    form.addEventListener("submit", (event)=>{

        event.preventDefault()

        let puzzleDB = []
        let lStorage = JSON.parse(localStorage.getItem("puzzleDB"))

        if (lStorage) {
            puzzleDB = lStorage
        }

        let newPuzzle = {}
        
        newPuzzle.nombre = nameInput.value
        newPuzzle.marca = brandInput.value
        newPuzzle.piezas = piecesInput.value
        
        //Chequeo con la función validateOption que no puedan elegir la respuesta que doy x default.
        const respuestaBrand = validateOption("brandInput")
        if (!respuestaBrand.esValido) {
            errorMessage.innerHTML = respuestaBrand.mensaje + "marca"
            return
        } 

        const respuestaPieces = validateOption("piecesInput")
        if (!respuestaPieces.esValido) {
            errorMessage.innerHTML = respuestaPieces.mensaje + "piezas"
            return
        } 

        if(!nameInput.value){
            errorMessage.innerHTML = "Ingrese un título"
            return
        } 
        
        puzzleDB.push(newPuzzle)
        
        localStorage.setItem("puzzleDB", JSON.stringify(puzzleDB))
        
        refreshPuzzleList(puzzleDB)
        errorMessage.innerHTML ="Puzzle agregado con éxito"

    })
    
    form.appendChild(brandLabel)
    form.appendChild(brandInput)
    form.appendChild(piecesLabel)
    form.appendChild(piecesInput)
    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(submitButton)
    form.appendChild(messages)
    messages.appendChild(errorMessage)

    formDiv.appendChild(form)

    main[0].appendChild(formDiv)

}

//Función para validar que elijan una opción si o si
function validateOption(objectId){

    let opt = document.getElementById(objectId)
    
    if(opt.value === "Seleccione una opción"){
        return {esValido: false, mensaje: "Por favor, seleccione una opción válida de "}
    }
    return {esValido: true, mensaje: "Todo ok"}

}

function renderMain(){
    
    let main = document.createElement("main")
    
    body[0].appendChild(main)
    
}


renderMain()
renderForm()
renderPuzzleList()

// Botón Borrar LS y refrescar
const clearLS = document.getElementById("clearLS")

clearLS.addEventListener("click", () => {
    localStorage.clear()
    sessionStorage.clear()
    location.reload();
})
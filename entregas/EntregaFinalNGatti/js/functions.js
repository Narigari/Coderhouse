function populateSelector(collection, parent){

    let items = JSON.parse(localStorage.getItem(collection))

    parent.replaceChildren()
    
    let defaultOption = document.createElement("option")

    defaultOption.innerHTML = "Seleccione una opción"
    defaultOption.disabled = true
    defaultOption.selected = true

    parent.appendChild(defaultOption)

    for(element of items){
        let opt = document.createElement("option")
        opt.innerHTML = element
        parent.appendChild(opt)
    }

}

function populateList(collection, parent){

    let items = JSON.parse(localStorage.getItem(collection))

    parent.replaceChildren()
    
    for(element of items){
        let li = document.createElement("li")
        let button = document.createElement("button")
        let buttonIndex = items.indexOf(element)
        
        li.innerHTML = element
        parent.appendChild(li)
        
        button.innerHTML = "Borrar"
        button.id = buttonIndex
        button.addEventListener("click", (e) => {
            e.preventDefault()
            removeItem(collection, buttonIndex)
        })
        li.appendChild(button)

    }
}

// Función para remover items de las listas y selectores
function removeItem(collection, indexToRemove){

    let array = JSON.parse(localStorage.getItem(collection))

    let newArray = array.filter((item, idx) => {

        if (idx !== indexToRemove) {
            return item
        }

    })

    localStorage.setItem(collection, JSON.stringify(newArray));

    populateSelector("brands", brandsSelector)
    populateSelector("pieces", piecesSelector)

    populateList("brands", brandList)
    populateList("pieces", piecesList)

}

// Funciones para actualizar LS (get y set)
function getLocalStorageItem(item){
    return JSON.parse(localStorage.getItem(item))
}

function setLocalStorageItem(item, object){
    localStorage.setItem(item, JSON.stringify(object))
}
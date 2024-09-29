function populateSelector(collection, parent, defaultValue){
    let items = JSON.parse(localStorage.getItem(collection))

    parent.replaceChildren()
    
    let defaultOption = document.createElement("option")

    defaultOption.value = ""
    defaultOption.innerHTML = defaultValue
    defaultOption.disabled = "disabled"
    defaultOption.selected = "selected"

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
function getLocalStorageItem(itemName){
    return JSON.parse(localStorage.getItem(itemName))
}

function setLocalStorageItem(itemName, object){
    localStorage.setItem(itemName, JSON.stringify(object))
}

function setSessionStorageItem(itemName, object){
    sessionStorage.setItem(itemName,JSON.stringify(object))
}

function getSessionStorageItem(itemName){
    return JSON.parse(sessionStorage.getItem(itemName))
}

function createNewUser(object){
    let currentUsers = getLocalStorageItem("users")

    currentUsers.push(object)
    
    setLocalStorageItem("users", currentUsers)

    return "Nuevo usuario creado"
}

function toggleItemsVisibility(){
    const admin = document.getElementById("admin")
    const profile = document.getElementById("profile")
    const logout = document.getElementById("logout")
    const loggedItems = document.getElementsByClassName("logged-items")
    const unloggedItems = document.getElementsByClassName("unlogged-items")

    logout.addEventListener("click",(event)=>{
        event.preventDefault()

        sessionStorage.removeItem("loggedUser")

        window.location = "index.html"
    })

    let loggedUser = getSessionStorageItem("loggedUser")

    let isLogged = !loggedUser || loggedUser.length === 0 ? false : true

    if (isLogged){
        for (item of loggedItems){
            item.style.display = "block"
        }

        if (loggedUser["isAdmin"]) {
            if (profile) profile.style.display = "none"
        } else {
            if (admin) admin.style.display = "none"
        }

        for (item of unloggedItems){
            item.style.display = "none"
        }
    } else {
        for (item of loggedItems){
            item.style.display = "none"
        }

        for (item of unloggedItems){
            item.style.display = "block"
        }
    }
}
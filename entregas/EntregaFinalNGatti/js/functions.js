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

function createNavBar(){
    const navMenu = document.getElementById("nav-menu")
    const adminItem = document.createElement("li")
    const adminHref = document.createElement("a")
    const userItem = document.createElement("li")
    const userHref = document.createElement("a")
    const loginItem = document.createElement("li")
    const loginHref = document.createElement("a")
    const logoutItem = document.createElement("li")
    const logoutHref = document.createElement("a")
    const homeItem = document.createElement("li")
    const homeHref = document.createElement("a")
    const newUserItem = document.createElement("li")
    const newUserHref = document.createElement("a")
    
    homeHref.innerHTML = "Inicio"
    homeHref.href = "index.html"
    homeItem.appendChild(homeHref)
    adminHref.innerHTML = "Administración"
    adminHref.href = "admin.html"
    adminItem.appendChild(adminHref)
    userHref.innerHTML = "Perfil"
    userHref.href = "profile.html"
    userItem.appendChild(userHref)
    loginHref.innerHTML = "Login"
    loginHref.href = "login.html"
    loginItem.appendChild(loginHref)
    logoutHref.innerHTML = "Logout"
    logoutHref.href = "index.html"
    logoutItem.appendChild(logoutHref)
    newUserHref.innerHTML = "Nuevo Usuario"
    newUserHref.href = "new.html"
    newUserItem.appendChild(newUserHref)
    
    let loggedUser = getSessionStorageItem("loggedUser")

    let currentPage = window.location.href

    navMenu.replaceChildren()

    navMenu.appendChild(homeItem)

    

    if (!loggedUser || loggedUser.length === 0){
        navMenu.appendChild(loginItem)
        navMenu.appendChild(newUserItem)
    }
}
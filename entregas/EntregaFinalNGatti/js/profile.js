const editUserForm = document.getElementById("edit-user-form")
const nationalitySelector = document.getElementById("nationality-selector")
const messageBox = document.getElementById("message-box")

const puzzles = getLocalStorageItem("puzzles")
const users = getLocalStorageItem("users")
const loggedUser = getSessionStorageItem("loggedUser")
const collection = getLocalStorageItem("collection")
const currentUsername = loggedUser.username
const currentUserData = users.filter((element) => {return element.username === currentUsername})
const currentUserNationality = currentUserData[0].nationality
const currentUserPassword = currentUserData[0].password
const currentUserInstagram = currentUserData[0].instagram

toggleItemsVisibility()
populateSelector("countries", nationalitySelector, "Seleccione una nacionalidad")

editUserForm["username"].value = currentUsername
editUserForm["nationality"].value = currentUserNationality
editUserForm["instagram"].value = currentUserInstagram

editUserForm.addEventListener("submit", (event) => {
    event.preventDefault()

    //Por default mi nueva clave va a ser igual que la clave actual
    let newUserPassword = currentUserPassword

    //Checkeo que estén correctos todos los campos de claves sólo en caso de que quiera cambiar la clave
    if (editUserForm["new-password"].value !== ""){

        if(editUserForm["current-password"].value === ""){

            messageBox.style.color = "red"

            messageBox.textContent = "Por favor, ingrese su clave actual!"
    
            setTimeout(()=>{
    
                editUserForm["current-password"].value = ""
                
                messageBox.textContent = ""
    
                editUserForm["current-password"].focus()
    
            }, 2000)
    
            return
        }

        if(editUserForm["current-password"].value !== currentUserPassword){
            messageBox.style.color = "red"

            messageBox.textContent = "La clave actual ingresada es incorrecta!"
    
            setTimeout(()=>{
    
                editUserForm["current-password"].value = ""
                
                messageBox.textContent = ""
    
                editUserForm["current-password"].focus()
    
            }, 2000)
    
            return
        }

        if(editUserForm["new-password-check"].value === ""){
            messageBox.style.color = "red"

            messageBox.textContent = "Por favor, repita su clave nueva!"
    
            setTimeout(()=>{
    
                editUserForm["new-password-check"].value = ""
                
                messageBox.textContent = ""
    
                editUserForm["new-password-check"].focus()
    
            }, 2000)
    
            return
        }

        if(editUserForm["new-password"].value !== editUserForm["new-password-check"].value){
            messageBox.style.color = "red"

            messageBox.textContent = "Las claves no coinciden!"
    
            setTimeout(()=>{
    
                editUserForm["new-password-check"].value = ""
                
                messageBox.textContent = ""
    
                editUserForm["new-password-check"].focus()
    
            }, 2000)
    
            return
        }
    }

        //Si pasó todos los chequeos anteriores, entonces el nuevo password va a ser lo que el usuario haya ingresado como nueva clave
        newUserPassword = editUserForm["new-password"].value

        //Armo un objeto con los datos nuevos del usuario logueado
        const newUserData = {
            username: currentUsername,
            isAdmin: currentUserData[0].isAdmin,
            password: newUserPassword,
            nationality: editUserForm["nationality"].value,
            instagram: editUserForm["instagram"].value
        }
    
        //Creo una variable en la que voy a guardar todos los usuarios menos el que estoy queriendo actualizar
        const newUsers = users.filter((element) => {return element.username !== currentUsername})

        //A ese array le pusheo los nuevos datos del usuario y los guardo en el local storage
        newUsers.push(newUserData)
        
        setLocalStorageItem("users", newUsers)

        messageBox.style.color = "green"
    
        messageBox.textContent = "Datos salvados con éxito!"
    
        setTimeout(()=>{
         
            messageBox.textContent = ""

            editUserForm["current-password"].value = ""

            editUserForm["new-password"].value = ""

            editUserForm["new-password-check"].value = ""
    
        }, 2000)
})

function refreshCollection(puzzleDB){
    const collection = document.getElementById("my-collection")

    collection.replaceChildren()

    for (let i = 0; i < puzzleDB.length; i++){
        let puzzleLi = document.createElement("li")
        puzzleLi.innerHTML = `${puzzleDB[i].brand} / ${puzzleDB[i].pieces} piezas / ${puzzleDB[i].title} \n`
        collection.appendChild(puzzleLi)
    }
}

refreshCollection(collection)
const nationalitySelector = document.getElementById("nationality-selector")
const newUserForm = document.getElementById("new-user-form")
const messageBox = document.getElementById("message-box")

populateSelector("countries", nationalitySelector, "Seleccione una nacionalidad")

toggleItemsVisibility()

newUserForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    //Verifico que la claves ingresadas coincidan
    if (newUserForm["password"].value !== newUserForm["password-check"].value){
        messageBox.style.color = "red"

        messageBox.textContent = "Las claves ingresadas no coinciden!"

        setTimeout(()=>{

            newUserForm["password"].value = ""
            
            newUserForm["password-check"].value = ""
            
            messageBox.textContent = ""

            newUserForm["password"].focus()

        }, 2000)

        return
    }

    //Genero el objeto de nuevo usuario
    let newUser = {
        username: newUserForm["username"].value,
        password: newUserForm["password"].value,
        isAdmin: false,
        nationality: newUserForm["nationality"].value,
        instagram: newUserForm["instagram"].value
    }

    createNewUser(newUser)

    messageBox.style.color = "green"
        
    messageBox.textContent = "Bienvenido/a!"

    //Creo un objeto con la info del usuario loggeado
    let loggedUser = {
        username: newUser.username,
        isAdmin: newUser.isAdmin
    }

    //Guardo en el session storage los datos del usuario logeado actualmente
    setSessionStorageItem("loggedUser", loggedUser)

    //Pongo un timeout para cambiar de página una vez loggeado para más efecto (innecesario en casos reales)

    setTimeout(()=>{
        window.location.href = "index.html"
    },500)
})
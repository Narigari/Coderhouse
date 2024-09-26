const messageBox = document.getElementById("message-box")
const loginForm = document.getElementById("login-form")
const username = document.getElementById("username")
const password = document.getElementById("password")

createNavBar()

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const currentUsers = getLocalStorageItem("users")

    //Busco el usuario en cuestión dentro de la variable users y la guardo en userFound.
    let userFound = currentUsers.filter((element) => element.username === username.value)

    //Si la longitud de userFound es 0 o si el password no coincide, devuelvo un mensaje de error sin especificar cuál es el dato que está incorrecto.
    if (userFound.length === 0 || userFound[0].password !== password.value){

        messageBox.style.color = "red"
        
        messageBox.textContent = "Usuario o clave inválido!"

        setTimeout(()=>{

            password.value = ""
            
            username.value = ""
            
            messageBox.textContent = ""

        }, 2000)

        return
    }

    messageBox.style.color = "green"
        
    messageBox.textContent = "Bienvenido/a!"

    //Creo un objeto con la info del usuario loggeado
    let loggedUser = {
        username: userFound[0].username,
        isAdmin: userFound[0].isAdmin
    }

    //Guardo en el session storage los datos del usuario logeado actualmente
    setSessionStorageItem("loggedUser", loggedUser)

    //Pongo un timeout para cambiar de página una vez loggeado para más efecto (innecesario en casos reales)
    setTimeout(()=>{
        window.location.href = "index.html"
    }, 500)

});
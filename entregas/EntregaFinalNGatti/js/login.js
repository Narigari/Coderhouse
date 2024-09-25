const loginMessageBox = document.getElementById("login-message-box")
const loginForm = document.getElementById("login-form")
const username = document.getElementById("username")
const password = document.getElementById("password")

loginForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users"))

    //Busco el usuario en cuestión dentro de la variable users y la guardo en userFound.
    let userFound = users.filter((element) => element.username === username.value)

    //Si la longitud de userFound es 0 o si el password no coincide, devuelvo un mensaje de error sin especificar cuál es el dato que está incorrecto.
    if (userFound.length === 0 || userFound[0].password !== password.value){

        loginMessageBox.style.color = "red"
        
        loginMessageBox.textContent = "Invalid username or password!"

        setTimeout(()=>{

            password.value = ""
            
            username.value = ""
            
            loginMessageBox.textContent = ""

        }, 3000)

        return

    }

    sessionStorage.setItem("log", JSON.stringify({loggedUser: "Admin", isAdmin: userFound[0].isAdmin}))

    setTimeout(()=>{

        if (userFound[0].isAdmin){

            window.location.href = "admin.html"

        } else {

            window.location.href = "profile.html"

        }

    }, 500)

});
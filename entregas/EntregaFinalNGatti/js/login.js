document.getElementById("loginForm").addEventListener("submit", (event) => {
    
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const users = JSON.parse(localStorage.getItem("users"))

    let userFound = users.filter((element) => element.username === username)

    if (!userFound || userFound[0].password !== password){

        errorMessage.textContent = "Invalid username or password!";

        return
    }

    sessionStorage.setItem("log", JSON.stringify({loggedUser: "Admin", isAdmin: userFound[0].isAdmin}))

    setTimeout(()=>{
        if (userFound[0].isAdmin){
            window.location.href = "admin.html"
        } else {
            window.location.href = "profile.html"
        }
    },500)

});
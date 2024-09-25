// Traigo los arrays de brands, pieces y titles desde el LS. Y el logged user desde SessionStorage
let puzzles = JSON.parse(localStorage.getItem("puzzles"))
let countries = JSON.parse(localStorage.getItem("countries"))
let users = JSON.parse(sessionStorage.getItem("log"))
let loggedUser = users.loggedUser

console.log(puzzles)
// Populate nacionalidad dropdown
const nationality = document.getElementById("nationality")
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    nationality.appendChild(option);
});

// Populate brand, pieces & title dropdowns
function populateDropdown(dropdownId, elementArray) {
    const dropdown = document.getElementById(dropdownId);
    elementArray.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        dropdown.appendChild(option);
    });
}

// Populate dropdowns para la sección Collección
populateDropdown("puzzle", puzzles)

// Form para editar perfil
document.getElementById("profile_form").addEventListener("submit", function(event) {
    event.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const instagram = document.getElementById("instagram").value;
    const nationality = document.getElementById("nationality").value;

    console.log("Profile Data: ", {nombre, apellido, instagram, nationality, loggedUser});
    alert("Profile saved successfully!");
});

// Handle Collection form submission
document.getElementById("collection-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const puzzle = document.getElementById("puzzle").value;
    
    localStorage.setItem("collection", JSON.stringify({loggedUser, puzzle}))

    console.log("New Puzzle Added: ", { puzzle });
    alert("New puzzle added to collection!");
});
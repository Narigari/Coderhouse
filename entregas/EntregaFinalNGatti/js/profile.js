// Traigo los arrays de brands, pieces y titles desde el LS. Y el logged user desde SessionStorage
let puzzles = JSON.parse(localStorage.getItem("puzzles"))
let countries = JSON.parse(localStorage.getItem("countries"))
let users = getSessionStorageItem("loggedUser")
let loggedUser = users.username

// Populate nacionalidad dropdown
const nationality = document.getElementById("nationality")
countries.forEach(country => {
    const option = document.createElement("option")
    option.value = country
    option.textContent = country
    nationality.appendChild(option)
})

// Función para populate dropdown menu 
function populateDropdown(dropdownId, elementObject) {
    const dropdown = document.getElementById(dropdownId)
    
    elementObject.forEach(obj => {
        const option = document.createElement("option")
        option.value = `${obj.brand} - ${obj.pieces} piezas - ${obj.title}`
        option.textContent = option.value
        dropdown.appendChild(option)
    })
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


// Populate colección personal
document.getElementById("collection-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let collection = {
        user: loggedUser,
        title: puzzles.title,
        brand: puzzles.brand,
        pieces: puzzles.pieces
    }

    let newPuzzle = {}
    
    const puzzle = document.getElementById("puzzle").value;
    
    collection.push(newPuzzle)
        
    localStorage.setItem("collection", JSON.stringify(collection))

    console.log("New Puzzle Added: ", { puzzle });
    Toastify({

        text: "Puzzle agregado a tu colección",
        
        duration: 3000
        
        }).showToast();
});


function refreshCollection(puzzleDB){
    const collection = document.getElementById("my-collection")

    collection.replaceChildren()

    for (let i = 0; i < puzzleDB.length; i++){
        let puzzleLi = document.createElement("li")
        puzzleLi.innerHTML = `${puzzleDB[i].brand} / ${puzzleDB[i].pieces} piezas / ${puzzleDB[i].title} \n`
        collection.appendChild(puzzleLi)
    }
}
let mycollection = getLocalStorageItem("collection")
console.log(mycollection)
refreshCollection(mycollection)
// function refreshPuzzleList(puzzleDB){

//     const puzzleList = document.getElementById("my-collection")

//     puzzleList.replaceChildren()

//     for (let i = 0; i < puzzleDB.length; i++){

//         let puzzleLi = document.createElement("li")
//         puzzleLi.innerHTML = `${puzzleDB[i].nombre} / ${puzzleDB[i].marca} / ${puzzleDB[i].piezas} piezas\n`
//         puzzleList.appendChild(puzzleLi)

//     }

// }

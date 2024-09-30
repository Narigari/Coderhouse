// Traigo los arrays de brands, pieces y titles desde el LS. Y el logged user desde SessionStorage
let puzzles = getLocalStorageItem("puzzles")
let users = getSessionStorageItem("loggedUser")
let loggedUser = users.username

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

refreshCollection(mycollection)
toggleItemsVisibility()
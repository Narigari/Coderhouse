toggleItemsVisibility()

function createPuzzleList(){
    const puzzles = getLocalStorageItem("puzzles")

    const puzzleList = document.getElementById("puzzle-list")

    for (item of puzzles) {
        //Creo el div que va a contener cada puzzle
        const puzzle = document.createElement("div")
        puzzle.className = "puzzle"
    
        //Creo el thumbnail para cada puzzle
        const puzzleThumbnail = document.createElement("img")
        puzzleThumbnail.className = "puzzle-thumbnail"
        puzzleThumbnail.src = item["thumbnail"]
    
        const puzzleDetails = document.createElement("ul")
        puzzleDetails.className = "puzzle-details"
    
        const puzzleTitle = document.createElement("li")
        puzzleTitle.className = "puzzle-title"
        puzzleTitle.innerHTML = `${item["title"]}`
    
        const puzzleBrand = document.createElement("li")
        puzzleBrand.className = "puzzle-brand"
        puzzleBrand.innerHTML = `de ${item["brand"]}`

        const puzzlePieces = document.createElement("li")
        puzzlePieces.className = "puzzle-brand"
        puzzlePieces.innerHTML = `${item["pieces"]} piezas`

        puzzleDetails.appendChild(puzzleTitle)
        puzzleDetails.appendChild(puzzleBrand)
        puzzleDetails.appendChild(puzzlePieces)

        puzzle.appendChild(puzzleThumbnail)
        puzzle.appendChild(puzzleDetails)

        puzzleList.appendChild(puzzle)
    }
}

createPuzzleList()
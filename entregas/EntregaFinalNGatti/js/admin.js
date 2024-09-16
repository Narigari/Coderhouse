//Algunas constantes con mensajes que podrían variar con el tiempo
const NUM_ERR_MSG = "Ingrese un número válido"
const NUM_DUP_MSG = "Esa cantidad de piezas ya existe"
const NUM_OK_MSG = "Cantidad de piezas agregada con éxito"
const BRND_ERR_MSG = "Ingrese un nombre válido"
const BRND_DUP_MSG = "Ese nombre ya se encuentra en la lista"
const BRND_OK_MSG = "Marca agregada con éxito"
const NAME_ERR_MSG = "El nombre del puzzle es obligatorio"
const NAME_OK_MSG = "Puzzle agregado con éxito"

const MSG_TIME = 2000

const brandForm = document.getElementById("brand_form")
const piecesForm = document.getElementById("pieces_form")
const puzzleForm = document.getElementById("puzzle_form")
const brandsSelector = document.getElementById("brands_selector")
const piecesSelector = document.getElementById("pieces_selector")
const brandList = document.getElementById("marcas_existentes")
const piecesList = document.getElementById("piezas_existentes")
const msgConsole = document.getElementById("msg_console")

let lsBrands = JSON.parse(localStorage.getItem("brands"))
let lsPieces = JSON.parse(localStorage.getItem("pieces"))
let lsPuzzles = JSON.parse(localStorage.getItem("puzzles"))

//Le agrego un event listener al formulario para crear marcas
brandForm.addEventListener("submit", (e) =>{

    e.preventDefault()

    let inputValue = brandForm["input_box"].value

    let newBrands = lsBrands

    //Si no ingresa algo válido en el campo, se avisa al usuario y se frena la ejecución
    if (!inputValue || inputValue === BRND_ERR_MSG || inputValue === BRND_DUP_MSG || inputValue === BRND_OK_MSG){
        
        //Reemplazar por equivalente en Sweet Alert
        brandForm["input_box"].value = BRND_ERR_MSG
        
        return
        
    }
    
    //Verifico si el nombre de la marca que se ingresó no se encuentra ya en el local storage    
    if (lsBrands.indexOf(inputValue) !=  -1){
        
        //Reemplazar por equivalente en Sweet Alert
        brandForm["input_box"].value = BRND_DUP_MSG
        
        return
        
    }
    
    newBrands.push(inputValue)
    
    localStorage.setItem("brands", JSON.stringify(newBrands))
    
    //Necesito volver a popular el selector de marcas
    populateSelector(newBrands, brandsSelector)
    //Refresco lista de marcas existentes
    populateList(newBrands, brandList)
    
    //Reemplazar por equivalente en Sweet Alert
    brandForm["input_box"].value = BRND_OK_MSG

    setTimeout(()=>{
        brandForm["input_box"].value = ""
    }, MSG_TIME)

})

//Le agrego un event listener al formulario para crear nuevas cantidades de piezas
piecesForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    let inputValue = parseInt(piecesForm["input_box"].value)

    let newPieces = lsPieces

    //Chequeo que ingrese un número mayor a 1
    if(inputValue <= 0 || isNaN(inputValue) || inputValue === NUM_ERR_MSG || inputValue === NUM_OK_MSG){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: NUM_ERR_MSG,
          });

        piecesForm["input_box"].value = ""
        return

    }

    //Verifico si la cantidad de piezas que se ingresó no se encuentra ya en el local storage    
    if (lsPieces.indexOf(inputValue) !=  -1){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: NUM_DUP_MSG,
          });

        piecesForm["input_box"].value = ""
        
        return

    }

    newPieces.push(inputValue) // Agrega el nuevo item al array que luego irá al local storage

    let sortedPieces = newPieces.sort((a, b)=>{return a - b})

    Swal.fire({
        title: "¿Estás seguro?",
        text: `${inputValue} piezas se agregará a la lista de piezas`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, agregar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Excelente!",
            text: NUM_OK_MSG,
            icon: "success"
          }); 
          
            localStorage.setItem("pieces", JSON.stringify(sortedPieces))
        
            //Necesito volver a popular el selector de marcas
            populateSelector(sortedPieces, piecesSelector)
            //Actualizo lista de piezas existentes
            populateList(newPieces, piecesList)
        
        }
        piecesForm["input_box"].value = ""
      });

})

//Event listener para el formulario de creación de nuevos puzzles
puzzleForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    let inputValue = puzzleForm["input_box"].value

    let selectedBrand = puzzleForm["brand_selected"].selectedIndex

    let selectedPieces = puzzleForm["pieces_selected"].selectedIndex

    let newPuzzles = lsPuzzles

    console.log(selectedBrand)

    console.log(selectedPieces)

    if (!inputValue || inputValue === NAME_ERR_MSG || inputValue === NAME_OK_MSG) {
        
        //Reemplazar por equivalente en Sweet Alert
        puzzleForm["input_box"].value = NAME_ERR_MSG

        return

    }

    if (selectedBrand === 0) {



    }

    //newPuzzles.push(inputValue)

    //localStorage.setItem("puzzles", JSON.stringify(newPuzzles.sort()))

    //Reemplazar por equivalente en Sweet Alert
    puzzleForm["input_box"].value = NAME_OK_MSG

    setTimeout(()=>{
        puzzleForm["input_box"].value = ""
    }, MSG_TIME)

})

function populateSelector(items, parent){

    parent.replaceChildren()
    
    let defaultOption = document.createElement("option")

    defaultOption.innerHTML = "Seleccione una opción"
    defaultOption.disabled = true
    defaultOption.selected = true

    parent.appendChild(defaultOption)

    for(element of items){
        let opt = document.createElement("option")
        opt.innerHTML = element
        parent.appendChild(opt)
    }

}

function populateList(items, parent){

    parent.replaceChildren()
    
    for(element of items){
        let li = document.createElement("li")
        let button = document.createElement("button")
        let buttonIndex = items.indexOf(element)

        li.innerHTML = element
        parent.appendChild(li)

        button.innerHTML = "Borrar"
        button.id = buttonIndex
        li.appendChild(button)
    }
}

function remove() {
 const brands = JSON.parse(localStorage.getItem("brands"));
 const filtered = brands.filter(item => item !== 'Ravensburger');
 localStorage.setItem("brands", JSON.stringify(filtered));
}
remove()

populateSelector(lsBrands, brandsSelector)
populateSelector(lsPieces, piecesSelector)

populateList(lsBrands, brandList)
populateList(lsPieces, piecesList)
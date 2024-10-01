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
const logOutDiv = document.getElementById("logOut")

let currentBrands = JSON.parse(localStorage.getItem("brands"))
let currentPieces = JSON.parse(localStorage.getItem("pieces"))
let currentPuzzles = JSON.parse(localStorage.getItem("puzzles"))

toggleItemsVisibility()

//Le agrego un event listener al formulario para crear marcas
brandForm.addEventListener("submit", (e) =>{

    e.preventDefault()

    let inputValue = brandForm["input_box"].value

    let newBrands = JSON.parse(localStorage.getItem("brands"))

    //Si no ingresa algo válido en el campo, se avisa al usuario y se frena la ejecución
    if (!inputValue || inputValue === BRND_ERR_MSG || inputValue === BRND_DUP_MSG || inputValue === BRND_OK_MSG){
        
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: BRND_ERR_MSG,
          });
        
        brandForm["input_box"].value = ""
        return
        
    }
    
    //Verifico si el nombre de la marca que se ingresó no se encuentra ya en el local storage    
    if (newBrands.indexOf(inputValue) !=  -1){
        
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: BRND_DUP_MSG,
          });
        
        brandForm["input_box"].value = ""
        
        return
        
    }
    
    newBrands.push(inputValue)

    let sortedBrand = newBrands.sort()

    Swal.fire({
        title: "¿Estás seguro?",
        text: `${inputValue} se agregará a la lista de piezas`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, agregar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Excelente!",
            text: BRND_OK_MSG,
            icon: "success"
          }); 
          
            localStorage.setItem("brands", JSON.stringify(sortedBrand))
        
            //Necesito volver a popular el selector de marcas
            populateSelector("brands", brandsSelector)
            //Actualizo lista de marcas existentes
            populateList("brands", brandList)
        
        }
        brandForm["input_box"].value = ""
      });

})

//Le agrego un event listener al formulario para crear nuevas cantidades de piezas
piecesForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    let inputValue = parseInt(piecesForm["input_box"].value)

    let newPieces = getLocalStorageItem("pieces")

    //Chequeo que ingrese un número mayor a 1
    if(inputValue <= 0 || isNaN(inputValue)){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: NUM_ERR_MSG,
          });

        piecesForm["input_box"].value = ""
        return

    }

    //Verifico si la cantidad de piezas que se ingresó no se encuentra ya en el local storage    
    if (newPieces.indexOf(inputValue) !=  -1){

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
          
            setLocalStorageItem("pieces", sortedPieces)
        
            //Necesito volver a popular el selector de marcas
            populateSelector("pieces", piecesSelector)
            //Actualizo lista de piezas existentes
            populateList("pieces", piecesList)
        
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

    let newPuzzles = currentPuzzles

    if (!inputValue || inputValue === NAME_ERR_MSG || inputValue === NAME_OK_MSG) {
        
        //Reemplazar por equivalente en Sweet Alert
        puzzleForm["input_box"].value = NAME_ERR_MSG

        return

    }

    if (selectedBrand === 0) {



    }

     Toastify({

      text: NAME_OK_MSG,
      
      duration: 3000
      
      }).showToast();

    setTimeout(()=>{
        puzzleForm["input_box"].value = ""
    }, MSG_TIME)

})

populateSelector("brands", brandsSelector, "Seleccione marca")
populateSelector("pieces", piecesSelector, "Seleccione piezas")

populateList("brands", brandList)
populateList("pieces", piecesList)

// Logout
function loggingOut (){

    let isLogged = JSON.parse(sessionStorage.getItem("log"))
    
    if(isLogged){
        sessionStorage.setItem("log", JSON.stringify({loggedUser: "", isAdmin: false}))
        window.location.href = "index.html"
    }
}


function cerrarSesion(){
    let button = document.createElement("button")
    
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        loggingOut()
    })

    button.innerHTML = "Logout"

    logOutDiv.appendChild(button)

}
cerrarSesion()
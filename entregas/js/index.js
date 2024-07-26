// Función para ingresar fecha de nacimiento, chequeando inputs válidos
// function insertBirthDate() {
//     let mm = parseInt(prompt("Ingrese el número de su mes de nacimiento"));
    
//     while (validMonth(mm) == false){
//         mm = parseInt(prompt("Ingrese un mes válido"))
//     }

//     let dd = parseInt(prompt("Ingrese su día de nacimiento"));
    
//     while (validDate(mm,dd) == false){
//         dd = parseInt(prompt("Ingrese un día válido"))
//     }

//     let yyyy = parseInt(prompt("Ingrese su año de nacimiento"))

//     while (validYear(yyyy) == false){
//         yyyy = parseInt(prompt("Ingrese un año entre 1900 y 2024"))
//     }
    
//     return console.log("Fecha de nacimiento: "+ dd + "/" + mm + "/" + yyyy)
// }

// function validMonth(month){
//     if(month >= 1 && month <= 12){
//         return true
//     }    
//     return false
// }

// function validDate(month,date){
//     switch(month) {
//         case "1":
//         case "3":
//         case "5":
//         case "7":
//         case "8":
//         case "10":
//         case "12":
//             maxDay = 31;
//             break;
//         case "2":
//             maxDay = 28;
//             break;
//     default:
//             maxDay = 30;
//             break;
//     }
    
//     if(date >= 1 && date <= maxDay){
//         return true
//     }
//     return false
// }

// function validYear(year){
//     if(year >= 1900 && year <= 2024){
//         return true
//     }
//     return false
// }

// insertBirthDate()

// Pedido de marcas favoritas de puzzles

for (i = 1 ; i <= 5  ; i++){
    let puzzlesFavoritos

    if (i === 0) {
        puzzlesFavoritos = prompt("Ingrese hasta 5 marcas favoritas de puzzles")
    } else {
        puzzlesFavoritos = prompt("Ingrese otra marca")
    }

    if (puzzlesFavoritos === null){
        break
    }

    console.log("Marca #" + i + " " + puzzlesFavoritos)

}

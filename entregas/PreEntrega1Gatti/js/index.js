// Función para ingresar fecha de nacimiento, chequeando que los valores ingresados sean válidos
function ingreseFechaNacimiento() {
    let yyyy = parseInt(prompt("Ingrese su año de nacimiento"))

    if(isNaN(yyyy)){
        yyyy = null
    }
    // Si el usuario aprieta Cancel o deja el box blanco:
    if (yyyy === null || yyyy === "") {
        console.log("Función cancelada");
        return;
    }

    while (!validYear(yyyy)) {
        yyyy = prompt("Ingrese un año entre 1900 y 2024");
        console.log("Función cancelada")
    }

    let mm = parseInt(prompt("Ingrese el número de su mes de nacimiento"));

    while (!validMonth(mm)){
        mm = parseInt(prompt("Ingrese un mes válido"))
    }

    let dd = parseInt(prompt("Ingrese su día de nacimiento"));
    
    while (!validDay(yyyy,mm,dd)){
        dd = parseInt(prompt("Ingrese un día válido"))
    }

    
    return console.log("Fecha de nacimiento: "+ dd + "/" + mm + "/" + yyyy)
}

// Función para chequear que ponga un mes del 1 al 12
function validMonth(month){
    if(month >= 1 && month <= 12){
        return true
    }    
    return false
}

// Función para poner un día entre 1 y el máximo para cada mes (si es febrero, chequea si el año es bisiesto)
function validDay(year,month,day){
    switch(month) {
        case 4:
        case 6:
        case 9:
        case 11:
            maxDay = 30;
            break;
        case 2:
            if(esBisiesto(year) == true){
                maxDay = 29;
            } else {
                maxDay = 28;
            }
            break;
    default:
            maxDay = 31;
            break;
    }
    
    if(day >= 1 && day <= maxDay){
        return true
    }
    return false
}

// Función para limitar años de 1900 a 2024
function validYear(year) {
    if(isNaN(year)) {
        return false;
    }    
    return year >= 1900 && year <= 2024} 

// Función para chequear si el año es bisiesto
function esBisiesto (year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}

// Pedido de marcas favoritas de puzzles
function ingreseMarcas(){
    for (i = 1 ; i <= 5  ; i++){
        let puzzlesFavoritos
        
        if (i === 1) {
            puzzlesFavoritos = prompt("Ingrese hasta 5 marcas favoritas de puzzles")
        } else {
            puzzlesFavoritos = prompt("Ingrese otra marca")
        }
        
        if (puzzlesFavoritos === null || puzzlesFavoritos == ""){
            break
        }
        
        console.log("Marca #" + i + " " + puzzlesFavoritos)
        
    }
    
}
alert("Bienvenido! Le pediremos un par de datos para comenzar")
ingreseFechaNacimiento()
alert("Gracias! Ahora cuéntenos sobre sus gustos")
ingreseMarcas()
alert("Eso es todo! =)")
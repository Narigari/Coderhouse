const footer = document.getElementById("footer")
const parrafoFooter =document.createElement("p")
const anioActual = new Date().getFullYear()

parrafoFooter.innerHTML = "Comisión #59950 | Coderhouse " + anioActual
footer.appendChild(parrafoFooter)


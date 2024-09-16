El código hace dos cosas:
- Pide fecha de nacimiento al usuario
    - Primero le hago ingresar el año. Sólo puede ingresar un valor entre 1900 y 2024. No se chequea si la fecha es futura a la actual ya que no vimos operaciones entre fechas aún.
    - Si se aprieta Cancel o deja el box vacío, la función termina y no sigue pidiendo mes y día.
    - Luego pide el mes, que debe estar entre 1 y 12.
    - Por último se le pide el día. Este último dato sólo puede admitir fechas válidas. Para ello usa el año y el mes que proporcionó antes. No podrá poner 31 en un mes que no tenga 31 días y tampoco podrá poner 29 de febrero si el año no es bisiesto (la función esBisiesto + la función validDay hacen ese chequeo)
    - Se devuelve un console.log con la fecha ingresada. 

- Se le pide al usuario que ingrese hasta 5 marcas de puzzles favoritas.
    - Para ingresar menos de 5 el usuario puede dejar el box vacío o apretar Cancel
    - Se devuelve un console.log con las marcas ingresadas

## U5T1 - Acceso al DOM desde código
Dispones del código de una página web en html: pagina.html. Introduce en el apartado de script el código necesario para extraer:
El número de párrafos de la página.
El texto del segundo párrafo.
El número de enlaces de la página.
La dirección del primer enlace.
La dirección del penúltimo enlace.
El número de enlaces que apuntan a /wiki/Municipio
El número de enlaces del primer párrafo.
Para agregar texto en la página deberás introducir una etiqueta div con el id=info y  añadir en ella toda la información detallada mediante:


let info = document.getElementById(“info”);
info.innerHTML = “Texto informativo”;
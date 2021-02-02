// Cuando se carga el documento comienza iniciar()
crearEvento(window, "load", iniciar);

function iniciar() {
  // Creamos  un objeto XHR.
  //miXHR = new objetoXHR();
  // Cargamos el fichero fecha.php de forma asíncrona.
  //cargarAsync("fecha.php");

  document
    .getElementById("enviar")
    .addEventListener("click", lanzar_peticion, true);
}

function lanzar_peticion() {
  miXHR = new XMLHttpRequest();
  cargarAsync("fecha.php");
}

// Carga el contenido de la url de forma asíncrona con Ajax
function cargarAsync(url) {
  if (miXHR) {
    // Carga el indicador Ajax antes de realizar la petición.
    document.getElementById("indicador").innerHTML =
      "<img src='./ajax-loader.gif'/>";

    console.log(miXHR.readyState);
    //Si existe el objeto miXHR abrimos la url (asíncrona)
    miXHR.open(
      "GET",
      "http://localhost:8090/UD 6 Utilización de mecanismos de comunicación asíncrona/U6T1 - Lector ficherosTarea/ejemplo2/fecha.php",
      true
    );
    console.log(miXHR.readyState);
    // En cada cambio de estado llama a estadoPetición
    miXHR.onreadystatechange = estadoPeticion;
    // Hacemos la petición al servidor con GET y parámetro  null
    miXHR.send(null);

    console.log("justo después del send");
  }

  // Se llama en cada cambio de estado de la petición.
  // 1. readyState == 4 cuando la petición ha terminado.
  // 2. Status == 200 encontrado; ==404 no encontado…
  function estadoPeticion() {
    console.log(miXHR.readyState);
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      // Desactivamos el indicador AJAX.
      document.getElementById("indicador").innerHTML = "";
      // Metemos en el contenedor resultados las  respuestas de la petición AJAX.
      textoDIV(document.getElementById("resultados"), miXHR.responseText);
    }
  }
}

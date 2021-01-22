window.onload = iniciar;
function iniciar() {
  document.getElementById("buscarLocalidad").addEventListener(
    "click",
    function () {
      let valor = document.getElementById("local").value;
      comprobarLocalidad(
        "GET",
        "http://localhost:8090/UD 6 Utilización de mecanismos de comunicación asíncrona/U6T2 - Localidad/localidad.php",
        mirarLocalidades,
        valor
      );
    },
    false
  );
}

let xhr;

function iniciarAjax() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function mirarLocalidades() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let result = document.getElementById("resultado");
    if (xhr.responseText == "SI") {
      result.className = "resultadoOK";
    } else {
      result.className = "resultadoNoOK";
    }
    textoDIV(document.getElementById("resultado"), xhr.responseText);
    //document.getElementById("resultado").value = xhr.responseText;
  } else if (xhr.readyState == 4 && xhr.status == 404) {
    result.value = "No se ha encontrado";
  }
}

function comprobarLocalidad(metodo, url, funcion, valor) {
  xhr = iniciarAjax();

  if (xhr) {
    xhr.onreadystatechange = funcion;
    xhr.open(metodo, url + "?" + "localidad=" + valor, true);
    xhr.send(null);
  }
}

function textoDIV(nodo, texto) {
  //let nodo = document.getElementById(idObjeto);
  while (nodo.firstChild) {
    // Eliminamos todos los hijos de ese objeto.
    nodo.removeChild(nodo.firstChild);
  }
  // Cuando ya no tenga hijos, agregamos un hijo con  el texto que recibela función.
  nodo.appendChild(document.createTextNode(texto));
}

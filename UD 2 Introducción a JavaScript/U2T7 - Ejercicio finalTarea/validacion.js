function comprobarDNI(numerosDNI) {
  var letrasDNI = document.getElementById("letrasDNI").value;
  /* Calcular el resto de dividir el número del DNI por 23.*/
  var letraNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
  var letraElegida = numerosDNI % 23;
  if (numerosDNI !== "") {
    /*En caso de error, se deben visualizar según sea el caso los mensajes “Completar el campo DNI” */
    if (numerosDNI.length != 8) {
      alert("Completar el campo DNI, son 8 números");
    }
    /*que la selección de la letra debe ser correcta*/
    if (numerosDNI.length == 8 && letraElegida == letrasDNI) {
      alert("Letra correcta");
    } else if (numerosDNI.length == 8 && letraElegida != letrasDNI) {
      /*“La letra del NIF es incorrecta. */
      alert(
        "Letra incorrecta, tiene que seleccionar la letra: " +
          letraNIF.charAt(letraElegida)
      );
    }
    /* Si el dni es correcto también debe indicarlo mediante mensaje.*/
    if (numerosDNI.length == 8 && letraElegida == letrasDNI) {
      alert("DNI correcto");
    }
  } else {
    /*“Teclear un DNI (sin letras, sólo números)” */
    alert("Teclear un DNI, no lo deje vacio");
  }
}

function guardarDatos(){
    let name = document.getElementById('name').value;
    let grupo = document.getElementById('grupo').value;
    let anho = document.getElementById('anho').value;
    let tMusica = document.getElementById('tipoMusica').value;
    let estanteria = document.getElementById('nEstanteria').value;
    let presta = document.getElementById('presta').value;

    let array = [name,grupo,anho,tMusica,estanteria,presta];
    alert(array);
}
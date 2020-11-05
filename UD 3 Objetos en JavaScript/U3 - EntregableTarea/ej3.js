
function Aeropuerto(nombre,ciudad,nVuelo){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.nVuelo = nVuelo;
    this.vuelo =[]
    this.anhadirPropiedades = function(nombre,ciudad,nVuelo){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.nVuelo = nVuelo;
    }
    this.mostrarInfo = function(){
        alert("Nombre: "+this.nombre+" Ciudad: "+this.ciudad+" NúmeroVuelo"+ this.nVuelo+" Vuelo: "+this.vuelo.length);
    }
}

function VueloDiario(){
    this.codigo="";
    this.hora_llegada="";
    this.hora_salida="";

    this.anhadirPropiedadesVuelo= function (codigo,hora_llegada,hora_salida){
        this.codigo=codigo;
        this.hora_llegada=hora_llegada;
        this.hora_salida=hora_salida;
    }
    this.info=function(){
        alert("Codigo: "+this.codigo+" HoraLLegada: "+this.hora_llegada+" HoraSalida"+ this.hora_salida);
    }
    

}
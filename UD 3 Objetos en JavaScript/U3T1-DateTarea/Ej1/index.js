var f1 = '15/10/2020';
var f2='24/6/2021';
function restaFechas(f1,f2){
     let aFecha1 = f1.split('/');
     let aFecha2 = f2.split('/');
     let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
     let fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
     let dif = fFecha2 - fFecha1;
     let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
     return dias;
}
alert(restaFechas(f1,f2));
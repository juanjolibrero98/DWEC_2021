<?php
//Para evitar que los warning salgan en la pantalla y se traten como texto JSON
error_reporting(0);
header('Content-Type: application/json');

$objeto = "";
$objeto->nombre = "Chema";
$objeto->nacimiento = 1982;
$objeto->ciudad = "Cádiz";

//Codificamos el objeto a JSON
$miJSON = json_encode($objeto);

echo $miJSON;
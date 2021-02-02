## U6T5 - POST con JSON a una BD

Hemos creado una BD en el servidor con las series que hemos hecho en el ejercicio anterior. El esquema es el mismo:

- Título de la serie
- Director
- Cadena
- Año
- Terminada
  Realiza una web que tengan los inputs necesarios para introducir la información de una serie, y que al pulsar un botón, mande una petición POST con un único parámetro llamado "objeto" que contenga el JSON con la siguiente estructura (se muestran datos de ejemplo):

{
"titulo" : "nombre de la serie",
"director" : "nombre del director",
"cadena" : "nombre de la cadena",
"anyo" : 2000,
"terminada" : true
}
El servidor devolverá "ok" o una cadena con el error si no se ha podido insertar correctamente.

{ "ok" }
{ "No se ha podido insertar en la BD" }
Con la respuesta, deberás pintarla en un contenedor div, que tendrá el texto en verde si es "ok" y en rojo si es un error (cualquier otra cadena). Para probar que no funciona correctamente, puedes introducir una cadena de texto en el campo "anyo".

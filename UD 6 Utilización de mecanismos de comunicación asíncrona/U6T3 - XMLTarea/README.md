## U6T3 - XML

A partir de los ficheros que permiten procesar un XML, modifícalos de manera que el XML a procesar lo hayas creado tu mismo con los siguientes datos:

- Series: será el elemento principal del XML.
- Serie: contendrá los datos de una serie en concreto, que serán: - Título: nombre de la serie. - Cadena: nombre de la cadena que produce la serie (HBO, FX, etc.) - Director: nombre del director de la serie. - Año: año de estreno de la serie. - Terminada: podrá contener un valor “sí” o “no” en función si ha terminado o no su emisión.
  Al procesar el XML se mostrarán todos los datos en una tabla. Tendrá las siguientes condiciones:

- El título y el director: el título será negrita, y el director en cursiva.
- El año aparecerá en color rojo si la serie es anterior al año 2000, en amarillo si está entre el 2001 y el 2010 y en verde si es posterior al 2011. Estas variaciones se recogen en un archivo en CSS con reglas, como por ejemplo .rojo, .amarillo o .verde.
- En la celda “terminada” habrá una imagen determinada en caso de que en el XML se registre un Sí o un No.

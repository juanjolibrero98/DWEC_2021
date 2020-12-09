## U4 - Examen B

Crea una única página web para introducir los datos del juego Kill Team (variante de Warhammer) con un formulario de contacto que contenga:

    - Nombre

    - Año

    - Habilidades

    - Tirada para herir

    - Seleccionable para elegir el Rol (ver más abajo para ver los valores)

    - Password (con información oculta)

    - Un botón de reset.

Adicionalmente, el HTML tendrá que tener un elemento DIV para indicar los errores y otro para la ultima_tirada (ver más abajo)

Reglas de elaboración y validación

Cada vez que se de a enviar, se deberán validar todos los campos. Si está correcto, se pondrá en reborde verde, si está incorrecto, se pondrá en reborde rojo y se pondrá el foco en él.
El año deberá ser un número entre 700 y 8000 (ambos incluidos).
Las habilidades deberá ser cualquiera de los siguientes valores: M WS BS S T W A Ld Sv
La tirada para herir tendrá el formato "F?R99" siendo F la letra F mayúscula, R la letra R mayúscula y ? cualquiera de las siguientes opciones: x2 > = < y siendo 99 un número de dos cifras entre 00 y 99
El seleccionable para el Rol deberá tener una de las opciones posibles: Líder, Combate, Comunicaciones, Demoliciones o Fanático. No debe estar seleccionado ninguno al comienzo.
El password debe cumplir las siguientes reglas:
Dos letras mayúsculas al inicio
Un carácter que no sea alfanumérico ni el carácter dos puntos ( : )
Una palabra de mínimo 8 caracteres de largo
El símbolo almohadilla (#)
Dos números
Todos los campos son obligatorios para rellenar
Cuando se pulse enviar, se deberá generar un número aleatorio entre 1 y 6 que se guardará en una cookie con el nombre "tirada". No se deberá ejecutar la acción por defecto del botón (enviar el formulario) y se debe limpiar el mismo. Y en el campo "ultima_tirada" deberá aparecer el valor de la última tirada obtenida del valor de la cookie almacenada.

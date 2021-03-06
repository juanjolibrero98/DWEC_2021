## Ejercicio final de Angular
El trabajo final se trata de hacer un remake de la web de la Oferta educativa de FP en Andalucía (https://www.juntadeandalucia.es/educacion/secretariavirtual/consulta/oferta-educativa-formacion-profesional/). La idea sería realizar una SPA, al contrario de cómo está ahora, que requiere de varios pasos hasta mostrar la información final. Se muestra una captura de pantalla con la maquetación actual y qué se pretende modificar.
La idea consiste hacer el remake con dos componentes:

1) Un componente arriba del todo, donde estén los diferentes filtros que se pueden aplicar:

Familia: (Sanidad, Informática y Comunicaciones, etc..) - Será un desplegable
Nombre de ciclo: (Diseño de Aplicaciones Web, Acuicultura, etc) - Será un desplegable
Provincia (Cádiz, Sevilla, Huelva, etc) - Será un desplegable
Tipo: (público o privado) - Será un desplegable
Turno: Mañana, Tarde o Ambos - Será un desplegable
Bilingüe: No bilingüe o Idioma del bilingüe - Será un desplegable
Dual: No oferta dual, solo algunas plazas, o todas las plazas son dual - Será un desplegable
2) Un componente que es un tabla generada en función de los filtros anteriormente establecidos por el usuario. La tabla tendrá las siguientes columnas:

Centro (Que contendrá el código del centro y el nombre del centro en negrita y separados por un guión). Adicionalmente cada celda de esta columna, será un elemento "collapse" (bootstrap) o "expansion panel" (material) de tal manera que cuando pulsamos en la celda, se expand y muestra la información referente al centro.
Provincia. Mostrará la provincia donde está el centro
Nombre del ciclo: Mostrará el nombre del ciclo.
Tipo. Mostrará si es público o privado
Turno. Mostrará el turno si es de mañana, tarde o ambos
Bilingüe. Mostrará NO si no es bilingüe o el idioma del bilingüe que sea.
Dual. Mostrará NO si no oferta plazas en dual o las plazas que oferte en modalidad dual.
Se proporciona un fichero JSON con el que hacer las pruebas para la maquetación. Son datos reales del curso 20/21. Este fichero JSON contiene dos propiedades que cada una de ellas contiene sendos arrays, llamados "info_centros" e "items". En el primero, cada elemento del array contiene la información relevante de un centro concreto. Por ejemplo:
Como puede verse, ambos arrays están relacionados mediante el campo "código", que se refiere al código de centro donde se imparte el ciclo.

Se hará una petición inicial y única al fichero JSON, y a partir de esa información, se podrá filtrar toda la información que se quiera. Inicialmente, la web NO deberá mostrar la tabla con TODA la información, sino que actuará conforme se vayan ajustando los filtros.

El fichero ofertas.json también se encuentra en la siguiente ruta: https://raw.githubusercontent.com/chemaduran/json/main/ofertas.json

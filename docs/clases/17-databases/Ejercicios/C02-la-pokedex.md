---
sidebar_label: "C02 - La Pokedex"
title: "Ejercicio C02 - La Pokedex"
sidebar_position: 102
author: Ignacio Smirlian
authorURL: https://github.com/ignacio0104
hide_table_of_contents: true
hide_title: false
---
---

## Consigna

Antes de empezar, [descargar la cáscara del proyecto](https://drive.google.com/file/d/13xw6Q8Ke5TmfeoDktVkXaDKxBqyD77Q-/view?usp=sharing) y trabajar sobre la misma.

### Parte I - Crear la Base de Datos

1. Crear la base de datos ``POKEDEX_DataBase``
2. Crear la tabla ``Pokemon`` (**id** int PK, **nombre** varchar(50), **tipo** int FK, **entrenador** varchar,**urlImagen** varchar) y ninguno de sus datos puede ser ``null``

3. Crear la tabla ``Tipos`` (**idTipo** int PK, **nombre** varchar)
4. En VS crear la clase ``Pokemon`` con todos los atributos que declaramos en la tabla SQL

:heavy_exclamation_mark: El ``tipo`` de Pokemon deber ser string en la clase Pokemon del VS y NO int

### Parte II - Interfaz Grafica

Una vez creadas las bases de datos, es hora de trabajar en la interfaz y la conexión

Realizar la integración entre el login y el form principal de modo de que el entrenador elegido, se vea reflejado en el form principal arriba a la derecha (las fotos están todos en un imageList donde pueden manejarlas por index)

![Detalle entrenador](/clases/17-databases/ejercicios/pokedex-detalle-entrenador.PNG)

### Parte III - Realizar un alta

1. Realizar la integración para que al apretar el botón ``+`` se entre al formulario de Alta

2. En este formulario respetar las siguiente pautas:

   + El ``combobox`` tipo debe ser cargado con todos los tipos de la base datos, es decir que se cargan leyendo la base de datos y trayendo el texto de cada tipo.
   + El ``textbox`` entrenador es FIJO. Los pokemones que se agregan siempre van al entrenador logueado
   + La imagen tiene que disparar un ``FileDialog`` que nos permite buscar la imagen y guardarnos su dirección local (tartar de tener las imágenes en una carpeta escritorio para que la ruta no sea demasiado larga)
   + Al confirmar se deberá validar los campos e instanciar un nuevo pokemón, para que a continuación ese Pokemon se guarde en la base de datos.
   
:heavy_exclamation_mark: Los pokemones no pueden tener ID repetidas, elegir un lugar donde validar ese dato.

### Parte IV - Traer un Pokemon

1. Realizar la lógica para que al apretar el botón ``Enter`` (de la UI no del teclado) el programa lance una búsqueda a la base de datos y traiga todos los registros con coincidencia (al buscar por ID o por nombre debería solo traer un registro por búsqueda)

2. Mostrar esa información en los ``labels`` y mostrar la foto (recordar el element new ``Bitmap`` que recibe una dirección de imagen para mostrarla)

*Punto EXTRA* pero muy útil para las próximas partes del programa, actualizer el ``lblNumeroRegistros`` de acorde a los resultados de nuestra búsqueda en SQL

3. Los botones de flechita del fomulario deben estar deshabilitados cuando la cantidad de registros sean 1 o 0

*Punto EXTRA* Hacer funcionar los botones físicos del programa (teclado de la UI)

![Formulario](/clases/17-databases/ejercicios/pokedex-formulario.PNG)

### Parte V - Eliminar un Pokemon.

Realizar la lógica para que al apretar el botón del tacho de basura, el programa nos pregunte si estamos seguros de querer borrar dicho Pokemon. Si el usuario presionar ``Aceptar`` u ``OK`` (o lo que elijan ustedes) deberán borrar ese Pokemon de la base de datos

*Punto EXTRA* Actualizar la información del form principal luego de borrar el Pokemon

### Parte VI - Buscar por Entrenador

1. Realizar la lógica para que al apretar el botón de “Buscar por Entrenador” se abra el formulario de Filtro.

2. Este formulario de filtro recibirá como parámetro qué tipo de filtro estamos usando y de esa forma determinar que controles debe cargar

3. Si recibe el filtro de entrenador (puede ser un string, un int, lo que les sea más comodo) deberán cargar un ``ComboBox`` con los nombres de todos los entrenadores QUE TENGA POKEMONES. Es decir, que el ``combobox`` se carga leyendo la base de datos SQL y trayendo los nombres de los entrenadores que aparecen en la columna de entrenador en la tabla Pokemones (sin repetir)

4. Luego, al seleccionar y confirmar debe lanzarse la query que nos traiga todos los registros que cumplen ese criterio y almacenarlo para poder pasarlo al form principal.

5. Al apretar ``confirmar``, este form debe cerrarse y volver al principal con la nueva lista cargada para que podamos ver

6. Acá deben habilitarse los botones de siguiente y anterior (las flechitas) para que podamos ver todos los Pokemones

### Parte VII - Buscar por Entrenador

Implementar un filtro por Entrenador

![Detalle filtro](/clases/17-databases/ejercicios/pokedex-detalle-filtro.PNG)

### Parte VIII - Buscar por Tipo

Exactamente igual que entrenador, pero con tipo. ``Combobox`` se carga de SQL, se confirma, se traen los registros y se muestran en el principal

![Detalle filtro tipo](/clases/17-databases/ejercicios/pokedex-detalle-filtro-tipo.PNG)

### Parte IX - Buscar por Rango

1. Realizar la lógica para que al apretar el botón de ``Buscar por Rango`` se abra el formulario de ``Filtro``.

2. Este formulario de filtro recibirá como parámetro qué tipo de filtro estamos usando y de esa forma determinar que controles debe cargar

3. Si recibe el filtro de rango (puede ser un string, un int, lo que les sea más comodo) deberán cargar dos ``numericUpDown``  que determinen el valor mínimo y máximo de nuestra búqueda 

![Detalle filtro tipo](/clases/17-databases/ejercicios/pokedex-detalle-filtro-rango.PNG)

4. Luego, al seleccionar y confirmar debe lanzarse la query que nos traiga todos los registros que cumplen ese criterio y almacenarlo para poder pasarlo al form principal.

5. Al apretar confirmar, este form debe cerrarse y volver al principal con la nueva lista cargada para que podamos ver

6. En este momento deben habilitarse los botones de siguiente y anterior (las flechitas) para que podamos ver todos los Pokemones

### Parte X - Busqueda Personalizada

1. Realizar la lógica para que al apretar el botón de ``Buscar por Rango`` se abra el formulario de ``Filtro``.

2. Este formulario de filtro recibirá como parámetro qué tipo de filtro estamos usando y de esa forma determinar que controles debe cargar

3. Si recibe el filtro de Personalizada (puede ser un string, un int, lo que les sea más comodo) deberán cargar un ``textbox`` donde el usuario podrá cargar su query personalizada. Por ejemploe ``SELECT * FROM Pokemones``

![Detalle filtro personalizado](/clases/17-databases/ejercicios/pokedex-detalle-filtro-personalizado.PNG)

4. Luego, al seleccionar y confirmar debe lanzarse la query que nos traiga todos los registros que cumplen ese criterio y almacenarlo para poder pasarlo al form principal.

5. Al apretar confirmar, este form debe cerrarse y volver al principal con la nueva lista cargada para que podamos ver

6. En este momento deben habilitarse los botones de siguiente y anterior (las flechitas) para que podamos ver todos los Pokemones

### Parte XI - La Pokedex serializadora

1. Realizar la lógica para que al apretar el botón de ``Serializar`` se abra el formulario de ``FrmSerializacion``.

2. Este formulario tiene un ``textbox`` donde podremos el nombre de nuestro archivo (el nombre que queremos ponerle para guardarlo)

3. Luego a través del ``radiobutton`` seleccionamos el tipo de serialización

4. Finalmente al confirmar debemos guardar nuestra actual búsqueda en un archive ``JSON`` o ``XML``

Por ejemplo: Si yo había realizado una búsqueda por entrenador, al presionar serializar puedo poner “pokemonesDeAsh”, luego seleccionar JSON y eso me debería guardar todos los pokemones de la lista (no hay que realizar la consulta a SQL devuelta, hay que traer la info desde el form principal)

Si yo busco un Pokemon solo, al presionar serializar puedo poner “pokemonID23”, luego seleccionar XML y eso me debería guardar la información de ese Pokemon




*Autor: Ignacio Smirlian *
### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |


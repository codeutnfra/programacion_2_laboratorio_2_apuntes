---
title: 2do D - Primer Parcial - Laboratorio de Computación II
sidebar_label: 2do D - Primer Parcial - Laboratorio de Computación II
sidebar_position: 1
slug: /evaluaciones/parciales/2d-primer-parcial2022
hide_table_of_contents: false
hide_title: false
---

|               Comisión               |              Docentes               | Instancia de evaluación | Cuatrimestre |
| :----------------------------------: | :---------------------------------: | :---------------------: | :----------: |
| 2do D - Lunes y Martes 18:30 a 22:30 | L. Rodriguez - O. Curcio - E. Prieto - I. Smirlian |     Primer Parcial      |   2do 2022   |


## Requerimiento

Nos han contratado para desarrollar el sistema que facilite la administración de los servicios que ofrece una aerolínea. La empresa cuenta con una flota de aviones y ofrece volar a destinos nacionales e internacionales.

![Avion](/evaluaciones/parciales/avion.gif)


A nivel nacional,ofrece los siguientes destinos: 

+ Santa Rosa
+ Bariloche
+ Corrientes
+ Córdoba
+ Jujuy
+ Mendoza
+ Neuquén
+ Posadas
+ Iguazú
+ Salta
+ Santiago del Estero
+ Trelew
+ Tucumán
+ Puerto Madryn
+ Ushuaia


A nivel internacional, ofrece solo los siguientes destinos internacionales por el momento que salen todos de Buenos Aires:

+ Recife(Brasil)
+ Roma(Italia)
+ Acapulco(México)
+ Miami(EEUU)

Cada una de las 7 aeronaves poseen las siguientes características:


+ Se identifica a partir de su matrícula (un identificador alfabético numérico de 8 dígitos).
+ Cantidad de asientos.
+ Cantidad de baños.
+ Ofrece o no comida.
+ Capacidad bodega (en kilogramos).

 
Por otro lado, cada **vuelo** deberá informar:
 +  Ciudad de partida.
 +  Ciudad de destino.
 +  Fecha de vuelo.
 +  Avión en el que se viajará.
 +  Cantidad de asientos disponibles clase premium.
 +  Cantidad de asientos disponibles clase turista.
 +  Costo de cada clase.
 +  Duración del vuelo.


De cada **avión**, el 20% de sus asientos serán para clase premium. 

* La duración del vuelo será calculada de forma aleatoria entre la duración mínima y máxima de cada destino.
  * Vuelos nacionales: entre 2 y 4 horas.
  * Vuelos internacionales: entre 8 y 12 horas.

* El costo del pasaje se calculará en base a la duración del mismo y el tipo de clase que se ha elegido:
  * Cada hora de vuelo costará 50 dólares en destinos nacionales y 100 en destinos internacionales (Ambos en categoría Turista).
    * **Clase Turista**: Podrá llevar un bolso de mano y despachar solo una valija de hasta 25kg.
    * **Clase Premium**: Podrá llevar un bolso de mano y despachar hasta dos valijas de 21kg cada una. Esta clase cuesta un 15% más de lo que costaría el mismo pasaje para turista.

De los **pasajeros** se necesita saber: 
* Nombre completo
* Dni.
* Edad.
* Equipajes con los que viaja (puede ser de mano y/o de bodega).


El **operador del sistema** tiene que poder realizar las siguientes acciones:

* Loguearse al sistema con usuario y contraseña.
* Visualizar la lista de vuelos disponibles.
* Vender un vuelo (asignar uno o más pasajeros a un vuelo).
* Ver lista de pasajeros.
* Consultar estadísticas históricas.

### Consigna
Desarrollar una aplicación de escritorio con Windows Forms que resuelva las siguientes necesidades del cliente.

Se deberá poder:

* Ver la lista de vuelos y la cantidad de asientos disponibles.
* Ver la lista de pasajeros de cada vuelo.
* Visualizar o consultar dni, nombre, apellido y la edad del cliente.
* Contar con una barra de información de la aplicación donde figure el nombre del operador conectado (que deberá ser TU nombre) y la fecha actual (sin la hora).
* Visualizar fácilmente el estado actual del vuelo (disponible/completo).
* Poder venderle un pasaje a un pasajero y asociarlo a un vuelo.
* De los aviones se deberá poder ver toda su información.
* Se le deberá mostrar al usuario el costo del vuelo, el costo final bruto por el servicio y el neto a pagar una vez aplicado IVA y las tasas correspondientes.
* Poder visualizar estadísticas históricas:
* Lista de destinos ordenados por facturación de forma descendente.
* Lista de pasajeros frecuentes ordenadas por cantidad de vuelos.
* Ganancias totales y clasificadas por servicio (cabotaje /internacional).
* Horas de vuelo de cada aeronave.
* El destino más pedido por los clientes.

## Criterios de evaluación

### Documentación



Se deberá completar la información indicada en el archivo `README.md` que se encuentra en el repositorio. 

Para trabajar con este archivo se deberá utilizar el lenguaje de marcado [Markdown](https://www.markdownguide.org/).

**:heavy_exclamation_mark::heavy_exclamation_mark: No se corregirá ni revisará ningún parcial que no presente esta documentación completa.**

#### Secciones e información a documentar
* **Título**: Ponerle un nombre a la aplicación.
* **Sobre mí**: Presentarse brevemente. Contar su experiencia programando y lo que significó para vos este trabajo (¿fue un desafío? ¿fue fácil? ¿aprendiste? ¿te divertiste? etc...). 
* **Resumen**: Explicar qué hace la aplicación y cómo se usa a grandes rasgos. 
* **Diagrama de clases**: Pegar una foto del diagrama de clases correspondiente a la lógica de negocio. Se debe construir con [la herramienta de Visual Studio](https://docs.microsoft.com/en-us/visualstudio/ide/class-designer/how-to-add-class-diagrams-to-projects?view=vs-2019) y deberá estar actualizado a la última versión entregada de la solución. 
* **Justificación técnica**: Indicar tema a tema (de los [temas 01 al 09](../../clases/programa.md)) dónde se fue aplicando en el código **y por qué se decidió implementarlo de esa forma**. Toda decisión tiene que estar argumentada con razones técnicas que giren alrededor de los pilares de la programación orientada a objetos y cuestiones de mantenibilidad, código limpio, flexibilidad al cambio, experiencia de usuario, accesibilidad, uso seguro, rendimiento y eficiencia. 
  * Suma identificar pros y contras, si los tienen en mente. 
  * El objetivo es que demuestren que saben lo que hacen y que tomaron decisiones con criterio y no mecanizadas.
  * Si se utilizó alguna biblioteca externa también se deberá justificar la elección. 
* **Propuesta de valor agregado**: En esta sección se explicará y justificará la funcionalidad adicional propuesta para el [punto de promoción](#condiciones-mínimas-para-promocionar).


### Condiciones mínimas de aprobación
* Para alcanzar la aprobación (nota 4) se deberán cumplir todas las siguientes pautas:
* Respetar TODAS [reglas de estilo de la cátedra](./../../introduccion/guia-estilos.md) y buenas prácticas indicadas en clase. Se corregirán todas las pantallas (visualización) y calidad de código según las exigencias de la cursada.
* Compilar sin errores ni advertencias (sí se admiten sugerencias del IDE).
* Debe resolver TODAS las necesidades del cliente (planteadas en la consigna y en el requerimiento) y no tener errores en el tiempo de ejecución.
* Separar de forma física (distintos proyectos) la capa de presentación (interfaz de usuario) de la lógica de negocio.
* Los datos de uso que no se cargan manualmente deben encontrarse pre-cargados (como literales) así como algunos datos históricos que simulan ejecuciones previas del programa ya que no contaremos con persistencia de datos.
* Todos los formularios deberán contar con un botón de ayuda que explique brevemente cómo se utilizan las funcionalidades.
* Para todos los formularios se debe poder maximizar, minimizar y cambiar el tamaño de la ventana.
  * La posición y/o tamaño de los controles deberá ajustarse con la ventana. Pista: hay una propiedad específica para esto, la vimos en clase.
  * Deberá existir un límite mínimo para ajustar el tamaño que será aquel donde se pierde visibilidad de los controles o se dificulta el trabajo con la aplicación.
* Las clases y sus miembros deberán estar correctamente documentados con la herramienta de documentación xml o ser lo suficientemente autodescriptivos (esto último queda a criterio del docente corrector).
* Validar todos los ingresos de datos (cuando corresponda) mostrando mensajes claros para el usuario cuando un dato sea inválido.
* Abstraer las entidades y realizar un diseño orientado a objetos. Aplicar todos los temas de los temas 01 al 09 incluida.
  * Al menos dos formularios.
  * Se valorará el uso justificado de formularios MDI, pantallas modales y no-modales.
  * Ninguna entidad se debe comparar por defecto, sino por uno o varios de sus atributos (idealmente por su identificador). Se deberá cambiar el comportamiento de todos los métodos de comparación (método `Equals` y método `GetHashCode`).
  * Todas las entidades sobrescribirán el método `ToString` y retornarán una cadena de texto con los datos que sean necesarios del objeto según el modelo utilizado.
  * Al menos una jerarquía de herencia que aproveche el pilar del polimorfismo.
  * Todas las entidades deberán estar correctamente encapsuladas exponiendo sólo sus operaciones y características esenciales, protegiendo el acceso y modificación libre de datos, y ocultando los detalles de la implementación.
  * Al menos una sobrecarga de constructores y una sobrecarga de métodos.
  * Clases, atributos y métodos que no correspondan o trabajen con el estado de una instancia particular deberán ser estáticos.
  * Todos los objetos deberán inicializar su estado con los mínimos valores necesarios para que no exista lugar a fallos en el uso del objeto, no debiendo permitir que se instancien de otra forma.
  * Declaración y uso de al menos un enumerado.
  * Declaración y uso de al menos dos tipos de colecciones genéricas distintas.
  * Uso justificado de al menos una clase abstracta.

**:heavy_exclamation_mark::heavy_exclamation_mark: Si no se cumplen TODAS las condiciones mínimas de aprobación, no se continuará con la corrección y la nota será un dos (desaprobado).**


### Condiciones mínimas para promocionar
Para promocionar se deberá cumplir todas las condiciones mínimas de aprobación y proponer una nueva funcionalidad en base al contexto del negocio.

El nuevo feature deberá ser agregado a la aplicación siguiendo todos los criterios de calidad y buenas prácticas antes nombrados.

Justificar el valor agregado de su elección en la sección *"Propuesta de valor agregado"* del  archivo `README.md`.

**:heavy_exclamation_mark::heavy_exclamation_mark: Si no se cumplen TODAS las condiciones mínimas de promoción, se corregirá el parcial pero la nota no podrá superar el cuatro (aprobado sin promoción).**

Una vez que cumplan con las condiciones y en caso que el docente crea necesario se llamará **en cualquier momento de la cursada** para defender el proyecto de forma oral y contar cómo lo resolvieron. Para esto deberán contar con cámara y micrófono, pudiendo conectarse desde un celular si fuera necesario. La exposición será grabada y se deberá presentar libreta universitaria o documento de identidad.

El resultado de la exposición oral **puede anular la promoción** si detectamos que no conocen en profundidad el proyecto o no entienden lo que hicieron. Por el contrario, una muy buena exposición sumará un punto a la calificación. Habrá casos donde no se sume el punto pero se mantenga la promoción.

### Calificación
**Una vez que se hayan superado las condiciones de aprobación**, se procederá a definir la nota por tema evaluando un uso correcto y bien justificado de cada uno de los temas vistos entre la clase 01 y la 10.



| A tener en cuenta                                                                                                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------:            |
| Reglas de estilo, buenas prácticas y calidad de documentación.                                                                                   |
| Algoritmos y resolución de problemas. Reutilización de código. Elección de tipos de datos. Trabajo con cadenas de texto, fechas, etc.            |
| Uso correcto y justificado de miembros estáticos.                                                                                                |
| Abstracción. Diseño de clases y objetos (diagrama de clases, atributos, métodos, constructores).                                                 |
| Uso correcto y justificado de sobrecargas de métodos y constructores.                                                                            |
| Uso correcto y justificado de colecciones.                                                                                                       |
| Creatividad en el diseño de formularios. Uso correcto de controles y eventos. Buena experiencia de usuario.                                      |
| Encapsulamiento y uso correcto y justificado de modificadores de acceso.                                                                         |
| Uso correcto y justificado de propiedades y enumerados.                                                                                          |
| Uso correcto y justificado de jerarquías de herencia, clases abstractas y selladas.                                                              |
| Uso correcto y justificado de polimorfismo.                                                                                                      |
| Solución robusta, con validaciones y control de errores.                                                                                         |
| Investigación, instalación y uso de una biblioteca externa (paquete nuget) que resuelva o ayude a resolver alguna necesidad de la implementación.|
| Defensa oral.                                                                                                                                    |



## Entrega
* Las entregas se deberán  realizar en GitHub el branch `Master`.
* Cada cambio y avance deberá ser registrado con un *commit* puntual acompañado de un mensaje descriptivo y subido inmediatamente al repositorio remoto (*push*).
* La solución deberá ser nombrada como: *Apellido.Nombre.PrimerParcial*.
* No realizar actualizaciones sobre el branch `Master` entre la fecha de entrega y la corrección. Si desean seguir trabajando pueden hacerlo sobre otra ramificación. 
* **Registrar cada entrega** a través del Google Form indicado a continuación. **No se corregirán repositorios que no estén registrados** en la correspondiente instancia de entrega.

| Instancia                       | Fecha                         | Formulario de registro                                                                                       |
| :------------------------------ | :---------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Primera Entrega                 | Martes 04/10/2022 10:00 AM    | [Registrá tu repositorio para la instancia de primera entrega](https://forms.gle/rTFjyM3UqATHNnDz7)          |
| Primer recuperatorio            | Martes 18/10/2022 10:00 AM    | [Registrá tu repositorio para la instancia de recuperatorio](https://forms.gle/VrEGRNsetLpyBAkKA)            |

Los trabajos serán descargados en la fecha y hora indicada, siendo corregidos a partir de ese momento según criterio docente. 

También se podrán utilizar los espacios de consulta en clase para evacuar cualquier duda o inconveniente que no hayan podido solucionar. 

El parcial **debe realizarse de forma individual**.

:::warning Advertencia

La sospecha o detección de copias conducirá a la desaprobación de ambos alumnos, quedando sin posibilidad de promoción quien tenga el commit más reciente sobre el repositorio.

Para el recuperatorio la nota máxima será cuatro.

:::

### Recomendaciones
* Aprovechar los espacios de consulta de cada clase.
* Si se traban con algo sigan con otra cosa, no pierdan demasiado tiempo en un tema puntual. 
* Considerar el deadline (fecha de entrega) y el tiempo de trabajo con el que cuentan. Planificar y priorizar su trabajo. No dejar todo para último momento. 
* Foco en el objetivo. Priorizar la entrega completa del trabajo y dejar para el final temas menos importantes (como pueden ser retoques al estilo visual). 

## Recuperatorios
En el recuperatorio se deberá entregar TODO lo requerido, completo y con las correcciones indicadas y la nota máxima será 6.




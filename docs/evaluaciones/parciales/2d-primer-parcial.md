---
title: 2do D - Primer Parcial - Laboratorio de Computación II
sidebar_label: 2do D - Primer Parcial - Laboratorio de Computación II
sidebar_position: 1
slug: /evaluaciones/parciales/2d-primer-parcial
hide_table_of_contents: false
hide_title: false
---

|               Comisión               |              Docentes               | Instancia de evaluación | Cuatrimestre |
| :----------------------------------: | :---------------------------------: | :---------------------: | :----------: |
| 2do D - Lunes y Martes 18:30 a 22:30 | M. Cerizza - L. Galarza - E. Prieto |     Primer Parcial      |   2do 2021   |

## Requerimiento
Somos desarrolladores de principios de la década del 2000 (pero con tecnología y conocimientos del futuro :wink:) y nos contratan del ***cibercafé "El vicio"*** para desarrollar un sistema que facilite la administración de los servicios que ofrece el negocio.

![Cibercafé](/evaluaciones/parciales/cibercafe.jpg)

El local cuenta con 10 **computadoras** y 5 **cabinas telefónicas**. 

Tanto las computadoras como las cabinas cuentan con un **identificador** alfa-numérico, las primeras con el prefijo 'C' seguido de un número (ejemplo, 'C01', 'C02', etc) y las segundas con el prefijo 'T' (ejemplo, 'T01', 'T02', etc).

De los teléfonos también se debe saber:
* **Tipo** (A disco / Con teclado)
* **Marca**

De las computadoras también se debe saber:
* **Software instalado** (office, messenger, icq, ares).
* **Periféricos disponibles** (cámara, auriculares, micrófono).
* **Juegos disponibles** (Counter Strike, Diablo II, Mu Online, Lineage II, Warcraft III, Age of Empires II)
* **Especificaciones de hardware** (procesador, ram, placa de video, etc).
* Siéntanse libres de agregar otras opciones de software y juegos entre las existentes en la época. 
* Cada computadora tiene que tener asociados distintos programas, juegos y periféricos, pero no todos ni repetirse (para simular una situación real). 

El **costo de uso** en el caso de las llamadas telefónicas se mide por minuto y depende de la distancia:
* ***Local***: $1.00 por minuto. Se reconoce a una llamada como local cuando el prefijo contiene un '11' o '011' luego del código de país (54 - 11 - #### - ####).
* ***Larga distancia***: $2.50 por minuto. Se reconoce a una llamada como de larga distancia cuando el prefijo contiene un número distinto de '11' o '011' luego del código de país (54 - #### - #### - ####).
* ***Internacional***: $5.00 por minuto. Se reconoce a una llamada como de larga distancia cuando el código de país es distinto de '54'.

La **costo de uso** de las computadoras es $0.50 por cada **fracción mínima de 30 minutos**. Se redondeará siempre hacia arriba (por ejemplo, 35 minutos se consideran una hora de uso).

El **usuario** (también llamado *"el pibe que atiende el ciber"*) tiene que poder realizar las siguientes acciones sobre el sistema:
* Visualizar **clientes** a la espera de ser atendidos. 
* Asignar una máquina o cabina a cada cliente en espera.
* Marcar como finalizado el uso de una máquina o cabina y cobrar por el servicio.
* Consultar **estadísticas históricas** del local.

## Consigna
Desarrollar una aplicación de escritorio con *Windows Forms* que resuelva las siguientes necesidades del cliente.

Se deberá poder:
* Ver la **lista de clientes a la espera** de atención ordenados por orden de llegada. 
  * Se deberá poder visualizar o consultar **dni**, **nombre**, **apellido** y la **edad** del cliente. 
  * Se debe poder consultar qué software, hardware o juego necesita el cliente. Esta elección debe ser simulada de forma aleatoria al iniciar el programa.
* Contar con una **barra de información de la aplicación** donde figure el nombre del operador conectado (**que deberá ser TU nombre**) y la fecha actual (sin la hora).
* Visualizar fácilmente el **estado actual** de cabinas o computadoras (disponibles/en uso).
* Poder asignar una cabina o computadora al siguiente cliente en la fila. 
  * De las computadoras deberá ver toda la información de hardware y software disponible, y **sólo** poder seleccionar una que contenga lo que el cliente necesita. 
  * No se deben poder asignar cabinas o computadoras que se encuentren en uso. 
  * Para asignar una computadora se deberá ingresar el **tiempo solicitado de alquiler** u opción *"Libre"* que dejará correr el tiempo hasta que el cliente pida finalizar. La mínima fracción es de 30 minutos, es decir sólo se puede alquilar en bloques de media hora (1/2, 1, 1 y 1/2, 2, etc).  
  * Para asignar un teléfono se deberá cargar el teléfono completo al que se va a llamar. Diferenciar **código de país** y **prefijo de localidad** del resto del número. 
* Poder indicar la finalización del uso de una computadora o teléfono.
  * Al finalizar se le deberá mostrar al usuario el tiempo de uso, el costo final bruto por el servicio y el neto a pagar una vez aplicado IVA.  
  * No se debe poder marcar como finalizado algo que no está en uso. 
* Poder visualizar estadísticas históricas:
  * Lista de computadoras ordenadas por minutos de uso de forma descendente.
  * Lista de cabinas ordenadas por minutos de uso de forma descendente.
  * Ganancias totales y clasificadas por servicio (teléfono/computadora).
  * Horas totales y la recaudación por tipo de llamada.
  * El software más pedido por los clientes. 
  * El periférico más pedido por los clientes. 
  * El juego más pedido por los clientes. 

Por fines prácticos de la evaluación:
* Un segundo de la vida real será equivalente a un minuto del ciber.
* Un minuto de la vida real será equivalente a una hora del ciber. 

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
Para alcanzar la aprobación (nota 4) se deberán cumplir todas las siguientes pautas:
* Respetar TODAS las [reglas de estilo de la cátedra](./../../introduccion/guia-estilos.md) y buenas prácticas indicadas en clase. Se corregirán todas las pantallas (visualización) y calidad de código según las exigencias de la cursada.
* Compilar sin errores ni advertencias (sí se admiten sugerencias del IDE).
* Debe resolver TODAS las necesidades del cliente (planteadas en la consigna y en el requerimiento) y no tener errores en tiempo de ejecución.
* Separar de forma física (distintos proyectos) la capa de presentación (interfaz de usuario) de la lógica de negocio. 
* Los datos de uso que no se carguen manualmente deben encontrarse pre-cargados (como literales) así como algunos datos históricos que simulen ejecuciones previas del programa ya que no contaremos con persistencia de datos. 
* Todos los formularios deberán contar con un botón de ayuda que explique brevemente cómo se utilizan las funcionalidades. 
* Para todos los formularios se debe poder maximizar, minimizar y cambiar el tamaño de la ventana.
  * La posición y/o tamaño de los controles deberá ajustarse con la ventana. Pista: hay una propiedad específica para esto, la vimos en clase.
  * Deberá existir un límite mínimo para ajustar el tamaño que será aquel donde se pierde visibilidad de los controles o se dificulta el trabajo con la aplicación.
* Las clases y sus miembros deberán estar correctamente documentados con la herramienta de documentación xml. 
* Validar todos los ingresos de datos (cuando corresponda) mostrando mensajes claros para el usuario cuando un dato sea inválido. 
* Abstraer las entidades y realizar un diseño orientado a objetos. Aplicar todos los temas de los [temas 01 al 09](../../clases/programa.md) incluida.
  * Al menos dos formularios.
  * Se valorará el uso justificado de formularios MDI, pantallas modales y no-modales.
  * Ninguna entidad se debe comparar por defecto, sino por uno o varios de sus atributos (idealmente por su identificador). Se deberá cambiar el comportamiento todos los métodos de comparación (operador de igualdad, método `Equals` y método `GetHashCode`).
  * Todas las entidades sobrescribirán el método `ToString` y retornarán una cadena de texto con los datos del objeto. 
  * Al menos una jerarquía de herencia que aproveche el pilar del polimorfismo.
  * Todas las entidades deberán estar correctamente encapsuladas exponiendo sólo sus operaciones y características esenciales, protegiendo el acceso y modificación libre de datos, y ocultando los detalles de la implementación.  
  * Al menos una sobrecarga de constructores y una sobrecarga de métodos. 
  * Clases, atributos y métodos que no correspondan o trabajen con el estado de una instancia particular deberán ser estáticos. 
  * Todos los objetos deberán inicializar su estado con los mínimos valores necesarios para que no exista lugar a fallos en el uso del objeto, no debiendo permitir que se instancien de otra forma. 
  * Declaración y uso de al menos un enumerado. 
  * Declaración y uso de al menos un indexador. 
  * Declaración y uso de al menos dos tipos de colecciones genéricas distintas. 
  * Uso justificado de al menos una clase abstracta y una clase sellada. 

**:heavy_exclamation_mark::heavy_exclamation_mark: Si no se cumplen TODAS las condiciones mínimas de aprobación, no se continuará con la corrección y la nota será un dos (desaprobado).**

Además de cumplir con las condiciones mínimas, se deberá alcanzar el puntaje indicado en la sección [calificación](#calificación). 

### Condiciones mínimas para promocionar
Para promocionar se deberá cumplir todas las condiciones mínimas de aprobación y proponer una nueva funcionalidad en base al contexto del negocio. 

El nuevo feature deberá ser agregado a la aplicación siguiendo todos los criterios de calidad y buenas prácticas antes nombrados. 

Justificar el valor agregado de su elección en la sección *"Propuesta de valor agregado"* del archivo `README.md`. 

**:heavy_exclamation_mark::heavy_exclamation_mark: Si no se cumplen TODAS las condiciones mínimas de promoción, se corregirá el parcial pero la nota no podrá superar el cuatro (aprobado sin promoción).**

Una vez cumplan con las condiciones, se los irá llamando **en cualquier momento de la cursada** para defender el proyecto de forma oral y contar cómo lo resolvieron. Para esto deberán contar con cámara y micrófono, pudiendo conectarse desde un celular si fuera necesario. La exposición será grabada y se deberá presentar libreta universaria o documento de identidad. 

El resultado de la exposición oral **puede anular la promoción** si detectamos que no conocen en profundidad el proyecto o no entienden lo que hicieron. Por el contrario, una muy buena exposición sumará un punto a la calificación. Habrá casos donde no se sume el punto pero se mantenga la promoción.

Además de cumplir con las condiciones mínimas, se deberá alcanzar el puntaje indicado en la sección [calificación](#calificación). 

### Calificación
**Una vez que se hayan superado las condiciones de aprobación**, se calificará por tema evaluando un uso correcto y bien justificado de cada uno de los temas vistos entre la clase 01 y la 10.

| Tema                                                                                                                                              | Peso          |
| :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------ |
| Reglas de estilo, buenas prácticas y calidad de documentación.                                                                                    | 1 punto       |
| Algoritmos y resolución de problemas. Reutilización de código. Elección de tipos de datos. Trabajo con cadenas de texto, fechas, etc.             | 2 puntos      |
| Uso correcto y justificado de miembros estáticos.                                                                                                 | 1 punto       |
| Abstracción. Diseño de clases y objetos (diagrama de clases, atributos, métodos, constructores).                                                  | 2 puntos      |
| Uso correcto y justificado de sobrecargas de métodos, operadores y constructores.                                                                 | 1 punto       |
| Uso correcto y justificado de colecciones.                                                                                                        | 1 punto       |
| Creatividad en el diseño de formularios. Uso correcto de controles y eventos. Buena experiencia de usuario.                                       | 2 puntos      |
| Encapsulamiento y uso correcto y justificado de modificadores de acceso.                                                                          | 2 puntos      |
| Uso correcto y justificado de propiedades, enumerados e indexadores.                                                                              | 1 puntos      |
| Uso correcto y justificado de jerarquías de herencia, clases abstractas y selladas.                                                               | 2 puntos      |
| Uso correcto y justificado de polimorfismo.                                                                                                       | 2 puntos      |
| Solución robusta, con validaciones y control de errores.                                                                                          | 1 punto       |
| Investigación, instalación y uso de una biblioteca externa (paquete nuget) que resuelva o ayude a resolver alguna necesidad de la implementación. | 1 punto       |
| Defensa oral.                                                                                                                                     | 1 punto       |
| **Total**                                                                                                                                         | **20 puntos** |

|    Puntos     | Nota  |
| :-----------: | :---: |
| >= 10 && < 12 |   4   |
| >= 12 && < 14 |   6   |
| >= 14 && < 16 |   7   |
| >= 16 && < 18 |   8   |
| >= 18 && < 20 |   9   |
|      20       |  10   |

## Entrega
* Con su cuenta de GitHub deberá realizar un *fork* al siguiente repositorio: https://github.com/mauricioCerizza/2021C2_UTNFra_LaboII_2doD_PP. 
  * **Trabajar sobre el repositorio forkeado**. 
  * Las entregas se deberán realizar en el branch `Master`.
* Cada cambio y avance deberá ser registrado con un *commit* puntual acompañado de un mensaje descriptivo y subido inmediatamente al repositorio remoto (*push*).
* La solución deberá ser nombrada como: *Apellido.Nombre.PrimerParcial*.
* No realizar actualizaciones sobre el branch `Master` entre la fecha de entrega y la corrección. Si desean seguir trabajando pueden hacerlo sobre otra ramificación. 
* **Registrar cada entrega** a través del Google Form indicado a continuación. **No se corregirán repositorios que no estén registrados** en la correspondiente instancia de entrega.

| Instancia                       | Fecha                         | Formulario de registro                                                                                       |
| :------------------------------ | :---------------------------- | :----------------------------------------------------------------------------------------------------------- |
| ~~Primera Revisión (opcional)~~ | ~~Lunes 27/09/2021 10:00 AM~~ | ~~[Registrá tu repositorio para la instancia de PRIMERA revisión](https://forms.gle/crZLsvpP26KyaRHs9)~~     |
| ~~Segunda Revisión (opcional)~~ | ~~Lunes 04/10/2021 10:00 AM~~ | ~~[Registrá tu repositorio para la instancia de SEGUNDA revisión](https://forms.gle/Po2JszUURRNZmzCRA)~~     |
| ~~Primera entrega~~             | ~~Lunes 11/10/2021 10:00 AM~~ | ~~[Registrá tu repositorio para la instancia de primera entrega](https://forms.gle/aEdKgSB7fuZ3ooHQ7)~~      |
| ~~Primer recuperatorio~~        | ~~Lunes 01/11/2021 10:00 AM~~ | ~~[Registrá tu repositorio para la primer instancia de recuperatorio](https://forms.gle/vAE8fP8SowCvkruh6)~~ |
| Segundo recuperatorio           | Lunes 29/11/2021 10:00 AM     | [Registrá tu repositorio para la segunda instancia de recuperatorio](https://forms.gle/4SxYXripefuU4gcNA)    |

Los trabajos serán descargados en la fecha y hora indicada, siendo corregidos a partir de ese momento según criterio docente. Existirá una instancia de revisión **opcional**, donde se podrá entregar el trabajo (completo o incompleto) y recibir una corrección preliminar que no afectará la nota final. 

También se podrán utilizar los espacios de consulta en clase para evacuar cualquier duda o inconveniente que no hayan podido solucionar. **No se responderán mensajes privados por Slack fuera del horario de clase.**

El parcial **debe realizarse de forma individual**, sin colaboración, ni corrección, ni guía, ni nada similar de ningún compañero.

:::warning Advertencia

La sospecha o detección de copias conducirá a la desaprobación de ambos alumnos, quedando sin posibilidad de promoción quien tenga el commit más reciente sobre el repositorio.

Para los recuperatorios deberán rehacer el trabajo con un diseño e implementación completamente nuevo y la nota máxima será cuatro.

:::

### Recomendaciones
* Aprovechar los espacios de consulta de cada clase.
* Si se traban con algo sigan con otra cosa, no pierdan demasiado tiempo en un tema puntual. 
* Considerar el deadline (fecha de entrega) y el tiempo de trabajo con el que cuentan. Planificar y priorizar su trabajo. No dejar todo para último momento. 
* Foco en el objetivo. Priorizar la entrega completa del trabajo y dejar para el final temas menos importantes (como pueden ser retoques al estilo visual). 

## Recuperatorios
En cada recuperatorio se deberá entregar TODO lo requerido, completo y con las correcciones indicadas.

El segundo recuperatorio reemplazará a la instancia de recuperación en **primera** fecha de final, donde deberán asistir sólo quienes estén en condiciones de promoción y aún no hayan defendido el trabajo. 

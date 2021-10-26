---
sidebar_label: "C01 - Siempre quise tener un notepad-serializador (≧∇≦)"
title: "Ejercicio C01 - Siempre quise tener un notepad-serializador (≧∇≦)"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
--- 
### Consigna
Partir del ejercicio [Siempre quise tener un notepad ಥ‿ಥ](../../14-archivos/Ejercicios/I03-siempre-quise-tener-un-notepad.md) y **sin modificar el diseño del formulario**, crear un proyecto de biblioteca de clases llamado `IO` y agregar los siguientes elementos: 

![Diagrama de clases](/clases/15-serializacion/ejercicios/notepad-serializador-diagram.png)

* Crear un nuevo tipo de excepción llamado `ArchivoIncorrectoException`.

* El método `ValidarSiExisteElArchivo` de la clase `Archivo` comprobará que el archivo exista. Si existe retornará `true`. De no existir, lanzará la excepción `ArchivoIncorrectoException` con el mensaje *"El archivo no se encontró."*.

* El método `ValidarExtensión` validará que la extensión del archivo sea la que retorna la propiedad **abstracta protegida** `Extension`. 
  * De no ser la extensión correcta, lanzará la excepción `ArchivoIncorrectoException` con el mensaje *"El archivo no tiene la extensión [extensión]."*. Reemplazar el texto entre corchetes por la extensión que se esperaba.

* Agregar la clase `PuntoJson` que herede de `Archivo`. 
  * `Extension` retornará *.json*.
  * Será genérica y tendrá un tipo genérico `T` que **deberá ser un tipo de referencia**. 

* Agregar la clase `PuntoXml` que herede de `Archivo`. 
  * `Extension` retornará *.xml*.
  * Será genérica y tendrá un tipo genérico `T` que **deberá ser un tipo de referencia**. 

* Agregar la clase `PuntoTxt` que herede de `Archivo`. 
  * `Extension` retornará *.txt*.

* Automatizar pruebas unitarias que verifiquen que el método `ValidarExtension` funcione tal como se espera para cada una de las clases derivadas de `Archivo`. 
  * Probar tanto casos válidos (extensión correcta), como casos inválidos (extensión incorrecta).
  
* Implementar la interfaz `IArchivo` en `PuntoJson` y `PuntoXml` usando el tipo genérico.
  * Los métodos de la clase `PuntoJson` serializarán y deserializarán el tipo genérico en **formato JSON**, mientras que en la clase `PuntoXml` lo harán en **formato XML**.

* Implementar la interfaz `IArchivo` con el tipo `string`.
  * Los métodos leerán y guardarán **texto plano**. 

* En los tres casos:
  * El método `Guardar` comprobará que el archivo exista, en cuyo caso guardará el contenido en el archivo.
  * El método `GuardarComo` guardará el contenido en un nuevo archivo, sólamente comprobando que la extensión sea la correcta.
  * El método `Leer` comprobará que el archivo existe, en cuyo caso retornará su contenido.
  * **Reutilizar código**.

* En el formulario, al ir a los menú de *"Abrir"* o *"Guardar como..."*, el mismo cuadro de dialogo deberá ofrecer la posibilidad de abrir "Archivos de texto (.txt)", "Archivos JSON (.json)" o "Archivos XML (.xml)". Para esto, utilizar la propiedad `Filter` de `OpenFileDialog` y `CloseFileDialog`.

* Agregar atributos al formulario de tipo `PuntoJson`, `PuntoXml` y `PuntoTxt`. 
  * Instanciarlos en el constructor del formulario. 
  * Los genéricos serán de tipo `string`. 

* En las funcionalidades existentes del formulario:
  * Si la extensión del archivo es *".json"*, utilizar los métodos del atributo `PuntoJson`.
  * Si la extensión del archivo es *".xml"*, utilizar los métodos del atributo `PuntoXml`.
  * Si la extensión del archivo es *".txt"*, utilizar los métodos del atributo `PuntoTxt`.

* Realizar las modificaciones necesarias para que funcione correctamente.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_15/C01_Siempre_quise_tener_un_notepad_serializador) |
| :-----------------------: | :---: | :----------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
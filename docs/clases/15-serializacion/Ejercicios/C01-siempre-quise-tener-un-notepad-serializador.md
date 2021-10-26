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
Partir del ejercicio [Siempre quise tener un notepad ಥ‿ಥ](../../14-archivos/Ejercicios/I03-siempre-quise-tener-un-notepad.md) y **sin modificar el formulario**, crear un proyecto de biblioteca de clases llamado `IO` y agregar las siguientes clases e interfaces: 

![Diagrama de clases](/clases/13-interfaces/ejercicios/boligrafo-y-lapiz-diagram.PNG)

* El método `ValidarArchivo` de la clase `Archivo` comprobará que el archivo exista. 
  * Si existe retornará `true`. De no existir, lanzará la excepción `ArchivoIncorrectoException` con el mensaje *"El archivo no se encontró."*.

* En el mismo método validará que la extensión del archivo sea la que retorna la propiedad **abstracta protegida** `Extension`.
  * De no ser la extensión correcta, lanzará la excepción `ArchivoIncorrectoException` con el mensaje *"El archivo no tiene la extensión [extensión]."*. Reemplazar el texto entre corchetes por la extensión que se esperaba (propiedad `Extension`). 

* En la clase `PuntoJson`, `Extension` retornará *.json*.

* En la clase `PuntoTxt`, `Extension` retornará *.txt*.

* En la clase `PuntoXml`, `Extension` retornará *.xml*.

* En el formulario, al ir a los menú de *"Abrir"* o *"Guardar como..."*, el mismo cuadro de dialogo deberá ofrecer la posibilidad de abrir "Archivos de texto (.txt)", "Archivos JSON (.json)" o "Archivos XML (.xml)". Para esto, utilizar la propiedad `Filter` de `OpenFileDialog`.

* Los métodos de la clase `PuntoJson` serializarán a formato JSON, mientras que los de la clase `PuntoXml` a formato XML. 

* El método `Guardar` comprobará que el archivo existe, en cuyo caso lo guardará.

* El método `GuardarComo` guardará en un nuevo archivo.

* El método `Leer` comprobará que el archivo existe, en cuyo caso lo abrirá.

* Realizar las modificaciones necesarias para que funcione correctamente.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
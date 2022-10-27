---
sidebar_label: I03 - Impresora multifunción
title: I03 - Impresora multifunción
sidebar_position: 3
author: 
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

### Consigna

Crear una interfaz cuyo nombre sea **Imprimible** .

Definir en esta interfaz el método ``void Imprimir( )``.

Luego, crear las siguientes clases y hacer que cada una implemente la interfaz ``Imprimible``.

Además , definir el comportamiento del método imprimir en cada caso :

 ``Contrato`` : imprime por pantalla **"Soy un contrato muy legal"**

 ``Foto`` : imprime por pantalla **"Soy una selfie pal insta"**

 ``Documento`` : **"Soy un documento de word"** .

Crear una clase ``Impresora`` que contenga una lista de imprimibles llamada colaDelmpresion.

Luego crear dos métodos en la clase impresora :

``ImprimirTodo`` Este método será el encargado de recorrer la cola de impresión e imprimirlos .

``AgregarImprimible`` Este método será el encargado de agregar un imprimible a la cola de impresión .

Instanciar en el ``Form`` principal:
+ Un contrato
+ Una foto
+ Un documento
+ Una impresora .

Agregar el contrato, la foto y el documento a la cola de impresión de la impresora . Pedirle a la impresora que imprima todo.

Mostrar toda la información en un ``RichTexBox``


### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
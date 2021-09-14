---
sidebar_label: I02 - ¿Consultaste el índice?
title: Ejercicio I02 - ¿Consultaste el índice?
sidebar_position: 2
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear la clase `Libro` en una biblioteca de clases y el código necesario para acceder a las páginas mediante un valor numérico.

![Diagrama de clases](/clases/07-encapsulamiento/Ejercicios/diagramaIndice.PNG)

El descriptor de acceso `get` del indexador leerá la página pedida, siempre y cuando el subíndice se encuentre dentro de un rango correcto, sino retornará un string vacío.

En el `set`, si la página existe (existe ese índice) le asignará el texto. Si no existe (si el índice es superior al máximo existente), agregará una nueva página.

Crear un proyecto de consola y probar la clase en el método `Main`.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

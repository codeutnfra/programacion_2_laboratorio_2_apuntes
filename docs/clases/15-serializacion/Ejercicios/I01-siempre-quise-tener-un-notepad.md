---
sidebar_label: "I01 - Siempre quise tener un notepad ಥ‿ಥ"
title: "Ejercicio I01 - Siempre quise tener un notepad ಥ‿ಥ"
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

## Consigna

### Parte I
Crear un proyecto de *Windows Forms App* capaz de abrir, editar y guardar archivos de texto, tal como se puede hacer en un simple editor de texto como puede ser el *notepad* de *Windows*.

* Agregar una barra de menú superior (`MenuStrip`) con las siguiente opciones del menú "Archivo":
    * Archivo -> Guardar
    * Archivo -> Guardar como...
    * Archivo -> Abrir
* Agregar una barra de estado en la parte inferior (`StatusStrip`). Se debe informar el total de caracteres del archivo. 
* Al pulsar el menú "Abrir" o "Guardar como...", se deberá abrir una ventana para seleccionar los archivos (ver nota al pie).
* Al hacer click sobre "Guardar", se deberá guardar el mismo archivo abierto (último guardado o abierto desde la interfaz). En el caso que no haya ningún "último archivo", se comportará igual que el "Guardar como...". **Reutilizar código.**
* El editor (`RichTextBox`) deberá estar acoplado (propiedad `Dock`) al formulario.

:::important Importante

Utilizar las clases `OpenFileDialog` y `SaveFileDialog` para buscar los archivos en las carpetas del sistema. 

:::

### Parte II
**Sin modificar el formulario**, crear un proyecto de *biblioteca de clases* llamado "IO" y agregar las siguientes clases: 



### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
---
sidebar_label: "I02 - El parseador"
title: "Ejercicio I02 - El parseador"
sidebar_position: 2
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
Antes de comenzar se deberá [descargar la cáscara del proyecto](https://drive.google.com/file/d/1CPG9TLTR5LFLcMGLjHs576nPdkLuWSqd/view?usp=sharing). Los siguientes puntos se deberán resolver trabajando sobre la misma.

:::important Importante

Para resolver este ejercicio será de ayuda el capítulo de los apuntes **[Trabajando con archivos](../apuntes/archivos)**. 

:::

### Parte I
Crear un nuevo proyecto de biblioteca de clases llamado `Persistencia` e implementar el siguiente diagrama de clases:

* La clase `Parseador` será estática.
* El método privado `VerificarDirectorio` deberá verificar si existe el directorio y si no existe deberá crearlo.
  * Si existe o no existía pero lo pudo crear, retornar true. 
  * Si no existía y no se pudo crear, retornar false.  
* 

### Parte II
Referenciar el proyecto `Persistencia` en el proyecto `Entidades`.

Crear un proyecto de consola capaz de abrir, editar y guardar archivos de texto, tal como se puede hacer en un simple editor de texto como puede ser el *notepad* de *Windows*.

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
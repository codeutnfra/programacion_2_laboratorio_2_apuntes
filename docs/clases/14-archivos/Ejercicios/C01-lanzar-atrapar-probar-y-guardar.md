---
sidebar_label: "C01 - Lanzar, atrapar, probar y guardar"
title: "Ejercicio C01 - Lanzar, atrapar, probar y guardar"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
1. Partir del ejercicio [Lanzar, atrapar y probar](../../11-testing/Ejercicios/C02-lanzar-atrapar-y-probar.md) y agregarle un nuevo proyecto llamado `IO`. 

2. Dentro de este proyecto crear la clase **estática** `ArchivoTexto` que deberá contener:
   * Un método `Guardar` que agregará información al archivo de texto ubicado en la ruta pasada como parámetro. También recibirá un `string` con la información a guardar.
   * Un método `Leer` que retornará el contenido del archivo ubicado en la ruta pasada como parámetro. En caso de no existir, lanzará la excepción de sistema `FileNotFoundException`.

3. Modificar en el método `Main` donde se captura la excepción. Quitar los `Console.WriteLine` y guardar todos los datos del error en un archivo de texto, cuyo nombre será la fecha y hora actual con el formato: [año][mes][día]–[hora][minutos].txt.
   * Por ejemplo: *20171012-1316.txt*

4. Luego, fuera del bloque `catch`, utilizar el método `Leer` para mostrar por pantalla los mensajes de error.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
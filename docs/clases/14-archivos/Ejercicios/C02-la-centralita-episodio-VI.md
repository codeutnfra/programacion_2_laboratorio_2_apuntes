---
sidebar_label: "C02 - La centralita: Episodio VI"
title: "Ejercicio C02 - La centralita: Episodio VI"
sidebar_position: 102
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio V](../../13-interfaces/Ejercicios/C01-la-centralita-episodio-V.md) y realizar los siguientes cambios:

1. El método `Guardar` de la implementación de `IGuardar` en `Centralita` deberá guardar en un archivo de texto a modo de bitácora fecha y hora con el siguiente formato “Jueves 19 de octubre de 2017 19:09hs – Se realizó una llamada”; para lo cual este método deberá ser llamado desde el operador `+` (suma). En caso de no poder guardar, igualmente agregar la llamada a la `Centralita` y luego lanzar la excepción `FallaLogException`.
2. El método `Leer` deberá obtener los datos de un archivo dado y retornarlos.
3. En el método `Main` modificar el código para que, antes de salir, muestre el log.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
---
sidebar_label: "C01 - La centralita: Episodio V"
title: "Ejercicio C01 - La centralita: Episodio V"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio IV](../../11-testing/Ejercicios/C01-la-centralita-episodio-IV.md) y agregar la siguiente interfaz:

![Diagrama de clases](/clases/13-interfaces/ejercicios/centralita-V-diagram.PNG)

1. Implementar la interfaz en la clase `Centralita` para datos del tipo `string`.
   1. `Guardar` tomará el objeto y consultará todos sus datos, luego retornará `true`.
   2. `Leer` lanzará la excepción `NotImplementedException`.

2. Implementar la interfaz en las llamadas del tipo `Local` y `Provincial` para los tipos de datos `Local` y `Provincial` respectivamente.
   1. Tanto `Leer` como `Guardar` lanzarán la excepción `NotImplementedException`.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
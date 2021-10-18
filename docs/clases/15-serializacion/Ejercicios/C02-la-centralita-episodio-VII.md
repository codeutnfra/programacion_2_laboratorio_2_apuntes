---
sidebar_label: "C02 - La centralita: Episodio VII"
title: "Ejercicio C02 - La centralita: Episodio VII"
sidebar_position: 102
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio VI](../../14-archivos/Ejercicios/C02-la-centralita-episodio-VI.md) y:

1. El método `Guardar` de la implementación de `IGuardar` en `Local` deberá serializar el objeto en formato **XML** y guardarlo en un archivo.

2. El método `Leer` de la implementación de `IGuardar` en `Local` deberá obtener los datos de un archivo conteniendo un objeto serializado en formato XML, comprobar que este sea del tipo `Local` y retornar el objeto deserializado. En caso de que no sea del tipo `Local`, lanzará la excepción `InvalidCastException`.

3. El método `Guardar` de la implementación de `IGuardar` en `Provincial` deberá serializar el objeto en formato **XML** y guardarlo en un archivo.

4. El método `Leer` de la implementación de `IGuardar` en `Provincial` deberá obtener los datos de un archivo conteniendo un objeto serializado en formato XML, comprobar que este sea del tipo `Provincial` y retornar el objeto deserializado. En caso de que no sea del tipo `Local`, lanzará la excepción `InvalidCastException`.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
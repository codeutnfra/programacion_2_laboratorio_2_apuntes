---
sidebar_label: I02 - Contabilidad
title: Ejercicio I02 - Contabilidad
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear un proyecto de biblioteca de clases y agregar las clases del siguiente diagrama:

![Diagrama de clases](/clases/12-generics/ejercicios/contabilidad-diagram.PNG)

* Crear en `Contabilidad` un constructor que no reciba parámetros e inicialice las listas.
* El constructor sin parámetros de `Recibo` asignará 0 como número de documento.
* Tanto el tipo genérico `T` como el `U` deberán ser del tipo `Documento` o uno de sus derivados.
* El tipo `U` deberá tener una restricción que indique que deberá tener un constructor público y sin parámetros.
* El operador `+` entre `Contabilidad` y `T` agrega un elemento a la lista egresos.
* El operador `+` entre `Contabilidad` y `U` agrega un elemento a la lista ingresos.

Crear un proyecto de consola y generar el código necesario para probar dichas clases.

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/RhWJ9LMsPkU) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_12/I02_Contabilidad) |
| :-----------------------: | :---: | :----------------------: | :----: |
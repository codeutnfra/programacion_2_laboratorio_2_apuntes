---
sidebar_label: "C03 - Parada en boxes"
title: "Ejercicio C03 - Parada en boxes"
sidebar_position: 103
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [Seguí participando](../../10-excepciones/Ejercicios/C02-segui-participando.md).

1. Agregar una propiedad que haga pública la lista de vehículos de `Competencia`.
2. Crear un test unitario que valide que la lista de vehículos de la competencia esté instanciada al crear un nuevo objeto.
3. Realizar un test unitario que controle que la excepción `CompetenciaNoDisponible` se lance al querer cargar un `AutoF1` en una competencia del tipo `MotoCross`.
4. Realizar otro test que controle que la excepción `CompetenciaNoDisponible` NO se lance al querer cargar un objeto del tipo `MotoCross` en una competencia del tipo `MotoCross`.
5. Comprobar que al cargar un nuevo vehículo en la competencia este figure en la lista. Utilizar el operador `+` y el `==`.
6. Comprobar que al quitar un vehículo existente en la competencia este ya no figure en la lista. Utilizar el operador `-` y el `!=`.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
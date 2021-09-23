---
sidebar_label: C02 - Seguí participando
title: Ejercicio C02 - Seguí participando
sidebar_position: 102
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [Go Speed Racer Go!](../../08-herencia/Ejercicios/C02-go-speed-racer-go.md) y agregar la excepción `CompetenciaNoDisponibleException`.

![Diagrama de clases](/clases/10-excepciones/ejercicios/a-la-velocidad-de-la-luz-diagram.PNG)

1. La sobrescritura del método `ToString` retornará un mensaje con el siguiente formato por líneas:
   1. *"Excepción en el método {0} de la clase {1}:"*
   2. Mensaje propio de la excepción.
   3. Todos los `InnerException` con una tabulación (`\t`).

2. La excepción `CompetenciaNoDisponibleException` será lanzada dentro del operador `==` de `Competencia` y `Vehiculo` con el mensaje *"El vehículo no corresponde a la competencia"*, capturada dentro del operador `+` y lanzada nuevamente como una **nueva** excepción con el mensaje *"Competencia incorrecta"*. Utilizar la propiedad `InnerException` para almacenar la excepción original. 

3. Modificar el método `Main` para agregar un `Vehiculo` que no corresponda con la competencia, capturar la excepción y mostrar el error por pantalla. 

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
---
sidebar_label: C02 - Go Speed Racer Go!
title: Ejercicio C02 - Go Speed Racer Go!
sidebar_position: 102
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [Enciendan sus motores](../../06-colecciones/Ejercicios/C02-enciendan-sus-motores.md) y agregar la clase `VehiculoDeCarrera` y la clase `MotoCross`.

![Diagrama de clases](/clases/08-herencia/ejercicios/go-speed-racer-go-diagram.PNG)

1. Mover toda la información pedida a la clase `VehiculoDeCarrera`, modificando `AutoF1` y generando sus correspondientes propiedades.
   * Dos `VehiculoDeCarrera` son iguales si coincide su número y escudería.
   * Dos `AutoF1` serán iguales cuando, además de coincidir los datos contenidos en `VehiculoDeCarrera`, coincida el atributo `caballosDeFuerza`.
   * Dos `MotoCross` son iguales si coincide cuando, además de coincidir los datos contenidos en `VehiculoDeCarrera`, coincida el atributo `cilindrada`.
   * El método Mostrar de `VehiculoDeCarrera` será el único capaz de exponer información de este tipo de objetos.

2. En la clase `Competencia` cambiar el tipo de la lista por `VehiculoDeCarrera`.
   * Si la competencia es declarada del tipo `CarreraMotoCross`, sólo se podrán agregar vehículos del tipo `MotoCross`. Si la competencia es del tipo `F1`, sólo se podrán agregar objetos `AutoF1`. Colocar dicha comparación dentro de la sobrecarga del operador `==` de la clase `Competencia`.

3. Modificar todo lo que sea necesario para que el sistema siga comportándose de la misma forma, aceptando también vehículos del tipo `MotoCross` en la competencia.

<iframe width="560" height="315" src="https://www.youtube.com/embed/suCm1w_KTiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/Z31e0-ygQwg) | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
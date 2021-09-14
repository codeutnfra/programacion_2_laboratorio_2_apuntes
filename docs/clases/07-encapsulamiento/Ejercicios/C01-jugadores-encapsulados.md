---
sidebar_label: C01 - Jugadores encapsulados
title: Ejercicio C01 - Jugadores encapsulados
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [Estadística deportiva](../../06-colecciones/Ejercicios/C01-estadistica-deportiva.md) y realizar los siguientes cambios:

1. Agregar propiedades **de sólo lectura** a los atributos `partidosJugados`, `promedioGoles` y `totalGoles` de `Jugador`, y **de lectura/escritura** a `nombre` y `dni`.
2. Quitar el atributo `promedioGoles` de jugador. Calcular dicho promedio dentro de la propiedad **de sólo lectura** `PromedioDeGoles`.
3. Quitar el método `GetPromedioGoles`, colocando dicha lógica en la respectiva propiedad.
4. Realizar todos los cambios necesarios para que vuelva a funcionar como antes.

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/Sis1ScMAp_M) | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

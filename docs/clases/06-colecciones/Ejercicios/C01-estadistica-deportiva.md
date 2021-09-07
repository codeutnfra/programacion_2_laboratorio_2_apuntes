---
sidebar_label: C01 - Estadística deportiva
title: Ejercicio C01 - Estadística deportiva
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de biblioteca de clases que contenga las clases `Jugador` y `Equipo`:

![Diagrama de clase Estadística Deportiva](/clases/06-colecciones/Ejercicios/diagramaEstadisticaDeportiva.PNG)

#### Clase Jugador
+ Todos los datos estadísticos del jugador se inicializarán en 0 dentro del constructor **privado**.
+ El promedio de gol sólo se calculará cuando invoquen al método `GetPromedioGoles`.
+ `MostrarDatos` retornará una cadena de string con todos los datos y estadísticas del jugador.
+ Dos jugadores serán iguales si tienen el mismo DNI.

#### Clase Equipo
+ La lista de jugadores se inicializará sólo en el constructor **privado** de `Equipo`.
+ La sobrecarga del operador `+` agregará jugadores a la lista siempre y cuando no exista aún en el equipo y la cantidad de jugadores no supere el límite establecido por el atributo `cantidadDeJugadores`. 

Crear un proyecto de consola y generar las invocaciones necesarias en el método `Main` para probar el código.

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/eb0TQ3wlPeg) | ![img](/base/github.svg) | Código |
| :-----------------------: | :-----------------------------------: | :----------------------: | :----: |

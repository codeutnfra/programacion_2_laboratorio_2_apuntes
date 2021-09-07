---
sidebar_label: C02 - Enciendan sus motores
title: Ejercicio C02 - Enciendan sus motores
sidebar_position: 102
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de biblioteca de clases que contenga las clases `Competencia` y `AutoF1`:

![Diagrama de clase Estadistica Deportiva](/clases/06-colecciones/Ejercicios/diagramaCarreraF1.PNG)

#### Clase AutoF1
+ Al generar un auto se cargará el atributo `enCompetencia` como falso. Inicializar `cantidadCombustible` y `vueltasRestantes` en 0.
+ Dos autos serán iguales si los atributos `número` y `escuderia` son iguales.
+ Realizar los métodos getters y setters para `cantidadCombustible` , `enCompetencia` y `vueltasRestantes`.

#### Clase Competencia
+ El constructor **privado** será el único capaz de inicializar la lista de competidores.
+ La sobrecarga del operador `+` agregará un competidor si es que aún hay espacio (validar con `cantidadCompetidores`) y el competidor no forma parte de la lista (== entre `Competencia` y `AutoF1`).
+ Al ser agregado, el competidor cambiará su estado `enCompetencia` a verdadero, la cantidad de `vueltasRestantes` será igual a la `cantidadVueltas` de `Competencia` y se le asignará un número aleatorio entre 15 y 100 a `cantidadCombustible`.

Crear un proyecto de consola y generar las invocaciones necesarias en el método `Main` para probar el código.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_06/C02_Enciendan_sus_motores) |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |

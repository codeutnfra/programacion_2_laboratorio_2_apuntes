---
sidebar_label: I01 - Torneo
title: Ejercicio I01 - Torneo
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
1. Crear un proyecto del tipo biblioteca de clases.

2. Generar la clase `Torneo` con un tipo genérico.
   1. Restringir el tipo genérico para que deba ser del tipo `Equipo` o sus derivados.
   2. Tendrá un atributo `equipos` de tipo `List<T>` y otro `nombre` de tipo `string`.
   3. Sobrecargar el operador `==` para que controle si un equipo ya está inscripto al torneo.
   4. Sobrecargar el operador `+` para agregar un equipo a la lista, siempre y cuando este no se encuentre ya en el torneo.
   5. El método `Mostrar` retornará los datos del torneo y de los equipos participantes.
   6. El método privado `CalcularPartido` recibirá dos elementos del tipo `T`, que deberán ser del tipo `Equipo` o sus herencias, y calculará utilizando la clase `Random` un resultado del partido. Retornará el resultado como un `string` con el siguiente formato donde `EQUIPOX` es el nombre del equipo y `RESULTADOX` la cantidad de goles/puntos: 
   > [EQUIPO1] [RESULTADO1] – [RESULTADO2] [EQUIPO2]
   
   7. La propiedad pública `JugarPartido` tomará dos equipos de la lista al azar y calculará el resultado del partido a través del método `CalcularPartido`.

3. Generar la clase `Equipo` abstracta.
   1. Agregar un atributo `nombre` de tipo `string` y otro `fechaCreacion` de tipo `DateTime`.
   2. Dos equipos serán iguales si comparten el mismo nombre y fecha de creación.
   3. El método `Ficha` retornará el nombre del equipo y su fecha de creación con el siguiente formato:
   > [EQUIPO] fundado el [FECHA]

4. Generar la clase `EquipoFutbol` que herede de `Equipo`.

5. Generar la clase `EquipoBasquet` que herede de `Equipo`.

6. Crear un proyecto de consola. 
    1. Generar dos torneos, uno de `Futbol` y otro de `Basquet`.
    2. Crear 3 equipos de cada tipo.
    3. Agregar los equipos en tantos torneos como se pueda.
    4. Llamar al método `Mostrar` de `Torneo` e imprimir su retorno por pantalla.
    5. Llamar al menos 3 veces a la propiedad `JugarPartido` de cada torneo e imprimir su respuesta por pantalla.

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/wnwsGaDWZUU) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_12/I01_Torneo) |
| :-----------------------: | :---: | :----------------------: | :----: |
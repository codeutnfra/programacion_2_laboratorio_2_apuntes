---
sidebar_label: I01 - Placa de Crónica TV
title: Ejercicio I01 - Placa de Crónica TV
sidebar_position: 1
author: Mauricio Cerizza
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

![Placa de Crónica TV](/clases/25-otros/ejercicios/placa-cronica.jpg)

### Consigna
En un proyecto de biblioteca de clases:

1. Crear un enumerado `Estaciones` con las cuatro estaciones del año: Verano, Primavera, Invierno, Otonio.

2. Crear un método de extensión `ObtenerPlacaCronicaTV` que extienda `DateTime`, reciba un argumento de tipo `Estaciones` y devuelva un `string`. El método debe retornar un texto con la cantidad de días que faltan para la estación indicada empezando a contar desde la fecha almacenada en la instancia de `DateTime` que llama al método. 
   * Por ejemplo: “Faltan 45 días para el Verano”.
   * Si este año la estación ya pasó, se debe considerar la fecha del año siguiente.

3. Crear un proyecto de consola y mostrar los días que faltan para todas las estaciones desde la fecha actual.

:::tip
* La cantidad de días se puede obtener restando la fecha del cambio de estación más próximo a la fecha de partida.

* Restar objetos tipo `DateTime` devuelve un `TimeSpan`. Utilizar la propiedad `TotalDays` para obtener la cantidad de días a los que representa.

* Para obtener el nombre de la constante que representa a la estación puede usar el método estático `Enum.GetName`. El mismo recibe el tipo de enumerado y la variable que contiene el valor del enumerado elegido.
:::

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
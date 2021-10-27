---
sidebar_label: "I02 - Mi propio SORT"
title: "Ejercicio I02 - Mi propio SORT"
sidebar_position: 2
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

:::caution Advertencia

El siguiente ejercicio se encuentra incompleto.

:::

## Consigna
1. Crear un proyecto de consola.

2. Crear una clase genérica `SuperLista`:
   * Uno de sus atributos privados será un array del tipo genérico llamado `elementos`. 
   * El otro atributo privado será `capacidad` de tipo `int`. 
   * Tendrá un único constructor público y sin parámetros. En el constructor se iniciará `capacidad` en 10 y se instanciará el array con una cantidad de espacios igual a `capacidad`.

3. Tendrá un método privado `IncrementarCapacidad` que incrementará `capacidad` en 10 y cambiará el tamaño de `elementos` con `Array.Resize` igualando a `capacidad`.
   
4. Agregar un método de instancia público llamado `Agregar` que reciba un elemento del tipo genérico y lo agregue al array `elementos`. Si se alcanzó el tamaño máximo del array, incrementar el tamaño usando el método `IncrementarCapacidad`.

5. Agregar un método `OrdenarAMiManera` que recibirá como argumento un método que retorne el criterio de comparación entre dos elementos de la lista. Para esto se deberá declarar un nuevo tipo delegado.

Se puede usar [BubbleSort](https://en.wikipedia.org/wiki/Bubble_sort#Pseudocode_implementation) o cualquier algoritmo de ordenamiento que conozca. 

Probar la solución agregando el siguiente código al método `Main`:

```csharp

```

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
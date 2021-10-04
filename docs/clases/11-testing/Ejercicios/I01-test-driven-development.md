---
sidebar_label: I01 - Test Driven Development
title: Ejercicio I01 - Test Driven Development
sidebar_position: 1
author: Esteban Prieto
authorURL:
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
Crear una calculadora de string con un método `int Add (string numeros)` y automatizar las pruebas unitarias para cada uno de los siguientes puntos.

:::tip Sugerencias

- Comience con el caso de prueba más simple de un string vacío y pase a uno y dos números
- Recuerde resolver las cosas de la forma más sencilla posible
- Recuerde refactorizar después de cada prueba aprobada.

:::

:::important Importante

El objetivo es aprender a trabajar de forma incremental. 

Hacé una tarea a la vez y tratá de no seguir leyendo los siguientes puntos.

:::

### Parte I
El método `Add` debe poder tomar hasta dos números separados por comas, y devolverá su suma. 

Por ejemplo "" o "1" o "1,2" como entradas (para un string vacío devolverá 0).

### Parte II
Permitir que el método `Add` maneje una cantidad desconocida de números.

### Parte III
Permita que el método `Add` admita salto de línea entre números (en lugar de comas). 
   * La siguiente entrada está bien: "1 \ n2,3" (será igual a 6). 
   * La siguiente entrada NO está bien: "1, \ n" (no es necesario probarlo, solo se aclara)

### Parte IV
Permitir que el método `Add` soporte diferentes delimitadores.

Para cambiar un delimitador, el comienzo del string contendrá dos barras, debe verse así:
  
> // [delimitador] \ n [números ...]

Por ejemplo: "//; \ n1; 2" debe devolver tres donde el valor predeterminado delimitador es ';'.

Las barras son opcionales. Todos los escenarios existentes aún deben ser compatibles.

### Parte V
Si `Add` recibe un número negativo arrojará una excepción `NegativoNoPermitidoException` que en su mensaje contendrá el negativo que se recibió.

## Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
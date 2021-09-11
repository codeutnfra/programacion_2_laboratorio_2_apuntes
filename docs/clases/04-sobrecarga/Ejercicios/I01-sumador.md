---
sidebar_label: I01 - Sumador
title: Ejercicio I01 - Sumador
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de tipo biblioteca de clases y agregar la clase `Sumador`.

![Diagrama de clase Sumador](/clases/04-sobrecarga/Ejercicios/diagramaSumador.JPG)

1. Crear dos constructores:
   1. `Sumador(int)` inicializa `cantidadSumas` en el valor recibido por parámetro.
   2. `Sumador()` inicializa `cantidadSumas` en cero. Reutilizará al primer constructor.

2. El método `Sumar` incrementará `cantidadSumas` en 1 y adicionará sus parámetros con la siguiente lógica:
   1. En el caso de `Sumar(long, long)` sumará los valores numéricos
   2. En el de `Sumar(string, string)` concatenará las cadenas de texto.

Crear un proyecto de consola y agregar un objeto del tipo `Sumador` en el método `Main` y probar el código.

Seguido:
1. Generar una conversión **explícita** que retorne `cantidadSumas`.

2. Sobrecargar el operador `+` (suma) con dos operadores de tipo `Sumador`. El resultado será un `long` correspondiente al resultado de la suma del atributo `cantidadSumas` de cada argumento.

3. Sobrecargar el operador `|` (pipe) con dos operadores de tipo `Sumador`. Deberá retornar `true` si ambos sumadores tienen igual valor en el atributo `cantidadSumas`.

Agregar un segundo objeto del tipo `Sumador` en el método `Main` y probar el código.

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/tQAQDaiK_2A) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_04/I01_Sumador) |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |

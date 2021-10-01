---
sidebar_label: "I02 - Calculadora de formas"
title: "Ejercicio I02 - Calculadora de formas"
sidebar_position: 2
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
1. Crear una biblioteca de clases que contenga la siguiente jerarquía de herencia:
   * La clase `Figura` será base de las demás y no deberá poder instanciarse.
   * Las clases `Rectangulo` y `Circulo` heredarán de `Figura`.
   * La clase `Cuadrado` heredará de `Rectangulo`.
   * Las clases `Circulo` y `Cuadrado` no se deben poder heredar (ser base).

2. Agregar el método `Dibujar` que tendrá una implementación **por defecto** en la clase base y retornará el texto *"Dibujando forma..."*. Las clases derivadas **directas** invalidarán dicha implementación y la cambiarán por *"Dibujando círculo"*, *"Dibujando rectángulo"*, según corresponda. 

3. Agregar el método `CalcularSuperficie` que deberá ser implementado **de manera obligatoria** por las clases derivadas. Debe retornar un `double` con el resultado del cálculo de superficie (área) para la figura correspondiente.

4. Agregar el método `CalcularPerimetro` que deberá ser implementado **de manera obligatoria** por las clases derivadas. Debe retornar un `double` con el resultado del cálculo del perímetro para la figura correspondiente.

5. Crear un proyecto de consola y en el método `Main`:
   1. Crear una lista de figuras.
   2. Agregar a la lista una figura de cada tipo.
   3. Recorrer la lista mostrando:
      * El resultado del método `Dibujar`.
      * El área y el perímetro de cada figura con una precisión de 2 decimales.
      * El tipo del objeto (método `GetType`).

```
=============== FIGURA 01 ==================
 Tipo: Biblioteca.Circulo
 Dibujando Círculo...
 Área: 7,14
 Perímetro: 12,57
============================================


=============== FIGURA 02 ==================
 Tipo: Biblioteca.Cuadrado
 Dibujando Cuadrado...
 Área: 9,00
 Perímetro: 12,00
============================================


=============== FIGURA 03 ==================
 Tipo: Biblioteca.Rectangulo
 Dibujando Rectángulo...
 Área: 32,00
 Perímetro: 24,00
============================================
```

6. Responder:
   1. ¿Por qué la clase `Cuadrado` no está obligada a implementar el método `Dibujar`? ¿Las otras clases están obligadas a hacerlo?
   2. ¿Por qué la clase `Cuadrado` no está obligada a implementar el método `CalcularSuperficie`? ¿Las otras clases están obligadas a hacerlo?
   3. ¿A qué implementación del método `CalcularPerimetro` llaman los objetos de tipo `Cuadrado`?

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/w9RwEGz9Eos) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_09/I02_Calculadora_de_formas) |
| :-----------------------: | :-----------------------------------: | :----------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
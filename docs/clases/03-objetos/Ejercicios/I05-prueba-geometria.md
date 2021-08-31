---
sidebar_label: I05 - Prueba de geometría
title: Ejercicio I05 - Prueba de geometría
sidebar_position: 5
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
En un proyecto de biblioteca de clases, crear las clases modeladas en el siguiente diagrama:

![Diagrama de clases](/clases/03-objetos/ejercicios/prueba-geometria-diagram.png)

Ambas clases deberán encontrarse dentro de un espacio de nombres (namespace) llamado `Geometria`.

La clase `Punto` debe tener:
* Dos atributos ***privados*** con acceso de sólo lectura (sólo con getters), que serán las coordenadas del punto. 
* Un constructor que reciba los parámetros x e y.

La clase `Rectangulo`:
* Tiene los atributos de tipo `Punto`: `vertice1`, `vertice2`, `vertice3` y `vertice4` (que corresponden a los cuatro vértices del rectángulo).
* La base de todos los rectángulos de esta clase será siempre horizontal. El constructor para calculará los vértices 2 y 4 del rectángulo a partir de los vértices 1 y 3. Utilizar el método `Abs` de la clase `Math` que retorna el valor absoluto de un número y será necesario para obtener la distancia entre puntos.
* Realizar los métodos **getters** para los atributos privados `area` y `perimetro`.
* El área (`base * altura`) y el perímetro (`(base + altura) / 2`) se deberán calcular sólo una vez cuando se llame por primera vez a su correspondiente método getter. En las siguientes invocaciones de dichos métodos se deberá retornar siempre el valor calculado anteriormente. 

1. Crear un proyecto de consola.
2. En la clase `Program`, desarrollar un método de clase (estático) que muestre todos los datos de una instancia de `Rectangulo` que reciba como parámetro.
3. En el método `Main` probar las funcionalidades de las clases `Punto` y `Rectángulo`.
   1. Instanciar un nuevo `Rectangulo`.
   2. Imprimir por pantalla los valores de área y perímetro.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

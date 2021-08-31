---
sidebar_label: I04 - Invento argentino
title: Ejercicio I04 - Invento argentino
sidebar_position: 4
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
En un proyecto de biblioteca de clases, crear la clase `Boligrafo` a partir del siguiente diagrama:

![Diagrama de clases](/clases/03-objetos/ejercicios/invento-argentino-diagram.png)

* La cantidad máxima de tinta para todos los bolígrafos será de 100. Generar una **constante** `cantidadTintaMaxima` en `Boligrafo` donde se guardará dicho valor.
* Generar los métodos getter `GetColor` y `GetTinta` para los correspondientes atributos (sólo retornarán el valor de los mismos).
* Generar un método setter **privado** `SetTinta` que valide el nivel de tinta y, si es válido, modifique el valor del atributo `tinta`.
  * El argumento `tinta` contedrá la cantidad de tinta a agregar o quitar. Podrá ser positivo (cargar tinta) o negativo (gastar tinta).
  * Se deberá validar que el nivel de tinta resultante sea mayor o igual a cero y menor o igual a `cantidadTintaMaxima`. Si no es válido, no se deberá modificar el atributo ni realizar ninguna acción. 
* El método `Recargar` colocará la tinta en su nivel máximo. ***Reutilizar código***.
* El método `Pintar` restará la tinta gastada (***reutilizar código***). El parámetro `gasto` representará la cantidad de unidades de tinta a utilizar y utilizará tanta tinta como tenga disponible sin quedar en negativo. Utilizando el parámetro `dibujo` informará el resultado retornando tantos `*` como unidades de tinta haya gastado, por ejemplo:
  * Si no había nada de tinta retornará una cadena de texto vacía.
  * Si el nivel de tinta era 10 y la cantidad a gastar 2, entonces retonará `**`. 
  * Si el nivel de tinta era 3 y la cantidad a gastar 10, entonces retornará `***`.

1. Agregar un proyecto de consola.
2. En el método `Main`, crear un bolígrafo de tinta azul (`ConsoleColor.Blue`) y una cantidad inicial de tinta de 100 y otro de tinta roja (`ConsoleColor.Red`) y 50 de tinta.
3. Utilizar todos los métodos y mostrar los resultados por consola. 
4. Al utilizar el método `Pintar`, si corresponde, se deberá dibujar por pantalla con el color de dicho bolígrafo. 

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

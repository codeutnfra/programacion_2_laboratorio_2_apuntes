---
sidebar_label: I03 - El ejemplo universal
title: Ejercicio I03 - El ejemplo universal
sidebar_position: 3
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear una aplicación de consola y una biblioteca de clases que contenga la clase del siguiente diagrama:

![Diagrama de clases](/clases/03-objetos/ejercicios/el-ejemplo-universal-diagram.png)

La clase `Estudiante`:
* Tendrá un **constructor estático** que inicializará el **atributo estático** `random`.
* Tendrá un **constructor de instancia** que inicializará los atributos `nombre`, `apellido` y `legajo`.
* El método **setter** `SetNotaPrimerParcial` permitirá cambiar el valor del atributo `notaPrimerParcial`.
* El método **setter** `SetNotaSegundoParcial` permitirá cambiar el valor del atributo `notaSegundoParcial`.
* El método **privado** `CalcularPromedio` retornará el promedio de las dos notas. 
* El método `CalcularNotaFinal` deberá retornar la nota del final **con un numero aleatorio** entre 6 y 10 incluidos siempre y cuando las notas del primer y segundo parcial sean mayores o iguales a 4, caso contrario la inicializará con el valor -1.
* El método `Mostrar` utilizará `StringBuilder` para armar una cadena de texto con todos los datos de los alumnos:  
  * Nombre, apellido y legajo.
  * Nota del primer y segundo parcial.
  * Promedio. 
  * Nota final. Se mostrará sólo si el valor es distinto de -1, caso contrario se mostrará la leyenda "*Alumno desaprobado*". 

1. Crear tres instancias de la clase `Estudiante` (tres objetos) en el método `Main`. 
2. Cargar las notas del primer y segundo parcial a todos los alumnos. Dos deberán estar aprobados y uno desaprobado. 
3. Mostrar los datos de todos los alumnos.


:::important Importante

Para darle un valor aleatorio a la nota final utilice el método de instancia `Next` de la clase `Random`.

:::

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

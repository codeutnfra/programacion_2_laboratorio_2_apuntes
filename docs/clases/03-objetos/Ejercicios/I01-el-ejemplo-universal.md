---
sidebar_label: I01 - El ejemplo universal
title: Ejercicio I01 - El ejemplo universal
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear una aplicación de consola y una biblioteca de clases que contenga la clase del siguiente diagrama:



1. Se pide crear tres instancias de la clase `Estudiante` (tres objetos) en el método `Main`. 
3. Sólo se podrá ingresar las notas (`notaPrimerParcial` y `notaSegundoParcial`) a través del método `Estudiar`.
4. El método `CalcularFinal` deberá cargar la nota del final **con un numero aleatorio** entre 6 y 10 siempre y cuando las notas del primer y segundo parcial sean mayores o iguales a 4, caso contrario la inicializará con `-1`.
5. El método `Mostrar`, retornará una cadena de texto con todos los datos de los alumnos. La nota final se mostrará sólo si es distinto de -1, caso contrario se mostrará la leyenda "*Alumno desaprobado*".


:::important Importante

* Para darle un valor aleatorio a la nota final utilice el método de instancia `Next` de la clase `Random`.

* En el método `Mostrar`, utilizar `StringBuilder` para armar el texto con los datos de los alumnos. 

:::

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

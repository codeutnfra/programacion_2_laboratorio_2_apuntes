---
sidebar_label: "I04 - La siempre clásica y eficaz receta"
title: "Ejercicio I04 - La siempre clásica y eficaz receta"
sidebar_position: 4
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear un proyecto de consola. Seguir esta receta al pie de la letra sin agregar nada:

1. Crear una clase `Persona` con dos atributos privados de tipo `string`, nombre y apellido.
   1. Agregarle un constructor que reciba ambos parámetros. 
   2. Crear un método estático llamado `Guardar` que reciba un objeto de tipo `Persona`, la serialice en **formato XML** y la almacene en un archivo con nombre inválido (por ejemplo: `""`).
   3. Crear un método estático llamado `Leer` que deserialice desde un archivo con nombre inválido (por ejemplo: `""`) y retorne un objeto de tipo `Persona`.
   4. Sobrecargar el método `ToString` para mostrar los datos de la persona. 

2. En el método `Main`, instanciar un objeto del tipo `Persona` e intentar serializarlo.

3. Luego intentar leer ese objeto serializado en una nueva instancia de `Persona` y mostrarlo por pantalla. 

4. Repetir los métodos `Guardar` y `Leer` pero con **formato JSON**.

5. Por cada excepción que lance la aplicación:
   1. Generar un bloque `catch` que la capture y maneje.
   2. Luego corregir el problema que genera la excepción. 
   3. Repetir el proceso hasta capturar todas las excepciones de forma individual. No se deberá capturar las excepciones usando el tipo `Exception`, sino el tipo específico de cada excepción lanzada.  
   4. Los datos del objeto `Persona` guardado deben ser el nombre y el apellido, y deberán coincidir con los datos del objeto deserializado. 


### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
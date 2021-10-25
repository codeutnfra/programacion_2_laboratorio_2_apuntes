---
sidebar_label: "I03 - Persiste y triunfarás"
title: "Ejercicio I03 - Persiste y triunfarás"
sidebar_position: 3
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

### Consigna

:::caution Advertencia

El siguiente ejercicio se encuentra incompleto.

:::

1. Agregar a la solución un proyecto de biblioteca de clases llamado `Persistencia` y agregar la siguiente interfaz:

2. El tipo genérico `TObjeto` deberá ser de referencia y contener un constructor público sin parámetros. 

3. Crear una clase **genérica** llamada `SerializadorXml` que implemente la interfaz `IPersistencia`.
   * El método `Almacenar` deberá serializar el objeto a **formato XML** y guardarlo en un archivo en la ruta indicada. 
   * El método `Recuperar` deberá recuperar la información del archivo ubicado en la ruta indicada y deserializarlo desde **formato XML**.

4. Agregar un proyecto de consola a la solución llamado `Lista_Supermercado`.

5. Agregar a dicho proyecto la siguiente clase:
 

6. Deberá mostrar un menú con las siguientes opciones y permitir elegir una de ellas:
   1. Listar.
   2. Agregar tarea.
   3. Modificar tarea.
   4. Eliminar tarea.
   5. Quitar objeto.
   6. Limpiar lista.
   7. Salir.

7. Agregar al proyecto `Persistencia` una clase **genérica** llamada `SerializadorJson` que implemente la interfaz `IPersistencia`.
   * El método `Almacenar` deberá serializar el objeto a **formato JSON** y guardarlo en un archivo en la ruta indicada.
   * El método `Recuperar` deberá recuperar la información del archivo ubicado en la ruta indicada y deserializarlo desde **formato JSON**.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
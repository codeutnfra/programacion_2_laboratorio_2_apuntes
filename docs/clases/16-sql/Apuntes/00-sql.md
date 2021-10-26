---
title: Apuntes - Introducción a SQL
sidebar_label: Lenguaje de consultas SQL
slug: /clases/sql/apuntes/sql
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## Base de Datos
Una **base de datos** es un programa que nos permite persistir en memoria una gran cantidad de información, nos brinda seguridad de acceso a los mismos y nos obliga a estructurar estos datos por tipo y relación. En otras palabras, organiza colecciones de estructuras fuertemente tipadas para almacenar en las mismas tuplas homogéneas.

### Función de una base de datos
Las bases de datos se utilizan para guardar una gran cantidad de datos y poder obtener de manera rápida un dato especifico, ingresar un registro solo si cumple con los tipos requeridos y con las relaciones prestablecidas y eliminar registros si no tienen ninguna dependencia creada.

## SQL
SQL es un lenguaje estructurado de consulta, no es una base de datos, sino el lenguaje para poder extraer de una base de datos la información que requerimos.

### Clasificación de SQL
El lenguaje sql se clasifica en varios tipos de lenguaje, entre los mas importantes, **DDL** y **DML**

#### DDL (Data Definition Language)
Este lenguaje lo utilizamos para la creación de la estructura de base de datos, la misma se encuentra en un servidor, en donde se aloja una instancia.

En esta asignatura para realizar esta tarea utilizaremos el programa *SQL Server Magement Studio* pudiendo hacer la tarea a través de una interfaz gráfica.

Pero debemos saber que existen las siguientes instrucciones dentro de este lenguaje:

* **`CREATE`**: Nos permite crear base de datos, tablas, campos e índices.
* **`ALTER`**: Utilizado para modificar las tablas agregando campos o cambiando la definición de los campos.
* **`DROP`**: Elimina tablas e índices.
* **`TRUNCATE`**: Elimina todos los registros de una tabla.

#### DML (Data Manipulation Language)
Con este lenguaje podemos obtener, agregar, modificar y eliminar los datos dentro de las tablas, sus principales sentencias son:

* **`SELECT`**: Nos deja relacionar, filtrar y ordenar los datos para poder visualizarlos.
* **`INSERT`**: Agrega una tupla dentro de una tabla.
* **`UPDATE`**: Nos permite modificar el valor de un registro o parte del mismo.
* **`DELETE`**: Elimina registros de una tabla de una base de datos.
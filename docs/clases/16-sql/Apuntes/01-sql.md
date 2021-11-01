---
sidebar_label: Lenguaje de consultas SQL
slug: /clases/sql/apuntes/sql
hide_table_of_contents: false
hide_title: true
author: Ezequiel Oggioni
authorURL: 
---
## SQL
SQL es un lenguaje estructurado de consulta, no es una base de datos, sino el lenguaje para poder extraer de una base de datos la información que requerimos.

## Clasificación de SQL
El lenguaje sql se clasifica en varios tipos de lenguaje, entre los mas importantes, **DDL** y **DML**

### DDL (Data Definition Language)
Este lenguaje lo utilizamos para la creación de la estructura de base de datos, la misma se encuentra en un servidor, en donde se aloja una instancia.

En esta asignatura para realizar esta tarea utilizaremos el programa *SQL Server Magement Studio* pudiendo hacer la tarea a través de una interfaz gráfica.

Pero debemos saber que existen las siguientes instrucciones dentro de este lenguaje:

* **`CREATE`**: Nos permite crear base de datos, tablas, campos e índices.
* **`ALTER`**: Utilizado para modificar las tablas agregando campos o cambiando la definición de los campos.
* **`DROP`**: Elimina tablas e índices.
* **`TRUNCATE`**: Elimina todos los registros de una tabla.

### DML (Data Manipulation Language)
Con este lenguaje podemos consultar, agregar, modificar y eliminar los datos dentro de las tablas, sus principales sentencias son:

* **`SELECT`**: Nos deja relacionar, filtrar y ordenar los datos para poder visualizarlos.
* **`INSERT`**: Agrega una tupla dentro de una tabla.
* **`UPDATE`**: Nos permite modificar el valor de un registro o parte del mismo.
* **`DELETE`**: Elimina registros de una tabla de una base de datos.
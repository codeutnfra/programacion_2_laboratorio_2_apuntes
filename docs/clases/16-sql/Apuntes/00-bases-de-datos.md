---
title: Apuntes - Introducción a bases de datos y SQL
sidebar_label: Bases de datos
slug: /clases/sql/apuntes/bases-de-datos
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## Base de Datos
Una **base de datos (*Database*)** es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso.

Nos permite persistir una gran cantidad de información, nos brinda seguridad de acceso a los mismos y nos obliga a estructurar estos datos por tipo y relación. En otras palabras, organiza colecciones de estructuras fuertemente tipadas para almacenar en las mismas tuplas homogéneas.

## Tablas
Son una colección de datos relacionados organizados en filas y columnas.

Las **columnas (*columns*)** definen un conjunto de datos de un tipo particular. Las filas tomarán un valor concreto para cada columna de la tabla. Las columnas también se conocen como **atributos (*attributes*)**. 

Una **fila (*row*)** contiene un valor específico para cada columna. Representan un conjunto de datos relacionados con la misma estructura, la cual está definida por las columnas. Las filas también se conocen como **tuplas (*tuples*)** o **registros**.

Un **campo (*field*)** es donde una columna y una fila se intersectan. Contiene un valor concreto definido por la columna y perteneciente al conjunto de datos de la fila. Los campos también se conocen como **celdas (*cells*)**.




## Bases de datos relacionales
Llamamos así a toda base de datos que cumple con el modelo relacional. Dicho paradigma consiste en generar relaciones entre los datos guardados en diferentes tablas, y a través de estas relaciones, conectar dichas tablas.

Características:
* Cada tabla será un conjunto de registros, conformados por **filas (*row*)** y **columnas (*column*)**.
* Se compone de varias tablas y relaciones entre ellas.
* No pueden existir dos o más tablas con igual nombre.
* Las relaciones se llevarán a cabo a través de campos especiales, conocidos como **claves primarias (*primary key*)** y **claves foráneas (*foreign key*)**.



## Exportar una base de datos
<iframe width="560" height="315" src="https://www.youtube.com/embed/71PTdD2li0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Importar una base de datos
<iframe width="560" height="315" src="https://www.youtube.com/embed/2Lxznt6Bi0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
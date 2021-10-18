---
title: Cuestionario - Introducción a SQL
sidebar_label: Cuestionario
slug: /clases/sql/apuntes/cuestionario
hide_table_of_contents: true
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
### Base de datos
1. ¿Qué es una tabla? Describa su composición.
2. ¿Qué es una primary key o clave primaria? Describa sus características.
3. ¿Qué es una foreign key o clave foránea?
4. ¿Qué es un campo de tipo identidad en SQL Server? 
5. Todas las primary keys son de tipo identidad? 
6. ¿Puedo tener campos que no sean primary key y sean identidad? 

### SQL
Responda en base a la tabla `Provincias`:

![Tabla Provincias](/clases/16-sql/apuntes/tabla-provincias.png)

1. Escriba los comandos SQL para insertar las siguientes provincias teniendo en cuenta que la columna `id` es clave primaria y NO es autoincremental.
   1. Formosa - Población: 573.823
   2. Neuquén - Población: Sin información
   3. Entre Ríos - Población: 1.308.000
   4. Tierra del fuego - Población: 152.317

2. Teniendo en cuenta los registros insertados en el punto anterior, escriba el comando SQL para modificar el registro de la provincia ‘Neuquén’ con una nueva cantidad de habitantes de 619.745. 

3. Escriba la sentencia SQL para consultar todas las columnas de todas las provincias. 

4. Escriba la sentencia SQL para consultar sólo el nombre de todas las provincias.

5. Teniendo en cuenta que se ejecutaron los comandos de los puntos anteriores, escriba la sentencia SQL para consultar todos los datos de todas las provincias que tengan más de 600mil habitantes. Escriba el resultado de la consulta. 

6. Escriba el comando SQL para eliminar el registro con id igual a 3.

7. Escriba el comando SQL para eliminar todos los registros que no tengan datos en la columna “cantidad_habitantes”.

8. ¿Puedo insertar un registro que no contenga datos para la columna “nombre_provincia”? ¿Por qué?


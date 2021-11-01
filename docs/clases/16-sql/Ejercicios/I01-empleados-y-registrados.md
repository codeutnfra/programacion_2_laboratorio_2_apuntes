---
sidebar_label: "I01 - Empleados y registrados"
title: "Ejercicio I01 - Empleados y registrados"
sidebar_position: 1
author: Mauricio Cerizza
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

:::important Importante

Para todos los puntos del ejercicio se deberá utilizar ***SQL Server*** y ***Sql Server Management Studio***.

:::

### Consigna
1. Crear la base de datos `EMPRESA_DB` con la siguiente estructura:

![Diagrama](/clases/16-sql/ejercicios/empleados-y-registrados-diagram.png)

   * `ID_EMPLEADO` es **clave primaria** e **identidad**.
   * `ID_PUESTO` en la tabla `EMPLEADO` es una **clave foránea** que apunta a la clave primaria de la tabla `PUESTOS`.
   * `ID_PUESTO` en la tabla `PUESTOS` es una **clave primaria** y NO es identidad.

2. Insertar los siguientes registros a la tabla `PUESTOS`:

| ID_PUESTO | NOMBRE         | NIVEL_AUTORIZACION |
| --------- | -------------- | ------------------ |
| 1         | Director       | 3                  |
| 2         | Gerente        | 3                  |
| 5         | Jefe de sector | 2                  |
| 4         | Administrativo | 1                  |
| 3         | Vendedor       | 0                  |
| 6         | Secretario     | 2                  |

3. Insertar los siguientes registros a la tabla `EMPLEADOS`:

| NOMBRE  | APELLIDO | PUESTO         | SALARIO   | ESTA_ACTIVO | FECHA_ALTA | FECHA_BAJA | MAIL                 |
| ------- | -------- | -------------- | --------- | ----------- | ---------- | ---------- | -------------------- |
| Leilani | Kinney   | Director       | 383946,80 | SÍ          | 1996-03-21 | NULL       | lkinney@gmail.com    |
| Igor    | England  | Jefe de sector | 283558,85 | SÍ          | 2013-03-28 | NULL       | iengland@hotmail.com |
| Maya    | Brock    | Vendedor       | 164546,09 | SÍ          | 1993-10-24 | NULL       | NULL                 |
| Hayden  | Moss     | Administrativo | 211695,50 | NO          | 2012-06-07 | 2015-02-19 | hmoss@gmail.com      |
| Amal    | Colon    | Gerente        | 388933,60 | SÍ          | 2019-09-23 | NULL       | NULL                 |

   * Cada empleado deberán relacionarse con su puesto a través de la clave foránea. 
   * `ESTA_ACTIVO` tomará el valor *1* cuando el empleado esté activo y *0* cuando esté inactivo. 

4. Realizar las siguientes consultas:
   1. Todos los empleados con todos sus datos.
   2. El nombre (y sólo eso) de todos los puestos.
   3. Sólo los empleados que estén activos (ESTA_ACTIVO = 1).
   4. Los empleados cuyo salario sea mayor a *$200.000,00*.
   5. Los empleados cuya fecha de alta sea menor o igual al *07/06/2012*.
   6. Los empleados que no tengan mail cargado.
   7. Los empleados que tengan mail cargado.
   8. Los empleados cuyo mail sea de *gmail*.
   9. Los empleados cuyo apellido empiece con la letra "*B*".

5. Realizar las siguientes consultas:
   1.  Los empleados que estén activos y ganen más de *$300.000,00*.
   2.  Los empleados que no tengan mail o no estén activos. 
   3.  Los empleados que tengan mail y su nombre contenga la letra *"a"*.
   4.  Los empleados que ganen *$250.000,00* o más y hayan ingresado después del año 2000 inclusive, o aquellos que ganen menos de *$250.000,00* y hayan ingresado antes del año 2000 sin incluir. 
   5.  Los empleados cuyo salario esté entre *$100.000,00* y *$250.000,00*. 
   6.  Los empleados cuyo salario NO esté entre *$100.000,00* y *$250.000,00*. 
   7.  Los puestos con nivel de autorización 0, 1 o 2.
   8.  Los puestos con nivel de autorización distinto a 0, 1 y 2. 

6.  Realizar las siguientes consultas:
    1. Los empleados activos ordenados alfabéticamente por su apellido de manera ascendente.
    2. Los tres empleados más viejos.
    3. Los tres empleados que más ganan.
    4. Todos los datos de los empleados ordenados por el valor de sus salarios de manera descendente.
    5. Los distintos niveles de autorización de los puestos, sin repetir. 

7.  Realizar las siguientes consultas:
    1.  El nombre y apellido de los empleados, junto al nombre de su puesto. 
    2.  Los empleados que tengan un puesto con nivel de autorización igual a 3. 
    3.  El nombre y apellido de los empleados, junto al nombre de su puesto, ordenados alfabéticamente por apellido del empleado de manera ascendente.
    4.  El nombre y apellido de los empleados, junto al nombre de su puesto, ordenados alfabéticamente por nombre del puesto de manera ascendente.  
    5.  Nombre, apellido y nombre del puesto de los empleados que estén activos, ordenados por su nivel de autorización de forma ascendente.
    6.  Los puestos que no tengan empleados asociados.
    7.  Los puestos que tienen empleados asociados.

8.  Realizar las siguientes consultas:
    1.  El promedio de los salarios de todos los empleados que estén activos.
    2.  La suma de los salarios de todos los empleados que estén activos.
    3.  La cantidad de empleados que ganan más de *$250.000,00*.
    4.  La cantidad de empleados que ingresaron antes del año 2010. 
    5.  El salario más alto.
    6.  Los puestos con el nivel de autorización más bajo.
    7.  El nombre completo de todos los empleados (concatenado).
    9.  El nombre completo de todos los empleados (concatenado), el nombre de su puesto y su nivel de autorización.
    10. El nombre completo de todos los empleados (concatenado), el nombre de su puesto y su nivel de autorización. Y los puestos con su nivel de autorización que no tengan empleados asociados. Todo en una misma consulta.

9.  Realizar las siguientes consultas:
    1.  La cantidad de empleados por puesto.
    2.  El promedio del salario por puesto.
    3.  Nombre, apellido y salario del empleado que más gana.
    4.  Los empleados con el nivel de autorización más alto. 
    5.  Los datos del empleado más viejo.  
    6.  Los salarios por encima del promedio.
    7.  La cantidad de empleados que ganan por encima del promedio. 

10. Agregar el mail *mbrock@yahoo.com* a *Maya Brock* filtrando por su `ID_EMPLEADO`. Verificar con una consulta la correcta ejecución del comando. 

11. Cambiar el puesto de *Maya Brock* a Administrativo y su salario a *$210.000,00*.

12. Dar un aumento del 25% a todos los empleados que ganen menos de *$250.000,00*.

13. Exportar la base de datos.

14. Hacer una baja **lógica** del empleado con ID = 1, sin olvidar cargar su fecha de baja. Verificar con una consulta la correcta ejecución del comando. 

15. Hacer una baja **física** a todos los empleados que no estén activos. Verificar con una consulta la correcta ejecución del comando. 

16. Eliminar la base de datos y volverla a crear a partir del archivo generado en el punto 8. 

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
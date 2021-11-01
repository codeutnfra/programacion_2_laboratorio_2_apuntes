---
sidebar_label: "I02 - La base del bufet"
title: "Ejercicio I02 - La base del bufet"
sidebar_position: 2
author: Ezequiel Oggioni
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---
:::important Importante

Para todos los puntos del ejercicio se deberá utilizar ***SQL Server*** y ***Sql Server Management Studio***.

:::

### Consigna
1. Se deberá crear la base de datos `Bufet_UTN` con las siguientes tablas:

**Tabla `Provedores`**
* Numero_Proveedor (PK) entero Not Null
* Nombre cadena (30)
* Domicilio cadena (50)
* Localidad cadena (80)

**Tabla `Productos`**
* Codigo_Producto (PK) entero Not Null
* Nombre cadena (30)
* Precio flotante
* Dimensiones cadena (20)

**Tabla `Envios`**
* Numero_Proveedor(PK) entero Not Null
* Codigo_Producto(PK) entero Not Null
* Cantidad entero Not Null

2. Insertar los datos indicados en las siguientes tablas:

**Tabla `Provedores`**
   
| Numero_Proveedor | Nombre  | Domicilio | Localidad  |
| ---------------- | ------- | --------- | ---------- |
| 100              | Perez   | Perón 876 | Quilmes    |
| 101              | Gimenez | Mitre 750 | Avellaneda |
| 102              | Aguirre | Boedo 634 | Bernal     |

**Tabla `Productos`**
   
| Codigo_Producto | Nombre    | Precio | Dimensiones |
| --------------- | --------- | -----: | ----------- |
| 1               | Caramelos |    1,5 | Chico       |
| 2               | Alfajores |  45,89 | Mediano     |
| 3               | Gaseosa   |  15,80 | Grande      |

**Tabla `Envios`**
   
| Numero_Proveedor | Codigo_Producto | Cantidad |
| ---------------- | --------------- | -------: |
| 100              | 1               |      500 |
| 100              | 2               |     1500 |
| 100              | 3               |      100 |
| 101              | 2               |       55 |
| 101              | 3               |      225 |
| 102              | 1               |      600 |
| 102              | 3               |      300 |


3. Realizar las siguientes consultas:
   1. Obtener los detalles completos de todos los productos, ordenados alfabéticamente.
   2. Obtener los detalles completos de todos los proveedores de ‘Quilmes’.
   3. Obtener todos los envíos en los cuales la cantidad este entre 200 y 300 inclusive.
   4. Obtener la cantidad total de todos los productos enviados.
   5. Mostrar los primeros 3 números de productos que se han enviado.
   6. Mostrar los nombres de proveedores y los nombres de los productos enviados.
   7. Indicar el monto (cantidad * precio) de todos los envíos.
   8. Obtener la cantidad total del producto 1 enviado por el proveedor 102.
   9. Obtener todos los números de los productos suministrados por algún proveedor de ‘Avellaneda’.
   10. Obtener los domicilios y localidades de los proveedores cuyos nombres contengan la letra ‘I’.

4. Ejecutar los siguientes comandos: 
   1.  Agregar el producto numero 4, llamado ‘Chocolate’, de tamaño chico y con un precio de 25,35.
   2.  Insertar un nuevo proveedor (únicamente con los campos obligatorios).
   3.  Insertar un nuevo proveedor (107), donde el nombre y la localidad son ‘Rosales’ y ‘La Plata’.
   4.  Cambiar los precios de los productos de tamaño ‘grande’ a 97,50.
   5.  Cambiar el tamaño de ‘Chico’ a ‘Mediano’ de todos los productos cuyas cantidades sean mayores a 300 inclusive.
   6.  Eliminar el producto número 1.
   7.  Eliminar a todos los proveedores que no han enviado productos.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
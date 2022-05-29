---
sidebar_label: "I03 - Esto definitivamente no es Steam"
title: "Ejercicio I03 - Esto definitivamente no es Steam"
sidebar_position: 3
author: Lautaro Galarza
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
Se trabajará sobre una aplicación de Windows Forms para realizar operaciones de ABML en base a dos tablas relacionadas.

Antes de empezar, [descargar la cáscara del proyecto](https://drive.google.com/file/d/1nZwPZi2Ae2XOQU2B9-EgGtuf5BkjB6gS/view?usp=sharing) y trabajar sobre la misma.

### Parte I
Copiar el siguiente script de ***SQL*** y ejecutarlo en ***SQL Server Management Studio (SSMS)***:

```sql
CREATE DATABASE [EJERCICIOS_UTN];
GO
USE [EJERCICIOS_UTN];
GO
CREATE TABLE [EJERCICIOS_UTN].dbo.JUEGOS
    (
    CODIGO_JUEGO INT IDENTITY(1,1) PRIMARY KEY ,
    CODIGO_USUARIO INT NOT NULL,
    NOMBRE VARCHAR(255) NOT NULL ,
    PRECIO FLOAT NOT NULL,
    GENERO VARCHAR(255) NOT NULL,
    );
GO
Insert into JUEGOS VALUES (1000,'HALO: MCC',1500,'FPS')
GO
CREATE TABLE [EJERCICIOS_UTN].dbo.USUARIOS
    (
    CODIGO_USUARIO INT IDENTITY(1000,1) PRIMARY KEY ,
    EMAIL VARCHAR(255) NOT NULL ,
    USERNAME VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    );
GO
Insert into USUARIOS VALUES ('lauti@gmail','lgalarza','1234')
Insert into USUARIOS VALUES ('mauricio@gmail','mcerizza','4321')
Insert into USUARIOS VALUES ('esteban@gmail','eprieto','4532')
```

Al refrescar el SSMS, deberían ver la base de datos `EJERCICIOS_UTN` creada con dos tablas: `USUARIOS` y `JUEGOS`. 

### Parte II
Crear una aplicación de tipo biblioteca de clases y agregar los elementos del siguiente diagrama:

![Diagrama de clases](/clases/17-databases/ejercicios/esto-definitivamente-no-es-steam-diagram-01.png)

#### Clase `Juego`
Contendrá todos los elementos de la tabla `JUEGO` con sus propiedades en sólo lectura y sus constructores correspondientes.

#### Clase `Usuario`
Contendrá solo el `username` y el `codigoUsuario` como atributos y una única propiedad sólo lectura, además de su respectivo constructor. 

La sobrecarga del método `ToString` retornara el `username`.

#### Clase `JuegoDAO`    
Esta clase **estática** será la encargada de realizar todas las operaciones sobre la tabla `JUEGOS`.

Se deberán instanciar sus atributos en el constructor de la clase.

* **Método `Eliminar`**: Elimina un juego de la tabla en base al id recibido.

* **Método `Modificar`**: Modifica las columnas `PRECIO`, `NOMBRE` y `GENERO` de la tabla en base al id recibido.

* **Método `Guardar`**: Guarda un nuevo registro, tener en cuenta que `CODIGO_JUEGO` es una columna de identidad.

* **Método `Leer`**: Realiza una consulta a la base de datos que traiga los datos de los usuarios y sus juegos para instanciar objetos de tipo `Biblioteca`.

* **Método `LeerPorId`**: Retorna un juego de la base de datos a partir del id recibido.

#### Clase `UsuarioDAO`
Esta clase también **estática** será la encargada de realizar las operaciones sobre la tabla `USUARIOS`. 

Como en `JuegoDao` sus atributos van a ser inicializados en el constructor.

El método `Leer` realizará una consulta para traer las columnas `USERNAME` y `CODIGO_USUARIO` de la tabla.

### Parte III
Continuar con el proyecto de Windows Forms provisto en la cáscara y seguir el siguiente diagrama:
    
![Diagrama de clases](/clases/17-databases/ejercicios/esto-definitivamente-no-es-steam-diagram-02.png)

#### Formulario `FrmBiblioteca`
Se encuentra compuesto por cuatro botones y un control de tipo `DataGridView`, en este control vamos a tener cargada nuestra colección de objetos `Biblioteca`.

* **Método `RefrescarBiblioteca`**: Realiza las llamadas al método `Leer` cada vez que ocurra un cambio a las entidades. Tener en cuenta los métodos `Update` y `Refresh`.

* **Botón `Salir`**: Cierra el formulario.

* **Botón `Alta`**: Crea una nueva instancia de `FrmAlta` para cargar nuestro nuevo juego a la tabla. Retorna `DialogResult.OK` una vez terminada la operación.

* **Botón `Modificar`**: Reutiliza `FrmAlta` para poder modificar toda la información del juego pero sin dejarle utilizar el combo de usuarios.

Para realizar las operaciones de baja y modificación vamos recuperar el elemento del `DatagridView` y realizar la lógica necesaria para eliminarlo o modificarlo. Tener en cuenta que cuando vayamos a modificar el juego vamos a tener que mostrarle al usuario todos los datos del juego.

Recordar siempre refrescar el `DataGridView` una vez terminada cualquier operación de tipo ABM.

#### Formulario `FrmAlta`
Este formulario se va a encargar de guardar o modificar el juego en la base de datos, para eso vamos a disponer del botón `Guardar` que dependiendo si es una modificación o un alta deberá realizar la lógica correspondiente.

El método `PintarForm` se va a encargar de mostrarle al usuario todos los datos del juego a modificar.

## Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/y_zZBFKuUs8) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_17/I03_Esto_definitivamente_no_es_Steam) |
| :-----------------------: | :---: | :----------------------: | :----: |
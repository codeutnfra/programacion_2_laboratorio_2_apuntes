---
sidebar_label: "I01 - Mi primer CRUD"
title: "Ejercicio I01 - Mi primer CRUD"
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
1. Crear una base de datos con una tabla llamada `Persona` que tendrá las columnas:
   1. `ID`: autoincremental y entero.
   2. `Nombre`: varchar(50).
   3. `Apellido`: varchar(50).

2. Crear una biblioteca de clases con una clase `Persona`.
   1. Tendrá id, nombre y apellido como atributos privados.
   2. Tendrá un constructor que reciba los 3 parámetros y otro que sólo reciba nombre y apellido.

3. Crear otra clase llamada `PersonaDAO` y agregarle 5 métodos:
   1. `Guardar`: guardará una nueva persona en la base de datos.
   2. `Leer`: retornará la lista de personas de la base de datos.
   3. `LeerPorID`: traerá una persona, filtrando por ID.
   4. `Modificar`: modificará una persona a partir de su ID.
   5. `Borrar`: eliminará una persona de la base de datos a partir de su ID.

4. Crear un proyecto de Windows Forms App y armar un formulario con:
   1. Dos `TextBox`: `txtNombre` y `txtApellido`.
   2. Un `ListBox`: `lstPersonas`.
   3. Cuatro `Button`: `btnGuardar`, `btnModificar`, `btnEliminar` y `btnLeer`.

5. `lstPersonas` deberá mostrar la lista de Personas devuelta por el método `Leer` de `PersonaDAO`, invocado al presionar el botón `btnLeer`.

6. Al hacer doble click sobre una persona, se deberá cargar su nombre y apellido en `txtNombre` y `txtApellido` respectivamente.

7. `btnModificar` actualizará la información de la persona que se seleccionó con doble click en `lstPersonas`. Se tomarán los datos modificados de los `TextBox`.
 
8. `btnGuardar` agregará una persona en la base de datos tomando sus datos de los `TextBox`.

9. `btnEliminar` borrará de la base a la persona seleccionada en el ListBox.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
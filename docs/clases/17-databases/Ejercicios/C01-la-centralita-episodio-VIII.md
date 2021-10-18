---
sidebar_label: "C01 - La centralita: Episodio VIII"
title: "Ejercicio C01 - La centralita: Episodio VIII"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio VII](../../15-serializacion/Ejercicios/C02-la-centralita-episodio-VII.md) y:

1. Crear un nuevo proyecto llamado `EntidadesDAO`, dónde se crearán las clases `LocalDAO` y `ProvincialDAO`.
2. Ambas clases contendrán los métodos `Guardar` y `Leer` para acceder a una base de datos llamada `Centralita` y volcar sus datos.
3. Al querer leer una llamada desde la base, se hará el filtro a partir del campo `Tipo` y se consultarán todos los datos de la llamada.
4. La única tabla en la base de datos será `Llamadas` con los campos:
   1. `ID`: entero, autoincremental y clave primaria.
   2. `Duracion`: entero.
   3. `Origen`: varchar(50).
   4. `Destino`: varchar(50).
   5. `Costo`: float.
   6. `Tipo`: 0 (local) o 1 (provincial).

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
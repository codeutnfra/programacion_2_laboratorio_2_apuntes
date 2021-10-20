---
sidebar_label: "I02 - El parseador"
title: "Ejercicio I02 - El parseador"
sidebar_position: 2
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

## Consigna
Antes de comenzar se deberá descargar la cáscara del proyecto. Los siguientes puntos se deberán resolver trabajando sobre la misma.

:::important Importante

Para resolver este ejercicio será de ayuda el capítulo de los apuntes **[Trabajando con archivos](../apuntes/archivos)**. 

:::

### Parte I
Crear un nuevo proyecto de biblioteca de clases llamado `Persistencia` e implementar el siguiente diagrama de clases:

* La clase `Parseador` será estática.
* El método privado `VerificarSiExisteDirectorio` deberá verificar si existe el directorio y si no existe deberá crearlo.
  * Si existe o no existía pero lo pudo crear, retornar `true`. 
  * Si no existía o no se pudo crear, retornar `false`.  
* El método privado `VerificarSiExisteArchivo` deberá verificar si existe el directorio y si no existe deberá crearlo.
  * Si existe o no existía pero lo pudo crear, retornar `true`. 
  * Si no existía o no se pudo crear, retornar `false`.  

## Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
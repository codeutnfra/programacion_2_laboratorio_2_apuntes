---
sidebar_label: I02 - Atrapame si puedes...
title: Ejercicio I02 - Atrapame si puedes...
sidebar_position: 1
author: Lautaro Galarza
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear una aplicación de Windows Forms que pueda realizar un cálculo de consumo entre kilometros y litros.

![Formulario](/clases/10-excepciones/ejercicios/atrapame-si-puedes-form.png)

* El formulario deberá contener:
  * 2x `Labels`
  * 2x `TextBox`
  * 1x `Button`
  * 1x `RichTextbox`

* El formulario debe levantar en el centro de la pantalla, no debe tener los botones de maximizar, minimizar y no se le tiene que poder modificar el tamaño.

* El `RichTextbox` no tiene que poder editarse.

* El formulario debe validar que los dos parámetros ingresados no estén vacíos y en caso de estar se deberá lanzar una nueva excepción de tipo `ParametrosVaciosException` e informar al usuario.

* Una vez que los parámetros fueron cargados validar si la conversión es posible (utilizar `int.Parse`), de lo contrario capturar la excepción correspondiente.

* Crear una clase estática llamada `Calculador` con un metodo estático `Calcular` que recibe dos enteros y retorna su división tener en cuenta que las división por cero lanza una excepción, controlarla.

* Todas las excepciones que fueron capturadas deben ser mostradas al usuario de una forma mas entendible ("amigable") por medio del metodo `Show` de la clase `MessageBox`.

* El programa no debe tener ninguna excepción no controlada. 

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/IwNa24xU_74) | ![img](/base/github.svg) | Código |
| :-----------------------: | :-----------------------------------: | :----------------------: | :----: |
---
sidebar_label: I02 - Registrate
title: Ejercicio I02 - Registrate
sidebar_position: 2
author: Lautaro Galarza
authorURL: https://github.com/Lautarogalarza
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de tipo **Windows Forms App** y un proyecto de biblioteca de clases. 

Agregar al proyecto de biblioteca de clases la clase `Ingresante` tal como describe el siguiente diagrama:

![Diagrama de clases](/clases/05-forms/ejercicios/registrate-diagrama.png)
 
* El constructor inicializará todos los atributos de la clase.
* El método `Mostrar` expondrá todos los atributos de la clase al exterior, utilizar `StringBuilder` e interpolación de strings.

El proyecto de Windows Forms contará con los siguientes controles:
* Un control de tipo `GroupBox` que contendrá dos controles de tipo `TextBox` para cargar el nombre y la dirección, y un `NumericUpDown` para cargar la edad del usuario con sus respectivos `Label`.
* Un segundo control de tipo `GroupBox` que contendrá tres `RadioButton` que determinarán el género del usuario (masculino, femenino o no binario).
* Un último control de tipo `GroupBox` contendrá tres controles de tipo `CheckBox` con los distintos cursos a elegir (C#, C++ o JavaScript). Se deben poder elegir todos los cursos, ninguno o algunos.
* Un control de tipo `ListBox` que tendrá los paises para que el usuario escoja (Argentina, Chile o Uruguay).
* Por último, un botón que al accionarse deberá mostrar toda la información del usuario registrado.

![Resultado esperado](/clases/05-forms/ejercicios/registrate.png)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |

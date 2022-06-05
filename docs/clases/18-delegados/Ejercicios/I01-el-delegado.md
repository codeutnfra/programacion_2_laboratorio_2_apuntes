---
sidebar_label: I01 - El delegado
title: Ejercicio I01 - El delegado
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
sidebar_position: 1
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Se deberá construir una aplicación de Windows Forms, que contenga como formulario principal (`FrmPrincipal`) un [formulario de tipo MDI](https://docs.microsoft.com/es-es/dotnet/desktop/winforms/advanced/how-to-create-mdi-child-forms?view=netframeworkdesktop-4.8) (propiedad `IsMdiContainer`). 

* El formulario se iniciará maximizado (propiedad `WindowState`).

* Tendrá un menú de opciones tal como se muestra en la siguiente figura:

![FrmPrincipal](/clases/18-delegados/ejercicios/frmPrincipal.png)

* La opción *"Alta"* tendrá dos submenúes que serán: *"Test Delegados"* y *"Alumno"*.

* Crear el formulario `FrmMostrar` que contendrá un control `lblNombre` de tipo `Label`.
  * Expondrá un método público llamado `ActualizarNombre`, que recibirá por parámetro un valor de tipo `string` y no retornará ningún valor. Dicho método deberá cambiar el valor de la propiedad `Text` del control `Label` con el `string` sumistrado como argumento.

![FrmMostrar](/clases/18-delegados/ejercicios/frmMostrar.png)
  
* Crear el formulario `FrmTestDelegados` que contendrá un control `txtNombre` de tipo `TextBox` y un `Button` llamado `btnActualizar`.

![FrmTestDelegados](/clases/18-delegados/ejercicios/frmTestDelegados.png)

* En el evento `Load`:
  * Se asignará una instancia de `FrmMostrar` a un atributo de la clase. El `MdiParent` de dicha instancia será `FrmPrincipal`.
  * Se asignará una instancia de `FrmTestDelegados` a un atributo de la clase. El `MdiParent` de dicha instancia será `FrmPrincipal`.

* Cuando el usuario pulse el submenú *"Test Delegados"*, mostrar el `FrmTestDelegados` de forma no-modal.
  * **Una vez que el formulario se encuentre visible** se deberá habilitar la opción de menú *"Mostrar"*.

* Cuando el usuario pulse el menú *"Mostrar"*, mostrar el `FrmMostrar` de forma no-modal.
  
* Se pide que el usuario ingrese un nombre por el `TextBox` de `FrmTestDelegados` y que al pulsar el botón `btnActualizar`, se cambie el valor del `Label` de la instancia de `FrmMostrar`.
  * Se deberá **utilizar un delegado** dentro de `FrmTestDelegados`, convenientemente diseñado, a fin de cumplir este punto. 
  * El delegado deberá ser invocado (método `Invoke`) al presionar el `btnActualizar`.
  * Al instanciar `FrmTestDelegados` se deberá asociar el delegado al método `ActualizarNombre` de `FrmMostrar`.

![Animación de resultado final](/clases/18-delegados/ejercicios/ElDelegado.gif)

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/WmEHK2NQrgE) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_18/I01_El_delegado) |
| :-----------------------: | :---: | :----------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |

---
sidebar_label: C01 - Cotizador desktop
title: Ejercicio C01 - Cotizador desktop
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Partir del ejercicio [Cotizador](../../04-sobrecarga/Ejercicios/I02-cotizador.md) y agregarle un proyecto de tipo **Windows Forms App** con el siguiente formato:

![Resultado esperado](/clases/05-forms/ejercicios/cotizador-desktop-01.png)

![Resultado esperado](/clases/05-forms/ejercicios/cotizador-desktop-02.png)
 
* Agregar el método estático `SetCotizacion` en las clases `Euro` y `Peso`.
* La casilla de cotización del dólar deberá permanecer siempre en 1. Utilizar el evento de pérdida de foco del `TextBox` para chequear que así sea. 
* El formulario debe iniciar centrado en la pantalla, no tener las cajas de maximizar y minimizar y no poder modificarse su tamaño. 
* Utilizar un `ImageList` para los dos estados del botón (candado cerrado y abierto). 
  * **Cerrado**: los `TextBox` `txtCotizacion` (Euro | Dólar | Pesos) no podrán ser editados (propiedad `Enabled` en `false`).
    * [Descargar icono de candado cerrado](/clases/05-forms/ejercicios/candado-cerrado.png)
  * **Abierto**: los `TextBox` serán editables.
    * [Descargar icono de candado abierto](/clases/05-forms/ejercicios/candado-abierto.png)
  * Al producirse el evento `Leave` de cada `TextBox`, editar la cotización de la moneda correspondiente. Si el dato ingresado no es válido, devolver el **foco** a dicho control.

Implementarlo de tal forma que al ingresar un valor válido en la primer casilla (`txtEuro`, `txtDolar` y `txtPeso` respectivamente) y presionar el botón del medio (`btnConvertEuro`, `btnConvertDolar` y `btnConvertPeso`) el resultado de la conversión se vea reflejado en las casillas de la derecha (`txtEuroAEuro`, `txtEuroADolar`, `txtEuroAPeso`, `txtDolarAEuro`, `txtDolarADolar`, `txtDolarAPeso`, `txtPesosAEuro`, `txtPesosADolar` y `txtPesosAPeso`), las cuales no podrán ser editadas/escritas por el usuario.

![Diagrama de clases](/clases/05-forms/ejercicios/cotizador-desktop-diagram.png)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |

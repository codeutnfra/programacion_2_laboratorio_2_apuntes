---
sidebar_label: C01 - Temporizador
title: Ejercicio C01 - Temporizador
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
sidebar_position: 101
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
1. Partir del ejercicio [El relojero](../../19-concurrencia/Ejercicios/I01-el-relojero.md) y agregar la clase `Temporizador`, debiendo lograr una funcionalidad similar a la clase `Timer`. 

![Diagrama de clases](/clases/20-Eventos/ejercicios/Temporizador_Diagram.png)

* La propiedad `Activo` retornará `true` si el hilo está activo. 
* La propiedad `Intervalo` retornará el intervalo de tiempo del temporizador y permitirá modificarlo. 
* Si se llama al método `IniciarTemporizador`, se iniciará el hilo, siempre y cuando no esté activo. 
* Si se llama al método `DetenerTemporizador`, se detendrá el hilo, siempre y cuando esté activo.
* El intervalo de tiempo determinará cada cuanto tiempo en milisegundos se lanzará el evento.
* El método `CorrerTiempo` será el encargado de hacer la demora y lanzar el evento `TiempoCumplido`.

2. Implementar `Temporizador` en el formulario del ejercicio anterior, iniciando el reloj en el manejador del evento `Load` usando solamente la clase `Temporizador`. 

3. Agregar un botón *"Iniciar Reloj"* y otro *"Detener Reloj"*. 
   * Al presionar *"Detener Reloj"* se deberá detener el temporizador y el reloj deberá quedar pausado. 
   * Al presionar *"Iniciar Reloj"* se deberá reiniciar el reloj, siempre que se encuentre detenido. 

4. Hacer todas las pruebas necesarias para asegurar que la solución funciona correctamente.

![frmReloj](/clases/20-Eventos/ejercicios/frmReloj.gif)

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/lvg4AL90cmc) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_20/C01_Temporizador) |
| :-----------------------: | :---: | :----------------------: | :----: |

---
sidebar_label: "I01 - Un DNI para mi compu"
title: "Ejercicio I01 - Un DNI para mi compu"
sidebar_position: 1
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Generaremos una tarjeta de identificación para la computadora donde se está ejecutando nuestra aplicación.

:::important Importante

Para resolver este ejercicio será de ayuda el capítulo de los apuntes **[Ambientes y sistemas de archivos](../Apuntes/00-sistemas-de-archivos.md)**. 

:::

[Descargar la cáscara del proyecto](https://drive.google.com/file/d/1CPG9TLTR5LFLcMGLjHs576nPdkLuWSqd/view?usp=sharing) y seguir los siguientes pasos:

1. Manejar el evento `Load` del formulario y cambiar la propiedad `Text` para que contenga el mensaje *"Compu de [usuario]"*. Reemplazar el texto entre corchetes por el nombre del usuario conectado al sistema operativo. Obtener el dato a partir de la propiedad que corresponda de la clase `Environment`.

2. Crear el método `private void ConfigurarLogoSistemaOperativo()` y utilizando los métodos estáticos de la clase `OperatingSystem` implementar la siguiente lógica:
   1. Si el sistema es MacOS, asignar `Properties.Resources.mac` a la propiedad `Image` del control `picboxSistemaOperativo`.
   2. Si el sistema es Linux, asignar `Properties.Resources.linux` a la propiedad `Image` del control `picboxSistemaOperativo`.
   3. Si el sistema es Windows, asignar `Properties.Resources.windows` a la propiedad `Image` del control `picboxSistemaOperativo`.
   
3. Invocar al método `ConfigurarLogoSistemaOperativo` del punto anterior dentro del manejador del evento `Load`.

4. Dentro del manejador del evento `Load` modificar la propiedad `Text` del label `lblSistemaOperativo` y cargar el mensaje *"Sistema operativo: [Plataforma y versión del sistema operativo]"*. Reemplazar el texto entre corchetes por la descripción del sistema operativo sobre el que se está ejecutando la aplicación. Obtener el dato a partir de la propiedad que corresponda de la clase `Environment`.

5. Dentro del manejador del evento `Load` modificar la propiedad `Text` del label `lblNombreMaquina` y cargar el mensaje *"Nombre de la máquina: [Nombre de la máquina]"*. Reemplazar el texto entre corchetes por el nombre de la máquina sobre la que se está ejecutando la aplicación. Obtener el dato a partir de la propiedad que corresponda de la clase `Environment`.

6. Crear el método `private void ConfigurarArquitectura()` y utilizando la propiedad estática que corresponda de la clase `Environment` implementar la siguiente lógica:
   1. Si el sistema es de 64 bits, modificar la propiedad `Text` del label `lblArquitectura` y cargar el mensaje *"Arquitectura: 64 bits"*.
   2. Si el sistema es de 32 bits, modificar la propiedad `Text` del label `lblArquitectura` y cargar el mensaje *"Arquitectura: 32 bits"*.

7. Dentro del manejador del evento `Load` modificar la propiedad `Text` del label `lblCantProcesadores` y cargar el mensaje *"Cant. procesadores: [cantidad de procesadores lógicos] procesadores lógicos"*. Reemplazar el texto entre corchetes por la cantidad de procesadores lógicos que tiene la máquina sobre la que se está ejecutando la aplicación. Obtener el dato a partir de la propiedad que corresponda de la clase `Environment`.
   
8. Dentro del manejador del evento `Load` modificar la propiedad `Text` del label `lblDirectorioActual` y:
   1. Cargarle el mensaje *"Identificación ejecutada en: [Salto de línea]"*. Reemplazar el texto entre corchetes por un salto de línea que sea agnóstico al sistema operativo sobre el que se ejecuta la aplicación, para eso se deberá utilizar la propiedad que corresponda de la clase `Environment`.
   2. A continuación del salto de línea generado en el punto anterior, incorporar al texto la ruta absoluta del directorio sobre el que se está ejecutando la aplicación. Obtener el dato con la propiedad `CurrentDirectory` de la clase `Environment`.

9. Crear el método `private void ConfigurarEspacioTotalYDisponible()` y utilizando el método estático `GetDrives` de la clase `DriveInfo`:
   1. Modificar la propiedad `Text` del label `lblEspacioTotal` y cargar el mensaje *"Espacio total: [espacio total] Gigabytes"*. Reemplazar el texto entre corchetes por la suma del espacio total de todas las unidades de almacenamiento de la computadora. Mostrar el dato en gygabytes redondeado al entero más cercano.
   2. Modificar la propiedad `Text` del label `lblEspacioDisponible` y cargar el mensaje *"Espacio disponible: [espacio disponible] Gigabytes"*. Reemplazar el texto entre corchetes por la suma del espacio disponible en todas las unidades de almacenamiento de la computadora. Mostrar el dato en gygabytes redondeado al entero más cercano.

:::tip Tip

1 Byte = 9.31×10-10 Gigabytes

1 Gygabyte = 1073741824 Bytes

:::

Un ejemplo del resultado final (los datos variarán dependiendo de la computadora donde se ejecute la aplicación):

![Resultado esperado](/clases/14-archivos/ejercicios/un-dni-para-mi-compu-result.png)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_14/I01_Un_DNI_para_mi_compu) |
| :-----------------------: | :---: | :----------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
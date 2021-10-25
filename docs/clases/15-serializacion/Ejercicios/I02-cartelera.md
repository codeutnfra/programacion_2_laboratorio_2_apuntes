---
sidebar_label: "I02 - Cartelera"
title: "Ejercicio I02 - Cartelera"
sidebar_position: 2
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Tenemos una aplicación que diseña una cartelera con un título y un mensaje. Se deberá persistir la configuración de la cartelera (colores de panel, título y mensaje) en formato JSON para que no se pierda al cerrar la aplicación. 

![FrmCartelera](/clases/15-serializacion/ejercicios/frmCartelera.gif)

[Descargar la cáscara del proyecto](https://drive.google.com/file/d/1c_AJg4nFeapS5ppBTX0d8oJ4ShJvQOqB/view?usp=sharing) y seguir los siguientes pasos:

1. Crear un constructor **estático** en el `FrmCartelera` que cargue en el atributo `rutaConfiguracion` la ruta al archivo `configuracion.json` ubicado en la carpeta que contiene los datos de aplicaciones (`Environment.SpecialFolder.ApplicationData`).

2. Agregar un control de tipo [`ColorDialog`](https://docs.microsoft.com/es-es/dotnet/api/system.windows.forms.colordialog?view=windowsdesktop-5.0) llamado `colorDialog`.

3. El manejador del evento `Click` de `btnColorPanel` deberá cargar la propiedad `BackColor` del control `pnlCartel` con el color elegido por el usuario.
   * Usar `colorDialog` que deberá iniciar con el color actual de `pnlCartel` como color seleccionado.  

4. El manejador del evento `Click` de `btnColorTitulo` deberá cargar la propiedad `ForeColor` del control `lblTitulo` con el color elegido por el usuario.
   * Usar `colorDialog` que deberá iniciar con el color actual de `lblTitulo` como color seleccionado.  

5. El manejador del evento `Click` de `btnColorMensaje` deberá cargar la propiedad `ForeColor` del control `lblMensaje` con el color elegido por el usuario.
   * Usar `colorDialog` que deberá iniciar con el color actual de `lblMensaje` como color seleccionado.  

6. El manejador del evento `Load` del formulario deberá recuperar la configuración almacenada de la siguiente forma:
   1. Leer el archivo referenciado por `rutaConfiguracion`. Si no existe, no hacer nada.
   2. Deserializar el contenido del archivo desde **formato JSON** a un objeto de tipo `Cartel`.
   3. Ejecutar el siguiente código:

    ```csharp
    pnlCartel.BackColor = Color.FromArgb(cartel.ColorARGB);

    txtTitulo.Text = cartel.Titulo.Contenido;
    lblTitulo.ForeColor = Color.FromArgb(cartel.Titulo.ColorARGB);

    rtxtMensaje.Text = cartel.Mensaje.Contenido;
    lblMensaje.ForeColor = Color.FromArgb(cartel.Mensaje.ColorARGB);
    ```

   4. Manejar las excepciones de tipo `JsonException` con una ventana de alerta como la siguiente:

    ![Error FrmCartelera](/clases/15-serializacion/ejercicios/errorFrmCartelera.PNG)

7. El manejador del evento `Click` de `btnGuardarConfiguracion` deberá:
   1. Instanciar y configurar un objeto de tipo `Cartel` de la siguiente forma:

    ```csharp
    Texto titulo = new Texto(lblTitulo.Text, lblTitulo.ForeColor.ToArgb());
    Texto mensaje = new Texto(lblMensaje.Text, lblMensaje.ForeColor.ToArgb());
    Cartel cartel = new Cartel(pnlCartel.BackColor.ToArgb(), titulo, mensaje);
    ```

   2. Serializar dicho objeto a **formato JSON**.
   3. Almacenar el objeto serializado en la ubicación indicada por el atributo `rutaConfiguracion`.


8. El manejador del evento `Click` de `btnImportarConfiguracion` deberá:
   1. Pedirle al usuario que seleccione el archivo a importar usando `OpenFileDialog`. La propiedad `Filter` deberá estar configurada como _"Json files(*.json)|*.json"_ antes de abrir la ventana de diálogo.
   2.  Para importar la configuración desde el archivo, seguir la misma lógica usada en el manejador del evento `Load`.
   3.  Probar la funcionalidad con el siguiente archivo: [configuracion-cartelera.json](https://drive.google.com/file/d/1caNrCzciezEhyz0A19dDsp5h1mgtZQ5M/view?usp=sharing)

9.  El manejador del evento `Click` de `btnEliminarConfiguracion` deberá:
    1.  Mostrar un cartel de confirmación preguntando al usuario si está seguro de que desea eliminar la configuración. Si la respuesta es afirmativa seguir con los siguientes puntos, caso contrario no hacer nada.
    2.  Eliminar el archivo de configuración, si existe.  
    3.  Ejecutar el siguiente código:

      ```csharp
      txtTitulo.Text = "Título";
      lblTitulo.ForeColor = Control.DefaultForeColor;

      rtxtMensaje.Text = "Mensaje";
      lblMensaje.ForeColor = Control.DefaultForeColor;

      pnlCartel.BackColor = Control.DefaultBackColor;
      ```

:::important IMPORTANTE

Cualquier excepción deberá ser manejada mostrando un `MessageBox` con el mensaje y el stack trace.  

**Reutilizar código** en todo el proyecto siguiendo el principio *DRY*.

:::

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_15/I02_Cartelera) |
| :-----------------------: | :---: | :----------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
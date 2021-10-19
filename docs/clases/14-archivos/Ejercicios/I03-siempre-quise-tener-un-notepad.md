---
sidebar_label: "I03 - Siempre quise tener un notepad ಥ‿ಥ"
title: "Ejercicio I03 - Siempre quise tener un notepad ಥ‿ಥ"
sidebar_position: 3
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear un proyecto de *Windows Forms App* capaz de abrir, editar y guardar archivos de texto, tal como se puede hacer en un simple editor de texto como puede ser el *notepad* de *Windows*.

![Resultado esperado](/clases/14-archivos/ejercicios/notepad-form.png)

1. Agregar una barra de menú superior (`MenuStrip`) con las siguiente opciones del menú "Archivo":
   * Archivo -> Abrir
   * Archivo -> Guardar
   * Archivo -> Guardar como...

2. Usando la propiedad `ShortcutKeys`, asociar los siguientes shortcuts (atajos) a las opciones del menú:
   * Abrir: `Ctrl` + `A`
   * Guardar: `Ctrl` + `S`
   * Guardar como...: `Ctrl` + `Shift` + `S`

3. Agregar una barra de estado en la parte inferior (`StatusStrip`) que contenga un `ToolStripStatusLabel`. 

4. Agregar un `RichTextBox` que deberá estar acoplado al centro del formulario (propiedad `Dock`).

5. En el `StatusStrip`, informar la cantidad total de caracteres del texto en el `RichTextBox`.

6. Utilizar la propiedad `Dock` para enlazar el `MenuStrip` al borde superior de la ventana y el `StatusStrip` al borde inferior.

7. Al pulsar el menú "Abrir" se deberá abrir una ventana para seleccionar el archivo a abrir. 
   * [Utilizar la clase `OpenFileDialog`](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/controls/how-to-open-files-using-the-openfiledialog-component?view=netframeworkdesktop-4.8).
   * Mostrar el contenido del archivo en el `RichTextBox`.

8. Al pulsar el menú "Guardar como..." se deberá abrir una ventana para seleccionar la ubicación donde se guardará el archivo y cómo se llamará. 
   * [Utilizar la clase `SaveFileDialog`](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/controls/how-to-save-files-using-the-savefiledialog-component?view=netframeworkdesktop-4.8).
   * La propiedad `Filter` de `SaveFileDialog` deberá tener el valor *"Archivo de texto|*.txt"*.
   * Tomar el contenido a guardar del texto en el `RichTextBox`.

9. Al hacer click sobre "Guardar", se deberá guardar en el último archivo guardado o abierto desde la interfaz. En el caso que no haya ningún "último archivo", se comportará igual que la opción "Guardar como...". **Reutilizar código.**

10. En caso de error en cualquiera de las operaciones se deberá mostrar una ventana de error conteniendo el mensaje de la excepción y su stack trace.  

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_14/I03_Siempre_quise_tener_un_notepad) |
| :-----------------------: | :---: | :----------------------: | :----: |
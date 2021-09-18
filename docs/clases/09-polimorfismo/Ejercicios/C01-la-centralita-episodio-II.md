---
sidebar_label: "C01 - La centralita: Episodio II"
title: "Ejercicio C01 - La centralita: Episodio II"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio I](../../08-herencia/Ejercicios/C03-la-centralita-episodio-I.md) y modificar la jerarquía de clases para obtener:

![Diagrama de clases](/clases/08-herencia/ejercicios/centralita-diagram.PNG)

#### `Llamada`
* La clase `Llamada` ahora será **abstracta**. Tendrá definida la propiedad de **sólo lectura** `CostoLlamada` que también será **abstracta**. 
* El método `Mostrar` deberá ser declarado como **virtual**, **protegido** y retornará un `string` que contendrá los atributos propios de la clase `Llamada`.
* El operador `==` comparará dos llamadas y retornará `true` si las llamadas son del mismo tipo (utilizar el método `Equals`, sobrescrito en las clases derivadas) y los números de destino y origen son iguales en ambas llamadas.

#### `Local`
* Sobrescribir el método `Mostrar`. Será **protegido**. Reutilizará el código escrito en la clase base y además agregará la propiedad `CostoLlamada`, utilizando un `StringBuilder`.
* El método `Equals` retornará `true` sólo si el objeto que recibe es de tipo `Local`.
* El método `ToString` reutilizará el código del método `Mostrar`.

#### `Provincial`
* El método `Mostrar` será **protegido**. Reutilizará el código escrito en la clase base y agregará los datos de `franjaHoraria` y `CostoLlamada` al texto de retorno. Utilizar `StringBuilder`.
* El método `Equals` retornará `true` sólo si el objeto que recibe es de tipo `Provincial`.
* El método `ToString` reutilizará el código del método `Mostrar`.

#### `Centralita`
* El método `Mostrar` pasará a ser **privado** y será llamado por la sobrescritura del método `ToString`.
* El método `AgregarLlamada` es **privado**. Recibe una instancia de `Llamada` y la agrega a la lista de llamadas.
* El operador `==` retornará `true` si la centralita contiene la llamada en su lista genérica. Utilizar la sobrecarga del operador `==` de la clase `Llamada`.
* El operador `+` invocará al método `AgregarLlamada` sólo si la llamada no está registrada en la `Centralita`. Utilizar la sobrecarga del operador `==` de `Centralita`.

Reescribir el método `Main` para que:
  * Sólo agregue mediante el operador `+`. 
  * Sólo muestre los datos de `Centralita` una vez ordenados. 

Agregar un proyecto de tipo *Windows Forms App* y generar el siguiente formulario principal `FrmMenu`, que tendrá como **único atributo** una `Centralita`:

Agregar los formularios `FrmLlamador` y `FrmMostrar`:
  * Recibirán en su constructor a la instancia de `Centralita` creada en `FrmMenu`.
  * `FrmLlamador` tendrá una propiedad de **sólo lectura** que expondrá dicha `Centralita`, a fin de volver a ser leída por el formulario de menú una vez terminada la acción. 

Si se presiona el botón `btnGenerarLlamada` abrir un nuevo formulario de forma modal:
  * Si la llamada comienza con #, es provincial. Si la llamada no comienza con #, se deberá poner el combo `cmbFranja` en estado deshabilitado.
  * La fuente de `txtNroDestino` será 16. Este `TextBox` sólo se podrá cargar mediante el panel numérico. 
  * El panel numérico se encontrará dentro de un `Groupbox` con el título *"Panel"*.
  * El `TextBox` situado por debajo del botón `btnLimpiar` será el `txtNroOrigen`.
  * La duración será un número aleatorio entre 1 y 50. 
  * El costo, en caso de necesitarlo, será un número aleatorio entre 0,5 y 5,6.
  * El combo `cmbFranja`, situado al final del formulario, será el encargado de colocar una franja horaria a las llamadas provinciales. Cargar desde el `Enumerado` utilizando el siguiente código:

```csharp
// Carga
cmbFranja.DataSource = Enum.GetValues(typeof(Franjas));
// Lectura
Franjas franjas;
Enum.TryParse<Franjas>(cmbFranja.SelectedValue.ToString(), out franjas);
```

Si se presiona alguno de los botones `btnFacturacionTotal`, `btnFacturacionLocal` o `btnFacturacionProvincial`, abrir un formulario sólo con un `RichTextBox` y la información correspondiente impresa en él.
  * El formulario tendrá un atributo del tipo `TipoLlamada`, y una propiedad de **sólo escritura** para cargarle datos y así saber qué llamadas mostrar.

Todos los formularios deberán aparecer centrados, el principal en la pantalla y el resto con respecto al principal. 

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
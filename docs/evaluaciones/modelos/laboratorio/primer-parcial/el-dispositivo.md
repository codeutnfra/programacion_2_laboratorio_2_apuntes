---
title: El dispositivo
sidebar_label: El dispositivo
sidebar_position: 1
slug: /evaluaciones/modelos/laboratorio/primer-parcial/el-dispositivo
hide_table_of_contents: true
hide_title: false
---

| Instancia de evaluación | Cuatrimestre |
| :---------------------: | :----------: |
|     Primer Parcial      |  1ero 2021   |

## Criterios de evaluación
* **2 (dos) errores en el mismo tema anulan su puntaje.**
* La correcta documentación y reglas de estilo de la cátedra serán evaluadas.
* Colocar sus datos personales en el nombre de la carpeta principal y la solución: *Apellido.Nombre.Div. Ej: Pérez.Juan.2D*. No sé corregirán proyectos que no sea identificable su autor.
* No se corregirán exámenes que no compilen.
* **Reutilizar** tanto código como crean necesario.
* Colocar nombre de la clase (en estáticos), **`this`** o **`base`** en todos los casos que corresponda.
* Aplicar los principios de los 4 pilares de la POO.

## Consigna
Crear un proyecto del tipo **Biblioteca de Clases** y colocar el siguiente esquema de clases:

![Diagrama de clases](/evaluaciones/modelos/laboratorio/dispositivo-diagram.png)

#### Clase `Aplicacion`
* Las propiedades marcadas en cursiva son abstractas.
* El método `ObtenerInformacionApp` retornará los datos de la aplicación utilizando `StringBuilder`.
* El operador implícito recibirá una lista de aplicaciones y devolverá la instancia de la aplicación que más tamaño tenga.
* El método `ToString` devolverá el nombre de la aplicación.
* La sobrecarga del operador `==` buscará si una aplicación existe en la lista recibida por parámetro comparando por su nombre. Devolverá `true` si ya existe.
* La sobrecarga del operador `+` añadirá una aplicación a la lista de aplicaciones pasada por parámetro siempre y cuando sea no exista previamente. Reutilizar código.

#### Clase `AppJuegos`
* La propiedad `Tamanio` retorna el tamaño de la aplicación.

#### Clase `AppMusical`
* La propiedad `Tamanio` retorna el tamaño de la app, el cual crecerá en base a la cantidad de canciones que tenga cargada. Por cada canción cargada, su tamaño crecerá en 2mb más. 
  * Por ejemplo: Si la aplicación pesa 50, y tiene 10 canciones, entonces se retornará 70.
* El método `ObtenerInformacionApp` mostrará también la lista de canciones.

#### Clase `Dispositivo`
* Es una clase estática.
* El constructor estático instanciará la lista estática `appsInstaladas`, y seteará el sistema operativo de este dispositivo en ANDROID.
* El método `InstalarApp` recibirá por parámetro una aplicación para ser instalada. Antes de intentar instalarla, debe comprobarse que sea compatible para ese sistema operativo. Una vez comprobado que es compatible, intentará añadir esa aplicación a la lista de aplicaciones. Devolverá true si logra añadirla. Reutilizar código.
* `ObtenerInformacionDispositivo` mostrará toda la información del dispositivo, y el detalle de sus aplicaciones instaladas.

#### Clase `FormPrincipal`
* El formulario debe iniciar centrado en la pantalla con el siguiente formato:

![Form dispositivo](/evaluaciones/modelos/laboratorio/form-dispositivo.png)

* Colocar la propiedad `BackColor` en un tono de rojo.
* Colocar la propiedad `BackColor` de ambos `RichTextBox` en color negro.
* Colocar la propiedad `ForeColor` de ambos `RichTextBox` en color blanco.
* El nombre del formulario debe ser *RPP.Apellido.Nombre* del alumno.
* El `RichTextbox` izquierdo se llamará `rtbAppInstaladas`.
* El `RichTextBox` derecho se llamará `rtbAppNoInstaladas`.
* Agregar el siguiente código al evento `Load` del formulario:

```csharp
List<Aplicacion> listaApps = new List<Aplicacion>()
{
  new AppJuegos("Super Mario Bros", SistemaOperativo.ANDROID, 20), // Lo debe agregar
  new AppJuegos("Super Mario Bros", SistemaOperativo.ANDROID, 20), // No lo debe agregar, está repetido
  new AppJuegos("Angry Birds", SistemaOperativo.ANDROID, 100), // Lo debe agregar
  new AppJuegos("League of Legends", SistemaOperativo.IOS, 500), // No lo debe agregar, sistema operativo distinto
  new AppMusical("Spotify", SistemaOperativo.ANDROID, 50, // Lo agrega con las canciones. 
                new List<string>()
                {
                    "Bohemian Rhapsody - Queen",
                    "Billie Jean – Michael Jackson",
                    "Another Brick In The Wall – Pink Floyd",
                    "Romeo And Juliet – Dire Straits",
                    "Where The Streets Have No Name -U2",
                    "Let It Be – The Beatles",
                    "Could You Be Loved – Bob Marley",
                    "Every Breath You Take – The Police",
                    "November Rain – Guns n Roses",
                    "Crazy Train – Ozzy Osbourne",
                    "Volver – Carlos Gardel",
                    "En La Ciudad De La Furia – Soda Stereo",
                    "Gualicho – Patricio Rey",
                    "Paint It Black – Rolling Stones"
                }),
  new AppMusical("Spotify", SistemaOperativo.ANDROID, 50), // No lo debe agregar, repetido.
  new AppMusical("YouTube Music", SistemaOperativo.ANDROID, 30) // Lo debe agregar.
};

foreach (Aplicacion app in listaApps)
{
    // Intenta instalar apps.
    if (!Dispositivo.InstalarApp(app))
    {
        // Agrega apps no instaladas al RichTextBox de no-instaladas.
        rtbAppNoInstaladas.Text += string.Concat(app.ToString(), "\n");
    }

    // Obtiene la información del dispositivo y sus apps instaladas.
    // Lo asigna al RichTextBox de apps instaladas.
    this.rtbAppInstaladas.Text = Dispositivo.ObtenerInformacionDispositivo();
}
```

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/0T_TDkJAG0w) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Parciales_Resueltos/Primer.Parcial.Dispositivo) |
| :-----------------------: | :-----------------------------------: | :----------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
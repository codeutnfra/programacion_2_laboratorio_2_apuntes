---
title: Apuntes - Eventos
sidebar_label: Eventos
slug: /clases/eventos/apuntes/eventos
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

## Eventos
Los eventos permiten que una clase u objeto notifique a otras clases u objetos cuando ocurre una acción. La acción puede ser causada por la interacción del usuario, como un clic en un botón, o puede resultar de alguna otra lógica del programa, como el cambio en el estado de un objeto. 

El objeto que genera el evento se llama remitente (sender) o emisor del evento. El emisor del evento no sabe qué objeto o método recibirá (manejará) los eventos que genera. Los objetos que reciben (o manejan ) el evento se llaman suscriptores. Un método que maneja un evento se llama manejador de eventos. Los manejadores de eventos no son más que métodos invocados a través de delegados.

El evento suele ser miembro de la clase que lo genera; por ejemplo, el evento `Click` es un miembro de la clase `Button`.

### Declaración
Los eventos se declaran con la palabra reservada `event` seguido del tipo de delegado para el evento.

Supongamos que se desea crear una clase `Reloj` que notifica a los posibles suscriptores cada vez que la hora local cambia su valor en un segundo:

```csharp
class Reloj 
{
    public delegate void NotificadorCambioTiempo(object reloj, InfoTiempoEventArgs infoTiempo);

    public event NotificadorCambioTiempo SegundoCambiado;

    public int hora;
    public int minuto;
    public int segundo;
}
```
Los delegados tienen muchos usos en .NET. En el contexto de eventos, un delegado es un intermediario (o mecanismo similar a un puntero) entre la fuente del evento y el código que maneja el evento. Se asocia un delegado con un evento al incluir el tipo de delegado en la declaración del evento, como se muestra en el ejemplo anterior.

Por convención, los manejadores de eventos en .NET siempre devuelven `void` y toman dos parámetros. El primer parámetro es la "fuente" del evento (es decir, el objeto emisor). El segundo parámetro es un objeto derivado de `EventArgs`. Sus métodos manejadores deberán seguir este patrón de diseño.

#### La Clase EventArgs

`EventArgs` es la clase base para todos los datos de eventos. La clase [EventArgs](https://docs.microsoft.com/en-us/dotnet/api/system.eventargs) hereda todos sus métodos de Object y agrega un campo estático público llamado `Empty`, que representa un evento sin estado (para permitir el uso eficiente de eventos sin estado). En otras palabras, la clase EventArgs es un depósito vacío que se puede usar para proporcionar cualquier información que desee sobre el evento. Lo que hace la clase suscriptora con esa información es asunto del suscriptor; no le importa al editor. De esta manera, la clase suscriptora puede hacer coincidir fácilmente la firma del delegado requerida, simplemente tomando un parámetro de tipo EventArgs. El suscriptor puede usar toda, parte o nada de la información pasada en EventArgs.

El delegado `NotificadorCambioTiempo` encapsulará cualquier método que devuelve `void` y que tome dos parámetros. El primer parámetro es un objeto que representa el `Reloj` (el objeto que genera el evento), y el segundo parámetro es un objeto de tipo `InfoTiempoEventArgs`, derivado de EventArgs, que contendrá información útil para cualquier persona interesada en este evento. El objeto `InfoTiempoEventArgs` tendrá información sobre la hora, los minutos y los segundos actuales. Define un constructor y tres variables enteras públicas.

```csharp
public class InfoTiempoEventArgs : EventArgs
{
    public int hora;
    public int minuto;
    public int segundo;
    public InfoTiempoEventArgs(int h, int m, int s)
    {
        this.hora = h;
        this.minuto = m;
        this.segundo = s;
    }
}
```

### Invocación

Además, la clase `Reloj` tiene un solo método, `Ejecutar()`:

```csharp
public void Ejecutar( )
{
    for (; ; )
    {
        // duerme la ejecucion 100 milisengundos
        Thread.Sleep(100);

        // obtiene hora actual
        DateTime dt = DateTime.Now;
        // si los segundos cambian
        // notifica a los suscriptores
        if (dt.Second != segundo)
        {
            // crea una instancia de InfoTiempoEventArgs
            // para pasar al suscriptor
            InfoTiempoEventArgs infoTiempo = new InfoTiempoEventArgs(dt.Hour, dt.Minute, dt.Second);

            // verifico que haya suscriptores al evento
            if (SegundoCambiado is not null)
            {
                SegundoCambiado.Invoke(this, infoTiempo);
            }
        }

        // actualizo el estado del objeto Reloj
        this.segundo = dt.Second;
        this.minuto = dt.Minute;
        this.hora = dt.Hour;
    }
}
```
`Ejecutar()` crea un bucle for infinito que comprueba periódicamente la hora del sistema. Si la hora ha cambiado con respecto a la hora actual del objeto Reloj, notifica a todos sus suscriptores y luego actualiza su propio estado.

El primer paso es dormir le ejecución durante 100 milisegundos:
```csharp
Thread.Sleep(100);
```

Después de dormir durante 100 milisegundos, el método verifica la hora actual:

```csharp
DateTime dt = DateTime.Now;
```

Cuando se detecta que el segundo se ha incrementado, el método debe notificar a sus suscriptores. Para hacerlo, primero crea un nuevo objeto `InfoTiempoEventArgs`:

```csharp
if (dt.Second != segundo)
{
    InfoTiempoEventArgs infoTiempo = new InfoTiempoEventArgs(dt.Hour, dt.Minute, dt.Second);
    //...
}
```

Luego notifica a los suscriptores disparando el evento `SegundoCambiado`. 


```csharp
if (SegundoCambiado is not null)
{
    SegundoCambiado.Invoke(this, infoTiempo);
}
```

Si un evento no tiene suscriptores registrados, será `null`. El codigo anterior verifica que el valor no sea nulo, lo que garantiza que haya suscriptores antes de llamar a `SegundoCambiado`.

El evento `SegundoCambiado` toma dos argumentos: la fuente del evento y el objeto derivado de EventArgs. Cuando se invoca, se pasa la intancia de Reloj porque es la fuente del evento. El segundo parámetro es el objeto `InfoTiempoEventArgs`.

Al generar el evento, se invocarán los métodos que se suscripto al evento; Una vez que se genera el evento, actualiza el estado de la clase Reloj:


```csharp
this.segundo = dt.Second;
this.minuto = dt.Minute;
this.hora = dt.Hour;
```

### Suscripción al evento


Todo lo que queda es crear clases que puedan suscribirse a este evento. El formulario `FrmPrincipal` contiene un label `lblTiempo` que muestra la hora actual.

En en método `FrmPrincipal_Load` se crea una instacia de `Reloj` que se una para suscribirse al evento `SegundoCambiado`  y llamar al método `Ejecutar()`. De esta manera cada vez que se genera el evento será manejado por el método `MostrarCambioTiempo` que actualiza la propiedad `Text` de `lblTiempo`.   


```csharp
public partial class FrmPrincipal : Form
{
    private void FrmPrincipal_Load(object sender, EventArgs e)
    {
        Reloj  reloj = new Reloj();
        reloj.SegundoCambiado += MostrarCambioTiempo;
        reloj.Ejecutar();
    }

    public void MostrarCambioTiempo(object reloj, InfoTiempoEventArgs info)
    {
        lblTiempo.Text = $"{info.hora}{info.minuto}{info.segundo}";
    }
}
```

Cuando se invoca el método, `FrmPrincipal_Load`, se asocia el evento de la clase Reloj con el método manejador.

El operador `+=` es el mecanismo mediante el cual las clases pueden asociar sus manejadores de eventos con el evento. El uso del operador `+=` permite que varias clases registren manejadores para un solo evento. El operador `-=` permite desasociar el manejador al evento.

La firma del método `MostrarCambioTiempo` que maneja el evento tiene que coincidir con la firma del delegado `NotificadorCambioTiempo`, que recibe como primer parámetro object y como segundo parámetro el objeto `InfoTiempoEventArgs`.
 

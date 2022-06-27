---
sidebar_label: Constructores
slug: /clases/objetos/apuntes/constructores
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Constructores

Los constructores permiten al programador establecer valores predeterminados, limitar la creación de instancias y escribir código que sea flexible y fácil de leer.

### Constructores de Instancia

Cada vez que se crea una intancia de una clase, se llama a su constructor. Los constructores tienen el mismo nombre que la clase y, por lo general, inicializan los atributos/campos del nuevo objeto.



```csharp
public class Taxi
{
    public bool IsInitialized;

    public Taxi()
    {
        IsInitialized = true;
    }
}

class Program
{
    static void Main()
    {
        Taxi t = new Taxi();
        Console.WriteLine(t.IsInitialized);
    }
}
```

Un constructor que no toma parámetros se llama *constructor sin parámetros* . Los constructores sin parámetros se invocan cada vez que se crea una instancia de un objeto mediante el operador ``new`` y no se proporcionan argumentos. 

A menos que la clase sea estática, las clases sin constructores reciben un constructor público sin parámetros que crea el  compilador de para habilitar la creación de instancias de la clase.

Los constructores se pueden marcar como public , private , protected , internal , protected internal o private protected . Estos modificadores de acceso definen cómo los usuarios de la clase pueden construir la clase

Una clase puede tener múltiples constructores que toman diferentes argumentos:

```csharp
public class Empleado
{
    public int salario;

    public Empleado() { }

    public Empleado(int salarioAnual)
    {
        salario = salarioAnual;
    }

    public Empleado(int salarioSemanal, int cantidadDeSemanas)
    {
        salario = salarioSemanal * cantidadDeSemanas;
    }
}
```
Esta clase se puede crear usando cualquiera de las siguientes declaraciones:

```csharp
Empleado e1 = new Empleado(30000);
Empleado e2 = new Empleado(500, 52);
```

Un constructor puede invocar a otro constructor en el mismo objeto usando la palabra reservada ``this`` . Puede usarse con o sin parámetros, y cualquier parámetro en el constructor está disponible como parámetro para ``this`` o como parte de una expresión. Por ejemplo, el segundo constructor del ejemplo anterior se puede reescribir usando this:

```csharp
public Empleado(int salarioSemanal, int cantidadDeSemanas)
    : this(salarioSemanal * cantidadDeSemanas)
{
}
```

El uso de ``this`` en el ejemplo anterior hace que se llame a este constructor:

```csharp
public Empleado(int salarioAnual)
{
    salario = salarioAnual;
}
```

### Constructores Estáticos

Un constructor estático se usa para inicializar cualquier campo/atributo estático o para realizar una acción particular que debe realizarse solo una vez. Se llama automáticamente antes de que se cree la primera instancia o se haga referencia a cualquier miembro estático. Los constructores estáticos no tienen parámetros ni modificador de acceso. Si no proporciona un constructor estático para inicializar los campos estáticos, el compilador de C# inicializa los campos estáticos a su valor predeterminado


```csharp
public class Empleado
{
    public static int salarioMinimo;

    static Empleado()
    {
        salarioMinimo = 20000;
    }
}
```
En este ejemplo, la clase ```Bus``` tiene un constructor estático. Cuando se crea la primera instancia de ```Bus``` (bus1), se invoca el constructor estático para inicializar la clase. La salida de muestra verifica que el constructor estático se ejecuta solo una vez, aunque  se crean dos instancias de ```Bus```, y que se ejecuta antes de que se ejecute el constructor de instancia.

```csharp
public class Bus
{
    // Atributo estático utilizada por todas las instancias de Bus.
     // Representa la hora en que el primer autobús del día inicia su ruta.
    public static DateTime horaDeInicio;

    //atributo de instancia
    public int numeroDeRuta;

    // Constructor estático para inicializar la variable estática.
    // Se invoca antes de que se ejecute el constructor de la primera instancia.
    static Bus()
    {
        horaDeInicio = DateTime.Now;

        // La siguiente declaración produce la primera línea de salida,
        // y la línea aparece solo una vez.
        Console.WriteLine("El constructor estático establece la hora de inicio en {0}",
            horaDeInicio.ToLongTimeString());
    }

    // Constructor de instancia.
    public Bus(int numeroDeRuta)
    {
        this.numeroDeRuta = numeroDeRuta;
        Console.WriteLine("Bus #{0} creado.", numeroDeRuta);
    }

    // Metodo de instancia.
    public void Conducir()
    {
        TimeSpan tiempoTrascurrido = DateTime.Now - horaDeInicio;

        // Para fines de demostración, tratamos los milisegundos como minutos para simular
         // tiempos reales de autobús. ¡No haga esto en su programa!
        Console.WriteLine("{0} está comenzando su ruta {1: N2} minutos después de la hora de inicio {2}.",
                                this.numeroDeRuta,
                                tiempoTrascurrido.Milliseconds,
                                horaDeInicio.ToShortTimeString());
    }
}

class TestBus
{
    static void Main()
    {
        // La creación de esta instancia activa el constructor estático.
        Bus bus1 = new Bus(71);

        // Crea un segundo autobús.
        Bus bus2 = new Bus(72);

        
        bus1.Conducir();

        // Espera 25 milisegundos
        System.Threading.Thread.Sleep(25);

       
        bus2.Conducir();

  
        Console.ReadKey();
    }
}
/* Sample output:
    El constructor estático establece la hora de inicio en 3:57:08 PM.
    Bus #71 creado.
    Bus #72 creado.
    71 está comenzando su ruta 6.00 minutos después de la hora de inicio 3:57 PM.
    72 está comenzando su ruta 31.00 minutos después de la hora de inicio 3:57 PM.
*/
```

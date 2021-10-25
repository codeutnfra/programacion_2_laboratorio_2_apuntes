---
sidebar_label: Programación multi-hilo
slug: /clases/concurrencia/apuntes/programacion-multihilo
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Programación multi-hilo
Un **proceso** es un programa en ejecución que tiene asignados recursos tales como memoria e hilos. 

Un **hilo (*thread*)**, también llamado hebra o subproceso, es la unidad básica a la que un sistema operativo asigna tiempo de procesamiento. Son los encargados de ejecutar nuestro código sentencia a sentencia. 

Por defecto cada proceso tiene un único hilo, es decir, sólo puede procesar una tarea a la vez. La **programación multi-hilo (*multithreaded programming*)** permite que un proceso se ejecute sobre múltiples hilos y cada uno de esos hilos esté realizando una tarea distinta en paralelo. 

Todos los hilos de un mismo proceso comparten los mismos recursos asignados por el sistema operativo.

[//]: # "TODO Ejemplo del supermercado"
[//]: # "TODO Ejercicio POMODORO"

### Multitarea apropiativa
Por cada núcleo de la CPU, se puede ejecutar a lo mucho un proceso en cada momento. Windows y otros sistemas operativos modernos simulan la ejecución paralela de tareas dividiendo el tiempo de procesamiento entre los hilos, permitiendo que se vayan ejecutando uno después de otro en pequeñas fracciones de tiempo. El hilo que se está ejecutando es suspendido cuando termina su fracción de tiempo, luego el procesador permite que otro hilo se ejecute por el mismo periodo de tiempo. Esta forma de simular el paralelismo recibe el nombre de **multitarea apropiativa (*preemptive multitasking*)**. 

Cuando Windows cambia de un hilo a otro, guarda el contexto donde se ejecutó el hilo actual y recarga el contexto del próximo hilo en la cola de ejecución. Hay que ser conscientes de que esto también consume tiempo y recursos. 

:::caution Advertencia

No siempre tener más hilos va a mejorar el rendimiento, se deben realizar pruebas de rendimiento comparando la ejecución de procesos con y sin múltiples hilos.

:::

Cada hilo tiene una **pila de ejecución (*call stack*)** independiente, esto significa que cada uno maneja su propia secuencia de funciones a ejecutar. 

En algunos tipos de aplicación existen hilos especiales, por ejemplo un hilo para la interfaz de usuario (*UI Thread*) o el hilo principal en los programas de consola (*Main Thread*).

[//]: # "TODO IMAGEN - proceso, hilos, call stack y memoria"

Todas las aplicaciones de .NET tienen un **conjunto de hilos (*thread pool*)** que se encarga de mantener un número de hilos activos esperando para ejecutar cualquier trabajo que se requiera. Lo podemos ver como un lugar donde podemos poner en cola tareas a realizar y que se ajustará automáticamente de acuerdo a la demanda.

En .NET se solía utilizar la clase ***Thread*** para trabajar con hilos, la cual es una abstracción de bajo nivel. El *thread pool* es una abstracción de un nivel un poco más alto, ya que se encargará por si mismo de instanciar un hilo si existe la necesidad. Actualmente no se recomienda crear instancias de ***Thread*** ya que existen nuevas soluciones que fueron afinadas para cubrir de forma eficiente y sencilla la gran mayoría de los escenarios reales.

Las clases con las que trabajaremos son abstracciones de alto nivel que ponen en cola trabajo para que sea resuelto por el *thread pool*. 

[//]: # "TODO IMAGEN - thread vs thread pool vs high level abstractions"

### Programación en paralelo
La **programación en paralelo (*parallel programming*)** es un tipo de programación multi-hilo, que a su vez es una forma de concurrencia. Se utiliza cuando se necesita dividir una gran carga de trabajo computacional en partes independientes y ejecutarlas en paralelo, maximizando el uso de los núcleos de la CPU.

:::important IMPORTANTE

Cuando procesamos en paralelo cada fragmento de trabajo debe ser tan independiente del resto como sea posible. 

:::

[//]: # "TODO IMAGEN - ejemplo en la cocina"

[//]: # "Existen dos formas de paralelismo: data parallelism y task parallelism"

[//]: # "TODO IMAGEN - tipos de concurrencia y subtipos https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming"

[//]: # "TODO Parallel.ForEach"

[//]: # "TODO Colecciones concurrentes"

[//]: # "TODO Ejercicio que tenga un servicio o programa cargando datos aleatorios en la base de datos y otro actualizando estadísticas en pantalla.... bogus?"

## Trabajando con hilos
La clase `Task` representa una operación individual que será delegada y ejecutada en un hilo del thread pool, es decir, en paralelo al sub-proceso que la origina. 

Existen distintas formas de instanciar e iniciar un objeto de tipo `Task`. 

En el siguiente ejemplo utilizaremos el constructor el cual tiene como parámetro de entrada un delegado de tipo `Action`. Como ya vimos, los delegados `Action` corresponden a aquellos métodos que no retornan ningún valor. 

Para iniciar la ejecución del método en un hilo paralelo se deberá invocar al método `Start`.

Por último se llama al método `Wait` para bloquear al hilo principal y evitar que se cierre la consola.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

class EjemploHilos
{
    static void Accion()
    {
        Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");
        Thread.Sleep(2000);
    }

    static void Main()
    {
        // Instancia una tarea pero no la inicia.
        Task tarea = new Task(Accion);

        // Inicia la tarea.
        tarea.Start();

        Console.WriteLine($"La tarea comenzó a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");

        // Bloquea el hilo hasta que finaliza la tarea.
        tarea.Wait();

        Console.WriteLine($"La tarea finalizó. Hilo principal={Thread.CurrentThread.ManagedThreadId}");
    }
}
```

La salida del código anterior es:

```
La tarea comenzó a ejecutarse. Hilo principal=1
Task ID=1, Hilo secundario=4
La tarea finalizó. Hilo principal=1
```

Observemos que el segundo mensaje está ocurriendo en el hilo 4, mientras que los otros dos ocurren en el hilo principal. 

La propiedad `Thread.CurrentThread.ManagedThreadId` retorna el id del hilo en el que se está ejecutando esa instrucción. La propiedad `Task.CurrentId` retorna el id de la tarea, es decir, de la instancia de `Task`.

Otra forma de crear y ejecutar un objeto `Task` al mismo tiempo es usar el método estático `Run`. Si usamos este método, la tarea se instanciará e inicializará al mismo tiempo, ejecutando el método en algún hilo disponible en el *thread pool*. 

El ejemplo anterior con `Task.Run`:

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

class EjemploHilos
{
    static void Accion()
    {
        Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");
        Thread.Sleep(2000);
    }

    static void Main()
    {
        // Instancia e inicia una tarea.
        Task tarea = Task.Run(Accion);

        Console.WriteLine($"La tarea comenzó a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");

        // Bloquea el hilo hasta que finaliza la tarea.
        tarea.Wait();

        Console.WriteLine($"La tarea finalizó. Hilo principal={Thread.CurrentThread.ManagedThreadId}");
    }
}
```

La salida del código anterior es:

```
Task ID=1, Hilo secundario=4
La tarea comenzó a ejecutarse. Hilo principal=1
La tarea finalizó. Hilo principal=1
```

También podemos usar expresiones lambda como argumentos tanto del constructor de `Task` como del método `Run`. 

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

class EjemploHilos
{
    static void Main()
    {
        // Instancia e inicia una tarea. Utilizando expresiones lambda.
        Task tarea = Task.Run(() =>
        {
            Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(2000);
        });

        Console.WriteLine($"La tarea comenzó a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");

        // Bloquea el hilo hasta que finaliza la tarea.
        tarea.Wait();

        Console.WriteLine($"La tarea finalizó. Hilo principal={Thread.CurrentThread.ManagedThreadId}");
    }
}
```

El resultado será el mismo. 

Para esperar que finalicen dos o más hilos antes de continuar, se debe utilizar el método `WaitAll` que bloquea el hilo actual hasta que finalicen todas las tareas pasadas como argumento del método.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

class EjemploHilos
{
    static void Main()
    {
        Action accion = () =>
        {
            Thread.Sleep(new Random().Next(1000, 5000));
            Console.WriteLine($"{DateTime.Now}: Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");
        };

        // Instancia e inicia una tarea.
        Task tarea = Task.Run(accion);
        Task otraTarea = Task.Run(accion);

        Console.WriteLine($"{DateTime.Now}: Las tareas comenzaron a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");

        // Bloquea el hilo hasta que finalizan todas las tarea pasadas como argumento del método.
        Task.WaitAll(tarea, otraTarea);

        Console.WriteLine($"{DateTime.Now}: Las tareas finalizaron. Hilo principal={Thread.CurrentThread.ManagedThreadId}");
    }
}
```

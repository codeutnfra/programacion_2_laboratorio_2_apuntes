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


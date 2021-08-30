---
title: Apuntes - Namespaces
sidebar_label: Namespaces
slug: /clases/estaticos/apuntes/namespaces
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Namespaces
Los **espacios de nombres (*namespaces*)** son una agrupación lógica de clases y otros elementos del código fuente. Así como clasificamos nuestros archivos dentro de distintos directos del sistema operativo, podemos organizar el código fuente de C# y sus componentes en distintos espacios de nombres. 

Todo lo que declaremos deberá estar contenido dentro de un espacio de nombres.

Su función principal es la organización del código, permitiendo la reducción de conflictos por nombres duplicados y la posibilidad de trabajar en un mismo programa con componentes de distinta procedencia. 

Analicemos el siguiente código:

```csharp
System.Console.WriteLine("¡Hola mundo!");
```

* `System` es un **namespace** que forma parte de la *Base Class Library*.
* `Console` es una **clase** dentro del namespace `System`.
* `WriteLine` es un **método *estático*** de la clase `Console`.

Si bien al crear un nuevo proyecto en Visual Studio vemos que por defecto se genera un archivo con un namespace que lleva el mismo nombre que el proyecto, esto no necesariamente tiene que ser así. Los identificadores de espacios de nombres pueden ser distintos al nombre del proyecto del que forman parte. También puede haber más de un namespace por proyecto. 

### Directiva using
La **directiva using** permite la especificación de una llamada a un método sin el uso obligatorio de un nombre completamente cualificado (nombre completo incluyendo el espacio de nombres).

Sin directiva `using`:
```csharp
public class Program
{
    public static void Main()
    {
        // Sin la directiva 'using' tengo que anteponer el espacio de nombres al identificador de la clase. 
        System.Console.WriteLine("¡Hola mundo!");
    }
}
```

Con directiva `using`:
```csharp
using System; //Directiva USING

public class Program
{
    public static void Main()
    {
        Console.WriteLine("¡Hola mundo!");
    }
}
```

### Directiva alias
La **directiva alias** permite utilizar un nombre distinto para un espacio de nombres. Se suele utilizar para abreviar nombres largos.

```csharp
using SC = System.Console; //Directiva ALIAS

public class Program
{
    public static void Main()
    {
        SC.WriteLine("¡Hola mundo!");
    }
}
```

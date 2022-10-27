---
title: Apuntes - Tipos genéricos
sidebar_label: Tipos genéricos
slug: /clases/generics/apuntes/tipos-genericos
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

## GENERICS

Genérico significa la forma general, no específica. En C#, genérico significa que no es específico de un tipo de datos en particular.

C# le permite definir clases genéricas, interfaces, clases abstractas, campos, métodos, métodos estáticos, propiedades, eventos, delegados y operadores utilizando el parámetro de tipo y sin el tipo de datos específico. Un parámetro de tipo es un marcador de posición para un tipo particular especificado al crear una instancia del tipo genérico.

Un tipo genérico se declara especificando un parámetro de tipo entre corchetes angulares después de un nombre de tipo, por ejemplo, ``TypeName<T>`` donde T es un parámetro de tipo.

### Clases Genericas

Características de clase genéricas
+ Una clase genérica aumenta la reutilización. Cuantos más parámetros de tipo, más reutilizable se vuelve. Sin embargo, demasiada generalización hace que el código sea difícil de entender y mantener.
+ Una clase genérica puede ser una clase base para otras clases genéricas o no genéricas o clases abstractas.
+ Una clase genérica puede derivarse de otras interfaces, clases o clases abstractas genéricas o no genéricas.

Las clases genéricas se definen mediante un parámetro de tipo entre corchetes angulares después del nombre de la clase. 

```csharp
public class MiClase<T>
{
    private T dato;

    public T Dato{get; set;}
}
```

La clase `MiClase` está definida como una genérica, por contener el parametro de tipo ``<T>`` , que se puede utilizar como un tipo de campo, propiedad, parámetro de método, tipos de devolución y delegados en `MiClase`. Por ejemplo, Dato es una propiedad genérica porque hemos usado un parámetro de tipo T como su tipo en lugar del tipo de datos específico.

No es necesario utilizar la letra *T* como parámetro de tipo. Puede dar cualquier nombre a un parámetro de tipo. Generalmente, T se utiliza cuando solo hay un parámetro de tipo. Se recomienda utilizar un nombre de parámetro de tipo más legible según el requisito, como TKey, TValue, etc. 

Cuando crea una instancia de una clase genérica, especifica los tipos reales para sustituir los parámetros de tipo. Esto establece una nueva clase genérica, denominada clase genérica construida, con los tipos elegidos sustituidos en todos los lugares donde aparecen los parámetros de tipo. El resultado es una clase con seguridad de tipos que se adapta a su elección de tipos, siguiendo el ejemplo anterior vamos a instanciar y construir nuestra clase genérica: 

```csharp
public static Main(string[] args )
{
    MiClase<string> miClase = new MiClase<string>();

    miClase.Dato = "Hola";
    //...
    Console.WriteLine(miClase.Dato);
}
```

El parametro T se reempla por el tipo de dato que necesitábamos usar. De esta forma podríamos reutilizar la misma clase generica y tiparla según lo que necesitemos en nuestro programa: 

```csharp
public static Main(string[] args )
{
    MiClase<string> miClase = new MiClase<string>();
    miClase.Dato = "Hola";
    //...
    MiClase<int> otraClase = new MiClase<string>();
    otraClase.Dato = 123456;
    Console.WriteLine(miClase.Dato);
    Console.WriteLine(otraClase.Dato);
}
```

El uso de Generics está presente en muchas clase de la Base Class Library. Por ejemplo, las clases genéricas  ``List`` o ``Dictionary`` incluidas en *System.Collections.Generic*:

```csharp
public class List<T> 
    : IList<T>, System.Collections.IList, IReadOnlyList<T>
{
    private const int _defaultCapacity = 4;

    private T[] _items;
    [ContractPublicPropertyName("Count")]
    private int _size;
    private int _version;

    static readonly T[] _emptyArray = new T[0];

    public List()
    {
        _items = _emptyArray;
    }

    public void Add(T item)
    {
        if(_size == _items.Length)
        {
            EnsureCapacity(_size + 1);
        }
        _item[_size++] = item;
        _version++;
    }
    //...
}
```

### Métodos genéricos

Podemos crear métodos que tanto sus parámetros y/o su retorno sean genéricos, en clases que no son genéricas:

```csharp
public class Deposito
{
    private int capacidadMaxima;
    private List<T> stock;

    public bool Agregar(T a)
    {
        bool rta = false;

        if(stock.Count < capacidadMaxima)
        {
            stock.Add(a);
            rta = true;
        }
    }
}
```

### Restricciones genéricas de C#

C# le permite usar restricciones para restringir el código para especificar ciertos tipos al crear instancias de tipos genéricos. Esto hace que se generé un error en tiempo de compilación si intenta crear una instancia de un tipo genérico utilizando un tipo que no está permitido por las restricciones especificadas.

Para especificar una o más restricciones en el tipo genérico se usa clausula WHERE después del nombre del tipo genérico.

```csharp
public class Torneo<T> where T : Equipo
{
    private List<T> equipos;
    private string nombre;
    //...
}
```

La clase ``Torneo`` sólo aceptara en su lista objetos del tipo ``Equipo``. 

Aplicando la misma sentencia podemos restringir nuestro parámetro de tipo en los métodos: 

```csharp
public static void SerializarJson<T>(string ruta, T obj) where T : class
{
    //...
}
```

Y también podemos usar más de una restricción en el método o en la clase:  

```csharp
public void AgregarJugador<T,U>(T e, U j)
    where T : Equipo
    where U : Persona
{
    //...
}
```
Los tipos de sentencia que se pueden usar para las restricciones son las siguientes:  

| Restriccion        | Descripcion                                                          |
|:------------------:|:--------------------------------------------------------------------:|
|where T : struct    |El argumento de tipo debe ser un tipo de valor                        |
|where T : class     |El argumento de tipo debe ser un tipo de referencia                   |
|where T : unmanaged |No puede ser tipo de refenrecia. Implica struct                       |
|where T : new()     |El argumento de tipo dene tener un constructor público sin parametros.|
|where T : ``<nombre de la clase>``|El argumento de tipo debe ser de la clase especificada o derivada|
---
title: Apuntes - Polimorfismo y clases abstractas
sidebar_label: Polimorfismo
slug: /clases/polimorfismo/apuntes/polimorfismo
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Polimorfismo
El **polimorfismo** es la habilidad de los objetos de responder al mismo mensaje de distintas formas y también el último de los pilares de la programación orientada a objetos que analizaremos. Con mensaje nos referimos a cuando un objeto recibe una invocación de uno de los servicios que ofrece en forma de métodos. Es decir, los objetos del mismo tipo pueden resolver la invocación de una misma operación (misma firma del método, misma semántica) de diferentes maneras.

Existen distintas formas de implementar el polimorfismo, nosotros veremos polimorfismo basado en herencia.

## Polimorfismo basado en herencia
Una **operación** especifica un servicio que se puede requerir de cualquier objeto para influir en su comportamiento o alterar su estado, el qué hace. Un **método** es una implementación de una operación, un algoritmo ejecutable que resuelve el requerimiento, el cómo lo hace. En una jerarquía de herencia puede haber varios métodos para la misma operación, y el polimorfismo selecciona qué método de la jerarquía se ejecuta en tiempo de ejecución. 

Recordemos que todas las clases derivadas heredan la interfaz de su clase base (sus operaciones y propiedades públicas). Sin embargo, como cada clase derivada es una entidad semi-independiente, cada una podría requerir resolver la respuesta al mismo mensaje de distinta forma. 

Por ejemplo, si tenemos la clase `Animal` y una operación llamada `EmitirSonido` y sus derivadas `Perro`, `Gato` y `Vaca`. La operación es la misma, hacer un sonido, pero cada sub-tipo de animal emite un sonido distinto. Los perros ladran, los gatos maullan y las vacas mugen, son distintas formas de resolver la misma operación. 

### Herencia no-polimórfica
Implementemos el ejemplo anterior.

```csharp
public class Animal
{
    public string EmitirSonido() 
    {
        return "¡Roar!";
    }
}

public class Perro : Animal
{
    public string EmitirSonido() 
    {
        return "¡Woof!";
    }
}

public class Gato : Animal 
{
    public string EmitirSonido() 
    {
        return "¡Miau!";
    }
}
```

El primer problema que enfrentaremos es una advertencia del compilador y del IDE: 

![Advertencia cuando ocultamos métodos de la clase base sin usar new](/clases/09-polimorfismo/apuntes/advertencia_polimorfismo.PNG)

Podremos compilar igual, pero nos advierten que los métodos declarados en los tipos derivados están ocultado el método en la clase base. Y nos aconsejan que, si esa fue nuestra intensión, deberíamos usar el operador `new` en la declaración. 

```csharp
public class Perro : Animal
{
    public new string EmitirSonido() 
    {
        return "¡Woof!";
    }
}

public class Gato : Animal 
{
    public new string EmitirSonido() 
    {
        return "¡Miau!";
    }
}
```

Agregando el operador `new` hacemos explícita nuestra intención de ocultar la implementación de la clase base. Veamos qué pasa si ejecutamos el método desde los distintos tipos de instancia de la jerarquía:

```csharp
static void Main(string[] args)
{
    Animal animal = new Animal();
    Perro perro = new Perro();
    Gato gato = new Gato();

    Console.WriteLine($"Animal: {animal.EmitirSonido()}");
    Console.WriteLine($"Perro: {perro.EmitirSonido()}");
    Console.WriteLine($"Gato: {gato.EmitirSonido()}");
}
```

La salida del código anterior es:

```
Animal: ¡Roar!
Perro: ¡Woof!
Gato: ¡Miau!
```

Tal cómo se esperaba, ¿no?. Sin embargo, observemos qué sucede si guardamos los objetos de tipo `Perro` y `Gato` en una variable de tipo `Animal`:

```csharp
static void Main(string[] args)
{
    Animal animal = new Animal();
    Animal perro = new Perro();
    Animal gato = new Gato();

    Console.WriteLine($"Animal: {animal.EmitirSonido()}");
    Console.WriteLine($"Perro: {perro.EmitirSonido()}");
    Console.WriteLine($"Gato: {gato.EmitirSonido()}");
}
```

La salida del código anterior es:

```
Animal: ¡Roar!
Perro: ¡Roar!
Gato: ¡Roar!
```

Se ejecuta la implementación del tipo de la referencia, es decir, del tipo de la variable que apunta al objeto. Sin embargo, el objeto en memoria es efectivamente un perro o un gato. Esto se denomina **herencia no-polimórfica**. 

Cuando un método se oculta con la palabra reservada `new`, el entorno de ejecución no distingue el tipo del objeto en memoria, sino que se basa en el tipo de la variable que contiene la referencia. 

### Herencia polimórfica
Para implementar polimorfismo en C# debemos declarar el método en la clase base como `virtual` y redefinirlo en la clase derivada con `override`. Así el entorno de ejecución podrá distinguir en tiempo de ejecución el tipo real del objeto en memoria. Se ejecutará la implementación de la operación más cercana en la jerarquía de herencia al tipo real de la instancia, independientemente del tipo de la referencia.  

La palabra reservada **`virtual`** se usa para declarar un método que pueda ser sobrescrito por una clase derivada. La palabra reservada **`override`** se usa para sobrescribir un método *virtual* de la clase base.

Transformemos el ejemplo de los animales para que aproveche el polimorfismo. 

```csharp
public class Animal
{
    public virtual string EmitirSonido() 
    {
        return "¡Roar!";
    }
}

public class Perro : Animal
{
    public override string EmitirSonido() 
    {
        return "¡Woof!";
    }
}

public class Gato : Animal 
{
    public override string EmitirSonido() 
    {
        return "¡Miau!";
    }
}

static void Main(string[] args)
{
    Animal animal = new Animal();
    Animal perro = new Perro();
    Animal gato = new Gato();

    Console.WriteLine($"Animal: {animal.EmitirSonido()}");
    Console.WriteLine($"Perro: {perro.EmitirSonido()}");
    Console.WriteLine($"Gato: {gato.EmitirSonido()}");
}
```

La salida del código anterior es:

```
Animal: ¡Roar!
Perro: ¡Woof!
Gato: ¡Miau!
```

Observemos que a pesar de que el tipo de la variable es `Animal`, por polimorfismo se ejecutará la implementación del tipo real del objeto.

| Tipo de la referencia | Tipo de la instancia | Modificador | Se ejecuta la implementación en... | Salida por consola |
| --------------------- | -------------------- | ----------- | ---------------------------------- | ------------------ |
| Perro                 | Perro                | `new`       | Perro                              | ¡Woof!             |
| Perro                 | Perro                | `virtual`   | Perro                              | ¡Woof!             |
| Animal                | Perro                | `new`       | Animal                             | ¡Roar!             |
| Animal                | Perro                | `virtual`   | Perro                              | ¡Woof!             |

Probemos agregar un nuevo tipo derivado de `Gato` y no invalidar la implementación del método `EmitirSonido`.

```csharp
public class Gato : Animal 
{
    public override string EmitirSonido() 
    {
        return "¡Miau!";
    }
}

public class Gatito : Gato
{
}

static void Main(string[] args)
{
    Animal animal = new Animal();
    Animal perro = new Perro();
    Animal gato = new Gato();
    Animal gatito = new Gatito();

    Console.WriteLine($"Animal: {animal.EmitirSonido()}");
    Console.WriteLine($"Perro: {perro.EmitirSonido()}");
    Console.WriteLine($"Gato: {gato.EmitirSonido()}");
    Console.WriteLine($"Gatito: {gatito.EmitirSonido()}");
}
```

La salida del código anterior es:

```
Animal: ¡Roar!
Perro: ¡Woof!
Gato: ¡Miau!
Gatito: ¡Miau!
```

Si no redefinimos la implementación del método `EmitirSonido` en `Gatito`, por polimorfismo se ejecutará la implementación más cercana en la jerarquía de herencia, en este caso en la clase `Gato`.

Se puede aplicar el mismo mecanismo a las propiedades.

## Sobrescribiendo la equivalencia de objetos

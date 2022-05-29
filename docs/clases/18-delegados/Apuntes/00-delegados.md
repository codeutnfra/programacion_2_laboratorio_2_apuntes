---
title: Apuntes - Delegados y expresiones lambda
sidebar_label: Delegados
slug: /clases/delegados/apuntes/delegados
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Delegados
Un **delegado** es un tipo que representa referencias a métodos con una firma particular. Recordemos que la firma de los métodos son los parámetros que recibe y el tipo que retorna. 

Los delegados son **tipos de referencia**, al instanciarlos (son objetos) podemos asociar su instancia con cualquier método que tenga una firma compatible. A través de la instancia del delegado podemos invocar al método referenciado. 

Todos los delegados derivan de la clase `Delegate` y son sellados (no se puede heredar de ellos). No se permite que otros tipos de datos deriven de `Delegate`.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K335VO1bRWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Usos comunes de los delegados
Como un delegado instanciado es un objeto, se pueden pasar como argumento de métodos o ser asignados a un propiedad. Permiten a un método aceptar un delegado como parámetro y llamar al delegado en algún momento futuro. Esto se conoce como **devolución de llamada asincrónica (*asynchronous callback*)**, y es una forma común de notificar al invocador cuando una tarea prolongada ha terminado. 

Otro uso común es definir un método de comparación y pasarlo como criterio a un método de ordenamiento o filtrado. Un ejemplo es el método `Sort` de la clase `List`, al cual se podemos pasar el método que contiene el criterio de comparación para el ordenamiento. 

Son particularmente útiles cuando el código que contiene el método a invocar se desarrolla de manera independiente al código invocador, ya que los delegados desacoplan a la clase que los declara de la clase que los usa. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/4Qvio8Tezv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Delegados vs punturos a función
A diferencia de los punteros a función de C y C++, los delegados son completamente orientados a objetos y **encapsulan tanto la referencia al método como la instancia a la que pertenece**. Además, los delegados cuentan con seguridad de tipos.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nf8iCMN2MCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Declaración de delegados
Los delegados se declaran con la palabra reservada `delegate` seguido del tipo de retorno, el nombre del tipo delegado y los parámetros de entrada. Los parámetros y el tipo de retorno sólo cumplen la función de definir qué clase de métodos puede referenciar el delegado, conservando la seguridad de tipos que caracteriza al lenguaje. 

A continuación podemos ver un ejemplo. 

```csharp
public delegate int RealizarCalculo(int x, int y);
```

Los delegados no tienen cuerpo ya que no definen un método. Su declaración simplemente indica que una instancia de ese delegado podrá encapsular cualquier método con la firma apropiada. No importa qué hace o cómo lo hace, sólo que los parámetros de entrada y el tipo de retorno coincidan con los del delegado. 

Como con cualquier otro tipo de dato, la declaración de un delegado puede ir dentro de un namespace o anidado en otro tipo (sólo si tiene una relación muy estrecha con el tipo contenedor).

:::note Nota

En el contexto de la sobrecarga de métodos sólo se comparan los parámetros de entrada, pero no el valor de retorno. Pero en el contexto de los delegados, la firma se compara incluyendo también el tipo de retorno. 

:::

### Instanciar un delegado
Instanciar un delegado requiere indicar qué método encapsulará.

```csharp
// Declarar un delegado
public delegate void DelegadoNotificacion(string str);

// Método con la misma firma que el delegado. 
static void Notificar(string nombre)
{
    Console.WriteLine($"Se recibió una notificación para: {nombre}.");
}
```

```csharp
// Instanciar el delegado.
DelegadoNotificacion delegadoNotificacion = new DelegadoNotificacion(Notificar);
```

Desde C# 2.0 también se puede instanciar el delegado asignándole directamente la referencia al método que encapsulará. 

```csharp
// Instanciar el delegado
DelegadoNotificacion delegadoNotificacion = Notificar;
```

Cualquier método accesible definido en una clase o estructura puede ser asignado al delegado. El método puede ser estático o de instancia. Cuando se trata de un método de instancia, el delegado también encapsula a la instancia a la que pertenece ese método. Cuando se trata de un método estático sólo almecena la referencia al método. 

### Usar un delegado
La forma de usar una instancia de un delegado es igual a la de un método. Colocamos el nombre de la variable que contiene la instancia del delegado y entre paréntesis le pasamos los argumentos para los parámetros de entrada definidos en su firma. En ese momento el delegado invocará al método que referencia y le pasará los argumentos suministrados. 

```csharp
// Usar el delegado
delegadoNotificacion("Juan Perez");
```

La salida del ejemplo anterior será:

```
Se recibió una notificación para: Juan Perez.
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/8tgX7WapHZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Delegados predefinidos
La *base class library* trae algunos tipos delegados **genéricos** que cubren la mayoría de los usos y nos evitan declarar nuevos delegados personalizados.

* `Action`: Representa métodos que no retornan nada y tienen entre 0 y 16 parámetros de entrada.
* `Func`: Representa métodos que sí retornan algo y tienen entre 0 y 16 parámetros de entrada.
* `Predicate`: Representa métodos que retornan bool y reciben un parámetro de entrada.

En los tres casos, tanto el tipo de retorno como de los parámetros de entrada se definirá a partir del argumento proporcionado a los tipos genéricos. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/NGV0Zt8UVHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Delegado Action
`Action` es un delegado que presenta métodos que no retornan valores. 

Si lo escribimos sin pasarle argumentos a sus tipos genéricos, representa métodos que no retornan ni reciben nada. De lo contrario, representa métodos que no retornan nada y tienen entre 1 y 16 parámetros de entrada.

```csharp
class Program
{
    public static void Saludar(string nombre)
    {
        Console.WriteLine($"¡Hola {nombre}!");
    }

    public static void SaludarConColores(string nombre, ConsoleColor colorLetra, ConsoleColor colorFondo)
    {
        Console.BackgroundColor = ConsoleColor.Red;
        Console.ForegroundColor = ConsoleColor.Yellow;
        Saludar(nombre);
        Console.BackgroundColor = ConsoleColor.Black;
        Console.ForegroundColor = ConsoleColor.Gray;
    }

    public static void SaludarAlMundo()
    {
        Console.WriteLine("¡Hola mundo!");
    }

    static void Main(string[] args)
    {
        // Declaración e inicialización

        // Delegado Action para métodos que no retornan ni reciben nada.
        Action delegadoAction = SaludarAlMundo;

        // Delegado Action para métodos que no retornan nada pero reciben 1 a 16 parámetros.
        Action<string> delegadoActionConUnParametro = Saludar;

        // Cuando hay varios parámetros de entrada, se indican sus tipos en orden como argumentos de los tipos genéricos del delegado.
        Action<string, ConsoleColor, ConsoleColor> delegadoActionConTresParametros = SaludarConColores;

        // Invocación de los delegados
        delegadoAction();

        delegadoActionConUnParametro("UTN");

        delegadoActionConTresParametros("UTN", ConsoleColor.Red, ConsoleColor.Gray);
    }
}
```

### Delegado Func
`Func` es un delegado que presenta métodos que sí retornan valores. 

Si lo escribimos pasándole un sólo argumento a sus tipo genérico, representa métodos que retornan ese tipo. Si le pasamos más de un argumento genérico, representa métodos que retornan ese tipo y tienen entre 1 y 16 parámetros de entrada.

```csharp


```

### Delegado Predicate
`Predicate` es un delegado que se suele utilizar para definir un conjunto de criterios y determinar cuándo el objeto especificado cumple con dichos criterios. Representa métodos que retornan `bool` y reciben un objeto cuyo tipo será indicado como argumento del tipo genérico. 

```csharp


```

## Delegados multidifusión
Un delegado puede refenciar más de un método y llamarlos a todos cuando es accionado. Cuando un delegado apunta a múltiples métodos se lo llama **delegado multidifusión (*multicast delegate*)**. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/XPDKu4sz1cY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Agregar métodos a la lista de invocación
Para agregar métodos a la lista de invocación de un delegado multidifusión se utilizan los operadores `+` o `+=`. Recordemos que todos los métodos deben tener una firma que corresponda al tipo delegado. 

```csharp
public delegate void Delegado(string str);

public class Clase
{
    public void MetodoUno(string str) { }
    public void MetodoDos(string str) { }
    public void MetodoTres(string str) { }
}

class Program
{
    static void Main(string[] args)
    {
        // Instancio el objeto que contiene los métodos que encapsulará el delegado.
        Clase objeto = new Clase();

        // Instancio dos delegados.
        Delegado delegadoUno = objeto.MetodoUno;
        Delegado delegadoDos = objeto.MetodoDos;

        // Ambos tipos de asignación son válidos.
        Delegado delegadoMultidifusion = delegadoUno + delegadoDos;
        delegadoMultidifusion += objeto.MetodoTres;
    }
}
```

En el ejemplo anterior, `delegadoMultidifusion` contiene tres métodos en su lista de invocación. Cuando el delegado sea invocado, los tres métodos serán llamados en orden. 

### Eliminar métodos de la lista de invocación
Para eliminar un método de la lista de invocación se utilizan los operadores `-` o `-=`.

```csharp
// Eliminar el delegadoUno
delegadoMultidifusion -= delegadoUno;

// Copiar delegadoMultidifusion mientras se elimina delegadoDos
Delegado delegadoSimple = delegadoMultidifusion - delegadoDos;
```

#### Tipos de referencia y delegados multidifusión
Cuando los argumentos del delegado sean tipos de referencia, cualquier cambio que efectue el primer método sobre los mismos serán visibles para el siguiente método. 

```csharp
public delegate void Delegado(Numero n);

public class Numero
{
    private int valor;

    public int Valor
    {
        get
        {
            return valor;
        }
        set
        {
            valor = value;
        }
    }

    public Numero(int valor)
    {
        this.valor = valor;
    }
}

public class Clase
{
    public void SumarDos(Numero n) 
    {
        n.Valor = n.Valor + 2;
    }

    public void MultiplicarPorDos(Numero n)
    {
        n.Valor = n.Valor * 2;
    }

    public void ElevarAlCuadrado(Numero n)
    {
        n.Valor = n.Valor * n.Valor;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Instancio el objeto que contiene los métodos que encapsulará el delegado.
        Clase objeto = new Clase();

        // Instancio dos delegados.
        Delegado delegadoUno = objeto.SumarDos;
        Delegado delegadoDos = objeto.MultiplicarPorDos;

        // Ambos tipos de asignación son válidos.
        Delegado delegadoMultidifusion = delegadoUno + delegadoDos;
        delegadoMultidifusion += objeto.ElevarAlCuadrado;

        
        Numero numero = new Numero(5);
        // Invoco al delegado
        delegadoMultidifusion(numero);

        Console.WriteLine($"Valor: {numero.Valor}");
    }
}
```

La salida del código anterior es:

```
Valor: 196
```

Instanciamos `Numero` con el valor `5`. Al invocar al delegado primero llama al método `SumarDos` que suma dos al valor de `Numero`: `5 + 2 = 7`. Luego llama al segundo método `MultiplicarPorDos` que multiplica por dos al valor que tiene `Numero` en ese momento: `7 * 2 = 14`. Por último, llama a `ElevarAlCuadrado`: `14 * 14 = 196`.

### Obtener la lista de invocación
Como todos los delegados derivan de `System.Delegate`, los métodos y propiedades definidos por esa clase serán compartidos por todos los delegados que declaremos. Por ejemplo, para obtener todos los métodos referenciados por un delegado multidifusión podemos usar el método `GetInvocationList`:

```csharp
static void Main(string[] args)
{
    // Instancio el objeto que contiene los métodos que encapsulará el delegado.
    Clase objeto = new Clase();

    // Instancio dos delegados.
    Delegado delegadoUno = objeto.SumarDos;
    Delegado delegadoDos = objeto.MultiplicarPorDos;

    // Ambos tipos de asignación son válidos.
    Delegado delegadoMultidifusion = delegadoUno + delegadoDos;
    delegadoMultidifusion += objeto.ElevarAlCuadrado;

    Console.WriteLine($"Número de métodos referenciados: {delegadoMultidifusion.GetInvocationList().Length}\n");

    Console.WriteLine("Métodos referenciados:\n");

    foreach (Delegate delegado in delegadoMultidifusion.GetInvocationList())
    {
        Console.WriteLine(delegado.Method.Name); 
    }
}
```

La salida del código anterior:

```
Número de métodos referenciados: 3

Métodos referenciados:

SumarDos
MultiplicarPorDos
ElevarAlCuadrado
```

## Resumen
<iframe width="560" height="315" src="https://www.youtube.com/embed/3R_bw_MtAGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
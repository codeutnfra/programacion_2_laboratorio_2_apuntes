---
title: Apuntes - Clases y métodos estáticos
sidebar_label: Clases y métodos estáticos
slug: /clases/estaticos/apuntes/metodos-estaticos
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Principio DRY
El principio **Don't repeat yourself (DRY)** ("No te repitas", en español) fue introducido por primera vez en el libro *["The Pragmatic Programmer" escrito por Andy Hunt y Dave Thomas](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer)* y lo definieron así: 

> *"Toda **pieza de conocimiento** debe tener una representación **única**, **inequívoca** y **fidedigna** dentro de un sistema."*

Desarmemos esta definición para entenderla. 

#### Pieza de conocimiento
Puede referirse a una funcionalidad precisa dentro del contexto de negocio de la aplicación o un algoritmo concreto. 

Por ejemplo, dentro del contexto del negocio bancario no es lo mismo hacer una transferencia de dinero que establecer un plazo fijo. Tampoco es lo mismo una operación de compra de dólares que una operación de venta. Cada una de estas son operaciones están asociadas a un conocimiento puntual dentro del negocio. 

#### Única
No debe existir otra representación de la misma pieza de conocimiento.

#### Inequívoca
Que no admite más de una interpretación. Solamente puede ser interpretada, entendida o explicada de una manera, en un único sentido y sin posibilidad de duda o equivocación. 

#### Fidedigna
Debemos poder confiar que es correcta.

*Dave Thomas* también insiste en que *DRY* no se trata solamente de la duplicación de código.

> *"El conocimiento de un sistema es más que sólo código. Se refiere también a esquemas de base de datos, casos de prueba, el sistema de implementación e incluso a la documentación."*

La idea del principio *DRY* es simple: **Cuando ocurra un cambio no deberíamos necesitar actualizar múltiples cosas en paralelo**. Si el conocimiento está duplicado en el código y necesitamos hacer un cambio, podríamos olvidar hacer las modificaciones en todos lados. En la documentación, podría conducir a malas interpretaciones, confusión y, en última instancia, implementaciones incorrectas.

:::note Información

A las soluciones que no cumplen el principio *DRY* se las llama ***WET*** que es un acrónimo interpretado de fromas alternativas como *"write everything twice"* (escribir todo dos veces), *"write every time"* (escribir todo el tiempo), *"we enjoy typing"* (disfrutamos teclear) o *"waste everyone's time"* (gastar el tiempo de todos). 

:::

## Métodos estáticos
Cuando programamos podemos encontrarnos escribiendo las mismas sentencias una y otra vez a lo largo del código. Para evitar esto, podemos trasformar esas sentencias duplicadas en un método. 

Los **métodos estáticos** son pequeñas piezas de código que se encargan de realizar una tarea concreta. También se los suele llamar como ***métodos de clase***.

Por ejemplo, dentro de una aplicación financiera podríamos tener un método que realice el cálculo de impuestos y reutilizar esa funcionalidad en varios lugares sin necesidad de rescribir el algoritmo una y otra vez. 
 
Al igual que los programas, los métodos estáticos usualmente tienen datos de entrada y de salida. A menudo se los describe como *cajas negras*, donde ingresamos materias primas por un agujero y salen productos manufacturados desde otro.

Si están bien diseñados, una vez creados los métodos no debería preocuparnos cómo resuelven la tarea, sólo el *qué hacen*.

Los métodos estáticos están compuestos de una firma que define el *qué hace* y de un cuerpo que contiene la implementación, el *cómo lo hace*.

La firma del método lo define y funciona como una declaración del mismo. Su sintaxis es la siguiente:

> `Modificador de acceso` `Otros modificadores` `Tipo de retorno` `Identificador` (`Parámetros de entrada`)

**Modificador de acceso**: Indica y limita desde donde se puede interactuar con un método u otros tipos de miembros. Por defecto es `private`.

| Modificador | Descripción                                                           |
| :---------- | :-------------------------------------------------------------------- |
| `public`    | Accesible desde cualquier parte.                                      |
| `private`   | Sólo accesible desde dentro del mismo tipo.                           |
| `internal`  | Sólo accesible desde dentro del mismo ensamblado / proyecto.          |
| `protected` | Sólo accesible desde dentro del mismo tipo o tipos derivados (hijos). |

**Otros modificadores**: Existen otros modificadores que iremos viendo a lo largo de la cursada y se ubican después del modificador de acceso. Por ejemplo, el modificador `static` marca al método como estático. Estos modificadores son opcionales. 

**Tipo de retorno**: Se debe indicar el tipo de dato que retorna el método, puede ser cualquier tipo soportado por la plataforma. Si no retorna nada se debe colocar `void`.

**Identificador**: Nombre del método. Debe ser un verbo con notación *PascalCase*.

**Parámetros de entrada**: Van entre paréntesis después del identificador y separados por coma. Si un método no recibe argumento deben ir los paréntesis vacíos. Cada parámetro debe estar compuesto por el tipo de dato y seguido el nombre del parámetro `(TipoParametro1 nombreParametro1, TipoParametro2 nombreParametro2)`. Los nombres de parámetros deben ser sustantivos con notación *camelCase*. 

Seguido de la firma viene el cuerpo, el cual consiste en un bloque de código encerrado entre llaves. Dentro del cuerpo del método podemos tener distintos tipos de sentencias, incluyendo de selección e iteración. Finalmente, para retornar algún valor se debe usar la palabra reservada `return`.

```csharp
public static double ConvertirCelsiusAFahrenheit(string temperaturaCelsius)
{
    // Convierte a double para realizar cálculos.
    double celsius = Double.Parse(temperaturaCelsius);

    // Convierte grados Celsius a Fahrenheit.
    double fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}
```

Para invocar un método estático se debe anteponer el nombre de la clase que lo contiene, seguido de un punto y finalmente el nombre del método con sus argumentos entre paréntesis.

```csharp
/* Llamo al método estático CotizarVentaDolares de la clase Cotizador.
 Le paso entre paréntesis el único argumento que recibe, que es el monto de dólares a vender.

 El método retorna un valor de tipo decimal que es el monto en pesos. 
 Lo guardo en una variable. 
*/
static void Main(string[] args)
{
    decimal pesos = Cotizador.CotizarVentaDolares(100);
}
```

[//]: # "### Buenas prácticas a la hora de escribir métodos"

### Refactorizar
Muchas veces empezamos escribiendo nuestro código de manera desordenada, con sentencias duplicadas y nombres poco descriptivos. Esto nos pasa a todos los desarrolladores. Escribir código es como escribir un libro o un artículo, los primeros bocetos serán un conjunto de ideas desordenadas que se van mejorando de forma iterativa hasta llegar a la calidad de escritura del material final.

La **refactorización (*refactoring*)** es una técnica de la ingeniería de software para reestructurar un código fuente, alterando su estructura interna sin cambiar su comportamiento externo. Esta técnica consiste en modificar el código fuente para mejorar su consistencia interna y su claridad.

La refactorización no arregla errores ni añade funcionalidad, sólo mejora la comprensión, estructura y diseño del código. 

Esta técnica debe ser parte del día a día de un buen desarrollador, cada pequeña mejora aporta a una restructuración significa del código que facilita su posterior mantenimiento y modificación. 

:::note Información

La referencia más notable sobre refactorización es el libro ["Refactoring. Improving the Design of Existing Code."](https://martinfowler.com/books/refactoring.html) de los ingenieros [Martin Fowler](https://es.wikipedia.org/wiki/Martin_Fowler) y [Kent Beck](https://es.wikipedia.org/wiki/Kent_Beck).

:::

### Documentar métodos
Si escribimos `///` sobre un método generaremos la documentación XML de C# que nos permitirá documentar qué hace el método, qué recibe y qué retorna.

```csharp
/// <summary>
/// Cotiza la venta de un monto de dólares dado, retornando el costo en pesos.
/// </summary>
/// <param name="montoDolaresAVender">Cantidad de dólares que se desean vender.</param>
/// <returns>Costo en pesos de la venta.</returns>
public static decimal CotizarVentaDolares(decimal montoDolaresAVender)
{
    decimal montoEnPesos = montoDolaresAVender * pesosPorDolarVendido;

    return montoEnPesos;
}
```

`summary`: En esta sección se debe escribir un resumen de lo que hace el método

`param`: Deberá haber tantas etiquetas `param` como argumentos reciba el método. Cada etiqueta referirá al nombre del parámetro de entrada a través de la propiedad `name` y deberá contener una descripción de qué se espera como argumento de ese parámetro. 

`returns`: Acá se debe agregar una descripción sobre lo que retorna el método.

La tecnología *IntelliSense* de Visual Studio levantará los comentarios y mostrará la información como ayuda cuando tratemos de invocar al método.

:::note Información

Podés leer más sobre la documentación XML de C# en el siguiente artículo: [Recommend XML tags for C# documentation comments](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags)

:::

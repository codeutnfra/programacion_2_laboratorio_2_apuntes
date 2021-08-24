---
sidebar_label: Introducción a C#
slug: /clases/introduccion/apuntes/introduccion-c-sharp
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Introducción a C#
Durante nuestro viaje a través de las características comunes de los lenguajes de alto nivel y la programación orientada a objetos nos acompañará el lenguaje de programación C#. **C#**  (pronunciado 'si sharp' en inglés) es un lenguaje de programación diseñado para generar programas sobre la plataforma .NET. 

Tal vez algunas de las características de este lenguaje les parezcan similares a otros lenguajes que conozcan, y están en lo correcto. El equipo de C#, desde sus inicios, no dudó en tomar grandes ideas de otros lenguajes y reformarlas para incorporarlas a C#. Las principales influencias han sido Java (sobre todo en los inicios), y más cerca en el tiempo el mismísimo F#. También podemos encontrar similitudes con C, C++ y JavaScript. 

Fue diseñado por el ingeniero de Microsoft [Anders Hejlsberg](https://es.wikipedia.org/wiki/Anders_Hejlsberg), quien también está involucrado en el desarrollo de Typescript desde 2012. 

## Características de C#
#### Compilación híbrida
Para construir programas con C# se requiere de un **compilador** para traducir todo el código fuente a un lenguaje que permita ejecutar la aplicación en una computadora. C# se compila primero a un lenguaje intermedio y posteriormente al ejecutarse es recompilado a lenguaje nativo/máquina. 

Esto se contrapone a los lenguajes cuyo código fuente es ejecutado línea a línea y en tiempo de ejecución por un **intérprete**.

#### Orientado a objetos
El lenguaje ofrece una serie de características orientadas a objetos como soporte para herencia, polimorfismo y encapsulamiento. El **paradigma de programación orientada a objetos** se enfoca en en las relaciones entre clases y objetos. Profundizaremos este tema durante la cursada. 

#### Orientado a componentes
También presenta características que permiten el **desarrollo basado en componentes**. Un componente de software individual es un paquete de software o un módulo que encapsula un conjunto de datos o funciones relacionadas. Se trata de construir piezas de software débilmente acopladas (poco dependientes entre si), permitiendo la reutilización e intercambio de las mismas. 

#### Seguridad de tipos
Es un lenguaje principalmente de tipado estático.

Recordemos la diferencia entre tipado estático y tipado dinámico.

__Tipado estático__ → Decimos que un lenguaje es de tipado estático cuando los tipos de las variables tienen que definirse antes de compilar el programa.
__Tipado dinámico__ → Decimos que un lenguaje es de tipado dinámico cuando los tipos de las variables se definen durante la ejecución del programa.

C# cuenta con características que permiten trabajar con tipado dinámico, pero no es lo más común. 

#### Garbage Collection
Está integrado un programa especial que se encarga de la liberación de memoria no utilizada en el segmento heap. A este programa se lo conoce como **Garbage Collector** y nos evita tener que programar explícitamente instrucciones para la administración de memoria. Esto facilita el desarrollo y genera beneficios de seguridad y eficiencia.

#### Sistema de tipos unificado
Todos los tipos de datos en C#, incluyendo los primitivos (como `int` o `double`), heredan de la clase `System.Object`. Esto significa que todos los tipos de dato tienen una serie de operaciones/funcionalidades en común. Los valores de cualquier tipo pueden ser almacenados, transportados y operadores de una manera consistente. 
#### Case sensitive
C# es un lenguaje que distingue mayúsculas de minúsculas. No es lo mismo una variable llamada *numero* a una llamada *Numero*.

## Gramática de C#
Los lenguajes de computación, al igual que los lenguajes humanos, tienen sintaxis y semántica.

La **sintaxis** es una serie de reglas que define las combinaciones correctas de símbolos y el orden para formar sentencias y expresiones válidas. En otras palabras, define cómo debe estar escrito y estructurado un lenguaje para construir sentencias válidas. 

Algunos ejemplos de sintaxis de C# son terminar las sentencias con un punto y coma, o encerrar las expresiones condicionales de un bloque if dentro de paréntesis. 

Si la sintaxis es inválida el programa no compila. 

El **vocabulario** del lenguaje son una serie de palabras reservadas y operadores que sirven para construir sentencias y expresiones siguiendo las reglas de sintaxis. 

La **semántica** es el signicado que surge de la combinación de esas sentencias y expresiones con una sintaxis válida. ¿Qué instrucción generan a la computadora? ¿tiene sentido lógico?.

Por ejemplo, en español la oración *"Él tomar agua"* tiene una sintaxis incorrecta pero una semántica que se puede inferir. Por otro lado, en la oración *"Él toma arroz"* la sintaxis es correcta pero no la semántica, el significado no es coherente.

Analicemos el siguiente fragmento de código.

```csharp
if (condicion)
{
    Console.WriteLine("Entiendo sintaxis y semántica.");
}
else
{
    Console.WriteLine("No entiendo nada.");
}
```

Entre los elementos de sintaxis podemos identificar empezar el bloque con la palabra reservada `if` seguida de la expresión condicional entre paréntesis, el uso de llaves y la terminación de la sentencia `Console.WriteLine` con `;`. Si pusieramos el if sin paréntesis o nos faltara una de las llaves o nos olvidáramos de poner el punto y coma, el programa no compilaría ya que la sintaxis es inválida. 

De la semántica se desprende que si la expresión condicional se cumple (es verdadera) entonces se mostrará en la salida de la consola la frase *"Entiendo sintaxis y semántica"*, de lo contrario mostrará *"No entiendo nada"*.

### Sintaxis de C#
#### Sentencias
Cuando escribimos en español, marcamos el fin de una oración con un punto. Una oración se compone de múltiples palabras y frases con un orden específico. Los lenguajes de programación también tienen reglas de sintaxis. 

C# indica el fin de una declaración con un punto y coma. Una **declaración (*statement*)** puede estar compuesta de múltiples **variables** y **expresiones (*expressions*)**. En el siguiente ejemplo, `sueldoNeto` es una variable y `sueldoBruto - aportes - impuestos` es una expresión compuesta de 3 **operandos** (`sueldoBruto`, `aportes` y `impuestos`) y los **operadores** `-`. 

```csharp
decimal sueldoNeto = sueldoBruto - aportes - impuestos;
```

El orden de los operadores y los operandos importa, si los cambiaramos de lugar daría un resultado completamente distinto. 

#### Comentarios
Los comentarios le indican al compilador que ignore su contenido. Permite realizar aclaraciones o deshabilitar código temporalmente. 

Para realizar un comentario en C# utilizamos la doble barra `//`. Lo que siga a la doble barra será ignorado por el compilador hasta el fin de la línea.

```csharp
// Falta descontar los aportes.
decimal sueldoNeto = sueldoBruto - impuestos;
```

Si queremos escribir un comentario multi-línea se utiliza `/*` al inicio y `*/` al final, todo el contenido entre esos dos símbolos será ignorado por el compilador. 

```csharp
/* 
    Estamos en programación II de UTN Fra. 

    string saludo = "¡Hola Mundo!"
    
    Aprendemos a realizar comentarios en C#.
*/
```

:::note Información

El atajo de teclado de Visual Studio para realizar comentarios es `CTRL + K + C`, y para deshacerlos `CTRL + K + U`. 

:::

#### Bloques
En C# para escribir un bloque de código se utilizan llaves `{}`. Si hacemos una comparación con el lenguaje humano, lo bloques serían análogos a los párrafos. Los bloques empiezan con una declaración que define el contenido del bloque. 

En el siguiente ejemplo vemos que tenemos 3 bloques anidados. Uno definido por la palabra clave `namespace`, otro por `class` y el último está definido por la firma del *método* (similar a un función).

```csharp
using System; // El ; indica el fin de la declaración

// 'namespace' define el tipo de bloque. 'Hola_Mundo' es un nombre o identificador para ese bloque. 
namespace Hola_Mundo
{ // La llave de apertura { indica el inicio de un bloque.
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!"); // Otra declaración.
        }
    }
} // La llave de cierre } indica el fin de un bloque.
```
### Vocabulario de C#
El vocabulario de C# está compuesto de **palabras clave (*keywords*)**, **símbolos** y **tipos**.

Entre las palabras claves encontraremos `using`, `namespace`, `class`, `static`, `int`, `string`, `double`, `bool`, `if`, `switch`, `break`, `while`, `do`, `for`, `foreach` y más. 

Entre los símbolos trabajaremos con `"`, `'`, `+`, `-`, `*`, `/`, `%`, `@`, `$`,entre otros.

#### Métodos, los verbos de C#
Los verbos en español representan acciones como *correr*, *jugar*, *saltar*. De la misma forma, los **métodos** en C# representan acciones que podrán ser ejecutadas por alguna parte del programa. Son similares a las funciones en otros lenguajes. 

```csharp
using System; 

namespace Hola_Mundo
{ 
    class Program
    {
        // Acá comienza la declaración del método Main.
        static void Main(string[] args)
        {
            /* Acá se invoca/llama al método WriteLine 
            y se le pasa como argumento (dato o valor de entrada) un string. 
            */
            Console.WriteLine("Hello World!"); 
        }
        // Acá finaliza la declaración del método Main.
    }
} 
```

##### Nombres de métodos
Los nombres de los métodos deben ser *verbos* escritos con **notación Pascal (*Pascal Case*)**. La notación Pascal, también conocida como Upper Camel Case, indica que la primera letra de cada palabra dentro de un nombre compuesto debe estar en maýuscula.  

Ejemplos:
*MostrarDatos()*
*ConfirmarCompra()*
*RechazarPedido()*
*CancelarOperacion()*

##### Método Main
El método `Main` es el **punto de entrada (entry point)** de todos los programas en C#, es decir, el primer método en ejecutarse.

Analicemos su firma:
* `static`: Es un modificador que permite ejecutar un método sin tener que instanciar a una variable (sin crear un objeto). El método `Main` debe ser estático. 
* `void`: Indica el tipo retorno del método. `void` se utiliza cuando el método no retorna ningún valor. No necesariamente tiene que ser void, se puede especificar otro tipo de retorno.
* `string[] args`: Es un array de tipo `string`. Si la aplicación de consola recibe argumentos para su ejecución, los valores estarán dentro de este array. Este parámetro es opcional.

#### Tipos, atributos y variables. Los sustantivos de C#.
En español los sustantivos son palabras que se utilizan para denominar seres, entidades u objetos. 

Por ejemplo, *Federico* es el nombre de un profesor. La palabra "profesor" nos indica el papel que juega *Fede* dentro del contexto de la universidad. Podemos decir que *Fede* es de tipo `Profesor`. `Profesor` no es el único tipo dentro del contexto de la facultad, también están `Alumno`, `Secretario`, `Coordinador`, `LibretaUniversitaria`, `Materia`, `Aula`, `Nota`, entre otros. Los **tipos** son sustantivos que categorizan cosas. 

`legajoDocente` y `antiguedad` son características que forman parte de lo que describe a *Fede* como profesor, son **atributos**.

Por otra parte, *Fede* no es el único ser de tipo `Profesor`, también están *Lucas*, *Ezequiel* y *Mauricio*. Cada uno de estos seres o manifestaciones concretas de un tipo son **variables**, sustantivos que se refieren a una cosa específica.  

## Trabajando con variables
Todas las aplicaciones procesan datos de algún tipo. El origen de los datos puede ser variado y pueden ser almacenados temporalmente en la memoria asignada al programa en ejecución. Cuando el programa finaliza se pierden los datos en memoria. 

Las variables se utilizan para almacenar los datos en memoria y así poder procesarlos. 

En C# debemos definir un tipo de dato apropiado a la hora de declarar variables. El tipo de dato definirá un conjunto de métodos y atributos para trabajar con ese valor, así como el tamaño que podrá ocupar el valor en la memoria.

Las variables locales, es decir aquellas declaradas dentro de métodos, existen sólo durante la ejecución de ese método. Si se trata de tipos de valor, la memoria es liberada inmediatamente al abandonar el método. Si se trata de tipos de referencia dependerán del proceso de *garbage collection*. 

Para declarar una variable se debe colocar el tipo de dato seguido de un identificador (nombre):

```csharp
string nombre;
int horasAsignadas;
```

### Operadores de asignación
Para asignar un valor a la variable se utiliza el operador de asignación `=`. Lo que está a la derecha del operador se lee y almacena en la variable de la izquierda.

```csharp
string nombre = "Lautaro";
int horasTrabajadas = 8;
int precioPorHora = 100;
int costoTrabajo = horasTrabajadas * precioPorHora;

Console.WriteLine("{0} trabajó {1} horas. El costo por el trabajo es de ${2}.", nombre, horasTrabajadas, costoTrabajo);
```

La salida del código anterior es:

```
Lautaro trabajó 8 horas. El costo por el trabajo es de $800.
```

### Constantes
Las **constantes** representan valores *inmutables*, es decir que sus valores se definen en tiempo de compilación y no cambian durante el resto de la vida del programa.

Se declaran antecediendo el modificador `const` al tipo de dato y al identificador de la constante.

```csharp
const decimal IVA = 0.21M;

decimal precioBruto = 100M;
decimal precioNeto = precioBruto + precioBruto * IVA;

Console.WriteLine("El precio bruto es {0} y aplicando IVA queda en {1}.", precioBruto, precioNeto);
```

La salida del código anterior es:

```
El precio bruto es 100 y aplicando IVA queda en 121,00.
```

### Nombres de variables y atributos
Los nombres de las variables y atributos deben ser *sustantivos* escritos con **notación Camel (*Camel Case*)**. La notación Camel, también conocida como Lower Camel Case, indica que la primera letra de un nombre va en minúscula y luego cada palabra adicional debe empezar en mayúscula.  

Ejemplos:
*edad*
*resultado*
*valorMaximo*
*cotizacionUsdArs*
*materiasAsignadas*
*numerosPrimos*

#### Operador nameof
El operador `nameof()` retorna el nombre de una variable, tipo o atributo como una cadena de texto. 

```csharp
string nombre = "Lautaro";

Console.WriteLine("La variable {0} contiene el valor {1}.", nameof(nombre), nombre);
```

La salida del código anterior es:

```
La variable nombre contiene el valor Lautaro.
```
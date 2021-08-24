---
sidebar_label: Common Type System
slug: /clases/introduccion/apuntes/common-type-system
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Common Type System
C# por defecto sólo trae algunas palabras y, estrictamente, no define ningún tipo. Todos los tipos que usamos en C# son provistos por el entorno de .NET. Durante la cursada aprenderemos sobre muchos de los tipos que tenemos disponibles en la plataforma y también crearemos nuevos.

El **Common Type System (CTS)** define un conjunto de tipos de datos común a todos los lenguajes soportados por .NET. 
* Establece un marco de herramientas que habilita la ejecución de los distintos lenguajes de la plataforma. 
* Provee un modelo orientado a objetos. 
* Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos.
* Provee una biblioteca que contiene los tipos primitivos básicos (Boolean, Int32, Byte, Char, etc). 
* Define tipos de dato en dos categorías: de valor y de referencia.

## Tipos de valor y tipos de referencia
Existen dos segmentos o categorías de memoria: la **pila (*stack memory*)** y el **montón (*heap memory*)**. La memoria stack es más rápiida pero limitada en tamaño. La memoria heap es más lenta pero más abundante.

:::warning Stack Overflow

La famosa excepción Stack Overflow se lanza al llenarse el espacio de la memoria stack, que es muy limitado. Suele suceder cuando se producen llamadas recursivas accidentales o nos encontramos dentro de un loop infinito. 

:::

Los **tipos de valor (*value types*)** son tipos de dato representados por su valor real. Si son asignados a una variable, esa variable obtendrá una nueva copia del valor. **Todos los tipos de valor se almacenan en la pila.** 

Los **tipos de referencia (*reference types*)**, al contrario, son tipos de dato representados por una referencia que apunta a un sector de memoria donde se encuentra el valor real. Si son asignados a una variable, esa variable almacenará la referencia y apuntará al valor original. No se realiza ninguna copia del valor. **Todos los tipos de referencia se almacenan en el montón.** 

### Categorías de tipos
.NET define cinco categorías de tipos de datos.

| Categoría       | Palabra clave   | Valor/Referencia   |
| --------------- | --------------- | ------------------ |
| **Clases**      | ***class***     | Tipo de referencia |
| **Estructuras** | ***struct***    | Tipo de valor      |
| **Enumerados**  | ***enum***      | Tipo de valor      |
| **Interfaces**  | ***interface*** | Tipo de referencia |
| **Delegados**   | ***delegate***  | Tipo de referencia |

Entraremos en el detalle de cada una de estas categorías a lo largo de la cursada. 

## Aliases
Algunas de las palabras clave de C# como `double`, `int` o `string` son **alias (*aliases*)** que representan tipos proveidos por la implementación de la plataforma .NET donde se ejecuta C#. Por ejemplo, `int` es un alias para el tipo `System.Int32`.

## Literales
Los **valores literales (*literal value*)** son una notación que representa un valor fijo. Dependiendo el tipo de dato, existe una notación diferente para los literales. 

```csharp
string saludo = "Hola Mundo"; // "Hola Mundo" es un literal de texto que se está asignando a la variable 'saludo' de tipo string.

int numero = 5; // 5 es un literal numérico que se está asignando a la variable 'numero' de tipo entero.
```

## Caracteres
Cuando trabajamos con un caracter individual, como podría ser una letra, el tipo a utilizar es `char`. 

Los literales de este tipo deben estar encerrados por comillas simples `'`.

Los `char` son tipos de valor.

```csharp
char simbolo = '$';
char letra = 'Z';
char numero = '1'; // '1' se almacena como tipo char, no es numérico.
```

## Strings
Cuando trabajamos con texto formado por múltiples caracteres el tipo a utilizar es `string`. 

Los literales de este tipo deben estar encerrados por comillas dobles `"`.

Los `string` son tipos de referencia. Internamente son arrays de `char`, incluso pueden ser recorridos con un bucle `for` o `foreach`.

Los `string` se pueden concatenar usando el operador `+`.

```csharp
string nombre = "Florencia";
string telefono = "(+54) 9 11-12345-15432";
string contacto = nombre + " tiene el número de teléfono " + telefono;
```

## Tipos numéricos
Los números son datos con los que vamos a realizar alguna operación aritmética (como sumar o multiplicar). Un DNI, un número de teléfono, un legajo, NO son números. 

Todos los tipos numéricos primitivos de C# son tipos de valor.

### Operadores aritméticos
Los **operadores aritméticos** nos permiten realizar operaciones aritméticas sobre una o más variables numéricas. 

| Operador | Nombre         | Ejemplo | Resultado |
| :------- | :------------- | :-----: | :-------: |
| `+`      | Suma           |  4 + 2  |     6     |
| `-`      | Resta          |  4 - 2  |     2     |
| `*`      | Multiplicación |  4 * 2  |     8     |
| `/`      | División       |  4 / 2  |     2     |
| `%`      | Módulo o resto |  4 % 2  |     0     |
| `++`     | Incremento     |   4++   |     5     |
| `--`     | Decremento     |   4--   |     3     |


:::note Información

Para más información sobre los operadores aritméticos, visita la [documentación oficial](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators).

:::

### Operadores de asignación
El operador de asignación se puede combinar con los operadores aritméticos:

```csharp
int numero = 5;

numero += 2; // Es lo mismo que escribir numero = numero + 2;
numero -= 2; // Es lo mismo que escribir numero = numero - 2;
numero *= 2; // Es lo mismo que escribir numero = numero * 2;
numero /= 2; // Es lo mismo que escribir numero = numero / 2;
```

### Enteros
El conjunto de **números reales** se puede dividir en dos subconjuntos: racionales e irracionales. Los **números racionales** son aquellos que pueden expresarse como la división de dos números enteros, los **números irracionales** son todos los demás. A su vez, el conjunto de los racionales se puede dividir en **números enteros** y **números fraccionarios**. 

![Clasificación de los números](/clases/00-introduccion/apuntes/clasificacion-numeros.png)

Los números enteros (sin punto decimal) se representan con los tipos `short`, `int` y `long`. Los enteros positivos incluyendo el cero se conocen como **números naturales** y se representan con los tipos enteros sin signo (***unsigned***) como `ushort`, `uint` y `ulong`.

Los literales de `long` deben ir acompañados del sufijo `L`. Para los enteros no es necesarario un sufijo.

```csharp
uint numeroNatural = 10;

int numeroEntero = -5;

long numeroGrande = 20L;
```

| Palabra clave | Rango                                                      | Tamaño                     | Tipo en .NET    |
| :------------ | :--------------------------------------------------------- | :------------------------- | :-------------- |
| `sbyte`       | *-128* a *127*                                             | Entero de 8-bit con signo  | `System.SByte`  |
| `byte`        | *0* a *255*                                                | Entero de 8-bit sin signo  | `System.Byte`   |
| `short`       | *32.768* a *32.767*                                        | Entero de 16-bit con signo | `System.Int16`  |
| `ushort`      | *0* a *65.535*                                             | Entero de 16-bit sin signo | `System.UInt16` |
| `int`         | *-2.147.483.648* a *2.147.483.647*                         | Entero de 32-bit con signo | `System.Int32`  |
| `uint`        | *0* a *4.294.967.295*                                      | Entero de 32-bit sin signo | `System.UInt32` |
| `long`        | *-9.223.372.036.854.775.808* a *9.223.372.036.854.775.807* | Entero de 64-bit con signo | `System.Int64`  |
| `ulong`       | *0* a *18.446.744.073.709.551.615*                         | Entero de 64-bit sin signo | `System.UInt64` |

### Punto flotante
Los tipos `float` y `double` almacenan números reales fraccionarios representados con notación de punto flotante de precisión simple y doble, respectivamente. En otras palabras, el tipo de dato `double` tiene una precisión dos veces mayor al tipo de dato float.

La representación de **punto flotante (*floating point*)** es una forma de notación científica usada en las computadoras con la cual se pueden representar números reales extremadamente grandes y pequeños de una manera muy eficiente y compacta, y con la que se pueden realizar operaciones aritméticas. 

#### Decimales
Aunque el tipo de dato `double` es bastante preciso, existe un tipo de dato aún más preciso, que es el tipo de dato `decimal`. Es más preciso porque almacena los números como un gran entero y cambia el punto decimal. Por ejemplo `0.1` se almacena como `1` con una nota de cambiar el punto decimal un lugar a la izquierda, `12.75` se almacena como `1275` con una nota de cambiar el punto decimal dos lugares a la izquierda. 

Entonces, si requerimos resultados precisos debemos usar `decimal`, sino debemos usar `float` y `double` que se procesan con mayor velocidad.

El comparar valores de punto flotante con el operador de igualdad puede dar lugar a errores.

```csharp
double a = 0.1;
double b = 0.2;
double resultado = a + b;
bool resultadoEsperado = resultado == 0.3;

Console.WriteLine("La suma de {0} y {1} da {2}. ¿Resultado esperado? {3}", a, b, resultado, resultadoEsperado);
```

La salida del código anterior es:

```
La suma de 0,1 y 0,2 da 0,30000000000000004. ¿Resultado esperado? False
```

En el ejemplo vemos que el resultado de la suma entre `0.1` y `0.2` cuando trabajamos `double` tiene un error de precisión y al comparar nos indica que no es igual a `0.3`.

```csharp
decimal a = 0.1M;
decimal b = 0.2M;
decimal resultado = a + b;
bool resultadoEsperado = resultado == 0.3M;

Console.WriteLine("La suma de {0} y {1} da {2}. ¿Resultado esperado? {3}", a, b, resultado, resultadoEsperado);
```

La salida del código anterior es:

```
La suma de 0,1 y 0,2 da 0,3. ¿Resultado esperado? True
```

Al trabajar con `decimal` no tenemos estos errores.

:::warning Advertencia

No se deben comparar valores `double` usando `==`. El tipo `double` no garantiza precisión porque existen algunos números que no pueden ser representados como valores de punto flotante. 

En 1991, durante la primera guerra del golfo, usar números de punto flotante [le costó la vida a 28 soldados](https://www-users.cse.umn.edu/~arnold/disasters/patriot.html) al no poder rastrear e interceptar un misil con precisión. 

:::

:::tip Buena práctica

Es una buena práctica usar `int` para números enteros y `double` para fraccionarios que no requieran precisión y que no serán comparados a otros valores. Usar `decimal` para dinero y valores donde la precisión es importante. 

:::

#### Notación de literales de punto flotante
Por defecto los literales fraccionarios (con punto decimal) son de tipo `double`. Los literales de `float` deben ir acompañados del sufijo `F`. Los literales de `decimal` deben ir acompañados del sufijo `M`.

```csharp
float numeroFlotantePrecisionSimple = 2.5F;

double numeroFlotantePrecisionDoble = 2.5;

decimal numeroDecimal = 2.5M;
```

### Notación binaria y hexadecimal
C# también permite escribir literales numéricos en binario (base 2) y hexadecimal (base 16). Un literal binario debe empezar con `0b`, mientras que uno hexadecimal con `0x`.

Desde C# 7.0 se puede usar el guión bajo `_` como separador de digitos con el único uso de mejorar la legibilidad del número. 

En el siguiente ejemplo vemos como escribir el valor de dos millones en decimal, binario y hexadecimal.

```csharp
// Notación decimal
int notacionBase10 = 2_000_000; // El _ es una ayuda visual para separar los dígitos. No cumple otra función. 

// Notación binaria
int notacionBase2 = 0b_0001_1110_1000_0100_1000_0000;

// Notación hexadecimal
int notacionBase16 = 0x_001E_8480;
```

Si comparamos las variables con el operador de igualdad `==` observaremos que, al ser el mismo valor pero expresado con diferentes notaciones, la igualdad es verdadera.

## Tipos booleanos
Los tipos booleanos sólo pueden contener dos valores literales `true` o `false`. Se usan principalmente en condiciones de bloques de selección  

```csharp
bool verdadero = true;
bool falso = false;
```

### Operadores de igualdad
Los **operadores de igualdad** retornan un resultado booleano en base a si los operandos comparados son iguales o distintos. 

`==` retornará `true` cuando la igualdad se cumpla, de lo contrario `false`. `!=` `true` cuando la igualdad NO se cumpla y `false` cuando los operandos sean iguales. 

| Operador | Nombre      |                       Ejemplo                        | Resultado |
| :------- | :---------- | :--------------------------------------------------: | :-------: |
| `==`     | Igualdad    |        "Programación II" == "Programación II"        |   true    |
| `!=`     | Desigualdad | "Programación II" != "Laboratorio de Computación II" |   true    |


Los tipos de valor son iguales cuando sus valores son iguales. Los tipos de referencia son iguales cuando apuntan a la misma dirección de memoria. 

### Operadores de comparación
Los **operadores de comparación** también retornan un resultado booleano y sirven para comparar valores numéricos. 

Retornarán `true` cuando la comparación se cumpla, de lo contrario `false`.

| Operador | Nombre          | Ejemplo | Resultado |
| :------- | :-------------- | :------ | :-------: |
| `>`      | Mayor que       | 4 > 4   |   false   |
| `>=`     | Mayor o igual a | 4 >= 4  |   true    |
| `<`      | Menor que       | 4 < 2   |   false   |
| `<=`     | Menor o igual a | 2 <= 4  |   true    |

## Tipo object
Todos los tipos de datos en .NET derivan de un tipo de dato padre, la clase `System.Object`. `object` es un alias de `System.Object`. 

Esto nos permite almacenar en una variable de tipo `object` cualquier valor.

```csharp
object nombre = "Esteban";
object promedio = 9.99;

Console.WriteLine("{0} tiene un promedio de {1}.", nombre, promedio);
```

La salida del código anterior es:

```
Esteban tiene un promedio de 9,99.
```

Si quisiera acceder a la propiedad `Length` de la variable `nombre`, primero tendré que castear el valor a `string`.

```csharp
object nombre = "Esteban";
int longitud = ((string) nombre).Length;

Console.WriteLine("{0} tiene {1} caracteres.", nombre, longitud);
```

La salida del código anterior es:

```
Esteban tiene 7 caracteres.
```

El operador de casteo `(tipo de dato)` le indica al compilador que el valor de una variable es en realidad de otro tipo. En el ejemplo le indicamos que el valor de `nombre` es de tipo `string`. 

Una vez realizado el casteo podemos acceder a los atributos y métodos del tipo `string`. 

:::warning Advertencia

No es una buena práctica usar el tipo `object`. C# es un lenguaje fuertemente tipado y se debe trabajar aprovechando las ventajas de definir tipos de datos concretos, usar `object` afecta la mantenibilidad del código y el rendimiento. 

:::

## Tipo dynamic
`dynamic` es otro tipo especial que también puede almacenar cualquier valor. La diferencia con `object` radica en que nos permite utilizar los atributos y métodos del valor almacenado sin necesidad de un casteo. 

```csharp
dynamic nombre = "Esteban";
dynamic promedio = 9.99;
int longitud = nombre.Length;

Console.WriteLine("{0} tiene {1} caracteres y un promedio de {2}.", nombre, longitud, promedio);
```

La salida del código anterior es:

```
Esteban tiene 7 caracteres y un promedio de 9,99.
```

Estos tipos no se validan en tiempo de compilación, sino que lo hará el CLR durante en tiempo de ejecución. Por este motivo el *IntelliSense* de Visual Studio puede no funcionar para estas variables. 

:::warning Advertencia

No se debe usar el tipo `dynamic` salvo que surja una necesidad concreta. El uso de este tipo afecta la mantenibilidad del código y el rendimiento. 

:::

## Inferencia de tipos
El modificador `var` sirve para declarar variables para las cuales el tipo de dato será determinado por el valor que se le está asignando. Es una característica que nos quita la necesidad de tener que especificar los tipos en las declaraciones, eso sí, siempre que estemos asignando algún valor a la variable. 

```csharp
var producto = "Alfajor Capitán del Espacio";

Console.WriteLine("{0} es de tipo {1}", nameof(producto), producto.GetType().Name);

var capas = 3;

Console.WriteLine("{0} es de tipo {1}", nameof(capas), capas.GetType().Name);

var precio = 99.99M;

Console.WriteLine("{0} es de tipo {1}", nameof(precio), precio.GetType().Name);

var peso = 40F;

Console.WriteLine("{0} es de tipo {1}", nameof(peso), peso.GetType().Name);

var stock = 1000L;

Console.WriteLine("{0} es de tipo {1}", nameof(stock), stock.GetType().Name);

var glaseado = true;

Console.WriteLine("{0} es de tipo {1}", nameof(glaseado), glaseado.GetType().Name);

var codigoGusto = 'C';

Console.WriteLine("{0} es de tipo {1}", nameof(codigoGusto), codigoGusto.GetType().Name);
```

La salida del código anterior es:

```
producto es de tipo String
capas es de tipo Int32
precio es de tipo Decimal
peso es de tipo Single
stock es de tipo Int64
glaseado es de tipo Boolean
codigoGusto es de tipo Char
```

El método `GetType` es heredado de la clase `System.Object` para todos los tipos de dato y permite obtener información en tiempo de ejecución sobre el tipo almacenado en la variable. 

:::warning Advertencia

Algunos desarroladores consideran que usar `var` afecta negativamente la legibilidad del código. **Evitá usarlo durante la cursada.**

:::

## Valores por defecto
Por defecto los tipos de valor contienen del valor `0` si son numéricos, `false` si son de tipo `bool` y `''` si son de tipo `char`. Por otra parte, si no se inicializan, las variables de tipos de referencia contendrán el valor `null` que indica que esa variable no apunta a ninguna dirección de memoria.

El operador `default` recibe como argumento un tipo de dato y nos devuelve el valor por defecto de ese tipo. 

```csharp
Console.WriteLine("Valor por defecto de enteros: {0}", default(int));
Console.WriteLine("Valor por defecto de flotantes: {0}", default(double));
Console.WriteLine("Valor por defecto de booleanos: {0}", default(bool));
Console.WriteLine("Valor por defecto de fechas: {0}", default(DateTime));
Console.WriteLine("Valor por defecto de strings: {0}", default(string));
Console.WriteLine("Valor por defecto de chars: {0}", default(char));
```

La salida del código anterior es:

```
Valor por defecto de enteros: 0
Valor por defecto de flotantes: 0
Valor por defecto de booleanos: False
Valor por defecto de fechas: 1/1/0001 00:00:00
Valor por defecto de strings:
Valor por defecto de chars:
```

## Tamaño de tipos
El operador `sizeof()` recibe como argumento un tipo de dato y retorna el número de bytes que usa ese tipo en memoria. 

Además, algunos tipos cuentan con las propiedades `MinValue` y `MaxValue` que retornan el valor mínimo y el valor máximo que puede almacenar una variable de cierto tipo.

```csharp
Console.WriteLine("int usa {0} bytes y soporta un rango de valores entre {1} y {2}.", sizeof(int), int.MinValue, int.MaxValue);
Console.WriteLine("double usa {0} bytes y soporta un rango de valores entre {1} y {2}.", sizeof(double), double.MinValue, double.MaxValue);
Console.WriteLine("decimal usa {0} bytes y soporta un rango de valores entre {1} y {2}.", sizeof(decimal), decimal.MinValue, decimal.MaxValue);
```

La salida del código anterior es:

```
int usa 4 bytes y soporta un rango de valores entre -2147483648 y 2147483647.
double usa 8 bytes y soporta un rango de valores entre -1,7976931348623157E+308 y 1,7976931348623157E+308.
decimal usa 16 bytes y soporta un rango de valores entre -79228162514264337593543950335 y 79228162514264337593543950335.
```

## Conversiones de tipos de datos
### Implicitas
No interviene el programador (no requieren casteo). 

No deberían implicar pérdida de datos.

```csharp
// Los float pueden almacenar números más grandes que los int. 
// No hay pérdida de datos.

float entero = 15; 
```

### Explicitas
Interviene el programador (se quiere un casteo).

Podrían implicar pérdida de datos.

```csharp
// Los double pueden almacenar números más grandes que los int. 
// Además los enteros no guardan los decimales.
// Puede haber pérdida de datos.

int entero = (int)15.2; 
```

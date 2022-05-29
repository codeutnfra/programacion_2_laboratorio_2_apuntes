---
title: Apuntes - Delegados y expresiones lambda
sidebar_label: Expresiones lambda
slug: /clases/delegados/apuntes/expresiones-lambda
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Expresiones lambda
Las expresiones lambda son funciones con una sintaxis diferente que permite utilizarlas en una expresión en lugar de los típicos métodos que son miembros de una clase. 

Permiten crear funciones anónimas. Una **función anónima** es una función que no tiene nombre ni declaración formal. Normalmente se utilizan como argumentos de métodos que tienen delegados como parámetros de entrada.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Z9a-z_lhCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

El **operador lambda `=>`** se utiliza para separar la lista de parámetros del cuerpo del método anónimo. Los parámetros de entrada van a la izquierda del operador lambda y la sentencia o bloque de instrucciones al otro lado.

Cuando el cuerpo del método se compone de una sola sentencia, se denomina **expresión lambda (*lambda expression*)** y no lleva llaves. 

> (parámetros de entrada) => expresión

Por ejemplo, el método siguiente:

```csharp
int CalcularPotenciaAlCuadrado (int numero)
{
    return numero * numero;
}
```

Se puede escribir como una expresión lambda así:

```csharp
n => n * n
```

El ejemplo anterior se lee como "usando `n` como el parámetro de la función, `n` va al resultado de `n * n`":

Cuando el cuerpo del método es un bloque con una secuencia de sentencias, se denomina **instrucción lambda (*lambda statement*)**. Normalmente no contienen más de dos o tres sentencias, es una buena práctica al usar esta herramienta trabajar con métodos pequeños y concretos. 

> (parámetros de entrada) => { bloque de sentencias }

Por ejemplo, el método siguiente:

```csharp
void Saludar (string nombre, string apellido)
{
    string saludo = $"¡Bienvenido {nombre} {apellido}!";
    Console.WriteLine(saludo);
}
```

Se puede escribir como una expresión lambda así:

```csharp
(n, a) => {
    string saludo = $"¡Bienvenido {nombre} {apellido}!";
    Console.WriteLine(saludo);    
}
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/pKND-M9bFG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Variables externas
Dentro de una expresión lambda podremos usar variables fuera de ese método, pero dentro del alcance que contiene a la expresión lambda.

En el siguiente ejemplo, la variable `contador` es capturada e incrementada por la expresión lambda. `contador` nno es parte del alcance original de la expresión lambda pero sí es parte del método que la contiene. 

```csharp
public void TrabajarConVariablesExternas()
{
    int contador = 0;

    Action contar = () => contador++;
    
    for (int i=0; i<10; i++)
    {
        contar();
    }

    Console.WriteLine("Total = " + contador);
}
```

## Delegados y expresiones lambda
Las expresiones lambda pueden ser convertidas a un tipo delegado. El tipo delegado deberá coincidir con los parámetros y el tipo de retorno de la expresión. 

Si una expresión lambda no retorna un valor, puede ser convertida a un delegado tipo `Action`; de lo contrario, puede ser convertido a uno de los delegados tipo `Func`.

En el siguiente ejemplo, la expresión `x => x * x`, especifica un parámetro llamado `x` y retorna el dicho valor elevado al cuadrado:

```csharp
Func<int, int> elevarAlCuadrado = x => x * x;

Console.WriteLine(elevarAlCuadrado(5));
```

La salida del código anterior es *25*.

Otro ejemplo con una instrucción lambda:

```csharp
Action<string> saludar = nombre =>
{
    string saludo = $"¡Hola {nombre}!";
    Console.WriteLine(saludo);
};

saludar("Mundo");
```

La salida del código anterior es *¡Hola Mundo!*.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FwCOoprd1Jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[//]: # "TODO Ejercicio el comparador"
[//]: # "TODO Ejercicio anonymous"
[//]: # "TODO Ejercicio chat grupal"
[//]: # "TODO Ejercicio LINQ"
[//]: # "TODO Ejercicio Mi propio SORT"
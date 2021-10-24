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
Las expresiones lambda se utilizan para crear funciones anónimas. Una función anónima es una función que no tiene nombre. Normalmente se utilizan como argumentos de métodos que tienen delegados como parámetros de entrada.

El **operador lambda `=>`** se utiliza para separar la lista de parámetros del cuerpo del método anónimo. Los parámetros de entrada van a la izquierda del operador lambda y la sentencia o bloque de instrucciones al otro lado.

Cuando el cuerpo del método se compone de una sola sentencia, se denomina **expresión lambda (*lambda expression*)** y no lleva llaves. 

> (parámetros de entrada) => expresión

Cuando el cuerpo del método es un bloque con una secuencia de sentencias, se denomina **instrucción lambda (*lambda statement*)**. Normalmente no contienen más de dos o tres sentencias, siempre que se trabaja con esta herramienta se trata de métodos pequeños y concretos. 

> (parámetros de entrada) => { secuencia de sentencias }




### Delegados y expresiones lambda
Las expresiones lambda pueden ser convertidas a un tipo delegado. El tipo delegado deberá coincidir con los parámetros y el tipo de retorno de la expresión. 

If a lambda expression doesn't return a value, it can be converted to one of the Action delegate types; otherwise, it can be converted to one of the Func delegate types.

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
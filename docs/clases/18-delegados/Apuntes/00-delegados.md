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

Los delegados son **tipos de referencia**, al instanciarlos podemos asociar su instancia con cualquier método que tenga una firma compatible. A través de la instancia del delegado podemos invocar al método referenciado. 

:::note Nota

En el contexto de la sobrecarga de métodos sólo se comparan los parámetros de entrada, pero no el valor de retorno. Pero en el contexto de los delegados, la firma se compara incluyendo también el tipo de retorno. 

:::

Los delegados se usan para pasar métodos como argumentos de otros métodos, otorgando flexibilidad a la solución. Un ejemplo es el método `Sort` de la clase `List`, al cual se podemos pasar el método que contiene el criterio de comparación para ordenamiento.  

Cualquier método accesible definido en una clase o estructura puede ser asignado al delegado. El método puede ser estático o de instancia. 

### Delegados vs punturos a función
A diferencia de los punteros a función de C y C++, los delegados son completamente orientados a objetos y encapsulan tanto la referencia al método como la instancia a la que pertenece. Además, los delegados cuentan con seguridad de tipos.


### Declaración de delegados
Los delegados se declaran con la palabra reservada `delegate` seguido del tipo de retorno, el nombre del tipo delegado y los parámetros de entrada. Recordemos que los parámetros y el tipo de retorno sólo cumplen la función de definir qué clase de métodos puede referenciar el delegado, conservando la seguridad de tipos que caracteriza al lenguaje. 

A continuación podemos ver un ejemplo. 

```csharp
public delegate int RealizarCalculo(int x, int y);
```

Como cualquier declaración de un tipo de dato, puede ir declarada dentro de namespace o anidado en otro tipo (sólo si tiene una relación muy estrecha con el tipo contenedor).

### Cómo usar delegados
Las posibles formas de declarar, instanciar y utilizar delegados fue cambiando a lo largo de las distintas versiones de c#.

#### C# 1.0
```csharp
// declarar un delegado
public delegate void Delegado(string str);

// Método con la misma firma que el delegado. 
static void Notificar(string nombre)
{
    Console.WriteLine($"Se recibió una notificación para: {nombre}.");
}
```

```csharp
// Instanciar el delegado
Del del1 = new Del(Notify);
```

#### C# 2.0
```csharp
// Instanciar el delegado
Del del1 = Notificar;
```
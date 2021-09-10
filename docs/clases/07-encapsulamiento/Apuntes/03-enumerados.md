---
sidebar_label: Enumerados
slug: /clases/encapsulamiento/apuntes/enumerados
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Enumerados

Un **enumerado** es un **tipo de valor** que define un conjunto de constantes con nombre.

```csharp
public enum Color
{
    Rojo,
    Verde,
    Azul
}
```
De forma predeterminada, los valores miembros del enumerado estan asociados con un numero del tipo `int`. Comienzan con cero y aumentan en uno en el orden que fueron definidos.  Es posible especificar explícitamente los valores de asociados, como se muestra en el ejemplo siguiente:

```csharp
public enum Color
{
    Rojo,
    Verde = 100,
    Azul 
}
```
+ Al miembro del enumerado `Rojo` se le asigna automáticamente el valor cero (ya que no tiene inicializador y es el primer miembro de la enumeración)
+ El miembro del enumerado `Verde` recibe explícitamente el valor 100.
+ Al miembro del enumerado `Blue` se le asigna automáticamente el valor más uno del miembro que lo precede textualmente.


```csharp
class Program
{
   static void Main()
   {
        Console.WriteLine(Color.Rojo);
        Console.WriteLine((Color)100);
        Console.WriteLine((int)Color.Azul);
   }
}

// El ejemplo muestra la siguiente salida:
//    Rojo
//    Verde
//    101
```
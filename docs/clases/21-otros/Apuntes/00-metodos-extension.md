---
title: Apuntes - Métodos de extensión
sidebar_label: Métodos de extensión
slug: /clases/otros/apuntes/metodos-extension
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: 
---
## Métodos de extensión
Los **métodos de extensión** permiten agregar nuevos métodos a tipos de datos existentes. No existe ninguna diferencia entre invocar a un método de extensión y llamar a los métodos realmente definidos en el tipo. 

Usar este mecanismo de extensión tiene la ventaja de poder agregar funcionalidad a tipos de datos que no podemos modificar, como los que provee la base class library. Además, no requiere modificar la definición original ni una relación tan estrecha como la herencia. De todas formas se puede extender cualquier tipo, aunque no sean primitivos ni formen parte de la base class library. 

Se deben declarar dentro de una clase estática y se definen como métodos estáticos, pero se les invoca a partir de una instancia.

```csharp
public static class MiExtension
{
    public static int ContarPalabras(this string str)
    {
        return str.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries).Length;
    }
}
```

El código anterior es la declaración del método de extensión `ContarPalabras`, como vemos se declara como un método estático dentro de una clase estática. 

El primer parámetro especifíca el tipo que está siendo extendido y debe ser precedido por la palabra `this`. En este caso, `this string str` indica que este método extiende al tipo `string`. Cuando el método sea invocado, en el parámetro `str` estará cargada la instancia desde la que se llamó al método. 

```csharp
string s = "Hola Mundo";
int i = s.ContarPalabras();
```

Como vemos en el ejemplo anterior, el método de extensión se debe llamar desde una instancia del tipo extendido y, en este caso, no recibe argumentos. La instancia con el texto "Hola Mundo" será cargada como argumento en el parámetor `str`. 

Si necesitaramos agregar parámetros de entrada al método, podremos hacerlo normalmente seguido del parámetro precedido por `this`.

```csharp
public static class MiExtension
{
    public static int ContarPalabras(this string str, int multiplicador)
    {
        int cantidadPalabras = str.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries).Length;

        return cantidadPalabras * multiplicador;
    }
}
```

En el ejemplo anterior se agrega el parámetro de entrada `multiplicador`. 

Veamos cómo se invoca:

```csharp
string s = "Hola Mundo";
int i = s.ContarPalabras(2);
```

Se provee el argumento para el parámetro de entrada `multiplicador`.
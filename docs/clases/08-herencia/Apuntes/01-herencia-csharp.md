---
sidebar_label: Implementando herencia en C#
slug: /clases/herencia/apuntes/herencia-csharp
hide_table_of_contents: false
hide_title: true
author: Juan Pablo Dos Santos
authorURL: 
---
## Implementando herencia en C#
La herencia en C# es híbrida y soporta los tipos de herencia simple, multi-nivel y jerárquica. No admite herencia múltiple, es decir que cada clase podrá heredar de solo una clase base. 

Para indicar que una clase hereda de otra lo único que tenemos que hacer es, seguido del nombre de la clase derivada, indicar el nombre de la clase base precedido por el símbolo `:`.

En el siguiente ejemplo, la clase `Estudiante` hereda de `Persona` y agrega los atributos `legajo` y `materias` y el método `Estudiar`.

```csharp
public class Estudiante : Persona
{
    private int legajo;
    private List<string> materias;

    public string Estudiar() 
    {   
        return "Estudiando...";
    }
}
```

### ¿Qué se hereda y qué no?
Las clases derivadas heredan todos los miembros de la clase base, salvo los constructores. Eso incluye miembros privados, los cuales se heredan pero no son accesibles desde la clase derivada. 

## Modificador protected

## Constructores y herencia




* ¿Que pasa con los atributos privados de la clase base?, la clase hija los hereda, pero no puede acceder los. En caso de ser necesarios, se deberá definir métodos o propiedades que le den visibilidad a estos atributos.

* ¿Y con los atributos públicos de la clase base? Estos pasan a ser implícitamente parte de la clase hija.

* Al contrario del resto, los constructores no se heredan.
	
* ¿Que pasa si quiero que un atributo de mi clase base sea accesible solo en mis clases hijas? En esta situación entra en juego el modificador de visibilidad protected, al definir atributos con este modificador haremos que este sea visible solo dentro de la relación de herencia. Por lo que para una clase hija el modificador protected es equivalente a public pero para una clase ajena a la relación este modificador es igual al private. 

* ¿Como hago referencia al constructor o a métodos de la clase padre dentro de la clase hija?, utilizando el operador base, así explicitaremos que se hace referencia a la clase padre. 

* Y si quiero que mi clase no pueda ser heredada ¿como hago?, para poder lograr esto, definiremos a la clase con el modificador sealed, de esta manera explicitaremos que nuestra clase no puede tener clases hijas, (es importante recordar que gran parte de las clases son autónomas y no están pensadas para ser heredadas). 
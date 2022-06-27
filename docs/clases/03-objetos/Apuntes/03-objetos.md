---
sidebar_label: Objetos
slug: /clases/objetos/apuntes/objetos
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Objetos

Una clase es como un molde que especifica lo que puede hacer ese tipo. Un objeto es básicamente un bloque de memoria que se ha asignado y configurado de acuerdo con el molde. Un programa puede crear muchos objetos de la misma clase. Los objetos también se denominan instancias y se pueden almacenar en una variable con nombre o en una matriz o colección. Se utilizan estas variables para llamar a los métodos y acceder a las propiedades públicas del objeto. En un lenguaje orientado a objetos como C#, un programa típico consta de varios objetos que interactúan dinámicamente.

### Instancias de una clase

Las instancias de las clases se crean utilizando el operador ``new``. En el ejemplo siguiente, ``Persona`` es el tipo y ``persona1`` y ``persona2`` son instancias u objetos de ese tipo.

```csharp
public class Persona
{
    public string nombre;
    public int edad;

    public Persona(string nombre, int edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Otras propiedadse, metodos...
}

class Program
{
    static void Main()
    {
        Persona persona1 = new Persona("Leopold", 6);
        Console.WriteLine("persona1 Nombre = {0} Edad = {1}", persona1.nombre, persona1.edad);

        // Declaro nueva persona, asigno persona1 .
        Persona persona2 = persona1;

        // Modifico nomebre y edad de persona2, y persona1 también es modificada.
        persona2.nombre = "Molly";
        persona2.edad = 16;

        Console.WriteLine("persona2 Nombre = {0} Edad = {1}", persona2.nombre, persona2.edad);
        Console.WriteLine("persona1 Nombre = {0} Edad = {1}", persona1.nombre, persona1.edad);
    }
}
/*
    Output:
    persona1 Nombre = Leopold Edad = 6
    persona2 Nombre = Molly Edad = 16
    persona1 Nombre = Molly Edad = 16
*/
```

### Identidad de un objeto 

Cuando comparamos la igualdad de dos objetos, primero debemos distinguir si se desea saber si las dos variables representan el mismo objeto en la memoria o si los valores de uno o más de sus campos son equivalentes. 

Para determinar si dos instancias de clase se refieren a la misma ubicación en la memoria (lo que significa que tienen la misma identidad), use el método estático ``Object.Equals`` o ``ReferenceEquals``. ( ``System.Object`` es la clase base implícita para todos los tipos de valor y tipos de referencia).

Para determinar si los valores de los campos en dos instancias de clase son iguales, puede usar el método ``Equals`` o el operador ``==``. Sin embargo, solo úselos si la clase los ha anulado o sobrecargado para proporcionar una definición personalizada de lo que significa "igualdad" para objetos de ese tipo. *Veremos como hacerlo en las proximas clases*.


---
title: Cuestionario - Polimorfismo y clases abstractas
sidebar_label: Cuestionario
slug: /clases/polimorfismo/apuntes/cuestionario
hide_table_of_contents: true
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
### Polimorfismo
1. ¿Dónde reside la definición del método a sobrescribir? ¿Qué palabra clave se usa para definirlo?
2. ¿Dónde reside la implementación del método sobrescrito? ¿Qué palabra clave se usa para implementarlo?
3. ¿La invocación de los métodos sobrescritos (override) se resuelve en tiempo de compilación o ejecución? ¿Y la de los métodos sobrecargados (overload)?
4. ¿Cambia la firma de los métodos cuando los sobrescribimos (override)? ¿Y cuando los sobrecargamos (overload)?
5. ¿Los métodos sobrescritos (override) se encuentran en la misma clase? ¿Y los métodos sobrecargados (overload)?¿Qué es el polimorfismo en el contexto de la programación orientada a objetos?
6. ¿Todos los objetos en C# son polimórficos? ¿Por qué?
7. Según el siguiente código, complete la tabla indicando:
   1. El tipo de la referencia (Persona o Profesor).
   2. El tipo del objeto en tiempo de ejecución (Persona o Profesor).
   3. La salida por consola.

```csharp
public class Persona 
{
    public virtual string Teach() 
    {
        return "Una persona puede enseñar.";
    }
}

public class Profesor : Persona 
{
    public override string Teach() 
    {
        return "Un profesor puede enseñar en un colegio.";
    }
}

public class Program 
{
    public static void Main(string[] args)
    {
        // Caso 1
        Persona persona = new Persona();
        Console.WriteLine(persona.Teach());

        // Caso 2
        Persona otraPersona = new Profesor();
        Console.WriteLine(persona.Teach());
        
        // Caso 3
        Profesor profesor = new Profesor();
        Console.WriteLine(persona.Teach());
    }
}
```

| Objeto            | Tipo de la referencia | Tipo de la instancia en tiempo de ejecución | Texto de la salida por consola |
| ----------------- | --------------------- | ------------------------------------------- | ------------------------------ |
| ***persona***     |                       |                                             |                                |
| ***otraPersona*** |                       |                                             |                                |
| ***profesor***    |                       |                                             |                                |

### Clases y miembros abstractos
1. ¿Qué modificador debo utilizar si quiero declarar un método que **pueda** ser sobrescrito en las clases derivadas?
2. ¿Qué modificador debo utilizar si quiero declarar un método que **deba** ser sobrescrito en las clases derivadas?
3. ¿Qué es una clase abstracta? ¿Cuál es su función?
4. Las clases **no-abstractas** que derivan de una clase abstracta, ¿deben implementar todos sus métodos abstractos? ¿Por qué?
5. Las clases **abstractas** que derivan de una clase abstracta, ¿deben implementar todos sus métodos abstractos? ¿Por qué?
6. ¿Se pueden declarar miembros abstractos en clases **no-abstractas**? ¿Por qué?
7. ¿Para sobrescribir un método se debe heredar de una clase abstracta? ¿Por qué?
8. Marque los campos de la siguiente tabla con SÍ o NO según si la afirmación es verdadera para el tipo de clase:

| Tipo de clase                        | Puede heredar de otras clases (ser derivada) | Puede heredarse de ella (ser base) | Puede instanciarse |
| ------------------------------------ | -------------------------------------------- | ---------------------------------- | ------------------ |
| **Clase normal (sin modificadores)** |                                              |                                    |                    |
| **Clase abstracta (abstract)**       |                                              |                                    |                    |
| **Clase sellada (sealed)**           |                                              |                                    |                    |
| **Clase estática (static)**          |                                              |                                    |                    |

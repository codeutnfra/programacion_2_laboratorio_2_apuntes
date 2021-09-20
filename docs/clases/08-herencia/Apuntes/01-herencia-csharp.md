---
sidebar_label: Implementando herencia en C#
slug: /clases/herencia/apuntes/herencia-csharp
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
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
Las clases derivadas heredan todos los miembros de la clase base, salvo los constructores. Eso incluye miembros privados, los cuales se heredan pero no son accesibles desde la clase derivada. Pensemos que la clase derivada incluye los atributos y métodos de la clase base, por lo tanto también los está herendando, incluso si no los puede ver existen en memoria.  

## Modificador protected
Al definir atributos con el modificador de visibilidad **`protected`** haremos que este sea accesible sólo dentro de la relación de herencia. Por lo que para una clase derivada el modificador `protected` es equivalente a `public`, pero para una clase ajena a la relación este modificador es igual a `private`. 

Existen algunas variantes de este modificador. El modificador **`private protected`** hace que el miembro sólo sea accesible por clases derivadas en el mismo ensamblado (en el mismo proyecto). El modificador **`protected internal`** hace que el miembro sólo sea accesible desde el ensamblado donde se encuentra declarada la clase o por tipos derivados en cualquier ensamblado. 

| Desde donde se llama                   | public | protected | internal | protected internal | private protected | private |
| -------------------------------------- | ------ | --------- | -------- | ------------------ | ----------------- | ------- |
| Dentro de la clase                     | ✔️️      | ✔️         | ✔️        | ✔️                  | ✔️                 | ✔️       |
| Clase derivada (mismo proyecto)        | ✔️      | ✔️         | ✔️        | ✔️                  | ✔️                 | ❌       |
| Clase no derivada (mismo proyecto)     | ✔️      | ❌         | ✔️        | ✔️                  | ❌                 | ❌       |
| Clase derivada (proyecto diferente)    | ✔️      | ✔️         | ❌        | ✔️                  | ❌                 | ❌       |
| Clase no derivada (proyecto diferente) | ✔️      | ❌         | ❌        | ❌                  | ❌                 | ❌       |

## Constructores y herencia	
Si la clase base no tiene un constructor público y sin parámetros, entonces tendremos que realizar una llamada explícita a un constructor de la clase base desde la derivada. Recordemos que los constructores no se heredan. Cuando generemos una instancia del sub-tipo sólo podremos trabajar con los constructores declarados en dicha clase, sin embargo los atributos de la clase base sí se heredan y deberán ser inicializados.

Para hacer esto utilizaremos el operador `:base()` a continuación de la firma del constructor. 

```csharp
public class Persona
{
    private string nombre;
    private string dni;

    public Persona(string nombre, string dni)
    {
        this.nombre = nombre;
        this.dni = dni;
    }
}

public class Estudiante : Persona
{
    private int legajo;

    public Estudiante(string nombreEstudiante, string dni, int legajo) : base(nombreEstudiante, dni)
    {
        this.legajo = legajo;
    }
}

public class Program
{    
    static void Main(string[] args)
    {
        Estudiante estudiante = new Estudiante("Juan Pablo", "11222233", 9999);
    }
}
```

En el ejemplo anterior `Estudiante` hereda `nombre` y `dni` de la clase `Persona` pero no los puede acceder. Debe llamar al constructor de la clase base para que inicialice esos atributos. Para esto utiliza el operador `:base()` al que le pasa, en el mismo orden de los parámetros de entrada del constructor base, los valores que recibió como argumento el constructor de la derivada. 

Veamos paso a paso cómo se ejecuta el código anterior:
1. La ejecución empieza en el entry point (método `Main`) y procesa la sentencia que instancia un nuevo estudiante. 
2. `new Estudiante("Juan Pablo", "11222233", 9999)` invoca al constructor de la clase `Estudiante` inyectando los valores en el mismo orden, primero el nombre, luego el dni y por último el legajo. 
3. El constructor de `Estudiante` pasa los valores que recibió en los parámetros `nombreEstudiante` y `dni` al constructor de `Persona`. Para esto utiliza el operador `:base()`.
4. Se ejecuta el constructor de `Persona` inicializando los atributos `nombre` y `dni`.
5. Luego, la ejecución regresa al constructor de `Estudiante` que inicializa el atributo `legajo` de dicha clase. 
6. Por último, se regresa al método `Main` y se almacena la referencia del objeto que se acaba de instanciar en la variable `estudiante`.
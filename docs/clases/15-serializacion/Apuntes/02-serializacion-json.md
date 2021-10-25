---
sidebar_label: Serialización JSON
slug: /clases/serializacion/apuntes/serializacion-json
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Serialización JSON
**JavaScript Object Notation (JSON)** es un estándar abierto que usa texto de fácil lectura para almacenar y transferir objetos. Se suele utilizar para transferir datos a través de la web. Está compuesto de pares propiedad-valor y arrays. Su sintaxis es de fácil lectura, ya que almacena la información de una manera organizada y fácil de acceder. 

La serialización JSON transforma las propiedades **públicas** de un objeto en una cadena de texto, array de bytes o en un stream que cumpla con la [especificación de JSON](https://datatracker.ietf.org/doc/html/rfc8259). 

## Sintaxis de JSON
Cada objeto en JSON se encuentra encerrado entre llaves (`{}`) y dentro de las mismas se declaran sus propiedades en pares propiedad-valor. La propiedad y su valor se separan por el símbolo `:`. El nombre de cada propiedad se encierra entre comillas dobles. El formato del valor dependerá del tipo de dato, JSON soporta los siguientes tipos:

* **Números**: No llevan comillas. Si son fraccionarios deben llevar el punto decimal (por ejemplo, `123.45`).
* **Cadenas de texto**: Representan secuencias de cero o más caracteres. Deben ir encerradas entre comillas dobles y permiten caracteres de escape.
* **Booleanos**: Pueden ser `true` o `false` sin usar comillas. 
* **`null`**: Representa el valor nulo. No lleva comillas. 
* **Objetos**: Puede haber otros objetos como valores de propiedades. Se encierran entre llaves (`{}`).
* **Arrays**: Puede haber colecciones de valores u otros objetos. Se encierran entre (`[]`).

Cada par propiedad-valor se separa del siguiente por una coma. 

```json
{
    "propiedadTexto": "valor",
    "propiedadNumerica": 20,
    "propiedadBooleana": true,
    "propiedadNula": null,  
    "propiedadObjeto": {},
    "propiedadArray": []
}
```

También admite hacer comentarios utilizando `//`.

```json
// Los objetos se encierran entre llaves que contienen sus propiedades.
// El identificador de cada propiedad se debe escribir entre comillas dobles. 
// Seguido del símbolo : se encuentra el valor de dicha propiedad.  
{
  "nombreCompleto": "Juan Perez", // Los textos van entre comillas dobles.
  "saldo": 29638.59, // Los números van sin comillas dobles.
  "edad": 30, 
  "direccion": { // El valor de una propiedad puede ser otro objeto.
    "calle": "Av. Mitre",
    "numero": 750,
    "codigoPostal": "1870",
    "piso": "2",
    "departamento": null, // null para indicar valores nulos. 
    "localidad": "Avellaneda",
    "provincia": "Buenos Aires",
    "pais": "Argentina"
  },
  "telefonos": // JSON admite arrays que pueden contener valores u objetos encerrados entre corchetes []
  [
    {
        "codigoArea": "011",
        "numero": "42226465",
        "interno": null,
        "esCelular": false // los valores booleanos true/false van sin comillas.
    },
    {
        "codigoArea": "011",
        "numero": "42014133",
        "interno": "116",
        "esCelular": false
    }
  ]
}
```

Como vemos en la propiedad `direccion`, el valor puede ser otro objeto. 

También pueden contener arrays como la propiedad `telefonos`. Los arrays pueden contener múltiples valores u objetos encerrados entre corchetes (`[]`).

## Serializando a JSON
El espacio de nombres `System.Text.Json` provee funcionalidad para serializar y deserializar JSON. Trabajaremos principalmente con la clase `JsonSerializer` la cual expone los métodos `Serialize` para serializar y `Deserialize` para deserializar.

Veamos el siguiente ejemplo donde tenemos la clase `Empleado`.

```csharp
public class Empleado
{
    private string nombreCompleto;
    private DateTime fechaNacimiento;
    private List<Empleado> personalACargo;
    private decimal salario;

    public string NombreCompleto
    {
        get 
        {
            return nombreCompleto;
        }
        set
        {
            nombreCompleto = value;
        }
    }
    
    public DateTime FechaNacimiento
    {
        get 
        {
            return fechaNacimiento;
        }
        set
        {
            fechaNacimiento = value;
        }
    }
    
    public decimal Salario
    {
        get 
        {
            return salario;
        }
        set
        {
            salario = value;
        }
    }

    public Empleado() 
    {
        personalACargo = new List<Empleado>();
    }

    public Empleado(string nombreCompleto, DateTime fechaNacimiento, decimal salario) : this()
    {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.salario = salario;
    }        
}
```

Para serializar a JSON tendremos que usar el método genérico y estático `Serialize` de la clase `JsonSerializer`, que recibe como argumento el objeto a serializar. Este método retorna el objeto serializado como una cadena de texto. 

```csharp
using System;
using System.Text.Json;

namespace Serializacion
{
    public class Program
    {
        public static void Main()
        {
            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);

            string jsonString = JsonSerializer.Serialize(empleado);

            Console.WriteLine(jsonString);
        }
    }
}
```

La salida del código anterior es:

```json
{"NombreCompleto":"Juan Perez","FechaNacimiento":"1990-03-25T00:00:00","Salario":50000}
```

La fecha se serializa como si fuera un texto y por defecto estará en un formato estándar acorde a la norma [ISO-8601](https://es.wikipedia.org/wiki/ISO_8601).

En este caso el JSON de salida se encuentra **minificado**, eso significa que por defecto se remueven todos los espacios en blanco, la indentación y los saltos de línea. Esto tiene como beneficio que la cadena de texto resultante es más liviana.

Si quisieramos verlo indentado y más fácil de leer, podremos usar una sobrecarga del método que recibe un objeto de tipo `JsonSerializerOptions` el cual sirve para configurar las opciones de serialización. Una de esas opciones es la propiedad `WriteIndented`, que si le asignamos el valor `true` provocará que el resultado se encuentre indentado. 

```csharp
using System;
using System.Text.Json;

namespace Serializacion
{
    public class Program
    {
        public static void Main()
        {
            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);

            // Genero el objeto de configuración de la serialización.
            JsonSerializerOptions opciones = new JsonSerializerOptions();
            opciones.WriteIndented = true;

            // Existe una sobrecarga del método Serialize que recibe el objeto de configuración. 
            string jsonString = JsonSerializer.Serialize(empleado, opciones);

            Console.WriteLine(jsonString);
        }
    }
}
```

La salida del código anterior es:

```json
{
  "NombreCompleto": "Juan Perez",
  "FechaNacimiento": "1990-03-25T00:00:00",
  "Salario": 50000
}
```

Para guardar el json en un archivo se puede usar un objeto de tipo `StreamWriter` o la clase `File`, tal como se vio en la [unidad de archivos](../../14-archivos/Apuntes/02-archivos.md).

```csharp
Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);

// Genero el objeto de configuración de la serialización.
JsonSerializerOptions opciones = new JsonSerializerOptions();
opciones.WriteIndented = true;

// Serializo un objeto de tipo Empleado a formato JSON. 
string jsonString = JsonSerializer.Serialize(empleado, opciones);

// Guardo el JSON desde un archivo.
File.WriteAllText("empleado.json", jsonString);
```

Da como resultado:

```json
{
  "Salario": 50000,
  "NombreCompleto": "Juan Perez",
  "FechaNacimiento": "1990-03-25T00:00:00"
}
```

## Deserializando JSON
Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato JSON se debe utilizar el método estático `Deserialize` de la clase `JsonSerializer`.

```csharp
using System;
using System.Text.Json;

namespace Serializacion
{
    public class Program
    {
        public static void Main()
        {
            string jsonString = @"
                                {
                                    ""NombreCompleto"": ""Juan Perez"",
                                    ""FechaNacimiento"": ""1990-03-25T00:00:00"",
                                    ""Salario"": 50000
                                }";

            // Obtengo un objeto de tipo Empleado a partir de un string
            // que contiene un empleado serializado en formato json. 
            Empleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);

            Console.WriteLine($"Nombre: {empleado.NombreCompleto}");
            Console.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");
            Console.WriteLine($"Salario: {empleado.Salario}");
        }
    }
}
```

La salida del código anterior es:

```
Nombre: Juan Perez
Fecha de nacimiento: 25/3/1990 00:00:00
Salario: 50000
```

Se trata exactamente del proceso opuesto. Al método genérico `Deserialize` debemos indicarle el tipo al que queremos deserializar y pasarle como argumento un `string` que contenga el o los objetos en formato JSON.  

Si el texto que intentamos deserializar no se encuentra bien formateado, se lanzará una excepción de tipo `JsonException`.

Para leer el json desde un archivo se puede usar un objeto de tipo `StreamReader` o la clase `File`, tal como se vio en la [unidad de archivos](../../14-archivos/Apuntes/02-archivos.md).

```csharp
// Obtengo el JSON desde un archivo.
string jsonString = File.ReallAllText("empleado.json");

// Deserializo un objeto de tipo Empleado a partir de JSON. 
Empleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);

Console.WriteLine($"Nombre: {empleado.NombreCompleto}");
Console.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");
Console.WriteLine($"Salario: {empleado.Salario}");
```
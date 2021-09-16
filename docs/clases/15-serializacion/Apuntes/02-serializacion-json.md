---
title: Apuntes - Archivos y serialización
sidebar_label: Serialización
slug: /clases/serializacion/apuntes/serializacion
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Serialización
La **serialización** es el proceso de convertir el estado de un objeto a un formato específico con el objetivo de transmitirlo a otro sistema o para almacenarlo en un archivo, en memoria o en una base de datos.

Su propósito principal es guardar el estado del objeto (los valores que tienen sus atributos en ese momento) para recrearlo en algún momento en el futuro. El proceso contrario, recuperar un objeto que fue serializado, se conoce como **deserialización**. 

### Usos de serializar
La serialización permite al desarrollador almacenar el estado de un objeto y recrearlo a necesidad. El objetivo puede ser persistirlo o intercambiar datos con otro sistema. 

Entre sus usos más frecuentes se encuentran:
* Enviar el objeto a una aplicación o sistema externo a través de servicios web u otros sistemas de comunicación.
* 


## Formatos de serialización
Siempre que serializamos lo hacemos a un formato específico, uno que luego pueda ser reinterpretado para rearmar el objeto. Existen docenas de formatos que se pueden especificar, pero los más comunes son **Extensible Markup Language (XML)** y **JavaScript Object Notation (JSON)**.

El formato JSON es más compacto y se suele utilizar en entornos web y mobile. Esto sucede por dos motivos, primero es más liviano y por lo tanto la carga de datos que tiene que viajar por la red es menor, y segundo porque se ha convertido en un estandar al ser el formato de serialización nativo de JavaScript. 

El formato XML contiene más información (es más pesado) pero sigue siendo utilizado principalmente para manejar la comunicación con aplicaciones que tienen cierto tiempo de antiguedad y no soportan la comunicación en otros formatos.

## Serialización XML


## Serialización JSON
El formato **JavaScript Object Notation (JSON)** es un estandar abierto que se suele utilizar para transferir datos a través de la web. 

La serialización JSON transforma las propiedades **públicas** de un objeto en una cadena de texto, array de bytes o en un stream que cumpla con la [especificación de JSON](https://datatracker.ietf.org/doc/html/rfc8259). 


### Serializando a JSON
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
    
    protected decimal Salario
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

El JSON de salida se encuentra **minificado**, eso significa que por defecto se remueven todos los espacios en blanco, la indentación y los saltos de línea. Esto tiene como beneficio que la cadena de texto resultante es más liviana.

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

### Deserializando JSON
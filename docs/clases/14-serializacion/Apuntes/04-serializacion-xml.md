---
sidebar_label: Serialización XML
slug: /clases/serializacion/apuntes/serializacion-xml
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Serialización XML
**Extensible Markup Language (XML)** es un lenguaje de marcado similar a HTML especificado por la [World Wide Web Consortium (W3C)](https://www.w3.org/TR/xml/), un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la [World Wide Web](https://developer.mozilla.org/es/docs/Glossary/World_Wide_Web) a largo plazo. 

La serialización XML transforma los atributos y propiedades de **lectura-escritura públicas** de un objeto en memoria en una secuencia de datos que puede ser procesada por cualquier aplicación independientemente de la plataforma en la que fue construida o sobre la que se ejecute. 

## Sintaxis de XML
Como todo lenguaje, XML tiene reglas de sintaxis que permiten su posterior interpretación. Se compone de etiquetas de apertura y cierre, por ejemplo:

```xml
<OrderForm>
    <OrderDate>12/12/01</OrderDate>
</OrderForm>
``` 

En el ejemplo anterior tenemos la etiqueta `<OrderForm></OrderForm>` que representa a un objeto de la clase `OrderForm` y tiene anidada la propiedad `OrderDate` representada por la etiqueta `<OrderDate></OrderDate>` que contiene el valor de dicha propiedad, `12/12/01`.

Correspondería a la serialización de un objeto de la siguiente clase:

```csharp
public class OrderForm
{
    public DateTime OrderDate;
}
```

## Serializando a XML
Para serializar un objeto debe contar con atributos o propiedades de lectura-escritura públicos. 

Luego debemos utilizar un objeto de tipo `XmlSerializer` del espacio de nombres `System.Xml.Serialization` y llamar a su método `Serialize`. Una de sus sobrecargas recibe el objeto a serializar y una instancia de `StreamWriter` que se utiliza para guardar el objeto serializado en un archivo.

Vemos un ejemplo:

```csharp
public class Alumno
{
    private string nombreCompleto;
    private DateTime fechaNacimiento;
    private List<Materia> materias;
    private float promedio;

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

    public float Promedio
    {
        get
        {
            return promedio;
        }
        set
        {
            promedio = value;
        }
    }

    public Alumno()
    {
        materias = new List<Materia>();
    }

    public Alumno(string nombreCompleto, DateTime fechaNacimiento, float promedio) :this()
    {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.promedio = promedio;
    }
}
```

```csharp
static void Main(string[] args)
{
    Alumno alumno = new Alumno("Juan Perez", new DateTime(2000, 12, 12), 7.8f);

    using (StreamWriter streamWriter = new StreamWriter("alumno.xml"))
    { 
        XmlSerializer xmlSerializer = new XmlSerializer(typeof(Alumno));

        xmlSerializer.Serialize(streamWriter, alumno);
    }
}
```

En la carpeta `bin/debug` del proyecto encontraremos el archivo `alumno.xml` con el siguiente contenido:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Alumno xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <NombreCompleto>Juan Perez</NombreCompleto>
  <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento>
  <Promedio>7.8</Promedio>
</Alumno>
```

Como vemos, el objeto de tipo `Alumno` se encuentra representado por la etiqueta `<Alumno></Alumno>` que contiene cada una de sus propiedades, también en forma de etiquetas, y los valores de las mismas. 

## Deserializando XML
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

            // Obtengo un objeto de tipo Empleado a partir de un string +
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
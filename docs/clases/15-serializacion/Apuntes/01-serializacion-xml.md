---
sidebar_label: Serialización XML
slug: /clases/serializacion/apuntes/serializacion-xml
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Serialización XML
**Extensible Markup Language (XML)** es un lenguaje de marcado similar a HTML especificado por el [World Wide Web Consortium (W3C)](https://www.w3.org/TR/xml/).

W3C es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la [World Wide Web (www)](https://developer.mozilla.org/es/docs/Glossary/World_Wide_Web) a largo plazo. 

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

Otro ejemplo:

```csharp
Alumno nuevoAlumno = new Alumno("Juan Perez", 
new DateTime(2000, 12, 12), 7.8f);
nuevoAlumno.Materias.Add("Programación II");
nuevoAlumno.Materias.Add("Laboratorio de computación II");

Alumno nuevoAlumno2 = new Alumno("Leo Lopez", 
new DateTime(2000, 12, 12), 7.8f);
nuevoAlumno2.Materias.Add("Arquitectura y sistemas operativos");
nuevoAlumno2.Materias.Add("Inglés II");
nuevoAlumno2.Materias.Add("Metodología de la investigación");

List<Alumno> nuevosAlumnos = new List<Alumno>()
{
    nuevoAlumno,
    nuevoAlumno2
};
```

Serializar `nuevosAlumnos` resultaría en el siguiente XML:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Array de objetos Alumno -->
<ArrayOfAlumno 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
>
  <Alumno> <!-- Objeto Alumno -->
    <NombreCompleto>Juan Perez</NombreCompleto> <!-- Propiedad texto -->
    <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento> <!-- Propiedad fecha -->
    <Promedio>7.8</Promedio> <!-- Propiedad numérica -->
    <Materias> <!-- Array anidado -->
      <string>Programación II</string>
      <string>Laboratorio de computación II</string>
    </Materias>
  </Alumno> <!-- Fin objeto -->
  <Alumno> <!-- Otro Objeto Alumno -->
    <NombreCompleto>Leo Lopez</NombreCompleto>
    <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento>
    <Promedio>7.8</Promedio>
    <Materias>
      <string>Arquitectura y sistemas operativos</string>
      <string>Inglés II</string>
      <string>Metodología de la investigación</string>
    </Materias>
  </Alumno> <!-- Fin objeto -->
</ArrayOfAlumno> <!-- Fin array -->
```

## Serializando a XML
Para serializar un objeto este debe contar con atributos o propiedades de lectura-escritura públicos y un constructor público sin parámetros. 

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
Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato XML se debe utilizar el método estático `Deserialize` de una instancia de `XmlSerializer`. `Deserialize` recibe una instancia de `StreamReader` que se utiliza para leer desde el archivo donde se encuentra el objeto serializado.

```csharp
static void Main(string[] args)
{
    using (StreamReader streamReader = new StreamReader("alumno.xml"))
    {
        XmlSerializer xmlSerializer = new XmlSerializer(typeof(Alumno));

        Alumno alumno = xmlSerializer.Deserialize(streamReader) as Alumno;

        Console.WriteLine($"Nombre: {alumno.NombreCompleto}");
        Console.WriteLine($"Fecha de nacimiento: {alumno.FechaNacimiento}");
        Console.WriteLine($"Promedio: {alumno.Promedio}");
    }
}
```

La salida del código anterior es:

```
Nombre: Juan Perez
Fecha de nacimiento: 12/12/2000 00:00:00
Promedio: 7,8
```

Se trata exactamente del proceso opuesto. Debemos castear el resultado del método `Deserialize` al tipo de objeto al que estamos deserializando. 
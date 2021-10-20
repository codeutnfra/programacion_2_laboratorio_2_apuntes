---
title: Apuntes - Archivos y serialización
sidebar_label: Trabajando con archivos
slug: /clases/archivos/apuntes/archivos
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Archivos
Las aplicaciones frecuentemente necesitan recibir o volcar información en archivos y directorios. Los espacios de nombre `System` y `System.IO` contienen clases que nos ayudarán con esta tarea. Existen muchas formas de trabajar con archivos, cada una con sus ventajas y desventajas según el escenario, nosotros veremos sólo algunas.

## Escribiendo archivos
### Escribir un bloque de texto
Usaremos la clase `File` del espacio de nombres `System.IO` que provee métodos estáticos para trabajar con archivos.

El método `WriteAllText` recibe una ruta (incluyendo el nombre del archivo) y un texto. Si el archivo no existe lo crea y guarda el texto, y si existe lo sobrescribe. Luego cierra el archivo y libera los recursos. 

```csharp
static void Main(string[] args)
{
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.AppendLine("Una clase es el tipo de dato más poderoso en C#.");
    stringBuilder.AppendLine("Como una estructura, una clase define datos y comportamiento para el tipo de dato.");

    File.WriteAllText("MiArchivo.txt", stringBuilder.ToString());
}
```

Al sólo pasarle el nombre del archivo y no una ruta completa, por defecto se guardará donde se encuentre el ejecutable (.exe) de nuestra aplicación. Cuando estemos trabajando en modo Debug este directorio será la carpeta `bin/Debug` de nuestra solución. Si buscamos encontraremos el archivo creado junto con el texto.

![Archivo en carpeta bin/Debug](/clases/14-archivos/apuntes/archivo_en_bin.png)

![Archivo con el texto guardado](/clases/14-archivos/apuntes/mi_archivo_txt.png)

El método `WriteAllLines` hace lo mismo, pero en vez de recibir un `string` recibe un array con líneas de texto (`string[]`). 

```csharp
static void Main(string[] args)
{
    string[] lineasDeTexto = {
        "Una clase es el tipo de dato más poderoso en C#.",
        "Como una estructura, una clase define datos y comportamiento para el tipo de dato."
    };

    File.WriteAllLines("MiArchivo.txt", lineasDeTexto);
}
```

### Escribir líneas específicas
La clase `File` expone métodos de alto nivel para realizar operaciones sobre archivos a gran escala. Muchos detalles se encuentran encapsulados dentro de la clase. Esto tiene el beneficio de ser muy simple de programar y ahorrarnos a los desarrolladores algunas consideraciones, pero como punto en contra nos limita cuando tenemos necesidades más específicas como veremos a continuación.

Si queremos guardar líneas de texto específicas o anexar texto a un archivo existente, no nos servirán los métodos de la clase `File` y en su lugar tendremos que usar `StreamWriter`. `File` utiliza `StreamWriter` internamente, pero para casos simples nos ahorra un poco de trabajo. 

En el siguiente ejemplo guardaremos de forma condicional las líneas de texto que contengan la palabra "segundo".

```csharp
static void Main(string[] args)
{
    List<string> lineasDeTexto = new List<string>();
    lineasDeTexto.Add("Cuando estaba en el primer cuatrimestre me preguntaba qué veríamos en el segundo.");
    lineasDeTexto.Add("Los nuevos contenidos me encantan.");
    lineasDeTexto.Add("En el segundo cuatrimestre aprendemos programación orientada a objetos y C#.");
    lineasDeTexto.Add("¡En el tercer cuatrimestre seguiremos aprendiendo mucho más!");

    StreamWriter streamWriter = new StreamWriter("MiArchivo.txt");

    foreach (string linea in lineasDeTexto)
    {
        if (linea.ToLower().Contains("segundo"))
        {
            streamWriter.WriteLine(linea);
        }
    }

    streamWriter.Close();
    streamWriter.Dispose();
}
```

La salida en el archivo será:

```
Cuando estaba en el primer cuatrimestre me preguntaba qué veríamos en el segundo.
En el segundo cuatrimestre aprendemos programación orientada a objetos y C#.
```

Como vemos en el `foreach` se filtraron aquellas líneas de texto que no contienen la palabra "segundo". El método `WriteLine` nos permite ir escribiendo el archivo una línea a la vez. 

La sobrecarga del constructor de `StreamWriter` que utilizamos recibe la ruta del archivo, incluyendo el nombre. 

Cuando usamos esta clase es importante invocar a los métodos `Close` y `Dispose` al terminar de trabajar. `Close` la conexión con el archivo y `Dispose` libera los recursos. 

Si ocurriera una excepción al escribir el archivo no estaríamos liberando los recursos y esto puede traer algunos problemas, por ejemplo que el archivo quede tomado y no se pueda abrir posteriormente. Por eso sumaremos un **bloque try-finally**, de forma que **siempre** se liberen los recursos, ocurra o no una excepción. 

```csharp       
static void Main(string[] args)
{
    List<string> lineasDeTexto = new List<string>();
    lineasDeTexto.Add("Cuando estaba en el primer cuatrimestre me preguntaba qué veríamos en el segundo.");
    lineasDeTexto.Add("Los nuevos contenidos me encantan.");
    lineasDeTexto.Add("En el segundo cuatrimestre aprendemos programación orientada a objetos y C#.");
    lineasDeTexto.Add("¡En el tercer cuatrimestre seguiremos aprendiendo mucho más!");

    StreamWriter streamWriter = null;

    try
    {
        streamWriter = new StreamWriter("MiArchivo.txt");

        foreach (string linea in lineasDeTexto)
        {
            if (linea.ToLower().Contains("segundo"))
            {
                streamWriter.WriteLine(linea);
            }
        }
    }
    finally
    {
        if (streamWriter is not null)
        {
            streamWriter.Close();
            streamWriter.Dispose();
        }
    }
}
```

En la sección [Trabajando con recursos no-manejados](#trabajando-con-recursos-no-manejados) veremos una forma de simplificar el código anterior. 

### Anexar texto a un archivo existente
Para agregar texto a un archivo existente sin sobrescribirlo usaremos otra sobrecarga del constructor de `StreamWriter` que, además de la ruta al archivo, recibe el booleano `append` el cual cuando sea `true` anexará el texto en vez de sobrescribir el archivo. El valor por defecto es `false` (pisar el archivo). 

```csharp   
StreamWriter streamWriter = new StreamWriter("MiArchivo.txt", true);
```

## Leyendo archivos
### Leer un bloque de texto
Al igual que cuando vimos las distintas formas de escribir un archivo, la clase `File` nos expone algunos métodos que nos simplifican los casos más genéricos:
* `Exists`: recibe como argumento la ruta a un archivo y verifica si un archivo existe. Retorna `true` si existe, `false` caso contrario.
* `ReadAllText`: lee todo el texto en el archivo y lo retorna como un `string`.
* `ReadAllLines`: lee todo el texto en el archivo y lo retorna como un array (`string[]`) donde cada elemento es una línea de texto del archivo.

```csharp
static void Main(string[] args)
{
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.AppendLine("Una clase es el tipo de dato más poderoso en C#.");
    stringBuilder.AppendLine("Como una estructura, una clase define datos y comportamiento para el tipo de dato.");

    File.WriteAllText("MiArchivo.txt", stringBuilder.ToString());

    bool existe = File.Exists("MiArchivo.txt");
    Console.WriteLine($"¿Existe el archivo?: {existe}");

    Console.WriteLine($"{Environment.NewLine}Contenido:");
    string textoDelArchivo = File.ReadAllText("MiArchivo.txt");
    Console.WriteLine(textoDelArchivo);
}
```

La salida por consola del código anterior muestra primero que el archivo existe (método `Exists`) y luego el contenido del archivo (método `ReadAllText`).

```
¿Existe el archivo?: True

Contenido:
Una clase es el tipo de dato más poderoso en C#.
Como una estructura, una clase define datos y comportamiento para el tipo de dato.
```

### Leer una línea de texto a la vez



* `CreateText`: recibe como argumento la ruta donde se desea crear o trabajar con un archivo existente. Retorna un objeto de tipo `StreamWriter`.
* `OpenText`: recibe como argumento la ruta donde se encuentra un archivo que queremos leer. Retorna un objeto de tipo `StreamReader`.
* `Delete`: recibe como argumento la ruta donde se encuentra un archivo que queremos eliminar.

La objetos de tipo `StreamWriter` contienen los métodos de instancia `Write` y `WriteLine` para escribir en un archivo. Mientras que los de tipo `StreamReader` cuentan con los métodos de instancia `ReadToEnd`, `ReadLine` y `Read`.

```csharp
using System;
using System.IO;

namespace Archivos_Vista
{
    class Program
    {
        static void Main(string[] args)
        { 
            string nombreArchivo = "AprendiendoArchivos.txt";
            Console.WriteLine("¿Existe?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);

            Console.WriteLine($"Creando archivo...");
            StreamWriter streamWriter = File.CreateText(nombreArchivo);
            streamWriter.WriteLine("Aprendo archivos en la UTN");
            streamWriter.Close();

            Console.WriteLine("¿Existe?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);

            Console.WriteLine("Leyendo archivo...");
            StreamReader streamReader = File.OpenText(nombreArchivo);
            Console.WriteLine(streamReader.ReadToEnd());
            streamReader.Close();

            Console.WriteLine("Borrando archivo...");
            File.Delete(nombreArchivo);

            Console.WriteLine("¿Existe?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);
        }
    }
}
```

La salida del código anterior es:

```
¿Existe?: False 

Creando archivo...
¿Existe?: True 

Leyendo archivo...
Aprendo archivos en la UTN

Borrando archivo...
¿Existe?: False 
```

## Streams
Un stream es una secuencia de bytes sobre la que se puede leer o escribir. Los archivos puede ser procesados como un array, con un acceso aleatorio basado en la posición de un determinado byte en el contenido. Sin embargo, puede ser útil procesar los archivos como un stream donde los bytes pueden ser accedidos en orden secuencial. 


## Trabajando con recursos no-manejados
Cuando abrimos un archivo para leer o escribir, estamos usando recursos fuera del campo de acción del entorno de ejecución (CLR) de .NET. A estos se los conoce como **recursos no-manejados (*unmanaged resources*) y deben ser liberados cuando terminemos de trabajar con ellos. 

Una forma de liberar recursos tanto cuando ocurren excepciones como cuando no, es trabajar dentro de un **bloque try-finally**. 

## Excepciones
Las siguientes condiciones pueden causar una excepción cuando trabajamos con archivos:

* **`InvalidOperationException`**: Se lanza cuando el archivo existe pero la operación que se quiere realizar sobre el mismo no es válida, por ejemplo si queremos escribir y está marcado como sólo lectura. 
* **`PathTooLongException`**: Se lanza cuando el nombre de la ruta es demasiado largo.
* **`SecurityException`**: Se lanza cuando no tenemos suficientes permisos para acceder a un archivo.
* **`IOException`**: Se lanza cuando ocurre un error al tratar de acceder a cierta información usando streams, archivos y directorio. Un ejemplo de causa de esta excepción es que el disco esté lleno. Incluye algunas excepciones derivadas:
  * **`DirectoryNotFoundException`**: Se lanza cuando parte de un archivo o directorio no fue encontrado.
  * **`FileNotFoundException`**: Se lanza cuando se intenta acceder a un archivo que no existe o falla el disco.
  * **`FileLoadException`**: Se lanza cuando el archivo existe pero no se puede cargar por algún motivo.
  * **`DriveNotFoundException `**: Se lanza cuando se intenta acceder a una unidad de almacenamiento que no existe o no está disponible.

Como vemos, existen múltiples situaciones que pueden causar excepciones cuando trabajamos con el sistema de archivos. Lo mejor es programar de forma defensiva, asegurándonos de manejar correctamente todos los posibles errores. 

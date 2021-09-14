---
title: Apuntes - Archivos y serialización
sidebar_label: Trabajando con archivos
slug: /clases/serializacion/apuntes/archivos
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Archivos
Las aplicaciones frecuentemente necesitan recibir o volcar información en archivos y directorios. Los espacios de nombre `System` y `System.IO` contienen clases que nos ayudarán con esta tarea. Existen muchas formas de leer y escribir en archivos, cada una con sus ventajas y desventajas según el escenario, nosotros veremos sólo algunas.

La clase `File` provee métodos estáticos para trabajar con archivos:
* `Exists`: recibe como argumento la ruta a un archivo y verifica si un archivo existe. 
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

## Trabajando con rutas
La clase `Path` sirve para trabajar con cadenas de texto que representan o contienen rutas a archivos o directorios:
* `Combine`: 
* `Join`: 
* `TryJoin`: 

## Trabajando con recursos no-manejados
Cuando abrimos un archivo para leer o escribir, estamos usando recursos fue de .NET. A estos se los conoce como **recursos no-manejados (*unmanaged resources*)** y deben ser liberados cuando terminemos de trabajar con ellos. 

Una forma de liberar recursos tanto cuando ocurren excepciones como cuando no, es trabajar dentro de un **bloque try-finally**. 


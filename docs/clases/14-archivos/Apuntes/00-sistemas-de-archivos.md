---
title: Apuntes - Archivos
sidebar_label: Sistemas de archivos
slug: /clases/archivos/apuntes/sistemas-de-archivos
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Sistemas de archivos
Un **sistema de archivos (*file system*)** es un elemento del sistema operativo que organiza y controla cómo se almacenan y recuperan los datos guardados en un medio de almacenamiento. 

Sus principales funciones son la asignación de espacio a los archivos, la administración del espacio libre y del acceso a los datos resguardados. Estructuran la información guardada en un dispositivo de almacenamiento de datos, que luego será representada ya sea textual o gráficamente utilizando un gestor de archivos.

La mayoría de los sistemas operativos manejan su propio sistema de archivos.

Los sistemas de archivos proveen métodos para crear, mover, renombrar y eliminar tanto archivos como directorios. También asignan propiedades como sólo lectura y permisos de acceso. 

### Unidades, particiones y volúmenes
Una **unidad (*drive*)** (también llamada disco) es un dispositivo ***físico*** que se utiliza para almacenar datos.

Una **partición** es una división ***lógica*** de un medio de almacenamiento ***físico*** a la que le asigna una porción del espacio disponible en el dispositivo. 

Se llama **volumen** al área de almacenamiento efectivode un medio de almacenamiento o de una de sus particiones (es decir, física o lógica), accesible mediante un nombre único y un formato consistente en un sistema de archivos (como FAT o NTFS). Básicamente se trata de una unidad de datos identificable y organizada bajo un formato específico. 

Las particiones no pueden contener un sistema de archivos directamente. En su lugar, uno o más volúmenes deben ser asociados a la misma. 

Los volúmenes existen a un nivel lógico del sistema operativo, mientras que las particiones son una fragmentación lógica del hardware. A veces se corresponden uno a uno, pero no siempre. Por ejemplo, podemos un sistema operativo distinto en cada partición. 

| Unidad     | Partición   | Sistema de archivos | Nombre del volumen |
| ---------- | ----------- | ------------------- | ------------------ |
| Disco Duro | Partición 1 | NTFS                | C:                 |
| Disco Duro | Partición 2 | EXT3                | /                  |
| SSD        | Partición 1 | NTFS                | E:                 |
| USB        | Partición 1 | FAT32               | F:                 |

En el ejemplo anterior:
* Hay dos unidades físicas, un disco duro y un ssd.
* El disco duro se separa en dos particiones, cada una con un sistema operativo distinto.
* "C:", "/", "E:" y "F:" son volúmenes. Cada uno con su sistema de archivos.

## Trabajando con sistemas de archivos en distintas plataformas
Como sabemos, .NET es una plataforma de desarrollo multi-plataforma donde podemos construir soluciones para Windows, Linux o MacOS. Cada sistema operativo tiene sus diferencias en cómo se almacenan y recuperan los datos en su sistema de archivos. 

Por fortuna, la *base class library* en los namespaces `System` y `System.IO` cuenta con herramientas que nos facilitarán el manejo de las particularidades de cada ambiente.

### Obtener información del sistema operativo
¿Cómo podemos saber en tiempo de ejecución sobre qué sistema operativo está corriendo nuestra aplicación? Para esto existen una serie de métodos estáticos de la clase `OperatingSystem`:
* `IsWindows`: Retorna verdadero si el sistema operativo es Windows. 
* `IsLinux`: Retorna verdadero si el sistema operativo es Linux. 
* `IsMacOS`: Retorna verdadero si el sistema operativo es MacOS. 
* `IsIOS`: Retorna verdadero si el sistema operativo es IOS. 
* `IsAndroid`: Retorna verdadero si el sistema operativo es Android. 

```csharp
using System;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {          
            Console.WriteLine("¿Es Windows?: {0}", OperatingSystem.IsWindows());
            Console.WriteLine("¿Es Linux?: {0}", OperatingSystem.IsLinux());
            Console.WriteLine("¿Es MacOS?: {0}", OperatingSystem.IsMacOS());
            Console.WriteLine("¿Es IOS?: {0}", OperatingSystem.IsIOS());
            Console.WriteLine("¿Es Android?: {0}", OperatingSystem.IsAndroid());
        }
    }
}
```

La salida en Windows es:

```
¿Es Windows?: True
¿Es Linux?: False
¿Es MacOS?: False
¿Es IOS?: False
¿Es Android?: False
```

La salida en Linux es:

```
¿Es Windows?: False
¿Es Linux?: True
¿Es MacOS?: False
¿Es IOS?: False
¿Es Android?: False
```

La propiedad estática `OSVersion` de la clase `Environment` nos retorna un objeto de tipo `OperatingSystem` con las siguientes propiedades:
* `Platform`: Retorna un valor del enumerado `PlatformID` indicando sobre qué sistema operativo se está ejecutando la aplicación. Los valores posibles son: 
  * `Win32NT`: El sistema operativo es Windows NT o superior. 
  * `Unix`: El sistema operativo es Unix (MacOSX, Linux). 
  * `Other`: Es algún otro sistema operativo.

* `Version`: Retorna un objeto de tipo `Version` que contiene información sobre la versión del sistema operativo sobre la que se está ejecutando la aplicación.

```csharp
using System;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {          
            Console.WriteLine("OSVersion: {0}", Environment.OSVersion);
            Console.WriteLine("OSVersion.Platform: {0}", Environment.OSVersion.Platform);
            Console.WriteLine("OSVersion.Version: {0}", Environment.OSVersion.Version);
        }
    }
}
```

La salida en Windows es:

```
OSVersion: Microsoft Windows NT 10.0.22000.0
OSVersion.Platform: Win32NT
OSVersion.Version: 10.0.22000.0
```

La salida en Linux es:

```
OSVersion: Unix 5.10.43.3
OSVersion.Platform: Unix
OSVersion.Version: 5.10.43.3
```

Existen algunos métodos estáticos de la clase `Environment` que nos aportan información adicional:
* `Is64BitOperatingSystem`: Indica si el sistema operativo sobre el que se ejecuta la aplicación es de 64 bits.
* `ProcessorCount`: Retorna un entero con el número de procesadores **lógicos** de la máquina sobre la que se ejecuta la aplicación.
* `UserName`: Para obtener el nombre del usuario del sistema operativo que está ejecutando la aplicación.
* `NewLine`: Retorna el caracter de salto de línea correspondiente al sistema operativo sobre el que se ejecuta la aplicación.

```csharp
using System;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Cantidad de procesadores lógicos: {0}", Environment.ProcessorCount);
            Console.WriteLine("¿Tiene arquitectura de 64 bits?: {0}", Environment.Is64BitOperatingSystem);
            Console.WriteLine("Usuario: {0}", Environment.UserName);
            Console.WriteLine("Primera línea {0} Segunda Línea", Environment.NewLine);
        }
    }
}
```

La salida en Windows es:

```
Cantidad de procesadores lógicos: 12
¿Tiene arquitectura de 64 bits?: True
Usuario: mauri
Primera línea
 Segunda Linea
```

La salida en Linux es:

```
Cantidad de procesadores lógicos: 12
¿Tiene arquitectura de 64 bits?: True
Usuario: mcerizza
Primera línea 
 Segunda Línea
```

## Trabajando con unidades de almacenamiento
La clase `DriveInfo` nos proporcionará información sobre las unidades de almacenamiento conectadas a la computadora. 

Con el método estático `GetDrives` podemos obtener un array de objetos de tipo `DriveInfo` que representan a cada una de las unidades de almacenamiento detectadas por el sistema operativo. Cada uno de estos objetos nos permitirá consultar las siguientes propiedades:

* `Name`: Nombre de la unidad.
* `DriveType`: Nombre del tipo de unidad (fija, removible, cd rom, etc).
* `DriveFormat`: Formato de la unidad.
* `TotalSize`: Tamaño total en bytes.
* `AvailableFreeSpace`: Espacio libre en bytes.

Es importante que antes de usar algunas propiedades nos aseguremos que la unidad esté lista con la propiedad `IsReady`. Esto es particularmente relevante para unidades removibles, ya que en caso de no estar lista se lanzará una excepción en tiempo de ejecución. 

```csharp
using System.IO;
using System;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("{0, -10} | {1, -10} | {2, -7} | {3, -26} | {4, -26} |", 
            "Nombre", "Tipo", "Formato", "Tamaño", "Espacio libre");
            
            foreach (DriveInfo unidad in DriveInfo.GetDrives())
            {
                if (unidad.IsReady)
                {
                    Console.WriteLine("{0, -10} | {1, -10} | {2, -7} | {3, 20:N0} bytes | {4, 20:N0} bytes |", 
                    unidad.Name, unidad.DriveType, unidad.DriveFormat, unidad.TotalSize, 
                    unidad.AvailableFreeSpace);
                }
                else
                {
                    Console.WriteLine("{0, -10} | {1, -10}", unidad.Name, unidad.DriveType);
                }
            }
        }
    }
}
```

La salida del código anterior es:

```
Nombre     | Tipo       | Formato | Tamaño                     | Espacio libre              |
C:\        | Fixed      | NTFS    |      510.824.280.064 bytes |      272.604.942.336 bytes |
D:\        | Removable  | FAT     |          126.054.400 bytes |           33.855.488 bytes |
G:\        | Fixed      | FAT32   |       16.106.127.360 bytes |          863.588.352 bytes |
H:\        | Fixed      | FAT32   |      510.824.280.064 bytes |      258.974.691.328 bytes |
J:\        | Fixed      | NTFS    |    1.024.191.361.024 bytes |      520.692.162.560 bytes |
K:\        | Fixed      | NTFS    |    1.000.199.942.144 bytes |      600.995.758.080 bytes |
```
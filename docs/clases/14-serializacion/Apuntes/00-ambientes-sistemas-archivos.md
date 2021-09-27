---
title: Apuntes - Archivos y serialización
sidebar_label: Ambientes y sistemas de archivos
slug: /clases/serializacion/apuntes/ambientes-sistemas-archivos
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Trabajando con ambientes y sistemas de archivos multi-plataforma
Como sabemos, .NET es una plataforma de desarrollo multi-plataforma donde podemos construir soluciones para Windows, Linux o MacOS. Cada sistema operativo tiene sus diferencias en cómo se almacenan y recuperan los datos, es decir, en su **sistema de archivos (*fyle system*)**. 

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
            Console.WriteLine("ProcessorCount: {0}", Environment.ProcessorCount);
            Console.WriteLine("ProcessorCount: {0}", Environment.Is64BitOperatingSystem);
            Console.WriteLine("ProcessorCount: {0}", Environment.UserName);
            Console.WriteLine("Primera línea {0} Segunda Línea", Environment.NewLine);
        }
    }
}
```

La salida en Windows es:

```
ProcessorCount: 12
ProcessorCount: True
ProcessorCount: mauri
Primera línea
 Segunda Linea
```

La salida en Linux es:

```
ProcessorCount: 12
ProcessorCount: True
ProcessorCount: mcerizza
Primera línea 
 Segunda Línea
```

### Obtener el directorio actual
Existen dos formas de obtener el directorio actual:
* El método estático `GetCurrentDirectory()` de la clase `Directory`.
* La propiedad estática `CurrentDirectory` de la clase `Environment`.

```csharp
using System;
using System.IO;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {            
            Console.WriteLine("GetCurrentDirectory(): {0}", Directory.GetCurrentDirectory());
            Console.WriteLine("Separador de directorios: {0}", Environment.CurrentDirectory);
        }
    }
}
```

La salida en Windows es:

```
Directory.GetCurrentDirectory(): C:\Users\mauri\Desktop\Archivos\Vista-Archivos
Environment.CurrentDirectory: C:\Users\mauri\Desktop\Archivos\Vista-Archivos
```

La salida en Linux es:

```
Directory.GetCurrentDirectory(): /home/mcerizza/Ejemplos/Archivos/Vista-Archivos
Environment.CurrentDirectory: /home/mcerizza/Ejemplos/Archivos/Vista-Archivos
```

### Obtener los caracteres de separación de rutas y directorios
Para obtener el caracter separador de rutas (paths) podemos usar la propiedad estática `PathSeparator` de la clase `Path`.

Para obtener el caracter separador de directorios podemos usar la propiedad estática `DirectorySeparatorChar` de la clase `Path`.

```csharp
using System;
using System.IO;

namespace Vista_Archivos
{
    class Program
    {
        static void Main(string[] args)
        {            
            Console.WriteLine("Path.PathSeparator: {0}", Path.PathSeparator);
            Console.WriteLine("Path.DirectorySeparatorChar: {0}", Path.DirectorySeparatorChar);
        }
    }
}
```

La salida en Windows es:

```
Path.PathSeparator: ;
Path.DirectorySeparatorChar: \
```

La salida en Linux es:

```
Path.PathSeparator: :
Path.DirectorySeparatorChar: /
```

### Obtener los directorios especiales del sistema operativo
Para obtener el directorio del sistema podemos usar la propiedad estática `SystemDirectory` de la clase `Environment`.

Para obtener el directorio de archivos temporales podemos usar el método estático `GetTempPath()` de la clase `Path`.

Para obtener otros directorios especiales (documentos, escritorio, personal) existe el método estático `GetFolderPath()` de la clase `Environment` al que le podemos pasar un valor del enumerado `SpecialFolder`.

Entre las opciones de `SpecialFolder` encontraremos:
* `Environment.SpecialFolder.System`: Otra forma de obtener el directorio del sistema, igual a `Environment.SystemDirectory`.
* `Environment.SpecialFolder.Desktop`: La ruta correspondiente al escritorio.
* `Environment.SpecialFolder.ProgramFiles`: El directorio de instalación de programas destinados a arquitectura no-X86.
* `Environment.SpecialFolder.ProgramFilesX86`: El directorio de instalación de programas destinados a arquitectura X86.
* `Environment.SpecialFolder.MyDocuments`: El directorio de la carpeta personal del usuario (Mis Documentos en Windows).
* `Environment.SpecialFolder.ApplicationData`: El directorio común para almacenar datos de aplicaciones del usuario actual.
* `Environment.SpecialFolder.UserProfile`: El directorio del perfil de usuario actual.
* [¡Y hay más!](https://docs.microsoft.com/en-us/dotnet/api/system.environment.specialfolder?view=net-5.0)

```csharp
using System;
using System.IO;

namespace Archivos_Vista
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Environment.SystemDirectory: {0}", Environment.SystemDirectory);
            Console.WriteLine("Path.GetTempPath: {0}", Path.GetTempPath());

            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.System): {0}", Environment.GetFolderPath(Environment.SpecialFolder.System));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.Desktop): {0}", Environment.GetFolderPath(Environment.SpecialFolder.Desktop));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments): {0}", Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData));
            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.UserProfile): {0}", Environment.GetFolderPath(Environment.SpecialFolder.UserProfile));
        }
    }
}
```


La salida en Windows es:

```
Environment.SystemDirectory: C:\WINDOWS\system32
Path.GetTempPath: C:\Users\mauri\AppData\Local\Temp\
Environment.GetFolderPath(Environment.SpecialFolder.System): C:\WINDOWS\system32
Environment.GetFolderPath(Environment.SpecialFolder.Desktop): C:\Users\mauri\Desktop
Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): C:\Program Files
Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): C:\Program Files (x86)
Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments): C:\Users\mauri\Documents
Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData): C:\Users\mauri\AppData\Roaming
Environment.GetFolderPath(Environment.SpecialFolder.UserProfile): C:\Users\mauri
```

Algunas opciones sólo funcionan en Windows, como se puede ver en la siguiente salida en Linux:

```
Environment.SystemDirectory: 
Path.GetTempPath: /tmp/
Environment.GetFolderPath(Environment.SpecialFolder.System): 
Environment.GetFolderPath(Environment.SpecialFolder.Desktop): 
Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): 
Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): 
Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments): /home/mcerizza
Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData): 
Environment.GetFolderPath(Environment.SpecialFolder.UserProfile): /home/mcerizza
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
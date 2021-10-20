---
title: Apuntes - Archivos y serialización
sidebar_label: Rutas y directorios
slug: /clases/archivos/apuntes/rutas-y-directorios
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Rutas
Una **ruta (*path*)** es la forma de referenciar un archivo informático o directorio en un sistema de archivos de un sistema operativo determinado.

Una ruta señala la localización exacta de un archivo o directorio mediante una cadena de caracteres concreta. Esta puede ser de diversas formas dependiendo del sistema operativo y del sistema de archivos en cuestión. En líneas generales se compondrá de los nombres de los directorios que conforman el camino hasta el archivo o directorio a lo largo del árbol de directorios, y finalmente estará el nombre del archivo o directorio que se quiere referenciar. 

La clase `Path`, perteneciente al espacio de nombres `System.IO`, sirve para trabajar con cadenas de texto que representan o contienen rutas a archivos o directorios.

### Rutas absolutas y relativas
Las **rutas absolutas** señalan la ubicación de un archivo o directorio desde el directorio raíz del sistema de archivos. Un ejemplo de ruta absoluta en Windows sería `C:\usuarios\juan\archivo.txt`.

Las **rutas relativas** señalan la ubicación de un archivo o directorio en relación a la posición actual sobre el sistema de archivos. Un ejemplo de ruta relativa en Windows sería `.\archivo.txt`, donde el símbolo `.` representa la posición actual en la que estamos ubicados en el sistema de archivos. El símbolo `..` nos mueve al directorio padre de la ubicación actual, por ejemplo `..\..\otra_carpeta\archivo.txt` se movería dos directorios hacia arriba en la jerarquía, luego entraría al directorio `otra_carpeta` y por último accedería al archivo `archivo.txt`.

#### Método `Path.GetFullPath`

#### Método `Path.GetRelativePath`

### Obtener separadores de rutas de forma agnóstica al sistema operativo
#### Propiedad `DirectorySeparatorChar`
La propiedad estática `DirectorySeparatorChar` de la clase `Path` retorna el caracter separador de directorios para el sistema operativo sobre el que se ejecuta la aplicación.

```csharp
static void Main(string[] args)
{            
    Console.WriteLine("Path.DirectorySeparatorChar: {0}", Path.DirectorySeparatorChar);
}
```

La salida en Windows es:

```
Path.DirectorySeparatorChar: \
```

La salida en Linux es:

```
Path.DirectorySeparatorChar: /
```

#### Propiedad `Path.AltDirectorySeparatorChar`
La propiedad estática `AltDirectorySeparatorChar` de la clase `Path` retorna el caracter separador de directorios ***alternativo*** para el sistema operativo sobre el que se ejecuta la aplicación.

```csharp
static void Main(string[] args)
{            
    Console.WriteLine("Path.AltDirectorySeparatorChar: {0}", Path.AltDirectorySeparatorChar);
}
```

La salida en Windows es:

```
Path.AltDirectorySeparatorChar: /
```

La salida en Linux es:

```
Path.AltDirectorySeparatorChar: /
```

Nótese que para Linux retorna el mismo caracter que `DirectorySeparatorChar`, ya que Linux sólo soporta `/` como separador de directorios. Windows, al contrario, soporta tanto `\` (retornado por `DirectorySeparatorChar`) como `/` (retornado por `AltDirectorySeparatorChar`).

#### Propiedad `Path.PathSeparator`
La propiedad estática `PathSeparator` de la clase `Path` retorna el caracter que se usa para separar una lista de rutas en el sistema operativo sobre el que se ejecuta la aplicación.

```csharp
static void Main(string[] args)
{            
    Console.WriteLine("Path.PathSeparator: {0}", Path.PathSeparator);
}
```

La salida en Windows es:

```
Path.PathSeparator: ;
```

La salida en Linux es:

```
Path.PathSeparator: :
```

#### Propiedad `Path.VolumeSeparatorChar`
La propiedad estática `VolumeSeparatorChar` de la clase `Path` retorna el caracter que se usa para separar volúmenes en el sistema operativo sobre el que se ejecuta la aplicación.

```csharp
static void Main(string[] args)
{            
    Console.WriteLine("Path.VolumeSeparatorChar: {0}", Path.VolumeSeparatorChar);
}
```

La salida en Windows es:

```
Path.VolumeSeparatorChar: :
```

La salida en Linux es:

```
Path.VolumeSeparatorChar: /
```

#### Método `Path.EndsInDirectorySeparator`

### Combinar rutas
#### Método `Path.Combine`
El método estático `Combine` de la clase `Path` recibe un array de strings conteniendo partes de una ruta a combinar. 

Si alguna de las partes es una ruta absoluta, la operación se reinicia y comienza a formar la ruta desde ese punto, descartando todas las partes previas.

Si algún elemento excepto el último no es una unidad y no termina

#### Método `Path.Join`


#### Método `Path.TryJoin`

## Diferencias entre Path.Combine y Path.Join

### Trabajar con extensiones
#### Método `Path.ChangeExtension`


#### Método `Path.HasExtension`

### Nombres
#### Método `GetFileNameWithoutExtension`

#### Método `GetFileName`

#### Método `GetDirectoryName`

## Directorios
Dentro de un sistema de archivos, un **directorio** es una colección de archivos y otros directorios (sub-directorios) creado con fines organizacionales. 

### Verificar si existe un directorio
Directory.Exists

### Crear un directorio
Directory.CreateDirectory

### Eliminar un directorio
Directory.Delete

### Mover o renombrar un directorio
Directory.Move


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
            Console.WriteLine("Environment.CurrentDirectory: {0}", Environment.CurrentDirectory);
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
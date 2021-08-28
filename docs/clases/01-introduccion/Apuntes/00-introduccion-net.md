---
title: Apuntes - Introducción a .NET y C#
sidebar_label: Introducción a .NET
slug: /clases/introduccion/apuntes/introduccion-net
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Introducción a .NET
.NET (*pronunciado como “dot net”*) es una plataforma gratuita y de código abierto que nos provee una serie de herramientas y programas para construir fácilmente una gran variedad de software, así como el entorno necesario para ejecutarlo sobre distintos sistemas operativos y tipos de arquitectura. 

## Implementaciones de .NET
Actualmente existen cuatro implementaciones distintas de .NET las cuales conviven y tienen muchos puntos en común:
* .NET Framework
* .NET Core
* Xamarin
* .NET 5 

:::note Información

Para quienes les interese profundizar la historia de .NET, Richard Campbell nos resume 20 años en menos de una hora: [The History of .NET - Richard Campbell](https://youtu.be/iMM4Nq9Xqw0).

:::

### .NET Framework
**.NET Framework** es una plataforma de desarrollo que fue diseñada por Microsoft a fines de la década de los 90s y cuya primera versión fue lanzada en 2002. Desde entonces y hasta 2019 fue recibiendo múltiples actualizaciones. Su versión final es la 4.8.

Nació de la necesidad de unificar los distintos componentes necesarios para construir, implementar y ejecutar una aplicación desarrollada para Windows. 

![.NET Framework Logo](/clases/00-introduccion/apuntes/net-framework-logo.jpg)

Los pilares sobre los que se construyó esta implementación son el **Common Language Runtime (CLR)**, un programa que se encarga de todo lo necesario para ejecutar una aplicación construida con .NET, y la **Base Class Library (BCL)**, una enorme biblioteca con funcionalidades útiles para construir software. Ambas herramientas son comunes a todos los lenguajes de programación soportados por la plataforma. 

Así, .NET Framework permitió desarrollar software cuyo código fuente fuera agnóstico de la plataforma de destino. El único componente dependiente de la computadora sobre la que se ejecutaba era el entorno de ejecución encargado de ejecutar ese código. Llegó a soportar hasta 22 lenguajes de programación distintos. 

Actualmente se sugiere utilizar esta implementación únicamente para mantener o extender software originalmente programado sobre la plataforma. No se recomienda su uso para nuevos proyectos. 

### Mono/Xamarin
A fines del año 2000 Microsoft publicó la [**Common Language Infrastruture (CLI)**](https://en.wikipedia.org/wiki/Common_Language_Infrastructure), especificando cómo construir código ejecutable y un entorno de ejecución que permitiera usar múltiples lenguajes de alto nivel en diferentes plataformas, eliminando así la necesidad de reescribir el código fuente para cada una de ellas. Todas las implementaciones de .NET cumplen con las especificaciones del Common Language Infrastructure. 

Originalmente, Microsoft sólo ofrecía un entorno de ejecución para Windows, el Common Language Runtime. [Miguel de Icaza](https://en.wikipedia.org/wiki/Miguel_de_Icaza) de la empresa Ximian, se interesó en la plataforma y empezó a evaluar la posibilidad de desarrollar un entorno de ejecución para Linux. Así nace el proyecto de código abierto **Mono**, el cual vio la luz por primera vez en 2004. 

![Mono logo](/clases/00-introduccion/apuntes/mono-logo.png)

Ximian fue adquirida por Novell en 2003. A su vez, Novell fue adquirida por Attachmate en 2011. Esto último fue sucedido por múltiples despidos dentro de la flota de trabajo que había sido heredada de Novell, incluyendo a Miguel de Icaza. A raíz de esto, Miguel y gran parte del equipo original de Mono, terminan fundando Xamarin. Xamarin fue la empresa que continuó soportando el desarrollo de Mono. 

Para este tiempo, lograron adquirir los permisos y licencias para continuar trabajando sobre MonoTouch (para iOS) y Mono for Android, los cuales pasaron a llamarse respectivamente Xamarin.iOS y Xamarin.Android. En 2012 Xamarin lanza Xamarin.Mac, que permitía desarrollar aplicaciones para MacOS con C#. En 2013 lanzan el IDE Xamarin Studio, un cambio de marca del IDE original para Mono "Monodevelop" y la integración con Visual Studio, lo que permitió usar Visual Studio para crear aplicaciones para Android, iOS y Windows. 

![Xamarin logo](/clases/00-introduccion/apuntes/xamarin-logo.png)

En 2016, la empresa es adquirida por Microsoft que liberó el código fuente del SDK de Xamarin y comenzó a ofrecer gratuitamente las integraciones y características para Visual Studio.

Fue así como Mono dio origen a la plataforma para desarrollo mobile **Xamarin** y otras como **Unity**, que se utiliza para el desarrollo de videojuegos multiplataforma. La versión final de Mono es la 5.0.

:::note Curiosidad

El nombre de Xamarin proviene de los monos tamarinos (tamarins, en inglés), sólo que se reemplaza la T por una X. Similar a como Ximian, la empresa original de Miguel de Icaza, deriva de simians (simios)[*](https://www.computerworld.com/article/2799001/nat-friedman--in-his-own-right.html).

:::

### .NET Core
Cuando nació .NET Framework, el modelo de negocio de Microsoft consistía principalmente en vender licencias de Windows y Office. No es extraño entonces que se tratara de una implementación ligada tan estrechamente a Windows. 
Hoy vivimos en un mundo multi-plataforma, donde el desarrollo para dispositivos móviles y la infraestructura en "la nube" transformaron a Windows en un sistema operativo mucho menos relevante. Microsoft se adaptó al cambio y su modelo de negocio pasó a ser vender sus servicios en la nube. 

Fue bajo este nuevo contexto que en 2016 se lanza la primera versión de **.NET Core**, una nueva implementación multi-plataforma y de código abierto. Para esta implementación se rescribió desde cero toda la plataforma de .NET, logrando mejoras de rendimiento, eficiencia y un enfoque de desarrollo mucho más moderno. 

![Net Core logo](/clases/00-introduccion/apuntes/net-core-logo.png)

.NET Core trajo un nuevo entorno de ejecución ***multi-plataforma*** llamado **CoreCLR** con soporte para Windows, Linux y MacOS. También incluyó una nueva Base Class Library más liviana y simple, conocida como **CoreFX**.

Con esta implementación también se eliminaron grandes piezas de código que estaban estrechamente ligadas a tecnologías legado y exclusivas de Windows. Muchas fueron modularizadas en forma de **paquetes NuGet**, bibliotecas externas que uno puede incorporar a sus proyectos a necesidad. ***Modularizar*** .NET para que tenga menos depedencias hizo de .NET Core una implementación mucho más ligera y simple que .NET Framework, a su vez permitiendo que las nuevas actualizaciones tengan menos impacto sobre la plataforma. 

La versión final de .NET Core es la 3.1.

### .NET Standard
Para 2019 existían y convivían tres implementaciones de .NET:

* .NET Core para multi-plataforma y nuevos desarrollos.
* .NET Framework para aplicaciones legado.
* Xamarin para aplicaciones mobile. 

Si bien cada una de estas estaba especializada en escenarios diferentes, condujo al problema de que un desarrollador tenía que aprender a trabajar con las tres plataformas. 

Esto condujo a Microsoft a publicar **.NET Standard**, una especificación que debe cumplir e implementar la Base Class Library de cualquier plataforma .NET. Esto trajo uniformidad y permitió a los desarrolladores compartir un mismo código fuente entre las distintas implementaciones de la plataforma. 

### .NET 5 y versiones superiores
En 2020 .NET Core cambia de nombre a .NET y se lanza **.NET 5**, la primera versión unificada de la plataforma con soporte para construir aplicaciones de todo tipo (cloud, desktop, mobile, gaming, y más). Esta nueva implementación combina las herramientas y frameworks de .NET Framework, .NET Core y Mono/Xamarin. 

Al haber una sola plataforma unificada de .NET, la necesidad de .NET Standard (que dio la base para soñar con la posibilidad .NET 5) se redujo significativamente.

Esta implementación reemplazará a todas las anteriores, convirtiéndose en un único estándar. 

![.NET Platform](/clases/00-introduccion/apuntes/dotnet5_platform.png)

## Niveles de soporte
Las versiones de .NET se categorizan en dos grandes grupos que determinan por cuántos años tendrán soporte (mantenimiento):

* **Long-Term Support (LTS)**: Son versiones estables y que se actualizarán con poca frecuencia. Se garantiza su soporte por 3 años desde su lanzamiento. Por ejemplo, la versión 3.1 que fue lanzada en Diciembre de 2019 tiene soporte hasta Diciembre de 2022.
* **Current**: Contienen las últimas mejoras y tienden a actualizarse con frecuencia. Reciben actualizaciones hasta 18 meses después de su lanzamiento. Por ejemplo, la versión 5.0 que fue lanzada en Noviembre de 2020 tiene soporte hasta Mayo de 2022.

Ambas reciben correcciones críticas relacionadas a temas de seguridad. Debemos mantenernos al día con estas actualizaciones para obtener soporte. Por ejemplo, si tenemos instalada la versión 5.0.0 y existe una versión 5.0.1, necesitaremos estar actualizados a la 5.0.1 para obtener soporte.

![Release schedule](/clases/00-introduccion/apuntes/release-schedule.png)

## Características de .NET
#### Multi-plataforma
Existió una época donde esta plataforma sólo nos permitía trabajar para Windows, pero esos tiempos quedaron muy atrás. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola también en Linux y MacOS. 

#### Open Source
El [código fuente de .NET](https://github.com/dotnet) es público y es mantenido por miles de desarrolladores y compañias. Es soportado por [.NET foundation](https://dotnetfoundation.org/), una organización sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboración alrededor del ecosistema de .NET.

#### Multi-lenguaje
.NET soporta varios lenguajes de programación, los cuales se pueden utilizar para programar sobre la plataforma:

**C#** → Lenguaje orientado a objetos con una sintaxis similar a C y JAVA.

**F#** →  Lenguaje orientado principalmente a la programación funcional, de sintaxis liviana.

**Visual Basic** → La sintaxis de este lenguaje es la que más se asemeja al lenguaje humano (inglés), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. 

## Componentes de .NET
Todas las implementaciones de .NET incluyen los siguientes componentes:

* Uno o más entornos de ejecución.
* Una biblioteca de clases base. 
* Infraestructura y componentes comunes. 
* Opcionalmente, uno a más frameworks para desarrollo de aplicaciones.
* Opcionalmente, herramientas de desarrollo adicionales. 

### Common Language Runtime
Un **entorno de ejecución (*runtime*)** es un programa encargado de administrar la ejecución de un programa. Permite abstraer a nuestras aplicaciones de la máquina sobre la que se ejecutan. Todos los programas creados con .NET se ejecutan sobre un runtime.  

Funcionan como una máquina virtual que sirve de intérprete e intermediario para darle instrucciones a la máquina sobre la que se están ejecutando. Además, son los encargados de administrar la memoria y los recursos. 

El runtime de .NET Framework y .NET 5+ se conoce como **Common Language Runtime (CLR)**.

Entre sus tareas se encuentra:
* Administrar el uso, asignación y liberación de memoria.
* Genera y compila código para que el programa pueda ejecutarse sobre una máquina en concreto. 
* Sirve como capa de abstracción del hardware, permitiendo a los desarrolladores programar de forma agnóstica a la plataforma de destino. 
* Manejo de errores en tiempo de ejecución.
* Provee funcionalidades para lenguajes orientados a objetos. 
* Soporte para programación multi-hilo. 
* Cuestiones de seguridad y rendimiento.

Es probable que no reconozcas algunos términos de la lista de tareas del CLR, pero iremos profundizando sobre esto durante la cursada. Por ahora entendamos que es un software que permite la ejecución de las aplicaciones construidas con .NET y que nos genera una capa de separación entre el código fuente y el hardware donde se terminará ejecutando.

El runtime de .NET 5 y versiones superiores es el ***.NET 5 Common Language Runtime (.NET 5 CLR)***.

### Base Class Library
La **base class library (BCL)** es una serie de bibliotecas (*libraries*) con funcionalidades de uso general que forman parte de los espacios de nombre *Microsoft* y *System*. Funciona como un framework de bajo nivel sobre el que están construidos los frameworks de aplicación de alto nivel que forman parte del ecosistema de .NET.

La biblioteca de clases de .NET 5 y versiones superiores es la ***.NET 5 Base Class Library***.

### Frameworks
Un **marco de trabajo (*framework*)** define una forma de trabajo y nos brinda un conjunto de herramientas de alto nivel para desarrollar un tipo de aplicación en concreto. 

Algunos ejemplos de frameworks para .NET son:

* **Windows Forms**. Será el framework que utilizaremos en clase para desarrollar aplicaciones de escritorio (*desktop*). 
* **ASP.NET Core**. Es un framework para trabajar con desarrollo web, frontend y backend. 
* **Windows Presentation Foundation (WPF)**. Se trata de otro framework para desarrollar aplicaciones de escritorio. 

#### Frameworks vs bibliotecas
No se debe confundir a los marcos de trabajo con las **bibliotecas (*libraries*)**. Entre las diferencias más importantes encontramos:

| Bibliotecas (Libraries)                                                                         | Marcos de trabajo (Frameworks)                                                                                                                           |
| :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se trata de una serie de funcionalidades para realizar operaciones específicas, bien definidas. | Definen una forma de trabajo y nos brinda un conjunto de herramientas de alto nivel que permiten desarrollar ciertos tipos de aplicaciones con facilidad. |
| Se componen de una colección de funciones y objetos auxiliares.                                 | Se componen de múltiples bibliotecas y otras herramientas.                                                                                               |
| Nosotros invocamos las funciones de la biblioteca a necesidad.                                  | El framework invoca al código y maneja el flujo de ejecución.                                                                                            |
| El desarrollador tiene libertad y control para usar la biblioteca como desee.                   | El framework tiene un comportamiento por defecto y define un estándar para el desarrollo.                                                                |

### Herramientas e infraestructura
.NET integra las siguientes herramientas e infraestructura común:

* __Lenguajes y sus compiladores__.
* __[.NET CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)__ → Una interfaz de línea de comandos que nos provee una serie de instrucciones de consola que nos permitirán desarrollar, construir, ejecutar y públicar aplicaciones construidas con .NET. 
* __MSBuild__ → Un motor para cargar y construir nuestras aplicaciones.
* __[NuGet](https://www.nuget.org/)__ → Un administrador de paquetes desde donde podremos incorporar distintas librerías a nuestros proyectos, muchas de ellas desarrolladas por la comunidad.

## Proceso de compilación
Todos los lenguajes de .NET siguen el mismo proceso de compilación. 

El proceso de compilación pasa por tres estados y se divide en dos etapas. 

![Etapas de la compilación](/clases/00-introduccion/apuntes/compilacion-csharp-01.png)

#### Etapa 1: Compilación estática
El **código fuente (*source code*)** de los programas construidos sobre .NET puede estar escrito con cualquiera de los lenguajes que soporta la plataforma, entre los que se encuentran C#, F# y VB.NET. Cada lenguaje tiene su propio compilador, el de C# se conoce como *Roslyn*. El **compilador** se encarga de traducir el código fuente a un lenguaje ensamblador conocido como **lenguaje intermedio (*intermediate language*)**. 
 
El compilador se ejecuta cuando un desarrollador o proceso automatizado dispara el proceso de construcción (*build*). 

El resultado de la compilación serán archivos que contendrán el lenguaje intermedio y serán aquellos que se distribuirán a los usuarios finales. En Windows estos archivos llevan la extensión *.exe* para ejecutables y *.dll* para bibliotecas. 

#### Etapa 2: Compilación just-in-time
Cuando ejecutamos un programa de .NET, el sistema operativo invoca al Common Language Runtime. Luego, el CLR compila el lenguaje intermedio a **lenguaje nativo (máquina)** en un proceso que se conoce como **compilación just-in-time (JIT)**. Este tipo de compilación tiene como beneficio que abstrae al código fuente de la máquina y el sistema operativo sobre el que se terminará ejecutando el programa, el dependiente es el compilador JIT y el entorno de ejecución. Como desventaja, la compilación JIT realentiza la ejecución del programa ya que se debe esperar a que se compile el lenguaje intermedio.

![Proceso de compilación](/clases/00-introduccion/apuntes/compilacion-csharp-02.png)

### Tiempo de compilación
Se denomina **tiempo de compilación (*compile-time*)** al intervalo de tiempo en el que un compilador compila código escrito en un lenguaje de programación a una forma de código ejecutable por una máquina.

El compilador normalmente realiza un chequeo de sintaxis y una optimización del código generado. 

El tiempo de compilación no sucede en los lenguajes interpretados debido a que estos no necesitan compilarse. 

### Tiempo de ejecución
Se denomina **tiempo de ejecución (*runtime*)** al intervalo de tiempo en el que un programa de computadora se ejecuta en un sistema operativo. Este tiempo se inicia con la puesta en memoria principal del programa, por lo que el sistema operativo comienza a ejecutar sus instrucciones. El intervalo finaliza en el momento en que este envía al sistema operativo la señal de terminación, sea esta una terminación normal, en que el programa tuvo la posibilidad de concluir sus instrucciones satisfactoriamente, o una terminación anormal, en el que el programa produjo algún error y el sistema debió forzar su finalización.

Este término suele emplearse en oposición a tiempo de compilación, para indicar si una acción o hecho sucede en uno u otro tiempo.



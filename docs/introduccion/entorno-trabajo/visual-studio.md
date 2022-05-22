---
title: Instalación de Visual Studio y .NET
sidebar_label: Instalación de Visual Studio y .NET
sidebar_position: 7
slug: /introduccion/visual-studio
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Instalación de .NET
Una **plataforma de desarrollo** es un conjunto de herramientas (editores de código, compiladores, entornos de ejecución, lenguajes de programación, bibliotecas, etc) que nos permite construir determinadas aplicaciones de software.

La plataforma que utilizaremos en la cursada es [**.NET**](https://dotnet.microsoft.com/). Durante el transcurso del cuatrimestre nos adentraremos en las características y detalles de esta tecnología.

### Instrucciones para la instalación del SDK de .NET
Lo primero que haremos es instalar el **SDK** de la última versión de .NET.

:::note Información

Un **kit de desarrollo de software** (en inglés, software development kit o SDK) es generalmente un conjunto de herramientas de desarrollo de software que permite a un desarrollador de software crear una aplicación informática para un sistema concreto, por ejemplo ciertos paquetes de software, entornos de trabajo, plataformas de hardware, computadoras, videoconsolas, sistemas operativos, etcétera. [Ver en Wikipedia](https://es.wikipedia.org/wiki/Kit_de_desarrollo_de_software).

:::

Instrucciones para la instalación:
1. Ingresar a https://dotnet.microsoft.com/download y presionar el botón `Download .NET SDK x64` de la versión marcada como `(recommended)` para descargar el instalador.
2. Una vez descargado el instalador, ejecutarlo, presionar instalar y listo. 

## Instalación de Visual Studio
Hoy en día se puede trabajar con .NET desde cualquier editor de código, por más simple que sea. 

Microsoft tiene una familia de editores de códigos y entornos de desarrollo integrados (IDEs) entre los que se incluyen:
* Visual Studio Code
* GitHub Codespaces
* Visual Studio
* Visual Studio para Mac

Cualquiera de estos sirve para desarrollar profesionalmente con C# y .NET. Sin embargo, durante toda la cursada trabajaremos únicamente con el **IDE Visual Studio** y sobre el sistema operativo **Windows**. 

**IDE** es un acrónimo para **Integrated Development Environment** (Entorno de Desarrollo Integrado, en español), una aplicación que proporciona todos los servicios y herramientas necesarios para desarrollar software (editor de texto, diseñador visual, administrador de archivos, debugger, entre otras). 

:::caution Advertencia 

Por limitaciones del framework para construir aplicaciones desktop que utilizaremos durante la cursada, sólo podremos trabajar sobre Windows.

Si no tenés instalado Windows en tu máquina, te dejamos un tutorial para levantar una máquina virtual: https://youtu.be/66G2p3v4N_M

:::

### Instrucciones para la instalación de Visual Studio
1. Descargar el instalador para la ***última versión*** de Visual Studio desde https://visualstudio.microsoft.com/es/downloads/. Elegir la ***versión Community/Comunidad***, la única gratuita para uso educativo o particular. 
2. Ejecutar el instalador y presionar continuar.
3. Cuando aparezcan las opciones, seleccionar:
    + En la pestaña `Cargas de trabajo` marcar la opción `Desarrollo de escritorio de .NET`.
    + En la pestaña `Componentes individuales` dejar las opciones por defecto y marcar `Diseñador de clases`, `Extensión de GitHub para Visual Studio` y `GIT para Windows`.
    + Opcionalmente, en la pestaña `Paquetes de idioma` marcar el idioma con el que queramos trabajar.
4. Presionar instalar y esperar a que finalice.

***Paso 3 - Pestaña 'Cargas de trabajo'***
![Instalación VS - Cargas de trabajo](/introduccion/entorno-trabajo/instalacion_vs_01.png)

***Paso 3 - Pestaña 'Componentes individuales'***
![Instalación VS - Componentes individuales](/introduccion/entorno-trabajo/instalacion_vs_02.png)

### Herramientas y características adicionales para Visual Studio
#### Shortcuts
Los **atajos de teclado (shortcuts)** son muy útiles para escribir y modificar código de manera más eficiente. Visual Studio cuenta con una serie de atajos de teclado pre-establecidos y permite modificarlos o generar nuevos. 

![Visual Studio Keyboard Shortcuts Cheatsheet](/introduccion/visual-studio-keyboard-shortcut-cheatsheet.png)

Para más información lee el siguiente artículo: [Default keyboard shortcuts in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio?view=vs-2019).

#### Snippets
Los **fragmentos de código (code snippets)** son pequeños bloques de código reutilizable que pueden ser insertados fácilmente en un archivo de código a través de un comando o combinación de teclas. 

Visual Studio trae por defecto una serie de fragmentos de código y además nos permite crear nuevos. 

Para usarlos hay que escribir el comando o palabra clave y presionar dos veces la tecla `TAB`.

Les dejamos algunos snippets útiles:

| Comando del snippet | Descripción                                                          |
| :------------------ | :------------------------------------------------------------------- |
| `cw`                | Método `Console.WriteLine("")`.                                      |
| `if`                | Sentencia de selección `if` (solo if).                               |
| `else`              | Sentencia de selección `else` (solo else).                           |
| `switch`            | Sentencia de selección `switch`.                                     |
| `for`               | Sentencia de iteración `for`.                                        |
| `forr`              | Sentencia de iteración `for` en reversa (decrementando el contador). |
| `foreach`           | Sentencia de iteración `foreach`.                                    |
| `while`             | Sentencia de iteración `while`.                                      |
| `do`                | Sentencia de iteración `do while`.                                   |
| `namespace`         | Declaración de espacio de nombre.                                    |
| `class`             | Declaración de clase.                                                |
| `ctor`              | Constructor público sin parámetros.                                  |
| `mbox`              | Método `MessageBox.Show("")` de Windows Forms.                       |
| `propfull`          | Atributo y propiedad de lectura-escritura para ese atributo.         |
| `prop`              | Propiedad de tipo *auto-property*.                                   |
| `propg`             | Propiedad de tipo *auto-property* con setter privado.                |
| `enum`              | Declaración de enumerado.                                            |
| `equals`            | Sobrescritura del método `Equals`.                                   |
| `Exception`         | Clase para excepción personalizada.                                  |
| `try`               | Sentencia `try-catch`.                                               |
| `tryf`              | Sentencia `try-finally`.                                             |
| `interface`         | Declaración de interface.                                            |
| `using`             | Sentencia `using` para trabajar con recursos no administrados.       |

Para más información lee el siguiente artículo: [Code snippets](https://docs.microsoft.com/en-us/visualstudio/ide/code-snippets?view=vs-2019).

#### Extensions 
Visual studio permite extender sus características nativas instalando extensiones/plugins creados por terceros.

Algunas recomendaciones del equipo docente son:
* [**Select Next Occurrence**](https://marketplace.visualstudio.com/items?itemName=thomaswelen.SelectNextOccurrence) - Permite seleccionar múltiples ocurrencias de un texto seleccionado y editar simultáneamente las mismas. Intenta replicar las características de edición múltiple de editores como Sublime Text o Visual Studio Code. 
![Select Next Ocurrence Gif](../../../static/introduccion/entorno-trabajo/select_next.gif)

Pueden encontrarlos todos en [Visual Studio Marketplace](https://marketplace.visualstudio.com/search?target=VS&category=Tools&vsVersion=&subCategory=All&sortBy=Installs).

[//]: # "TODO ###Debugging en Visual Studio"


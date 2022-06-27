---
title: Guía de estilos
sidebar_label: Guía de estilos
sidebar_position: 8
slug: /introduccion/guia-estilos
hide_table_of_contents: true
---

Las guías de estilo (también llamadas estándares de código o estilos de programación) es el nombre que se le da al conjunto de normas usadas para escribir código, estas son regularmente dependientes del lenguaje de programación. 

Es importante escribir código que sea fácil de mantener, un buen estilo para programar debe tener una estructura de código fácil de entender no solo para quien lo programa sino también para otros programadores y aportar eficiencia al proceso de desarrollo, logrando que los programas sean más robustos y comprensibles.




## Identificadores

Un identificador es el nombre que se asigna a un tipo (clase, interfaz, estructura, registro, delegado o enumeración), miembro, variable o espacio de nombres.

Los nombres de indentificadores deben ser descriptivos. 



### Es preferible la legibilidad a la brevedad

Elija nombre facilmente legibles. En general, no debería utilizar abreviaturas ni acrónimos. Estos elementos hacen 
que los nombres sean menos legibles. De igual forma, es difícil saber cuándo es 
seguro suponer que un acrónimo es ampliamente reconocido. 

Por ejemplo en lugar de declarar una variable que contendra un numero aleatorio como:

 ```csharp
  int numAleat;
  ```

es preferible:

 ```csharp
  int numeroAleatorio;
  ```
ó:

 ```csharp
  int numeroRandom;
  ```

No utilice guiones de subrayado, guiones ni ningún otro carácter no alfanumérico. Evite utilizar identificadores que están en conflicto con palabras clave de lenguajes 
de programación ampliamente utilizados. Aunque los lenguajes conformes a CLS 
deben proporcionar una manera de utilizar palabras clave como palabras normales, 
los procedimientos recomendados indican que no debería obligar a los 
desarrolladores a saber cómo hacerlo.  


## Grafía

### PascalCase

La notación Pascal Case combina las palabras estableciendo que la primera letra de cada palabra esté en mayúscula sin excepciones, y el resto de letras en minúsculas ``ContarPalabras``.

Utilizamos PascalCase para: clases, enumerados, métodos, eventos, namespaces, propiedades e interfaces.

Al nombrar una interface anteponer el nombre con un I. Esto indica claramente a los usuarios del código que es un interface.


 ```csharp
public interface IWorkerQueue
{
}
  ```
### CamelCase

La notación Camel Case combina las palabras estableciendo que la primera letra de cada palabra esté en mayúscula a excepción de la primera palabra, y el resto de letras en minúsculas. 
Utilizamos camelCase para: parámetros, variables locales y atributos.

```csharp
  int notaPrimerParcial;
  ```

  
## Comentarios

Utilizar la documentación de métodos. Colocando sobre la firma de un método /// se 
autocompletará el bloque de documentación:


 ```csharp
/// <summary> 
/// Descripción del método 
/// </summary> 
/// <param name="dato">Información sobre el parámetro</param> 
/// <returns>Información sobre el retorno del método</returns> 
private static int Metodo(string dato)
{
     // ...
}
  ```


## Código Limpio

*Clean Code* es el título de un libro escrito por Robert C. Martin (Uncle Bob) donde nos habla de cómo escribir «código limpio», ese código bien estructurado, fácil de comprender, robusto y, a su vez fácil de mantener. En esta sección tomaremos algunos principios de Clean Code.

> El código limpio se lee como prosa bien escrita. - 
Robert Martin.

### Los nombres importan

> El nombre de una variable, función o clase debe indicar por qué existe, qué hace y cómo se usa. Si el nombre requiere un comentario, significa que el nombre no cumple su cometido. -
Robert Martin

Deben ser preciso y entregar la idea central.

#### Evitar identificadores de una letra

> Los contadores de bucle están bautizados como i, j o k, pero nunca con otra variable de una sola letra. Recordar que r es la versión en minúscula de una URL sin el host y el sistema… es algo que podrías recordar el primer día, pero seguro que al día siguiente tendrías que volver a mirar el código para averiguar que es. -
Robert Martin

### Hacer una cosa

Los métodos deben hacer. Deben hacerlo bien y debe ser lo unico que hagan. 
Deben ser de un tamaño reducido con pocos niveles de anidamiento. Si un método tiene muchas lineas probablemente necesite divir el método en varios procedimientos. Los métodos deben ser simples, claros y pequeños.

### La regla del Boy Scout

> Dejar el campamento más limpio de lo que se ha encontrado.

Dejar el código mejor de lo que lo encontraste.

### DRY (Don´t repeat yourself)

No deben existir dos partes del programa que realicen la misma función

### Los comentarios mienten

A menudo el código es modificado, los comentarios no. Los comentarios deben acompañar las modificaciones en el código.









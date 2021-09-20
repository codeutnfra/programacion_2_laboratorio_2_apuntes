---
title: Apuntes - Herencia
sidebar_label: Herencia
slug: /clases/herencia/apuntes/herencia
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Herencia
En el desarrollo de software encontraremos con frecuencia objetos que se parecen mucho a otros objetos, salvo por algunas diferencias puntuales. Por ejemplo, en un sistema de liquidación de sueldos podemos tener empleados full-time y empleados part-time. La mayoría de los datos relacionados a los dos tipos de empleados es la misma, pero probablemente existirán algunas diferencias. En la programación orientada a objetos podremos definir un tipo general de empleado y luego, a partir de ese, definir los tipos más específicos: full-time y part-time. Cuando una operación en un empleado no depende de si el empleado trabaja tiempo completo o medio tiempo, entonces la operación es manejada dentro por el tipo más general. De lo contrario, se manejará en los tipos específicos. 

Definir similitudes y diferencias entre objetos de esta forma se conoce como **herencia**, el tercer pilar de la programación orientada a objetos que introduciremos. Se trata de una relación entre una o más clases en la que se comparten los atributos y métodos definidos en otra clase. 

La clase de la que se hereda se la denomina clase padre, super-tipo o **clase base**, y a la clase que hereda se la conoce como clase hija, sub-tipo o **clase derivada**. Una clase derivada posee los atributos y métodos de la clase base, además de los propios.

![Ejemplo herencia](/clases/08-herencia/apuntes/herencia_animal.PNG)

La idea y objetivo principal radican en crear una clase que defina un comportamiento (métodos) y características (atributos) que luego podrán ser usados en otra clase. Vamos a poder compartir la estructura y miembros de esta primer clase definida y agregar contenido adicional. La clase base es entonces una **generalización** de un grupo de características y comportamiento que tienen en común las clases derivadas, mientras que las últimas son una **especialización** de la clase base.  

La herencia debe aplicarse cuando existe la relación semántica *"es un"* entre la clase derivada y la clase base: un perro es una mascota, una mascota es un animal, un empleado de tiempo completo es un empleado, un dolar es una moneda, una lapicera es un producto, etc. Que existan objetos que compartan ciertos atributos y operaciones no es una razón suficiente para aplicar herencia, deben además cumplir con esta condición de ser la entidad padre desde el significado. Una mascota y su compañero humano, ambos tienen nombre y fecha de nacimiento, pero la mascota no es una persona ni tampoco un cliente.    

## Tipos de herencia
Existen diferentes tipos de herencia que variarán dependiendo del lenguaje que estemos usando.

#### Herencia simple
En la herencia simple una clase derivada hereda de una sola clase base, adquiriendo todos sus miembros. 

![Herencia simple](/clases/08-herencia/apuntes/Single_Inheritance.jpg)

#### Herencia múltiple
Se dice herencia múltiple cuando una clase puede tener más de una clase base, adquiriendo los miembros de todos sus padres.

Este tipo de herencia es muy difícil de implementar de forma eficaz. Puede terminar amplificando todos los riesgos y aspectos negativos de aplicar herencia. 

![Herencia múltiple](/clases/08-herencia/apuntes/Multiple_Inheritance.jpg)

#### Herencia multi-nivel
La herencia multi-nivel se da cuando una clase derivada hereda de otra clase derivada que a su vez hereda de otra clase. 

Imaginemos que tenemos la clase `Perro`, que hereda de `Mascota`. `Mascota`, a su vez, hereda de `Animal`. Esto es herencia multi-nivel. `Mascota` heredará atributos y métodos de `Animal`, a su vez `Perro` heredará los miembros de `Mascota` incluyendo aquellos heredados de `Animal`.

Esta propiedad de la herencia se conoce como **transitividad**: Si una clase `C` hereda de una clase `B` y, a su vez, `B` hereda de `A`, entonces `C` también hereda de `A`.

![Herencia multi-nivel](/clases/08-herencia/apuntes/Multilevel_Inheritance.jpg)

#### Herencia jerárquica
En este tipo de herencia una clase sirve como base de más de un sub-tipo. Por ejemplo, la clase `Animal` puede tener como derivadas a `AnimalDomesticado` y `AnimalNoDomesticado`, ambas tienen una clase base en común. 

#### Herencia híbrida 
Hablamos de herencia híbrida cuando se mezclan dos o más de los tipos de herencia antes nombrados. Por ejemplo, la clase `Animal` es padre de `Mascota` y esta es base de `Perro` y `Gato`, se trata de una mezcla entre herencia jerárquica y herencia multi-nivel.

## S.O.L.I.D: Principio de sustitución de Liskov
En 1988, la científica [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov) propuso que cada clase que hereda de otra debe poder usarse como su padre sin necesidad de conocer las diferencias entre ellas. En otras palabras, todas las operaciones definidas en la clase base deben significar lo mismo cuando son reutilizadas por las clases derivadas. 

Si tenemos una clase `Cuenta` y sus derivadas `CuentaCorriente` y `CajaDeAhorro`, debería poder invocar cualquiera de los métodos definidos en la clase base sin preocuparme sobre cuál es el tipo específico del objeto dentro de la jerarquía de herencia. Las implementaciones de un determinado método en cualquiera de las clases derivadas deberían retornar la misma información o realizar la misma acción, más allá de las diferencias en cómo lo resuelva. 

Lo primero que debemos saber es que, un sub-tipo es también del tipo padre, por lo que se pueden almacenar referencias a objetos de tipos derivados en variables o argumentos del tipo base. 

Si `S` hereda de `T`, entonces los objetos de tipo `T` podrán ser reemplazados por objetos del tipo `S`. 

```csharp
T objeto = new S();

Animal animal = new Perro();
Persona persona = new Persona();
```

En segundo lugar, cuando reemplacemos una instancia del tipo base por una del tipo derivado, no debería afectar el funcionamiento del sistema. Analicemos el siguiente ejemplo donde `CuentaCorriente` y `CajaDeAhorro` heredan de `Cuenta`. 

```csharp
Cuenta cuenta = new CuentaCorriente();

cuenta.CobrarComisiones();
```

```csharp
Cuenta cuenta = new CajaDeAhorro();

cuenta.CobrarComisiones();
```

El método `CobrarComisiones` del tipo `Cuenta` debería realizar un débito en la cuenta de acuerdo a las comisiones que apliquen por el servicio. Si bien dependiendo del tipo de cuenta se pueden llegar a debitar distintos montos, lo que hace el método no cambia. El significado de la operación no cambia, puede llegar a haber diferencias en los detalles del cómo lo resuelve, pero la acción desde lo semántico es la misma. 

Se rompería el principio de sustitución de Liskov si `CobrarComisiones` de `CuentaCorriente` además de debitar las comisiones, enviara los datos al sistema de contabilidad y el de `CajaDeAhorro` no. En este caso, sustituir el tipo base por uno u otro tipo derivado no haría lo mismo.  

## Beneficios de aplicar herencia
El propósito de la herencia es simplificar el código al definir una clase que especifica elementos comunes a dos o más clases derivadas. Nos ayuda a eliminar la duplicación de código y datos, reutilizando elementos comunes de objetos estrechamente relacionados. 

Nos permite organizar de manera más óptima las clases que componen la realidad de nuestro programa, agrupándolas por criterios que compartan. Una vez detectado lo que tienen en común, podremos implementarlo en una clase base y luego declarar clases más específicas que hereden de ella y agreguen nuevos datos y funcionalidad. Construimos nuevas clases a partir de otra ya existente, en vez de empezar desde cero. 

## Riesgos de aplicar herencia
La herencia es una herramienta muy poderosa que nos da la programación orientada a objetos, pero puede llegar a ser contraproducente cuando se utiliza sin criterio o en casos donde no aplica. 

En principio la herencia agrega complejidad a la solución. Debe ser usada con criterio y cuidado, y estar correctamente documentada. 

Cuando decidimos crear una nueva clase heredando de otra existente, estamos diciendo que la nueva clase *"es una"* versión más especializada de la clase base. La clase base impone definiciones y restricciones sobre cómo operará la clase derivada. Si la clase derivada no va a adherir completamente a la interfaz de la clase base, entonces no corresponde aplicar herencia.  

Cumplir con el principio de sustitución de Liskov es importante. Si debemos preocuparnos constantemente sobre las posibles diferencias entre las implementaciones de una misma operación en las distintas clases derivadas, entonces estamos incrementando la complejidad de la solución en vez de reducirla. 

## Herencia y composición
La herencia se contrasta con el concepto de composición. La **composición** es la idea de que un objeto contiene o está compuesta de otros objetos. Por ejemplo, un equipo de futbol se integra de jugadores.

La implementación es sencilla, los objetos de los que se compone un tipo deberán ser atributos de la clase contenedora. 

```csharp
public class EquipoFutbol
{
    private List<Jugador> jugadores;
}
```

La herencia es una relación *"es un"*, mientras que la composición refleja una relación *"tiene un"*. 

La composición es utilizada con mucha más frecuencia que la herencia y tiene menos puntos en contra. En principio otorga mayor flexibilidad al diseño. Es más natural construir clases a partir de varios componentes que tratar de encontrar puntos en común entre ellos y crear una jerarquía de herencia. El pedal del acelerador y el volante comparten muy pocos rasgos en común, pero ambos son componentes vitales en un auto. 

La composición también resulta más estable frente a los cambios en las reglas de negocio, ya que es más fácil de adaptar frente a un cambio o particularidad en alguna de las clases.  

Existen lenguajes, como [Go](https://golang.org/), que no tienen herencia y sólo se puede trabajar con composición. 
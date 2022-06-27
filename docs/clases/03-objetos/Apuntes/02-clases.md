---
sidebar_label: Clases
slug: /clases/objetos/apuntes/clases
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---


## Clases

Un tipo que se define como una clase es un tipo de referencia . En tiempo de ejecución, cuando declara una variable de un tipo de referencia, la variable contiene el valor ``null`` hasta que crea explícitamente una instancia de la clase utilizando el operador ``new`` , o le asigna un objeto de un tipo compatible que puede haber sido creado en otro lugar, como se muestra en el siguiente ejemplo:

```csharp
MyClass mc = new MyClass();

MyClass mc2 = mc;
```

### Declaración

Las clases se declaran utilizando la palabra reservada ``class`` seguida de un identificador.

```csharp
public class Customer
{
   // 
}
```

La palabra reservada ``class`` está precedida por el nivel de acceso. Debido a que se usa en este caso ``public``, cualquiera puede crear instancias de esta clase. El nombre de la clase sigue a la palabra reservada ``class``. El nombre de la clase debe ser sustantivo singular. El resto de la definición es el cuerpo de la clase, donde se definen el comportamiento y los datos. Los campos, las propiedades, los métodos y los eventos de una clase se denominan colectivamente miembros de la clase.

### Creando Objetos

Aunque a veces se usan indistintamente, una clase y un objeto son cosas diferentes. Una clase define un tipo de objeto, pero no es un objeto en sí mismo. Un objeto es una entidad concreta basada en una clase y, a veces, se lo denomina instancia de una clase.

Los objetos se pueden crear utilizando la palabra reservada ``new``  seguida del nombre de la clase en la que se basará el objeto, así:

```csharp
Customer object1 = new Customer();
```

Cuando se crea una instancia de una clase, se devuelve una referencia al objeto. En el ejemplo anterior, ``object1`` es una referencia a un objeto que se basa en ``Customer``. Esta referencia apunta al nuevo objeto pero no contiene los datos del objeto en sí. De hecho, puede crear una referencia de objeto sin crear ningún objeto:

```csharp
Customer object2;
```
No recomendamos crear referencias a objetos como la anterior que no hacen referencia a un objeto porque intentar acceder a un objeto a través de dicha referencia fallará en tiempo de ejecución. Sin embargo, dicha referencia se puede hacer para referirse a un objeto, ya sea creando un nuevo objeto o asignándole un objeto existente, como este:

```csharp
Customer object3 = new Customer();
Customer object4 = object3;
```

Este código crea dos referencias a objetos que hacen referencia al mismo objeto. Por lo tanto, cualquier cambio que se realice en el objeto ``object3`` se refleja en los usos posteriores de ``object4``. Debido a que se hace referencia a los objetos que se basan en clases, las clases se conocen como tipos de referencia.


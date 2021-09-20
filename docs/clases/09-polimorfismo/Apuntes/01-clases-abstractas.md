---
sidebar_label: Clases abstractas
slug: /clases/polimorfismo/apuntes/abstract
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Clases abstractas
Las clases se pueden declarar como abstractas poniendo la palabra reservada `abstract` antes de la definición de la clase.

```csharp
public abstract class Figura{
    //...
} 
```

Las **clases abstractas** no se pueden instanciar, su propósito es proporcionar una definición común que modele una jerarquía de herencia. Por ejemplo, se puede definir una clase abstracta que se usa como parámetro para muchas de sus funciones y que los programadores proporcionen su propia implementación a partir de una clase derivada.

No es posible marcar una clase abstracta con el modificador `sealed` porque ambos modificadores tienen significados opuestos. El modificador `sealed` evita que una clase se pueda heredar y el modificador `abstract` requiere que se herede una clase.

Es posible tener variables con tipos que sean abstractos. Estas variables serán `null` o contendrán referencias a instancias de una clase derivada no-abstracta.

```csharp
public abstract class Figura
{
    //...
} 

public class Cuadrado : Figura
{
    //...
} 

Figura figura = new Cuadrado();
```

## Métodos abstractos
Podemos definir un método como abstracto con la palabra reservada `abstract` antes del tipo de retorno del método. 

Por ejemplo:

```csharp
public abstract class Figura
{
    public abstract float CalcularArea();
}
```

Los métodos abstractos no tienen implementación, por lo que la definición del método va seguida de un `;` en lugar del cuerpo del método. Las clases derivadas de la clase abstracta **deben** dar una implementación a todos los métodos abstractos. 

Las clases abstractas son las únicas que pueden contener miembros abstractos, por lo que las declaraciones de métodos abstractos sólo se permiten en clases abstractas.

La implementación la proporciona un método *override* que es miembro de una clase no abstracta. 

```csharp
public abstract class Cuadrado : Figura
{
    int lado;
   
    public override float CalcularArea(){
        return lado * lado;
    }
}
```
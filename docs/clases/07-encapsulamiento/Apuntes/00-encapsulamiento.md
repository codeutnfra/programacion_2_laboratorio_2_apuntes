---
title: Apuntes - Encapsulamiento
sidebar_label: Encapsulamiento
slug: /clases/encapsulamiento/apuntes/encapsulamiento
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## Encapsulamiento
El **encapsulamiento o encapsulación** es otro de los pilares de la programación orientada a objetos. El encapsulamiento retoma justo donde nos deja el pilar que vimos anteriormente, la abstracción. Recordemos que la abstracción es la habilidad de representar algo complejo de una forma simple, quedándonos con lo que resulta relevante dentro del contexto de negocio o problema que queremos resolver. De aplicar la abstracción a un determinado problema se desprende el diseño de las clases que darán forma a la implementación de la solución. 

El encapsulamiento consiste en agrupar los datos de la clase con los métodos que opoeran sobre esos datos. La **interfaz de una clase** es el grupo de métodos públicos (incluyendo getters y setters) que expone la clase, es una abstracción de la implementación de la solución que se esconde tras esa interfaz. 

El encapsulamiento nos ayuda a manejar la complejidad de la solución al restringir el acceso de los usuarios de la clase (otros desarrolladores) a dicha complejidad. 

C#, como otros lenguajes orientados a objetos, nos permite proteger o crear límites de acceso a los atributos y métodos de una clase, controlando con ello el comportamiento fuera y dentro de la misma clase.

La encapsulación se encarga de mantener ocultos los procesos internos de un objeto, dándole a los programadores que lo utilicen acceso sólo a lo que necesitan.

### Niveles de ocultamiento / accesibilidad
Los **modificadores de acceso** son palabras clave que se utilizan para especificar la accesibilidad declarada de una clase o miembro de una clase. El nivel de accesibilidad controla si se puede usar desde otra clase dentro del mismo proyecto o en otros proyectos. 

Los siguientes seis niveles de accesibilidad se pueden especificar mediante los modificadores de acceso:

#### Public
El acceso no está restringido. Se puede acceder a una clase o miemebro *public* desde cualquier otro código en el mismo proyecto u otro proyecto que haga referencia a él.

#### Private
El acceso está limitado al tipo contenedor. Sólo se puede acceder a una clase o miembro *private* desde la misma *clase* o *struc*.

#### Protected
El acceso está limitado a la clase contenedora o las derivadas de la clase contenedora.  Se puede acceder al miembro *protected* desde la misma clase o su derivada.

#### Internal
El acceso está limitado al proyecto actual. Se puede acceder a una clase o miembro *private* desde cualquier código del mismo proyecto, pero no desde otro proyectos.

#### Protected Internal
El acceso está limitado al proyecto actual o las derivadas de la clase contenedora. Se puede acceder a una clase o miembro *protected internal*  desde cualquier código en el proyecto en el que está declarado, o desde una clase derivada en otro proyecto.

#### Private Protected 
El acceso está limitado a la clase contenedora o las derivadas de la clase contenedora dentro del proyecto actual. Se puede acceder a una clase o miembro *private protected* sólo en la clase que lo declaró o sus derivadas siempre dentor del mismo proyecto.

### Resumen

| Desde donde se llama | public | protected | internal | protected internal | private protected | private |
| -------------------- | ------ | --------- | -------- |--  |	--   |   --
Dentro de la clase |   ✔️️  |   ✔️  |   ✔️  |   ✔️  |   ✔️  |   ✔️  |
Clase derivada (mismo proyecto)|	✔️|	✔️|	✔️|	✔️|	✔️|	❌|
Clase no derivada (mismo proyecto)|	✔️|	❌|	✔️|	✔️|	❌|	❌|
Clase derivada (proyecto diferente)	|✔️|	✔️	|❌	|✔️	|❌	|❌|
Clase no derivada (proyecto diferente)|	✔️|	❌	|❌	|❌|	❌|	❌|


El siguiente ejemplo demuestran cómo especificar modificadores de acceso en una clase y miembro:

```csharp
public class Bicicleta
{
    public void Pedalear() { }
}
```

:::note Atención

No todos los modificadores de acceso son válidos para todas los clases o miembros en todos los contextos. En algunos casos, la accesibilidad de un miembro está limitada por la accesibilidad de su clase contenedora.

Los operadores definidos por lxs programadorxs siempre deben declararse como public y static

:::

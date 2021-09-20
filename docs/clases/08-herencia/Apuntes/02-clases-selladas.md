---
sidebar_label: Clases selladas
slug: /clases/herencia/apuntes/clases-selladas
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Clases selladas
Existe la posibilidad de marcar una clase para que no pueda ser heredada (no pueda ser base). Para poder lograr esto agregaremos el modificador `sealed` a la declaración definiendo a la clase como **sellada**. De esta manera explicitaremos que nuestra clase no puede tener clases hijas. 

Es importante recordar que gran parte de las clases son autónomas y no están pensadas para ser heredadas, en estos casos declararlas como selladas sería correcto. También se utilizan este tipo de clases para marcar el fin dentro de una jerarquía de herencia. 

Las clases selladas no pueden ser base pero sí pueden ser derivadas, es decir, heredar de otras clases. 

```csharp
public sealed class Estudiante : Persona
{
    private int legajo;
    private List<string> materias;

    public string Estudiar() 
    {   
        return "Estudiando...";
    }
}
```

En el ejemplo anterior `Estudiante` hereda de `Persona` pero no podrá ser base de ninguna clase ya que fue declarada con el modificador `sealed`, es una clase sellada.
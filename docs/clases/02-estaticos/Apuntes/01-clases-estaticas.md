---
sidebar_label: Clases estáticas
slug: /clases/estaticos/apuntes/clases-estaticas
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Clases estáticas
Las **clases estáticas** son agrupadores de atributos estáticos y métodos estáticos, es decir de datos y funciones que operan sobre esos datos respectivamente.

Para declarar una clase se debe indicar el nivel de acceso con un modificador de visibilidad (que puede ser `internal` o `public`) seguido de la palabra reservada `class` y un identificador para la clase. 

Los nombres de las clases deben ser sustantivos con notación *PascalCase*. 

Opcionalmente, seguido del modificador de acceso puede ir algún modificador especial como `static`.

```csharp
public static class Cotizador
{
    private const decimal pesosPorDolarComprado = 96.75M;
    private const decimal pesosPorDolarVendido = 102.82M;

    public static decimal CotizarVentaDolares(decimal montoDolaresAVender)
    {
        decimal costoEnPesos = montoDolaresAVender * pesosPorDolarVendido;

        return costoEnPesos;
    }

    public static decimal CotizarCompraDolares(decimal montoDolaresAComprar)
    {
        decimal pagoEnPesos = montoDolaresAComprar * pesosPorDolarComprado;

        return pagoEnPesos;
    }
}
```

Las constantes son como atributos estáticos, la única diferencia es que su valor no puede cambiar en tiempo de ejecución. 

Si seguimos buenas prácticas de programación, los atributos de una clase siempre deberán ser privados.

[//]: # "TODO ### Crear una biblioteca de clases. Establecer como proyecto de inicio."
[//]: # "TODO ### Nulleables"
[//]: # "TODO ### Conversiones out y ref"
[//]: # "TODO ### Debugging en visual studio"
[//]: # "TODO ### Agregar ejercicio de distancias. Hemos recorrido un largo camino."
[//]: # "TODO ### Agregar ejercicio calculín"
[//]: # "TODO ### Agregar ejercicio de matematicas hijo"
[//]: # "TODO ### Agregar ejercicio capicua
Un entorno de ejecución o runtime permite abstraer a nuestros programas de la arquitectura sobre la que se ejecutan. Todos los programas creados con .NET se ejecutan sobre un runtime. 
Los entornos de ejecución de .NET funcionan como una máquina virtual que sirve de intérprete e intermediario para darle instrucciones a la máquina sobre la que se están ejecutando. Además, son los encargados de administrar la memoria y los recursos. 
El Common Language Runtime (CLR) es el entorno de ejecución de las aplicaciones construidas sobre .NET Framework. El Core Common Language Runtime (CoreCLR) es el entorno de ejecución de las aplicaciones construidas sobre .NET Core."



---
sidebar_label: "I02 - La centralita: Episodio I"
title: "Ejercicio I02 - La centralita: Episodio I"
sidebar_position: 2
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Esta aplicación servirá de control de llamadas realizadas en una central telefónica.

:::info Información

Las centralitas telefónicas son dispositivos hardware o software que concentran todos los teléfonos de una oficina, edificio o zona geográfica, estableciendo conexiones entre los diferentes usuarios.

:::

![Centralita tradicional](/clases/08-herencia/ejercicios/centralita-tradicional.jpg)

Crear en una solución llamada `CentralTelefonica` un proyecto de tipo biblioteca de clases nombrado como `Centralita` que contenga la siguiente jerarquía de clases:

![Diagrama de clases](/clases/08-herencia/ejercicios/centralita-diagram.PNG)

#### `Llamada`
* Tendrá todos sus atributos con el modificador `protected`. Crear las propiedades de **sólo lectura** para exponer estos atributos.
* `OrdenarPorDuracion` es un método **de clase** que recibirá dos `Llamadas`. Se utilizará para ordenar una lista de llamadas de forma **ascendente**.
* `Mostrar` es un método de instancia que deberá retornar todos los datos de la llamada como texto. Utilizar `StringBuilder`.

#### `Local`
* Hereda de `Llamada`.
* Método `Mostrar` retornará como texto todos los datos de la clase base y agregará el costo de la llamada. Utilizar `StringBuilder`.
* `CalcularCosto` será **privado**. Retornará el valor de la llamada a partir de la duración y el costo de la misma.
* La propiedad `CostoLlamada` retornará el precio, que se calculará en el método `CalcularCosto`.

#### `Provincial`
* Hereda de `Llamada`.
* Método `Mostrar` retornará como texto todos los datos de la clase base y agregará el costo de la llamada y la franja horaria. Utilizar `StringBuilder`.
* `CalcularCosto` será **privado** y retornará el valor de la llamada a partir de la duración y el costo de la misma. Los valores serán: 
  * `Franja_1`: 0.99
  * `Franja_2`: 1.25
  * `Franja_3`: 0.66

#### `Centralita`
* `CalcularGanancia` será privado. Este método recibe un enumerado `TipoLlamada` y retornará el valor de lo recaudado, según el criterio elegido (ganancias por las llamadas del tipo `Local`, `Provincial` o de `Todas` según corresponda).
* El método `Mostrar` expondrá la razón social, la ganancia total, ganancia por llamados locales y provinciales y el detalle de las llamadas realizadas.
* La lista sólo se inicializará en el constructor por defecto `Centralita`.
* Las propiedades `GananciaPorTotal`, `GananciaPorLocal` y `GananciaPorProvincial` retornarán el precio de lo facturado según el criterio (llamada local, provincial o todas). Dichos valores se calcularán en el método `CalcularGanancia`.

Generar un nuevo proyecto de consola llamado `Test`. El namespace también deberá llamarse `Test`. 

Agregar el siguiente código en el método `Main` para probar la centralita:

```csharp
// Mi central
Centralita c = new Centralita("Fede Center");

// Mis 4 llamadas
Local l1 = new Local("Bernal", 30, "Rosario", 2.65f);
Provincial l2 = new Provincial("Morón", Provincial.Franja.Franja_1, 21, "Bernal");
Local l3 = new Local("Lanús", 45, "San Rafael", 1.99f);
Provincial l4 = new Provincial(Provincial.Franja.Franja_3, l2);

// Las llamadas se irán registrando en la Centralita.
// La centralita mostrará por pantalla todas las llamadas según las vaya registrando.
c.Llamadas.Add(l1);
Console.WriteLine(c.Mostrar());
c.Llamadas.Add(l2);
Console.WriteLine(c.Mostrar());
c.Llamadas.Add(l3);
Console.WriteLine(c.Mostrar());
c.Llamadas.Add(l4);
Console.WriteLine(c.Mostrar());

c.OrdenarLlamadas();
Console.WriteLine(c.Mostrar());

Console.ReadKey();
```

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
---
sidebar_label: I01 - Las aventuras de Lápiz y Bolígrafo
title: Ejercicio I01 - Las aventuras de Lápiz y Bolígrafo
sidebar_position: 1
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Crear un proyecto de tipo biblioteca de clases y crear las clases del siguiente diagrama:

![Diagrama de clases](/clases/13-interfaces/ejercicios/boligrafo-y-lapiz-diagram.PNG)

1. La clase `Boligrafo` implementará la interfaz de forma **implícita** y en `Lapiz` de forma **explícita**.

2. En `Lapiz`:
   1. El método `Escribir` reducirá la mina en 0.1 por cada carácter escrito.
   2. El método `Recargar` lanzará `NotImplementedException`.
   3. El color será gris (grey), sin posibilidad de modificarlo. El `set` lanzará `NotImplementedException`.
   4. La propiedad `UnidadesDeEscritura` retornará el valor del atributo `tamanioMina`.

3. En `Boligrafo`:
   1. El método `Escribir` reducirá la tinta en 0.3 por cada carácter escrito.
   2. El método `Recargar` incrementará la tinta en tantas unidades como se agreguen.
   3. La propiedad `UnidadesDeEscritura` retornará el valor del atributo `tinta`.

4. En ambas clases el método `ToString` retornará un texto informando si es un lápiz o un bolígrafo, el color de escritura y el nivel de tinta.

5. Crear un proyecto de consola y agregar el siguiente código en el método `Main`, modificar si hace falta:

```csharp
ConsoleColor colorOriginal = Console.ForegroundColor;

Lapiz miLapiz = new Lapiz(10);
Boligrafo miBoligrafo = new Boligrafo(20, ConsoleColor.Green);

EscrituraWrapper eLapiz = miLapiz.Escribir("Hola");
Console.ForegroundColor = eLapiz.color;
Console.WriteLine(eLapiz.texto);
Console.ForegroundColor = colorOriginal;
Console.WriteLine(miLapiz);

EscrituraWrapper eBoligrafo = miBoligrafo.Escribir("Hola");
Console.ForegroundColor = eBoligrafo.color;
Console.WriteLine(eBoligrafo.texto);
Console.ForegroundColor = colorOriginal;
Console.WriteLine(miBoligrafo);

Console.ReadKey();
```

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
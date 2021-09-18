---
title: Cuestionario - Colecciones
sidebar_label: Cuestionario
slug: /clases/colecciones/apuntes/cuestionario
hide_table_of_contents: true
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

### Arrays
1. ¿Qué es un array "jagged"? ¿En qué valor se inicializan sus elementos?
2. ¿Los arrays son objetos? 
3. ¿Qué significa que en C# los arrays son de "base-cero"?
4. Los arrays implementan la interfaz IEnumerable, ¿qué es lo que esto les permite hacer?
5. ¿Cómo se declara e instancia un array multidimensional?
6. ¿El método `Array.Resize` cambia el tamaño de la instancia de array proveída o genera una nueva con distinto tamaño? ¿Por qué?
7. Considerando que la propiedad `Length` devuelve la cantidad TOTAL de elementos de TODAS las dimensiones del array, ¿qué valor vamos a mostrar por consola en el siguiente código? 

```csharp
int[,,] a = new int[3, 2, 3];
int[,] b = new int[3, 4];
Console.WriteLine("Array length = {0}", a.Length + b.Length)
```

### Colecciones
1. ¿Cuál es la diferencia entre colecciones y matrices?
2. ¿Cuál es la diferencia entre las colecciones genéricas y las no-genéricas?
3. ¿Cuál es la diferencia entre una cola (`Queue`) y una pila (`Stack`). Asocie con los conceptos "FIFO" y "LIFO".
4. Describa las siguientes colecciones: `List`, `Dictionary`, `SortedList`, `Arraylist`, `Hashtable`. Clasifíquelas en genéricas o no-genéricas.
5. ¿Por qué piensa que las colas y pilas no traen un método para ordenarlas? Piense en el uso de dichas colecciones. 
6. ¿Cuál es la diferencia entre colas y pilas genéricas y no-genéricas?
7. ¿Cual es la salida del siguiente código?

```csharp
short cantidad = 4;
Queue<int> cola = new Queue<int>();
Stack<int> pila = new Stack<int>();

for(int i = 0; i <= cantidad * 2; i += 2 ){
    cola.Enqueue(i);
}

foreach(int i in cola){
    pila.Push(i);
}

foreach(int i in pila){
    Console.Write("{0}, ",i );
}
```
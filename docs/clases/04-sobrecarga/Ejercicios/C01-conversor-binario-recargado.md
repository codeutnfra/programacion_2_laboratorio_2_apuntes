---
sidebar_label: C01 - Conversor binario recargado
title: Ejercicio C01 - Conversor binario recargado
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Partiendo del ejercicio [Conversor binario](../../02-estaticos/Ejercicios/I03-conversor-binario.md), se pide agregar las clases:

`NumeroBinario`:
1. Único atributo `numero` de tipo `string`.
2. Único constructor **privado** (recibe un parámetro de tipo `string`).

`NumeroDecimal`:
1. Único atributo `numero` de tipo `double`.
2. Único constructor **privado** (recibe un parámetro de tipo `double`).

Utilizando los métodos de la clase `Conversor` donde corresponda, agregar las sobrecargas de operadores:

`NumeroBinario`:
1. `string` `+` (NumeroBinario, NumeroDecimal) 
1. `string` `-` (NumeroBinario, NumeroDecimal) 
1. `bool` `==` (NumeroBinario, NumeroDecimal) 
1. `bool` `!=` (NumeroBinario, NumeroDecimal) 

`NumeroDecimal`:
1. `double` `+` (NumeroDecimal, NumeroBinario) 
1. `double` `-` (NumeroDecimal, NumeroBinario) 
1. `bool` `==` (NumeroDecimal, NumeroBinario) 
1. `bool` `!=` (NumeroDecimal, NumeroBinario) 

Agregar conversiones **implícitas** para poder ejecutar:

```csharp
NumeroBinario objBinario = "1001";
NumeroDecimal objDecimal = 9;
```

Agregar conversiones **explícitas** para poder ejecutar:

```csharp
string binario = (string)objBinario;
double numeroDecimal = (double)objDecimal;
```

Generar el código en el método `Main` para instanciar un objeto de cada tipo y operar entre ellos, imprimiendo cada resultado por pantalla. 

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/YOdgSwkFTIA) | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |



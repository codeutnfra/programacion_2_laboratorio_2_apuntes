---
sidebar_label: Sentencias de selección
slug: /clases/introduccion/apuntes/sentencias-seleccion
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Operadores lógicos
Los **operadores lógicos** trabajan con valores booleanos. El resultado también será `true` o `false`. 

Las [tablas de verdad](https://es.wikipedia.org/wiki/Tabla_de_verdad) para los operadores lógicos son:

### Negación
Cuando usamos el **operador de negación** la expresión retorna  si **todos** los operandos son `true`.

El símbolo para el operador OR es `&`.

| Operando A | Operando B | Resultado |
| :--------- | :--------- | :-------- |
| `false`    | `false`    | `false`   |
| `true`     | `false`    | `false`   |
| `false`    | `true`     | `false`   |
| `true`     | `true`     | `true`    |

### Operador AND - Conjunción lógica
Cuando usamos el **operador AND** la expresión retorna `true` si **todos** los operandos son `true`.

El símbolo para el operador OR es `&`.

| Operando A | Operando B | Resultado |
| :--------- | :--------- | :-------- |
| `false`    | `false`    | `false`   |
| `true`     | `false`    | `false`   |
| `false`    | `true`     | `false`   |
| `true`     | `true`     | `true`    |

### Operador OR - Disyunción lógica
Cuando usamos el **operador OR** la expresión retorna `true` si **al menos uno de** los operandos es `true`.

| Operando A | Operando B | Resultado |
| :--------- | :--------- | :-------- |
| `false`    | `false`    | `false`   |
| `true`     | `false`    | `true`    |
| `false`    | `true`     | `true`    |
| `true`     | `true`     | `true`    |

El símbolo para el operador OR es `|`.

### Operador XOR - Disyunción exclusiva
Cuando usamos el **operador XOR** la expresión retorna `true` si **sólo uno de** los operandos es `true`.

| Operando A | Operando B | Resultado |
| :--------- | :--------- | :-------- |
| `false`    | `false`    | `false`   |
| `true`     | `false`    | `true`    |
| `false`    | `true`     | `true`    |
| `true`     | `true`     | `false`   |

El símbolo para el operador XOR es `^`.

## Operadores lógicos condicionales
Los **operadores lógicos condicionales** son similares a los operadores lógicos pero son más eficientes ya que no evalúan toda la expresión si ya está determinado el resultado. 

Por ejemplo, sabemos que en una operación de conjunción lógica (AND) ambos operandos tienen que ser verdaderos para que la expresión sea verdadera. Si ya el primer operando se resuelve como false, el **operador condicional lógico AND (`&&`)** no evaluará el segundo operando. A diferencia del operador lógico AND (`&`) que evaluará ambos operandos siempre. 

```csharp
//Si MetodoUno() es True, entonces NO se evalua MetodoDos()

if (MetodoUno() || MetodoDos())
{ }

//Si MetodoUno() es False, entonces NO se evalua MetodoDos()

if (MetodoUno() && MetodoDos())
{ }
```

:::tip Buena práctica

Los operadores lógicos condicionales como `&&` y `||` hacen a nuestras aplicaciones más eficientes. **Son los que usaremos durante la cursada**. Sin embargo, debemos ser conscientes de la diferencia con los operadores lógicos para evitar introducir errores sutiles por no conocer como funcionan.  

:::

## Sentencias de selección
Las **sentencias de selección** permiten a una aplicación ramificarse y tomar distintos flujos de código dependiendo de un criterio o condición. 

En C# existen dos sentencias de selección `if` y `switch`, y la segunda es sólo para hacer más legible el código en algunos escenarios. 

### Sentencia if
La **sentencia if** evalúa una expresión booleana. Si la expresión resulta en `true`, se ejecutará el bloque de código asociado al `if`. 

```csharp
// Si x es menor a 10 se ejecuta MetodoUno() de lo contrario no pasa nada.

if (x < 10) 
{
    MetodoUno();
}
```

:::tip

Existe un [snippet](/introduccion/entorno-trabajo/visual-studio.md#snippets) para escribir la sentencia `if` más rápido, para accionarlo debemos escribir `if` y presionar dos veces la tecla `TAB`.

:::

El bloque `else` es opcional y sólo se ejecuta si la expresión del `if` resulta en `false`.

```csharp
// Si x es menor a 10 se ejecuta MetodoUno().
// Si x es mayor o igual a 10 se ejecuta MetodoDos().

if (x < 10) 
{
    MetodoUno();
}
else
{
    MetodoDos();
}
```

:::tip

Existe un [snippet](/introduccion/entorno-trabajo/visual-studio.md#snippets) para escribir la sentencia `else` más rápido, para accionarlo debemos escribir `else` y presionar dos veces la tecla `TAB`.

:::

Los bloques `if` se pueden anidar. También se pueden combinar con otros `if` usando `else if`, siempre y cuando las condiciones sean mutuamente excluyentes. 

```csharp
// Si x es menor a 10 se ejecuta MetodoUno().
// Si x está entre 10 y 20 incluido se ejecuta MetodoDos(). 
// Si ninguno de los casos se cumple se ejecuta MetodoTres().

if (x < 10) 
{
    MetodoUno();
}
else if (x >= 20)
{
    MetodoDos();
}
else
{
    MetodoTres();
}
```

#### Sobre no usar llaves en las sentencias if
Existe la posibilidad de no usar llaves con las sentencias `if` siempre que dentro del bloque haya una sola línea de código. 

```csharp
if (edad >= 18)
    Console.WriteLine("Es mayor de edad");
else
    Console.WriteLine("Es menor de edad");
```

:::warning Advertencia

No usar llaves no hace al código más eficiente ni trae ningún tipo de ventaja, al contrario, hace al código menos mantenible y puede introducir errores. 

Por ejemplo, en 2012 se lanzó iOS 6 y trajo un bug que afectaba su sistema de encriptación Secure Sockets Layer (SSL). Los usuarios estuvieron expuestos a vulnerabilidades de seguridad durante 18 meses porque una verificación importante estaba siendo accidentalmente salteada. Todo por no usar llaves en un bloque if. 

https://embeddedgurus.com/barr-code/2014/03/apples-gotofail-ssl-security-bug-was-easily-preventable/

:::

### Sentencia switch
La sentencia `switch` compara una variable específica contra una lista de posibles valores identificados en las sentencias `case`.

Todas las sentencias `case` deben finalizar con la palabra clave `break`.

```csharp
int a = 0;

switch  (a)
{
    case 0:
        MetodoUno();
        break;

    case 1:
        MetodoDos();
        break;
}
```

El `switch` del ejemplo evalua la variable `a` y compara su valor con cada uno de los literales en las sentencias `case`. En este caso se ejecutará el `MetodoUno()`.

Al final del swift se puede agregar una sentencia `default` que se ejecuta si la expresión evaluada no coincide con ninguno de los literales en las sentencias `case`.

```csharp
int a = 9;

switch  (a)
{
    case 0:
        MetodoUno();
        break;

    case 1:
        MetodoDos();
        break;

    default:
        MetodoTres();
        break;
}
```

En el ejemplo anterior se ejecutará el `MetodoTres()`.


:::tip

Existe un [snippet](/introduccion/entorno-trabajo/visual-studio.md#snippets) para escribir la sentencia `switch` más rápido, para accionarlo debemos escribir `switch` y presionar dos veces la tecla `TAB`.

:::

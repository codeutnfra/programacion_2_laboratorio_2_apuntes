---
sidebar_label: I02 - Cotizador
title: Ejercicio I02 - Cotizador
sidebar_position: 2
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de tipo biblioteca de clases. Construir tres clases dentro de un namespace llamado `Billetes`: `Pesos`, `Euro` y `Dolar`. 

Se debe lograr que los objetos de estas clases se puedan sumar, restar y comparar entre sí con total normalidad como si fueran tipos numéricos, teniendo presente que ***1 Euro equivale a 1,17 Dólares y 1 Dólar equivale a 102,65 Pesos.***

:::tip
    
Para operar dos tipos de monedas distintos, primero se deberá convertir todo a una misma moneda y luego realizar la operación. Por ejemplo, si quiero sumar `Dolar` y `Euro`, deberé convertir el `Euro` a `Dólar` y luego sumarlos.

:::

1. El atributo `cotizRespectoDolar` y el método `GetCotizacion` son **estáticos**.

2. Los constructores **estáticos** le darán a las clases una cotización por defecto respecto del dólar.

3. Sobrecargar los operadores **explicit** y/o **implicit** para lograr compatibilidad entre los distintos tipos de datos.

4. Los operadores de comparación `==` compararán cantidades.
 
5. Reutilizar el código. **Sólo realizar las conversiones dentro de los operadores para dicho uso**.

6. Crear un proyecto de consola y colocar dentro del método `Main` el código necesario para probar todas las funcionalidades.

![Diagrama de clase Sumador](/clases/04-sobrecarga/Ejercicios/diagramaConversor.png)

### Resolución
| ![img](/base/youtube.svg) | [Video](https://youtu.be/WzmUlUxzMiA) | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_04/I02_Cotizador) |
| :-----------------------: | :---: | :----------------------: | :--------------------------------------------------------------------------------------------------------------------------: |



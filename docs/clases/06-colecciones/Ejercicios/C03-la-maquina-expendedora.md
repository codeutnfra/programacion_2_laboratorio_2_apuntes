---
sidebar_label: C03 - La maquina expendedora
title: Ejercicio C03 - La maquina expendedora
sidebar_position: 103
author: Ignacio Smirlian
authorURL: https://github.com/ignacio0104
hide_table_of_contents: true
hide_title: false
---
---
### Consigna

### Parte I

![Maquina Expendedora](/clases/06-colecciones/Ejercicios/homero-maquina-expendedora.gif) 

Crear un proyecto de Consola.

Crear e instanciar un objeto de la clase ``Dictionary<TKey,TValue>`` llamado **maquinaExpendedora**.

Cargar por lo menos 10 elementos en formato clave-valor (clave = numero de posición, valor = nombre del producto)

Una vez cargado, desarrollar el flujo del proyecto de consola de
modo que:

+ Al iniciarse muestre al usuario todos los productos con sus respectivos códigos.

+ Pida al usuario elegir el número del producto que quiere

+ Al seleccionar número, informar al usuario que recibió ese producto y volver a mostrar todos los productos SIN el producto que ya eligió

+ El programa se repetirá indefinidamente hasta que el usuario elija la opción *“S”*.


**BONUS**: Refactorizar el programa para que en vez de tener un diccionario `<int,string>`, tengamos un diccionario `<int,Producto>` (que contenga nombre y precio del producto)



### Parte II - Se acabó la comida

La máquina que creamos se quedó sin productos, es hora de recargarla.

Adicionar el atributo código de producto (debe ser único e irrepetible)

Crear e instanciar 3 ``Stack`` distintos que van a contener 1 producto cada uno (simularemos el mecanismo de “reparto” de la máquina expendedora)

Por ejemplo:

```csharp
Stack<Producto> papasFritas = new Stack<Producto>();
```

Una vez creadas estas 3 pilas, deberemos modificar nuestra maquina expendedora para que reciba un par clave-valor que no sea `<int,Producto>`, sino que va a recibir un ``int`` (posición en la máquina) y un ``Stack<Producto>`` (una pila con los productos que van en cada “resorte”).

Ahora, modificar la lógica de nuestra consola para que al iniciarse muestre posición, nombre y cantidad de cada producto, y que al seleccionar cada opción nos muestre la información del producto elegido (incluido el ``CODIGO``, para diferenciar cada producto de nuestra stack) y lo borre de la lista. Recordar los métodos ``PEEK``, ``POP`` y ``PUSH``

Crear un proyecto de tipo **Windows Forms App** y darle la siguiente funcoinalidad

![Maquina Expendedora Funcional](/clases/06-colecciones/Ejercicios/la-maquina-expendedora-funcional.gif)

### Parte III - Ahora hay que atender también

![Ahora hay que atender](/clases/06-colecciones/Ejercicios/mr-burns-enemy.gif) 

Debido a numerosos incidentes, ahora los usuarios no pueden operar directamente la máquina expendedora, así que harán fila para que los atendamos y les demos su producto.

1. Crear e instanciar la ``Queue<string> filaDeClientes``

2. Agregar al menos 5 clientes

3. En cada iteración indicar a qué cliente se está atendiendo y qué producto se lleva.

4. Indicar tamaño de la cola (también en cada iteración)

5. Cada cliente atendido debe ser borrado de la cola

6. Modificar la iteración para que ahora su condición para continuar sea la cantidad de clientes en la cola

**BONUS**: Al terminar de atender a los clientes, informarlo y preguntar si se quiere agregar clientes a la cola.

### Parte IV - Lo hacemos buffet

![La maquina buffet](/clases/06-colecciones/Ejercicios/la-maquina-buffet.png)

La ola de violencia por las medidas anteriores solo fue en aumento, por lo que la gerencia decidió ofrecer servicio buffet, para que cada uno elija lo que quiera

1. Crear e instanciar la ``List<Producto> mesaBuffet``

2. Agregar al menos 5 platos/bebidas

3. Esta lista va a reemplazar al ``dictionary maquinaExpendedora``, realizar todas las modificaciones necesarias para que todo funcione de manera que cada cliente de la cola vaya avanzando, eligiendo sus productos y saliendo.

4. Al terminar de servirse, se debe informar el costo de cada cliente

5. Indicar tamaño de la cola (también en cada iteración)

6. Cada cliente atendido debe ser borrado de la cola

7. Modificar la iteración para que ahora su condición para continuar sea la cantidad de clientes en la cola

:::note
Acá el ``código`` no va a ser necesario, por lo que pueden borrar
esa propiedad o sobrecargar el constructor para que no sea
obligatorio ponerlo al crear un producto
:::


### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_06/C03%20_La_maquina_expendedora) |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |

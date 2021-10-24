---
sidebar_label: I02 - Simulador de atención a clientes
title: Ejercicio I02 - Simulador de atención a clientes
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
sidebar_position: 2
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de tipo consola para simular la atención paralela de clientes en dos cajas de un negocio. 

Para ello se pide crear las siguientes clases:

#### `Caja`
- Tendrá como único atributo una lista `filaClientes` de tipo `string`.
- El constructor de la clase `Caja` deberá inicializar dicha lista.
- El método `AtenderClientes` deberá recorrer la fila de clientes e ir imprimiendo el nombre del cliente que se está atendiendo junto con el número de caja que será previamente seteado en la propiedad `Name` del thread.
- Por cada cliente que se atiende en cada caja se tardará 2 segundos.

#### `Negocio`
- Tendrá como atributos una lista `clientes` de tipo `string` y dos atributos de tipo `Caja`.
- Crear propiedades de sólo lectura para todos sus atributos.
- El constructor recibirá por parámetro las dos cajas e inicializará la lista de clientes.
- El método `AsignarCaja` deberá imprimir el mensaje *"Asignando cajas..."* cuando sea invocado. Recorrer la lista de clientes y asignar a cada cliente a la fila de la caja que menos clientes tenga en ese momento.
- La asignación de cada cliente a una caja tardará 1 segundo.

#### `Main`
- La asignación de cada cliente a una caja tardará 1 segundo.
- Asignar las cajas a los clientes en dos subprocesos que se ejecuten en paralelo, uno para atender los clientes de la `caja1` y otro para atender los clientes de la `caja2`. Los hilos destinados a atender a los clientes deberán tener en su propiedad `Name` el nombre de la caja que está atendiendo.
- Se deberán iniciar los 3 threads uno a continuación del otro.
- Utilizar el método `Join` del objeto de la clase `Thread` para asegurar que se hayan asignado todos los clientes a alguna caja antes de comenzar a atender.


### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |

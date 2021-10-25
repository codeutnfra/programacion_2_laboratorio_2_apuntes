---
title: Apuntes - Serialización
sidebar_label: Serialización
slug: /clases/serializacion/apuntes/serializacion
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Serialización
La **serialización** es el proceso de convertir el estado de un objeto a un formato específico con el objetivo de transmitirlo a otro sistema o para almacenarlo en un archivo, en memoria o en una base de datos.

Su propósito principal es guardar el estado del objeto (los valores que tienen sus atributos en ese momento) para recrearlo en algún momento en el futuro. El proceso contrario, recuperar un objeto que fue serializado, se conoce como **deserialización**. 

## Usos de serializar
La serialización permite al desarrollador almacenar el estado de un objeto y recrearlo a necesidad. El objetivo puede ser persistirlo o intercambiar datos con otro sistema. 

Entre sus usos más frecuentes se encuentran:
* Enviar el objeto a una aplicación o sistema externo a través de servicios web u otros sistemas de comunicación.
* Pasar el objeto a otro proceso o máquina.
* Persistir el objeto en una unidad de almacenamiento.
* Persistir el objeto en una base de datos.

## Formatos de serialización
Siempre que serializamos lo hacemos a un formato específico, uno que luego pueda ser reinterpretado para rearmar el objeto. Existen docenas de formatos que se pueden especificar, pero los más comunes son **Extensible Markup Language (XML)** y **JavaScript Object Notation (JSON)**.

El **formato JSON** es más compacto y se suele utilizar en entornos web y mobile. Esto sucede por dos motivos, primero es más liviano y por lo tanto la carga de datos que tiene que viajar por la red es menor, y segundo porque se ha convertido en un estandar al ser el formato de serialización nativo de JavaScript. 

El **formato XML** contiene más información (es más pesado) pero sigue siendo utilizado principalmente para manejar la comunicación con aplicaciones que tienen cierto tiempo de antiguedad y no soportan la comunicación en otros formatos.

### Requisitos para serializar
Los atributos a serializar deben ser públicos o estar expuestos a través de propiedades de lectura-escritura.

Adicionalmente, para la serialización XML se debe tener un constructor público sin parámetros.

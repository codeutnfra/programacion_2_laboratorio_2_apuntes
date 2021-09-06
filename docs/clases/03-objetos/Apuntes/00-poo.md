---
title: Apuntes - Programación orientada a objetos
sidebar_label: Programación orientada a objetos
slug: /clases/objetos/apuntes/poo
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Paradigmas de programación
Un **paradigma** es una teoría o conjunto de teorías cuyo núcleo central se acepta sin cuestionar y que suministra la base y modelo para resolver problemas y avanzar en el conocimiento. 

Un **paradigma de programación** define la forma, metodología o estilo con el que se resolverá un problema utilizando un lenguaje de programación. 

Entre los paradigmas de programación más comunes se incluyen:
* **Paradigma imperativo** en el que el programador instruye a la máquina cómo cambiar su estado.
  * **Paradigma procedural** que separa estas instrucciones en procedimientos.
  * **Paradigma orientado a objetos** que agrupa estas instrucciones junto con el estado sobre el que operan.   

* **Paradigma declarativo** en el que el programador solamente declara propiedades de un resultado deseado, pero no indica cómo calcularlo. 
  * **Paradigma funcional** donde el resultado deseado es declarado como el valor de una serie de aplicaciones de función.
  * **Paradigma lógico** donde el resultado deseado se declara como la respuesta a una pregunta sobre un sistema de hechos y reglas. 
  * **Paradigma matemático** donde el resultado deseado se declara como la solución de un problema de optimización. 
  * **Paradigma reactivo** donde el resultado deseado se declara con flujos de datos y la propagación del cambio. 

## Programación orientada a objetos
La **programación orientada a objetos (*Object Oriented Programming - OOP*)** es un paradigma de programación que propone resolver problemas a través de identificar objetos de la vida real, sus atributos (datos), su comportamiento (acciones) y las relaciones de colaboración entre ellos. 

Un **objeto** en programación representa algo de la vida real, como puede ser un producto o una cuenta bancaria, pero también puede ser algo más abstracto. 

Los objetos son definidos por dos componentes: **atributos** y **comportamiento**. 

El desarrollo orientado a objetos existe desde principios de la década de 1960, sin embargo no fue hasta fines de la década de 1990 que empezó a popularizarse.

### Pilares de la programación orientada a objetos
Existen ciertos conceptos clave que se deben poder aplicar para que una solución sea considerada orientada a objetos. 

#### Abstracción
Se trata de capturar la idea principal de un objeto dentro de un determinado contexto, ignorando detalles o especificaciones que no sean relevantes. 

#### Encapsulamiento
Se trata de agrupar datos y acciones relacionados a un objeto. Por ejemplo, un objeto que represente una cuenta bancaria contendrá datos como el saldo y el número de cuenta y acciones sobre esos datos, como depositar y extraer. Cuando se aplica encapsulamiento muchas veces es necesario definir y controlar cómo y desde dónde un objeto puede ser accedido y/o modificado.

#### Herencia
Se trata de reutilizar código partiendo de una clase más general (padre o base) que compartirá su estructura y funcionalidad a clases más específicas (hijas o derivadas).

#### Polimorfismo
Se trata de que una clase hija o derivada pueda redefinir una determinada acción heredada de una clase padre o base. 

## Paradigma procedural vs paradigma orientado a objetos
En el enfoque orientado a objetos, los atributos y el comportamiento están contenidos dentro de un objeto individual, mientras que en el enfoque procedural o estructurado, el diseño de atributos y comportamiento están normalmente separados.




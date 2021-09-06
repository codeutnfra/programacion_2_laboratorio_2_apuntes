---
sidebar_label: Abstracción
slug: /clases/objetos/apuntes/abstraccion
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Abstracción
El primer pilar de la programación orientada a objetos que aprenderemos es la abstracción. 

La **abstracción** es la habilidad de abordar un concepto mientras se ignoran de forma segura algunos de sus detalles. Dependiendo del contexto y de la necesidad podemos trabajar a distintos niveles de abstracción, enfocándonos en distintos aspectos y trabajando con un mayor o menor nivel de detalle.

En la vida real aplicamos la abstracción continuamente. Por ejemplo, cuando hablamos de una casa no nos detenemos en las moléculas y partículas que la componen, normalmente ni siquiera hablamos de sus materiales de construcción o por donde pasan las tuberías de agua. En una conversación habitual manejaremos un nivel de abstracción muy alto: la ubicación, detalles de la fachada, cantidad de habitaciones, y no mucho más. En alguna situación puntual podremos necesitar saber cómo está armado el tendido eléctrico para hacer una reparación, pero no nos interesarán otros detalles tales como de qué material son los pisos o cuántas personas habitan el lugar. 

![Abstracción aplicada a una casa](/clases/03-objetos/apuntes/abstraccion_casa.png)

Un mapa del mundo es una abstracción de lo que realmente es el planeta, pero práctica a fines de su uso. La tierra no es bidimensional, sin embargo se puede *abstraer* esa realidad a una representación gráfica a escala, plana y bidimensional que nos informa sobre la distribución geográfica y política del territorio de manera sencilla y accesible. Se pierden muchos detalles de forma intensional para facilitar la comprensión de lo que nos interesa comunicar. 

![Abstracción aplicada al planeta](/clases/03-objetos/apuntes/abstraccion_planeta.png)

Si bien un mapa en si mismo ignora gran cantidad de detalles con el fin de simplificar la transmisión de la información, también existen distintos niveles de abstracción para un mapa dependiendo del enfoque que se necesite. No es lo mismo un mapa hidrográfico que se enfoca en el curso de ríos y otras superficiones de agua, que un mapa político que representa divisiones administrativas de distintos territorios. Tampoco es lo mismo un mapa de la ciudad de buenos aires donde podemos ver el trazado de las calles y recorrido de líneas de trenes y subtes, a un mapa del continente donde esos detalles no figuran. Dependendiendo de la necesidad, trabajaremos con uno u otro. 

![Abstracción aplicada a distintos tipos de mapas](/clases/03-objetos/apuntes/abstraccion_mapas.png)

Podemos decir entonces que la abstracción es una simplificación de la realidad donde me quedo con lo importante y descarto los detalles irrelevantes. En el ámbito del desarrollo de software, lo que determina qué es relevante y qué no es el **contexto del negocio**, el problema, requerimiento o proceso que queremos resolver o automatizar con un sistema informático. En otras palabras, el área de conocimiento o la actividad sobre la que se desarrolla la aplicación. 

La abstracción es clave para construir sistemas fácilmente mantenibles y que no terminen manejando una complejidad excesiva e innecesaria. En el siguiente capítulo veremos como este pilar conduce el diseño de las clases, que no son otra cosa mas que abstracciones de conceptos u objetos pertenecientes al dominio del problema.





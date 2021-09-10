---
title: Apuntes - Herencia
sidebar_label: Herencia
slug: /clases/herencia/apuntes/herencia
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## Herencia
Cuando nos referimos a herencia en programación orientada a objetos hablamos de una relación entre clases. 

La idea y objetivo principal radican en crear una clase que defina un comportamiento (métodos) y características (atributos) que luego podrán ser usados en otra clase. Vamos a poder compartir la estructura y miembros de esta primer clase definida y agregar contenido adicional. 

¿Por qué querríamos usar la herencia en vez de definir clases auto-suficientes? Porque la herencia nos permite contar con muchas ventajas. 

* Podremos organizar de manera más óptima las clases que compongan la realidad de nuestro programa, agrupándolas por criterios que compartan. Una vez detectado “esto que tienen en común” podremos implementar esto en una clase base para luego poder heredar de esta, aumentando su funcionalidad (especializandola). 

* Vamos a poder crear clases a partir de otra ya existente, en vez de empezar desde cero. 

* Podremos continuar con la herencia tanto como queramos, de manera que cada clase hija podrá expandir mas y mas la funcionalidad de su clase padre. 

Una vez definido esto, es necesario tener en cuenta algunos aspectos que se dan en C# en especifico (es importante recordar que la herencia es algo que se da en cualquier lenguaje orientado a objetos y no solo en C#).

* La clase de la cual se hereda se conoce como clase base o padre. 

* La clase que hereda de otra se conoce como clase hija.

* La herencia en C# no es múltiple, es decir que cada clase podrá heredar de solo una clase base, al contrario de lo que pasa en lenguajes como C++ donde la herencia múltiple si esta permitida. 

* ¿Que pasa con los atributos privados de la clase base?, la clase hija los hereda, pero no puede acceder los. En caso de ser necesarios, se deberá definir métodos o propiedades que le den visibilidad a estos atributos.

* ¿Y con los atributos públicos de la clase base? Estos pasan a ser implícitamente parte de la clase hija.

* Al contrario del resto, los constructores no se heredan.
	
* ¿Que pasa si quiero que un atributo de mi clase base sea accesible solo en mis clases hijas? En esta situación entra en juego el modificador de visibilidad protected, al definir atributos con este modificador haremos que este sea visible solo dentro de la relación de herencia. Por lo que para una clase hija el modificador protected es equivalente a public pero para una clase ajena a la relación este modificador es igual al private. 

* ¿Como hago referencia al constructor o a métodos de la clase padre dentro de la clase hija?, utilizando el operador base, así explicitaremos que se hace referencia a la clase padre. 

* Y si quiero que mi clase no pueda ser heredada ¿como hago?, para poder lograr esto, definiremos a la clase con el modificador sealed, de esta manera explicitaremos que nuestra clase no puede tener clases hijas, (es importante recordar que gran parte de las clases son autónomas y no están pensadas para ser heredadas). 
	
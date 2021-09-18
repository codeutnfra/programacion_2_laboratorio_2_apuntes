---
title: Apuntes - Polimorfismo
sidebar_label: Polimorfismo
slug: /clases/polimorfismo/apuntes/polimorfismo
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
Es la capacidad que tienen los objetos que heredan de una misma clase de invocar un método definido en esta ultima y expandido en cada clase hija, la definición que sera invocada se decidirá en tiempo de ejecución, es decir, un comportamiento (método) que sera implementado en una clase base podrá ser especializado en cada clase que herede de esta y en tiempo de ejecución al invocar este método, se ira a buscar la definición correspondiente en cada clase.

Para lograr el comportamiento descripto anteriormente, es necesario poder contar con definiciones de métodos en la clase base, y sobre-escrituras de estos en las clases hijas. 
Entonces ¿Como hacemos para poder expandir o reescribir la definición de un método que radica en la clase base en cada clase hija?  En este caso es donde entra en juego los modificadores Virtual y Override. 

• Diseñaremos métodos virtuales en nuestras clases base. 

• En nuestras clases hijas, utilizaremos override en la firma del método para reescribir por completo su funcionalidad, o también podemos utilizar el operador base para hacer uso de lo ya existente en la clase base antes de añadir funcionalidad especifica de la clase hija. 

Nuevamente, en tiempo de ejecución nuestros programas sabrán donde radica la implementación a ejecutarse, si una clase hija no aplica un override, sera la implementación de la clase base la que se ejecute en su lugar.
Es importante recordar que se puede aplicar el mismo concepto con propiedades.
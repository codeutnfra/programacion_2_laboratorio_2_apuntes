---
title: Apuntes - Pruebas unitarias
sidebar_label: Pruebas
slug: /clases/pruebas/apuntes/pruebas
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

## Unit Testing
Las **pruebas unitarias** o  **unit testing** consisten en aislar una parte del código y comprobar que funciona a la perfección. Son pequeños tests que validan el comportamiento de un objeto y la lógica.
El unit testing suele realizarse durante la fase de desarrollo de aplicaciones de software o móviles. Normalmente las llevan a cabo los desarrolladores, aunque en la práctica, también pueden realizarlas los responsables de QA.
Hay una especie de mito respecto a las pruebas unitarias. Algunos desarrolladores están convencidos de que son una pérdida de tiempo y las evitan buscando ahorrar tiempo.
Nada más alejado de la realidad.
Con ellas se detectan antes errores que, sin las pruebas unitarias, no se podrían detectar hasta fases más avanzadas como las pruebas de sistema, de integración e incluso en la beta.
Realizar pruebas unitarias con regularidad supone, al final, un ahorro de tiempo y dinero.


## Motivos para realizar un test unitario

* Las pruebas unitarias demuestran que la lógica del código está en buen estado y que funcionará en todos los casos.
* Aumentan la legibilidad del código y ayudan a los desarrolladores a entender el código base, lo que facilita hacer cambios más rápidamente.
* Los test unitarios bien realizados sirven como documentación del proyecto.
* Se realizan en pocos milisegundos, por lo que podrás realizar cientos de ellas en muy poco tiempo.
* Las pruebas unitarias permiten al desarrollador refactorizar el código más adelante y tener la garantía de que el módulo sigue funcionando correctamente. Para ello se escriben casos de prueba para todas las funciones y métodos, para que cada vez que un cambio provoque un error, sea posible identificarlo y repararlo rápidamente.
* La calidad final del código mejorará ya que, al estar realizando pruebas de manera continua, al finalizar el código será limpio y de calidad.
Como las pruebas unitarias dividen el código en pequeños fragmentos, es posible probar distintas partes del proyecto sin tener que esperar a que otras estén completas.


## Las tres A del unit testing

Para llevar a cabo buenas pruebas unitarias, deben estar estructuradas siguiendo las tres A’s del Unit Testing:

* Arrange (organizar). Es el primer paso de las pruebas unitarias. En esta parte se definen los requisitos que debe cumplir el código.
* Act (actuar). Es el paso intermedio de las pruebas, el momento de ejecutar el test que dará lugar a los resultados que deberás analizar.
* Assert (afirmar). En el último paso, es el momento de comprobar si los resultados obtenidos son los que se esperaban. Si es así, se valida y se sigue adelante. Si no, se corrige el error hasta que desaparezca.

## Creación Proyecto Unit Test

1. Seleccionar el siguiente tipo de proyecto

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_00.PNG)

2. Crear el proyecto y seleccionar NET 5.0

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_02.PNG)

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_03.PNG)

## Creación de un test unitario en C#

1. Creamos el proyecto de consola y agregamos la referencia del proyecto a testear en el proyecto de unit testing. La clase se creará con el atributo **[TestClass]** y el método que va a ejecutar el test contiene un atributo llamado **[TestMethod]**. 

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_04.PNG)

2. Se escribe el test del método a probar.   
   Primero se asignan los valores, posteriormente se llama al método de sumar y finalmente, se comprueba que **suma** es correcta.

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_05.PNG)

## Comprobación de una excepción dentro de los test

1. En este caso con MsTest se debe utilizar el atributo [ExpectedException] sobre el método, el cual va a capturar y comprobar la excepción, y en este caso,no será necesario el assert.

    ![Unit Test](/clases/11-testing/apuntes/UnitTest_06.PNG)

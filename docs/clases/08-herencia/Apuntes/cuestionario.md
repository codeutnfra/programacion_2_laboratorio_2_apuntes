---
title: Cuestionario - Herencia
sidebar_label: Cuestionario
slug: /clases/herencia/apuntes/cuestionario
hide_table_of_contents: true
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
### Herencia
1. ¿Qué es la herencia en el contexto de la programación orientada a objetos? ¿cuál es su propósito?
2. ¿Qué nombre recibe la clase que hereda y qué nombre recibe la clase que es heredada?
3. ¿Qué significa que la herencia es transitiva?
4. ¿Se heredan los constructores?
5. ¿Se heredan los miembros private de la clase base?
6. ¿Qué es herencia múltiple? ¿es posible en C#? ¿en qué se diferencia de la herencia simple?
7. ¿Una clase pública puede heredar de una clase privada?
8. ¿Qué es una clase sellada (sealed)?
9. ¿Una clase sellada puede heredar de otras clases (ser clase derivada)? 
10. ¿Cómo actúa el modificador “protected” en los miembros de la clase base para una clase derivada y cómo para una clase no-derivada? Relacionar la respuesta con los modificadores “public” y “private”.
11. ¿Qué pasa si la clase derivada no hace una llamada explícita a un constructor de la clase base? En esta situación, ¿qué pasa si la clase base declaró explícitamente un constructor con parámetros de entrada?
12. La clase `Alumno` hereda de `Persona`. ¿Una instancia de `Alumno` es también de tipo `Persona`? Justifique.
13. La clase `Alumno` hereda de `Persona`. ¿Se puede hacer `Persona persona = new Alumno()`? ¿por qué?
14. La clase `Alumno` hereda de `Persona`. ¿Se puede hacer `Alumno alumno = new Persona()`? ¿por qué?
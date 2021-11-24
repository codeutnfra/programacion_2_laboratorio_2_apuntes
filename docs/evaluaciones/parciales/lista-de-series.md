---
title: 2do D - Segundo Parcial - Lista de series
sidebar_label: 2do D - Segundo Parcial - Lista de series
sidebar_position: 2
hide_table_of_contents: true
hide_title: false
---

| Instancia de evaluación | Cuatrimestre |             Profesor              | Tiempo de resolución |
| :---------------------: | :----------: | :-------------------------------: | :------------------: |
|     Segundo Parcial     |   2do 2021   | L. Galarza, E. Prieto, M. Cerizza |     120 minutos      |

## Criterios de evaluación
* **2 (dos) errores en el mismo tema anulan su puntaje.**
* La correcta documentación y reglas de estilo de la cátedra serán evaluadas.
* Colocar sus datos personales en el nombre de la carpeta principal y la solución: *Apellido.Nombre.Div. Ej: Pérez.Juan.2D*. No sé corregirán proyectos que no sea identificable su autor.
* No se corregirán exámenes que no compilen.
* **Reutilizar** tanto código como crean necesario.
* Aplicar los principios de los 4 pilares de la programación orientada a objetos.
* **Se deberá trabajar con .NET 5 y Visual Studio 2019 o superior.** 

| Tema evaluado                                         |  Peso  |
| ----------------------------------------------------- | :----: |
| Reglas de estilo y buenas prácticas                   |   1    |
| Implementación, algoritmos y resolución de problemas. |   2    |
| Excepciones                                           |   2    |
| Pruebas unitarias                                     |   2    |
| Tipos genéricos                                       |  0.5   |
| Interfaces                                            |   2    |
| Archivos                                              |   1    |
| Serialización XML                                     |   1    |
| Serialización JSON                                    |   1    |
| SQL y bases de datos                                  |   2    |
| Hilos y concurrencia                                  |   1    |
| Delegados y expresiones lambda                        |  0.5   |
| Eventos                                               |   1    |
| Métodos de extensión                                  |   1    |
| **Total**                                             | **18** |

## Consigna
Se realizará una aplicación para remover series de nuestro backlog.

![Resultado esperado](/evaluaciones/parciales/lista-series-animation.gif)

1. Empezar a trabajar desde [la cáscara](https://drive.google.com/file/d/1KSFpC3R1C5V5jkMEZk-EXYe__JBBkh_4/view?usp=sharing). 

2. Crear la base de datos `20211123-SP` y ejecutar en ella el siguiente script:

```sql
USE [20211123-SP];
GO
CREATE TABLE [20211123-SP].dbo.series
(
nombre VARCHAR(255) NOT NULL ,
genero VARCHAR(255) NOT NULL ,
alumno VARCHAR(255) NULL
);
GO
Insert into series (nombre, genero) VALUES ('The Sopranos','Drama criminal')
Insert into series (nombre, genero)  VALUES ('Naruto Shippuden','Anime shonen')
Insert into series (nombre, genero)  VALUES ('Mad Men','Drama de epoca')
Insert into series (nombre, genero)  VALUES ('The Boys','Comedia negra')
Insert into series (nombre, genero)  VALUES ('Invincible','Animación')
GO
```

3. Agregar a la solución un proyecto de biblioteca de clases llamado `Entidades` y reproducir el siguiente esquema:

![Diagrama de clases](/evaluaciones/parciales/lista-de-series-diagram.png)

#### Clase `Serie`
4. Todos los atributos de la clase son y deberán permanecer privados.

5. El constructor recibe e inicializa todos los atributos.

6. Sobreescribir el método `ToString` retornando el nombre y el género de la serie.

#### Clase `BacklogException`
7. Crear un nuevo tipo de excepción llamado `BacklogException`. 

8. Deberá contar con dos constructores, uno inicializando el mensaje de la excepción y la inner exception, y el otro solo inicializando el mensaje. Esta excepción va a ser utilizada para el manejo de archivos.

#### Clase `Logger`
9. El método estático `Log` escribe en un archivo de texto en el escritorio el mensaje que recibe por parámetro junto con la fecha y la hora en ese momento.

10. El texto deberá anexarse al archivo sin pisar el contenido previo. 

11. Capturar las posibles excepciones y relanzarlas como `BacklogException`, almacenando la excepción previamente capturada.

#### Clase `AccesoDatos`
12. Crear la clase `AccesoDatos`. Manejará el acceso a la base de datos.

13. Tendrá un método `ObtenerBacklog`, cuyo propósito es obtener todos los datos de la tabla `Series` para retornar una lista de tipo `Serie`.

14. Tendrá un método `ActualizarSerie` que recibe una instancia de `Serie` y va a actualizar el campo alumno de la tabla series con el nombre del alumno que se encuentra dando el examen. Filtrar por nombre de la serie. **Parametrizar el comando.** 

15. Manejar las excepciones y registrar sus mensajes usando la clase `Logger`. 

#### Clase `ExtensoraRandom`
16.  Crear un método de extensión `GenerarRandom` para la clase `List<Serie>`. Retornará un número aleatorio entre 0 y el tamaño actual de la lista.

#### Clase `ManejadorBackLog`
17.  El método `IniciarManejador` debe ejecutar el método `MoverSeries` en un hilo paralelo. **Usar expresiones lambda**.

18.  El método `MoverSeries` será privado y deberá:
     1.  Recibir una lista de series por parámetro.
     2.  Iterar la lista hasta que esté vacía y:
         1.  Recuperar una serie de la lista usando el método de extensión `GenerarRandom`.
         2.  Utilizar el método `ActualizarSerie` de la clase `AccesoDatos` sobre la serie recuperada.
         3.  Suspender el hilo durante 1500 milisegundos.
         4.  Si el evento `NuevaSerieParaVer` tiene suscriptores, lanzarlo. 

#### Clase `Serializadora`
19.  Crear una clase llamada `Serializadora` que implemente `IGuardar`. Se va a encargar de guardar una lista de tipo `List<Serie>` en el escritorio en dos formatos distintos.
     1.   La implementación **implícita**, se va a encargar de serializar lo que recibe como argumento en formato **XML**.
     2.   La implementación **explícita**, se va a encargar de serializar lo que recibe como argumento en formato **JSON**.
     3.   Hacer los cambios necesarios en la clase `Serie` para que se puedan serializar y deserializar todos sus atributos.
     4.   Capturar las posibles excepciones y relanzarlas como `BacklogException`, almacenando la excepción previamente capturada.

#### Pruebas unitarias
20.  Automatizar pruebas que verifiquen que el método `ToString` de `Serie` retorne el mensaje esperado.

21.  Automatizar pruebas que verifiquen que se lance la excepción `BacklogException` cuando se le pasa una ruta inválida al método `Guardar` de `Serializadora`.

#### Formulario
22. El constructor deberá instanciar los atributos `seriesParaVer`, `serializadora` y `manejador`. También deberá inicializar el atributo `backLog` utilizando el método `ObtenerBacklog` de la clase `AccesoDatos`.

23. El manejador del evento `Load` del formulario deberá:
    1.  Asignar como manejador del evento `NuevaSerieParaVer` de `manejador` al método del formulario `CambiarEstadoSerie`.
    2.  Inicializar la propiedad `DataSource` de `lstbBacklog` con el atributo `backlog`.
    3.  Llamar al método `IniciarManejador` de `manejador` pasándole como argumentos la lista de `backlog`.

24. El método `CambiarEstadoSerie`:
    1.  Recibe una serie, la agrega a la lista de `seriesParaVer` y la elimina de la lista de `backLog`
    2.  Actualizar `lstbBacklog`. Para esto, setear la propiedad `DataSource` del `ListBox` en null y luego reasignar la lista de `backLog` al `DataSource`. Hacer lo mismo con `lstbParaVer` y la lista `seriesParaVer`.
    3.  La modificación de los `ListBox` se deberá realizar desde el hilo en el que se crearon los controles.

25. El botón `btnSerializar` será el encargado de serializar a **XML** la lista de `backLog` y en **JSON** la lista de `seriesParaVer`. Usar como ruta de destino el escritorio. 

## Entrega
**Al finalizar, colocar la carpeta de la solución completa en un archivo comprimido que deberá tener como
nombre *Apellido.Nombre.zip* y compartir este por Slack sólo con el docente a cargo del examen.**

## Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
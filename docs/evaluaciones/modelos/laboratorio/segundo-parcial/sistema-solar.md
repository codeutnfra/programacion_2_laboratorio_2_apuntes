---
title: Sistema solar
sidebar_label: Sistema solar
sidebar_position: 2
slug: /evaluaciones/modelos/laboratorio/segundo-parcial/sistema-solar
hide_table_of_contents: true
hide_title: false
---

| Instancia de evaluación | Cuatrimestre |    Profesor     | Tiempo de resolución |
| :---------------------: | :----------: | :-------------: | :------------------: |
|     Segundo Parcial     |   2do 2019   | F. Dávila |      90 minutos      |

## Criterios de evaluación
* **2 (dos) errores en el mismo tema anulan su puntaje.**
* **La correcta documentación y reglas de estilo de la cátedra serán evaluadas.**
* Colocar sus datos personales en el nombre de la carpeta principal y la solución: *Apellido.Nombre.Div. Ej: Pérez.Juan.2D*. No sé corregirán proyectos que no sea identificable su autor.
* No se corregirán exámenes que no compilen.
* **Reutilizar** tanto código como crean necesario.
* Colocar nombre de la clase (en estáticos), **`this`** o **`base`** en todos los casos que corresponda.
* **TODAS** las clases deberán ir en una biblioteca de clases llamada `Entidades`.

## Consigna
1. Empezar a trabajar desde la cáscara y modificar su nombre con el siguiente formato: *[APELLIDO].[NOMBRE]*

#### Proyecto `Archivos`
2. Dentro del proyecto **`Archivos`** se deberá respetar el siguiente diagrama de clases:

![Diagrama de clases](/evaluaciones/modelos/laboratorio/dispositivo-diagram.png)

3. Las clases implementarán la interfaz `IFiles` para escribir y consultar los datos según corresponda. 
   * `nombreArchivo`: Sólo el nombre del archivo, sin la ruta al directorio. Será válido *"hola.txt"* y no *"C:\hola.txt"*.  
   * `objeto`: El objeto a guardar en el archivo.
   * El encoding del archivo será UTF8 (por defecto).

4. La propiedad `GetDirectoryPath` retornará la ruta al escritorio de forma independiente de la máquina en la que se abra el programa.

5. El método `FileExists` comprobará si el archivo existe o no. Sumará la ruta retornada por `GetDirectoryPath` al `nombreArchivo` recibido como argumento. 

6. De producirse excepciones en los métodos `Leer` y `Guardar` deberá encapsularse esa excepción en una nueva excepción propia `ErrorArchivosException` y lanzarla. Crear esta excepción dentro del proyecto de `Archivos` con al menos dos constructores.    

#### Proyecto `Entidades`

![Diagrama de clases](/evaluaciones/modelos/laboratorio/dispositivo-diagram.png)

7. Crear la clase `PlanetaEventArgs`.
8. Crear el delegado dentro del archivo de la clase `Planeta`, como parte del namespace.
9. Agregar el evento `InformarAvance` en la clase `Planeta`.
10. Completar el método `AnimarSistemaSolar` con la invocación del evento.
11. Completar todo lo que haga falta para que se pueda serializar en XML guardando los datos `velocidadTraslacion`, `posicionActual` y `radioRespectoSol`.

#### Formulario
12. En el constructor deberán instanciarse los atributos `planetas`, `animaciones` y `xml`.

13. En el manejador del evento `Load` del formulario asociar el evento `InformarAvance` de cada planeta al manejador `DibujarAvancePlaneta`.

14. En el manejador del evento `Click` del botón `btnSimular` agregar un foreach, donde dentro se deberá:
    1.  Crear los hilos para ejecutar en paralelo el método `AnimarSistemaSolar` de los objetos `Planeta`. Crear un hilo por cada planeta.
    2.  Agregar dicho hilo a la lista de animaciones.
    3.  Iniciar cada hilo. 

15. En el método `DibujarAvancePlaneta` lograr que se llame al método `CalcularUbicacion` en el hilo que creó al formulario. 

16. En el método `LimpiarAnimaciones` cancelar todos los hilos que aún estén en ejecución.  

#### Pruebas unitarias
17. Agregar dos pruebas unitarias automatizadas:
    1.  Intentar guardar y leer un archivo correctamente, comprobando que los datos guardados sean iguales a los recuperados. 
    2.  Intentar guardar un archivo en una ruta inválida (una ruta vacía o con caracteres inválidos servirá para dicho plan), comprobando que se lance la excepción `ErrorArchivosException`.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
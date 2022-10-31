---
title: Apuntes - Windows Forms
sidebar_label: Definición
slug: /clases/forms/apuntes/definicion
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

## Introducción a Windows Forms
### ¿Que son los formularios de Windows?
**Windows Forms** es una tecnología que permite crear aplicaciones gráficas para escritorio en Windows. Ofrece capacidades para definir visualmente todo tipo de ventanas y controles dentro de éstas, y además facilita la creación de interfaces orientadas al manejo de datos gracias a sus capacidades de enlace bi-direccional a datos (capa lógica - capa visual).


Los **formularios** son objetos que derivan de la clase `Form` perteneciente al namespace `System.Windows.Forms`. 

Al ser objetos, exponen propiedades, poseen métodos y también eventos que permiten la interacción con el usuario.

### Composición
Como mencionamos anteriormente, los formularios son objetos. Los mismos parten de una clase común y corriente pero con una pequeña diferencia: las clases tienen la particularidad de ser **partial class**. Esto significa que es una única clase partida en dos partes: la parte visual (interfaz que ve el usuario) y la parte lógica donde detallamos su composicion.

### Propiedades y métodos de los formularios
Los formularios, al ser objetos, poseen propiedades y métodos. 

+ Propiedades:
    + Name
    + BackColor
    + Text 
    + Visible
    + Size
    + Enabled
    + Font
    + ForeColorcls

+ Métodos:
    + Show()
    + ShowDialog()
    + Close()
    + Hide()

## Creacion de proyecto

![Template Windows Forms Visual Studio](/clases/05-forms/apuntes/crearprog.png)

## Creando un login con Windows Forms
En el siguiente video, Lucas nos explica los conceptos clave para trabajar con Windows Forms y construye a modo de ejemplo una ventana de autenticación (login).

<iframe width="560" height="315" src="https://www.youtube.com/embed/-4BuCOuE5YA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Alta, modificación y navegación de un fromulario

<iframe width="560" height="315" src="https://www.youtube.com/embed/-QtsDyfHggw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
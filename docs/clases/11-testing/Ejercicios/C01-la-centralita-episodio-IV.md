---
sidebar_label: "C01 - La centralita: Episodio IV"
title: "Ejercicio C01 - La centralita: Episodio IV"
sidebar_position: 101
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Partir del ejercicio [La centralita: Episodio III](../../10-excepciones/Ejercicios/C01-la-centralita-episodio-III.md).

1. Crear un test unitario que valide que la lista de llamadas de la centralita esté instanciada al crear un nuevo objeto del tipo `Centralita`.
2. Controlar mediante un nuevo método de test unitario que la excepción `CentralitaException` se lance al intentar cargar una segunda llamada con solamente los mismos datos de origen y destino de una llamada `Local` ya existente.
3. Controlar mediante un nuevo método de test unitario que la excepción `CentralitaException` se lance al intentar cargar una segunda llamada con solamente los mismos datos de origen y destino de una llamada `Provincial` ya existente.
4. Dentro de un método de test unitario crear dos llamadas `Local` y dos `Provincial`, todos con los mismos datos de origen y destino. Luego comparar cada uno de estos cuatro objetos contra los demás, debiendo ser iguales solamente las instancias de `Local` y de `Provincial` entre sí.

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
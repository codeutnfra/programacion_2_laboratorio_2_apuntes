---
sidebar_label: I02 - Control de aduana
title: Ejercicio I02 - Control de aduana
sidebar_position: 2
author: Lautaro Galarza
authorURL: 
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
1. Crear un proyecto de pruebas unitarias y agregar las clases y métodos de prueba del siguiente diagrama:

![Diagrama de clases](/clases/13-interfaces/ejercicios/control-de-aduana-diagram-01.PNG)

2. Crear un proyecto de tipo biblioteca de clases y agregar los elementos del siguiente diagrama:

![Diagrama de clases](/clases/13-interfaces/ejercicios/control-de-aduana-diagram-02.PNG)

#### `Paquete`
* Es una clase abstracta.
* Su atributo `costoEnvio` es protegido.
* La propiedad `TienePrioridad` es abstracta.
* El método `ObtenerInformacionDePaquete` retorna todos los datos del paquete (incluyendo si tiene prioridad) como una cadena de texto.

#### `PaqueteFragil`
* Hereda de `Paquete`.
* Implementa la propiedad `TienePrioridad` retornando `true` ya que los paquetes frágiles tienen prioridad.
  * Implementar la prueba unitaria `TienePrioridad_DeberiaRetornarTrue` de la clase `PaqueteFragilTest`. Deberá verificar que la propiedad `TienePrioridad` retorne `true` para las instancias de `PaqueteFragil`.

#### `PaquetePesado`
* Hereda de `Paquete`.
* Implementa la propiedad `TienePrioridad` retornando `false` ya que los paquetes pesados NO tienen prioridad.
  * Implementar la prueba unitaria `TienePrioridad_DeberiaRetornarFalse` de la clase `PaquetePesadoTest`. Deberá verificar que la propiedad `TienePrioridad` retorne `false` para las instancias de `PaquetePesado`.

3. Implementar la interfaz `IAduana` en `Paquete` de forma **implícita**.
   1. Implementar la prueba unitaria `Impuestos_DeberiaRetornarValorImpuestoDel35PorcientoSobreCostoEnvio` de la clase `PaqueteFragilTest`. Deberá verificar que la propiedad `Impuestos`, cuando se invoca de forma **implícita** desde una instancia de `PaqueteFragil`, retorne el 35% del costo de envío.
   2. Implementar la prueba unitaria `Impuestos_DeberiaRetornarValorImpuestoDel35PorcientoSobreCostoEnvio_CuandoEsImplementacionImplicita` de la clase `PaquetePesadoTest`. Deberá verificar que la propiedad `Impuestos`, cuando se invoca de forma **implícita** desde una instancia de `PaquetePesado`, retorne el 35% del costo de envío.
   3. Realizar los cambios necesarios en `Paquete` para que las pruebas de los puntos anteriores pasen. 
   4. El método `AplicarImpuestos` deberá ser virtual. 
   5. Implementar la prueba unitaria `AplicarImpuestos_DeberiaRetornarCostoDeEnvioMasImpuestoAduana` de la clase `PaqueteFragilTest`. Deberá verificar que el método `AplicarImpuestos`, cuando se invoca de forma **implícita** desde una instancia de `PaqueteFragil`, retorne el costo del envío con el impuesto de aduana aplicado.
   6. Realizar los cambios necesarios en `Paquete` para que el test anterior pase. Reutilizar código. 

4. Implementar la interfaz `IAfip` en `PaquetePesado`.
   1. La propiedad `Impuestos` deberá ser implementada de forma **explícita**.
   2. Implementar la prueba unitaria `Impuestos_DeberiaRetornarValorImpuestoDel25PorcientoSobreCostoEnvio_CuandoEsImplementacionExplicitaIAfip` de la clase `PaquetePesadoTest`. Deberá verificar que la propiedad `Impuestos`, cuando se invoca de forma **explícita** desde una referencia de tipo `IAfip`, retorne el 25% del costo de envío.
   3. Realizar los cambios necesarios en `PaquetePesado` para que el test pase. 
   4. Implementar la prueba unitaria `AplicarImpuestos_DeberiaRetornarCostoDeEnvioMasImpuestosAfipYAduana` de la clase `PaquetePesadoTest`. Deberá verificar que el método `AplicarImpuestos`, cuando se invoca de forma **implícita** desde una instancia de `PaquetePesado`, retorne el costo de envío con ambos impuestos de AFIP y aduana aplicados.
   5. Sobrescribir el método `AplicarImpuestos` en `PaquetePesado` y realizar lo necesario para que el test anterior pase. Reutilizar código. 
   

5. Agregar la clase `GestionImpuestos` a la biblioteca de clases. Seguir el siguiente diagrama:

![Diagrama de clases](/clases/13-interfaces/ejercicios/control-de-aduana-diagram-03.PNG)

* Las listas se instanciarán en el constructor.
* La sobrecarga del método `RegistrarImpuestos` que recibe un paquete deberá agregar dicho paquete a la lista `impuestosAduana`. Además, si el paquete implementa `IAfip` deberá ser incorporado a la lista `impuestosAfip`. 
* La sobrecarga del método `RegistrarImpuestos` que recibe una lista de paquetes deberá agregar todos los paquetes a la lista `impuestosAduana`. Además, los paquetes que implementen `IAfip` deberán ser incorporados a la lista `impuestosAfip`. Reutilizar código. 

6. Implementar la prueba unitaria `CalcularTotalImpuestosAduana_DeberiaRetornarLaSumaDeLosImpuestosDeAduana` de la clase `GestionImpuestosTest`. Deberá verificar que el método `CalcularTotalImpuestosAduana` retorne la suma de los impuestos de aduana. Realizar la prueba con al menos un paquete de cada tipo.
   1. Realizar los cambios necesarios en `GestionImpuestos` para que el test anterior pase.

7. Implementar la prueba unitaria `CalcularTotalImpuestosAfip_DeberiaRetornarLaSumaDeLosImpuestosDeAfip` de la clase `GestionImpuestosTest`. Deberá verificar que el método `CalcularTotalImpuestosAfip` retorne la suma de los impuestos de AFIP. Realizar la prueba con al menos un paquete de cada tipo.
   1. Realizar los cambios necesarios en `GestionImpuestos` para que el test anterior pase.

8. Crear un proyecto de consola e incoporar el siguiente código en el método `Main`:

```csharp
List<Paquete> paquetes = new List<Paquete>();
paquetes.Add(new PaqueteFragil("F01", 190.00M, "Buenos aires", "La rioja", 175.30));
paquetes.Add(new PaquetePesado("P01", 2598.63M, "Misiones", "San luis", 5698.32));
paquetes.Add(new PaqueteFragil("F02", 1599.99M, "Córdoba", "Mendoza", 4421.12));
paquetes.Add(new PaquetePesado("P02", 639.60M, "Jujuy", "Tierra del fuego", 500.05));
paquetes.Add(new PaqueteFragil("F03", 458.95M, "Santa cruz", "San Juan", 1000.00));
paquetes.Add(new PaquetePesado("P03", 120.40M, "Río negro", "Neuquén", 350.00));

GestionImpuestos gestionImpuestos = new GestionImpuestos();
gestionImpuestos.RegistrarImpuestos(paquetes);

StringBuilder stringBuilder = new StringBuilder();
stringBuilder.AppendLine($"Total impuestos aduana: ${gestionImpuestos.CalcularTotalImpuestosAduana():#.00}");
stringBuilder.AppendLine($"Total impuestos AFIP: ${gestionImpuestos.CalcularTotalImpuestosAfip():#.00}");
stringBuilder.AppendLine();
stringBuilder.AppendLine($"Paquetes:");

for (int i = 0; i < paquetes.Count; i++)
{
    stringBuilder.AppendLine("---------------------------------------");
    stringBuilder.AppendLine($"PAQUETE {i + 1:00}"); 
    stringBuilder.AppendLine(paquetes[i].ObtenerInformacionDePaquete());

    if (paquetes[i] is IAfip paqueteAfip)
    {
        stringBuilder.AppendLine($"Impuesto AFIP: ${paqueteAfip.Impuestos:#.00}");
    }

    if (paquetes[i] is IAduana paqueteAduana)
    {
        stringBuilder.AppendLine($"Impuesto aduana: ${paqueteAduana.Impuestos:#.00}");
    }

    stringBuilder.AppendLine($"Costo de envío con impuestos: ${paquetes[i].AplicarImpuestos():#.00}");
}

stringBuilder.AppendLine("---------------------------------------");

Console.WriteLine(stringBuilder);
```

8. Verificar que la salida por consola coincida con la siguiente:

```
Total impuestos aduana: $1962,65
Total impuestos AFIP: $839,66

Paquetes:
---------------------------------------
PAQUETE 01
Código de seguimiento: F01
Costo de envío: $190,00
Origen: La rioja
Destino: Buenos aires
Peso: 175,30 kg
Tiene prioridad.

Impuesto aduana: $66,50
Costo de envío con impuestos: $256,50
---------------------------------------
PAQUETE 02
Código de seguimiento: P01
Costo de envío: $2598,63
Origen: San luis
Destino: Misiones
Peso: 5698,32 kg
No tiene prioridad.

Impuesto AFIP: $649,66
Impuesto aduana: $909,52
Costo de envío con impuestos: $4157,81
---------------------------------------
PAQUETE 03
Código de seguimiento: F02
Costo de envío: $1599,99
Origen: Mendoza
Destino: Córdoba
Peso: 4421,12 kg
Tiene prioridad.

Impuesto aduana: $560,00
Costo de envío con impuestos: $2159,99
---------------------------------------
PAQUETE 04
Código de seguimiento: P02
Costo de envío: $639,60
Origen: Tierra del fuego
Destino: Jujuy
Peso: 500,05 kg
No tiene prioridad.

Impuesto AFIP: $159,90
Impuesto aduana: $223,86
Costo de envío con impuestos: $1023,36
---------------------------------------
PAQUETE 05
Código de seguimiento: F03
Costo de envío: $458,95
Origen: San Juan
Destino: Santa cruz
Peso: 1000,00 kg
Tiene prioridad.

Impuesto aduana: $160,63
Costo de envío con impuestos: $619,58
---------------------------------------
PAQUETE 06
Código de seguimiento: P03
Costo de envío: $120,40
Origen: Neuquén
Destino: Río negro
Peso: 350,00 kg
No tiene prioridad.

Impuesto AFIP: $30,10
Impuesto aduana: $42,14
Costo de envío con impuestos: $192,64
---------------------------------------
```

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | [Código](https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_13/I02_Control_de_aduana) |
| :-----------------------: | :---: | :----------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
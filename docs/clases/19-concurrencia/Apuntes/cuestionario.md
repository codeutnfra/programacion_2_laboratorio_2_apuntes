---
title: Cuestionario - Programación multi-hilo y concurrencia.
sidebar_label: Cuestionario
slug: /concurrencia/cuestionario
hide_table_of_contents: true
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
### Concurrencia
1. ¿Qué significa concurrencia?
2. ¿Qué formas de concurrencia existen y cuándo se usa cada una?

### Programación multi-hilo
1. ¿Qué es un proceso?
2. ¿Qué es un hilo o subproceso? 
3. ¿Qué es la programación multi-hilo?
4. ¿Qué tipos de programación multi-hilo existen? Explique brevemente en qué consiste cada uno.
5. ¿Qué recibe como argumento el constructor de la clase `Task`? ¿Qué tipo de dato es? 
6. ¿Cuándo termina la vida de un hilo? Explique las distintas posibilidades.
7. Explique el siguiente código línea a línea e indique para qué se utiliza:

```csharp
private void WriteTextSafe(string text)
{
    if (textbox.InvokeRequired)
    {
        SafeCallDelegate safeCallDelegate = new SafeCallDelegate(WriteTextSafe);
        object[] arguments = new object[] { text };
        textbox.Invoke(safeCallDelegate, arguments); 
    }
    else
    {
        textbox.Text = text;
    }
}
```


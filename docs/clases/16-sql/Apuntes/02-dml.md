---
sidebar_label: DML - Data Manipulation Language
slug: /clases/sql/apuntes/dml
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: 
---
## Realizar consultas: Comando `SELECT`

Permite realizar operaciones de selección, ordenación, agrupación y filtrado de registros. Esta instrucción o sentencia utiliza diversas cláusulas: 

`FROM` Especifica la tabla de la que se quieren obtener los registros.

`WHERE` Especifica los criterios o condiciones que deben cumplir los registros a buscar dentro de la tabla.

`ORDER BY` Ordena los registros seleccionados en función de un campo.

`GROUP BY` Permite agrupar los registros seleccionados en función de uno o más campos.

`HAVING` Especifica una condición de búsqueda para un grupo.

### Mostrar todo el contenido de una tabla 

La siguiente sentencia selcciona  todos los registros contenidos en la tabla `Articulos` y se muestran todas las columnas:

```sql
SELECT * FROM Articulos
```
El asterisco (*) ubicado a continuación de la sentencia `SELECT` especifica qué, en el resultado de la consulta, se deben mostrar todas las columnas (campos) contenidos en la tabla.


### Mostrar algunos campos de una tabla 

Se selecciona los valores de la columna Nombre, de todos los registros de la tabla Articulos:

```sql
SELECT Nombre FROM Articulos
```

Se selecciona todos los valores de las columnas Nombre y Precio de la tabla Articulos:

```sql
SELECT Nombre, Precio FROM Articulos
```

### WHERE

La cláusula *WHERE* se utiliza cuando se desea recuperar información específica de una tabla sin incluir otros datos irrelevantes. Podemos utilizar para restringir los datos que se recuperan. La condición proporcionada en la cláusula WHERE filtra las filas recuperadas y devuelve sólo las filas esperadas. La cláusula WHERE se puede utilizar junto con SELECT, DELETE, UPDATE. 

#### Operadores de Comparación

Asociado a la cláusula WHERE se agregan los operadores de comparación: 

|       Operador        |       Descripcion     |
|:---------------------:|:---------------------:|
|           ``=``           |       Igual a         |
|           ``<``           |       Menor a         |
|           ``>``           |       Mayor a         |
|           ``>=``          |       Mayor o igual a |
|           ``<=``          |       Menor o igual a |
|           `<>`          |       No es igual a   |


Se selecciona de la tabla Articulos la columna Nombre y muestra todos aquellos registros cuyo valor en la columna Código sea igual a 1:

```sql
SELECT Nombre FROM Articulos WHERE Codigo = 1
```

Se selecciona de la tabla Articulos las columnas Nombre y Precio y muestra todos aquellos registros cuyo precio sea mayor a 150:

```sql
SELECT Nombre, Precio FROM Articulos WHERE Precio > 150
```

#### Operadores Lógicos

Para crear expresiones lógicas disponemos de varios operadores de comparación.

|       Operador        |       Descripcion                                 |
|:---------------------:|:-------------------------------------------------:|
|          AND          |Se debe cumplir todas las condiciones especificadas|
|          OR           |Se debe cumplir al menos una de las conduiciones   |
|          NOT          |No debe cumplir las condiciones especificadas      |

Si uno o los dos valores a comparar son NULL, el resultado es NULL. (Excepto con el operador ``<=>`` que es usado para una comparación con NULL segura). 

El operador `<=>` funciona igual que el operador `=`. Salvo que, si en la comparación una o ambas de las expresiones es nula, el resultado no es NULL. Si se comparan dos expresiones nulas, el resultado es verdadero.

Se selecciona de la tabla Articulos todos aquellos registros cuyo precio tenga un valor mayor o igual a 500, o su stock sea mayor o igual a 100:

```sql
SELECT Nombre, Precio 
FROM Articulos 
WHERE Precio >= 500 OR Stock >= 100
```

### Operadores BETWEEN / NOT BETWEEN

Especifica un intervalo. La cláusula BETWEEN especifica un rango de búsqueda. NOT BETWEEN especifica el rando para el cual no queremos los datos. Para indicar que deseamos recuperar los registros según el intervalo de valores de un campo. La sintaxis es la siguiente: 

`BETWEEN mínimo AND máximo:`
```sql
SELECT Nombre, Precio 
FROM Articulos 
WHERE Precio BETWEEN 100 AND 200
```

`NOT BETWEEN mínimo AND máximo:`
```sql
SELECT Nombre, Precio 
FROM Articulos 
WHERE Precio NOT BETWEEN 100 AND 200
```

### Operadores LIKE / NOT LIKE

El operador LIKE se usa para hacer comparaciones entre cadenas y patrones. El resultado es verdadero  si la cadena se ajusta al patrón o falso en caso contrario. 

Tanto si la cadena como el patrón son NULL, el resultado es NULL.

Para definir estos patrones, se hace uso de *comodines*:

|       Operador        |       Descripcion                                                |
|:---------------------:|:----------------------------------------------------------------:|
|          %            |Coincidencia con *cualquier* número de caracteres, incluso ninguno|
|          _            |Coincidencia con un único caracter                                |

Se muestra de la tabla Articulos todos aquellos registros que en el campo nombre, figure la palabra Pala:

```sql
SELECT * FROM Articulos 
WHERE Nombre LIKE '%Pala%'
```


## Crear registros: Comando `INSERT`

Para insertar datos en una tabla utilizamos la sentencia INSERT. Con ella, podemos añadir registros uno a uno, o añadir tantos registros como deseemos, en una sola sentencia. 

```sql
INSERT INTO Productos
VALUES ('iPhone 5', 499.99, 'Apple')
```

Se insertan los valores especificados despues de la palabra VALUES en cada uno de los campos. *Es muy importante respetar el orden* los datos se deben especificar en el mismo orden en que figuran las columnas en la tabla y respetar los tipos de dato de cada columna. 

### Valores NULL

La expresión NULL significa "dato desconocido" o "valor inexistente". No es lo mismo que un valor 0 en un campo numérico, o una cadena vacía, o una cadena de texto con la palabra NULL literal en un campo de tipo texto. A veces, puede desconocerse o no existir el dato correspondiente a algún campo de un registro. En estos casos, se dice que el campo puede contener valores nulos. 
Por ejemplo, en una tabla con el nombre Productos, se puede tener valores nulos en el campo precio, en el caso de que, para algunos productos, no se haya establecido el precio para la venta.
En contraposición, una tabla puede contener campos que no pueden quedar vacíos, como los campos que identifican cada registro (códigos de identificación), que son clave primaria.
Por defecto (si no lo aclaramos en la creación de la tabla) los campos permiten valores nulos.

```sql
INSERT INTO Productos
VALUES ('iPhone 5', 499.99, NULL )
```

En el ejemplo anterior podemos ver que para el campo Precio, el valor NULL no es una cadena de caracteres, por lo que no se coloca entre comillas. Si un campo acepta valores nulos, podemos ingresar NULL cuando no conocemos el valor.
Además, si una columna fue definida como no obligatoria cuando creamos nuestra tabla, puede no incluirse en el listado de campos (puede entenderse como que el campo "no es obligatorio" de asignar un valor) y eso se rellenara con NULL.


## Modificar registros: Comando `UPDATE`

Podemos modificar registros de una tabla utilizando la sentencia UPDATE. La sintaxis genérica del comando UPDATE para actualizar un registro existente es:

```sql
UPDATE Tabla 
SET Campo1 = Valor1 
WHERE Campo = 'Valor'
```

Es posible, del mismo modo, actualizar el valor de más de una columna separándolas en la sección SET mediante comas como delimitador:

```sql
UPDATE Tabla 
SET Campo1 = Valor1, Cmapo2 = Valor2, 
WHERE Campo = 'Valor'
```

### Actualizaciones selectivas

Mediante la cláusula WHERE se puede establecer una condición; de esta manera, sólo las filas/registros que cumplan esa condición serán actualizadas. Ejemplos:

```sql
UPDATE Articulos 
SET Nombre = `Pala Ancha` 
WHERE Nombre = 'Pala'
```

```sql
UPDATE Articulos 
SET Precio = 499.99 
WHERE Nombre = 'Pala'
```

```sql
UPDATE Articulos 
SET Precio = 499.99 
WHERE Nombre <> 'Pala'
```

## Eliminar registros: Comando `DELETE`

Para eliminar registros de una tabla, se utiliza la sentencia DELETE. Al hacerlo, se deberá especificar la condición que deben cumplir los registros de la tabla a eliminar. En el ejemplo se eliminarían de la tabla Productos todas aquellas filas/registros donde el campo idProducto contenga el valor 1.

```sql
DELETE Productos 
WHERE idProducto = 1
```

:::important

Si no especificas ninguna condición a través de una cláusula WHERE, se eliminarán todos los registros de la tabla sin ninguna limitación (es decir, la tabla quedará vacía).

:::

### TRUNCATE TABLE

La sentencia DELETE se puede utilizar para eliminar todos los registros de una tabla, pero tiene la desventaja de no ser tan eficiente, ya que, por ejemplo (entre otras limitaciones), no resetea los valores de los campos AUTO_INCREMENT.
Por este motivo, si se opta por vaciar completamente la tabla, es recomendable utilizar la sentencia TRUNCATE TABLE, la cual elimina los registros en su totalidad y deja vacía la tabla, de manera menos costosa (en términos de rendimiento) para el servidor de base de datos.

```sql
TRUNCATE TABLE Productos 
```


## Consultas avanzadas



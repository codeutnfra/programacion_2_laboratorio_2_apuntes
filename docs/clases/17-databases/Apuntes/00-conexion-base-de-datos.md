---
title: Apuntes - Conexión a bases de datos
sidebar_label: Conexión a base de datos
slug: /clases/databases/apuntes/databases
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## ¿Cómo nos conectamos a la base de datos?
Primero se debe instalar el paquete `System.Data.SqlClient`:
1. Botón derecho sobre el proyecto
2. Seleccionar *Administrar Paquete NuGet*
3. Examinar
4. Buscar *System.Data.SqlClient*
5. Instalar
6. Agregar al código fuente `using System.Data.SqlClient`

<iframe width="560" height="315" src="https://www.youtube.com/embed/_Ha-fMUFS3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para conectarnos a la base de datos utilizamos una instancia de `SqlConnection`.  

```csharp
SqlConnection connection; // Puente.
SqlCommand command;      // Quien lleva la consulta.
SqlDataReader reader;   // Quien trae los datos.

static ConexionSql()
{
    connection = new SqlConnection(@"Data Source = [Nombre del servidor];
                                Database = [Nombre de la base de datos];
                                Trusted_Connection = True;");

    command = new SqlCommand();
    command.CommandType = CommandType.Text;
    command.Connection = connection;
}
```

## Consultar los datos de una tabla
Una opción para realizar una consulta es utilizando bloque **Try-Catch-Finally**

```csharp
try
{
    command.CommandText = "SELECT * FROM tabla";
    connection.Open();
    reader = command.ExecuteReader();

    while (reader.Read())
    {
        // Lógica
    }
}
catch (Exception)
{
    throw new Exception("Error de conexión a la base de datos");
}
finally 
{
    if (connection.State == ConnectionState.Open)
    {
        connection.Close();
    }
}
```

Otra opción es usar la directiva `using` que cierra automáticamente la conexión.

```csharp
using (SqlConnection connection = new SqlConnection(connection))  
{  
    connection.Open();  
    // Lógica
}  
```

## Manipulando los datos de una tabla
Debemos utilizar el método `ExecuteNonQuery` del objeto `SqlCommand` que ejecuta la sentencia y guarda los cambios en la base de datos. 

:::important IMPORTANTE

Si utilizamos la instancia de `SqlCommand` como atributo, después de ejecutar el método `ExecuteNonQuery` se deberá invocar al método `Clear`.

:::

Ejemplo de consulta parametrizada:

```csharp
connection.Open();
SqlCommand sqlCommand = new SqlCommand();
sqlCommand.CommandType = System.Data.CommandType.Text;
sqlCommand.Connection = connection;
sqlCommand.CommandText = "INSERT INTO tabla VALUES (@Name, @LastName, @Age)";
sqlCommand.Parameters.AddWithValue("@Name", "Juana");
sqlCommand.Parameters.AddWithValue("@LastName", "Perez");
sqlCommand.Parameters.AddWithValue("@Age", "19");
sqlCommand.ExecuteNonQuery();
sqlCommand.Parameters.Clear();
```

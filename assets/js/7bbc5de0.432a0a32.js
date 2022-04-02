"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1265],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?o.createElement(b,t(t({ref:n},c),{},{components:a})):o.createElement(b,t({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,t=new Array(i);t[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,t[1]=l;for(var p=2;p<i;p++)t[p]=a[p];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2716:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=a(7462),r=a(3366),i=(a(7294),a(3905)),t=["components"],l={sidebar_label:"Serializaci\xf3n JSON",slug:"/clases/serializacion/apuntes/serializacion-json",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,p={unversionedId:"clases/serializacion/Apuntes/serializacion-json",id:"clases/serializacion/Apuntes/serializacion-json",title:"serializacion-json",description:"Serializaci\xf3n JSON",source:"@site/docs/clases/15-serializacion/Apuntes/02-serializacion-json.md",sourceDirName:"clases/15-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/serializacion-json",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-json",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1635146777,formattedLastUpdatedAt:"10/25/2021",sidebarPosition:2,frontMatter:{sidebar_label:"Serializaci\xf3n JSON",slug:"/clases/serializacion/apuntes/serializacion-json",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Serializaci\xf3n XML",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-xml"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/cuestionario"}},c={},d=[{value:"Serializaci\xf3n JSON",id:"serializaci\xf3n-json",level:2},{value:"Sintaxis de JSON",id:"sintaxis-de-json",level:2},{value:"Serializando a JSON",id:"serializando-a-json",level:2},{value:"Deserializando JSON",id:"deserializando-json",level:2}],u={toc:d};function m(e){var n=e.components,a=(0,r.Z)(e,t);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"serializaci\xf3n-json"},"Serializaci\xf3n JSON"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JavaScript Object Notation (JSON)")," es un est\xe1ndar abierto que usa texto de f\xe1cil lectura para almacenar y transferir objetos. Se suele utilizar para transferir datos a trav\xe9s de la web. Est\xe1 compuesto de pares propiedad-valor y arrays. Su sintaxis es de f\xe1cil lectura, ya que almacena la informaci\xf3n de una manera organizada y f\xe1cil de acceder. "),(0,i.kt)("p",null,"La serializaci\xf3n JSON transforma las propiedades ",(0,i.kt)("strong",{parentName:"p"},"p\xfablicas")," de un objeto en una cadena de texto, array de bytes o en un stream que cumpla con la ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8259"},"especificaci\xf3n de JSON"),". "),(0,i.kt)("h2",{id:"sintaxis-de-json"},"Sintaxis de JSON"),(0,i.kt)("p",null,"Cada objeto en JSON se encuentra encerrado entre llaves (",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") y dentro de las mismas se declaran sus propiedades en pares propiedad-valor. La propiedad y su valor se separan por el s\xedmbolo ",(0,i.kt)("inlineCode",{parentName:"p"},":"),". El nombre de cada propiedad se encierra entre comillas dobles. El formato del valor depender\xe1 del tipo de dato, JSON soporta los siguientes tipos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"N\xfameros"),": No llevan comillas. Si son fraccionarios deben llevar el punto decimal (por ejemplo, ",(0,i.kt)("inlineCode",{parentName:"li"},"123.45"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cadenas de texto"),": Representan secuencias de cero o m\xe1s caracteres. Deben ir encerradas entre comillas dobles y permiten caracteres de escape."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Booleanos"),": Pueden ser ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," o ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," sin usar comillas. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"null")),": Representa el valor nulo. No lleva comillas. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objetos"),": Puede haber otros objetos como valores de propiedades. Se encierran entre llaves (",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arrays"),": Puede haber colecciones de valores u otros objetos. Se encierran entre (",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),").")),(0,i.kt)("p",null,"Cada par propiedad-valor se separa del siguiente por una coma. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "propiedadTexto": "valor",\n    "propiedadNumerica": 20,\n    "propiedadBooleana": true,\n    "propiedadNula": null,  \n    "propiedadObjeto": {},\n    "propiedadArray": []\n}\n')),(0,i.kt)("p",null,"Tambi\xe9n admite hacer comentarios utilizando ",(0,i.kt)("inlineCode",{parentName:"p"},"//"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Los objetos se encierran entre llaves que contienen sus propiedades.\n// El identificador de cada propiedad se debe escribir entre comillas dobles. \n// Seguido del s\xedmbolo : se encuentra el valor de dicha propiedad.  \n{\n  "nombreCompleto": "Juan Perez", // Los textos van entre comillas dobles.\n  "saldo": 29638.59, // Los n\xfameros van sin comillas dobles.\n  "edad": 30, \n  "direccion": { // El valor de una propiedad puede ser otro objeto.\n    "calle": "Av. Mitre",\n    "numero": 750,\n    "codigoPostal": "1870",\n    "piso": "2",\n    "departamento": null, // null para indicar valores nulos. \n    "localidad": "Avellaneda",\n    "provincia": "Buenos Aires",\n    "pais": "Argentina"\n  },\n  "telefonos": // JSON admite arrays que pueden contener valores u objetos encerrados entre corchetes []\n  [\n    {\n        "codigoArea": "011",\n        "numero": "42226465",\n        "interno": null,\n        "esCelular": false // los valores booleanos true/false van sin comillas.\n    },\n    {\n        "codigoArea": "011",\n        "numero": "42014133",\n        "interno": "116",\n        "esCelular": false\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Como vemos en la propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"direccion"),", el valor puede ser otro objeto. "),(0,i.kt)("p",null,"Tambi\xe9n pueden contener arrays como la propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"telefonos"),". Los arrays pueden contener m\xfaltiples valores u objetos encerrados entre corchetes (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,i.kt)("h2",{id:"serializando-a-json"},"Serializando a JSON"),(0,i.kt)("p",null,"El espacio de nombres ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," provee funcionalidad para serializar y deserializar JSON. Trabajaremos principalmente con la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonSerializer")," la cual expone los m\xe9todos ",(0,i.kt)("inlineCode",{parentName:"p"},"Serialize")," para serializar y ",(0,i.kt)("inlineCode",{parentName:"p"},"Deserialize")," para deserializar."),(0,i.kt)("p",null,"Veamos el siguiente ejemplo donde tenemos la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"Empleado"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Empleado\n{\n    private string nombreCompleto;\n    private DateTime fechaNacimiento;\n    private List<Empleado> personalACargo;\n    private decimal salario;\n\n    public string NombreCompleto\n    {\n        get \n        {\n            return nombreCompleto;\n        }\n        set\n        {\n            nombreCompleto = value;\n        }\n    }\n    \n    public DateTime FechaNacimiento\n    {\n        get \n        {\n            return fechaNacimiento;\n        }\n        set\n        {\n            fechaNacimiento = value;\n        }\n    }\n    \n    public decimal Salario\n    {\n        get \n        {\n            return salario;\n        }\n        set\n        {\n            salario = value;\n        }\n    }\n\n    public Empleado() \n    {\n        personalACargo = new List<Empleado>();\n    }\n\n    public Empleado(string nombreCompleto, DateTime fechaNacimiento, decimal salario) : this()\n    {\n        this.nombreCompleto = nombreCompleto;\n        this.fechaNacimiento = fechaNacimiento;\n        this.salario = salario;\n    }        \n}\n")),(0,i.kt)("p",null,"Para serializar a JSON tendremos que usar el m\xe9todo gen\xe9rico y est\xe1tico ",(0,i.kt)("inlineCode",{parentName:"p"},"Serialize")," de la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),", que recibe como argumento el objeto a serializar. Este m\xe9todo retorna el objeto serializado como una cadena de texto. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            string jsonString = JsonSerializer.Serialize(empleado);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"NombreCompleto":"Juan Perez","FechaNacimiento":"1990-03-25T00:00:00","Salario":50000}\n')),(0,i.kt)("p",null,"La fecha se serializa como si fuera un texto y por defecto estar\xe1 en un formato est\xe1ndar acorde a la norma ",(0,i.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/ISO_8601"},"ISO-8601"),"."),(0,i.kt)("p",null,"En este caso el JSON de salida se encuentra ",(0,i.kt)("strong",{parentName:"p"},"minificado"),", eso significa que por defecto se remueven todos los espacios en blanco, la indentaci\xf3n y los saltos de l\xednea. Esto tiene como beneficio que la cadena de texto resultante es m\xe1s liviana."),(0,i.kt)("p",null,"Si quisieramos verlo indentado y m\xe1s f\xe1cil de leer, podremos usar una sobrecarga del m\xe9todo que recibe un objeto de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," el cual sirve para configurar las opciones de serializaci\xf3n. Una de esas opciones es la propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteIndented"),", que si le asignamos el valor ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," provocar\xe1 que el resultado se encuentre indentado. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            // Genero el objeto de configuraci\xf3n de la serializaci\xf3n.\n            JsonSerializerOptions opciones = new JsonSerializerOptions();\n            opciones.WriteIndented = true;\n\n            // Existe una sobrecarga del m\xe9todo Serialize que recibe el objeto de configuraci\xf3n. \n            string jsonString = JsonSerializer.Serialize(empleado, opciones);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NombreCompleto": "Juan Perez",\n  "FechaNacimiento": "1990-03-25T00:00:00",\n  "Salario": 50000\n}\n')),(0,i.kt)("p",null,"Para guardar el json en un archivo se puede usar un objeto de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamWriter")," o la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),", tal como se vio en la ",(0,i.kt)("a",{parentName:"p",href:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/archivos"},"unidad de archivos"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n// Genero el objeto de configuraci\xf3n de la serializaci\xf3n.\nJsonSerializerOptions opciones = new JsonSerializerOptions();\nopciones.WriteIndented = true;\n\n// Serializo un objeto de tipo Empleado a formato JSON. \nstring jsonString = JsonSerializer.Serialize(empleado, opciones);\n\n// Guardo el JSON desde un archivo.\nFile.WriteAllText("empleado.json", jsonString);\n')),(0,i.kt)("p",null,"Da como resultado:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Salario": 50000,\n  "NombreCompleto": "Juan Perez",\n  "FechaNacimiento": "1990-03-25T00:00:00"\n}\n')),(0,i.kt)("h2",{id:"deserializando-json"},"Deserializando JSON"),(0,i.kt)("p",null,"Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato JSON se debe utilizar el m\xe9todo est\xe1tico ",(0,i.kt)("inlineCode",{parentName:"p"},"Deserialize")," de la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string jsonString = @"\n                                {\n                                    ""NombreCompleto"": ""Juan Perez"",\n                                    ""FechaNacimiento"": ""1990-03-25T00:00:00"",\n                                    ""Salario"": 50000\n                                }";\n\n            // Obtengo un objeto de tipo Empleado a partir de un string\n            // que contiene un empleado serializado en formato json. \n            Empleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);\n\n            Console.WriteLine($"Nombre: {empleado.NombreCompleto}");\n            Console.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");\n            Console.WriteLine($"Salario: {empleado.Salario}");\n        }\n    }\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nombre: Juan Perez\nFecha de nacimiento: 25/3/1990 00:00:00\nSalario: 50000\n")),(0,i.kt)("p",null,"Se trata exactamente del proceso opuesto. Al m\xe9todo gen\xe9rico ",(0,i.kt)("inlineCode",{parentName:"p"},"Deserialize")," debemos indicarle el tipo al que queremos deserializar y pasarle como argumento un ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," que contenga el o los objetos en formato JSON.  "),(0,i.kt)("p",null,"Si el texto que intentamos deserializar no se encuentra bien formateado, se lanzar\xe1 una excepci\xf3n de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonException"),"."),(0,i.kt)("p",null,"Para leer el json desde un archivo se puede usar un objeto de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamReader")," o la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),", tal como se vio en la ",(0,i.kt)("a",{parentName:"p",href:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/archivos"},"unidad de archivos"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Obtengo el JSON desde un archivo.\nstring jsonString = File.ReallAllText("empleado.json");\n\n// Deserializo un objeto de tipo Empleado a partir de JSON. \nEmpleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);\n\nConsole.WriteLine($"Nombre: {empleado.NombreCompleto}");\nConsole.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");\nConsole.WriteLine($"Salario: {empleado.Salario}");\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[340],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,i=function(e,a){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var a=o.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},p=function(e){var a=c(e.components);return o.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(b,t(t({ref:a},p),{},{components:n})):o.createElement(b,t({ref:a},p))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,t=new Array(r);t[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,t[1]=l;for(var c=2;c<r;c++)t[c]=n[c];return o.createElement.apply(null,t)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5368:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),t=["components"],l={title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Serializaci\xf3n",slug:"/clases/serializacion/apuntes/serializacion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,c={unversionedId:"clases/serializacion/Apuntes/serializacion-json",id:"clases/serializacion/Apuntes/serializacion-json",isDocsHomePage:!1,title:"Apuntes - Archivos y serializaci\xf3n",description:"Serializaci\xf3n",source:"@site/docs/clases/14-serializacion/Apuntes/02-serializacion-json.md",sourceDirName:"clases/14-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/serializacion",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633324489,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:2,frontMatter:{title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Serializaci\xf3n",slug:"/clases/serializacion/apuntes/serializacion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"}},p=[{value:"Serializaci\xf3n",id:"serializaci\xf3n",children:[{value:"Usos de serializar",id:"usos-de-serializar",children:[]}]},{value:"Formatos de serializaci\xf3n",id:"formatos-de-serializaci\xf3n",children:[]},{value:"Serializaci\xf3n XML",id:"serializaci\xf3n-xml",children:[]},{value:"Serializaci\xf3n JSON",id:"serializaci\xf3n-json",children:[]},{value:"Sintaxis de JSON",id:"sintaxis-de-json",children:[]},{value:"Serializando a JSON",id:"serializando-a-json",children:[]},{value:"Deserializando JSON",id:"deserializando-json",children:[]}],d={toc:p};function u(e){var a=e.components,n=(0,i.Z)(e,t);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"serializaci\xf3n"},"Serializaci\xf3n"),(0,r.kt)("p",null,"La ",(0,r.kt)("strong",{parentName:"p"},"serializaci\xf3n")," es el proceso de convertir el estado de un objeto a un formato espec\xedfico con el objetivo de transmitirlo a otro sistema o para almacenarlo en un archivo, en memoria o en una base de datos."),(0,r.kt)("p",null,"Su prop\xf3sito principal es guardar el estado del objeto (los valores que tienen sus atributos en ese momento) para recrearlo en alg\xfan momento en el futuro. El proceso contrario, recuperar un objeto que fue serializado, se conoce como ",(0,r.kt)("strong",{parentName:"p"},"deserializaci\xf3n"),". "),(0,r.kt)("h3",{id:"usos-de-serializar"},"Usos de serializar"),(0,r.kt)("p",null,"La serializaci\xf3n permite al desarrollador almacenar el estado de un objeto y recrearlo a necesidad. El objetivo puede ser persistirlo o intercambiar datos con otro sistema. "),(0,r.kt)("p",null,"Entre sus usos m\xe1s frecuentes se encuentran:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enviar el objeto a una aplicaci\xf3n o sistema externo a trav\xe9s de servicios web u otros sistemas de comunicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h2",{id:"formatos-de-serializaci\xf3n"},"Formatos de serializaci\xf3n"),(0,r.kt)("p",null,"Siempre que serializamos lo hacemos a un formato espec\xedfico, uno que luego pueda ser reinterpretado para rearmar el objeto. Existen docenas de formatos que se pueden especificar, pero los m\xe1s comunes son ",(0,r.kt)("strong",{parentName:"p"},"Extensible Markup Language (XML)")," y ",(0,r.kt)("strong",{parentName:"p"},"JavaScript Object Notation (JSON)"),"."),(0,r.kt)("p",null,"El ",(0,r.kt)("strong",{parentName:"p"},"formato JSON")," es m\xe1s compacto y se suele utilizar en entornos web y mobile. Esto sucede por dos motivos, primero es m\xe1s liviano y por lo tanto la carga de datos que tiene que viajar por la red es menor, y segundo porque se ha convertido en un estandar al ser el formato de serializaci\xf3n nativo de JavaScript. "),(0,r.kt)("p",null,"El ",(0,r.kt)("strong",{parentName:"p"},"formato XML")," contiene m\xe1s informaci\xf3n (es m\xe1s pesado) pero sigue siendo utilizado principalmente para manejar la comunicaci\xf3n con aplicaciones que tienen cierto tiempo de antiguedad y no soportan la comunicaci\xf3n en otros formatos."),(0,r.kt)("h2",{id:"serializaci\xf3n-xml"},"Serializaci\xf3n XML"),(0,r.kt)("h2",{id:"serializaci\xf3n-json"},"Serializaci\xf3n JSON"),(0,r.kt)("p",null,"El formato ",(0,r.kt)("strong",{parentName:"p"},"JavaScript Object Notation (JSON)")," es un estandar abierto que se suele utilizar para transferir datos a trav\xe9s de la web. "),(0,r.kt)("p",null,"La serializaci\xf3n JSON transforma las propiedades ",(0,r.kt)("strong",{parentName:"p"},"p\xfablicas")," de un objeto en una cadena de texto, array de bytes o en un stream que cumpla con la ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8259"},"especificaci\xf3n de JSON"),". "),(0,r.kt)("h2",{id:"sintaxis-de-json"},"Sintaxis de JSON"),(0,r.kt)("p",null,"Cada objeto en JSON se encuentra encerrado entre llaves (",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),") y dentro de las mismas se declaran sus propiedades en pares propiedad-valor. La propiedad y su valor se separan por el s\xedmbolo ",(0,r.kt)("inlineCode",{parentName:"p"},":"),". El nombre de cada propiedad se encierra entre comillas dobles. El formato del valor depender\xe1 del tipo de dato, JSON soporta los siguientes tipos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"N\xfameros"),": No llevan comillas. Si son fraccionarios deben llevar el punto decimal (por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"li"},"123.45"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cadenas de texto"),": Representan secuencias de cero o m\xe1s caracteres. Deben ir encerradas entre comillas dobles y permiten caracteres de escape."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Booleanos"),": Pueden ser ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," o ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," sin usar comillas. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"null")),": Representa el valor nulo. No lleva comillas. ")),(0,r.kt)("p",null,"Cada par propiedad-valor se separa del siguiente por una coma. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "propiedadTexto": "valor",\n    "propiedadNumerica": 20,\n    "propiedadBooleana": true,\n    "propiedadNula": null\n}\n')),(0,r.kt)("p",null,"Tambi\xe9n admite hacer comentarios utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"//"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Los objetos se encierran entre llaves que contienen sus propiedades.\n// El identificador de cada propiedad se debe escribir entre comillas dobles. \n// Seguido del s\xedmbolo : se encuentra el valor de dicha propiedad.  \n{\n  "nombreCompleto": "Juan Perez", // Los textos van entre comillas dobles.\n  "saldo": 29638.59, // Los n\xfameros van sin comillas dobles.\n  "edad": 30, \n  "direccion": { // El valor de una propiedad puede ser otro objeto.\n    "calle": "Av. Mitre",\n    "numero": 750,\n    "codigoPostal": "1870",\n    "piso": "2",\n    "departamento": null, // null para indicar valores nulos. \n    "localidad": "Avellaneda",\n    "provincia": "Buenos Aires",\n    "pais": "Argentina"\n  },\n  "telefonos": // JSON admite arrays que pueden contener valores u objetos encerrados entre corchetes []\n  [\n    {\n        "codigoArea": "011",\n        "numero": "42226465",\n        "interno": null,\n        "esCelular": false // los valores booleanos true/false van sin comillas.\n    },\n    {\n        "codigoArea": "011",\n        "numero": "42014133",\n        "interno": "116",\n        "esCelular": false\n    },\n  ]\n}\n')),(0,r.kt)("p",null,"Como vemos en la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"direccion"),", el valor puede ser otro objeto. "),(0,r.kt)("p",null,"Tambi\xe9n pueden contener arrays como la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"telefonos"),". Los arrays pueden contener m\xfaltiples valores u objetos encerrados entre corchetes (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,r.kt)("h2",{id:"serializando-a-json"},"Serializando a JSON"),(0,r.kt)("p",null,"El espacio de nombres ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," provee funcionalidad para serializar y deserializar JSON. Trabajaremos principalmente con la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializer")," la cual expone los m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"Serialize")," para serializar y ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize")," para deserializar."),(0,r.kt)("p",null,"Veamos el siguiente ejemplo donde tenemos la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Empleado"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Empleado\n{\n    private string nombreCompleto;\n    private DateTime fechaNacimiento;\n    private List<Empleado> personalACargo;\n    private decimal salario;\n\n    public string NombreCompleto\n    {\n        get \n        {\n            return nombreCompleto;\n        }\n        set\n        {\n            nombreCompleto = value;\n        }\n    }\n    \n    public DateTime FechaNacimiento\n    {\n        get \n        {\n            return fechaNacimiento;\n        }\n        set\n        {\n            fechaNacimiento = value;\n        }\n    }\n    \n    protected decimal Salario\n    {\n        get \n        {\n            return salario;\n        }\n        set\n        {\n            salario = value;\n        }\n    }\n\n    public Empleado() \n    {\n        personalACargo = new List<Empleado>();\n    }\n\n    public Empleado(string nombreCompleto, DateTime fechaNacimiento, decimal salario) : this()\n    {\n        this.nombreCompleto = nombreCompleto;\n        this.fechaNacimiento = fechaNacimiento;\n        this.salario = salario;\n    }        \n}\n")),(0,r.kt)("p",null,"Para serializar a JSON tendremos que usar el m\xe9todo gen\xe9rico y est\xe1tico ",(0,r.kt)("inlineCode",{parentName:"p"},"Serialize")," de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),", que recibe como argumento el objeto a serializar. Este m\xe9todo retorna el objeto serializado como una cadena de texto. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            string jsonString = JsonSerializer.Serialize(empleado);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"NombreCompleto":"Juan Perez","FechaNacimiento":"1990-03-25T00:00:00","Salario":50000}\n')),(0,r.kt)("p",null,"La fecha se serializa como si fuera un texto y por defecto estar\xe1 en un formato est\xe1ndar acorde a la norma ",(0,r.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/ISO_8601"},"ISO-8601"),"."),(0,r.kt)("p",null,"En este caso el JSON de salida se encuentra ",(0,r.kt)("strong",{parentName:"p"},"minificado"),", eso significa que por defecto se remueven todos los espacios en blanco, la indentaci\xf3n y los saltos de l\xednea. Esto tiene como beneficio que la cadena de texto resultante es m\xe1s liviana."),(0,r.kt)("p",null,"Si quisieramos verlo indentado y m\xe1s f\xe1cil de leer, podremos usar una sobrecarga del m\xe9todo que recibe un objeto de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," el cual sirve para configurar las opciones de serializaci\xf3n. Una de esas opciones es la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteIndented"),", que si le asignamos el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," provocar\xe1 que el resultado se encuentre indentado. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            // Genero el objeto de configuraci\xf3n de la serializaci\xf3n.\n            JsonSerializerOptions opciones = new JsonSerializerOptions();\n            opciones.WriteIndented = true;\n\n            // Existe una sobrecarga del m\xe9todo Serialize que recibe el objeto de configuraci\xf3n. \n            string jsonString = JsonSerializer.Serialize(empleado, opciones);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NombreCompleto": "Juan Perez",\n  "FechaNacimiento": "1990-03-25T00:00:00",\n  "Salario": 50000\n}\n')),(0,r.kt)("h2",{id:"deserializando-json"},"Deserializando JSON"),(0,r.kt)("p",null,"Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato JSON se debe utilizar el m\xe9todo est\xe1tico ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize")," de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string jsonString = @"\n                                {\n                                    ""NombreCompleto"": ""Juan Perez"",\n                                    ""FechaNacimiento"": ""1990-03-25T00:00:00"",\n                                    ""Salario"": 50000\n                                }";\n\n            // Obtengo un objeto de tipo Empleado a partir de un string +\n            // que contiene un empleado serializado en formato json. \n            Empleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);\n\n            Console.WriteLine($"Nombre: {empleado.NombreCompleto}");\n            Console.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");\n            Console.WriteLine($"Salario: {empleado.Salario}");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Nombre: Juan Perez\nFecha de nacimiento: 25/3/1990 00:00:00\nSalario: 50000\n")),(0,r.kt)("p",null,"Se trata exactamente del proceso opuesto. Al m\xe9todo gen\xe9rico ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize")," debemos indicarle el tipo al que queremos deserializar y pasarle como argumento un ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," que contenga el o los objetos en formato JSON.  "),(0,r.kt)("p",null,"Si el texto que intentamos deserializar no se encuentra bien formateado, se lanzar\xe1 una excepci\xf3n de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonException"),"."))}u.isMDXComponent=!0}}]);
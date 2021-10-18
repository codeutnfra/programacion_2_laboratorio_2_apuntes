"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[8431],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||t;return a?r.createElement(b,o(o({ref:n},p),{},{components:a})):r.createElement(b,o({ref:n},p))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<t;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6071:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=a(7462),i=a(3366),t=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Serializaci\xf3n XML",slug:"/clases/serializacion/apuntes/serializacion-xml",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s={unversionedId:"clases/serializacion/Apuntes/serializacion-xml",id:"clases/serializacion/Apuntes/serializacion-xml",isDocsHomePage:!1,title:"serializacion-xml",description:"Serializaci\xf3n XML",source:"@site/docs/clases/15-serializacion/Apuntes/01-serializacion-xml.md",sourceDirName:"clases/15-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/serializacion-xml",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-xml",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1634529707,formattedLastUpdatedAt:"10/18/2021",sidebar_label:"Serializaci\xf3n XML",sidebarPosition:1,frontMatter:{sidebar_label:"Serializaci\xf3n XML",slug:"/clases/serializacion/apuntes/serializacion-xml",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Apuntes - Serializaci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion"},next:{title:"serializacion-json",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-json"}},c=[{value:"Serializaci\xf3n XML",id:"serializaci\xf3n-xml",children:[]},{value:"Sintaxis de XML",id:"sintaxis-de-xml",children:[]},{value:"Serializando a XML",id:"serializando-a-xml",children:[]},{value:"Deserializando XML",id:"deserializando-xml",children:[]}],p={toc:c};function m(e){var n=e.components,a=(0,i.Z)(e,o);return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"serializaci\xf3n-xml"},"Serializaci\xf3n XML"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Extensible Markup Language (XML)")," es un lenguaje de marcado similar a HTML especificado por la ",(0,t.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/xml/"},"World Wide Web Consortium (W3C)"),", un consorcio internacional que genera recomendaciones y est\xe1ndares que aseguran el crecimiento de la ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/es/docs/Glossary/World_Wide_Web"},"World Wide Web")," a largo plazo. "),(0,t.kt)("p",null,"La serializaci\xf3n XML transforma los atributos y propiedades de ",(0,t.kt)("strong",{parentName:"p"},"lectura-escritura p\xfablicas")," de un objeto en memoria en una secuencia de datos que puede ser procesada por cualquier aplicaci\xf3n independientemente de la plataforma en la que fue construida o sobre la que se ejecute. "),(0,t.kt)("h2",{id:"sintaxis-de-xml"},"Sintaxis de XML"),(0,t.kt)("p",null,"Como todo lenguaje, XML tiene reglas de sintaxis que permiten su posterior interpretaci\xf3n. Se compone de etiquetas de apertura y cierre, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<OrderForm>\n    <OrderDate>12/12/01</OrderDate>\n</OrderForm>\n")),(0,t.kt)("p",null,"En el ejemplo anterior tenemos la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<OrderForm></OrderForm>")," que representa a un objeto de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"OrderForm")," y tiene anidada la propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"OrderDate")," representada por la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<OrderDate></OrderDate>")," que contiene el valor de dicha propiedad, ",(0,t.kt)("inlineCode",{parentName:"p"},"12/12/01"),"."),(0,t.kt)("p",null,"Corresponder\xeda a la serializaci\xf3n de un objeto de la siguiente clase:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public class OrderForm\n{\n    public DateTime OrderDate;\n}\n")),(0,t.kt)("h2",{id:"serializando-a-xml"},"Serializando a XML"),(0,t.kt)("p",null,"Para serializar un objeto debe contar con atributos o propiedades de lectura-escritura p\xfablicos. "),(0,t.kt)("p",null,"Luego debemos utilizar un objeto de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"XmlSerializer")," del espacio de nombres ",(0,t.kt)("inlineCode",{parentName:"p"},"System.Xml.Serialization")," y llamar a su m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Serialize"),". Una de sus sobrecargas recibe el objeto a serializar y una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"StreamWriter")," que se utiliza para guardar el objeto serializado en un archivo."),(0,t.kt)("p",null,"Vemos un ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Alumno\n{\n    private string nombreCompleto;\n    private DateTime fechaNacimiento;\n    private List<Materia> materias;\n    private float promedio;\n\n    public string NombreCompleto\n    {\n        get\n        {\n            return nombreCompleto;\n        }\n        set\n        {\n            nombreCompleto = value;\n        }\n    }\n\n    public DateTime FechaNacimiento\n    {\n        get\n        {\n            return fechaNacimiento;\n        }\n        set\n        {\n            fechaNacimiento = value;\n        }\n    }\n\n    public float Promedio\n    {\n        get\n        {\n            return promedio;\n        }\n        set\n        {\n            promedio = value;\n        }\n    }\n\n    public Alumno()\n    {\n        materias = new List<Materia>();\n    }\n\n    public Alumno(string nombreCompleto, DateTime fechaNacimiento, float promedio) :this()\n    {\n        this.nombreCompleto = nombreCompleto;\n        this.fechaNacimiento = fechaNacimiento;\n        this.promedio = promedio;\n    }\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    Alumno alumno = new Alumno("Juan Perez", new DateTime(2000, 12, 12), 7.8f);\n\n    using (StreamWriter streamWriter = new StreamWriter("alumno.xml"))\n    { \n        XmlSerializer xmlSerializer = new XmlSerializer(typeof(Alumno));\n\n        xmlSerializer.Serialize(streamWriter, alumno);\n    }\n}\n')),(0,t.kt)("p",null,"En la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"bin/debug")," del proyecto encontraremos el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"alumno.xml")," con el siguiente contenido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<Alumno xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n  <NombreCompleto>Juan Perez</NombreCompleto>\n  <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento>\n  <Promedio>7.8</Promedio>\n</Alumno>\n')),(0,t.kt)("p",null,"Como vemos, el objeto de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"Alumno")," se encuentra representado por la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<Alumno></Alumno>")," que contiene cada una de sus propiedades, tambi\xe9n en forma de etiquetas, y los valores de las mismas. "),(0,t.kt)("h2",{id:"deserializando-xml"},"Deserializando XML"),(0,t.kt)("p",null,"Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato JSON se debe utilizar el m\xe9todo est\xe1tico ",(0,t.kt)("inlineCode",{parentName:"p"},"Deserialize")," de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string jsonString = @"\n                                {\n                                    ""NombreCompleto"": ""Juan Perez"",\n                                    ""FechaNacimiento"": ""1990-03-25T00:00:00"",\n                                    ""Salario"": 50000\n                                }";\n\n            // Obtengo un objeto de tipo Empleado a partir de un string +\n            // que contiene un empleado serializado en formato json. \n            Empleado empleado = JsonSerializer.Deserialize<Empleado>(jsonString);\n\n            Console.WriteLine($"Nombre: {empleado.NombreCompleto}");\n            Console.WriteLine($"Fecha de nacimiento: {empleado.FechaNacimiento}");\n            Console.WriteLine($"Salario: {empleado.Salario}");\n        }\n    }\n}\n')),(0,t.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Nombre: Juan Perez\nFecha de nacimiento: 25/3/1990 00:00:00\nSalario: 50000\n")),(0,t.kt)("p",null,"Se trata exactamente del proceso opuesto. Al m\xe9todo gen\xe9rico ",(0,t.kt)("inlineCode",{parentName:"p"},"Deserialize")," debemos indicarle el tipo al que queremos deserializar y pasarle como argumento un ",(0,t.kt)("inlineCode",{parentName:"p"},"string")," que contenga el o los objetos en formato JSON.  "),(0,t.kt)("p",null,"Si el texto que intentamos deserializar no se encuentra bien formateado, se lanzar\xe1 una excepci\xf3n de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"JsonException"),"."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[8431],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),m=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=i,b=p["".concat(s,".").concat(d)]||p[d]||c[d]||t;return a?r.createElement(b,o(o({ref:n},u),{},{components:a})):r.createElement(b,o({ref:n},u))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<t;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6496:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=a(7462),i=a(3366),t=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Serializaci\xf3n XML",slug:"/clases/serializacion/apuntes/serializacion-xml",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,m={unversionedId:"clases/serializacion/Apuntes/serializacion-xml",id:"clases/serializacion/Apuntes/serializacion-xml",title:"serializacion-xml",description:"Serializaci\xf3n XML",source:"@site/docs/clases/15-serializacion/Apuntes/01-serializacion-xml.md",sourceDirName:"clases/15-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/serializacion-xml",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-xml",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1635146777,formattedLastUpdatedAt:"10/25/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Serializaci\xf3n XML",slug:"/clases/serializacion/apuntes/serializacion-xml",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Serializaci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion"},next:{title:"Serializaci\xf3n JSON",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion-json"}},u={},c=[{value:"Serializaci\xf3n XML",id:"serializaci\xf3n-xml",level:2},{value:"Sintaxis de XML",id:"sintaxis-de-xml",level:2},{value:"Serializando a XML",id:"serializando-a-xml",level:2},{value:"Deserializando XML",id:"deserializando-xml",level:2}],p={toc:c};function d(e){var n=e.components,a=(0,i.Z)(e,o);return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"serializaci\xf3n-xml"},"Serializaci\xf3n XML"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Extensible Markup Language (XML)")," es un lenguaje de marcado similar a HTML especificado por el ",(0,t.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/xml/"},"World Wide Web Consortium (W3C)"),"."),(0,t.kt)("p",null,"W3C es un consorcio internacional que genera recomendaciones y est\xe1ndares que aseguran el crecimiento de la ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/es/docs/Glossary/World_Wide_Web"},"World Wide Web (www)")," a largo plazo. "),(0,t.kt)("p",null,"La serializaci\xf3n XML transforma los atributos y propiedades de ",(0,t.kt)("strong",{parentName:"p"},"lectura-escritura p\xfablicas")," de un objeto en memoria en una secuencia de datos que puede ser procesada por cualquier aplicaci\xf3n independientemente de la plataforma en la que fue construida o sobre la que se ejecute. "),(0,t.kt)("h2",{id:"sintaxis-de-xml"},"Sintaxis de XML"),(0,t.kt)("p",null,"Como todo lenguaje, XML tiene reglas de sintaxis que permiten su posterior interpretaci\xf3n. Se compone de etiquetas de apertura y cierre, por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<OrderForm>\n    <OrderDate>12/12/01</OrderDate>\n</OrderForm>\n")),(0,t.kt)("p",null,"En el ejemplo anterior tenemos la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<OrderForm></OrderForm>")," que representa a un objeto de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"OrderForm")," y tiene anidada la propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"OrderDate")," representada por la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<OrderDate></OrderDate>")," que contiene el valor de dicha propiedad, ",(0,t.kt)("inlineCode",{parentName:"p"},"12/12/01"),"."),(0,t.kt)("p",null,"Corresponder\xeda a la serializaci\xf3n de un objeto de la siguiente clase:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public class OrderForm\n{\n    public DateTime OrderDate;\n}\n")),(0,t.kt)("p",null,"Otro ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'Alumno nuevoAlumno = new Alumno("Juan Perez", \nnew DateTime(2000, 12, 12), 7.8f);\nnuevoAlumno.Materias.Add("Programaci\xf3n II");\nnuevoAlumno.Materias.Add("Laboratorio de computaci\xf3n II");\n\nAlumno nuevoAlumno2 = new Alumno("Leo Lopez", \nnew DateTime(2000, 12, 12), 7.8f);\nnuevoAlumno2.Materias.Add("Arquitectura y sistemas operativos");\nnuevoAlumno2.Materias.Add("Ingl\xe9s II");\nnuevoAlumno2.Materias.Add("Metodolog\xeda de la investigaci\xf3n");\n\nList<Alumno> nuevosAlumnos = new List<Alumno>()\n{\n    nuevoAlumno,\n    nuevoAlumno2\n};\n')),(0,t.kt)("p",null,"Serializar ",(0,t.kt)("inlineCode",{parentName:"p"},"nuevosAlumnos")," resultar\xeda en el siguiente XML:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Array de objetos Alumno --\x3e\n<ArrayOfAlumno \n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n  xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n>\n  <Alumno> \x3c!-- Objeto Alumno --\x3e\n    <NombreCompleto>Juan Perez</NombreCompleto> \x3c!-- Propiedad texto --\x3e\n    <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento> \x3c!-- Propiedad fecha --\x3e\n    <Promedio>7.8</Promedio> \x3c!-- Propiedad num\xe9rica --\x3e\n    <Materias> \x3c!-- Array anidado --\x3e\n      <string>Programaci\xf3n II</string>\n      <string>Laboratorio de computaci\xf3n II</string>\n    </Materias>\n  </Alumno> \x3c!-- Fin objeto --\x3e\n  <Alumno> \x3c!-- Otro Objeto Alumno --\x3e\n    <NombreCompleto>Leo Lopez</NombreCompleto>\n    <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento>\n    <Promedio>7.8</Promedio>\n    <Materias>\n      <string>Arquitectura y sistemas operativos</string>\n      <string>Ingl\xe9s II</string>\n      <string>Metodolog\xeda de la investigaci\xf3n</string>\n    </Materias>\n  </Alumno> \x3c!-- Fin objeto --\x3e\n</ArrayOfAlumno> \x3c!-- Fin array --\x3e\n')),(0,t.kt)("h2",{id:"serializando-a-xml"},"Serializando a XML"),(0,t.kt)("p",null,"Para serializar un objeto este debe contar con atributos o propiedades de lectura-escritura p\xfablicos y un constructor p\xfablico sin par\xe1metros. "),(0,t.kt)("p",null,"Luego debemos utilizar un objeto de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"XmlSerializer")," del espacio de nombres ",(0,t.kt)("inlineCode",{parentName:"p"},"System.Xml.Serialization")," y llamar a su m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Serialize"),". Una de sus sobrecargas recibe el objeto a serializar y una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"StreamWriter")," que se utiliza para guardar el objeto serializado en un archivo."),(0,t.kt)("p",null,"Vemos un ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Alumno\n{\n    private string nombreCompleto;\n    private DateTime fechaNacimiento;\n    private List<Materia> materias;\n    private float promedio;\n\n    public string NombreCompleto\n    {\n        get\n        {\n            return nombreCompleto;\n        }\n        set\n        {\n            nombreCompleto = value;\n        }\n    }\n\n    public DateTime FechaNacimiento\n    {\n        get\n        {\n            return fechaNacimiento;\n        }\n        set\n        {\n            fechaNacimiento = value;\n        }\n    }\n\n    public float Promedio\n    {\n        get\n        {\n            return promedio;\n        }\n        set\n        {\n            promedio = value;\n        }\n    }\n\n    public Alumno()\n    {\n        materias = new List<Materia>();\n    }\n\n    public Alumno(string nombreCompleto, DateTime fechaNacimiento, float promedio) :this()\n    {\n        this.nombreCompleto = nombreCompleto;\n        this.fechaNacimiento = fechaNacimiento;\n        this.promedio = promedio;\n    }\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    Alumno alumno = new Alumno("Juan Perez", new DateTime(2000, 12, 12), 7.8f);\n\n    using (StreamWriter streamWriter = new StreamWriter("alumno.xml"))\n    { \n        XmlSerializer xmlSerializer = new XmlSerializer(typeof(Alumno));\n\n        xmlSerializer.Serialize(streamWriter, alumno);\n    }\n}\n')),(0,t.kt)("p",null,"En la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"bin/debug")," del proyecto encontraremos el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"alumno.xml")," con el siguiente contenido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<Alumno xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n  <NombreCompleto>Juan Perez</NombreCompleto>\n  <FechaNacimiento>2000-12-12T00:00:00</FechaNacimiento>\n  <Promedio>7.8</Promedio>\n</Alumno>\n')),(0,t.kt)("p",null,"Como vemos, el objeto de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"Alumno")," se encuentra representado por la etiqueta ",(0,t.kt)("inlineCode",{parentName:"p"},"<Alumno></Alumno>")," que contiene cada una de sus propiedades, tambi\xe9n en forma de etiquetas, y los valores de las mismas. "),(0,t.kt)("h2",{id:"deserializando-xml"},"Deserializando XML"),(0,t.kt)("p",null,"Deserializar significa interpretar un texto que contiene objetos serializados y volver a convertirlos en objetos en memoria. Para deserializar desde formato XML se debe utilizar el m\xe9todo est\xe1tico ",(0,t.kt)("inlineCode",{parentName:"p"},"Deserialize")," de una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"XmlSerializer"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"Deserialize")," recibe una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"StreamReader")," que se utiliza para leer desde el archivo donde se encuentra el objeto serializado."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    using (StreamReader streamReader = new StreamReader("alumno.xml"))\n    {\n        XmlSerializer xmlSerializer = new XmlSerializer(typeof(Alumno));\n\n        Alumno alumno = xmlSerializer.Deserialize(streamReader) as Alumno;\n\n        Console.WriteLine($"Nombre: {alumno.NombreCompleto}");\n        Console.WriteLine($"Fecha de nacimiento: {alumno.FechaNacimiento}");\n        Console.WriteLine($"Promedio: {alumno.Promedio}");\n    }\n}\n')),(0,t.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Nombre: Juan Perez\nFecha de nacimiento: 12/12/2000 00:00:00\nPromedio: 7,8\n")),(0,t.kt)("p",null,"Se trata exactamente del proceso opuesto. Debemos castear el resultado del m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Deserialize")," al tipo de objeto al que estamos deserializando."))}d.isMDXComponent=!0}}]);
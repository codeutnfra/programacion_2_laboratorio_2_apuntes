"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7194],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),l=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(v,i(i({ref:n},u),{},{components:r})):a.createElement(v,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6432:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=r(7462),t=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Trabajando con archivos",slug:"/clases/serializacion/apuntes/archivos",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},c=void 0,l={unversionedId:"clases/serializacion/Apuntes/archivos",id:"clases/serializacion/Apuntes/archivos",isDocsHomePage:!1,title:"Apuntes - Archivos y serializaci\xf3n",description:"Archivos",source:"@site/docs/clases/14-serializacion/Apuntes/01-archivos.md",sourceDirName:"clases/14-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/archivos",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1631930057,formattedLastUpdatedAt:"9/17/2021",sidebarPosition:1,frontMatter:{title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Trabajando con archivos",slug:"/clases/serializacion/apuntes/archivos",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Ambientes y sistemas de archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/ambientes-sistemas-archivos"},next:{title:"Serializaci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion"}},u=[{value:"Archivos",id:"archivos",children:[]},{value:"Streams",id:"streams",children:[]},{value:"Trabajando con rutas",id:"trabajando-con-rutas",children:[]},{value:"Trabajando con recursos no-manejados",id:"trabajando-con-recursos-no-manejados",children:[]}],d={toc:u};function p(e){var n=e.components,r=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"archivos"},"Archivos"),(0,o.kt)("p",null,"Las aplicaciones frecuentemente necesitan recibir o volcar informaci\xf3n en archivos y directorios. Los espacios de nombre ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"System.IO")," contienen clases que nos ayudar\xe1n con esta tarea. Existen muchas formas de leer y escribir en archivos, cada una con sus ventajas y desventajas seg\xfan el escenario, nosotros veremos s\xf3lo algunas."),(0,o.kt)("p",null,"La clase ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," provee m\xe9todos est\xe1ticos para trabajar con archivos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Exists"),": recibe como argumento la ruta a un archivo y verifica si un archivo existe. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CreateText"),": recibe como argumento la ruta donde se desea crear o trabajar con un archivo existente. Retorna un objeto de tipo ",(0,o.kt)("inlineCode",{parentName:"li"},"StreamWriter"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OpenText"),": recibe como argumento la ruta donde se encuentra un archivo que queremos leer. Retorna un objeto de tipo ",(0,o.kt)("inlineCode",{parentName:"li"},"StreamReader"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delete"),": recibe como argumento la ruta donde se encuentra un archivo que queremos eliminar.")),(0,o.kt)("p",null,"La objetos de tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamWriter")," contienen los m\xe9todos de instancia ",(0,o.kt)("inlineCode",{parentName:"p"},"Write")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteLine")," para escribir en un archivo. Mientras que los de tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamReader")," cuentan con los m\xe9todos de instancia ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadToEnd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadLine")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"Read"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.IO;\n\nnamespace Archivos_Vista\n{\n    class Program\n    {\n        static void Main(string[] args)\n        { \n            string nombreArchivo = "AprendiendoArchivos.txt";\n            Console.WriteLine("\xbfExiste?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);\n\n            Console.WriteLine($"Creando archivo...");\n            StreamWriter streamWriter = File.CreateText(nombreArchivo);\n            streamWriter.WriteLine("Aprendo archivos en la UTN");\n            streamWriter.Close();\n\n            Console.WriteLine("\xbfExiste?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);\n\n            Console.WriteLine("Leyendo archivo...");\n            StreamReader streamReader = File.OpenText(nombreArchivo);\n            Console.WriteLine(streamReader.ReadToEnd());\n            streamReader.Close();\n\n            Console.WriteLine("Borrando archivo...");\n            File.Delete(nombreArchivo);\n\n            Console.WriteLine("\xbfExiste?: {0} {1}", File.Exists(nombreArchivo), Environment.NewLine);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\xbfExiste?: False \n\nCreando archivo...\n\xbfExiste?: True \n\nLeyendo archivo...\nAprendo archivos en la UTN\n\nBorrando archivo...\n\xbfExiste?: False \n")),(0,o.kt)("h2",{id:"streams"},"Streams"),(0,o.kt)("p",null,"Un stream es una secuencia de bytes sobre la que se puede leer o escribir. Los archivos puede ser procesados como un array, con un acceso aleatorio basado en la posici\xf3n de un determinado byte en el contenido. Sin embargo, puede ser \xfatil procesar los archivos como un stream donde los bytes pueden ser accedidos en orden secuencial. "),(0,o.kt)("h2",{id:"trabajando-con-rutas"},"Trabajando con rutas"),(0,o.kt)("p",null,"La clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," sirve para trabajar con cadenas de texto que representan o contienen rutas a archivos o directorios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Combine"),": "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Join"),": "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TryJoin"),": ")),(0,o.kt)("h2",{id:"trabajando-con-recursos-no-manejados"},"Trabajando con recursos no-manejados"),(0,o.kt)("p",null,"Cuando abrimos un archivo para leer o escribir, estamos usando recursos fue de .NET. A estos se los conoce como ",(0,o.kt)("strong",{parentName:"p"},"recursos no-manejados (",(0,o.kt)("em",{parentName:"strong"},"unmanaged resources"),")")," y deben ser liberados cuando terminemos de trabajar con ellos. "),(0,o.kt)("p",null,"Una forma de liberar recursos tanto cuando ocurren excepciones como cuando no, es trabajar dentro de un ",(0,o.kt)("strong",{parentName:"p"},"bloque try-finally"),"."))}p.isMDXComponent=!0}}]);
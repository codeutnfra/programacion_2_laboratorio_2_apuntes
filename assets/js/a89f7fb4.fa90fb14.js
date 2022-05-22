"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7530],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?t.createElement(k,o(o({ref:a},p),{},{components:n})):t.createElement(k,o({ref:a},p))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48426:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var t=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"Apuntes - Archivos",sidebar_label:"Sistemas de archivos",slug:"/clases/archivos/apuntes/sistemas-de-archivos",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},l=void 0,d={unversionedId:"clases/archivos/Apuntes/sistemas-de-archivos",id:"clases/archivos/Apuntes/sistemas-de-archivos",title:"Apuntes - Archivos",description:"Sistemas de archivos",source:"@site/docs/clases/14-archivos/Apuntes/00-sistemas-de-archivos.md",sourceDirName:"clases/14-archivos/Apuntes",slug:"/clases/archivos/apuntes/sistemas-de-archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/sistemas-de-archivos",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1634529707,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Archivos",sidebar_label:"Sistemas de archivos",slug:"/clases/archivos/apuntes/sistemas-de-archivos",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/archivos"},next:{title:"Rutas y directorios",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/rutas-y-directorios"}},p={},m=[{value:"Sistemas de archivos",id:"sistemas-de-archivos",level:2},{value:"Unidades, particiones y vol\xfamenes",id:"unidades-particiones-y-vol\xfamenes",level:3},{value:"Trabajando con sistemas de archivos en distintas plataformas",id:"trabajando-con-sistemas-de-archivos-en-distintas-plataformas",level:2},{value:"Obtener informaci\xf3n del sistema operativo",id:"obtener-informaci\xf3n-del-sistema-operativo",level:3},{value:"Trabajando con unidades de almacenamiento",id:"trabajando-con-unidades-de-almacenamiento",level:2}],c={toc:m};function u(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sistemas-de-archivos"},"Sistemas de archivos"),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"sistema de archivos (",(0,r.kt)("em",{parentName:"strong"},"file system"),")")," es un elemento del sistema operativo que organiza y controla c\xf3mo se almacenan y recuperan los datos guardados en un medio de almacenamiento. "),(0,r.kt)("p",null,"Sus principales funciones son la asignaci\xf3n de espacio a los archivos, la administraci\xf3n del espacio libre y del acceso a los datos resguardados. Estructuran la informaci\xf3n guardada en un dispositivo de almacenamiento de datos, que luego ser\xe1 representada ya sea textual o gr\xe1ficamente utilizando un gestor de archivos."),(0,r.kt)("p",null,"La mayor\xeda de los sistemas operativos manejan su propio sistema de archivos."),(0,r.kt)("p",null,"Los sistemas de archivos proveen m\xe9todos para crear, mover, renombrar y eliminar tanto archivos como directorios. Tambi\xe9n asignan propiedades como s\xf3lo lectura y permisos de acceso. "),(0,r.kt)("h3",{id:"unidades-particiones-y-vol\xfamenes"},"Unidades, particiones y vol\xfamenes"),(0,r.kt)("p",null,"Una ",(0,r.kt)("strong",{parentName:"p"},"unidad (",(0,r.kt)("em",{parentName:"strong"},"drive"),")")," (tambi\xe9n llamada disco) es un dispositivo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"f\xedsico"))," que se utiliza para almacenar datos."),(0,r.kt)("p",null,"Una ",(0,r.kt)("strong",{parentName:"p"},"partici\xf3n")," es una divisi\xf3n ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"l\xf3gica"))," de un medio de almacenamiento ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"f\xedsico"))," a la que le asigna una porci\xf3n del espacio disponible en el dispositivo. "),(0,r.kt)("p",null,"Se llama ",(0,r.kt)("strong",{parentName:"p"},"volumen")," al \xe1rea de almacenamiento efectivode un medio de almacenamiento o de una de sus particiones (es decir, f\xedsica o l\xf3gica), accesible mediante un nombre \xfanico y un formato consistente en un sistema de archivos (como FAT o NTFS). B\xe1sicamente se trata de una unidad de datos identificable y organizada bajo un formato espec\xedfico. "),(0,r.kt)("p",null,"Las particiones no pueden contener un sistema de archivos directamente. En su lugar, uno o m\xe1s vol\xfamenes deben ser asociados a la misma. "),(0,r.kt)("p",null,"Los vol\xfamenes existen a un nivel l\xf3gico del sistema operativo, mientras que las particiones son una fragmentaci\xf3n l\xf3gica del hardware. A veces se corresponden uno a uno, pero no siempre. Por ejemplo, podemos un sistema operativo distinto en cada partici\xf3n. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unidad"),(0,r.kt)("th",{parentName:"tr",align:null},"Partici\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Sistema de archivos"),(0,r.kt)("th",{parentName:"tr",align:null},"Nombre del volumen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disco Duro"),(0,r.kt)("td",{parentName:"tr",align:null},"Partici\xf3n 1"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"C:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disco Duro"),(0,r.kt)("td",{parentName:"tr",align:null},"Partici\xf3n 2"),(0,r.kt)("td",{parentName:"tr",align:null},"EXT3"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"Partici\xf3n 1"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"E:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB"),(0,r.kt)("td",{parentName:"tr",align:null},"Partici\xf3n 1"),(0,r.kt)("td",{parentName:"tr",align:null},"FAT32"),(0,r.kt)("td",{parentName:"tr",align:null},"F:")))),(0,r.kt)("p",null,"En el ejemplo anterior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hay dos unidades f\xedsicas, un disco duro y un ssd."),(0,r.kt)("li",{parentName:"ul"},"El disco duro se separa en dos particiones, cada una con un sistema operativo distinto."),(0,r.kt)("li",{parentName:"ul"},'"C:", "/", "E:" y "F:" son vol\xfamenes. Cada uno con su sistema de archivos.')),(0,r.kt)("h2",{id:"trabajando-con-sistemas-de-archivos-en-distintas-plataformas"},"Trabajando con sistemas de archivos en distintas plataformas"),(0,r.kt)("p",null,"Como sabemos, .NET es una plataforma de desarrollo multi-plataforma donde podemos construir soluciones para Windows, Linux o MacOS. Cada sistema operativo tiene sus diferencias en c\xf3mo se almacenan y recuperan los datos en su sistema de archivos. "),(0,r.kt)("p",null,"Por fortuna, la ",(0,r.kt)("em",{parentName:"p"},"base class library")," en los namespaces ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"System.IO")," cuenta con herramientas que nos facilitar\xe1n el manejo de las particularidades de cada ambiente."),(0,r.kt)("h3",{id:"obtener-informaci\xf3n-del-sistema-operativo"},"Obtener informaci\xf3n del sistema operativo"),(0,r.kt)("p",null,"\xbfC\xf3mo podemos saber en tiempo de ejecuci\xf3n sobre qu\xe9 sistema operativo est\xe1 corriendo nuestra aplicaci\xf3n? Para esto existen una serie de m\xe9todos est\xe1ticos de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatingSystem"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsWindows"),": Retorna verdadero si el sistema operativo es Windows. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsLinux"),": Retorna verdadero si el sistema operativo es Linux. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsMacOS"),": Retorna verdadero si el sistema operativo es MacOS. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsIOS"),": Retorna verdadero si el sistema operativo es IOS. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsAndroid"),": Retorna verdadero si el sistema operativo es Android. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace Vista_Archivos\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {          \n            Console.WriteLine("\xbfEs Windows?: {0}", OperatingSystem.IsWindows());\n            Console.WriteLine("\xbfEs Linux?: {0}", OperatingSystem.IsLinux());\n            Console.WriteLine("\xbfEs MacOS?: {0}", OperatingSystem.IsMacOS());\n            Console.WriteLine("\xbfEs IOS?: {0}", OperatingSystem.IsIOS());\n            Console.WriteLine("\xbfEs Android?: {0}", OperatingSystem.IsAndroid());\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida en Windows es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\xbfEs Windows?: True\n\xbfEs Linux?: False\n\xbfEs MacOS?: False\n\xbfEs IOS?: False\n\xbfEs Android?: False\n")),(0,r.kt)("p",null,"La salida en Linux es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\xbfEs Windows?: False\n\xbfEs Linux?: True\n\xbfEs MacOS?: False\n\xbfEs IOS?: False\n\xbfEs Android?: False\n")),(0,r.kt)("p",null,"La propiedad est\xe1tica ",(0,r.kt)("inlineCode",{parentName:"p"},"OSVersion")," de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," nos retorna un objeto de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatingSystem")," con las siguientes propiedades:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Platform"),": Retorna un valor del enumerado ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformID")," indicando sobre qu\xe9 sistema operativo se est\xe1 ejecutando la aplicaci\xf3n. Los valores posibles son: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Win32NT"),": El sistema operativo es Windows NT o superior. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unix"),": El sistema operativo es Unix (MacOSX, Linux). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Other"),": Es alg\xfan otro sistema operativo."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Version"),": Retorna un objeto de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," que contiene informaci\xf3n sobre la versi\xf3n del sistema operativo sobre la que se est\xe1 ejecutando la aplicaci\xf3n."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace Vista_Archivos\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {          \n            Console.WriteLine("OSVersion: {0}", Environment.OSVersion);\n            Console.WriteLine("OSVersion.Platform: {0}", Environment.OSVersion.Platform);\n            Console.WriteLine("OSVersion.Version: {0}", Environment.OSVersion.Version);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida en Windows es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OSVersion: Microsoft Windows NT 10.0.22000.0\nOSVersion.Platform: Win32NT\nOSVersion.Version: 10.0.22000.0\n")),(0,r.kt)("p",null,"La salida en Linux es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OSVersion: Unix 5.10.43.3\nOSVersion.Platform: Unix\nOSVersion.Version: 5.10.43.3\n")),(0,r.kt)("p",null,"Existen algunos m\xe9todos est\xe1ticos de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," que nos aportan informaci\xf3n adicional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Is64BitOperatingSystem"),": Indica si el sistema operativo sobre el que se ejecuta la aplicaci\xf3n es de 64 bits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProcessorCount"),": Retorna un entero con el n\xfamero de procesadores ",(0,r.kt)("strong",{parentName:"li"},"l\xf3gicos")," de la m\xe1quina sobre la que se ejecuta la aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UserName"),": Para obtener el nombre del usuario del sistema operativo que est\xe1 ejecutando la aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewLine"),": Retorna el caracter de salto de l\xednea correspondiente al sistema operativo sobre el que se ejecuta la aplicaci\xf3n.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace Vista_Archivos\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Cantidad de procesadores l\xf3gicos: {0}", Environment.ProcessorCount);\n            Console.WriteLine("\xbfTiene arquitectura de 64 bits?: {0}", Environment.Is64BitOperatingSystem);\n            Console.WriteLine("Usuario: {0}", Environment.UserName);\n            Console.WriteLine("Primera l\xednea {0} Segunda L\xednea", Environment.NewLine);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida en Windows es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Cantidad de procesadores l\xf3gicos: 12\n\xbfTiene arquitectura de 64 bits?: True\nUsuario: mauri\nPrimera l\xednea\n Segunda Linea\n")),(0,r.kt)("p",null,"La salida en Linux es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Cantidad de procesadores l\xf3gicos: 12\n\xbfTiene arquitectura de 64 bits?: True\nUsuario: mcerizza\nPrimera l\xednea \n Segunda L\xednea\n")),(0,r.kt)("h2",{id:"trabajando-con-unidades-de-almacenamiento"},"Trabajando con unidades de almacenamiento"),(0,r.kt)("p",null,"La clase ",(0,r.kt)("inlineCode",{parentName:"p"},"DriveInfo")," nos proporcionar\xe1 informaci\xf3n sobre las unidades de almacenamiento conectadas a la computadora. "),(0,r.kt)("p",null,"Con el m\xe9todo est\xe1tico ",(0,r.kt)("inlineCode",{parentName:"p"},"GetDrives")," podemos obtener un array de objetos de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"DriveInfo")," que representan a cada una de las unidades de almacenamiento detectadas por el sistema operativo. Cada uno de estos objetos nos permitir\xe1 consultar las siguientes propiedades:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": Nombre de la unidad."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DriveType"),": Nombre del tipo de unidad (fija, removible, cd rom, etc)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DriveFormat"),": Formato de la unidad."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TotalSize"),": Tama\xf1o total en bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AvailableFreeSpace"),": Espacio libre en bytes.")),(0,r.kt)("p",null,"Es importante que antes de usar algunas propiedades nos aseguremos que la unidad est\xe9 lista con la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"IsReady"),". Esto es particularmente relevante para unidades removibles, ya que en caso de no estar lista se lanzar\xe1 una excepci\xf3n en tiempo de ejecuci\xf3n. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.IO;\nusing System;\n\nnamespace Vista_Archivos\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("{0, -10} | {1, -10} | {2, -7} | {3, -26} | {4, -26} |", \n            "Nombre", "Tipo", "Formato", "Tama\xf1o", "Espacio libre");\n            \n            foreach (DriveInfo unidad in DriveInfo.GetDrives())\n            {\n                if (unidad.IsReady)\n                {\n                    Console.WriteLine("{0, -10} | {1, -10} | {2, -7} | {3, 20:N0} bytes | {4, 20:N0} bytes |", \n                    unidad.Name, unidad.DriveType, unidad.DriveFormat, unidad.TotalSize, \n                    unidad.AvailableFreeSpace);\n                }\n                else\n                {\n                    Console.WriteLine("{0, -10} | {1, -10}", unidad.Name, unidad.DriveType);\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Nombre     | Tipo       | Formato | Tama\xf1o                     | Espacio libre              |\nC:\\        | Fixed      | NTFS    |      510.824.280.064 bytes |      272.604.942.336 bytes |\nD:\\        | Removable  | FAT     |          126.054.400 bytes |           33.855.488 bytes |\nG:\\        | Fixed      | FAT32   |       16.106.127.360 bytes |          863.588.352 bytes |\nH:\\        | Fixed      | FAT32   |      510.824.280.064 bytes |      258.974.691.328 bytes |\nJ:\\        | Fixed      | NTFS    |    1.024.191.361.024 bytes |      520.692.162.560 bytes |\nK:\\        | Fixed      | NTFS    |    1.000.199.942.144 bytes |      600.995.758.080 bytes |\n")))}u.isMDXComponent=!0}}]);
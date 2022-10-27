"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[9327],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21457:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],l={title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Rutas y directorios",slug:"/clases/archivos/apuntes/rutas-y-directorios",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,d={unversionedId:"clases/archivos/Apuntes/rutas-y-directorios",id:"clases/archivos/Apuntes/rutas-y-directorios",title:"Apuntes - Archivos y serializaci\xf3n",description:"Rutas",source:"@site/docs/clases/14-archivos/Apuntes/01-rutas-y-directorios.md",sourceDirName:"clases/14-archivos/Apuntes",slug:"/clases/archivos/apuntes/rutas-y-directorios",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/rutas-y-directorios",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1634696251,formattedLastUpdatedAt:"10/19/2021",sidebarPosition:1,frontMatter:{title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Rutas y directorios",slug:"/clases/archivos/apuntes/rutas-y-directorios",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Sistemas de archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/sistemas-de-archivos"},next:{title:"Trabajando con archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/archivos/apuntes/archivos"}},c={},p=[{value:"Rutas",id:"rutas",level:2},{value:"Rutas absolutas y relativas",id:"rutas-absolutas-y-relativas",level:3},{value:"M\xe9todo <code>Path.GetFullPath</code>",id:"m\xe9todo-pathgetfullpath",level:4},{value:"M\xe9todo <code>Path.GetRelativePath</code>",id:"m\xe9todo-pathgetrelativepath",level:4},{value:"Obtener separadores de rutas de forma agn\xf3stica al sistema operativo",id:"obtener-separadores-de-rutas-de-forma-agn\xf3stica-al-sistema-operativo",level:3},{value:"Propiedad <code>DirectorySeparatorChar</code>",id:"propiedad-directoryseparatorchar",level:4},{value:"Propiedad <code>Path.AltDirectorySeparatorChar</code>",id:"propiedad-pathaltdirectoryseparatorchar",level:4},{value:"Propiedad <code>Path.PathSeparator</code>",id:"propiedad-pathpathseparator",level:4},{value:"Propiedad <code>Path.VolumeSeparatorChar</code>",id:"propiedad-pathvolumeseparatorchar",level:4},{value:"M\xe9todo <code>Path.EndsInDirectorySeparator</code>",id:"m\xe9todo-pathendsindirectoryseparator",level:4},{value:"Combinar rutas",id:"combinar-rutas",level:3},{value:"M\xe9todo <code>Path.Combine</code>",id:"m\xe9todo-pathcombine",level:4},{value:"M\xe9todo <code>Path.Join</code>",id:"m\xe9todo-pathjoin",level:4},{value:"M\xe9todo <code>Path.TryJoin</code>",id:"m\xe9todo-pathtryjoin",level:4},{value:"Diferencias entre Path.Combine y Path.Join",id:"diferencias-entre-pathcombine-y-pathjoin",level:2},{value:"Trabajar con extensiones",id:"trabajar-con-extensiones",level:3},{value:"M\xe9todo <code>Path.ChangeExtension</code>",id:"m\xe9todo-pathchangeextension",level:4},{value:"M\xe9todo <code>Path.HasExtension</code>",id:"m\xe9todo-pathhasextension",level:4},{value:"Nombres",id:"nombres",level:3},{value:"M\xe9todo <code>GetFileNameWithoutExtension</code>",id:"m\xe9todo-getfilenamewithoutextension",level:4},{value:"M\xe9todo <code>GetFileName</code>",id:"m\xe9todo-getfilename",level:4},{value:"M\xe9todo <code>GetDirectoryName</code>",id:"m\xe9todo-getdirectoryname",level:4},{value:"Directorios",id:"directorios",level:2},{value:"Verificar si existe un directorio",id:"verificar-si-existe-un-directorio",level:3},{value:"Crear un directorio",id:"crear-un-directorio",level:3},{value:"Eliminar un directorio",id:"eliminar-un-directorio",level:3},{value:"Mover o renombrar un directorio",id:"mover-o-renombrar-un-directorio",level:3},{value:"Obtener el directorio actual",id:"obtener-el-directorio-actual",level:3},{value:"Obtener los directorios especiales del sistema operativo",id:"obtener-los-directorios-especiales-del-sistema-operativo",level:3}],m={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rutas"},"Rutas"),(0,n.kt)("p",null,"Una ",(0,n.kt)("strong",{parentName:"p"},"ruta (",(0,n.kt)("em",{parentName:"strong"},"path"),")")," es la forma de referenciar un archivo inform\xe1tico o directorio en un sistema de archivos de un sistema operativo determinado."),(0,n.kt)("p",null,"Una ruta se\xf1ala la localizaci\xf3n exacta de un archivo o directorio mediante una cadena de caracteres concreta. Esta puede ser de diversas formas dependiendo del sistema operativo y del sistema de archivos en cuesti\xf3n. En l\xedneas generales se compondr\xe1 de los nombres de los directorios que conforman el camino hasta el archivo o directorio a lo largo del \xe1rbol de directorios, y finalmente estar\xe1 el nombre del archivo o directorio que se quiere referenciar. "),(0,n.kt)("p",null,"La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path"),", perteneciente al espacio de nombres ",(0,n.kt)("inlineCode",{parentName:"p"},"System.IO"),", sirve para trabajar con cadenas de texto que representan o contienen rutas a archivos o directorios."),(0,n.kt)("h3",{id:"rutas-absolutas-y-relativas"},"Rutas absolutas y relativas"),(0,n.kt)("p",null,"Las ",(0,n.kt)("strong",{parentName:"p"},"rutas absolutas")," se\xf1alan la ubicaci\xf3n de un archivo o directorio desde el directorio ra\xedz del sistema de archivos. Un ejemplo de ruta absoluta en Windows ser\xeda ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\usuarios\\juan\\archivo.txt"),"."),(0,n.kt)("p",null,"Las ",(0,n.kt)("strong",{parentName:"p"},"rutas relativas")," se\xf1alan la ubicaci\xf3n de un archivo o directorio en relaci\xf3n a la posici\xf3n actual sobre el sistema de archivos. Un ejemplo de ruta relativa en Windows ser\xeda ",(0,n.kt)("inlineCode",{parentName:"p"},".\\archivo.txt"),", donde el s\xedmbolo ",(0,n.kt)("inlineCode",{parentName:"p"},".")," representa la posici\xf3n actual en la que estamos ubicados en el sistema de archivos. El s\xedmbolo ",(0,n.kt)("inlineCode",{parentName:"p"},"..")," nos mueve al directorio padre de la ubicaci\xf3n actual, por ejemplo ",(0,n.kt)("inlineCode",{parentName:"p"},"..\\..\\otra_carpeta\\archivo.txt")," se mover\xeda dos directorios hacia arriba en la jerarqu\xeda, luego entrar\xeda al directorio ",(0,n.kt)("inlineCode",{parentName:"p"},"otra_carpeta")," y por \xfaltimo acceder\xeda al archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"archivo.txt"),"."),(0,n.kt)("h4",{id:"m\xe9todo-pathgetfullpath"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.GetFullPath")),(0,n.kt)("h4",{id:"m\xe9todo-pathgetrelativepath"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.GetRelativePath")),(0,n.kt)("h3",{id:"obtener-separadores-de-rutas-de-forma-agn\xf3stica-al-sistema-operativo"},"Obtener separadores de rutas de forma agn\xf3stica al sistema operativo"),(0,n.kt)("h4",{id:"propiedad-directoryseparatorchar"},"Propiedad ",(0,n.kt)("inlineCode",{parentName:"h4"},"DirectorySeparatorChar")),(0,n.kt)("p",null,"La propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"p"},"DirectorySeparatorChar")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path")," retorna el caracter separador de directorios para el sistema operativo sobre el que se ejecuta la aplicaci\xf3n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{            \n    Console.WriteLine("Path.DirectorySeparatorChar: {0}", Path.DirectorySeparatorChar);\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.DirectorySeparatorChar: \\\n")),(0,n.kt)("p",null,"La salida en Linux es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.DirectorySeparatorChar: /\n")),(0,n.kt)("h4",{id:"propiedad-pathaltdirectoryseparatorchar"},"Propiedad ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.AltDirectorySeparatorChar")),(0,n.kt)("p",null,"La propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"p"},"AltDirectorySeparatorChar")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path")," retorna el caracter separador de directorios ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"alternativo"))," para el sistema operativo sobre el que se ejecuta la aplicaci\xf3n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{            \n    Console.WriteLine("Path.AltDirectorySeparatorChar: {0}", Path.AltDirectorySeparatorChar);\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.AltDirectorySeparatorChar: /\n")),(0,n.kt)("p",null,"La salida en Linux es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.AltDirectorySeparatorChar: /\n")),(0,n.kt)("p",null,"N\xf3tese que para Linux retorna el mismo caracter que ",(0,n.kt)("inlineCode",{parentName:"p"},"DirectorySeparatorChar"),", ya que Linux s\xf3lo soporta ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," como separador de directorios. Windows, al contrario, soporta tanto ",(0,n.kt)("inlineCode",{parentName:"p"},"\\")," (retornado por ",(0,n.kt)("inlineCode",{parentName:"p"},"DirectorySeparatorChar"),") como ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," (retornado por ",(0,n.kt)("inlineCode",{parentName:"p"},"AltDirectorySeparatorChar"),")."),(0,n.kt)("h4",{id:"propiedad-pathpathseparator"},"Propiedad ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.PathSeparator")),(0,n.kt)("p",null,"La propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"p"},"PathSeparator")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path")," retorna el caracter que se usa para separar una lista de rutas en el sistema operativo sobre el que se ejecuta la aplicaci\xf3n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{            \n    Console.WriteLine("Path.PathSeparator: {0}", Path.PathSeparator);\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.PathSeparator: ;\n")),(0,n.kt)("p",null,"La salida en Linux es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.PathSeparator: :\n")),(0,n.kt)("h4",{id:"propiedad-pathvolumeseparatorchar"},"Propiedad ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.VolumeSeparatorChar")),(0,n.kt)("p",null,"La propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"p"},"VolumeSeparatorChar")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path")," retorna el caracter que se usa para separar vol\xfamenes en el sistema operativo sobre el que se ejecuta la aplicaci\xf3n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{            \n    Console.WriteLine("Path.VolumeSeparatorChar: {0}", Path.VolumeSeparatorChar);\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.VolumeSeparatorChar: :\n")),(0,n.kt)("p",null,"La salida en Linux es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Path.VolumeSeparatorChar: /\n")),(0,n.kt)("h4",{id:"m\xe9todo-pathendsindirectoryseparator"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.EndsInDirectorySeparator")),(0,n.kt)("h3",{id:"combinar-rutas"},"Combinar rutas"),(0,n.kt)("h4",{id:"m\xe9todo-pathcombine"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.Combine")),(0,n.kt)("p",null,"El m\xe9todo est\xe1tico ",(0,n.kt)("inlineCode",{parentName:"p"},"Combine")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path")," recibe un array de strings conteniendo partes de una ruta a combinar. "),(0,n.kt)("p",null,"Si alguna de las partes es una ruta absoluta, la operaci\xf3n se reinicia y comienza a formar la ruta desde ese punto, descartando todas las partes previas."),(0,n.kt)("p",null,"Si alg\xfan elemento excepto el \xfaltimo no es una unidad y no termina"),(0,n.kt)("h4",{id:"m\xe9todo-pathjoin"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.Join")),(0,n.kt)("h4",{id:"m\xe9todo-pathtryjoin"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.TryJoin")),(0,n.kt)("h2",{id:"diferencias-entre-pathcombine-y-pathjoin"},"Diferencias entre Path.Combine y Path.Join"),(0,n.kt)("h3",{id:"trabajar-con-extensiones"},"Trabajar con extensiones"),(0,n.kt)("h4",{id:"m\xe9todo-pathchangeextension"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.ChangeExtension")),(0,n.kt)("h4",{id:"m\xe9todo-pathhasextension"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"Path.HasExtension")),(0,n.kt)("h3",{id:"nombres"},"Nombres"),(0,n.kt)("h4",{id:"m\xe9todo-getfilenamewithoutextension"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"GetFileNameWithoutExtension")),(0,n.kt)("h4",{id:"m\xe9todo-getfilename"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"GetFileName")),(0,n.kt)("h4",{id:"m\xe9todo-getdirectoryname"},"M\xe9todo ",(0,n.kt)("inlineCode",{parentName:"h4"},"GetDirectoryName")),(0,n.kt)("h2",{id:"directorios"},"Directorios"),(0,n.kt)("p",null,"Dentro de un sistema de archivos, un ",(0,n.kt)("strong",{parentName:"p"},"directorio")," es una colecci\xf3n de archivos y otros directorios (sub-directorios) creado con fines organizacionales. "),(0,n.kt)("h3",{id:"verificar-si-existe-un-directorio"},"Verificar si existe un directorio"),(0,n.kt)("p",null,"Directory.Exists"),(0,n.kt)("h3",{id:"crear-un-directorio"},"Crear un directorio"),(0,n.kt)("p",null,"Directory.CreateDirectory"),(0,n.kt)("h3",{id:"eliminar-un-directorio"},"Eliminar un directorio"),(0,n.kt)("p",null,"Directory.Delete"),(0,n.kt)("h3",{id:"mover-o-renombrar-un-directorio"},"Mover o renombrar un directorio"),(0,n.kt)("p",null,"Directory.Move"),(0,n.kt)("h3",{id:"obtener-el-directorio-actual"},"Obtener el directorio actual"),(0,n.kt)("p",null,"Existen dos formas de obtener el directorio actual:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El m\xe9todo est\xe1tico ",(0,n.kt)("inlineCode",{parentName:"li"},"GetCurrentDirectory()")," de la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Directory"),"."),(0,n.kt)("li",{parentName:"ul"},"La propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"li"},"CurrentDirectory")," de la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Environment"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.IO;\n\nnamespace Vista_Archivos\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {            \n            Console.WriteLine("GetCurrentDirectory(): {0}", Directory.GetCurrentDirectory());\n            Console.WriteLine("Environment.CurrentDirectory: {0}", Environment.CurrentDirectory);\n        }\n    }\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Directory.GetCurrentDirectory(): C:\\Users\\mauri\\Desktop\\Archivos\\Vista-Archivos\nEnvironment.CurrentDirectory: C:\\Users\\mauri\\Desktop\\Archivos\\Vista-Archivos\n")),(0,n.kt)("p",null,"La salida en Linux es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Directory.GetCurrentDirectory(): /home/mcerizza/Ejemplos/Archivos/Vista-Archivos\nEnvironment.CurrentDirectory: /home/mcerizza/Ejemplos/Archivos/Vista-Archivos\n")),(0,n.kt)("h3",{id:"obtener-los-directorios-especiales-del-sistema-operativo"},"Obtener los directorios especiales del sistema operativo"),(0,n.kt)("p",null,"Para obtener el directorio del sistema podemos usar la propiedad est\xe1tica ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemDirectory")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Environment"),"."),(0,n.kt)("p",null,"Para obtener el directorio de archivos temporales podemos usar el m\xe9todo est\xe1tico ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTempPath()")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Path"),"."),(0,n.kt)("p",null,"Para obtener otros directorios especiales (documentos, escritorio, personal) existe el m\xe9todo est\xe1tico ",(0,n.kt)("inlineCode",{parentName:"p"},"GetFolderPath()")," de la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Environment")," al que le podemos pasar un valor del enumerado ",(0,n.kt)("inlineCode",{parentName:"p"},"SpecialFolder"),"."),(0,n.kt)("p",null,"Entre las opciones de ",(0,n.kt)("inlineCode",{parentName:"p"},"SpecialFolder")," encontraremos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.System"),": Otra forma de obtener el directorio del sistema, igual a ",(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SystemDirectory"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.Desktop"),": La ruta correspondiente al escritorio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.ProgramFiles"),": El directorio de instalaci\xf3n de programas destinados a arquitectura no-X86."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.ProgramFilesX86"),": El directorio de instalaci\xf3n de programas destinados a arquitectura X86."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.MyDocuments"),": El directorio de la carpeta personal del usuario (Mis Documentos en Windows)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.ApplicationData"),": El directorio com\xfan para almacenar datos de aplicaciones del usuario actual."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Environment.SpecialFolder.UserProfile"),": El directorio del perfil de usuario actual."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.environment.specialfolder?view=net-5.0"},"\xa1Y hay m\xe1s!"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.IO;\n\nnamespace Archivos_Vista\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Environment.SystemDirectory: {0}", Environment.SystemDirectory);\n            Console.WriteLine("Path.GetTempPath: {0}", Path.GetTempPath());\n\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.System): {0}", Environment.GetFolderPath(Environment.SpecialFolder.System));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.Desktop): {0}", Environment.GetFolderPath(Environment.SpecialFolder.Desktop));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments): {0}", Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData): {0}", Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData));\n            Console.WriteLine("Environment.GetFolderPath(Environment.SpecialFolder.UserProfile): {0}", Environment.GetFolderPath(Environment.SpecialFolder.UserProfile));\n        }\n    }\n}\n')),(0,n.kt)("p",null,"La salida en Windows es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Environment.SystemDirectory: C:\\WINDOWS\\system32\nPath.GetTempPath: C:\\Users\\mauri\\AppData\\Local\\Temp\\\nEnvironment.GetFolderPath(Environment.SpecialFolder.System): C:\\WINDOWS\\system32\nEnvironment.GetFolderPath(Environment.SpecialFolder.Desktop): C:\\Users\\mauri\\Desktop\nEnvironment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): C:\\Program Files\nEnvironment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): C:\\Program Files (x86)\nEnvironment.GetFolderPath(Environment.SpecialFolder.MyDocuments): C:\\Users\\mauri\\Documents\nEnvironment.GetFolderPath(Environment.SpecialFolder.ApplicationData): C:\\Users\\mauri\\AppData\\Roaming\nEnvironment.GetFolderPath(Environment.SpecialFolder.UserProfile): C:\\Users\\mauri\n")),(0,n.kt)("p",null,"Algunas opciones s\xf3lo funcionan en Windows, como se puede ver en la siguiente salida en Linux:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Environment.SystemDirectory: \nPath.GetTempPath: /tmp/\nEnvironment.GetFolderPath(Environment.SpecialFolder.System): \nEnvironment.GetFolderPath(Environment.SpecialFolder.Desktop): \nEnvironment.GetFolderPath(Environment.SpecialFolder.ProgramFiles): \nEnvironment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86): \nEnvironment.GetFolderPath(Environment.SpecialFolder.MyDocuments): /home/mcerizza\nEnvironment.GetFolderPath(Environment.SpecialFolder.ApplicationData): \nEnvironment.GetFolderPath(Environment.SpecialFolder.UserProfile): /home/mcerizza\n")))}u.isMDXComponent=!0}}]);
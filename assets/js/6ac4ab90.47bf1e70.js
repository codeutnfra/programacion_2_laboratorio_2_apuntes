"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7343],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),d=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=t,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(b,l(l({ref:a},p),{},{components:n})):r.createElement(b,l({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97932:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(87462),t=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Apuntes - Delegados y expresiones lambda",sidebar_label:"Expresiones lambda",slug:"/clases/delegados/apuntes/expresiones-lambda",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,d={unversionedId:"clases/delegados/Apuntes/expresiones-lambda",id:"clases/delegados/Apuntes/expresiones-lambda",title:"Apuntes - Delegados y expresiones lambda",description:"Expresiones lambda",source:"@site/docs/clases/18-delegados/Apuntes/01-expresiones-lambda.md",sourceDirName:"clases/18-delegados/Apuntes",slug:"/clases/delegados/apuntes/expresiones-lambda",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/delegados/apuntes/expresiones-lambda",draft:!1,tags:[],version:"current",lastUpdatedBy:"Mauricio Cerizza",lastUpdatedAt:1653861773,formattedLastUpdatedAt:"5/29/2022",sidebarPosition:1,frontMatter:{title:"Apuntes - Delegados y expresiones lambda",sidebar_label:"Expresiones lambda",slug:"/clases/delegados/apuntes/expresiones-lambda",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Delegados",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/delegados/apuntes/delegados"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/delegados/apuntes/cuestionario"}},p={},u=[{value:"Expresiones lambda",id:"expresiones-lambda",level:2},{value:"Variables externas",id:"variables-externas",level:3},{value:"Delegados y expresiones lambda",id:"delegados-y-expresiones-lambda",level:2}],c={toc:u};function m(e){var a=e.components,n=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"expresiones-lambda"},"Expresiones lambda"),(0,o.kt)("p",null,"Las expresiones lambda son funciones con una sintaxis diferente que permite utilizarlas en una expresi\xf3n en lugar de los t\xedpicos m\xe9todos que son miembros de una clase. "),(0,o.kt)("p",null,"Permiten crear funciones an\xf3nimas. Una ",(0,o.kt)("strong",{parentName:"p"},"funci\xf3n an\xf3nima")," es una funci\xf3n que no tiene nombre ni declaraci\xf3n formal. Normalmente se utilizan como argumentos de m\xe9todos que tienen delegados como par\xe1metros de entrada."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/1Z9a-z_lhCw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"El ",(0,o.kt)("strong",{parentName:"p"},"operador lambda ",(0,o.kt)("inlineCode",{parentName:"strong"},"=>"))," se utiliza para separar la lista de par\xe1metros del cuerpo del m\xe9todo an\xf3nimo. Los par\xe1metros de entrada van a la izquierda del operador lambda y la sentencia o bloque de instrucciones al otro lado."),(0,o.kt)("p",null,"Cuando el cuerpo del m\xe9todo se compone de una sola sentencia, se denomina ",(0,o.kt)("strong",{parentName:"p"},"expresi\xf3n lambda (",(0,o.kt)("em",{parentName:"strong"},"lambda expression"),")")," y no lleva llaves. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(par\xe1metros de entrada) => expresi\xf3n")),(0,o.kt)("p",null,"Por ejemplo, el m\xe9todo siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"int CalcularPotenciaAlCuadrado (int numero)\n{\n    return numero * numero;\n}\n")),(0,o.kt)("p",null,"Se puede escribir como una expresi\xf3n lambda as\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"n => n * n\n")),(0,o.kt)("p",null,'El ejemplo anterior se lee como "usando ',(0,o.kt)("inlineCode",{parentName:"p"},"n")," como el par\xe1metro de la funci\xf3n, ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," va al resultado de ",(0,o.kt)("inlineCode",{parentName:"p"},"n * n"),'":'),(0,o.kt)("p",null,"Cuando el cuerpo del m\xe9todo es un bloque con una secuencia de sentencias, se denomina ",(0,o.kt)("strong",{parentName:"p"},"instrucci\xf3n lambda (",(0,o.kt)("em",{parentName:"strong"},"lambda statement"),")"),". Normalmente no contienen m\xe1s de dos o tres sentencias, es una buena pr\xe1ctica al usar esta herramienta trabajar con m\xe9todos peque\xf1os y concretos. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(par\xe1metros de entrada) => { bloque de sentencias }")),(0,o.kt)("p",null,"Por ejemplo, el m\xe9todo siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'void Saludar (string nombre, string apellido)\n{\n    string saludo = $"\xa1Bienvenido {nombre} {apellido}!";\n    Console.WriteLine(saludo);\n}\n')),(0,o.kt)("p",null,"Se puede escribir como una expresi\xf3n lambda as\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'(n, a) => {\n    string saludo = $"\xa1Bienvenido {nombre} {apellido}!";\n    Console.WriteLine(saludo);    \n}\n')),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pKND-M9bFG0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"variables-externas"},"Variables externas"),(0,o.kt)("p",null,"Dentro de una expresi\xf3n lambda podremos usar variables fuera de ese m\xe9todo, pero dentro del alcance que contiene a la expresi\xf3n lambda."),(0,o.kt)("p",null,"En el siguiente ejemplo, la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"contador")," es capturada e incrementada por la expresi\xf3n lambda. ",(0,o.kt)("inlineCode",{parentName:"p"},"contador")," nno es parte del alcance original de la expresi\xf3n lambda pero s\xed es parte del m\xe9todo que la contiene. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public void TrabajarConVariablesExternas()\n{\n    int contador = 0;\n\n    Action contar = () => contador++;\n    \n    for (int i=0; i<10; i++)\n    {\n        contar();\n    }\n\n    Console.WriteLine("Total = " + contador);\n}\n')),(0,o.kt)("h2",{id:"delegados-y-expresiones-lambda"},"Delegados y expresiones lambda"),(0,o.kt)("p",null,"Las expresiones lambda pueden ser convertidas a un tipo delegado. El tipo delegado deber\xe1 coincidir con los par\xe1metros y el tipo de retorno de la expresi\xf3n. "),(0,o.kt)("p",null,"Si una expresi\xf3n lambda no retorna un valor, puede ser convertida a un delegado tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"Action"),"; de lo contrario, puede ser convertido a uno de los delegados tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"Func"),"."),(0,o.kt)("p",null,"En el siguiente ejemplo, la expresi\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"x => x * x"),", especifica un par\xe1metro llamado ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," y retorna el dicho valor elevado al cuadrado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Func<int, int> elevarAlCuadrado = x => x * x;\n\nConsole.WriteLine(elevarAlCuadrado(5));\n")),(0,o.kt)("p",null,"La salida del c\xf3digo anterior es ",(0,o.kt)("em",{parentName:"p"},"25"),"."),(0,o.kt)("p",null,"Otro ejemplo con una instrucci\xf3n lambda:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'Action<string> saludar = nombre =>\n{\n    string saludo = $"\xa1Hola {nombre}!";\n    Console.WriteLine(saludo);\n};\n\nsaludar("Mundo");\n')),(0,o.kt)("p",null,"La salida del c\xf3digo anterior es ",(0,o.kt)("em",{parentName:"p"},"\xa1Hola Mundo!"),"."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FwCOoprd1Jk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);
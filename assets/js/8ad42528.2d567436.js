"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1217],{3905:function(e,n,o){o.d(n,{Zo:function(){return p},kt:function(){return m}});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(o),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?t.createElement(f,i(i({ref:n},p),{},{components:o})):t.createElement(f,i({ref:n},p))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1337:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var t=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],c={sidebar_label:"Crear un proyecto de consola",slug:"/clases/introduccion/apuntes/proyecto-consola",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,l={unversionedId:"clases/introduccion/Apuntes/proyecto-consola",id:"clases/introduccion/Apuntes/proyecto-consola",isDocsHomePage:!1,title:"proyecto-consola",description:"Crear un proyecto de consola",source:"@site/docs/clases/01-introduccion/Apuntes/01-proyecto-consola.md",sourceDirName:"clases/01-introduccion/Apuntes",slug:"/clases/introduccion/apuntes/proyecto-consola",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/introduccion/apuntes/proyecto-consola",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1629726357,formattedLastUpdatedAt:"8/23/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Crear un proyecto de consola",slug:"/clases/introduccion/apuntes/proyecto-consola",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"}},p=[{value:"Crear un proyecto de consola",id:"crear-un-proyecto-de-consola",children:[]}],u={toc:p};function d(e){var n=e.components,c=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"crear-un-proyecto-de-consola"},"Crear un proyecto de consola"),(0,r.kt)("p",null,"Exploremos el entorno de trabajo y pongamos en ejecuci\xf3n nuestra primera aplicaci\xf3n de consola."),(0,r.kt)("p",null,"Lo primero que tendremos que hacer es abrir ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio"),", nos mostrar\xe1 la siguiente pantalla con acciones r\xe1pidas para arrancar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inicio Visual Studio",src:o(4809).Z})),(0,r.kt)("p",null,"Presionaremos en ",(0,r.kt)("inlineCode",{parentName:"p"},"Crear un proyecto"),". Lo siguiente que encontraremos es una serie de plantillas o templates de los distintos tipos de proyectos que podemos encarar con la plataforma. Arriba tendremos una barra de b\xfasqueda y filtros por lenguaje, plataforma y tipo de aplicaci\xf3n. "),(0,r.kt)("p",null,"Elegiremos ",(0,r.kt)("inlineCode",{parentName:"p"},"Aplicaci\xf3n de consola"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template Consola Visual Studio",src:o(4489).Z})),(0,r.kt)("p",null,'Lo siguiente ser\xe1 elegir un nombre para el proyecto y otro para la soluci\xf3n (o el mismo) y presionar el bot\xf3n "Crear". '),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"proyecto")," es una estructura que nos permitir\xe1 construir nuestros programas con .NET y compilarlos como una unidad independiente, mientras que a una ",(0,r.kt)("strong",{parentName:"p"},"soluci\xf3n")," la podemos ver como una agrupadora de proyectos. Normalmente un programa de .NET est\xe1 compuesto por varios proyectos inter-relacionados dentro de una soluci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template Consola Visual Studio",src:o(5262).Z})),(0,r.kt)("p",null,"Una vez creado nos aparecer\xe1 el siguiente c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace Hola_Mundo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello World!");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Este es el c\xf3digo m\xednimo sobre el cual arrancaremos todas nuestras aplicaciones de consola. Nos adentraremos en los detalles m\xe1s adelante."),(0,r.kt)("p",null,"Para ejecutar este programa tenemos 2 opciones, o presionar la tecla ",(0,r.kt)("inlineCode",{parentName:"p"},"F5"),' o el bot\xf3n de "play" en la barra de acciones de arriba. '),(0,r.kt)("p",null,"Seguido veremos la consola con la salida en texto ",(0,r.kt)("em",{parentName:"p"},'"Hello World!"'),"."),(0,r.kt)("p",null,"\xa1Felicitaciones, acab\xe1s de crear tu primer programa con C#!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Te recomendamos crear una nueva soluci\xf3n por cada ejercicio que vayas a realizar. Tambi\xe9n mantener todas las soluciones en una \xfanica carpeta que est\xe9 versionada con Git y enlazada a tu repositorio en GitHub.  "))))}d.isMDXComponent=!0},4809:function(e,n,o){n.Z=o.p+"assets/images/inicio-visual-studio-9a3aa2cc9855fd6bb022a3eef729955d.png"},5262:function(e,n,o){n.Z=o.p+"assets/images/nombre_proyecto_vs-78e7abdd752a0c4e528f262479c3fa0c.png"},4489:function(e,n,o){n.Z=o.p+"assets/images/template-consola-vs-9647594b34b6e69ba39ca42664f4be1a.png"}}]);
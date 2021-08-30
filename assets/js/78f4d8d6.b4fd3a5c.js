"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1952],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2641:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"Apuntes - Namespaces",sidebar_label:"Namespaces",slug:"/clases/estaticos/apuntes/namespaces",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},c=void 0,l={unversionedId:"clases/estaticos/Apuntes/namespaces",id:"clases/estaticos/Apuntes/namespaces",isDocsHomePage:!1,title:"Apuntes - Namespaces",description:"Namespaces",source:"@site/docs/clases/02-estaticos/Apuntes/02-namespaces.md",sourceDirName:"clases/02-estaticos/Apuntes",slug:"/clases/estaticos/apuntes/namespaces",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/namespaces",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630296617,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:2,frontMatter:{title:"Apuntes - Namespaces",sidebar_label:"Namespaces",slug:"/clases/estaticos/apuntes/namespaces",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Clases est\xe1ticas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/clases-estaticas"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/cuestionario"}},p=[{value:"Namespaces",id:"namespaces",children:[{value:"Directiva using",id:"directiva-using",children:[]},{value:"Directiva alias",id:"directiva-alias",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"Los ",(0,i.kt)("strong",{parentName:"p"},"espacios de nombres (",(0,i.kt)("em",{parentName:"strong"},"namespaces"),")")," son una agrupaci\xf3n l\xf3gica de clases y otros elementos del c\xf3digo fuente. As\xed como clasificamos nuestros archivos dentro de distintos directos del sistema operativo, podemos organizar el c\xf3digo fuente de C# y sus componentes en distintos espacios de nombres. "),(0,i.kt)("p",null,"Todo lo que declaremos deber\xe1 estar contenido dentro de un espacio de nombres."),(0,i.kt)("p",null,"Su funci\xf3n principal es la organizaci\xf3n del c\xf3digo, permitiendo la reducci\xf3n de conflictos por nombres duplicados y la posibilidad de trabajar en un mismo programa con componentes de distinta procedencia. "),(0,i.kt)("p",null,"Analicemos el siguiente c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'System.Console.WriteLine("\xa1Hola mundo!");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System")," es un ",(0,i.kt)("strong",{parentName:"li"},"namespace")," que forma parte de la ",(0,i.kt)("em",{parentName:"li"},"Base Class Library"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Console")," es una ",(0,i.kt)("strong",{parentName:"li"},"clase")," dentro del namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"System"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WriteLine")," es un ",(0,i.kt)("strong",{parentName:"li"},"m\xe9todo ",(0,i.kt)("em",{parentName:"strong"},"est\xe1tico"))," de la clase ",(0,i.kt)("inlineCode",{parentName:"li"},"Console"),".")),(0,i.kt)("p",null,"Si bien al crear un nuevo proyecto en Visual Studio vemos que por defecto se genera un archivo con un namespace que lleva el mismo nombre que el proyecto, esto no necesariamente tiene que ser as\xed. Los identificadores de espacios de nombres pueden ser distintos al nombre del proyecto del que forman parte. Tambi\xe9n puede haber m\xe1s de un namespace por proyecto. "),(0,i.kt)("h3",{id:"directiva-using"},"Directiva using"),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"directiva using")," permite la especificaci\xf3n de una llamada a un m\xe9todo sin el uso obligatorio de un nombre completamente cualificado (nombre completo incluyendo el espacio de nombres)."),(0,i.kt)("p",null,"Sin directiva ",(0,i.kt)("inlineCode",{parentName:"p"},"using"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Program\n{\n    public static void Main()\n    {\n        // Sin la directiva 'using' tengo que anteponer el espacio de nombres al identificador de la clase. \n        System.Console.WriteLine(\"\xa1Hola mundo!\");\n    }\n}\n")),(0,i.kt)("p",null,"Con directiva ",(0,i.kt)("inlineCode",{parentName:"p"},"using"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System; //Directiva USING\n\npublic class Program\n{\n    public static void Main()\n    {\n        Console.WriteLine("\xa1Hola mundo!");\n    }\n}\n')),(0,i.kt)("h3",{id:"directiva-alias"},"Directiva alias"),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"directiva alias")," permite utilizar un nombre distinto para un espacio de nombres. Se suele utilizar para abreviar nombres largos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using SC = System.Console; //Directiva ALIAS\n\npublic class Program\n{\n    public static void Main()\n    {\n        SC.WriteLine("\xa1Hola mundo!");\n    }\n}\n')))}m.isMDXComponent=!0}}]);
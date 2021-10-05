"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[9527],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?a.createElement(b,s(s({ref:t},d),{},{components:r})):a.createElement(b,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5898:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),s=["components"],i={sidebar_label:"Sobrecarga de m\xe9todos",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},c=void 0,l={unversionedId:"clases/sobrecarga/Apuntes/sobrecarga-metodos",id:"clases/sobrecarga/Apuntes/sobrecarga-metodos",isDocsHomePage:!1,title:"sobrecarga-metodos",description:"Sobrecarga de M\xe9todos",source:"@site/docs/clases/04-sobrecarga/Apuntes/01-sobrecarga-metodos.md",sourceDirName:"clases/04-sobrecarga/Apuntes",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/sobrecarga/apuntes/sobrecarga-metodos",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630296617,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Sobrecarga de m\xe9todos",slug:"/clases/sobrecarga/apuntes/sobrecarga-metodos",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},sidebar:"Clases",previous:{title:"Sobrecarga",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/sobrecarga/apuntes/sobrecarga"},next:{title:"Sobrecarga de constructores",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/sobrecarga/apuntes/sobrecarga-constructores"}},d=[{value:"Sobrecarga de M\xe9todos",id:"sobrecarga-de-m\xe9todos",children:[{value:"Tipo de par\xe1metros",id:"tipo-de-par\xe1metros",children:[]},{value:"Cantidad de par\xe1metros",id:"cantidad-de-par\xe1metros",children:[]}]}],p={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sobrecarga-de-m\xe9todos"},"Sobrecarga de M\xe9todos"),(0,n.kt)("p",null,"Por lo general, la sobrecarga de m\xe9todos se utiliza para crear varios m\xe9todos con el mismo nombre que realicen la misma tarea o tareas similares, pero con distintos tipos o distintos n\xfameros de argumentos. "),(0,n.kt)("h3",{id:"tipo-de-par\xe1metros"},"Tipo de par\xe1metros"),(0,n.kt)("p",null,"La sobrecarga del tipo de par\xe1metro permite utilizar el mismo identificador para m\xe9todos que realizan operaciones id\xe9nticas con diferentes tipos de datos."),(0,n.kt)("p",null,"Por ejemplo, los m\xe9todos Min y Max de Math se sobrecargan con 11 versiones. Estos m\xe9todos buscan el m\xednimo y el m\xe1ximo, respectivamente, de dos valores de cada uno de los 11 tipos num\xe9ricos simples."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Math {\n\n        public static int Max(int val1, int val2);\n        public static int Max(long val1, long val2);\n        public static int Max(float val1, float val2);\n        // ...\n        public static int Max(int val1, int val2);\n        public static int Max(long val1, long val2);\n        public static int Max(float val1, float val2);\n        // ...\n}\n")),(0,n.kt)("p",null,"Cuando se hace una llamada a un m\xe9todo sobrecargado el compilador selecciona el m\xe9todo apropiado mediante un an\xe1lisis de su ",(0,n.kt)("strong",{parentName:"p"},"firma"),". La firma es una combinaci\xf3n del nombre del m\xe9todo y del n\xfamero, tipos y orden de sus par\xe1metros. La firma tambi\xe9n incluye la forma en que se pasan esos par\xe1metros, los cuales pueden modificarse mediante las palabras ref y out. Las llamadas a los m\xe9todos no pueden diferenciarse en base al tipo de valor de retorno. Los m\xe9todos sobrecargados pueden tener tipos de retorno iguales o distintos, si los m\xe9todos tienen distintas listas de par\xe1metros."),(0,n.kt)("h3",{id:"cantidad-de-par\xe1metros"},"Cantidad de par\xe1metros"),(0,n.kt)("p",null,"La sobrecarga en el n\xfamero de par\xe1metros hace posible proporcionar versiones m\xe1s simples de m\xe9todos. "),(0,n.kt)("p",null,"Por ejemplo, el m\xe9todo Concat de String. Este m\xe9todo concatena las instancias de string que recibe como par\xe1metro:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class String{\n    \n    public static String Concat(String str0, String str1){  }\n    public static String Concat(String str0, String str1, String str2){}\n    public static String Concat(String str0, String str1, String str2, String str3){}\n    // ...\n}\n")))}u.isMDXComponent=!0}}]);
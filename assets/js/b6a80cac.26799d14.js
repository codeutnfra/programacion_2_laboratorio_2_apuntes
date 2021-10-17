"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[5423],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return t?a.createElement(d,s(s({ref:n},p),{},{components:t})):a.createElement(d,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3702:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={title:"Apuntes - Interfaces expl\xedcitas",sidebar_label:"Interfaces expl\xedcitas",slug:"/clases/interfaces/apuntes/interfaces-explicitas",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},c={unversionedId:"clases/interfaces/Apuntes/interfaz-explicita",id:"clases/interfaces/Apuntes/interfaz-explicita",isDocsHomePage:!1,title:"Apuntes - Interfaces expl\xedcitas",description:"Si una clase implementa dos interfaces que contienen un miembro con la misma definici\xf3n entonces, al implementar ese miembro en la clase, ambas interfaces usar\xe1n ese miembro como implementaci\xf3n.",source:"@site/docs/clases/13-interfaces/Apuntes/01-interfaz-explicita.md",sourceDirName:"clases/13-interfaces/Apuntes",slug:"/clases/interfaces/apuntes/interfaces-explicitas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/interfaces/apuntes/interfaces-explicitas",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633324460,formattedLastUpdatedAt:"10/4/2021",sidebar_label:"Interfaces expl\xedcitas",sidebarPosition:1,frontMatter:{title:"Apuntes - Interfaces expl\xedcitas",sidebar_label:"Interfaces expl\xedcitas",slug:"/clases/interfaces/apuntes/interfaces-explicitas",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"Apuntes - Interfaces",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/interfaces/apuntes/interfaces"},next:{title:"Apuntes - Interfaces impl\xedcitas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/interfaces/apuntes/interfaces-implicitas"}},l=[],p={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Si una clase implementa dos interfaces que contienen un miembro con la misma definici\xf3n entonces, al implementar ese miembro en la clase, ambas interfaces usar\xe1n ese miembro como implementaci\xf3n. "),(0,i.kt)("p",null,"Puede suceder que no se quiera llamar a la misma implementaci\xf3n para las dos interfaces. Para esto usamos la implementaci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"expl\xedcita"),"."),(0,i.kt)("p",null,"Dependiendo de nuestra aplicaci\xf3n podemos necesitar que un miembro se comporte de determinada manera seg\xfan la interfaz a trav\xe9s de la que se lo est\xe1 implementando y que, adem\xe1s, no se pueda utilizar en otra circunstancia."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si definimos la interfaz expl\xedcitamente solo podremos acceder a la funcionalidad de dicha interfaz cuando la estemos tratando como un objeto de dicha interfaz."),(0,i.kt)("li",{parentName:"ul"},"El uso expl\xedcito nos proporciona una mayor seguridad de tipos y un mayor orden.")),(0,i.kt)("p",null,"Por ejemplo: "),(0,i.kt)("p",null,"Tenemos las siguientes interfaces declaradas:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"    interface ICazador\n    {\n        void Cazar();\n        void Moverse(); \n    }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"   interface IVolador\n   {\n        string EnElAire { get; } \n        void Volar(); \n        void Moverse();\n   }     \n")),(0,i.kt)("p",null,"Y tenemos la siguiente clase:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"}," public class Espiritu : IVolador, ICazador\n")),(0,i.kt)("p",null,"La manera de implementar las interfaces expl\xedcitamente es con un casteo, de esta manera:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"((ICazador)miEspiritu).Moverse(); \n")))}u.isMDXComponent=!0}}]);
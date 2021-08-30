"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[609],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(b,s(s({ref:r},p),{},{components:t})):a.createElement(b,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7155:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),s=["components"],c={title:"Apuntes - Sobrecarga",sidebar_label:"Sobrecarga",slug:"/clases/sobrecarga/apuntes/sobrecarga",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},i=void 0,l={unversionedId:"clases/sobrecarga/Apuntes/sobrecarga",id:"clases/sobrecarga/Apuntes/sobrecarga",isDocsHomePage:!1,title:"Apuntes - Sobrecarga",description:"\xbfQu\xe9 es la Sobrecarga?",source:"@site/docs/clases/04-sobrecarga/Apuntes/00-sobrecarga.md",sourceDirName:"clases/04-sobrecarga/Apuntes",slug:"/clases/sobrecarga/apuntes/sobrecarga",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/sobrecarga/apuntes/sobrecarga",version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1629066452,formattedLastUpdatedAt:"8/15/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Sobrecarga",sidebar_label:"Sobrecarga",slug:"/clases/sobrecarga/apuntes/sobrecarga",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/sobrecarga"},next:{title:"Sobrecarga de m\xe9todos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/sobrecarga/apuntes/sobrecarga-metodos"}},p=[{value:"\xbfQu\xe9 es la Sobrecarga?",id:"\xbfqu\xe9-es-la-sobrecarga",children:[]}],u={toc:p};function d(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\xbfqu\xe9-es-la-sobrecarga"},"\xbfQu\xe9 es la Sobrecarga?"),(0,o.kt)("p",null,"La sobrecarga es una de las t\xe9cnicas m\xe1s importantes para mejorar la usabilidad, la productividad y la legibilidad de nuestro c\xf3digo. Permite declarar ",(0,o.kt)("strong",{parentName:"p"},"miembros con el mismo nombre")," en la misma clase, siempre y cuando tengan ",(0,o.kt)("strong",{parentName:"p"},"distintos conjuntos de par\xe1metros")),(0,o.kt)("p",null,"Debido a que solo los m\xe9todos, constructores y propiedades indexadas pueden tener par\xe1metros, s\xf3lo esos miembros pueden sobrecargarse ",(0,o.kt)("strong",{parentName:"p"},"cambiando el n\xfamero, el tipo y el orden de los tipos de los par\xe1metros.")),(0,o.kt)("p",null,"La sobrecarga consiste en ",(0,o.kt)("strong",{parentName:"p"},"crear dos o m\xe1s miembros")," (m\xe9todos, constructores o indexadores) ",(0,o.kt)("strong",{parentName:"p"},"con el mismo identificador")," (mismo nombre), dentro de la misma clase, ",(0,o.kt)("strong",{parentName:"p"},"cambiando el n\xfamero")," de par\xe1metros, ",(0,o.kt)("strong",{parentName:"p"},"tipo")," de par\xe1metros ",(0,o.kt)("strong",{parentName:"p"},"u orden de los tipos"),". "),(0,o.kt)("p",null,"Por ejemplo, el m\xe9todo WriteLine est\xe1 sobrecargado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Console {\n   public void WriteLine();\n   public void WriteLine(string value);\n   public void WriteLine(bool value);\n   public void WriteLine(string value, Object arg);\n   // ...\n}\n")))}d.isMDXComponent=!0}}]);
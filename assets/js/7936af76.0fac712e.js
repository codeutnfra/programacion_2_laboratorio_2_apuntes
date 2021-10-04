"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[6908],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3173:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={sidebar_label:"Clases est\xe1ticas",slug:"/clases/estaticos/apuntes/clases-estaticas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},c=void 0,l={unversionedId:"clases/estaticos/Apuntes/clases-estaticas",id:"clases/estaticos/Apuntes/clases-estaticas",isDocsHomePage:!1,title:"clases-estaticas",description:"Clases est\xe1ticas",source:"@site/docs/clases/02-estaticos/Apuntes/01-clases-estaticas.md",sourceDirName:"clases/02-estaticos/Apuntes",slug:"/clases/estaticos/apuntes/clases-estaticas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/clases-estaticas",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630185694,formattedLastUpdatedAt:"8/28/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Clases est\xe1ticas",slug:"/clases/estaticos/apuntes/clases-estaticas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"}},u=[{value:"Clases est\xe1ticas",id:"clases-est\xe1ticas",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clases-est\xe1ticas"},"Clases est\xe1ticas"),(0,s.kt)("p",null,"Las ",(0,s.kt)("strong",{parentName:"p"},"clases est\xe1ticas")," son agrupadores de atributos est\xe1ticos y m\xe9todos est\xe1ticos, es decir de datos y funciones que operan sobre esos datos respectivamente."),(0,s.kt)("p",null,"Para declarar una clase se debe indicar el nivel de acceso con un modificador de visibilidad (que puede ser ",(0,s.kt)("inlineCode",{parentName:"p"},"internal")," o ",(0,s.kt)("inlineCode",{parentName:"p"},"public"),") seguido de la palabra reservada ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," y un identificador para la clase. "),(0,s.kt)("p",null,"Los nombres de las clases deben ser sustantivos con notaci\xf3n ",(0,s.kt)("em",{parentName:"p"},"PascalCase"),". "),(0,s.kt)("p",null,"Opcionalmente, seguido del modificador de acceso puede ir alg\xfan modificador especial como ",(0,s.kt)("inlineCode",{parentName:"p"},"static"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Cotizador\n{\n    private const decimal pesosPorDolarComprado = 96.75M;\n    private const decimal pesosPorDolarVendido = 102.82M;\n\n    public static decimal CotizarVentaDolares(decimal montoDolaresAVender)\n    {\n        decimal costoEnPesos = montoDolaresAVender * pesosPorDolarVendido;\n\n        return costoEnPesos;\n    }\n\n    public static decimal CotizarCompraDolares(decimal montoDolaresAComprar)\n    {\n        decimal pagoEnPesos = montoDolaresAComprar * pesosPorDolarComprado;\n\n        return pagoEnPesos;\n    }\n}\n")),(0,s.kt)("p",null,"Las constantes son como atributos est\xe1ticos, la \xfanica diferencia es que su valor no puede cambiar en tiempo de ejecuci\xf3n. "),(0,s.kt)("p",null,"Si seguimos buenas pr\xe1cticas de programaci\xf3n, los atributos de una clase siempre deber\xe1n ser privados."))}d.isMDXComponent=!0}}]);
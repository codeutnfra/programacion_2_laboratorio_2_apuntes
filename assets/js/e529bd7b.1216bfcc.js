"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[9209],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),i=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(t),b=n,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||s;return t?r.createElement(m,c(c({ref:a},u),{},{components:t})):r.createElement(m,c({ref:a},u))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<s;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5485:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=t(7462),n=t(3366),s=(t(7294),t(3905)),c=["components"],o={title:"Apuntes - Clases y m\xe9todos abstractos",sidebar_label:"Clases abstractas",slug:"/clases/abstract/apuntes/abstract",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},l=void 0,i={unversionedId:"clases/abstract/Apuntes/clases-abstractas",id:"clases/abstract/Apuntes/clases-abstractas",isDocsHomePage:!1,title:"Apuntes - Clases y m\xe9todos abstractos",description:"Clases Abstractas",source:"@site/docs/clases/10-abstract/Apuntes/00-clases-abstractas.md",sourceDirName:"clases/10-abstract/Apuntes",slug:"/clases/abstract/apuntes/abstract",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/abstract/apuntes/abstract",version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1629072276,formattedLastUpdatedAt:"8/15/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Clases y m\xe9todos abstractos",sidebar_label:"Clases abstractas",slug:"/clases/abstract/apuntes/abstract",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null}},u=[{value:"Clases Abstractas",id:"clases-abstractas",children:[]}],p={toc:u};function d(e){var a=e.components,t=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clases-abstractas"},"Clases Abstractas"),(0,s.kt)("p",null,"Las clases se pueden declarar como abstractas poniendo la palabra clave abstract antes de la definici\xf3n de la clase."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Figura{\n    //...\n} \n")),(0,s.kt)("p",null,"No se puede crear una instancia de una clase abstracta. El prop\xf3sito de una clase abstracta es proporcionar una definici\xf3n com\xfan de una clase base que pueden compartir m\xfaltiples clases derivadas. Por ejemplo, se puede definir una clase abstracta que se usa como par\xe1metro para muchas de sus funciones y requerir que los programadores que usan esa clase proporcionen su propia implementaci\xf3n de la clase creando una clase derivada."),(0,s.kt)("p",null,"Las clases abstractas pueden contener m\xe9todos, propiedades, indexadores y eventos abstractos."),(0,s.kt)("p",null,"No es posible marcar una clase abstracta con el modificador ",(0,s.kt)("em",{parentName:"p"},"sealed")," porque ambos modificadores tienen significados opuestos. El modificador ",(0,s.kt)("em",{parentName:"p"},"sealed")," evita que una clase se pueda heredar y el modificador ",(0,s.kt)("em",{parentName:"p"},"abstract")," requiere que se herede una clase."),(0,s.kt)("p",null,"Es posible tener variables con tipos que en tiempo de compilaci\xf3n sean abstractos. Estas variables ser\xe1n ",(0,s.kt)("em",{parentName:"p"},"null")," o ocntendr\xe1n referencias a ",(0,s.kt)("em",{parentName:"p"},"instancias de una clase derivada no-abstracta")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Figura{\n    //...\n} \npublic abstract class Cuadrado : Figura{\n    //...\n} \n\nFigura figura = new Cuadrado();\n\n")),(0,s.kt)("p",null,"Una clase abstracta que implementa una interfaz debe proporcionar implementaci\xf3n para todos los miembros de la interfaz. Tambi\xe9n puede marcar los m\xe9todos de la interfaz como m\xe9todos abstractos. Por ejemplo:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"interface  IFigura{\n    float CalcularArea();\n} \npublic abstract class Figura2D : IFigura{\n    public abstract float CalcularArea();\n} \npublic class Cuadrado : Figura2D{\n    int lado;\n    public override float CalcularArea(){\n        return lado * lado;\n    }\n}\n")))}d.isMDXComponent=!0}}]);
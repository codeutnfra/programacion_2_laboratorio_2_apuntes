"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7738],{3905:function(e,a,o){o.d(a,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),c=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=t,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return o?r.createElement(g,i(i({ref:a},d),{},{components:o})):r.createElement(g,i({ref:a},d))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9899:function(e,a,o){o.r(a),o.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=o(7462),t=o(3366),n=(o(7294),o(3905)),i=["components"],s={title:"Apuntes - Programaci\xf3n orientada a objetos",sidebar_label:"Programaci\xf3n orientada a objetos",slug:"/clases/objetos/apuntes/poo",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},l=void 0,c={unversionedId:"clases/objetos/Apuntes/poo",id:"clases/objetos/Apuntes/poo",title:"Apuntes - Programaci\xf3n orientada a objetos",description:"Paradigmas de programaci\xf3n",source:"@site/docs/clases/03-objetos/Apuntes/00-poo.md",sourceDirName:"clases/03-objetos/Apuntes",slug:"/clases/objetos/apuntes/poo",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/poo",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630897767,formattedLastUpdatedAt:"9/6/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Programaci\xf3n orientada a objetos",sidebar_label:"Programaci\xf3n orientada a objetos",slug:"/clases/objetos/apuntes/poo",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos"},next:{title:"Abstracci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/abstraccion"}},d={},p=[{value:"Paradigmas de programaci\xf3n",id:"paradigmas-de-programaci\xf3n",level:2},{value:"Programaci\xf3n orientada a objetos",id:"programaci\xf3n-orientada-a-objetos",level:2},{value:"Pilares de la programaci\xf3n orientada a objetos",id:"pilares-de-la-programaci\xf3n-orientada-a-objetos",level:3},{value:"Abstracci\xf3n",id:"abstracci\xf3n",level:4},{value:"Encapsulamiento",id:"encapsulamiento",level:4},{value:"Herencia",id:"herencia",level:4},{value:"Polimorfismo",id:"polimorfismo",level:4},{value:"Paradigma procedural vs paradigma orientado a objetos",id:"paradigma-procedural-vs-paradigma-orientado-a-objetos",level:2}],u={toc:p};function m(e){var a=e.components,o=(0,t.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"paradigmas-de-programaci\xf3n"},"Paradigmas de programaci\xf3n"),(0,n.kt)("p",null,"Un ",(0,n.kt)("strong",{parentName:"p"},"paradigma")," es una teor\xeda o conjunto de teor\xedas cuyo n\xfacleo central se acepta sin cuestionar y que suministra la base y modelo para resolver problemas y avanzar en el conocimiento. "),(0,n.kt)("p",null,"Un ",(0,n.kt)("strong",{parentName:"p"},"paradigma de programaci\xf3n")," define la forma, metodolog\xeda o estilo con el que se resolver\xe1 un problema utilizando un lenguaje de programaci\xf3n. "),(0,n.kt)("p",null,"Entre los paradigmas de programaci\xf3n m\xe1s comunes se incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Paradigma imperativo")," en el que el programador instruye a la m\xe1quina c\xf3mo cambiar su estado."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma procedural")," que separa estas instrucciones en procedimientos."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma orientado a objetos")," que agrupa estas instrucciones junto con el estado sobre el que operan.   "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Paradigma declarativo")," en el que el programador solamente declara propiedades de un resultado deseado, pero no indica c\xf3mo calcularlo. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma funcional")," donde el resultado deseado es declarado como el valor de una serie de aplicaciones de funci\xf3n."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma l\xf3gico")," donde el resultado deseado se declara como la respuesta a una pregunta sobre un sistema de hechos y reglas. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma matem\xe1tico")," donde el resultado deseado se declara como la soluci\xf3n de un problema de optimizaci\xf3n. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paradigma reactivo")," donde el resultado deseado se declara con flujos de datos y la propagaci\xf3n del cambio. ")))),(0,n.kt)("h2",{id:"programaci\xf3n-orientada-a-objetos"},"Programaci\xf3n orientada a objetos"),(0,n.kt)("p",null,"La ",(0,n.kt)("strong",{parentName:"p"},"programaci\xf3n orientada a objetos (",(0,n.kt)("em",{parentName:"strong"},"Object Oriented Programming - OOP"),")")," es un paradigma de programaci\xf3n que propone resolver problemas a trav\xe9s de identificar objetos de la vida real, sus atributos (datos), su comportamiento (acciones) y las relaciones de colaboraci\xf3n entre ellos. "),(0,n.kt)("p",null,"Un ",(0,n.kt)("strong",{parentName:"p"},"objeto")," en programaci\xf3n representa algo de la vida real, como puede ser un producto o una cuenta bancaria, pero tambi\xe9n puede ser algo m\xe1s abstracto. "),(0,n.kt)("p",null,"Los objetos son definidos por dos componentes: ",(0,n.kt)("strong",{parentName:"p"},"atributos")," y ",(0,n.kt)("strong",{parentName:"p"},"comportamiento"),". "),(0,n.kt)("p",null,"El desarrollo orientado a objetos existe desde principios de la d\xe9cada de 1960, sin embargo no fue hasta fines de la d\xe9cada de 1990 que empez\xf3 a popularizarse."),(0,n.kt)("h3",{id:"pilares-de-la-programaci\xf3n-orientada-a-objetos"},"Pilares de la programaci\xf3n orientada a objetos"),(0,n.kt)("p",null,"Existen ciertos conceptos clave que se deben poder aplicar para que una soluci\xf3n sea considerada orientada a objetos. "),(0,n.kt)("h4",{id:"abstracci\xf3n"},"Abstracci\xf3n"),(0,n.kt)("p",null,"Se trata de capturar la idea principal de un objeto dentro de un determinado contexto, ignorando detalles o especificaciones que no sean relevantes. "),(0,n.kt)("h4",{id:"encapsulamiento"},"Encapsulamiento"),(0,n.kt)("p",null,"Se trata de agrupar datos y acciones relacionados a un objeto. Por ejemplo, un objeto que represente una cuenta bancaria contendr\xe1 datos como el saldo y el n\xfamero de cuenta y acciones sobre esos datos, como depositar y extraer. Cuando se aplica encapsulamiento muchas veces es necesario definir y controlar c\xf3mo y desde d\xf3nde un objeto puede ser accedido y/o modificado."),(0,n.kt)("h4",{id:"herencia"},"Herencia"),(0,n.kt)("p",null,"Se trata de reutilizar c\xf3digo partiendo de una clase m\xe1s general (padre o base) que compartir\xe1 su estructura y funcionalidad a clases m\xe1s espec\xedficas (hijas o derivadas)."),(0,n.kt)("h4",{id:"polimorfismo"},"Polimorfismo"),(0,n.kt)("p",null,"Se trata de que una clase hija o derivada pueda redefinir una determinada acci\xf3n heredada de una clase padre o base. "),(0,n.kt)("h2",{id:"paradigma-procedural-vs-paradigma-orientado-a-objetos"},"Paradigma procedural vs paradigma orientado a objetos"),(0,n.kt)("p",null,"En el enfoque orientado a objetos, los atributos y el comportamiento est\xe1n contenidos dentro de un objeto individual, mientras que en el enfoque procedural o estructurado, el dise\xf1o de atributos y comportamiento est\xe1n normalmente separados."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[727],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(b,s(s({ref:a},u),{},{components:n})):t.createElement(b,s({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7002:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_label:"Abstracci\xf3n",slug:"/clases/objetos/apuntes/abstraccion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},c=void 0,l={unversionedId:"clases/objetos/Apuntes/abstraccion",id:"clases/objetos/Apuntes/abstraccion",title:"abstraccion",description:"Abstracci\xf3n",source:"@site/docs/clases/03-objetos/Apuntes/01-abstraccion.md",sourceDirName:"clases/03-objetos/Apuntes",slug:"/clases/objetos/apuntes/abstraccion",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/abstraccion",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630897767,formattedLastUpdatedAt:"9/6/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Abstracci\xf3n",slug:"/clases/objetos/apuntes/abstraccion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Programaci\xf3n orientada a objetos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/poo"},next:{title:"Clases",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/clases"}},u={},d=[{value:"Abstracci\xf3n",id:"abstracci\xf3n",level:2}],p={toc:d};function m(e){var a=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"abstracci\xf3n"},"Abstracci\xf3n"),(0,r.kt)("p",null,"El primer pilar de la programaci\xf3n orientada a objetos que aprenderemos es la abstracci\xf3n. "),(0,r.kt)("p",null,"La ",(0,r.kt)("strong",{parentName:"p"},"abstracci\xf3n")," es la habilidad de abordar un concepto mientras se ignoran de forma segura algunos de sus detalles. Dependiendo del contexto y de la necesidad podemos trabajar a distintos niveles de abstracci\xf3n, enfoc\xe1ndonos en distintos aspectos y trabajando con un mayor o menor nivel de detalle."),(0,r.kt)("p",null,"En la vida real aplicamos la abstracci\xf3n continuamente. Por ejemplo, cuando hablamos de una casa no nos detenemos en las mol\xe9culas y part\xedculas que la componen, normalmente ni siquiera hablamos de sus materiales de construcci\xf3n o por donde pasan las tuber\xedas de agua. En una conversaci\xf3n habitual manejaremos un nivel de abstracci\xf3n muy alto: la ubicaci\xf3n, detalles de la fachada, cantidad de habitaciones, y no mucho m\xe1s. En alguna situaci\xf3n puntual podremos necesitar saber c\xf3mo est\xe1 armado el tendido el\xe9ctrico para hacer una reparaci\xf3n, pero no nos interesar\xe1n otros detalles tales como de qu\xe9 material son los pisos o cu\xe1ntas personas habitan el lugar. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Abstracci\xf3n aplicada a una casa",src:n(6717).Z,width:"1000",height:"246"})),(0,r.kt)("p",null,"Un mapa del mundo es una abstracci\xf3n de lo que realmente es el planeta, pero pr\xe1ctica a fines de su uso. La tierra no es bidimensional, sin embargo se puede ",(0,r.kt)("em",{parentName:"p"},"abstraer")," esa realidad a una representaci\xf3n gr\xe1fica a escala, plana y bidimensional que nos informa sobre la distribuci\xf3n geogr\xe1fica y pol\xedtica del territorio de manera sencilla y accesible. Se pierden muchos detalles de forma intensional para facilitar la comprensi\xf3n de lo que nos interesa comunicar. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Abstracci\xf3n aplicada al planeta",src:n(1367).Z,width:"1000",height:"313"})),(0,r.kt)("p",null,"Si bien un mapa en si mismo ignora gran cantidad de detalles con el fin de simplificar la transmisi\xf3n de la informaci\xf3n, tambi\xe9n existen distintos niveles de abstracci\xf3n para un mapa dependiendo del enfoque que se necesite. No es lo mismo un mapa hidrogr\xe1fico que se enfoca en el curso de r\xedos y otras superficiones de agua, que un mapa pol\xedtico que representa divisiones administrativas de distintos territorios. Tampoco es lo mismo un mapa de la ciudad de buenos aires donde podemos ver el trazado de las calles y recorrido de l\xedneas de trenes y subtes, a un mapa del continente donde esos detalles no figuran. Dependendiendo de la necesidad, trabajaremos con uno u otro. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Abstracci\xf3n aplicada a distintos tipos de mapas",src:n(1787).Z,width:"1680",height:"1044"})),(0,r.kt)("p",null,"Podemos decir entonces que la abstracci\xf3n es una simplificaci\xf3n de la realidad donde me quedo con lo importante y descarto los detalles irrelevantes. En el \xe1mbito del desarrollo de software, lo que determina qu\xe9 es relevante y qu\xe9 no es el ",(0,r.kt)("strong",{parentName:"p"},"contexto del negocio"),", el problema, requerimiento o proceso que queremos resolver o automatizar con un sistema inform\xe1tico. En otras palabras, el \xe1rea de conocimiento o la actividad sobre la que se desarrolla la aplicaci\xf3n. "),(0,r.kt)("p",null,"La abstracci\xf3n es clave para construir sistemas f\xe1cilmente mantenibles y que no terminen manejando una complejidad excesiva e innecesaria. En el siguiente cap\xedtulo veremos como este pilar conduce el dise\xf1o de las clases, que no son otra cosa mas que abstracciones de conceptos u objetos pertenecientes al dominio del problema."))}m.isMDXComponent=!0},6717:function(e,a,n){a.Z=n.p+"assets/images/abstraccion_casa-831b1d89902812c6a667f45eb6c89d9a.png"},1787:function(e,a,n){a.Z=n.p+"assets/images/abstraccion_mapas-1fecf37173bc9055832d4d813adc4e18.png"},1367:function(e,a,n){a.Z=n.p+"assets/images/abstraccion_planeta-4b599e49f851f4813367297e4d14dfe7.png"}}]);
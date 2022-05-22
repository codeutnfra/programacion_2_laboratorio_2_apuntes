"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1869],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54497:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={sidebar_label:"Indexadores",slug:"/clases/encapsulamiento/apuntes/indexadores",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},l=void 0,p={unversionedId:"clases/encapsulamiento/Apuntes/indexadores",id:"clases/encapsulamiento/Apuntes/indexadores",title:"indexadores",description:"Indexadores",source:"@site/docs/clases/07-encapsulamiento/Apuntes/02-indexadores.md",sourceDirName:"clases/07-encapsulamiento/Apuntes",slug:"/clases/encapsulamiento/apuntes/indexadores",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/indexadores",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1631253768,formattedLastUpdatedAt:"9/10/2021",sidebarPosition:2,frontMatter:{sidebar_label:"Indexadores",slug:"/clases/encapsulamiento/apuntes/indexadores",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},sidebar:"Clases",previous:{title:"Propiedades",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/propiedades"},next:{title:"Enumerados",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/enumerados"}},c={},d=[{value:"Indexadores",id:"indexadores",level:2}],u={toc:d};function m(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"indexadores"},"Indexadores"),(0,i.kt)("p",null,"Los ",(0,i.kt)("strong",{parentName:"p"},"indexadores")," son una conveniencia sint\xe1ctica que permiten a las instancias de una clase ser indexadas al igual que los arrays. Los indexadores se parecen a las propiedades, excepto que sus descriptores de acceso toman par\xe1metros."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'class Dias\n{\n    string [] dias = {"Lunes","Martes","Miercoles","Jueves","Viernes"};\n\n    public string this[int index]\n    {\n        get \n        {\n            return dias[index];\n        }\n        set\n        {\n             dias[index] = value;\n        }\n    }\n\n}\nclass Program\n{\n   static void Main()\n   {\n       Dias d = new Dias();\n\n       Console.WriteLine(d[2]);\n   }\n}\n// El ejemplo muestra la siguiente salida:\n//    Miercoles\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Un descriptor de acceso ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," devuelve un valor. Un descriptor de acceso ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," asigna un valor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La palabra reservada ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," se utiliza para definir el indexador.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La palabra reservada ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," se utiliza para definir el valor que asigna el ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No es necesario indexar s\xf3lo con n\xfameros enteros.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Los indexadores pueden estar sobrecargados.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Los indexadores pueden tener m\xe1s de un par\xe1metro formal, por ejemplo, para acceder a una matriz bidimensional."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Atenci\xf3n")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aseg\xfarese de incorporar alg\xfan tipo de estrategia de manejo de errores para manejar la posibilidad de que el usuario de la clase pase un valor de \xedndice no v\xe1lido."))))}m.isMDXComponent=!0}}]);
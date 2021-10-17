"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[6465],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(k,o(o({ref:a},d),{},{components:t})):n.createElement(k,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1842:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={title:"Apuntes - Encapsulamiento",sidebar_label:"Encapsulamiento",slug:"/clases/encapsulamiento/apuntes/encapsulamiento",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},s={unversionedId:"clases/encapsulamiento/Apuntes/encapsulamiento",id:"clases/encapsulamiento/Apuntes/encapsulamiento",isDocsHomePage:!1,title:"Apuntes - Encapsulamiento",description:"Encapsulamiento",source:"@site/docs/clases/07-encapsulamiento/Apuntes/00-encapsulamiento.md",sourceDirName:"clases/07-encapsulamiento/Apuntes",slug:"/clases/encapsulamiento/apuntes/encapsulamiento",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/encapsulamiento",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1632109048,formattedLastUpdatedAt:"9/20/2021",sidebar_label:"Encapsulamiento",sidebarPosition:0,frontMatter:{title:"Apuntes - Encapsulamiento",sidebar_label:"Encapsulamiento",slug:"/clases/encapsulamiento/apuntes/encapsulamiento",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"\xcdndice - Encapsulamiento",permalink:"/programacion_2_laboratorio_2_apuntes/docs/encapsulamiento"},next:{title:"propiedades",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/propiedades"}},c=[{value:"Encapsulamiento",id:"encapsulamiento",children:[{value:"Niveles de ocultamiento / accesibilidad",id:"niveles-de-ocultamiento--accesibilidad",children:[]},{value:"Resumen",id:"resumen",children:[]}]}],d={toc:c};function p(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"encapsulamiento"},"Encapsulamiento"),(0,l.kt)("p",null,"El ",(0,l.kt)("strong",{parentName:"p"},"encapsulamiento o encapsulaci\xf3n")," es otro de los pilares de la programaci\xf3n orientada a objetos. El encapsulamiento retoma justo donde nos deja el pilar que vimos anteriormente, la abstracci\xf3n. Recordemos que la abstracci\xf3n es la habilidad de representar algo complejo de una forma simple, qued\xe1ndonos con lo que resulta relevante dentro del contexto de negocio o problema que queremos resolver. De aplicar la abstracci\xf3n a un determinado problema se desprende el dise\xf1o de las clases que dar\xe1n forma a la implementaci\xf3n de la soluci\xf3n. "),(0,l.kt)("p",null,"La ",(0,l.kt)("strong",{parentName:"p"},"interfaz de una clase")," es el grupo de m\xe9todos p\xfablicos (incluyendo getters y setters) que expone la clase, es una abstracci\xf3n de la implementaci\xf3n de la soluci\xf3n que se esconde tras esa interfaz. "),(0,l.kt)("p",null,"El encapsulamiento nos ayuda a manejar la complejidad de la soluci\xf3n al restringir el acceso de los usuarios de la clase (otros desarrolladores) a dicha complejidad. "),(0,l.kt)("p",null,"C#, como otros lenguajes orientados a objetos, nos permite proteger o crear l\xedmites de acceso a los atributos y m\xe9todos de una clase, controlando con ello el comportamiento fuera y dentro de la misma clase."),(0,l.kt)("p",null,"La encapsulaci\xf3n se encarga de mantener ocultos los procesos internos de un objeto, d\xe1ndole a lxs programadxr que lo utilicen acceso s\xf3lo a lo que necesitan."),(0,l.kt)("h3",{id:"niveles-de-ocultamiento--accesibilidad"},"Niveles de ocultamiento / accesibilidad"),(0,l.kt)("p",null,"Los ",(0,l.kt)("strong",{parentName:"p"},"modificadores de acceso")," son palabras clave que se utilizan para especificar la accesibilidad declarada de una clase o miembro de una clase. El nivel de accesibilidad controla si se puede usar desde otra clase dentro del mismo proyecto o en otros proyectos. "),(0,l.kt)("p",null,"Los siguientes seis niveles de accesibilidad se pueden especificar mediante los modificadores de acceso:"),(0,l.kt)("h4",{id:"public"},"Public"),(0,l.kt)("p",null,"El acceso no est\xe1 restringido. Se puede acceder a una clase o miemebro ",(0,l.kt)("em",{parentName:"p"},"public")," desde cualquier otro c\xf3digo en el mismo proyecto u otro proyecto que haga referencia a \xe9l."),(0,l.kt)("h4",{id:"private"},"Private"),(0,l.kt)("p",null,"El acceso est\xe1 limitado al tipo contenedor. S\xf3lo se puede acceder a una clase o miembro ",(0,l.kt)("em",{parentName:"p"},"private")," desde la misma ",(0,l.kt)("em",{parentName:"p"},"clase")," o ",(0,l.kt)("em",{parentName:"p"},"struc"),"."),(0,l.kt)("h4",{id:"protected"},"Protected"),(0,l.kt)("p",null,"El acceso est\xe1 limitado a la clase contenedora o las derivadas de la clase contenedora.  Se puede acceder al miembro ",(0,l.kt)("em",{parentName:"p"},"protected")," desde la misma clase o su derivada."),(0,l.kt)("h4",{id:"internal"},"Internal"),(0,l.kt)("p",null,"El acceso est\xe1 limitado al proyecto actual. Se puede acceder a una clase o miembro ",(0,l.kt)("em",{parentName:"p"},"private")," desde cualquier c\xf3digo del mismo proyecto, pero no desde otro proyectos."),(0,l.kt)("h4",{id:"protected-internal"},"Protected Internal"),(0,l.kt)("p",null,"El acceso est\xe1 limitado al proyecto actual o las derivadas de la clase contenedora. Se puede acceder a una clase o miembro ",(0,l.kt)("em",{parentName:"p"},"protected internal"),"  desde cualquier c\xf3digo en el proyecto en el que est\xe1 declarado, o desde una clase derivada en otro proyecto."),(0,l.kt)("h4",{id:"private-protected"},"Private Protected"),(0,l.kt)("p",null,"El acceso est\xe1 limitado a la clase contenedora o las derivadas de la clase contenedora dentro del proyecto actual. Se puede acceder a una clase o miembro ",(0,l.kt)("em",{parentName:"p"},"private protected")," s\xf3lo en la clase que lo declar\xf3 o sus derivadas siempre dentor del mismo proyecto."),(0,l.kt)("h3",{id:"resumen"},"Resumen"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Desde donde se llama"),(0,l.kt)("th",{parentName:"tr",align:null},"public"),(0,l.kt)("th",{parentName:"tr",align:null},"protected"),(0,l.kt)("th",{parentName:"tr",align:null},"internal"),(0,l.kt)("th",{parentName:"tr",align:null},"protected internal"),(0,l.kt)("th",{parentName:"tr",align:null},"private protected"),(0,l.kt)("th",{parentName:"tr",align:null},"private"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dentro de la clase"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clase derivada (mismo proyecto)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clase no derivada (mismo proyecto)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clase derivada (proyecto diferente)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clase no derivada (proyecto diferente)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("p",null,"El siguiente ejemplo demuestran c\xf3mo especificar modificadores de acceso en una clase y miembro:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Bicicleta\n{\n    public void Pedalear() { }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Atenci\xf3n")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"No todos los modificadores de acceso son v\xe1lidos para todas los clases o miembros en todos los contextos. En algunos casos, la accesibilidad de un miembro est\xe1 limitada por la accesibilidad de su clase contenedora."),(0,l.kt)("p",{parentName:"div"},"Los operadores definidos por lxs programadorxs siempre deben declararse como public y static"))))}p.isMDXComponent=!0}}]);
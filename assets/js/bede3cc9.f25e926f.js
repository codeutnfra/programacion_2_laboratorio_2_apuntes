"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[6521],{3905:function(e,o,n){n.d(o,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var o=r.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:o},u),{},{components:n})):r.createElement(f,i({ref:o},u))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1394:function(e,o,n){n.r(o),n.d(o,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),t=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Apuntes - Windows Forms",sidebar_label:"Definici\xf3n",slug:"/clases/forms/apuntes/definicion",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},l={unversionedId:"clases/forms/Apuntes/definicion",id:"clases/forms/Apuntes/definicion",isDocsHomePage:!1,title:"Apuntes - Windows Forms",description:"Introducci\xf3n a Windows Forms",source:"@site/docs/clases/05-forms/Apuntes/00-definicion.md",sourceDirName:"clases/05-forms/Apuntes",slug:"/clases/forms/apuntes/definicion",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/forms/apuntes/definicion",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1632025929,formattedLastUpdatedAt:"9/19/2021",sidebar_label:"Definici\xf3n",sidebarPosition:0,frontMatter:{title:"Apuntes - Windows Forms",sidebar_label:"Definici\xf3n",slug:"/clases/forms/apuntes/definicion",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"\xcdndice - Windows Forms",permalink:"/programacion_2_laboratorio_2_apuntes/docs/forms"},next:{title:"Cuestionario - Windows Forms",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/forms/apuntes/cuestionario"}},c=[{value:"Introducci\xf3n a Windows Forms",id:"introducci\xf3n-a-windows-forms",children:[{value:"\xbfQue son los formularios de Windows?",id:"que-son-los-formularios-de-windows",children:[]},{value:"Composici\xf3n",id:"composici\xf3n",children:[]},{value:"Propiedades y m\xe9todos de los formularios",id:"propiedades-y-m\xe9todos-de-los-formularios",children:[]}]},{value:"Creacion de proyecto",id:"creacion-de-proyecto",children:[]},{value:"Creando un login con Windows Forms",id:"creando-un-login-con-windows-forms",children:[]}],u={toc:c};function d(e){var o=e.components,s=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introducci\xf3n-a-windows-forms"},"Introducci\xf3n a Windows Forms"),(0,a.kt)("h3",{id:"que-son-los-formularios-de-windows"},"\xbfQue son los formularios de Windows?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows Forms")," es una tecnolog\xeda que permite crear aplicaciones gr\xe1ficas para escritorio en Windows. Ofrece capacidades para definir visualmente todo tipo de ventanas y controles dentro de \xe9stas, y adem\xe1s facilita la creaci\xf3n de interfaces orientadas al manejo de datos gracias a sus capacidades de enlace bi-direccional a datos (capa l\xf3gica - capa visual)."),(0,a.kt)("p",null,"Los ",(0,a.kt)("strong",{parentName:"p"},"formularios")," son objetos que derivan de la clase ",(0,a.kt)("inlineCode",{parentName:"p"},"Form")," perteneciente al namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Windows.Forms"),". "),(0,a.kt)("p",null,"Al ser objetos, exponen propiedades, poseen m\xe9todos y tambi\xe9n eventos que permiten la interacci\xf3n con el usuario."),(0,a.kt)("h3",{id:"composici\xf3n"},"Composici\xf3n"),(0,a.kt)("p",null,"Como mencionamos anteriormente, los formularios son objetos. Los mismos parten de una clase com\xfan y corriente pero con una peque\xf1a diferencia: las clases tienen la particularidad de ser ",(0,a.kt)("strong",{parentName:"p"},"partial class"),". Esto significa que es una \xfanica clase partida en dos partes: la parte visual (interfaz que ve el usuario) y la parte l\xf3gica donde detallamos su composicion."),(0,a.kt)("h3",{id:"propiedades-y-m\xe9todos-de-los-formularios"},"Propiedades y m\xe9todos de los formularios"),(0,a.kt)("p",null,"Los formularios, al ser objetos, poseen propiedades y m\xe9todos. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Propiedades:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name"),(0,a.kt)("li",{parentName:"ul"},"BackColor"),(0,a.kt)("li",{parentName:"ul"},"Text "),(0,a.kt)("li",{parentName:"ul"},"Visible"),(0,a.kt)("li",{parentName:"ul"},"Size"),(0,a.kt)("li",{parentName:"ul"},"Enabled"),(0,a.kt)("li",{parentName:"ul"},"Font"),(0,a.kt)("li",{parentName:"ul"},"ForeColorcls"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"M\xe9todos:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Show()"),(0,a.kt)("li",{parentName:"ul"},"ShowDialog()"),(0,a.kt)("li",{parentName:"ul"},"Close()"),(0,a.kt)("li",{parentName:"ul"},"Hide()")))),(0,a.kt)("h2",{id:"creacion-de-proyecto"},"Creacion de proyecto"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Template Windows Forms Visual Studio",src:n(4099).Z})),(0,a.kt)("h2",{id:"creando-un-login-con-windows-forms"},"Creando un login con Windows Forms"),(0,a.kt)("p",null,"En el siguiente video, Lucas nos explica los conceptos clave para trabajar con Windows Forms y construye a modo de ejemplo una ventana de autenticaci\xf3n (login)."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-4BuCOuE5YA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},4099:function(e,o,n){o.Z=n.p+"assets/images/crearprog-bbbda3ae48a693edc2119df774c66036.png"}}]);
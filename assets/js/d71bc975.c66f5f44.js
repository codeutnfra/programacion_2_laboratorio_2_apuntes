"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1970],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?t.createElement(v,l(l({ref:a},d),{},{components:n})):t.createElement(v,l({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},268:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_label:"Propiedades",slug:"/clases/encapsulamiento/apuntes/propiedades",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null},s=void 0,p={unversionedId:"clases/encapsulamiento/Apuntes/propiedades",id:"clases/encapsulamiento/Apuntes/propiedades",isDocsHomePage:!1,title:"propiedades",description:"Propiedades",source:"@site/docs/clases/07-encapsulamiento/Apuntes/01-propiedades.md",sourceDirName:"clases/07-encapsulamiento/Apuntes",slug:"/clases/encapsulamiento/apuntes/propiedades",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/apuntes/propiedades",version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1629424106,formattedLastUpdatedAt:"8/19/2021",sidebarPosition:1,frontMatter:{sidebar_label:"Propiedades",slug:"/clases/encapsulamiento/apuntes/propiedades",hide_table_of_contents:!1,hide_title:!0,author:null,authorURL:null}},d=[{value:"Propiedades",id:"propiedades",children:[]}],c={toc:d};function u(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"propiedades"},"Propiedades"),(0,o.kt)("p",null,"Una propiedad es un miembro que proporciona un mecanismo flexible para leer, escribir o calcular el valor de un campo. Las propiedades se pueden usar como si fueran miembros de datos p\xfablicos, pero en realidad son m\xe9todos especiales llamados ",(0,o.kt)("em",{parentName:"p"},"descriptores de acceso")," . Esto permite acceder f\xe1cilmente a los datos de manera segura."),(0,o.kt)("p",null,"Las propiedades permiten que una clase exponga una forma p\xfablica de obtener y establecer valores, mientras oculta el c\xf3digo de implementaci\xf3n o validaci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"class Clase\n{\n    private [tipo_dato] campo;\n\n    public [tipo_dato] Propiedad\n    {\n        get\n        {\n            return campo;\n        }\n        set\n        {\n            campo = value;\n        }\n    }\n\n}\n")),(0,o.kt)("p",null,"Analicemos el c\xf3digo anterior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,o.kt)("strong",{parentName:"li"},"get")," define un m\xe9todo de ",(0,o.kt)("em",{parentName:"li"},"acceso")," en una propiedad que devuelve el valor de la propiedad. Debe devolver un valor del tipo de propiedad. Equivale a leer el valor del campo"),(0,o.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,o.kt)("strong",{parentName:"li"},"set")," define un m\xe9todo de ",(0,o.kt)("em",{parentName:"li"},"acceso")," en una propiedad que asigna el valor a la propiedad."),(0,o.kt)("li",{parentName:"ul"},"La palabra reservada ",(0,o.kt)("strong",{parentName:"li"},"value")," se utiliza como un p\xe1rametro impl\xedcito para definir el valor que asigna el ",(0,o.kt)("em",{parentName:"li"},"set")," al campo. "),(0,o.kt)("li",{parentName:"ul"},"Las propiedades pueden ser de lectura y escritura (tienen un get y un set), de s\xf3lo lectura (tienen s\xf3lo un get) o de solo escritura (tienen s\xf3lo un set). ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class IntervaloTiempo\n{\n    private double segundos;\n\n    public double Horas\n    {\n       get { return segundos / 3600; }\n       set {\n          if (value < 0 || value > 24)\n             throw new ArgumentOutOfRangeException();\n\n          segundos = value * 3600;\n       }\n   }\n}\n\nclass Program\n{\n   static void Main()\n   {\n       IntervaloTiempo t = new IntervaloTiempo();\n       // Al asignar un valor a una propiedad invocamos el metodo de acceso set\n       t.Hours = 24;\n\n       // Al recuperar el valor de la propiedad estamos invocando el m\xe9todo de acceso get \n       Console.WriteLine($"El intervalo en horas es: {t.Hours}");\n   }\n}\n// El ejemplo muestra la siguiente salida:\n//    El intervalo en horas es: 24\n')),(0,o.kt)("p",null,"En este ejemplo, la clase representa un intervalo de tiempo. Internamente, la clase almacena el intervalo de tiempo en segundos en un campo privado llamado ",(0,o.kt)("em",{parentName:"p"},"segundo"),". Una propiedad de lectura y escritura denominada ",(0,o.kt)("em",{parentName:"p"},"Horas")," permite al usuario de la clase especificar el intervalo de tiempo en horas. Tanto el ",(0,o.kt)("em",{parentName:"p"},"get")," como el ",(0,o.kt)("em",{parentName:"p"},"set")," realizan la conversi\xf3n necesaria entre horas y segundos. Adem\xe1s, el ",(0,o.kt)("em",{parentName:"p"},"set")," valida los datos y lanza una ArgumentOutOfRangeException si el n\xfamero de horas no es v\xe1lido."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Atenci\xf3n")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Las propiedades pueden ser marcados como ",(0,o.kt)("code",null,"public"),", ",(0,o.kt)("code",null,"private"),", ",(0,o.kt)("code",null,"protected"),",",(0,o.kt)("code",null,"internal")," , ",(0,o.kt)("code",null,"protected internal"),", o ",(0,o.kt)("code",null,"private protected")," . Estos modificadores de acceso definen c\xf3mo los usuarios de la clase pueden acceder a la propiedad. Los descriptores de acceso ",(0,o.kt)("code",null,"get")," y ",(0,o.kt)("code",null,"set")," para la misma propiedad pueden tener diferentes modificadores de acceso. Por ejemplo, ",(0,o.kt)("code",null,"get")," puede ser ",(0,o.kt)("code",null,"public")," para permitir el acceso de solo lectura desde fuera de la clase, y ",(0,o.kt)("code",null,"set")," puede ser ",(0,o.kt)("code",null,"private")," o ",(0,o.kt)("code",null,"protected"),"."))))}u.isMDXComponent=!0}}]);
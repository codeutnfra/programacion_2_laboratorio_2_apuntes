"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[8395],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return b}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||r;return n?t.createElement(m,s(s({ref:a},u),{},{components:n})):t.createElement(m,s({ref:a},u))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73464:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],c={sidebar_label:"Clases",slug:"/clases/objetos/apuntes/clases",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},l=void 0,i={unversionedId:"clases/objetos/Apuntes/clases",id:"clases/objetos/Apuntes/clases",title:"clases",description:"Clases",source:"@site/docs/clases/03-objetos/Apuntes/02-clases.md",sourceDirName:"clases/03-objetos/Apuntes",slug:"/clases/objetos/apuntes/clases",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/clases",draft:!1,tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1656290641,formattedLastUpdatedAt:"6/26/2022",sidebarPosition:2,frontMatter:{sidebar_label:"Clases",slug:"/clases/objetos/apuntes/clases",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Abstracci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/abstraccion"},next:{title:"Objetos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/apuntes/objetos"}},u={},p=[{value:"Clases",id:"clases",level:2},{value:"Declaraci\xf3n",id:"declaraci\xf3n",level:3},{value:"Creando Objetos",id:"creando-objetos",level:3}],d={toc:p};function b(e){var a=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clases"},"Clases"),(0,r.kt)("p",null,"Un tipo que se define como una clase es un tipo de referencia . En tiempo de ejecuci\xf3n, cuando declara una variable de un tipo de referencia, la variable contiene el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," hasta que crea expl\xedcitamente una instancia de la clase utilizando el operador ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," , o le asigna un objeto de un tipo compatible que puede haber sido creado en otro lugar, como se muestra en el siguiente ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"MyClass mc = new MyClass();\n\nMyClass mc2 = mc;\n")),(0,r.kt)("h3",{id:"declaraci\xf3n"},"Declaraci\xf3n"),(0,r.kt)("p",null,"Las clases se declaran utilizando la palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," seguida de un identificador."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Customer\n{\n   // \n}\n")),(0,r.kt)("p",null,"La palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," est\xe1 precedida por el nivel de acceso. Debido a que se usa en este caso ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),", cualquiera puede crear instancias de esta clase. El nombre de la clase sigue a la palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),". El nombre de la clase debe ser sustantivo singular. El resto de la definici\xf3n es el cuerpo de la clase, donde se definen el comportamiento y los datos. Los campos, las propiedades, los m\xe9todos y los eventos de una clase se denominan colectivamente miembros de la clase."),(0,r.kt)("h3",{id:"creando-objetos"},"Creando Objetos"),(0,r.kt)("p",null,"Aunque a veces se usan indistintamente, una clase y un objeto son cosas diferentes. Una clase define un tipo de objeto, pero no es un objeto en s\xed mismo. Un objeto es una entidad concreta basada en una clase y, a veces, se lo denomina instancia de una clase."),(0,r.kt)("p",null,"Los objetos se pueden crear utilizando la palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"  seguida del nombre de la clase en la que se basar\xe1 el objeto, as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Customer object1 = new Customer();\n")),(0,r.kt)("p",null,"Cuando se crea una instancia de una clase, se devuelve una referencia al objeto. En el ejemplo anterior, ",(0,r.kt)("inlineCode",{parentName:"p"},"object1")," es una referencia a un objeto que se basa en ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer"),". Esta referencia apunta al nuevo objeto pero no contiene los datos del objeto en s\xed. De hecho, puede crear una referencia de objeto sin crear ning\xfan objeto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Customer object2;\n")),(0,r.kt)("p",null,"No recomendamos crear referencias a objetos como la anterior que no hacen referencia a un objeto porque intentar acceder a un objeto a trav\xe9s de dicha referencia fallar\xe1 en tiempo de ejecuci\xf3n. Sin embargo, dicha referencia se puede hacer para referirse a un objeto, ya sea creando un nuevo objeto o asign\xe1ndole un objeto existente, como este:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Customer object3 = new Customer();\nCustomer object4 = object3;\n")),(0,r.kt)("p",null,"Este c\xf3digo crea dos referencias a objetos que hacen referencia al mismo objeto. Por lo tanto, cualquier cambio que se realice en el objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"object3")," se refleja en los usos posteriores de ",(0,r.kt)("inlineCode",{parentName:"p"},"object4"),". Debido a que se hace referencia a los objetos que se basan en clases, las clases se conocen como tipos de referencia."))}b.isMDXComponent=!0}}]);
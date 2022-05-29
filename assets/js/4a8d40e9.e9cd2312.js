"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1577],{3905:function(e,a,r){r.d(a,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),c=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=t,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:a},u),{},{components:r})):n.createElement(f,o({ref:a},u))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3796:function(e,a,r){r.r(a),r.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),t=r(3366),s=(r(7294),r(3905)),o=["components"],l={sidebar_label:"Clases selladas",slug:"/clases/herencia/apuntes/clases-selladas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},i=void 0,c={unversionedId:"clases/herencia/Apuntes/clases-selladas",id:"clases/herencia/Apuntes/clases-selladas",title:"clases-selladas",description:"Clases selladas",source:"@site/docs/clases/08-herencia/Apuntes/02-clases-selladas.md",sourceDirName:"clases/08-herencia/Apuntes",slug:"/clases/herencia/apuntes/clases-selladas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/herencia/apuntes/clases-selladas",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1632109048,formattedLastUpdatedAt:"9/20/2021",sidebarPosition:2,frontMatter:{sidebar_label:"Clases selladas",slug:"/clases/herencia/apuntes/clases-selladas",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Implementando herencia en C#",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/herencia/apuntes/herencia-csharp"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/herencia/apuntes/cuestionario"}},u={},p=[{value:"Clases selladas",id:"clases-selladas",level:2}],d={toc:p};function m(e){var a=e.components,r=(0,t.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clases-selladas"},"Clases selladas"),(0,s.kt)("p",null,"Existe la posibilidad de marcar una clase para que no pueda ser heredada (no pueda ser base). Para poder lograr esto agregaremos el modificador ",(0,s.kt)("inlineCode",{parentName:"p"},"sealed")," a la declaraci\xf3n definiendo a la clase como ",(0,s.kt)("strong",{parentName:"p"},"sellada"),". De esta manera explicitaremos que nuestra clase no puede tener clases hijas. "),(0,s.kt)("p",null,"Es importante recordar que gran parte de las clases son aut\xf3nomas y no est\xe1n pensadas para ser heredadas, en estos casos declararlas como selladas ser\xeda correcto. Tambi\xe9n se utilizan este tipo de clases para marcar el fin dentro de una jerarqu\xeda de herencia. "),(0,s.kt)("p",null,"Las clases selladas no pueden ser base pero s\xed pueden ser derivadas, es decir, heredar de otras clases. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'public sealed class Estudiante : Persona\n{\n    private int legajo;\n    private List<string> materias;\n\n    public string Estudiar() \n    {   \n        return "Estudiando...";\n    }\n}\n')),(0,s.kt)("p",null,"En el ejemplo anterior ",(0,s.kt)("inlineCode",{parentName:"p"},"Estudiante")," hereda de ",(0,s.kt)("inlineCode",{parentName:"p"},"Persona")," pero no podr\xe1 ser base de ninguna clase ya que fue declarada con el modificador ",(0,s.kt)("inlineCode",{parentName:"p"},"sealed"),", es una clase sellada."))}m.isMDXComponent=!0}}]);
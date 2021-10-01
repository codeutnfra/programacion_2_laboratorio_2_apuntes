"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7658],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function M(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},L=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),L=l(t),y=r,d=L["".concat(o,".").concat(y)]||L[y]||s[y]||i;return t?a.createElement(d,c(c({ref:n},u),{},{components:t})):a.createElement(d,c({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=L;var M={};for(var o in n)hasOwnProperty.call(n,o)&&(M[o]=n[o]);M.originalType=e,M.mdxType="string"==typeof e?e:r,c[1]=M;for(var l=2;l<i;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}L.displayName="MDXCreateElement"},4418:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return M},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return L}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),c=["components"],M={sidebar_label:"I01 - Lanzar y atrapar",title:"Ejercicio I01 - Lanzar y atrapar",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,l={unversionedId:"clases/generics/Ejercicios/I01-lanzar-y-atrapar",id:"clases/generics/Ejercicios/I01-lanzar-y-atrapar",isDocsHomePage:!1,title:"Ejercicio I01 - Lanzar y atrapar",description:"---",source:"@site/docs/clases/12-generics/Ejercicios/I01-lanzar-y-atrapar.md",sourceDirName:"clases/12-generics/Ejercicios",slug:"/clases/generics/Ejercicios/I01-lanzar-y-atrapar",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/generics/Ejercicios/I01-lanzar-y-atrapar",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Lanzar y atrapar",title:"Ejercicio I01 - Lanzar y atrapar",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1}},u=[{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],s={toc:u};function L(e){var n=e.components,M=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,M,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"consigna"},"Consigna"),(0,i.kt)("p",null,"Crear una aplicaci\xf3n de consola y agregar el c\xf3digo necesario para:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Crear dos excepciones propias (nuevas clases que hereden de ",(0,i.kt)("inlineCode",{parentName:"li"},"Exception"),") con los nombres ",(0,i.kt)("inlineCode",{parentName:"li"},"UnaExcepcion")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"MiExcepcion"),"."),(0,i.kt)("li",{parentName:"ol"},"Crear una clase llamada ",(0,i.kt)("inlineCode",{parentName:"li"},"MiClase")," y dentro colocar un m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"est\xe1tico")," y dos constructores ",(0,i.kt)("strong",{parentName:"li"},"de instancia"),"."),(0,i.kt)("li",{parentName:"ol"},"Dentro del m\xe9todo est\xe1tico lanzar una excepci\xf3n ",(0,i.kt)("inlineCode",{parentName:"li"},"DivideByZeroException")," (s\xf3lo lanzarla)."),(0,i.kt)("li",{parentName:"ol"},"Capturar la excepci\xf3n del punto anterior en uno de los constructores de instancia y relanzarla hacia el otro constructor de instancia."),(0,i.kt)("li",{parentName:"ol"},"En este segundo constructor se deber\xe1 instanciar otro objeto del tipo ",(0,i.kt)("inlineCode",{parentName:"li"},"MiClase"),", capturando su excepci\xf3n. Crear una excepci\xf3n propia llamada ",(0,i.kt)("inlineCode",{parentName:"li"},"UnaException")," (utilizar la propiedad ",(0,i.kt)("inlineCode",{parentName:"li"},"InnerException")," para almacenar la excepci\xf3n original) y volver a lanzarla."),(0,i.kt)("li",{parentName:"ol"},"Generar la clase ",(0,i.kt)("inlineCode",{parentName:"li"},"OtraClase")," con un m\xe9todo de instancia, donde se instancie un objeto ",(0,i.kt)("inlineCode",{parentName:"li"},"MiClase")," y se capture la excepci\xf3n anterior. Este m\xe9todo generar\xe1 una excepci\xf3n propia llamada ",(0,i.kt)("inlineCode",{parentName:"li"},"MiException")," y la lanzar\xe1."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"MiException")," ser\xe1 capturada en el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"Main"),", mostrando el mensaje de error que esta almacena por pantalla y los mensajes de todas las excepciones almacenadas en sus propiedades ",(0,i.kt)("inlineCode",{parentName:"li"},"InnerException"),".")),(0,i.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:t(155).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:t(5853).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},5853:function(e,n){n.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,n){n.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
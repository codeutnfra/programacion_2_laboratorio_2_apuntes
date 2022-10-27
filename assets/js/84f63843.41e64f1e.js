"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7726],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return L}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var M=n.createContext({}),l=function(e){var t=n.useContext(M),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(M.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,M=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(a),L=i,d=p["".concat(M,".").concat(L)]||p[L]||u[L]||r;return a?n.createElement(d,c(c({ref:t},s),{},{components:a})):n.createElement(d,c({ref:t},s))}));function L(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=p;var o={};for(var M in t)hasOwnProperty.call(t,M)&&(o[M]=t[M]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25491:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return M},default:function(){return L},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),c=["components"],o={sidebar_label:"I01 - Lanzar y atrapar",title:"Ejercicio I01 - Lanzar y atrapar",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},M=void 0,l={unversionedId:"clases/excepciones/Ejercicios/I01-lanzar-y-atrapar",id:"clases/excepciones/Ejercicios/I01-lanzar-y-atrapar",title:"Ejercicio I01 - Lanzar y atrapar",description:"---",source:"@site/docs/clases/10-excepciones/Ejercicios/I01-lanzar-y-atrapar.md",sourceDirName:"clases/10-excepciones/Ejercicios",slug:"/clases/excepciones/Ejercicios/I01-lanzar-y-atrapar",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/excepciones/Ejercicios/I01-lanzar-y-atrapar",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1632363180,formattedLastUpdatedAt:"9/22/2021",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Lanzar y atrapar",title:"Ejercicio I01 - Lanzar y atrapar",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/excepciones/apuntes/cuestionario"},next:{title:"I02 - Atrapame si puedes...",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/excepciones/Ejercicios/I02-atrapame-si-puedes"}},s={},u=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],p={toc:u};function L(e){var t=e.components,o=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"consigna"},"Consigna"),(0,r.kt)("p",null,"Crear una aplicaci\xf3n de consola y agregar el c\xf3digo necesario para:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crear dos excepciones propias (nuevas clases que hereden de ",(0,r.kt)("inlineCode",{parentName:"li"},"Exception"),") con los nombres ",(0,r.kt)("inlineCode",{parentName:"li"},"UnaExcepcion")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"MiExcepcion"),"."),(0,r.kt)("li",{parentName:"ol"},"Crear una clase llamada ",(0,r.kt)("inlineCode",{parentName:"li"},"MiClase")," y dentro colocar un m\xe9todo ",(0,r.kt)("strong",{parentName:"li"},"est\xe1tico")," y dos constructores ",(0,r.kt)("strong",{parentName:"li"},"de instancia"),"."),(0,r.kt)("li",{parentName:"ol"},"Dentro del m\xe9todo est\xe1tico lanzar una excepci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"DivideByZeroException")," (s\xf3lo lanzarla)."),(0,r.kt)("li",{parentName:"ol"},"Capturar la excepci\xf3n del punto anterior en uno de los constructores de instancia y relanzarla hacia el otro constructor de instancia."),(0,r.kt)("li",{parentName:"ol"},"En este segundo constructor se deber\xe1 instanciar otro objeto del tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"MiClase"),", capturando su excepci\xf3n. Crear una excepci\xf3n propia llamada ",(0,r.kt)("inlineCode",{parentName:"li"},"UnaException")," (utilizar la propiedad ",(0,r.kt)("inlineCode",{parentName:"li"},"InnerException")," para almacenar la excepci\xf3n original) y volver a lanzarla."),(0,r.kt)("li",{parentName:"ol"},"Generar la clase ",(0,r.kt)("inlineCode",{parentName:"li"},"OtraClase")," con un m\xe9todo de instancia, donde se instancie un objeto ",(0,r.kt)("inlineCode",{parentName:"li"},"MiClase")," y se capture la excepci\xf3n anterior. Este m\xe9todo generar\xe1 una excepci\xf3n propia llamada ",(0,r.kt)("inlineCode",{parentName:"li"},"MiException")," y la lanzar\xe1."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MiException")," ser\xe1 capturada en el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"li"},"Main"),", mostrando el mensaje de error que esta almacena por pantalla y los mensajes de todas las excepciones almacenadas en sus propiedades ",(0,r.kt)("inlineCode",{parentName:"li"},"InnerException"),".")),(0,r.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:a(64746).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:a(86726).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},86726:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},64746:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
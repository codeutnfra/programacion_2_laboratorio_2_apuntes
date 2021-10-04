"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[2774],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=a.createContext({}),u=function(e){var t=a.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(M.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,M=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),L=u(n),d=r,y=L["".concat(M,".").concat(d)]||L[d]||l[d]||i;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=L;var o={};for(var M in t)hasOwnProperty.call(t,M)&&(o[M]=t[M]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},8001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return M},metadata:function(){return u},toc:function(){return s},default:function(){return L}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],o={sidebar_label:"A01 - Vienen con sistema de auto-navegaci\xf3n",title:"Ejercicio A01 - Vienen con sistema de auto-navegaci\xf3n",sidebar_position:101,author:"Lucas Rodr\xedguez",authorURL:null,hide_table_of_contents:!0,hide_title:!1},M=void 0,u={unversionedId:"clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion",id:"clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion",isDocsHomePage:!1,title:"Ejercicio A01 - Vienen con sistema de auto-navegaci\xf3n",description:"---",source:"@site/docs/clases/03-objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion.md",sourceDirName:"clases/03-objetos/Ejercicios",slug:"/clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1631932762,formattedLastUpdatedAt:"9/17/2021",sidebarPosition:101,frontMatter:{sidebar_label:"A01 - Vienen con sistema de auto-navegaci\xf3n",title:"Ejercicio A01 - Vienen con sistema de auto-navegaci\xf3n",sidebar_position:101,author:"Lucas Rodr\xedguez",authorURL:null,hide_table_of_contents:!0,hide_title:!1}},s=[{value:"Requerimiento",id:"requerimiento",children:[]},{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],l={toc:s};function L(e){var t=e.components,o=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requerimiento"},"Requerimiento"),(0,i.kt)("p",null,"De una empresa de transporte de cargas se quiere guardar el nombre de los conductores y los kil\xf3metros que conducen cada d\xeda de la semana."),(0,i.kt)("p",null,"Para guardar esta informaci\xf3n, la empresa de transporte tendr\xe1 un array de conductores."),(0,i.kt)("p",null,"De cada conductor se tendr\xe1 la siguiente informaci\xf3n:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nombre del conductor."),(0,i.kt)("li",{parentName:"ul"},"Kilometros recorridos por cada d\xeda de la semana. Por ejemplo:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"D\xeda 1: 200"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 2: 599"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 3: 899"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 4: 0 (tiene franco)"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 5: 256"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 6: 0"),(0,i.kt)("li",{parentName:"ul"},"D\xeda 7: 0")))),(0,i.kt)("h3",{id:"consigna"},"Consigna"),(0,i.kt)("p",null,"Desarrollar las clases y m\xe9todos necesarios. ",(0,i.kt)("strong",{parentName:"p"},"Toda la l\xf3gica de negocio deber\xe1 estar encapsulada en clases y dentro de un proyecto de tipo biblioteca de clases"),". "),(0,i.kt)("p",null,"Crear un proyecto de consola y en el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"Main")," cargar 3 conductores a la empresa de transportes. "),(0,i.kt)("p",null,"Luego mostrar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"El conductor que hizo m\xe1s km en esa semana."),(0,i.kt)("li",{parentName:"ul"},"El conductor que hizo m\xe1s km el d\xeda 3."),(0,i.kt)("li",{parentName:"ul"},"El conductor que hizo m\xe1s km el d\xeda 5.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.blogs.es/436ff9/sin-conductor/450_1000.jpg",alt:"Homero y Bart Simpson en el cami\xf3n de Red Barclay"})),(0,i.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:n(155).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:n(5853).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
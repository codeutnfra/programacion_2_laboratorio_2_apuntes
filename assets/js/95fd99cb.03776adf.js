"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[764],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return L}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):M(M({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(i),L=r,y=d["".concat(o,".").concat(L)]||d[L]||s[L]||a;return i?n.createElement(y,M(M({ref:t},u),{},{components:i})):n.createElement(y,M({ref:t},u))}));function L(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,M=new Array(a);M[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,M[1]=c;for(var l=2;l<a;l++)M[l]=i[l];return n.createElement.apply(null,M)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3853:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),M=["components"],c={sidebar_label:"I01 - Contabilidad",title:"Ejercicio I01 - Contabilidad",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,l={unversionedId:"clases/generics/Ejercicios/I02-contabilidad",id:"clases/generics/Ejercicios/I02-contabilidad",isDocsHomePage:!1,title:"Ejercicio I01 - Contabilidad",description:"---",source:"@site/docs/clases/12-generics/Ejercicios/I02-contabilidad.md",sourceDirName:"clases/12-generics/Ejercicios",slug:"/clases/generics/Ejercicios/I02-contabilidad",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/generics/Ejercicios/I02-contabilidad",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633324417,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Contabilidad",title:"Ejercicio I01 - Contabilidad",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1}},u=[{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],s={toc:u};function d(e){var t=e.components,c=(0,r.Z)(e,M);return(0,a.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"consigna"},"Consigna"),(0,a.kt)("p",null,"Crear un proyecto de biblioteca de clases y agregar las clases del siguiente diagrama:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagrama de clases",src:i(5867).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crear en ",(0,a.kt)("inlineCode",{parentName:"li"},"Contabilidad")," un constructor que no reciba par\xe1metros e inicialice las listas."),(0,a.kt)("li",{parentName:"ul"},"El constructor sin par\xe1metros de ",(0,a.kt)("inlineCode",{parentName:"li"},"Recibo")," asignar\xe1 0 como n\xfamero de documento."),(0,a.kt)("li",{parentName:"ul"},"Tanto el tipo gen\xe9rico ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," como el ",(0,a.kt)("inlineCode",{parentName:"li"},"U")," deber\xe1n ser del tipo ",(0,a.kt)("inlineCode",{parentName:"li"},"Documento")," o uno de sus derivados."),(0,a.kt)("li",{parentName:"ul"},"El tipo ",(0,a.kt)("inlineCode",{parentName:"li"},"U")," deber\xe1 tener una restricci\xf3n que indique que deber\xe1 tener un constructor p\xfablico y sin par\xe1metros."),(0,a.kt)("li",{parentName:"ul"},"El operador ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," entre ",(0,a.kt)("inlineCode",{parentName:"li"},"Contabilidad")," y ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," agrega un elemento a la lista egresos."),(0,a.kt)("li",{parentName:"ul"},"El operador ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," entre ",(0,a.kt)("inlineCode",{parentName:"li"},"Contabilidad")," y ",(0,a.kt)("inlineCode",{parentName:"li"},"U")," agrega un elemento a la lista ingresos.")),(0,a.kt)("p",null,"Crear un proyecto de consola y generar el c\xf3digo necesario para probar dichas clases."),(0,a.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"img",src:i(155).Z})),(0,a.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"img",src:i(5853).Z})),(0,a.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}d.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},5867:function(e,t,i){t.Z=i.p+"assets/images/contabilidad-diagram-2d1704d0c38002d88916b6399c5e047c.PNG"}}]);
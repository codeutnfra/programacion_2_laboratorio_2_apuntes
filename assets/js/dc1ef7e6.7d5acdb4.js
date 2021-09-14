"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7010],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},L=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),L=s(n),d=a,y=L["".concat(o,".").concat(d)]||L[d]||l[d]||c;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=L;var M={};for(var o in t)hasOwnProperty.call(t,o)&&(M[o]=t[o]);M.originalType=e,M.mdxType="string"==typeof e?e:a,r[1]=M;for(var s=2;s<c;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}L.displayName="MDXCreateElement"},9133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return M},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return L}});var i=n(7462),a=n(3366),c=(n(7294),n(3905)),r=["components"],M={sidebar_label:"I02 - \xbfConsultaste el \xedndice?",title:"Ejercicio I02 - \xbfConsultaste el \xedndice?",sidebar_position:2,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,s={unversionedId:"clases/encapsulamiento/Ejercicios/I02-consultaste-el-indice",id:"clases/encapsulamiento/Ejercicios/I02-consultaste-el-indice",isDocsHomePage:!1,title:"Ejercicio I02 - \xbfConsultaste el \xedndice?",description:"---",source:"@site/docs/clases/07-encapsulamiento/Ejercicios/I02-consultaste-el-indice.md",sourceDirName:"clases/07-encapsulamiento/Ejercicios",slug:"/clases/encapsulamiento/Ejercicios/I02-consultaste-el-indice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/Ejercicios/I02-consultaste-el-indice",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1631595755,formattedLastUpdatedAt:"9/14/2021",sidebarPosition:2,frontMatter:{sidebar_label:"I02 - \xbfConsultaste el \xedndice?",title:"Ejercicio I02 - \xbfConsultaste el \xedndice?",sidebar_position:2,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I01 - Puesto de atenci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/Ejercicios/I01-puesto-de-atencion"},next:{title:"C01 - Jugadores encapsulados",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/encapsulamiento/Ejercicios/C01-jugadores-encapsulados"}},u=[{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],l={toc:u};function L(e){var t=e.components,M=(0,a.Z)(e,r);return(0,c.kt)("wrapper",(0,i.Z)({},l,M,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"consigna"},"Consigna"),(0,c.kt)("p",null,"Crear la clase ",(0,c.kt)("inlineCode",{parentName:"p"},"Libro")," en una biblioteca de clases y el c\xf3digo necesario para acceder a las p\xe1ginas mediante un valor num\xe9rico."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Diagrama de clases",src:n(9055).Z})),(0,c.kt)("p",null,"El descriptor de acceso ",(0,c.kt)("inlineCode",{parentName:"p"},"get")," del indexador leer\xe1 la p\xe1gina pedida, siempre y cuando el sub\xedndice se encuentre dentro de un rango correcto, sino retornar\xe1 un string vac\xedo."),(0,c.kt)("p",null,"En el ",(0,c.kt)("inlineCode",{parentName:"p"},"set"),", si la p\xe1gina existe (existe ese \xedndice) le asignar\xe1 el texto. Si no existe (si el \xedndice es superior al m\xe1ximo existente), agregar\xe1 una nueva p\xe1gina."),(0,c.kt)("p",null,"Crear un proyecto de consola y probar la clase en el m\xe9todo ",(0,c.kt)("inlineCode",{parentName:"p"},"Main"),"."),(0,c.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("img",{alt:"img",src:n(155).Z})),(0,c.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,c.kt)("th",{parentName:"tr",align:"center"},(0,c.kt)("img",{alt:"img",src:n(5853).Z})),(0,c.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},9055:function(e,t,n){t.Z=n.p+"assets/images/diagramaIndice-c22b99bdf40fadd72f8d122855769162.PNG"}}]);
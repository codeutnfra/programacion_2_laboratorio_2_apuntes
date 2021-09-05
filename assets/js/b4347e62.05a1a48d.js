"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[9702],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return L}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),d=s(a),L=r,D=d["".concat(o,".").concat(L)]||d[L]||l[L]||n;return a?i.createElement(D,c(c({ref:t},u),{},{components:a})):i.createElement(D,c({ref:t},u))}));function L(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=d;var M={};for(var o in t)hasOwnProperty.call(t,o)&&(M[o]=t[o]);M.originalType=e,M.mdxType="string"==typeof e?e:r,c[1]=M;for(var s=2;s<n;s++)c[s]=a[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3163:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return M},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),c=["components"],M={sidebar_label:"C01 - Estadistica Deportiva.",title:"Ejercicio C01 - Estadistica Deportiva.",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,s={unversionedId:"clases/colecciones/Ejercicios/C01-estadistica-deportiva",id:"clases/colecciones/Ejercicios/C01-estadistica-deportiva",isDocsHomePage:!1,title:"Ejercicio C01 - Estadistica Deportiva.",description:"---",source:"@site/docs/clases/06-colecciones/Ejercicios/C01-estadistica-deportiva.md",sourceDirName:"clases/06-colecciones/Ejercicios",slug:"/clases/colecciones/Ejercicios/C01-estadistica-deportiva",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/colecciones/Ejercicios/C01-estadistica-deportiva",version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1630513815,formattedLastUpdatedAt:"9/1/2021",frontMatter:{sidebar_label:"C01 - Estadistica Deportiva.",title:"Ejercicio C01 - Estadistica Deportiva.",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1}},u=[{value:"Consigna",id:"consigna",children:[]},{value:"Diagrama de clases",id:"diagrama-de-clases",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],l={toc:u};function d(e){var t=e.components,M=(0,r.Z)(e,c);return(0,n.kt)("wrapper",(0,i.Z)({},l,M,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consigna"},"Consigna"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Crear un proyecto de consola y agregar las clases Jugador y Equipo:")),(0,n.kt)("h4",{id:"clase-jugador"},"Clase Jugador:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Todos los datos estad\xedsticos del Jugador se inicializar\xe1n en 0 dentro del constructor privado."),(0,n.kt)("li",{parentName:"ul"},"El promedio de gol s\xf3lo se calcular\xe1 cuando invoquen al m\xe9todo GetPromedioGoles.\nMostrarDatos retornar\xe1 una cadena de string con todos los datos y estad\xedstica del Jugador."),(0,n.kt)("li",{parentName:"ul"},"Dos jugadores ser\xe1n iguales si tienen el mismo DNI.")),(0,n.kt)("h4",{id:"clase-equipo"},"Clase Equipo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La lista de jugadores se inicializar\xe1 s\xf3lo en el constructor privado de Equipo."),(0,n.kt)("li",{parentName:"ul"},"La sobrecarga del operador + agregar\xe1 jugadores a la lista siempre y cuando este no exista aun en el equipo y la cantidad de jugadores no supere el l\xedmite establecido por el atributo cantidadDeJugadores. ")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Generar las invocaciones necesarias en el Main para probar el c\xf3digo.")),(0,n.kt)("h3",{id:"diagrama-de-clases"},"Diagrama de clases"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagrama de clase Estadistica Deportiva",src:a(6502).Z})),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(155).Z})),(0,n.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(5853).Z})),(0,n.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}d.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},6502:function(e,t,a){t.Z=a.p+"assets/images/diagramaEstadisticaDeportiva-60c5a4605d8295b390c6c15b6c4cde9b.PNG"}}]);
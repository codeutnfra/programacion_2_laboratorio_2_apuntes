"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3664],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),L=l(n),p=i,d=L["".concat(c,".").concat(p)]||L[p]||s[p]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=L;var M={};for(var c in t)hasOwnProperty.call(t,c)&&(M[c]=t[c]);M.originalType=e,M.mdxType="string"==typeof e?e:i,o[1]=M;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},6298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return M},metadata:function(){return l},toc:function(){return s}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],M={sidebar_label:"C03 - Parada en boxes",title:"Ejercicio C03 - Parada en boxes",sidebar_position:103,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},c=void 0,l={unversionedId:"clases/testing/Ejercicios/C03-parada-en-boxes",id:"clases/testing/Ejercicios/C03-parada-en-boxes",title:"Ejercicio C03 - Parada en boxes",description:"---",source:"@site/docs/clases/11-testing/Ejercicios/C03-parada-en-boxes.md",sourceDirName:"clases/11-testing/Ejercicios",slug:"/clases/testing/Ejercicios/C03-parada-en-boxes",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/testing/Ejercicios/C03-parada-en-boxes",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633318776,formattedLastUpdatedAt:"10/4/2021",sidebarPosition:103,frontMatter:{sidebar_label:"C03 - Parada en boxes",title:"Ejercicio C03 - Parada en boxes",sidebar_position:103,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"C02 - Lanzar, atrapar y probar",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/testing/Ejercicios/C02-lanzar-atrapar-y-probar"},next:{title:"Tipos gen\xe9ricos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/generics/apuntes/tipos-genericos"}},u={},s=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],L={toc:s};function p(e){var t=e.components,M=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},L,M,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"consigna"},"Consigna"),(0,r.kt)("p",null,"Partir del ejercicio ",(0,r.kt)("a",{parentName:"p",href:"/programacion_2_laboratorio_2_apuntes/docs/clases/excepciones/Ejercicios/C02-segui-participando"},"Segu\xed participando"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Agregar una propiedad que haga p\xfablica la lista de veh\xedculos de ",(0,r.kt)("inlineCode",{parentName:"li"},"Competencia"),"."),(0,r.kt)("li",{parentName:"ol"},"Crear un test unitario que valide que la lista de veh\xedculos de la competencia est\xe9 instanciada al crear un nuevo objeto."),(0,r.kt)("li",{parentName:"ol"},"Realizar un test unitario que controle que la excepci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"CompetenciaNoDisponible")," se lance al querer cargar un ",(0,r.kt)("inlineCode",{parentName:"li"},"AutoF1")," en una competencia del tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"MotoCross"),"."),(0,r.kt)("li",{parentName:"ol"},"Realizar otro test que controle que la excepci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"CompetenciaNoDisponible")," NO se lance al querer cargar un objeto del tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"MotoCross")," en una competencia del tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"MotoCross"),"."),(0,r.kt)("li",{parentName:"ol"},"Comprobar que al cargar un nuevo veh\xedculo en la competencia este figure en la lista. Utilizar el operador ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," y el ",(0,r.kt)("inlineCode",{parentName:"li"},"=="),"."),(0,r.kt)("li",{parentName:"ol"},"Comprobar que al quitar un veh\xedculo existente en la competencia este ya no figure en la lista. Utilizar el operador ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," y el ",(0,r.kt)("inlineCode",{parentName:"li"},"!="),".")),(0,r.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:n(8051).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:n(4061).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}p.isMDXComponent=!0},4061:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},8051:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
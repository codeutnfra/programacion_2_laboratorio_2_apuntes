"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[5367],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var M=a.createContext({}),s=function(e){var t=a.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(M.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,M=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),L=s(n),y=i,j=L["".concat(M,".").concat(y)]||L[y]||l[y]||r;return n?a.createElement(j,o(o({ref:t},u),{},{components:n})):a.createElement(j,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=L;var c={};for(var M in t)hasOwnProperty.call(t,M)&&(c[M]=t[M]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},85214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return M},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={sidebar_label:"A02 - La veterinaria",title:"Ejercicio A02 - La veterinaria",sidebar_position:102,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza",hide_table_of_contents:!0,hide_title:!1},M=void 0,s={unversionedId:"clases/objetos/Ejercicios/A02-veterinaria",id:"clases/objetos/Ejercicios/A02-veterinaria",title:"Ejercicio A02 - La veterinaria",description:"---",source:"@site/docs/clases/03-objetos/Ejercicios/A02-veterinaria.md",sourceDirName:"clases/03-objetos/Ejercicios",slug:"/clases/objetos/Ejercicios/A02-veterinaria",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/Ejercicios/A02-veterinaria",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1630296617,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:102,frontMatter:{sidebar_label:"A02 - La veterinaria",title:"Ejercicio A02 - La veterinaria",sidebar_position:102,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"A01 - Vienen con sistema de auto-navegaci\xf3n",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/objetos/Ejercicios/A01-vienen-con-sistema-auto-navegacion"},next:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/sobrecarga"}},u={},l=[{value:"Requerimiento",id:"requerimiento",level:3},{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],L={toc:l};function y(e){var t=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},L,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requerimiento"},"Requerimiento"),(0,r.kt)("p",null,"El due\xf1o de una veterinaria nos contrat\xf3 para que desarrollemos una aplicaci\xf3n donde pueda consultar la lista de clientes y sus mascotas. "),(0,r.kt)("p",null,"De los clientes le interesa conocer el domicilio, el nombre y apellido y un tel\xe9fono. A un cliente se le pueden asociar una o m\xe1s mascotas. "),(0,r.kt)("p",null,"De las mascotas necesita conocer su especie, su nombre, su fecha de nacimiento y su historial de vacunaci\xf3n. Los primeros tres datos son obligatorios para dar de alta una mascota, mientras que el \xfaltimo arrancar\xe1 vac\xedo y se podr\xe1 ir agregando vacunas. De las vacunas s\xf3lo interesa conocer el nombre. "),(0,r.kt)("h3",{id:"consigna"},"Consigna"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crear una aplicaci\xf3n de consola."),(0,r.kt)("li",{parentName:"ol"},"Modelar y declarar las clases necesarias para resolver la necesidad del cliente. ",(0,r.kt)("strong",{parentName:"li"},"Hacerlo en un proyecto de biblioteca de clases"),"."),(0,r.kt)("li",{parentName:"ol"},"Las clases deber\xe1n tener los m\xe9todos necesarios, incluyendo uno que devuelva toda la informaci\xf3n del objeto en formato string."),(0,r.kt)("li",{parentName:"ol"},"Instanciar los siguientes objetos:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Un cliente con un perro sin vacunar."),(0,r.kt)("li",{parentName:"ol"},'Un cliente con un gato con la vacuna "Triple Felina".'),(0,r.kt)("li",{parentName:"ol"},"Un cliente con un gato sin vacunas y un perro con la vacuna contra la rabia."))),(0,r.kt)("li",{parentName:"ol"},"Mostrar por consola todos los datos de los clientes instanciados y sus mascotas. ")),(0,r.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:n(28051).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"img",src:n(74061).Z,width:"32",height:"32"})),(0,r.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}y.isMDXComponent=!0},74061:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},28051:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
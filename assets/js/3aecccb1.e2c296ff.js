"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[1049],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):M(M({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},L=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),L=u(r),d=n,y=L["".concat(l,".").concat(d)]||L[d]||s[d]||a;return r?i.createElement(y,M(M({ref:t},c),{},{components:r})):i.createElement(y,M({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,M=new Array(a);M[0]=L;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,M[1]=o;for(var u=2;u<a;u++)M[u]=r[u];return i.createElement.apply(null,M)}return i.createElement.apply(null,r)}L.displayName="MDXCreateElement"},8563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),M=["components"],o={sidebar_label:"C01 - Puede fallar",title:"Ejercicio C01 - Puede fallar",sidebar_position:101,author:"Esteban Prieto",authorURL:null,hide_table_of_contents:!0,hide_title:!1},l=void 0,u={unversionedId:"clases/otros/Ejercicios/C01-puede-fallar",id:"clases/otros/Ejercicios/C01-puede-fallar",title:"Ejercicio C01 - Puede fallar",description:"---",source:"@site/docs/clases/21-otros/Ejercicios/C01-puede-fallar.md",sourceDirName:"clases/21-otros/Ejercicios",slug:"/clases/otros/Ejercicios/C01-puede-fallar",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/otros/Ejercicios/C01-puede-fallar",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1634529707,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:101,frontMatter:{sidebar_label:"C01 - Puede fallar",title:"Ejercicio C01 - Puede fallar",sidebar_position:101,author:"Esteban Prieto",authorURL:null,hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I03 - Punto y seguido",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/otros/Ejercicios/I03-punto-y-seguido"}},c={},s=[{value:"Consigna",id:"consigna",level:2},{value:"Reglas del juego",id:"reglas-del-juego",level:3},{value:"Parte I",id:"parte-i",level:3},{value:"Parte II",id:"parte-ii",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:2}],L={toc:s};function d(e){var t=e.components,o=(0,n.Z)(e,M);return(0,a.kt)("wrapper",(0,i.Z)({},L,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"consigna"},"Consigna"),(0,a.kt)("h3",{id:"reglas-del-juego"},"Reglas del juego"),(0,a.kt)("p",null,'Reemplazar cualquier n\xfamero divisible por tres con la palabra \u201cFizz\u201d y cualquier n\xfamero divisible por cinco con la palabra \u201cBuzz\u201d. Cualquier n\xfamero divisible por ambos debe reemplazarse por "Fizz Buzz".'),(0,a.kt)("h3",{id:"parte-i"},"Parte I"),(0,a.kt)("p",null,"Crear una aplicaci\xf3n de consola y extender la clase ",(0,a.kt)("inlineCode",{parentName:"p"},"Int32")," con el m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"FizzBuzz"),". El m\xe9todo deber\xe1 implementar las reglas de ",(0,a.kt)("inlineCode",{parentName:"p"},"FizzBuzz")," y retornar un ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),". "),(0,a.kt)("h3",{id:"parte-ii"},"Parte II"),(0,a.kt)("p",null,"Generar las pruebas unitarias para el m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"FizzBuzz"),"."),(0,a.kt)("p",null,"Probar los casos:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cuando el n\xfamero es divisible por 3 y 5."),(0,a.kt)("li",{parentName:"ol"},"Cuando el n\xfamero es divisible s\xf3lo por 3."),(0,a.kt)("li",{parentName:"ol"},"Cuando el n\xfamero es divisible por s\xf3lo por 5."),(0,a.kt)("li",{parentName:"ol"},"Cuando el n\xfamero no es divisible por 5 o 3.")),(0,a.kt)("h2",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"img",src:r(28051).Z,width:"32",height:"32"})),(0,a.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"img",src:r(74061).Z,width:"32",height:"32"})),(0,a.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}d.isMDXComponent=!0},74061:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},28051:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3891],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return D}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},M=Object.keys(e);for(i=0;i<M.length;i++)n=M[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(i=0;i<M.length;i++)n=M[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},L=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,M=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),L=u(n),D=r,j=L["".concat(c,".").concat(D)]||L[D]||s[D]||M;return n?i.createElement(j,a(a({ref:t},l),{},{components:n})):i.createElement(j,a({ref:t},l))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var M=n.length,a=new Array(M);a[0]=L;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<M;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}L.displayName="MDXCreateElement"},175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return D},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var i=n(7462),r=n(3366),M=(n(7294),n(3905)),a=["components"],o={sidebar_label:"I09 - Dibujando un tri\xe1ngulo equil\xe1tero",title:"Ejercicio I09 - Dibujando un tri\xe1ngulo equil\xe1tero",position:9,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},c=void 0,u={unversionedId:"clases/introduccion/Ejercicios/I09-triangulo-equilatero",id:"clases/introduccion/Ejercicios/I09-triangulo-equilatero",title:"Ejercicio I09 - Dibujando un tri\xe1ngulo equil\xe1tero",description:"---",source:"@site/docs/clases/01-introduccion/Ejercicios/I09-triangulo-equilatero.md",sourceDirName:"clases/01-introduccion/Ejercicios",slug:"/clases/introduccion/Ejercicios/I09-triangulo-equilatero",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/introduccion/Ejercicios/I09-triangulo-equilatero",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1629773541,formattedLastUpdatedAt:"8/23/2021",frontMatter:{sidebar_label:"I09 - Dibujando un tri\xe1ngulo equil\xe1tero",title:"Ejercicio I09 - Dibujando un tri\xe1ngulo equil\xe1tero",position:9,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I08 - Dibujando un tri\xe1ngulo rect\xe1ngulo",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/introduccion/Ejercicios/I08-triangulo-rectangulo"},next:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos"}},l={},s=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],L={toc:s};function D(e){var t=e.components,o=(0,r.Z)(e,a);return(0,M.kt)("wrapper",(0,i.Z)({},L,o,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("hr",null),(0,M.kt)("h3",{id:"consigna"},"Consigna"),(0,M.kt)("p",null,"Escribir un programa que imprima por consola un tri\xe1ngulo como el siguiente:"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"        *\n       ***\n      *****\n     *******\n    *********\n")),(0,M.kt)("p",null,"El usuario indicar\xe1 cu\xe1l ser\xe1 la altura del tri\xe1ngulo ingresando un n\xfamero entero positivo. Para el ejemplo anterior, la altura ingresada fue de 5. "),(0,M.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,M.kt)("div",{parentName:"div",className:"admonition-heading"},(0,M.kt)("h5",{parentName:"div"},(0,M.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,M.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,M.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Importante")),(0,M.kt)("div",{parentName:"div",className:"admonition-content"},(0,M.kt)("p",{parentName:"div"},"Utilizar sentencias de iteraci\xf3n y selectivas."))),(0,M.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,M.kt)("table",null,(0,M.kt)("thead",{parentName:"table"},(0,M.kt)("tr",{parentName:"thead"},(0,M.kt)("th",{parentName:"tr",align:"center"},(0,M.kt)("img",{alt:"img",src:n(8051).Z,width:"32",height:"32"})),(0,M.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,M.kt)("th",{parentName:"tr",align:"center"},(0,M.kt)("img",{alt:"img",src:n(4061).Z,width:"32",height:"32"})),(0,M.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}D.isMDXComponent=!0},4061:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},8051:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[8338],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},L=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),L=l(a),d=i,D=L["".concat(o,".").concat(d)]||L[d]||s[d]||n;return a?r.createElement(D,c(c({ref:t},u),{},{components:a})):r.createElement(D,c({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=L;var M={};for(var o in t)hasOwnProperty.call(t,o)&&(M[o]=t[o]);M.originalType=e,M.mdxType="string"==typeof e?e:i,c[1]=M;for(var l=2;l<n;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}L.displayName="MDXCreateElement"},8665:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return M},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return L}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),c=["components"],M={sidebar_label:"I04 - La calculadora",title:"Ejercicio I04 - La calculadora",sidebar_position:4,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},o=void 0,l={unversionedId:"clases/estaticos/Ejercicios/I04-la-calculadora",id:"clases/estaticos/Ejercicios/I04-la-calculadora",isDocsHomePage:!1,title:"Ejercicio I04 - La calculadora",description:"---",source:"@site/docs/clases/02-estaticos/Ejercicios/I04-la-calculadora.md",sourceDirName:"clases/02-estaticos/Ejercicios",slug:"/clases/estaticos/Ejercicios/I04-la-calculadora",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/Ejercicios/I04-la-calculadora",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1629838613,formattedLastUpdatedAt:"8/24/2021",sidebarPosition:4,frontMatter:{sidebar_label:"I04 - La calculadora",title:"Ejercicio I04 - La calculadora",sidebar_position:4,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I03 - Conversor binario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/Ejercicios/I03-conversor-binario"},next:{title:"I05 - Aprendete las tablas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/Ejercicios/I05-aprendete-las-tablas"}},u=[{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],s={toc:u};function L(e){var t=e.components,M=(0,i.Z)(e,c);return(0,n.kt)("wrapper",(0,r.Z)({},s,M,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consigna"},"Consigna"),(0,n.kt)("p",null,"Realizar un programa que permita realizar operaciones matem\xe1ticas simples (suma, resta, multiplicaci\xf3n y divisi\xf3n). "),(0,n.kt)("p",null,"Crear una clase llamada ",(0,n.kt)("inlineCode",{parentName:"p"},"Calculadora")," que posea dos m\xe9todos est\xe1ticos (de clase):"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Calcular")," (p\xfablico): Recibir\xe1 tres par\xe1metros, el primer operando, el segundo operando y la operaci\xf3n matem\xe1tica. El m\xe9todo devolver\xe1 el resultado de la operaci\xf3n."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Validar")," (privado): Recibir\xe1 como par\xe1metro el segundo operando. Este m\xe9todo se debe utilizar s\xf3lo cuando la operaci\xf3n elegida sea la DIVISI\xd3N. Este m\xe9todo devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," si el operando es distinto de cero."),(0,n.kt)("p",null,"Se le debe pedir al usuario que ingrese dos n\xfameros y la operaci\xf3n que desea realizar (ingresando el caracter +, -, * o /)."),(0,n.kt)("p",null,"El usuario decidir\xe1 cu\xe1ndo finalizar el programa."),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(155).Z})),(0,n.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:a(5853).Z})),(0,n.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}L.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
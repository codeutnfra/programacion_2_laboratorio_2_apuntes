"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[6629],{3905:function(e,t,r){r.d(t,{Zo:function(){return M},kt:function(){return m}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},M=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,M=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,L=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?i.createElement(L,a(a({ref:t},M),{},{components:r})):i.createElement(L,a({ref:t},M))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6356:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return M},default:function(){return d}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],c={sidebar_label:"I01 - Sobre-sobrescribiendo esas advertencias",title:"Ejercicio I01 - Sobre-sobrescribiendo esas advertencias",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},s=void 0,l={unversionedId:"clases/polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias",id:"clases/polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias",isDocsHomePage:!1,title:"Ejercicio I01 - Sobre-sobrescribiendo esas advertencias",description:"---",source:"@site/docs/clases/09-polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias.md",sourceDirName:"clases/09-polimorfismo/Ejercicios",slug:"/clases/polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633118076,formattedLastUpdatedAt:"10/1/2021",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Sobre-sobrescribiendo esas advertencias",title:"Ejercicio I01 - Sobre-sobrescribiendo esas advertencias",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1}},M=[{value:"Consigna",id:"consigna",children:[{value:"Parte I",id:"parte-i",children:[]},{value:"Parte II",id:"parte-ii",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}]}],u={toc:M};function d(e){var t=e.components,c=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"consigna"},"Consigna"),(0,o.kt)("h3",{id:"parte-i"},"Parte I"),(0,o.kt)("p",null,"Crear un proyecto de consola que contenga la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Sobrescrito"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Salida por consola",src:r(7170).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sobrescribir el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"ToString")," para que retorne ",(0,o.kt)("em",{parentName:"li"},'"\xa1Este es mi m\xe9todo ToString sobrescrito!"'),"."),(0,o.kt)("li",{parentName:"ol"},"Sobrescribir el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," para que retorne ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," si son del mismo tipo (objetos de la misma clase), ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," caso contrario."),(0,o.kt)("li",{parentName:"ol"},"Sobrescribir el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"GetHashCode")," para que retorne el n\xfamero 1142510181."),(0,o.kt)("li",{parentName:"ol"},"Agregar en el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"Main")," el siguiente c\xf3digo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'Console.Title = "Ejercicio Sobre-Sobrescrito";\nSobrescrito objetoSobrescrito = new Sobreescrito();\n\nConsole.WriteLine(objetoSobrescrito.ToString());\n\nstring objeto = "\xa1Este es mi m\xe9todo ToString sobrescrito!";\n\nConsole.WriteLine("----------------------------------------------");\nConsole.Write("Comparaci\xf3n Sobrecargas con String: ");\nConsole.WriteLine(objetoSobrescrito.Equals(objeto));\n\nConsole.WriteLine("----------------------------------------------");\nConsole.WriteLine(objetoSobrescrito.GetHashCode());\n\nConsole.ReadKey();\n')),(0,o.kt)("h3",{id:"parte-ii"},"Parte II"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Agregar a la clase ",(0,o.kt)("inlineCode",{parentName:"li"},"Sobrescrito")," un atributo ",(0,o.kt)("inlineCode",{parentName:"li"},"miAtributo")," del tipo ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),", con visibilidad ",(0,o.kt)("strong",{parentName:"li"},"protected"),"."),(0,o.kt)("li",{parentName:"ol"},"Generar un constructor ",(0,o.kt)("strong",{parentName:"li"},"de instancia")," que inicialice ",(0,o.kt)("inlineCode",{parentName:"li"},"miAtributo")," con el valor ",(0,o.kt)("em",{parentName:"li"},'"Probar abstractos"'),"."),(0,o.kt)("li",{parentName:"ol"},"Agregar\xe1 propiedad ",(0,o.kt)("strong",{parentName:"li"},"abstracta")," ",(0,o.kt)("inlineCode",{parentName:"li"},"MiPropiedad")," de ",(0,o.kt)("strong",{parentName:"li"},"s\xf3lo lectura"),". Una vez implementada, retornar\xe1 el valor de ",(0,o.kt)("inlineCode",{parentName:"li"},"miAtributo"),"."),(0,o.kt)("li",{parentName:"ol"},"Crear un m\xe9todo ",(0,o.kt)("strong",{parentName:"li"},"abstracto")," ",(0,o.kt)("inlineCode",{parentName:"li"},"MiMetodo")," que retorne un ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),". Una vez implementada, retornar\xe1 el valor de ",(0,o.kt)("inlineCode",{parentName:"li"},"MiPropiedad"),"."),(0,o.kt)("li",{parentName:"ol"},"Agregar una clase llamada ",(0,o.kt)("inlineCode",{parentName:"li"},"SobreSobrescrito")," que herede de ",(0,o.kt)("inlineCode",{parentName:"li"},"Sobrescrito"),". Implementar el c\xf3digo necesario para que todo funcione correctamente."),(0,o.kt)("li",{parentName:"ol"},"Modificar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"Main")," para probar las modificaciones. ")),(0,o.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"img",src:r(155).Z})),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"th",href:"https://youtu.be/HMOD3KrSih8"},"Video")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"img",src:r(5853).Z})),(0,o.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}d.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},7170:function(e,t,r){t.Z=r.p+"assets/images/sobre_sobrescribiendo_pantalla-3a67d031148adf5c6b05d19a873f2d70.PNG"}}]);
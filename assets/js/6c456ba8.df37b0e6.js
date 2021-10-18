"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[8693],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return L}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),M=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=M(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=M(a),L=n,j=d["".concat(l,".").concat(L)]||d[L]||s[L]||i;return a?r.createElement(j,c(c({ref:t},u),{},{components:a})):r.createElement(j,c({ref:t},u))}));function L(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var M=2;M<i;M++)c[M]=a[M];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3327:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return M},default:function(){return s}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),c=["components"],o={sidebar_label:"C01 - El relojero",title:"Ejercicio C01 - El relojero",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},l={unversionedId:"clases/concurrencia/Ejercicios/C01-reloj",id:"clases/concurrencia/Ejercicios/C01-reloj",isDocsHomePage:!1,title:"Ejercicio C01 - El relojero",description:"---",source:"@site/docs/clases/19-concurrencia/Ejercicios/C01-reloj.md",sourceDirName:"clases/19-concurrencia/Ejercicios",slug:"/clases/concurrencia/Ejercicios/C01-reloj",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/concurrencia/Ejercicios/C01-reloj",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1634529707,formattedLastUpdatedAt:"10/18/2021",sidebar_label:"C01 - El relojero",frontMatter:{sidebar_label:"C01 - El relojero",title:"Ejercicio C01 - El relojero",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1}},M=[{value:"Consigna",id:"consigna",children:[]},{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}],u={toc:M};function s(e){var t=e.components,o=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"consigna"},"Consigna"),(0,i.kt)("p",null,"Crear un proyecto de Windows Forms con un RichTextBox y un Label dentro."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Crear el m\xe9todo AsignarHora que se encargar\xe1 de imprimir la hora en la Label lblHora."),(0,i.kt)("li",{parentName:"ol"},"En el Label se deber\xe1 mostrar la fecha y hora actual, con segundos incluidos, y refresc\xe1ndose una vez por segundo."),(0,i.kt)("li",{parentName:"ol"},"Generar tres pr\xe1cticas, independientes, en el orden planteado:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Realizar la actualizaci\xf3n de la hora 1 vez por segundo utilizando alguna estructura de control dada en clase."),(0,i.kt)("li",{parentName:"ol"},"Agregar un objeto del tipo Timer para refrescar la hora actual cada 1 segundo."),(0,i.kt)("li",{parentName:"ol"},"Resolver el mismo ejercicio utilizando hilos.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Negocio:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tendr\xe1 como atributos una lista de tipo String \u201cclientes\u201d y dos atributos de tipo Caja."),(0,i.kt)("li",{parentName:"ul"},"Crear propiedades de lectura para todos sus atributos."),(0,i.kt)("li",{parentName:"ul"},"El constructor recibir\xe1 por par\xe1metro las dos cajas e inicializar\xe1 la lista de clientes."),(0,i.kt)("li",{parentName:"ul"},'El m\xe9todo AsignarCaja deber\xe1 imprimir el mensaje "Asignando cajas..." cuando sea invocado, recorrer la lista de clientes y asignar a cada cliente en la fila de la caja que menos clientes tenga en ese momento.'),(0,i.kt)("li",{parentName:"ul"},"La asignaci\xf3n de cada cliente a una caja tardar\xe1 1 segundo.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La asignaci\xf3n de cada cliente a una caja tardar\xe1 1 segundo."),(0,i.kt)("li",{parentName:"ul"},"Crear un thread para asignar las cajas a los clientes, uno para atender los clientes de la caja1 y otro para atender los clientes de la caja2. Los threads destinados a atender a los clientes deber\xe1n tener en su propiedad \u201cName\u201d el nombre de la caja que est\xe1 atendiendo."),(0,i.kt)("li",{parentName:"ul"},"Se deber\xe1n iniciar los 3 threads uno a continuaci\xf3n del otro."),(0,i.kt)("li",{parentName:"ul"},"Utilizar el m\xe9todo Join del objeto de la clase Thread para asegurar que se hayan asignado todos los clientes a alguna caja antes de comenzar a atender.")),(0,i.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:a(155).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:a(5853).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}s.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
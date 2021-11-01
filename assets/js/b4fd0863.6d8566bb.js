"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[4157],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M=n.createContext({}),c=function(e){var t=n.useContext(M),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(M.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,M=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(M,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var M in t)hasOwnProperty.call(t,M)&&(l[M]=t[M]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6849:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return M},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_label:"I01 - Mi primer CRUD",title:"Ejercicio I01 - Mi primer CRUD",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},M={unversionedId:"clases/databases/Ejercicios/I01-mi-primer-crud",id:"clases/databases/Ejercicios/I01-mi-primer-crud",isDocsHomePage:!1,title:"Ejercicio I01 - Mi primer CRUD",description:"---",source:"@site/docs/clases/17-databases/Ejercicios/I01-mi-primer-crud.md",sourceDirName:"clases/17-databases/Ejercicios",slug:"/clases/databases/Ejercicios/I01-mi-primer-crud",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/databases/Ejercicios/I01-mi-primer-crud",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1635759e3,formattedLastUpdatedAt:"11/1/2021",sidebar_label:"I01 - Mi primer CRUD",sidebarPosition:1,frontMatter:{sidebar_label:"I01 - Mi primer CRUD",title:"Ejercicio I01 - Mi primer CRUD",sidebar_position:1,author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"Cuestionario - Conexi\xf3n a bases de datos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/databases/apuntes/cuestionario"},next:{title:"Ejercicio I02 - Adventure Works",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/databases/Ejercicios/I02-adventure-works"}},c=[{value:"Consigna",id:"consigna",children:[{value:"Resoluci\xf3n",id:"resoluci\xf3n",children:[]}]}],s={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"consigna"},"Consigna"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Crear una base de datos con una tabla llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"Persona")," que tendr\xe1 las columnas:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ID"),": autoincremental y entero."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Nombre"),": varchar(50)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Apellido"),": varchar(50)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Crear una biblioteca de clases con una clase ",(0,i.kt)("inlineCode",{parentName:"p"},"Persona"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Tendr\xe1 id, nombre y apellido como atributos privados."),(0,i.kt)("li",{parentName:"ol"},"Tendr\xe1 un constructor que reciba los 3 par\xe1metros y otro que s\xf3lo reciba nombre y apellido."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Crear otra clase llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"PersonaDAO")," y agregarle 5 m\xe9todos:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Guardar"),": guardar\xe1 una nueva persona en la base de datos."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Leer"),": retornar\xe1 la lista de personas de la base de datos."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"LeerPorID"),": traer\xe1 una persona, filtrando por ID."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Modificar"),": modificar\xe1 una persona a partir de su ID."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Borrar"),": eliminar\xe1 una persona de la base de datos a partir de su ID."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Crear un proyecto de Windows Forms App y armar un formulario con:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Dos ",(0,i.kt)("inlineCode",{parentName:"li"},"TextBox"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"txtNombre")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"txtApellido"),"."),(0,i.kt)("li",{parentName:"ol"},"Un ",(0,i.kt)("inlineCode",{parentName:"li"},"ListBox"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lstPersonas"),"."),(0,i.kt)("li",{parentName:"ol"},"Cuatro ",(0,i.kt)("inlineCode",{parentName:"li"},"Button"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"btnGuardar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"btnModificar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"btnEliminar")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"btnLeer"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lstPersonas")," deber\xe1 mostrar la lista de Personas devuelta por el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"Leer")," de ",(0,i.kt)("inlineCode",{parentName:"p"},"PersonaDAO"),", invocado al presionar el bot\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"btnLeer"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Al hacer doble click sobre una persona, se deber\xe1 cargar su nombre y apellido en ",(0,i.kt)("inlineCode",{parentName:"p"},"txtNombre")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"txtApellido")," respectivamente.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"btnModificar")," actualizar\xe1 la informaci\xf3n de la persona que se seleccion\xf3 con doble click en ",(0,i.kt)("inlineCode",{parentName:"p"},"lstPersonas"),". Se tomar\xe1n los datos modificados de los ",(0,i.kt)("inlineCode",{parentName:"p"},"TextBox"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"btnGuardar")," agregar\xe1 una persona en la base de datos tomando sus datos de los ",(0,i.kt)("inlineCode",{parentName:"p"},"TextBox"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"btnEliminar")," borrar\xe1 de la base a la persona seleccionada en el ListBox."))),(0,i.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:a(155).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"img",src:a(5853).Z})),(0,i.kt)("th",{parentName:"tr",align:"center"},"C\xf3digo")))))}u.isMDXComponent=!0},5853:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},155:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
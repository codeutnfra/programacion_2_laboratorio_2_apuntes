"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[2162],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),M=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=M(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=M(r),m=a,p=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?i.createElement(p,o(o({ref:t},s),{},{components:r})):i.createElement(p,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var M=2;M<n;M++)o[M]=r[M];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return M},toc:function(){return u}});var i=r(87462),a=r(63366),n=(r(67294),r(3905)),o=["components"],l={sidebar_label:"C01 - Temporizador",title:"Ejercicio C01 - Temporizador",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",sidebar_position:101,hide_table_of_contents:!0,hide_title:!1},c=void 0,M={unversionedId:"clases/eventos/Ejercicios/C01-temporizador",id:"clases/eventos/Ejercicios/C01-temporizador",title:"Ejercicio C01 - Temporizador",description:"---",source:"@site/docs/clases/20-eventos/Ejercicios/C01-temporizador.md",sourceDirName:"clases/20-eventos/Ejercicios",slug:"/clases/eventos/Ejercicios/C01-temporizador",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/eventos/Ejercicios/C01-temporizador",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1635274986,formattedLastUpdatedAt:"10/26/2021",sidebarPosition:101,frontMatter:{sidebar_label:"C01 - Temporizador",title:"Ejercicio C01 - Temporizador",author:"Federico D\xe1vila",authorURL:"https://github.com/FedeDavila1984",sidebar_position:101,hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I01 - Avisame si cambia",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/eventos/Ejercicios/I01-avisame-si-cambia"},next:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/otros"}},s={},u=[{value:"Consigna",id:"consigna",level:3},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"consigna"},"Consigna"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Partir del ejercicio ",(0,n.kt)("a",{parentName:"li",href:"/programacion_2_laboratorio_2_apuntes/docs/clases/concurrencia/Ejercicios/I01-el-relojero"},"El relojero")," y agregar la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Temporizador"),", debiendo lograr una funcionalidad similar a la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Timer"),". ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagrama de clases",src:r(45226).Z,width:"355",height:"478"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La propiedad ",(0,n.kt)("inlineCode",{parentName:"li"},"Activo")," retornar\xe1 ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," si el hilo est\xe1 activo. "),(0,n.kt)("li",{parentName:"ul"},"La propiedad ",(0,n.kt)("inlineCode",{parentName:"li"},"Intervalo")," retornar\xe1 el intervalo de tiempo del temporizador y permitir\xe1 modificarlo. "),(0,n.kt)("li",{parentName:"ul"},"Si se llama al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"IniciarTemporizador"),", se iniciar\xe1 el hilo, siempre y cuando no est\xe9 activo. "),(0,n.kt)("li",{parentName:"ul"},"Si se llama al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"DetenerTemporizador"),", se detendr\xe1 el hilo, siempre y cuando est\xe9 activo."),(0,n.kt)("li",{parentName:"ul"},"El intervalo de tiempo determinar\xe1 cada cuanto tiempo en milisegundos se lanzar\xe1 el evento."),(0,n.kt)("li",{parentName:"ul"},"El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"CorrerTiempo")," ser\xe1 el encargado de hacer la demora y lanzar el evento ",(0,n.kt)("inlineCode",{parentName:"li"},"EventoTiempo"),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Implementar ",(0,n.kt)("inlineCode",{parentName:"p"},"Temporizador")," en el formulario del ejercicio anterior, iniciando el reloj en el manejador del evento ",(0,n.kt)("inlineCode",{parentName:"p"},"Load")," usando solamente la clase ",(0,n.kt)("inlineCode",{parentName:"p"},"Temporizador"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Agregar un bot\xf3n ",(0,n.kt)("em",{parentName:"p"},'"Iniciar Reloj"')," y otro ",(0,n.kt)("em",{parentName:"p"},'"Detener Reloj"'),". "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Al presionar ",(0,n.kt)("em",{parentName:"li"},'"Detener Reloj"')," se deber\xe1 detener el temporizador y el reloj deber\xe1 quedar pausado. "),(0,n.kt)("li",{parentName:"ul"},"Al presionar ",(0,n.kt)("em",{parentName:"li"},'"Iniciar Reloj"')," se deber\xe1 reiniciar el reloj, siempre que se encuentre detenido. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hacer todas las pruebas necesarias para asegurar que la soluci\xf3n funciona correctamente."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"frmReloj",src:r(59956).Z,width:"800",height:"480"})),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:r(28051).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},"Video"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:r(74061).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_20/C01_Temporizador"},"C\xf3digo"))))))}m.isMDXComponent=!0},74061:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},28051:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},45226:function(e,t,r){t.Z=r.p+"assets/images/Temporizador_Diagram-d8c784f784303588ac765f0e4f8aa236.png"},59956:function(e,t,r){t.Z=r.p+"assets/images/frmReloj-e26e722319c16e54695d78cb73e397f1.gif"}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3438],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(c.Provider,{value:a},e.children)},M={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,p=d["".concat(c,".").concat(m)]||d[m]||M[m]||n;return t?r.createElement(p,o(o({ref:a},s),{},{components:t})):r.createElement(p,o({ref:a},s))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27715:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return M}});var r=t(87462),i=t(63366),n=(t(67294),t(3905)),o=["components"],l={sidebar_label:"I02 - Calculadora de formas",title:"Ejercicio I02 - Calculadora de formas",sidebar_position:2,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza",hide_table_of_contents:!0,hide_title:!1},c=void 0,u={unversionedId:"clases/polimorfismo/Ejercicios/I02-calculadora-formas",id:"clases/polimorfismo/Ejercicios/I02-calculadora-formas",title:"Ejercicio I02 - Calculadora de formas",description:"---",source:"@site/docs/clases/09-polimorfismo/Ejercicios/I02-calculadora-formas.md",sourceDirName:"clases/09-polimorfismo/Ejercicios",slug:"/clases/polimorfismo/Ejercicios/I02-calculadora-formas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/Ejercicios/I02-calculadora-formas",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1633118076,formattedLastUpdatedAt:"10/1/2021",sidebarPosition:2,frontMatter:{sidebar_label:"I02 - Calculadora de formas",title:"Ejercicio I02 - Calculadora de formas",sidebar_position:2,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza",hide_table_of_contents:!0,hide_title:!1},sidebar:"Clases",previous:{title:"I01 - Sobre-sobrescribiendo esas advertencias",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/Ejercicios/I01-sobre-sobrescribiendo-esas-advertencias"},next:{title:"C01 - La centralita: Episodio II",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/Ejercicios/C01-la-centralita-episodio-II"}},s={},M=[{value:"Consigna",id:"consigna",level:2},{value:"Resoluci\xf3n",id:"resoluci\xf3n",level:3}],d={toc:M};function m(e){var a=e.components,l=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"consigna"},"Consigna"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crear una biblioteca de clases que contenga la siguiente jerarqu\xeda de herencia:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"La clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Figura")," ser\xe1 base de las dem\xe1s y no deber\xe1 poder instanciarse."),(0,n.kt)("li",{parentName:"ul"},"Las clases ",(0,n.kt)("inlineCode",{parentName:"li"},"Rectangulo")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"Circulo")," heredar\xe1n de ",(0,n.kt)("inlineCode",{parentName:"li"},"Figura"),"."),(0,n.kt)("li",{parentName:"ul"},"La clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Cuadrado")," heredar\xe1 de ",(0,n.kt)("inlineCode",{parentName:"li"},"Rectangulo"),"."),(0,n.kt)("li",{parentName:"ul"},"Las clases ",(0,n.kt)("inlineCode",{parentName:"li"},"Circulo")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"Cuadrado")," no se deben poder heredar (ser base)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Agregar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Dibujar")," que tendr\xe1 una implementaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"por defecto")," en la clase base y retornar\xe1 el texto ",(0,n.kt)("em",{parentName:"p"},'"Dibujando forma..."'),". Las clases derivadas ",(0,n.kt)("strong",{parentName:"p"},"directas")," invalidar\xe1n dicha implementaci\xf3n y la cambiar\xe1n por ",(0,n.kt)("em",{parentName:"p"},'"Dibujando c\xedrculo"'),", ",(0,n.kt)("em",{parentName:"p"},'"Dibujando rect\xe1ngulo"'),", seg\xfan corresponda. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Agregar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"CalcularSuperficie")," que deber\xe1 ser implementado ",(0,n.kt)("strong",{parentName:"p"},"de manera obligatoria")," por las clases derivadas. Debe retornar un ",(0,n.kt)("inlineCode",{parentName:"p"},"double")," con el resultado del c\xe1lculo de superficie (\xe1rea) para la figura correspondiente.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Agregar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"CalcularPerimetro")," que deber\xe1 ser implementado ",(0,n.kt)("strong",{parentName:"p"},"de manera obligatoria")," por las clases derivadas. Debe retornar un ",(0,n.kt)("inlineCode",{parentName:"p"},"double")," con el resultado del c\xe1lculo del per\xedmetro para la figura correspondiente.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crear un proyecto de consola y en el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Main"),":"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Crear una lista de figuras."),(0,n.kt)("li",{parentName:"ol"},"Agregar a la lista una figura de cada tipo."),(0,n.kt)("li",{parentName:"ol"},"Recorrer la lista mostrando:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"El resultado del m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"Dibujar"),"."),(0,n.kt)("li",{parentName:"ul"},"El \xe1rea y el per\xedmetro de cada figura con una precisi\xf3n de 2 decimales."),(0,n.kt)("li",{parentName:"ul"},"El tipo del objeto (m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"GetType"),").")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"=============== FIGURA 01 ==================\n Tipo: Biblioteca.Circulo\n Dibujando C\xedrculo...\n \xc1rea: 7,14\n Per\xedmetro: 12,57\n============================================\n\n\n=============== FIGURA 02 ==================\n Tipo: Biblioteca.Cuadrado\n Dibujando Cuadrado...\n \xc1rea: 9,00\n Per\xedmetro: 12,00\n============================================\n\n\n=============== FIGURA 03 ==================\n Tipo: Biblioteca.Rectangulo\n Dibujando Rect\xe1ngulo...\n \xc1rea: 32,00\n Per\xedmetro: 24,00\n============================================\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Responder:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\xbfPor qu\xe9 la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Cuadrado")," no est\xe1 obligada a implementar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"Dibujar"),"? \xbfLas otras clases est\xe1n obligadas a hacerlo?"),(0,n.kt)("li",{parentName:"ol"},"\xbfPor qu\xe9 la clase ",(0,n.kt)("inlineCode",{parentName:"li"},"Cuadrado")," no est\xe1 obligada a implementar el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"CalcularSuperficie"),"? \xbfLas otras clases est\xe1n obligadas a hacerlo?"),(0,n.kt)("li",{parentName:"ol"},"\xbfA qu\xe9 implementaci\xf3n del m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"CalcularPerimetro")," llaman los objetos de tipo ",(0,n.kt)("inlineCode",{parentName:"li"},"Cuadrado"),"?")))),(0,n.kt)("h3",{id:"resoluci\xf3n"},"Resoluci\xf3n"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:t(28051).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://youtu.be/w9RwEGz9Eos"},"Video")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"img",src:t(74061).Z,width:"32",height:"32"})),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://github.com/codeutnfra/programacion_2_laboratorio_2/tree/master/Ejercicios_Resueltos/Clase_09/I02_Calculadora_de_formas"},"C\xf3digo"))))))}m.isMDXComponent=!0},74061:function(e,a){a.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAzLDBDNy4xNywwLDAuMDA4LDcuMTYyLDAuMDA4LDE1Ljk5NyAgYzAsNy4wNjcsNC41ODIsMTMuMDYzLDEwLjk0LDE1LjE3OWMwLjgsMC4xNDYsMS4wNTItMC4zMjgsMS4wNTItMC43NTJjMC0wLjM4LDAuMDA4LTEuNDQyLDAtMi43NzcgIGMtNC40NDksMC45NjctNS4zNzEtMi4xMDctNS4zNzEtMi4xMDdjLTAuNzI3LTEuODQ4LTEuNzc1LTIuMzQtMS43NzUtMi4zNGMtMS40NTItMC45OTIsMC4xMDktMC45NzMsMC4xMDktMC45NzMgIGMxLjYwNSwwLjExMywyLjQ1MSwxLjY0OSwyLjQ1MSwxLjY0OWMxLjQyNywyLjQ0MywzLjc0MywxLjczNyw0LjY1NCwxLjMyOWMwLjE0Ni0xLjAzNCwwLjU2LTEuNzM5LDEuMDE3LTIuMTM5ICBjLTMuNTUyLTAuNDA0LTcuMjg2LTEuNzc2LTcuMjg2LTcuOTA2YzAtMS43NDcsMC42MjMtMy4xNzQsMS42NDYtNC4yOTJDNy4yOCwxMC40NjQsNi43Myw4LjgzNyw3LjYwMiw2LjYzNCAgYzAsMCwxLjM0My0wLjQzLDQuMzk4LDEuNjQxYzEuMjc2LTAuMzU1LDIuNjQ1LTAuNTMyLDQuMDA1LTAuNTM4YzEuMzU5LDAuMDA2LDIuNzI3LDAuMTgzLDQuMDA1LDAuNTM4ICBjMy4wNTUtMi4wNyw0LjM5Ni0xLjY0MSw0LjM5Ni0xLjY0MWMwLjg3MiwyLjIwMywwLjMyMywzLjgzLDAuMTU5LDQuMjM0YzEuMDIzLDEuMTE4LDEuNjQ0LDIuNTQ1LDEuNjQ0LDQuMjkyICBjMCw2LjE0Ni0zLjc0LDcuNDk4LTcuMzA0LDcuODkzQzE5LjQ3OSwyMy41NDgsMjAsMjQuNTA4LDIwLDI2YzAsMiwwLDMuOTAyLDAsNC40MjhjMCwwLjQyOCwwLjI1OCwwLjkwMSwxLjA3LDAuNzQ2ICBDMjcuNDIyLDI5LjA1NSwzMiwyMy4wNjIsMzIsMTUuOTk3QzMyLDcuMTYyLDI0LjgzOCwwLDE2LjAwMywweiIgZmlsbD0iIzE4MTYxNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"},28051:function(e,a){a.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTMxLjY3LDkuMTc5YzAsMC0wLjMxMi0yLjM1My0xLjI3MS0zLjM4OWMtMS4yMTctMS4zNTgtMi41OC0xLjM2Ni0zLjIwNS0xLjQ0M0MyMi43MTcsNCwxNi4wMDIsNCwxNi4wMDIsNCAgIGgtMC4wMTVjMCwwLTYuNzE1LDAtMTEuMTkxLDAuMzQ3QzQuMTcxLDQuNDI0LDIuODA5LDQuNDMyLDEuNTkxLDUuNzlDMC42MzMsNi44MjYsMC4zMiw5LjE3OSwwLjMyLDkuMTc5UzAsMTEuOTQsMCwxNC43MDF2Mi41ODggICBjMCwyLjc2MywwLjMyLDUuNTIzLDAuMzIsNS41MjNzMC4zMTIsMi4zNTIsMS4yNzEsMy4zODZjMS4yMTgsMS4zNTgsMi44MTUsMS4zMTcsMy41MjcsMS40NTlDNy42NzcsMjcuOTE5LDE1Ljk5NSwyOCwxNS45OTUsMjggICBzNi43MjItMC4wMTIsMTEuMTk5LTAuMzU1YzAuNjI1LTAuMDgsMS45ODgtMC4wODgsMy4yMDUtMS40NDZjMC45NTgtMS4wMzQsMS4yNzEtMy4zODYsMS4yNzEtMy4zODZzMC4zMi0yLjc2MSwwLjMyLTUuNTIzdi0yLjU4OCAgIEMzMS45OSwxMS45NCwzMS42Nyw5LjE3OSwzMS42Nyw5LjE3OXoiIGZpbGw9IiNFMDJGMkYiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDEwIDEyLDIyIDIyLDE2ICAiLz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+"}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3954],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=c(e.components);return n.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return t?n.createElement(k,i(i({ref:a},l),{},{components:t})):n.createElement(k,i({ref:a},l))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8659:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={title:"Apuntes - Clases y m\xe9todos est\xe1ticos",sidebar_label:"Clases y m\xe9todos est\xe1ticos",slug:"/clases/estaticos/apuntes/metodos-estaticos",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},d=void 0,c={unversionedId:"clases/estaticos/Apuntes/metodos-estaticos",id:"clases/estaticos/Apuntes/metodos-estaticos",title:"Apuntes - Clases y m\xe9todos est\xe1ticos",description:"Principio DRY",source:"@site/docs/clases/02-estaticos/Apuntes/00-metodos-estaticos.md",sourceDirName:"clases/02-estaticos/Apuntes",slug:"/clases/estaticos/apuntes/metodos-estaticos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/metodos-estaticos",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1629838613,formattedLastUpdatedAt:"8/24/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Clases y m\xe9todos est\xe1ticos",sidebar_label:"Clases y m\xe9todos est\xe1ticos",slug:"/clases/estaticos/apuntes/metodos-estaticos",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos"},next:{title:"Clases est\xe1ticas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/estaticos/apuntes/clases-estaticas"}},l={},m=[{value:"Principio DRY",id:"principio-dry",level:2},{value:"Pieza de conocimiento",id:"pieza-de-conocimiento",level:4},{value:"\xdanica",id:"\xfanica",level:4},{value:"Inequ\xedvoca",id:"inequ\xedvoca",level:4},{value:"Fidedigna",id:"fidedigna",level:4},{value:"M\xe9todos est\xe1ticos",id:"m\xe9todos-est\xe1ticos",level:2},{value:"Refactorizar",id:"refactorizar",level:3},{value:"Documentar m\xe9todos",id:"documentar-m\xe9todos",level:3}],p={toc:m};function u(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"principio-dry"},"Principio DRY"),(0,r.kt)("p",null,"El principio ",(0,r.kt)("strong",{parentName:"p"},"Don't repeat yourself (DRY)"),' ("No te repitas", en espa\xf1ol) fue introducido por primera vez en el libro ',(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/The_Pragmatic_Programmer"},'"The Pragmatic Programmer" escrito por Andy Hunt y Dave Thomas'))," y lo definieron as\xed: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Toda ',(0,r.kt)("strong",{parentName:"em"},"pieza de conocimiento")," debe tener una representaci\xf3n ",(0,r.kt)("strong",{parentName:"em"},"\xfanica"),", ",(0,r.kt)("strong",{parentName:"em"},"inequ\xedvoca")," y ",(0,r.kt)("strong",{parentName:"em"},"fidedigna"),' dentro de un sistema."'))),(0,r.kt)("p",null,"Desarmemos esta definici\xf3n para entenderla. "),(0,r.kt)("h4",{id:"pieza-de-conocimiento"},"Pieza de conocimiento"),(0,r.kt)("p",null,"Puede referirse a una funcionalidad precisa dentro del contexto de negocio de la aplicaci\xf3n o un algoritmo concreto. "),(0,r.kt)("p",null,"Por ejemplo, dentro del contexto del negocio bancario no es lo mismo hacer una transferencia de dinero que establecer un plazo fijo. Tampoco es lo mismo una operaci\xf3n de compra de d\xf3lares que una operaci\xf3n de venta. Cada una de estas son operaciones est\xe1n asociadas a un conocimiento puntual dentro del negocio. "),(0,r.kt)("h4",{id:"\xfanica"},"\xdanica"),(0,r.kt)("p",null,"No debe existir otra representaci\xf3n de la misma pieza de conocimiento."),(0,r.kt)("h4",{id:"inequ\xedvoca"},"Inequ\xedvoca"),(0,r.kt)("p",null,"Que no admite m\xe1s de una interpretaci\xf3n. Solamente puede ser interpretada, entendida o explicada de una manera, en un \xfanico sentido y sin posibilidad de duda o equivocaci\xf3n. "),(0,r.kt)("h4",{id:"fidedigna"},"Fidedigna"),(0,r.kt)("p",null,"Debemos poder confiar que es correcta."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dave Thomas")," tambi\xe9n insiste en que ",(0,r.kt)("em",{parentName:"p"},"DRY")," no se trata solamente de la duplicaci\xf3n de c\xf3digo."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"El conocimiento de un sistema es m\xe1s que s\xf3lo c\xf3digo. Se refiere tambi\xe9n a esquemas de base de datos, casos de prueba, el sistema de implementaci\xf3n e incluso a la documentaci\xf3n."'))),(0,r.kt)("p",null,"La idea del principio ",(0,r.kt)("em",{parentName:"p"},"DRY")," es simple: ",(0,r.kt)("strong",{parentName:"p"},"Cuando ocurra un cambio no deber\xedamos necesitar actualizar m\xfaltiples cosas en paralelo"),". Si el conocimiento est\xe1 duplicado en el c\xf3digo y necesitamos hacer un cambio, podr\xedamos olvidar hacer las modificaciones en todos lados. En la documentaci\xf3n, podr\xeda conducir a malas interpretaciones, confusi\xf3n y, en \xfaltima instancia, implementaciones incorrectas."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Informaci\xf3n")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A las soluciones que no cumplen el principio ",(0,r.kt)("em",{parentName:"p"},"DRY")," se las llama ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"WET"))," que es un acr\xf3nimo interpretado de fromas alternativas como ",(0,r.kt)("em",{parentName:"p"},'"write everything twice"')," (escribir todo dos veces), ",(0,r.kt)("em",{parentName:"p"},'"write every time"')," (escribir todo el tiempo), ",(0,r.kt)("em",{parentName:"p"},'"we enjoy typing"')," (disfrutamos teclear) o ",(0,r.kt)("em",{parentName:"p"},'"waste everyone\'s time"')," (gastar el tiempo de todos). "))),(0,r.kt)("h2",{id:"m\xe9todos-est\xe1ticos"},"M\xe9todos est\xe1ticos"),(0,r.kt)("p",null,"Cuando programamos podemos encontrarnos escribiendo las mismas sentencias una y otra vez a lo largo del c\xf3digo. Para evitar esto, podemos trasformar esas sentencias duplicadas en un m\xe9todo. "),(0,r.kt)("p",null,"Los ",(0,r.kt)("strong",{parentName:"p"},"m\xe9todos est\xe1ticos")," son peque\xf1as piezas de c\xf3digo que se encargan de realizar una tarea concreta. Tambi\xe9n se los suele llamar como ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"m\xe9todos de clase")),"."),(0,r.kt)("p",null,"Por ejemplo, dentro de una aplicaci\xf3n financiera podr\xedamos tener un m\xe9todo que realice el c\xe1lculo de impuestos y reutilizar esa funcionalidad en varios lugares sin necesidad de rescribir el algoritmo una y otra vez. "),(0,r.kt)("p",null,"Al igual que los programas, los m\xe9todos est\xe1ticos usualmente tienen datos de entrada y de salida. A menudo se los describe como ",(0,r.kt)("em",{parentName:"p"},"cajas negras"),", donde ingresamos materias primas por un agujero y salen productos manufacturados desde otro."),(0,r.kt)("p",null,"Si est\xe1n bien dise\xf1ados, una vez creados los m\xe9todos no deber\xeda preocuparnos c\xf3mo resuelven la tarea, s\xf3lo el ",(0,r.kt)("em",{parentName:"p"},"qu\xe9 hacen"),"."),(0,r.kt)("p",null,"Los m\xe9todos est\xe1ticos est\xe1n compuestos de una firma que define el ",(0,r.kt)("em",{parentName:"p"},"qu\xe9 hace")," y de un cuerpo que contiene la implementaci\xf3n, el ",(0,r.kt)("em",{parentName:"p"},"c\xf3mo lo hace"),"."),(0,r.kt)("p",null,"La firma del m\xe9todo lo define y funciona como una declaraci\xf3n del mismo. Su sintaxis es la siguiente:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Modificador de acceso")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Otros modificadores")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Tipo de retorno")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Identificador")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Par\xe1metros de entrada"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modificador de acceso"),": Indica y limita desde donde se puede interactuar con un m\xe9todo u otros tipos de miembros. Por defecto es ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Modificador"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"public")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Accesible desde cualquier parte.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"private")),(0,r.kt)("td",{parentName:"tr",align:"left"},"S\xf3lo accesible desde dentro del mismo tipo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"internal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"S\xf3lo accesible desde dentro del mismo ensamblado / proyecto.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"protected")),(0,r.kt)("td",{parentName:"tr",align:"left"},"S\xf3lo accesible desde dentro del mismo tipo o tipos derivados (hijos).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Otros modificadores"),": Existen otros modificadores que iremos viendo a lo largo de la cursada y se ubican despu\xe9s del modificador de acceso. Por ejemplo, el modificador ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," marca al m\xe9todo como est\xe1tico. Estos modificadores son opcionales. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tipo de retorno"),": Se debe indicar el tipo de dato que retorna el m\xe9todo, puede ser cualquier tipo soportado por la plataforma. Si no retorna nada se debe colocar ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identificador"),": Nombre del m\xe9todo. Debe ser un verbo con notaci\xf3n ",(0,r.kt)("em",{parentName:"p"},"PascalCase"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Par\xe1metros de entrada"),": Van entre par\xe9ntesis despu\xe9s del identificador y separados por coma. Si un m\xe9todo no recibe argumento deben ir los par\xe9ntesis vac\xedos. Cada par\xe1metro debe estar compuesto por el tipo de dato y seguido el nombre del par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"(TipoParametro1 nombreParametro1, TipoParametro2 nombreParametro2)"),". Los nombres de par\xe1metros deben ser sustantivos con notaci\xf3n ",(0,r.kt)("em",{parentName:"p"},"camelCase"),". "),(0,r.kt)("p",null,"Seguido de la firma viene el cuerpo, el cual consiste en un bloque de c\xf3digo encerrado entre llaves. Dentro del cuerpo del m\xe9todo podemos tener distintos tipos de sentencias, incluyendo de selecci\xf3n e iteraci\xf3n. Finalmente, para retornar alg\xfan valor se debe usar la palabra reservada ",(0,r.kt)("inlineCode",{parentName:"p"},"return"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static double ConvertirCelsiusAFahrenheit(string temperaturaCelsius)\n{\n    // Convierte a double para realizar c\xe1lculos.\n    double celsius = Double.Parse(temperaturaCelsius);\n\n    // Convierte grados Celsius a Fahrenheit.\n    double fahrenheit = (celsius * 9 / 5) + 32;\n\n    return fahrenheit;\n}\n")),(0,r.kt)("p",null,"Para invocar un m\xe9todo est\xe1tico se debe anteponer el nombre de la clase que lo contiene, seguido de un punto y finalmente el nombre del m\xe9todo con sus argumentos entre par\xe9ntesis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"/* Llamo al m\xe9todo est\xe1tico CotizarVentaDolares de la clase Cotizador.\n Le paso entre par\xe9ntesis el \xfanico argumento que recibe, que es el monto de d\xf3lares a vender.\n\n El m\xe9todo retorna un valor de tipo decimal que es el monto en pesos. \n Lo guardo en una variable. \n*/\nstatic void Main(string[] args)\n{\n    decimal pesos = Cotizador.CotizarVentaDolares(100);\n}\n")),(0,r.kt)("h3",{id:"refactorizar"},"Refactorizar"),(0,r.kt)("p",null,"Muchas veces empezamos escribiendo nuestro c\xf3digo de manera desordenada, con sentencias duplicadas y nombres poco descriptivos. Esto nos pasa a todos los desarrolladores. Escribir c\xf3digo es como escribir un libro o un art\xedculo, los primeros bocetos ser\xe1n un conjunto de ideas desordenadas que se van mejorando de forma iterativa hasta llegar a la calidad de escritura del material final."),(0,r.kt)("p",null,"La ",(0,r.kt)("strong",{parentName:"p"},"refactorizaci\xf3n (",(0,r.kt)("em",{parentName:"strong"},"refactoring"),")")," es una t\xe9cnica de la ingenier\xeda de software para reestructurar un c\xf3digo fuente, alterando su estructura interna sin cambiar su comportamiento externo. Esta t\xe9cnica consiste en modificar el c\xf3digo fuente para mejorar su consistencia interna y su claridad."),(0,r.kt)("p",null,"La refactorizaci\xf3n no arregla errores ni a\xf1ade funcionalidad, s\xf3lo mejora la comprensi\xf3n, estructura y dise\xf1o del c\xf3digo. "),(0,r.kt)("p",null,"Esta t\xe9cnica debe ser parte del d\xeda a d\xeda de un buen desarrollador, cada peque\xf1a mejora aporta a una restructuraci\xf3n significa del c\xf3digo que facilita su posterior mantenimiento y modificaci\xf3n. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Informaci\xf3n")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"La referencia m\xe1s notable sobre refactorizaci\xf3n es el libro ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/books/refactoring.html"},'"Refactoring. Improving the Design of Existing Code."')," de los ingenieros ",(0,r.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Martin_Fowler"},"Martin Fowler")," y ",(0,r.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Kent_Beck"},"Kent Beck"),"."))),(0,r.kt)("h3",{id:"documentar-m\xe9todos"},"Documentar m\xe9todos"),(0,r.kt)("p",null,"Si escribimos ",(0,r.kt)("inlineCode",{parentName:"p"},"///")," sobre un m\xe9todo generaremos la documentaci\xf3n XML de C# que nos permitir\xe1 documentar qu\xe9 hace el m\xe9todo, qu\xe9 recibe y qu\xe9 retorna."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// Cotiza la venta de un monto de d\xf3lares dado, retornando el costo en pesos.\n/// </summary>\n/// <param name="montoDolaresAVender">Cantidad de d\xf3lares que se desean vender.</param>\n/// <returns>Costo en pesos de la venta.</returns>\npublic static decimal CotizarVentaDolares(decimal montoDolaresAVender)\n{\n    decimal montoEnPesos = montoDolaresAVender * pesosPorDolarVendido;\n\n    return montoEnPesos;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"summary"),": En esta secci\xf3n se debe escribir un resumen de lo que hace el m\xe9todo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"param"),": Deber\xe1 haber tantas etiquetas ",(0,r.kt)("inlineCode",{parentName:"p"},"param")," como argumentos reciba el m\xe9todo. Cada etiqueta referir\xe1 al nombre del par\xe1metro de entrada a trav\xe9s de la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," y deber\xe1 contener una descripci\xf3n de qu\xe9 se espera como argumento de ese par\xe1metro. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"returns"),": Ac\xe1 se debe agregar una descripci\xf3n sobre lo que retorna el m\xe9todo."),(0,r.kt)("p",null,"La tecnolog\xeda ",(0,r.kt)("em",{parentName:"p"},"IntelliSense")," de Visual Studio levantar\xe1 los comentarios y mostrar\xe1 la informaci\xf3n como ayuda cuando tratemos de invocar al m\xe9todo."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Informaci\xf3n")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Pod\xe9s leer m\xe1s sobre la documentaci\xf3n XML de C# en el siguiente art\xedculo: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags"},"Recommend XML tags for C# documentation comments")))))}u.isMDXComponent=!0}}]);
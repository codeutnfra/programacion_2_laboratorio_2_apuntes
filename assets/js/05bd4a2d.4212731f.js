"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[7329],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),m=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},p=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(f,t(t({ref:n},p),{},{components:a})):r.createElement(f,t({ref:n},p))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,t=new Array(i);t[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,t[1]=l;for(var m=2;m<i;m++)t[m]=a[m];return r.createElement.apply(null,t)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9795:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=a(7462),o=a(3366),i=(a(7294),a(3905)),t=["components"],l={title:"Apuntes - Polimorfismo y clases abstractas",sidebar_label:"Polimorfismo",slug:"/clases/polimorfismo/apuntes/polimorfismo",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,m={unversionedId:"clases/polimorfismo/Apuntes/polimorfismo",id:"clases/polimorfismo/Apuntes/polimorfismo",title:"Apuntes - Polimorfismo y clases abstractas",description:"Polimorfismo",source:"@site/docs/clases/09-polimorfismo/Apuntes/00-polimorfismo.md",sourceDirName:"clases/09-polimorfismo/Apuntes",slug:"/clases/polimorfismo/apuntes/polimorfismo",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/apuntes/polimorfismo",draft:!1,tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1632109048,formattedLastUpdatedAt:"9/20/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Polimorfismo y clases abstractas",sidebar_label:"Polimorfismo",slug:"/clases/polimorfismo/apuntes/polimorfismo",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/polimorfismo"},next:{title:"Clases abstractas",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/polimorfismo/apuntes/abstract"}},p={},d=[{value:"Polimorfismo",id:"polimorfismo",level:2},{value:"Polimorfismo basado en herencia",id:"polimorfismo-basado-en-herencia",level:2},{value:"Herencia no-polim\xf3rfica",id:"herencia-no-polim\xf3rfica",level:3},{value:"Herencia polim\xf3rfica",id:"herencia-polim\xf3rfica",level:3},{value:"Sobrescribiendo la equivalencia de objetos",id:"sobrescribiendo-la-equivalencia-de-objetos",level:2}],c={toc:d};function u(e){var n=e.components,l=(0,o.Z)(e,t);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"polimorfismo"},"Polimorfismo"),(0,i.kt)("p",null,"El ",(0,i.kt)("strong",{parentName:"p"},"polimorfismo")," es la habilidad de los objetos de responder al mismo mensaje de distintas formas y tambi\xe9n el \xfaltimo de los pilares de la programaci\xf3n orientada a objetos que analizaremos. Con mensaje nos referimos a cuando un objeto recibe una invocaci\xf3n de uno de los servicios que ofrece en forma de m\xe9todos. Es decir, los objetos del mismo tipo pueden resolver la invocaci\xf3n de una misma operaci\xf3n (misma firma del m\xe9todo, misma sem\xe1ntica) de diferentes maneras."),(0,i.kt)("p",null,"Existen distintas formas de implementar el polimorfismo, nosotros veremos polimorfismo basado en herencia."),(0,i.kt)("h2",{id:"polimorfismo-basado-en-herencia"},"Polimorfismo basado en herencia"),(0,i.kt)("p",null,"Una ",(0,i.kt)("strong",{parentName:"p"},"operaci\xf3n")," especifica un servicio que se puede requerir de cualquier objeto para influir en su comportamiento o alterar su estado, el qu\xe9 hace. Un ",(0,i.kt)("strong",{parentName:"p"},"m\xe9todo")," es una implementaci\xf3n de una operaci\xf3n, un algoritmo ejecutable que resuelve el requerimiento, el c\xf3mo lo hace. En una jerarqu\xeda de herencia puede haber varios m\xe9todos para la misma operaci\xf3n, y el polimorfismo selecciona qu\xe9 m\xe9todo de la jerarqu\xeda se ejecuta en tiempo de ejecuci\xf3n. "),(0,i.kt)("p",null,"Recordemos que todas las clases derivadas heredan la interfaz de su clase base (sus operaciones y propiedades p\xfablicas). Sin embargo, como cada clase derivada es una entidad semi-independiente, cada una podr\xeda requerir resolver la respuesta al mismo mensaje de distinta forma. "),(0,i.kt)("p",null,"Por ejemplo, si tenemos la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," y una operaci\xf3n llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"EmitirSonido")," y sus derivadas ",(0,i.kt)("inlineCode",{parentName:"p"},"Perro"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Gato")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"Vaca"),". La operaci\xf3n es la misma, hacer un sonido, pero cada sub-tipo de animal emite un sonido distinto. Los perros ladran, los gatos maullan y las vacas mugen, son distintas formas de resolver la misma operaci\xf3n. "),(0,i.kt)("h3",{id:"herencia-no-polim\xf3rfica"},"Herencia no-polim\xf3rfica"),(0,i.kt)("p",null,"Implementemos el ejemplo anterior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Animal\n{\n    public string EmitirSonido() \n    {\n        return "\xa1Roar!";\n    }\n}\n\npublic class Perro : Animal\n{\n    public string EmitirSonido() \n    {\n        return "\xa1Woof!";\n    }\n}\n\npublic class Gato : Animal \n{\n    public string EmitirSonido() \n    {\n        return "\xa1Miau!";\n    }\n}\n')),(0,i.kt)("p",null,"El primer problema que enfrentaremos es una advertencia del compilador y del IDE: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Advertencia cuando ocultamos m\xe9todos de la clase base sin usar new",src:a(9412).Z,width:"1372",height:"134"})),(0,i.kt)("p",null,"Podremos compilar igual, pero nos advierten que los m\xe9todos declarados en los tipos derivados est\xe1n ocultado el m\xe9todo en la clase base. Y nos aconsejan que, si esa fue nuestra intensi\xf3n, deber\xedamos usar el operador ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," en la declaraci\xf3n. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Perro : Animal\n{\n    public new string EmitirSonido() \n    {\n        return "\xa1Woof!";\n    }\n}\n\npublic class Gato : Animal \n{\n    public new string EmitirSonido() \n    {\n        return "\xa1Miau!";\n    }\n}\n')),(0,i.kt)("p",null,"Agregando el operador ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," hacemos expl\xedcita nuestra intenci\xf3n de ocultar la implementaci\xf3n de la clase base. Veamos qu\xe9 pasa si ejecutamos el m\xe9todo desde los distintos tipos de instancia de la jerarqu\xeda:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    Animal animal = new Animal();\n    Perro perro = new Perro();\n    Gato gato = new Gato();\n\n    Console.WriteLine($"Animal: {animal.EmitirSonido()}");\n    Console.WriteLine($"Perro: {perro.EmitirSonido()}");\n    Console.WriteLine($"Gato: {gato.EmitirSonido()}");\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Animal: \xa1Roar!\nPerro: \xa1Woof!\nGato: \xa1Miau!\n")),(0,i.kt)("p",null,"Tal c\xf3mo se esperaba, \xbfno?. Sin embargo, observemos qu\xe9 sucede si guardamos los objetos de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"Perro")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"Gato")," en una variable de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    Animal animal = new Animal();\n    Animal perro = new Perro();\n    Animal gato = new Gato();\n\n    Console.WriteLine($"Animal: {animal.EmitirSonido()}");\n    Console.WriteLine($"Perro: {perro.EmitirSonido()}");\n    Console.WriteLine($"Gato: {gato.EmitirSonido()}");\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Animal: \xa1Roar!\nPerro: \xa1Roar!\nGato: \xa1Roar!\n")),(0,i.kt)("p",null,"Se ejecuta la implementaci\xf3n del tipo de la referencia, es decir, del tipo de la variable que apunta al objeto. Sin embargo, el objeto en memoria es efectivamente un perro o un gato. Esto se denomina ",(0,i.kt)("strong",{parentName:"p"},"herencia no-polim\xf3rfica"),". "),(0,i.kt)("p",null,"Cuando un m\xe9todo se oculta con la palabra reservada ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),", el entorno de ejecuci\xf3n no distingue el tipo del objeto en memoria, sino que se basa en el tipo de la variable que contiene la referencia. "),(0,i.kt)("h3",{id:"herencia-polim\xf3rfica"},"Herencia polim\xf3rfica"),(0,i.kt)("p",null,"Para implementar polimorfismo en C# debemos declarar el m\xe9todo en la clase base como ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," y redefinirlo en la clase derivada con ",(0,i.kt)("inlineCode",{parentName:"p"},"override"),". As\xed el entorno de ejecuci\xf3n podr\xe1 distinguir en tiempo de ejecuci\xf3n el tipo real del objeto en memoria. Se ejecutar\xe1 la implementaci\xf3n de la operaci\xf3n m\xe1s cercana en la jerarqu\xeda de herencia al tipo real de la instancia, independientemente del tipo de la referencia.  "),(0,i.kt)("p",null,"La palabra reservada ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"virtual"))," se usa para declarar un m\xe9todo que pueda ser sobrescrito por una clase derivada. La palabra reservada ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"override"))," se usa para sobrescribir un m\xe9todo ",(0,i.kt)("em",{parentName:"p"},"virtual")," de la clase base."),(0,i.kt)("p",null,"Transformemos el ejemplo de los animales para que aproveche el polimorfismo. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Animal\n{\n    public virtual string EmitirSonido() \n    {\n        return "\xa1Roar!";\n    }\n}\n\npublic class Perro : Animal\n{\n    public override string EmitirSonido() \n    {\n        return "\xa1Woof!";\n    }\n}\n\npublic class Gato : Animal \n{\n    public override string EmitirSonido() \n    {\n        return "\xa1Miau!";\n    }\n}\n\nstatic void Main(string[] args)\n{\n    Animal animal = new Animal();\n    Animal perro = new Perro();\n    Animal gato = new Gato();\n\n    Console.WriteLine($"Animal: {animal.EmitirSonido()}");\n    Console.WriteLine($"Perro: {perro.EmitirSonido()}");\n    Console.WriteLine($"Gato: {gato.EmitirSonido()}");\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Animal: \xa1Roar!\nPerro: \xa1Woof!\nGato: \xa1Miau!\n")),(0,i.kt)("p",null,"Observemos que a pesar de que el tipo de la variable es ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),", por polimorfismo se ejecutar\xe1 la implementaci\xf3n del tipo real del objeto."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de la referencia"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de la instancia"),(0,i.kt)("th",{parentName:"tr",align:null},"Modificador"),(0,i.kt)("th",{parentName:"tr",align:null},"Se ejecuta la implementaci\xf3n en..."),(0,i.kt)("th",{parentName:"tr",align:null},"Salida por consola"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"new")),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},"\xa1Woof!")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"virtual")),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},"\xa1Woof!")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Animal"),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"new")),(0,i.kt)("td",{parentName:"tr",align:null},"Animal"),(0,i.kt)("td",{parentName:"tr",align:null},"\xa1Roar!")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Animal"),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"virtual")),(0,i.kt)("td",{parentName:"tr",align:null},"Perro"),(0,i.kt)("td",{parentName:"tr",align:null},"\xa1Woof!")))),(0,i.kt)("p",null,"Probemos agregar un nuevo tipo derivado de ",(0,i.kt)("inlineCode",{parentName:"p"},"Gato")," y no invalidar la implementaci\xf3n del m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"EmitirSonido"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Gato : Animal \n{\n    public override string EmitirSonido() \n    {\n        return "\xa1Miau!";\n    }\n}\n\npublic class Gatito : Gato\n{\n}\n\nstatic void Main(string[] args)\n{\n    Animal animal = new Animal();\n    Animal perro = new Perro();\n    Animal gato = new Gato();\n    Animal gatito = new Gatito();\n\n    Console.WriteLine($"Animal: {animal.EmitirSonido()}");\n    Console.WriteLine($"Perro: {perro.EmitirSonido()}");\n    Console.WriteLine($"Gato: {gato.EmitirSonido()}");\n    Console.WriteLine($"Gatito: {gatito.EmitirSonido()}");\n}\n')),(0,i.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Animal: \xa1Roar!\nPerro: \xa1Woof!\nGato: \xa1Miau!\nGatito: \xa1Miau!\n")),(0,i.kt)("p",null,"Si no redefinimos la implementaci\xf3n del m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"EmitirSonido")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"Gatito"),", por polimorfismo se ejecutar\xe1 la implementaci\xf3n m\xe1s cercana en la jerarqu\xeda de herencia, en este caso en la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"Gato"),"."),(0,i.kt)("p",null,"Se puede aplicar el mismo mecanismo a las propiedades."),(0,i.kt)("h2",{id:"sobrescribiendo-la-equivalencia-de-objetos"},"Sobrescribiendo la equivalencia de objetos"))}u.isMDXComponent=!0},9412:function(e,n,a){n.Z=a.p+"assets/images/advertencia_polimorfismo-641d2e8538a114dd5f21e189e1378c5a.PNG"}}]);
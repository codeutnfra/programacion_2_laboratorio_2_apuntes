"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3683],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||t;return n?r.createElement(h,i(i({ref:a},d),{},{components:n})):r.createElement(h,i({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<t;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},896:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),t=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Programaci\xf3n multi-hilo",slug:"/clases/concurrencia/apuntes/programacion-multihilo",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s={unversionedId:"clases/concurrencia/Apuntes/programacion-multihilo",id:"clases/concurrencia/Apuntes/programacion-multihilo",isDocsHomePage:!1,title:"programacion-multihilo",description:"Programaci\xf3n multi-hilo",source:"@site/docs/clases/19-concurrencia/Apuntes/01-programacion-multihilo.md",sourceDirName:"clases/19-concurrencia/Apuntes",slug:"/clases/concurrencia/apuntes/programacion-multihilo",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/concurrencia/apuntes/programacion-multihilo",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1635147026,formattedLastUpdatedAt:"10/25/2021",sidebar_label:"Programaci\xf3n multi-hilo",sidebarPosition:1,frontMatter:{sidebar_label:"Programaci\xf3n multi-hilo",slug:"/clases/concurrencia/apuntes/programacion-multihilo",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Apuntes - Programaci\xf3n multi-hilo y concurrencia.",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/concurrencia/apuntes/concurrencia"},next:{title:"Cuestionario - Programaci\xf3n multi-hilo y concurrencia.",permalink:"/programacion_2_laboratorio_2_apuntes/docs/concurrencia/cuestionario"}},c=[{value:"Programaci\xf3n multi-hilo",id:"programaci\xf3n-multi-hilo",children:[{value:"Multitarea apropiativa",id:"multitarea-apropiativa",children:[]},{value:"Programaci\xf3n en paralelo",id:"programaci\xf3n-en-paralelo",children:[]}]},{value:"Trabajando con hilos",id:"trabajando-con-hilos",children:[]}],d={toc:c};function p(e){var a=e.components,n=(0,o.Z)(e,i);return(0,t.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"programaci\xf3n-multi-hilo"},"Programaci\xf3n multi-hilo"),(0,t.kt)("p",null,"Un ",(0,t.kt)("strong",{parentName:"p"},"proceso")," es un programa en ejecuci\xf3n que tiene asignados recursos tales como memoria e hilos. "),(0,t.kt)("p",null,"Un ",(0,t.kt)("strong",{parentName:"p"},"hilo (",(0,t.kt)("em",{parentName:"strong"},"thread"),")"),", tambi\xe9n llamado hebra o subproceso, es la unidad b\xe1sica a la que un sistema operativo asigna tiempo de procesamiento. Son los encargados de ejecutar nuestro c\xf3digo sentencia a sentencia. "),(0,t.kt)("p",null,"Por defecto cada proceso tiene un \xfanico hilo, es decir, s\xf3lo puede procesar una tarea a la vez. La ",(0,t.kt)("strong",{parentName:"p"},"programaci\xf3n multi-hilo (",(0,t.kt)("em",{parentName:"strong"},"multithreaded programming"),")")," permite que un proceso se ejecute sobre m\xfaltiples hilos y cada uno de esos hilos est\xe9 realizando una tarea distinta en paralelo. "),(0,t.kt)("p",null,"Todos los hilos de un mismo proceso comparten los mismos recursos asignados por el sistema operativo."),(0,t.kt)("h3",{id:"multitarea-apropiativa"},"Multitarea apropiativa"),(0,t.kt)("p",null,"Por cada n\xfacleo de la CPU, se puede ejecutar a lo mucho un proceso en cada momento. Windows y otros sistemas operativos modernos simulan la ejecuci\xf3n paralela de tareas dividiendo el tiempo de procesamiento entre los hilos, permitiendo que se vayan ejecutando uno despu\xe9s de otro en peque\xf1as fracciones de tiempo. El hilo que se est\xe1 ejecutando es suspendido cuando termina su fracci\xf3n de tiempo, luego el procesador permite que otro hilo se ejecute por el mismo periodo de tiempo. Esta forma de simular el paralelismo recibe el nombre de ",(0,t.kt)("strong",{parentName:"p"},"multitarea apropiativa (",(0,t.kt)("em",{parentName:"strong"},"preemptive multitasking"),")"),". "),(0,t.kt)("p",null,"Cuando Windows cambia de un hilo a otro, guarda el contexto donde se ejecut\xf3 el hilo actual y recarga el contexto del pr\xf3ximo hilo en la cola de ejecuci\xf3n. Hay que ser conscientes de que esto tambi\xe9n consume tiempo y recursos. "),(0,t.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Advertencia")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"No siempre tener m\xe1s hilos va a mejorar el rendimiento, se deben realizar pruebas de rendimiento comparando la ejecuci\xf3n de procesos con y sin m\xfaltiples hilos."))),(0,t.kt)("p",null,"Cada hilo tiene una ",(0,t.kt)("strong",{parentName:"p"},"pila de ejecuci\xf3n (",(0,t.kt)("em",{parentName:"strong"},"call stack"),")")," independiente, esto significa que cada uno maneja su propia secuencia de funciones a ejecutar. "),(0,t.kt)("p",null,"En algunos tipos de aplicaci\xf3n existen hilos especiales, por ejemplo un hilo para la interfaz de usuario (",(0,t.kt)("em",{parentName:"p"},"UI Thread"),") o el hilo principal en los programas de consola (",(0,t.kt)("em",{parentName:"p"},"Main Thread"),")."),(0,t.kt)("p",null,"Todas las aplicaciones de .NET tienen un ",(0,t.kt)("strong",{parentName:"p"},"conjunto de hilos (",(0,t.kt)("em",{parentName:"strong"},"thread pool"),")")," que se encarga de mantener un n\xfamero de hilos activos esperando para ejecutar cualquier trabajo que se requiera. Lo podemos ver como un lugar donde podemos poner en cola tareas a realizar y que se ajustar\xe1 autom\xe1ticamente de acuerdo a la demanda."),(0,t.kt)("p",null,"En .NET se sol\xeda utilizar la clase ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Thread"))," para trabajar con hilos, la cual es una abstracci\xf3n de bajo nivel. El ",(0,t.kt)("em",{parentName:"p"},"thread pool")," es una abstracci\xf3n de un nivel un poco m\xe1s alto, ya que se encargar\xe1 por si mismo de instanciar un hilo si existe la necesidad. Actualmente no se recomienda crear instancias de ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"Thread"))," ya que existen nuevas soluciones que fueron afinadas para cubrir de forma eficiente y sencilla la gran mayor\xeda de los escenarios reales."),(0,t.kt)("p",null,"Las clases con las que trabajaremos son abstracciones de alto nivel que ponen en cola trabajo para que sea resuelto por el ",(0,t.kt)("em",{parentName:"p"},"thread pool"),". "),(0,t.kt)("h3",{id:"programaci\xf3n-en-paralelo"},"Programaci\xf3n en paralelo"),(0,t.kt)("p",null,"La ",(0,t.kt)("strong",{parentName:"p"},"programaci\xf3n en paralelo (",(0,t.kt)("em",{parentName:"strong"},"parallel programming"),")")," es un tipo de programaci\xf3n multi-hilo, que a su vez es una forma de concurrencia. Se utiliza cuando se necesita dividir una gran carga de trabajo computacional en partes independientes y ejecutarlas en paralelo, maximizando el uso de los n\xfacleos de la CPU."),(0,t.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Cuando procesamos en paralelo cada fragmento de trabajo debe ser tan independiente del resto como sea posible. "))),(0,t.kt)("h2",{id:"trabajando-con-hilos"},"Trabajando con hilos"),(0,t.kt)("p",null,"La clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Task")," representa una operaci\xf3n individual que ser\xe1 delegada y ejecutada en un hilo del thread pool, es decir, en paralelo al sub-proceso que la origina. "),(0,t.kt)("p",null,"Existen distintas formas de instanciar e iniciar un objeto de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"Task"),". "),(0,t.kt)("p",null,"En el siguiente ejemplo utilizaremos el constructor el cual tiene como par\xe1metro de entrada un delegado de tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"Action"),". Como ya vimos, los delegados ",(0,t.kt)("inlineCode",{parentName:"p"},"Action")," corresponden a aquellos m\xe9todos que no retornan ning\xfan valor. "),(0,t.kt)("p",null,"Para iniciar la ejecuci\xf3n del m\xe9todo en un hilo paralelo se deber\xe1 invocar al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Start"),"."),(0,t.kt)("p",null,"Por \xfaltimo se llama al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Wait")," para bloquear al hilo principal y evitar que se cierre la consola."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nclass EjemploHilos\n{\n    static void Accion()\n    {\n        Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");\n        Thread.Sleep(2000);\n    }\n\n    static void Main()\n    {\n        // Instancia una tarea pero no la inicia.\n        Task tarea = new Task(Accion);\n\n        // Inicia la tarea.\n        tarea.Start();\n\n        Console.WriteLine($"La tarea comenz\xf3 a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n\n        // Bloquea el hilo hasta que finaliza la tarea.\n        tarea.Wait();\n\n        Console.WriteLine($"La tarea finaliz\xf3. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n    }\n}\n')),(0,t.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"La tarea comenz\xf3 a ejecutarse. Hilo principal=1\nTask ID=1, Hilo secundario=4\nLa tarea finaliz\xf3. Hilo principal=1\n")),(0,t.kt)("p",null,"Observemos que el segundo mensaje est\xe1 ocurriendo en el hilo 4, mientras que los otros dos ocurren en el hilo principal. "),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"Thread.CurrentThread.ManagedThreadId")," retorna el id del hilo en el que se est\xe1 ejecutando esa instrucci\xf3n. La propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"Task.CurrentId")," retorna el id de la tarea, es decir, de la instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"Task"),"."),(0,t.kt)("p",null,"Otra forma de crear y ejecutar un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"Task")," al mismo tiempo es usar el m\xe9todo est\xe1tico ",(0,t.kt)("inlineCode",{parentName:"p"},"Run"),". Si usamos este m\xe9todo, la tarea se instanciar\xe1 e inicializar\xe1 al mismo tiempo, ejecutando el m\xe9todo en alg\xfan hilo disponible en el ",(0,t.kt)("em",{parentName:"p"},"thread pool"),". "),(0,t.kt)("p",null,"El ejemplo anterior con ",(0,t.kt)("inlineCode",{parentName:"p"},"Task.Run"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nclass EjemploHilos\n{\n    static void Accion()\n    {\n        Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");\n        Thread.Sleep(2000);\n    }\n\n    static void Main()\n    {\n        // Instancia e inicia una tarea.\n        Task tarea = Task.Run(Accion);\n\n        Console.WriteLine($"La tarea comenz\xf3 a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n\n        // Bloquea el hilo hasta que finaliza la tarea.\n        tarea.Wait();\n\n        Console.WriteLine($"La tarea finaliz\xf3. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n    }\n}\n')),(0,t.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Task ID=1, Hilo secundario=4\nLa tarea comenz\xf3 a ejecutarse. Hilo principal=1\nLa tarea finaliz\xf3. Hilo principal=1\n")),(0,t.kt)("p",null,"Tambi\xe9n podemos usar expresiones lambda como argumentos tanto del constructor de ",(0,t.kt)("inlineCode",{parentName:"p"},"Task")," como del m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Run"),". "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nclass EjemploHilos\n{\n    static void Main()\n    {\n        // Instancia e inicia una tarea. Utilizando expresiones lambda.\n        Task tarea = Task.Run(() =>\n        {\n            Console.WriteLine($"Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");\n            Thread.Sleep(2000);\n        });\n\n        Console.WriteLine($"La tarea comenz\xf3 a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n\n        // Bloquea el hilo hasta que finaliza la tarea.\n        tarea.Wait();\n\n        Console.WriteLine($"La tarea finaliz\xf3. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n    }\n}\n')),(0,t.kt)("p",null,"El resultado ser\xe1 el mismo. "),(0,t.kt)("p",null,"Para esperar que finalicen dos o m\xe1s hilos antes de continuar, se debe utilizar el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"WaitAll")," que bloquea el hilo actual hasta que finalicen todas las tareas pasadas como argumento del m\xe9todo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nclass EjemploHilos\n{\n    static void Main()\n    {\n        Action accion = () =>\n        {\n            Thread.Sleep(new Random().Next(1000, 5000));\n            Console.WriteLine($"{DateTime.Now}: Task ID={Task.CurrentId}, Hilo secundario={Thread.CurrentThread.ManagedThreadId}");\n        };\n\n        // Instancia e inicia una tarea.\n        Task tarea = Task.Run(accion);\n        Task otraTarea = Task.Run(accion);\n\n        Console.WriteLine($"{DateTime.Now}: Las tareas comenzaron a ejecutarse. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n\n        // Bloquea el hilo hasta que finalizan todas las tarea pasadas como argumento del m\xe9todo.\n        Task.WaitAll(tarea, otraTarea);\n\n        Console.WriteLine($"{DateTime.Now}: Las tareas finalizaron. Hilo principal={Thread.CurrentThread.ManagedThreadId}");\n    }\n}\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[340],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,r=function(e,a){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var a=i.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},p=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,z=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(z,t(t({ref:a},p),{},{components:n})):i.createElement(z,t({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,t=new Array(o);t[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,t[1]=s;for(var c=2;c<o;c++)t[c]=n[c];return i.createElement.apply(null,t)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5368:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),t=["components"],s={title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Serializaci\xf3n",slug:"/clases/serializacion/apuntes/serializacion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},l=void 0,c={unversionedId:"clases/serializacion/Apuntes/serializacion-json",id:"clases/serializacion/Apuntes/serializacion-json",isDocsHomePage:!1,title:"Apuntes - Archivos y serializaci\xf3n",description:"Serializaci\xf3n",source:"@site/docs/clases/14-serializacion/Apuntes/02-serializacion-json.md",sourceDirName:"clases/14-serializacion/Apuntes",slug:"/clases/serializacion/apuntes/serializacion",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/serializacion",tags:[],version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1631930057,formattedLastUpdatedAt:"9/17/2021",sidebarPosition:2,frontMatter:{title:"Apuntes - Archivos y serializaci\xf3n",sidebar_label:"Serializaci\xf3n",slug:"/clases/serializacion/apuntes/serializacion",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Trabajando con archivos",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/archivos"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/serializacion/apuntes/cuestionario"}},p=[{value:"Serializaci\xf3n",id:"serializaci\xf3n",children:[{value:"Usos de serializar",id:"usos-de-serializar",children:[]}]},{value:"Formatos de serializaci\xf3n",id:"formatos-de-serializaci\xf3n",children:[]},{value:"Serializaci\xf3n XML",id:"serializaci\xf3n-xml",children:[]},{value:"Serializaci\xf3n JSON",id:"serializaci\xf3n-json",children:[{value:"Serializando a JSON",id:"serializando-a-json",children:[]},{value:"Deserializando JSON",id:"deserializando-json",children:[]}]}],u={toc:p};function d(e){var a=e.components,n=(0,r.Z)(e,t);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"serializaci\xf3n"},"Serializaci\xf3n"),(0,o.kt)("p",null,"La ",(0,o.kt)("strong",{parentName:"p"},"serializaci\xf3n")," es el proceso de convertir el estado de un objeto a un formato espec\xedfico con el objetivo de transmitirlo a otro sistema o para almacenarlo en un archivo, en memoria o en una base de datos."),(0,o.kt)("p",null,"Su prop\xf3sito principal es guardar el estado del objeto (los valores que tienen sus atributos en ese momento) para recrearlo en alg\xfan momento en el futuro. El proceso contrario, recuperar un objeto que fue serializado, se conoce como ",(0,o.kt)("strong",{parentName:"p"},"deserializaci\xf3n"),". "),(0,o.kt)("h3",{id:"usos-de-serializar"},"Usos de serializar"),(0,o.kt)("p",null,"La serializaci\xf3n permite al desarrollador almacenar el estado de un objeto y recrearlo a necesidad. El objetivo puede ser persistirlo o intercambiar datos con otro sistema. "),(0,o.kt)("p",null,"Entre sus usos m\xe1s frecuentes se encuentran:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enviar el objeto a una aplicaci\xf3n o sistema externo a trav\xe9s de servicios web u otros sistemas de comunicaci\xf3n."),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("h2",{id:"formatos-de-serializaci\xf3n"},"Formatos de serializaci\xf3n"),(0,o.kt)("p",null,"Siempre que serializamos lo hacemos a un formato espec\xedfico, uno que luego pueda ser reinterpretado para rearmar el objeto. Existen docenas de formatos que se pueden especificar, pero los m\xe1s comunes son ",(0,o.kt)("strong",{parentName:"p"},"Extensible Markup Language (XML)")," y ",(0,o.kt)("strong",{parentName:"p"},"JavaScript Object Notation (JSON)"),"."),(0,o.kt)("p",null,"El formato JSON es m\xe1s compacto y se suele utilizar en entornos web y mobile. Esto sucede por dos motivos, primero es m\xe1s liviano y por lo tanto la carga de datos que tiene que viajar por la red es menor, y segundo porque se ha convertido en un estandar al ser el formato de serializaci\xf3n nativo de JavaScript. "),(0,o.kt)("p",null,"El formato XML contiene m\xe1s informaci\xf3n (es m\xe1s pesado) pero sigue siendo utilizado principalmente para manejar la comunicaci\xf3n con aplicaciones que tienen cierto tiempo de antiguedad y no soportan la comunicaci\xf3n en otros formatos."),(0,o.kt)("h2",{id:"serializaci\xf3n-xml"},"Serializaci\xf3n XML"),(0,o.kt)("h2",{id:"serializaci\xf3n-json"},"Serializaci\xf3n JSON"),(0,o.kt)("p",null,"El formato ",(0,o.kt)("strong",{parentName:"p"},"JavaScript Object Notation (JSON)")," es un estandar abierto que se suele utilizar para transferir datos a trav\xe9s de la web. "),(0,o.kt)("p",null,"La serializaci\xf3n JSON transforma las propiedades ",(0,o.kt)("strong",{parentName:"p"},"p\xfablicas")," de un objeto en una cadena de texto, array de bytes o en un stream que cumpla con la ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8259"},"especificaci\xf3n de JSON"),". "),(0,o.kt)("h3",{id:"serializando-a-json"},"Serializando a JSON"),(0,o.kt)("p",null,"El espacio de nombres ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," provee funcionalidad para serializar y deserializar JSON. Trabajaremos principalmente con la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonSerializer")," la cual expone los m\xe9todos ",(0,o.kt)("inlineCode",{parentName:"p"},"Serialize")," para serializar y ",(0,o.kt)("inlineCode",{parentName:"p"},"Deserialize")," para deserializar."),(0,o.kt)("p",null,"Veamos el siguiente ejemplo donde tenemos la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Empleado"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Empleado\n{\n    private string nombreCompleto;\n    private DateTime fechaNacimiento;\n    private List<Empleado> personalACargo;\n    private decimal salario;\n\n    public string NombreCompleto\n    {\n        get \n        {\n            return nombreCompleto;\n        }\n        set\n        {\n            nombreCompleto = value;\n        }\n    }\n    \n    public DateTime FechaNacimiento\n    {\n        get \n        {\n            return fechaNacimiento;\n        }\n        set\n        {\n            fechaNacimiento = value;\n        }\n    }\n    \n    protected decimal Salario\n    {\n        get \n        {\n            return salario;\n        }\n        set\n        {\n            salario = value;\n        }\n    }\n\n    public Empleado() \n    {\n        personalACargo = new List<Empleado>();\n    }\n\n    public Empleado(string nombreCompleto, DateTime fechaNacimiento, decimal salario) : this()\n    {\n        this.nombreCompleto = nombreCompleto;\n        this.fechaNacimiento = fechaNacimiento;\n        this.salario = salario;\n    }        \n}\n")),(0,o.kt)("p",null,"Para serializar a JSON tendremos que usar el m\xe9todo gen\xe9rico y est\xe1tico ",(0,o.kt)("inlineCode",{parentName:"p"},"Serialize")," de la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonSerializer"),", que recibe como argumento el objeto a serializar. Este m\xe9todo retorna el objeto serializado como una cadena de texto. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            string jsonString = JsonSerializer.Serialize(empleado);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"NombreCompleto":"Juan Perez","FechaNacimiento":"1990-03-25T00:00:00","Salario":50000}\n')),(0,o.kt)("p",null,"El JSON de salida se encuentra ",(0,o.kt)("strong",{parentName:"p"},"minificado"),", eso significa que por defecto se remueven todos los espacios en blanco, la indentaci\xf3n y los saltos de l\xednea. Esto tiene como beneficio que la cadena de texto resultante es m\xe1s liviana."),(0,o.kt)("p",null,"Si quisieramos verlo indentado y m\xe1s f\xe1cil de leer, podremos usar una sobrecarga del m\xe9todo que recibe un objeto de tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," el cual sirve para configurar las opciones de serializaci\xf3n. Una de esas opciones es la propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteIndented"),", que si le asignamos el valor ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," provocar\xe1 que el resultado se encuentre indentado. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.Json;\n\nnamespace Serializacion\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            Empleado empleado = new Empleado("Juan Perez", new DateTime(1990, 03, 25), 50000M);\n\n            // Genero el objeto de configuraci\xf3n de la serializaci\xf3n.\n            JsonSerializerOptions opciones = new JsonSerializerOptions();\n            opciones.WriteIndented = true;\n\n            // Existe una sobrecarga del m\xe9todo Serialize que recibe el objeto de configuraci\xf3n. \n            string jsonString = JsonSerializer.Serialize(empleado, opciones);\n\n            Console.WriteLine(jsonString);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"La salida del c\xf3digo anterior es:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NombreCompleto": "Juan Perez",\n  "FechaNacimiento": "1990-03-25T00:00:00",\n  "Salario": 50000\n}\n')),(0,o.kt)("h3",{id:"deserializando-json"},"Deserializando JSON"))}d.isMDXComponent=!0}}]);
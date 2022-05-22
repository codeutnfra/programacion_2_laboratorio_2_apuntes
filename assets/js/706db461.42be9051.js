"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[2276],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return p}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return n?t.createElement(b,l(l({ref:a},d),{},{components:n})):t.createElement(b,l({ref:a},d))}));function p(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60242:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Apuntes - Conexi\xf3n a bases de datos",sidebar_label:"Conexi\xf3n a base de datos",slug:"/clases/databases/apuntes/databases",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},i=void 0,c={unversionedId:"clases/databases/Apuntes/conexion-base-de-datos",id:"clases/databases/Apuntes/conexion-base-de-datos",title:"Apuntes - Conexi\xf3n a bases de datos",description:"\xbfC\xf3mo nos conectamos a la base de datos?",source:"@site/docs/clases/17-databases/Apuntes/00-conexion-base-de-datos.md",sourceDirName:"clases/17-databases/Apuntes",slug:"/clases/databases/apuntes/databases",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/databases/apuntes/databases",draft:!1,tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1635730785,formattedLastUpdatedAt:"10/31/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Conexi\xf3n a bases de datos",sidebar_label:"Conexi\xf3n a base de datos",slug:"/clases/databases/apuntes/databases",hide_table_of_contents:!1,hide_title:!1,author:null,authorURL:null},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/programacion_2_laboratorio_2_apuntes/docs/databases"},next:{title:"Cuestionario",permalink:"/programacion_2_laboratorio_2_apuntes/docs/clases/databases/apuntes/cuestionario"}},d={},m=[{value:"\xbfC\xf3mo nos conectamos a la base de datos?",id:"c\xf3mo-nos-conectamos-a-la-base-de-datos",level:2},{value:"Consultar los datos de una tabla",id:"consultar-los-datos-de-una-tabla",level:2},{value:"Manipulando los datos de una tabla",id:"manipulando-los-datos-de-una-tabla",level:2}],u={toc:m};function p(e){var a=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"c\xf3mo-nos-conectamos-a-la-base-de-datos"},"\xbfC\xf3mo nos conectamos a la base de datos?"),(0,r.kt)("p",null,"Primero se debe instalar el paquete ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Data.SqlClient"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bot\xf3n derecho sobre el proyecto"),(0,r.kt)("li",{parentName:"ol"},"Seleccionar ",(0,r.kt)("em",{parentName:"li"},"Administrar Paquete NuGet")),(0,r.kt)("li",{parentName:"ol"},"Examinar"),(0,r.kt)("li",{parentName:"ol"},"Buscar ",(0,r.kt)("em",{parentName:"li"},"System.Data.SqlClient")),(0,r.kt)("li",{parentName:"ol"},"Instalar"),(0,r.kt)("li",{parentName:"ol"},"Agregar al c\xf3digo fuente ",(0,r.kt)("inlineCode",{parentName:"li"},"using System.Data.SqlClient"))),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_Ha-fMUFS3I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"Para conectarnos a la base de datos utilizamos una instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlConnection"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'SqlConnection connection; // Puente.\nSqlCommand command;      // Quien lleva la consulta.\nSqlDataReader reader;   // Quien trae los datos.\n\nstatic ConexionSql()\n{\n    connection = new SqlConnection(@"Data Source = [Nombre del servidor];\n                                Database = [Nombre de la base de datos];\n                                Trusted_Connection = True;");\n\n    command = new SqlCommand();\n    command.CommandType = CommandType.Text;\n    command.Connection = connection;\n}\n')),(0,r.kt)("h2",{id:"consultar-los-datos-de-una-tabla"},"Consultar los datos de una tabla"),(0,r.kt)("p",null,"Una opci\xf3n para realizar una consulta es utilizando bloque ",(0,r.kt)("strong",{parentName:"p"},"Try-Catch-Finally")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'try\n{\n    command.CommandText = "SELECT * FROM tabla";\n    connection.Open();\n    reader = command.ExecuteReader();\n\n    while (reader.Read())\n    {\n        // L\xf3gica\n    }\n}\ncatch (Exception)\n{\n    throw new Exception("Error de conexi\xf3n a la base de datos");\n}\nfinally \n{\n    if (connection.State == ConnectionState.Open)\n    {\n        connection.Close();\n    }\n}\n')),(0,r.kt)("p",null,"Otra opci\xf3n es usar la directiva ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," que cierra autom\xe1ticamente la conexi\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using (SqlConnection connection = new SqlConnection(connection))  \n{  \n    connection.Open();  \n    // L\xf3gica\n}  \n")),(0,r.kt)("h2",{id:"manipulando-los-datos-de-una-tabla"},"Manipulando los datos de una tabla"),(0,r.kt)("p",null,"Debemos utilizar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteNonQuery")," del objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlCommand")," que ejecuta la sentencia y guarda los cambios en la base de datos. "),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Si utilizamos la instancia de ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlCommand")," como atributo, despu\xe9s de ejecutar el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteNonQuery")," se deber\xe1 invocar al m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"Clear"),"."))),(0,r.kt)("p",null,"Ejemplo de consulta parametrizada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'connection.Open();\nSqlCommand sqlCommand = new SqlCommand();\nsqlCommand.CommandType = System.Data.CommandType.Text;\nsqlCommand.Connection = connection;\nsqlCommand.CommandText = "INSERT INTO tabla VALUES (@Name, @LastName, @Age)";\nsqlCommand.Parameters.AddWithValue("@Name", "Juana");\nsqlCommand.Parameters.AddWithValue("@LastName", "Perez");\nsqlCommand.Parameters.AddWithValue("@Age", "19");\nsqlCommand.ExecuteNonQuery();\nsqlCommand.Parameters.Clear();\n')))}p.isMDXComponent=!0}}]);
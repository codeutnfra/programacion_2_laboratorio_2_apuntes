"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[608,514],{895:function(e,t,n){n.d(t,{dK:function(){return c},_k:function(){return o},vc:function(){return l},rx:function(){return u},qo:function(){return i},Hk:function(){return s},Iz:function(){return m}});var r=n(1336),a=n.n(r);n(892)(a()),n(9574)(a()),n(4182)(a());var c=["en","es"],o=!0,l=null,u=null,i=8,s=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3012:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),a=n(6698),c=n(6742),o=n(4973);function l(e){var t=e.year,n=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,n.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(c.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function u(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(l,e))})))))}function i(e){var t,n,c=e.archive,l=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=(t=c.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],r=e.get(n)||[];return e.set(n,[t].concat(r))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(a.Z,{title:l,description:i},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},l),r.createElement("p",{className:"hero__subtitle"},i))),r.createElement("main",null,s.length>0&&r.createElement(u,{years:s})))}}}]);
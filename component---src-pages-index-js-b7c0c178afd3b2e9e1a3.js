(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(159),i=a(165),c=a(4),o=a.n(c),s=a(171),m=a(236),u=a(237),d=a(238),p=a(239),E=a(240),f=a(168),g=a.n(f),y=function(e){var t=e.id,a=e.image,n=e.title,i=e.slug,c=e.date,o=e.isHome,s=t>1?4:6;return r.a.createElement(m.a,{sm:o?s:4,className:"pb-4"},r.a.createElement(u.a,{className:"post-item"},r.a.createElement(g.a,{className:"card-img-top",fluid:a}),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(l.a,{to:i},r.a.createElement("h3",null,n))),r.a.createElement(E.a,null,c))))};y.propTypes={title:c.PropTypes.string.isRequired,slug:c.PropTypes.string.isRequired,date:c.PropTypes.string.isRequired};var v=y,h=a(241),w=function(e){var t=e.posts,a=e.isHome;return r.a.createElement(n.Fragment,null,r.a.createElement(s.If,{condition:t.length>0},r.a.createElement(s.Then,null,r.a.createElement(h.a,null,t.map(function(e,t){var n=e.node,l=n.frontmatter,i=l.title,c=l.date,o=l.featuredImage,s=n.fields.slug;return r.a.createElement(v,{title:i,image:o.childImageSharp.fluid,date:c,slug:s,key:t,id:t,isHome:a})}))),r.a.createElement(s.Else,null,r.a.createElement("h3",null,"No Post.."))))};w.propTypes={posts:o.a.array.isRequired};var k=w,b=a(242);a.d(t,"pageQuery",function(){return N});t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:e.location,title:"just a lonely man likes coding",keywords:["javascript","react","angular","vue","laravel","website dev","android","พัฒนาเว็บไซต์","เขียนเว็บ","เขียนแอพ"],isHome:!0},r.a.createElement(k,{posts:t,isHome:!0}),r.a.createElement(h.a,{className:"d-flex justify-content-center mt-2 mb-5"},r.a.createElement(s.If,{condition:t.length>=11},r.a.createElement(s.Then,null,r.a.createElement(l.a,{to:"2"},r.a.createElement(b.a,{color:"primary",size:"lg"},"บทความเพิ่มเติม"))))))};var N="829167332"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(160);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e,t,a){"use strict";var n=a(164),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(169),s=a.n(o),m=function(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,o=n.data.site,m=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c+" | "+o.siteMetadata.title},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c+" | "+o.siteMetadata.title},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})};m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},163:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},164:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",description:"just a lonely man likes coding.",author:"Nattapon Pondongnok"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(231),i=a(230),c=a(232),o=a(233),s=a(243),m=a(234),u=a(235),d=a(159),p=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return r.a.createElement(i.a,{color:"light",fixed:"top",dark:!0,expand:"md",className:"navbar-red-shadow"},r.a.createElement(l.a,null,r.a.createElement(c.a,{href:"/"},"naijab.com"),r.a.createElement(o.a,{onClick:function(){return a(!t)}}),r.a.createElement(s.a,{isOpen:t,navbar:!0},r.a.createElement(m.a,{className:"ml-auto",navbar:!0},r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/app",className:"nav-link"},"APP")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/web",className:"nav-link"},"WEB")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/game",className:"nav-link"},"GAME")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/tech",className:"nav-link"},"TECH")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/life",className:"nav-link"},"LiFE")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/all",className:"nav-link"},"ALL"))))))},E=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://naijab.com"},"naijab.com")," ",", Built with",r.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby")))},f=a(162);t.a=function(e){var t=e.isHome?"home-container":"default-container";return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{title:e.title,description:e.description,keywords:e.keywords}),r.a.createElement(p,null),r.a.createElement(l.a,{className:t},e.children),r.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b7c0c178afd3b2e9e1a3.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(159),c=a(165);t.default=function(e){return r.a.createElement(c.a,{title:"404 Not Found",location:e.location,isPostDetail:!0},r.a.createElement("h1",null,"404 Not Found"),r.a.createElement("p",null,"ขออภัยไม่พบหน้าที่ต้องการ :( ",r.a.createElement("br",null)," ",r.a.createElement(l.a,{to:"/all"},"ลองค้นหาบทความ")))}},159:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(32),o=a.n(i);a.d(t,"a",function(){return o.a});a(160);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e,t,a){"use strict";var n=a(164),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(169),s=a.n(o),u=function(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,o=n.data.site,u=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i+" | "+o.siteMetadata.title},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i+" | "+o.siteMetadata.title},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u},163:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},164:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",description:"just a lonely man likes coding.",author:"Nattapon Pondongnok"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(231),c=a(230),i=a(232),o=a(233),s=a(243),u=a(234),m=a(235),d=a(159),p=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return r.a.createElement(c.a,{color:"light",fixed:"top",dark:!0,expand:"md",className:"navbar-red-shadow"},r.a.createElement(l.a,null,r.a.createElement(i.a,{href:"/"},"naijab.com"),r.a.createElement(o.a,{onClick:function(){return a(!t)}}),r.a.createElement(s.a,{isOpen:t,navbar:!0},r.a.createElement(u.a,{className:"ml-auto",navbar:!0},r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/app",className:"nav-link"},"APP")),r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/web",className:"nav-link"},"WEB")),r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/game",className:"nav-link"},"GAME")),r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/tech",className:"nav-link"},"TECH")),r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/life",className:"nav-link"},"LiFE")),r.a.createElement(m.a,null,r.a.createElement(d.a,{to:"/all",className:"nav-link"},"ALL"))))))},E=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://naijab.com"},"naijab.com")," ",", Built with",r.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby")))},f=a(162);t.a=function(e){var t=e.isHome?"home-container":"default-container";return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{title:e.title,description:e.description,keywords:e.keywords}),r.a.createElement(p,null),r.a.createElement(l.a,{className:t},e.children),r.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-b773270d73ea4b6f16c2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,a){"use strict";a.r(t);var n=a(7),A=a.n(n),r=a(0),l=a.n(r),i=a(158),c=(a(175),a(177)),o=a(178),s=a.n(o),u=a(199),m="1377786559",E=function(){return l.a.createElement(i.b,{query:m,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return l.a.createElement("div",null,l.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),l.a.createElement("p",null,l.a.createElement("strong",null,a)," ",l.a.createElement("br",null)," แค่คนเหาชอบเขียนโค้ด คลั่งไคล้ Dark Souls และร้องเพลงเป็นชีวิตจิตใจ"," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/"+n.github},l.a.createElement(u.b,null))," ",l.a.createElement("a",{href:"https://facebook.com/"+n.facebook},l.a.createElement(u.a,null))," ",l.a.createElement("a",{href:"https://twitter.com/"+n.twitter},l.a.createElement(u.c,null))))},data:c})},d=a(163),p=a(161);a.d(t,"pageQuery",function(){return g});var f=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,A=a.next;return l.a.createElement(d.a,{location:this.props.location,title:t,isPostDetail:!0},l.a.createElement(p.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),l.a.createElement("h1",null,e.frontmatter.title),l.a.createElement("p",null,e.frontmatter.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("hr",null),l.a.createElement(E,null),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,n&&l.a.createElement(i.a,{to:n.fields.slug,rel:"prev"},"<-"," ",n.frontmatter.title)),l.a.createElement("li",null,A&&l.a.createElement(i.a,{to:A.fields.slug,rel:"next"},A.frontmatter.title," ","->"))))},t}(l.a.Component),g=(t.default=f,"3654438753")},158:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),A=a.n(n),r=a(4),l=a.n(r),i=a(32),c=a.n(i);a.d(t,"a",function(){return c.a});a(159);var o=A.a.createContext({}),s=function(e){return A.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),A=a.n(n),r=a(4),l=a.n(r),i=a(54),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){"use strict";var n=a(162),A=a(0),r=a.n(A),l=a(4),i=a.n(l),c=a(164),o=a.n(c);function s(e){var t=e.description,a=e.lang,A=e.meta,l=e.keywords,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(A)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=s},162:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",description:"just a lonely man likes coding.",author:"Nattapon Pondongnok"}}}}},163:function(e,t,a){"use strict";var n=a(0),A=a.n(n),r=a(205),l=a(200),i=a(201),c=a(202),o=a(206),s=a(203),u=a(204),m=a(158),E=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return A.a.createElement(l.a,{color:"light",fixed:"top",light:!0,expand:"md",className:"navbar-light-shadow"},A.a.createElement(i.a,{href:"/"},"naijab.com"),A.a.createElement(c.a,{onClick:function(){return a(!t)}}),A.a.createElement(o.a,{isOpen:t,navbar:!0},A.a.createElement(s.a,{className:"ml-auto",navbar:!0},A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/app",className:"nav-link"},"APP")),A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/web",className:"nav-link"},"WEB")),A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/game",className:"nav-link"},"GAME")),A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/tech",className:"nav-link"},"TECH")),A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/life",className:"nav-link"},"LiFE")),A.a.createElement(u.a,null,A.a.createElement(m.a,{to:"/all",className:"nav-link"},"ALL")))))},d=function(){return A.a.createElement("footer",null,A.a.createElement("p",null,"© ",(new Date).getFullYear()," ",A.a.createElement("a",{href:"https://naijab.com"},"naijab.com")," ",", Built with",A.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby")))};t.a=function(e){var t=e.isPostDetail?"default-container":"home-container";return A.a.createElement(n.Fragment,null,A.a.createElement(E,null),A.a.createElement(r.a,{className:t},e.children),A.a.createElement(d,null))}},177:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAHfKtyyqTtTlzBVkI//xAAcEAACAgIDAAAAAAAAAAAAAAACAwESABEEEzL/2gAIAQEAAQUC5cnVXYtgxj9UD2tdBY0pNJTcZ2P/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BEQi//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/AWOz/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECESExQSJRgf/aAAgBAQAGPwJRhi9sXlcXtDz0ouKye31k4cSPgmf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhQTGB/9oACAEBAAE/IbBSGYNlQAa+tRpIX5DpDTCBQ6Np1iNo5IR70xnPUn//2gAMAwEAAgADAAAAEATnwv/EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxACmbT/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQIBAT8QSMyn/8QAHRABAQADAAMBAQAAAAAAAAAAAREAITFBcYFRsf/aAAgBAQABPxC1YtHwE0e7hfIqV0ssfy5uzaBeMNZoZ10tHvEkQBHS+L/fmXNSI23XBGsBDXT1+ZLKCB4uCMAlDmf/2Q==",width:50,height:50,src:"/static/734154b0a080747aa0b1e7eff2df71b7/be31c/profile.jpg",srcSet:"/static/734154b0a080747aa0b1e7eff2df71b7/be31c/profile.jpg 1x,\n/static/734154b0a080747aa0b1e7eff2df71b7/83167/profile.jpg 1.5x,\n/static/734154b0a080747aa0b1e7eff2df71b7/a795d/profile.jpg 2x,\n/static/734154b0a080747aa0b1e7eff2df71b7/ec61a/profile.jpg 3x"}}},site:{siteMetadata:{author:"Nattapon Pondongnok",social:{github:"naijab",facebook:"naijabcom",twitter:"_naijab"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f0ed76fe3ba1e0f3dd30.js.map
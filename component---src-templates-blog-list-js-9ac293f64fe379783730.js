(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,a,t){"use strict";t.r(a);t(286);var n=t(0),r=t.n(n),l=t(166),o=t(182),c=t(158),s=t(292),i=function(e){var a=e.isFirst,t=e.isLast,n=e.prevPage,l=e.nextPage;return r.a.createElement("div",{className:"bottom-container"},!a&&r.a.createElement(c.a,{to:n},r.a.createElement(s.a,{size:"lg",className:"float-left"}," << ใหม่กว่านี้")),!t&&r.a.createElement(c.a,{to:l},r.a.createElement(s.a,{size:"lg",className:"float-right"},"เก่ากว่านี้ >> ")))};t.d(a,"pageQuery",function(){return u});a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=e.pageContext,n=t.currentPage,c=1===n,s=n===t.numPages,u=n-1==1?"/":"/page/"+(n-1).toString(),d="/page/"+(n+1).toString();return r.a.createElement(l.a,null,r.a.createElement(o.a,{posts:a}),r.a.createElement(i,{prevPage:u,nextPage:d,isFirst:c,isLast:s}))};var u="225096166"},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(32),s=t.n(c);t.d(a,"a",function(){return s.a});t(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},159:function(e,a,t){var n;e.exports=(n=t(163))&&n.default||n},162:function(e){e.exports={data:{logoImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVQY02M4dPyE6KWLF7teP3mSyYAGHB0dmYFYE4hFoHxlJycnbhAbSDOBMEwtnH3t5s0Vezas///h4vn/r3/+ClOSlw9wd3dPB2oOAeIcIM4CYj8gzgDiFiAuA2oWAtJhQBwIVZMMxE1AnMbw6OnT9R8O7Pn/9vCB/4+/fEuQEhVxBhqYBpTsBuIioOYKqEHtQJwNxA1A7ALEmUAcBcSNQJwExAlAnMrw9M9f6ddXL898fepEWfX//8jeZYfSpkCsjhQE7FCaA4jZgJgFOZgAlApg4UsCTegAAAAASUVORK5CYII=",width:168,height:32,src:"/static/ac7fb7e5b002f3386a90a038c7685a18/3470c/logo-naijab-with-text-dark.png",srcSet:"/static/ac7fb7e5b002f3386a90a038c7685a18/3470c/logo-naijab-with-text-dark.png 1x,\n/static/ac7fb7e5b002f3386a90a038c7685a18/fc991/logo-naijab-with-text-dark.png 1.5x,\n/static/ac7fb7e5b002f3386a90a038c7685a18/8abdb/logo-naijab-with-text-dark.png 2x,\n/static/ac7fb7e5b002f3386a90a038c7685a18/50012/logo-naijab-with-text-dark.png 3x"}}}}}},163:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(55),s=t(2),i=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=i},164:function(e){e.exports={data:{site:{siteMetadata:{author:"Nattapon Pondongnok",siteUrl:"https://naijab.com/",social:{email:"nainatjab999@gmail.com",github:"naijab",facebook:"naijabcom",twitter:"_naijab"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",slogan:"just a lonely man likes coding.",description:"just a lonely man likes coding.",keywords:["linux","javascript","kotlin","react","angular","vue","laravel","php","website dev","android","ios","flutter","android dev","mobile dev","ทำเว็บไซต์","ทำแอพ","พัฒนาเว็บไซต์","เขียนเว็บ","เขียนแอพ","หัดทำเว็บไซต์","เริ่มต้นทำเว็บไซต์","ทำแอพง่ายๆ","naijab.com","nattapon pondongnok"],author:"Nattapon Pondongnok",siteUrl:"https://naijab.com/",key:{facebookAppId:"155791385048238"},social:{github:"naijab",facebook:"naijabcom",twitter:"_naijab"}}},defaultFeaturedImage:{publicURL:"/static/default_featured_image-7124203e274ca8463ecef6823da14d2b.jpg"}}}},166:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(289),o=(t(160),t(162)),c=t(288),s=t(293),i=t(290),u=t(291),d=t(158),m=t(161),f=t.n(m),p=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1],m=o.data.logoImage;return r.a.createElement(c.a,{fixed:"top",expand:"md",className:"navbar-white-shadow"},r.a.createElement(l.a,null,r.a.createElement(d.a,{to:"/",className:"navbar-brand"},r.a.createElement(f.a,{fixed:m.childImageSharp.fixed,className:"align-middle"})),r.a.createElement("div",{className:"d-md-none menu-mobile-trigger",onClick:function(){return t(!a)}},"MENU"),r.a.createElement(s.a,{isOpen:a,navbar:!0},r.a.createElement(i.a,{className:"ml-auto",navbar:!0},r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/",className:"nav-link"},"ALL")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/tag/life",className:"nav-link"},"LiFE")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/tag/programming",className:"nav-link"},"PROGRAMMING")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/tag/game",className:"nav-link"},"GAME")),r.a.createElement(u.a,null,r.a.createElement(d.a,{to:"/tag/tech",className:"nav-link"},"TECH"))))))},g=t(164),b=t(292),h=t(178),E=function(){var e=g.data.site.siteMetadata,a=e.author,t=e.siteUrl,n=e.social;return r.a.createElement("footer",null,r.a.createElement("p",null,"follow naijab at:",r.a.createElement("div",{className:"p-1"},r.a.createElement("a",{href:"https://github.com/"+n.github},r.a.createElement(b.a,{outline:!0,className:"mb-2"},r.a.createElement(h.b,null)," github")),"  ",r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},r.a.createElement(b.a,{color:"info",className:"mb-2",outline:!0},r.a.createElement(h.c,null)," twitter")),"  ",r.a.createElement("a",{href:"https://facebook.com/"+n.facebook},r.a.createElement(b.a,{color:"primary",className:"mb-2",outline:!0},r.a.createElement(h.a,null)," facebook")))),r.a.createElement("p",{className:"copyright"},"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:t},"naijab.com")," by"," ",r.a.createElement("a",{href:"mailto:"+n.email},a),r.a.createElement("br",null)," Built with ",r.a.createElement("a",{href:"https://reactjs.org/"},"React")," and"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},v=t(165),y=t(171),j=t.n(y),w=t(172),A=t.n(w),N=function(e){var a=e.title,t=e.slug,n=e.featuredImage,l=e.keywords,o=e.description,c=e.lang,s=(e.meta,v.data),i=s.site,u=s.defaultFeaturedImage,d=(a||i.siteMetadata.slogan)+" | "+i.siteMetadata.title,m=l.length>0?A()(l.concat(i.siteMetadata.keywords)).join(", "):i.siteMetadata.keywords.join(", "),f=o||i.siteMetadata.description,p=n?""+i.siteMetadata.siteUrl+n.substring(1):""+i.siteMetadata.siteUrl+u.publicURL.substring(1),g=t?""+i.siteMetadata.siteUrl+t.substring(1):""+i.siteMetadata.siteUrl;return r.a.createElement(j.a,{htmlAttributes:{lang:c},title:d,titleTemplate:"%s",meta:[{name:"description",content:f},{name:"keywords",content:m},{property:"fb:app_id",content:i.siteMetadata.key.facebookAppId},{property:"og:type",content:"website"},{property:"og:title",content:d},{property:"og:url",content:g},{property:"og:image",content:p},{property:"og:description",content:f},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+i.siteMetadata.social.twitter},{name:"twitter:title",content:d},{name:"twitter:image",content:p},{name:"twitter:description",content:f}]})};N.defaultProps={lang:"th",meta:[],keywords:[]};var O=N;a.a=function(e){var a=e.isSmall?"post-container":"default-container";return r.a.createElement(n.Fragment,null,r.a.createElement(O,{title:e.title,featuredImage:e.featuredImage,description:e.description,keywords:e.keywords,slug:e.slug}),r.a.createElement(p,null),r.a.createElement(l.a,{className:a},e.children),r.a.createElement(E,null))}},169:function(e,a,t){var n,r,l;r=[a,t(4)],void 0===(l="function"==typeof(n=function(e,a){"use strict";function t(e){return"function"==typeof e.children?e.children():e.children||null}function n(e){return t(e)}function r(e){return t(e)}function l(e){var a=e.condition,t=e.children;return null==t?null:[].concat(t).find(function(e){return e.type!==r^!a})||null}var o;Object.defineProperty(e,"__esModule",{value:!0}),e.Then=n,e.Else=r,e.If=l,e.Unless=s,e.When=i,e.default=void 0,a=(o=a)&&o.__esModule?o:{default:o},n.propTypes=r.propTypes={children:a.default.oneOfType([a.default.func,a.default.node])};var c=a.default.oneOfType([a.default.instanceOf(n),a.default.instanceOf(r),a.default.node]);function s(e){var a=e.condition,n=e.children;return!a&&n?t({condition:a,children:n}):null}function i(e){var a=e.condition,n=e.children;return a&&n?t({condition:a,children:n}):null}l.propTypes={condition:a.default.bool.isRequired,children:a.default.oneOfType([a.default.arrayOf(c),c])},s.propTypes={condition:a.default.bool.isRequired,children:a.default.oneOfType([a.default.func,a.default.node])},s.defaultProps={children:null},i.propTypes={condition:a.default.bool.isRequired,children:a.default.oneOfType([a.default.func,a.default.node])},i.defaultProps={children:null},l.Then=n,l.Else=r,l.When=i,l.Unless=s;var u=l;e.default=u})?n.apply(a,r):n)||(e.exports=l)},170:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},182:function(e,a,t){"use strict";t(160);var n=t(0),r=t.n(n),l=t(169),o=t(158),c=t(201),s=t(154),i=t(155),u=t(4),d=t.n(u),m=t(156),f=t.n(m),p=t(157),g={tag:p.h,inverse:d.a.bool,color:d.a.string,block:Object(p.d)(d.a.bool,'Please use the props "body"'),body:d.a.bool,outline:d.a.bool,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.block,o=e.body,c=e.inverse,u=e.outline,d=e.tag,m=e.innerRef,g=Object(i.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(p.e)(f()(a,"card",!!c&&"text-white",!(!l&&!o)&&"card-body",!!n&&(u?"border":"bg")+"-"+n),t);return r.a.createElement(d,Object(s.a)({},g,{className:b,ref:m}))};b.propTypes=g,b.defaultProps={tag:"div"};var h=b,E={tag:p.h,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},v=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,o=Object(i.a)(e,["className","cssModule","innerRef","tag"]),c=Object(p.e)(f()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},o,{className:c,ref:n}))};v.propTypes=E,v.defaultProps={tag:"div"};var y=v,j={tag:p.h,className:d.a.string,cssModule:d.a.object},w=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(i.a)(e,["className","cssModule","tag"]),o=Object(p.e)(f()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},l,{className:o}))};w.propTypes=j,w.defaultProps={tag:"div"};var A=w,N=t(161),O=t.n(N),M=function(e){var a=e.image,t=e.title,n=e.slug,l=e.date;return r.a.createElement(c.a,{sm:4,className:"pb-4"},r.a.createElement(h,{className:"post-item"},r.a.createElement(o.a,{to:n,className:"card-img-top"},r.a.createElement(O.a,{fixed:a,style:{width:"100%",objectFit:"cover"}})),r.a.createElement(y,null,r.a.createElement(A,null,r.a.createElement(o.a,{to:n},r.a.createElement("h5",null,t)),r.a.createElement("small",null,l)))))},k=t(200);a.a=function(e){var a=e.posts,t=e.isHome;return r.a.createElement(n.Fragment,null,r.a.createElement(l.If,{condition:a.length>0},r.a.createElement(l.Then,null,r.a.createElement(k.a,null,a.map(function(e,a){var n=e.node,l=n.frontmatter,o=l.title,c=l.date,s=l.featuredImage,i=n.fields.slug;return r.a.createElement(M,{title:o,image:s.childImageSharp.fixed,date:c,slug:i,key:a,id:a,isHome:t})}))),r.a.createElement(l.Else,null,r.a.createElement("h3",null,"No Post.."))))}},200:function(e,a,t){"use strict";var n=t(154),r=t(155),l=t(0),o=t.n(l),c=t(4),s=t.n(c),i=t(156),u=t.n(i),d=t(157),m={tag:d.h,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},f=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,s=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.e)(u()(a,l?"no-gutters":null,s?"form-row":"row"),t);return o.a.createElement(c,Object(n.a)({},i,{className:m}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},201:function(e,a,t){"use strict";var n=t(154),r=t(155),l=t(170),o=t.n(l),c=t(0),s=t.n(c),i=t(4),u=t.n(i),d=t(156),m=t.n(d),f=t(157),p=u.a.oneOfType([u.a.number,u.a.string]),g=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(f.d)(p,'Please use the prop "order"'),pull:Object(f.d)(p,'Please use the prop "order"'),order:p,offset:p})]),b={tag:f.h,xs:g,sm:g,md:g,lg:g,xl:g,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];l.forEach(function(a,n){var r=e[a];if(delete i[a],r||""===r){var l=!n;if(o()(r)){var c,s=l?"-":"-"+a+"-",d=E(l,a,r.size);u.push(Object(f.e)(m()(((c={})[d]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),t))}else{var p=E(l,a,r);u.push(p)}}}),u.length||u.push("col");var d=Object(f.e)(m()(a,u),t);return s.a.createElement(c,Object(n.a)({},i,{className:d}))};v.propTypes=b,v.defaultProps=h,a.a=v},286:function(e,a,t){"use strict";t(287);var n=t(5),r=t(74),l=t(17),o=/./.toString,c=function(e){t(19)(RegExp.prototype,"toString",e,!0)};t(18)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&c(function(){return o.call(this)})},287:function(e,a,t){t(17)&&"g"!=/./g.flags&&t(25).f(RegExp.prototype,"flags",{configurable:!0,get:t(74)})}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-9ac293f64fe379783730.js.map
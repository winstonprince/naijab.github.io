(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),s=a(158),c=a(163),i=a(161),u=a(168),d=a(194),p=a(153),m=a(154),f=a(169),b=a(170),g=a(4),h=a.n(g),v=a(155),y=a.n(v),E=a(156),j={active:h.a.bool,"aria-label":h.a.string,block:h.a.bool,color:h.a.string,disabled:h.a.bool,outline:h.a.bool,tag:E.h,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),onClick:h.a.func,size:h.a.string,children:h.a.node,className:h.a.string,cssModule:h.a.object,close:h.a.bool},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(b.a)(Object(b.a)(a))),a}Object(f.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,r=e.className,o=e.close,s=e.cssModule,c=e.color,i=e.outline,u=e.size,d=e.tag,f=e.innerRef,b=Object(m.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===b.children&&(b.children=l.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(i?"-outline":"")+"-"+c,h=Object(E.e)(y()(r,{close:o},o||"btn",o||g,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),s);b.href&&"button"===d&&(d="a");var v=o?"Close":null;return l.a.createElement(d,Object(p.a)({type:"button"===d&&b.onClick?"button":void 0},b,{className:h,ref:f,onClick:this.onClick,"aria-label":a||v}))},t}(l.a.Component);O.propTypes=j,O.defaultProps={color:"secondary",tag:"button"};var N=O,T=a(165);a.d(t,"pageQuery",function(){return w});var k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return l.a.createElement(c.a,{location:this.props.location,title:t},l.a.createElement(i.a,{title:"just a lonely man likes coding",keywords:["javascript","react","angular","vue","laravel","website dev","android","พัฒนาเว็บไซต์","เขียนเว็บ","เขียนแอพ"]}),l.a.createElement(u.a,{posts:a,isHome:!0}),l.a.createElement(d.a,{className:"d-flex justify-content-center mt-2 mb-5"},l.a.createElement(T.If,{condition:a.length>=11},l.a.createElement(T.Then,null,l.a.createElement(s.a,{to:"2"},l.a.createElement(N,{color:"primary",size:"lg"},"บทความเพิ่มเติม"))))))},t}(l.a.Component),w=(t.default=k,"4207337594")},158:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=a(32),c=a.n(s);a.d(t,"a",function(){return c.a});a(159);var i=r.a.createContext({}),u=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=a(54),c=a(2),i=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},161:function(e,t,a){"use strict";var n=a(162),r=a(0),o=a.n(r),l=a(4),s=a.n(l),c=a(164),i=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},162:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",description:"just a lonely man likes coding.",author:"Nattapon Pondongnok"}}}}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(205),l=a(200),s=a(201),c=a(202),i=a(206),u=a(203),d=a(204),p=a(158),m=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return r.a.createElement(l.a,{color:"light",fixed:"top",light:!0,expand:"md",className:"navbar-light-shadow"},r.a.createElement(s.a,{href:"/"},"naijab.com"),r.a.createElement(c.a,{onClick:function(){return a(!t)}}),r.a.createElement(i.a,{isOpen:t,navbar:!0},r.a.createElement(u.a,{className:"ml-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/app",className:"nav-link"},"APP")),r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/web",className:"nav-link"},"WEB")),r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/game",className:"nav-link"},"GAME")),r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/tech",className:"nav-link"},"TECH")),r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/life",className:"nav-link"},"LiFE")),r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/all",className:"nav-link"},"ALL")))))},f=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://naijab.com"},"naijab.com")," ",", Built with",r.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby")))};t.a=function(e){var t=e.isPostDetail?"default-container":"home-container";return r.a.createElement(n.Fragment,null,r.a.createElement(m,null),r.a.createElement(o.a,{className:t},e.children),r.a.createElement(f,null))}},165:function(e,t,a){var n,r,o;r=[t,a(4)],void 0===(o="function"==typeof(n=function(e,t){"use strict";function a(e){return"function"==typeof e.children?e.children():e.children||null}function n(e){return a(e)}function r(e){return a(e)}function o(e){var t=e.condition,a=e.children;return null==a?null:[].concat(a).find(function(e){return e.type!==r^!t})||null}var l;Object.defineProperty(e,"__esModule",{value:!0}),e.Then=n,e.Else=r,e.If=o,e.Unless=c,e.When=i,e.default=void 0,t=(l=t)&&l.__esModule?l:{default:l},n.propTypes=r.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var s=t.default.oneOfType([t.default.instanceOf(n),t.default.instanceOf(r),t.default.node]);function c(e){var t=e.condition,n=e.children;return!t&&n?a({condition:t,children:n}):null}function i(e){var t=e.condition,n=e.children;return t&&n?a({condition:t,children:n}):null}o.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.arrayOf(s),s])},c.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},c.defaultProps={children:null},i.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},i.defaultProps={children:null},o.Then=n,o.Else=r,o.When=i,o.Unless=c;var u=o;e.default=u})?n.apply(t,r):n)||(e.exports=o)},167:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=a(165),c=a(158),i=a(153),u=a(154),d=a(167),p=a.n(d),m=a(155),f=a.n(m),b=a(156),g=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),push:Object(b.d)(g,'Please use the prop "order"'),pull:Object(b.d)(g,'Please use the prop "order"'),order:g,offset:g})]),v={tag:b.h,xs:h,sm:h,md:h,lg:h,xl:h,className:l.a.string,cssModule:l.a.object,widths:l.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,n=e.widths,o=e.tag,l=Object(u.a)(e,["className","cssModule","widths","tag"]),s=[];n.forEach(function(t,n){var r=e[t];if(delete l[t],r||""===r){var o=!n;if(p()(r)){var c,i=o?"-":"-"+t+"-",u=E(o,t,r.size);s.push(Object(b.e)(f()(((c={})[u]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c)),a))}else{var d=E(o,t,r);s.push(d)}}}),s.length||s.push("col");var c=Object(b.e)(f()(t,s),a);return r.a.createElement(o,Object(i.a)({},l,{className:c}))};j.propTypes=v,j.defaultProps=y;var O=j,N={tag:b.h,inverse:l.a.bool,color:l.a.string,block:Object(b.d)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},T=function(e){var t=e.className,a=e.cssModule,n=e.color,o=e.block,l=e.body,s=e.inverse,c=e.outline,d=e.tag,p=e.innerRef,m=Object(u.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(b.e)(f()(t,"card",!!s&&"text-white",!(!o&&!l)&&"card-body",!!n&&(c?"border":"bg")+"-"+n),a);return r.a.createElement(d,Object(i.a)({},m,{className:g,ref:p}))};T.propTypes=N,T.defaultProps={tag:"div"};var k=T,w={tag:b.h,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},M=function(e){var t=e.className,a=e.cssModule,n=e.top,o=e.bottom,l=e.tag,s=Object(u.a)(e,["className","cssModule","top","bottom","tag"]),c="card-img";n&&(c="card-img-top"),o&&(c="card-img-bottom");var d=Object(b.e)(f()(t,c),a);return r.a.createElement(l,Object(i.a)({},s,{className:d}))};M.propTypes=w,M.defaultProps={tag:"img"};var P=M,R={tag:b.h,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},C=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,o=e.tag,l=Object(u.a)(e,["className","cssModule","innerRef","tag"]),s=Object(b.e)(f()(t,"card-body"),a);return r.a.createElement(o,Object(i.a)({},l,{className:s,ref:n}))};C.propTypes=R,C.defaultProps={tag:"div"};var x=C,q={tag:b.h,className:l.a.string,cssModule:l.a.object},z=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(u.a)(e,["className","cssModule","tag"]),l=Object(b.e)(f()(t,"card-title"),a);return r.a.createElement(n,Object(i.a)({},o,{className:l}))};z.propTypes=q,z.defaultProps={tag:"div"};var F=z,G={tag:b.h,className:l.a.string,cssModule:l.a.object},H=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(u.a)(e,["className","cssModule","tag"]),l=Object(b.e)(f()(t,"card-subtitle"),a);return r.a.createElement(n,Object(i.a)({},o,{className:l}))};H.propTypes=G,H.defaultProps={tag:"div"};var A=H,L=function(e){var t=e.id,a=e.title,n=e.slug,o=e.date,l=e.isHome,s=t>1?4:6;return r.a.createElement(O,{sm:l?s:4,className:"pb-4"},r.a.createElement(k,{className:"post-item"},r.a.createElement(P,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),r.a.createElement(x,null,r.a.createElement(F,null,r.a.createElement(c.a,{to:n},r.a.createElement("h3",null,a))),r.a.createElement(A,null,o))))};L.propTypes={title:o.PropTypes.string.isRequired,slug:o.PropTypes.string.isRequired,date:o.PropTypes.string.isRequired};var _=L,D=a(194),I=function(e){var t=e.posts,a=e.isHome;return r.a.createElement(n.Fragment,null,r.a.createElement(s.If,{condition:t.length>0},r.a.createElement(s.Then,null,r.a.createElement(D.a,null,t.map(function(e,t){var n=e.node,o=n.frontmatter,l=o.title,s=o.date,c=n.fields.slug;return r.a.createElement(_,{title:l,date:s,slug:c,key:t,id:t,isHome:a})}))),r.a.createElement(s.Else,null,r.a.createElement("h3",null,"No Post.."))))};I.propTypes={posts:l.a.array.isRequired};t.a=I},194:function(e,t,a){"use strict";var n=a(153),r=a(154),o=a(0),l=a.n(o),s=a(4),c=a.n(s),i=a(155),u=a.n(i),d=a(156),p={tag:d.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},m=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.e)(u()(t,o?"no-gutters":null,c?"form-row":"row"),a);return l.a.createElement(s,Object(n.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-2987e2a613b5b5ee7530.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1917],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),c=a("Wbzz"),i=a("Xrax"),o=a("a7k6"),d=a("TSYQ"),m=a.n(d),p=a("QH2O"),s=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:m()(p.pageHeader,{[p.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:p.text},e))))),g=a("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:r}=t||a,l=`${n}/edit/${r}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+g.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("I8xM");class A extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=l()(e,{lower:!0,strict:!0}),b=n===a,r=new RegExp(a+"/?(#.*)?$"),i=t.replace(r,n);return Object(s.b)("li",{key:e,className:m()({[N.selectedItem]:b},N.listItem)},Object(s.b)(c.Link,{className:N.link,to:""+i},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var h=A,f=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:r,titleType:d}=e,{tabs:m,title:p,theme:g,description:N,keywords:A}=b,{site:{pathPrefix:y}}=Object(c.useStaticQuery)("2456312558"),x=y?a.pathname.replace(y,""):a.pathname,w=m?x.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(s.b)(o.a,{tabs:m,homepage:!1,theme:g,pageTitle:p,pageDescription:N,pageKeywords:A,titleType:d},Object(s.b)(u,{title:n?Object(s.b)(n,null):p,label:"label",tabs:m}),m&&Object(s.b)(h,{slug:x,tabs:m,currentTab:w}),Object(s.b)(f.a,{padded:!0},t,Object(s.b)(O,{relativePagePath:r})),Object(s.b)(j.a,{pageContext:e,location:a,slug:x,tabs:m,currentTab:w}),Object(s.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},R9uP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const c={},i=(o="Caption",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var o;const d={_frontmatter:c},m=b.a;function p(e){let{components:t}=e,a=l(e,["components"]);return Object(n.b)(m,r({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$link-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link:hover")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-primary-text"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--breadcrumb-item::after")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"When a user hovers overs a breadcrumb, the breadcrumb title should be\nunderlined."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.083333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA2UlEQVQY02NggIGk/xA6Dkgn/WNgSP7PwBjzlsEWKMQU84qBIeU/A1vUfQaGsK8MqoWvGMJbz4KVb14xDaEXA6TiksAONi6bhkc2GWpYwn8QmweIBZljXnHpMTAwMsT85ANaJsgedZebIew/n3LhW7mwlrOyeF1oG9kOpr3DMhgsoiZwqsZuZ2dI/M8Y4ufKYRnRySmSeIcVGByMSgGz2D0rDnGX92/hAalfvngOdgPjQ13h7LhQN47cYC0WEDs8MoY1LsyTc6s7NFTCHdlK9ICuBoKejiYMcwBtdEUDMTGWfgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Breadcrumb typography treatment example",title:"Breadcrumb typography treatment example",src:"/static/eb4be43b6ae104adebf0dd3135ff129f/3cbba/breadcrumb-style-1.png",srcSet:["/static/eb4be43b6ae104adebf0dd3135ff129f/7fc1e/breadcrumb-style-1.png 288w","/static/eb4be43b6ae104adebf0dd3135ff129f/a5df1/breadcrumb-style-1.png 576w","/static/eb4be43b6ae104adebf0dd3135ff129f/3cbba/breadcrumb-style-1.png 1152w","/static/eb4be43b6ae104adebf0dd3135ff129f/392b1/breadcrumb-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(i,{mdxType:"Caption"},"Breadcrumb typography treatment example"),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The on-click dropdown should follow the\n",Object(n.b)("a",r({parentName:"p"},{href:"/components/overflow-menu/usage"}),"overflow menu")," specs for sizing, padding, and\ninteraction."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"px/rem"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--breadcrumb-item")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"margin-left"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.208333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1ElEQVQY02NggIGk/xA68T8DazqQ7fCfIfTwBwZkwJh2hkGai4FBXEKKQVxcHIxBAEZjgsT/WAQZGXgX2TDh0IHHMJgLE/4zsGT8ZGfQ/c/ivOWaiO7CGSIMsct5mQpucDNG/GeREOViA7qQHWgQK34XJv2DM5lT/3MzBP3lM1xyTC56z2JuBqP/HEyp//kZEn9ySAqycgEN5AcawgEzDLcro4GuLFvEQCzAbRDMy/kQbzOnf2VgcPnP8P//f4bsfQuA7HcMTGlAucTfDEAXwiMFmwsBTO05oKT+3EgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Truncated breadcrumb dropdown example",title:"Truncated breadcrumb dropdown example",src:"/static/2a158afba56089c64b7ed200a0f9eb1c/3cbba/breadcrumb-style-2.png",srcSet:["/static/2a158afba56089c64b7ed200a0f9eb1c/7fc1e/breadcrumb-style-2.png 288w","/static/2a158afba56089c64b7ed200a0f9eb1c/a5df1/breadcrumb-style-2.png 576w","/static/2a158afba56089c64b7ed200a0f9eb1c/3cbba/breadcrumb-style-2.png 1152w","/static/2a158afba56089c64b7ed200a0f9eb1c/392b1/breadcrumb-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(i,{mdxType:"Caption"},"Structure and spacing measurements for breadcrumb | px / rem"),Object(n.b)("h2",null,"Recommended"),Object(n.b)("p",null,"Truncated breadcrumbs are not currently built into the breadcrumb component. The\nfollowing colors from the ",Object(n.b)("a",r({parentName:"p"},{href:"/components/overflow-menu/style"}),"overflow menu")," are\nrecommended for the overflow breadcrumb list."),Object(n.b)("h3",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--overflow-menu-options__btn")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--overflow-menu-options__option:hover")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-row"))))),Object(n.b)("h3",null,"Typography"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--overflow-menu-options__btn")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h3",null,"Structure"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--overflow-menu-options")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABXElEQVQoz2NgwAZqKxE0MkaWIwQ8U/+C6Zu5vxm0M/4xMDj/Y/A/+BtFDXPGaQYpTiYGcQlJBnFxcTAGARiNAe7n/cYQy1uxh7Hi8FzWD19mMP///58RiFHkxcXFsBtmmfYP4sKc/wyymb84GEz+sxitvyrIUJzMBxRmRFaroaPCzsXHwgpzmYiYIKaBZckwL39jDE35K87k/FfAY9E15VNXb+ZduPQ86/iVz0k3H3xJPXrglCkDAyuvg2E4r6SENFiPlpwNnsBMuw1nvnlxj/fRw0d3X754/v/Rwwd///75/f/t23d1IDmg15lAtKiYMA6DWv8zaMRBvL3u8muwF//8+cf34OGDJ2/evPn/5MnT/yDw6tWrJpDcrTvXmEXFhCB6ebCYNzf+D5iuzLvN8PrZBzD78/fvLC9fvnR++vRpwIsXL3w/fPgQBMRqILkPHz4ydNpBIrHLDhGZAPNvmO1SGwneAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Truncated breadcrumb dropdown example",title:"Truncated breadcrumb dropdown example",src:"/static/417d8aa055f9012e7153672ead020112/3cbba/breadcrumb-style-3.png",srcSet:["/static/417d8aa055f9012e7153672ead020112/7fc1e/breadcrumb-style-3.png 288w","/static/417d8aa055f9012e7153672ead020112/a5df1/breadcrumb-style-3.png 576w","/static/417d8aa055f9012e7153672ead020112/3cbba/breadcrumb-style-3.png 1152w","/static/417d8aa055f9012e7153672ead020112/392b1/breadcrumb-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(i,{mdxType:"Caption"},"Recommended structure and spacing measurements for breadcrumb | px / rem"))}p.isMDXComponent=!0}}]);
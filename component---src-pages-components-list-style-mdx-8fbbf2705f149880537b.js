(window.webpackJsonp=window.webpackJsonp||[]).push([[1987],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),b=a.n(l),i=a("Wbzz"),c=a("Xrax"),o=a("a7k6"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(p.pageHeader,{[p.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},e))))),g=a("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:l}=t||a,b=`${n}/edit/${l}${r}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),N=a("I8xM");class h extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=b()(e,{lower:!0,strict:!0}),r=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(m.b)("li",{key:e,className:d()({[N.selectedItem]:r},N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+c},e))});return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},n))))))}}var f=h,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:l,titleType:s}=e,{tabs:d,title:p,theme:g,description:N,keywords:h}=r,{site:{pathPrefix:x}}=Object(i.useStaticQuery)("2456312558"),A=x?a.pathname.replace(x,""):a.pathname,v=d?A.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:d,homepage:!1,theme:g,pageTitle:p,pageDescription:N,pageKeywords:h,titleType:s},Object(m.b)(u,{title:n?Object(m.b)(n,null):p,label:"label",tabs:d}),d&&Object(m.b)(f,{slug:A,tabs:d,currentTab:v}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(j,{relativePagePath:l})),Object(m.b)(O.a,{pageContext:e,location:a,slug:A,tabs:d,currentTab:v}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},fl2A:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={},c=(o="Caption",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var o;const s={_frontmatter:i},d=r.a;function p(e){let{components:t}=e,a=b(e,["components"]);return Object(n.b)(d,l({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Attribute"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--list__item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"Level 1 and 2 of any list type should be set in bold and sentence case, with\nonly the first word in a phrase and any proper noun capitalized. ",Object(n.b)("strong",{parentName:"p"},"Line height"),"\nfor lists should be set at 24px / 1.5rem."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--list__item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--list--nested")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"There are two types of Lists, ordered and unordered. Level 1 ordered list points\nare marked numerically while Level 2 points are marked with a dash. Level 1\nunordered list points are bulleted while Level 2 points are marked with a dash."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Item"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Level 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 / 0.25"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Level 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Level 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAByklEQVQoz2P4z/CfoXHFDQYQ+O8P5P3/zwAD1WquDLPVAsFs85cQsdu1CHkQqJN1YJio7A1mtyu4ISRmJiIU2ijGMygp88L5BzSiGd5wTUMxyCU+nMHYzAjOP6QWz/Bfp4aBIbRsDVwws+6AmVdAiYKsnICAipqGQI6GI8dq9XAmmHzFnue8GSX7LOTkxISVFZWFFJWVhXIUbDiXy/ojbErY/ohhaegLMLt+2nub0Ib5brK6CsqqCsoKMSqWuhvVIkVvGBTwPGYwYm/69p+zdNL9UK0gf2MeJiZZFRl55RhZE739qrEC1zXSeferxTEyRBSsBhuW7X6dxX/yDD05f0ddMQVlDVFRETldKUV+oGKWvX4dYFc2Hf4iYNfVrC+oo6EvLi6hIioupmQupSrwSrOA+bR6EtMu1WhgYBf0gA00SVnEaF3TpSyipycsICfLJykiygX3BjSiQjec5DbNrZVjZWDgkpKT55UQF+dhwADrcyD0CmBMLaplYti5lZXh/zdGkJCddyRDnYITA2tkAESNrzwjw5VVjMjau5U8GCrkHRj+211gWKMSChW9Lo1hj6CBPoM+soCHAJzJJSvBICUmziAuDsEgAKMBb1t06vDtsuQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for ordered and unordered lists",title:"Structure and spacing measurements for ordered and unordered lists",src:"/static/efbf46c60fdd7fb178d952eab6263454/3cbba/list-style-1.png",srcSet:["/static/efbf46c60fdd7fb178d952eab6263454/7fc1e/list-style-1.png 288w","/static/efbf46c60fdd7fb178d952eab6263454/a5df1/list-style-1.png 576w","/static/efbf46c60fdd7fb178d952eab6263454/3cbba/list-style-1.png 1152w","/static/efbf46c60fdd7fb178d952eab6263454/392b1/list-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for an ordered and an unordered list | px / rem"))}p.isMDXComponent=!0}}]);
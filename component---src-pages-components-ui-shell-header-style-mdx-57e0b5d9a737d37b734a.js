(window.webpackJsonp=window.webpackJsonp||[]).push([[2064],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),d=a("a7k6"),p=a("TSYQ"),m=a.n(p),o=a("QH2O"),s=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:m()(o.pageHeader,{[o.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:o.text},e))))),u=a("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+u.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(s.b)("li",{key:e,className:m()({[N.selectedItem]:b},N.listItem)},Object(s.b)(i.Link,{className:N.link,to:""+c},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var A=h,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:p}=e,{tabs:m,title:o,theme:u,description:N,keywords:h}=b,{site:{pathPrefix:f}}=Object(i.useStaticQuery)("2456312558"),x=f?a.pathname.replace(f,""):a.pathname,C=m?x.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(s.b)(d.a,{tabs:m,homepage:!1,theme:u,pageTitle:o,pageDescription:N,pageKeywords:h,titleType:p},Object(s.b)(g,{title:n?Object(s.b)(n,null):o,label:"label",tabs:m}),m&&Object(s.b)(A,{slug:x,tabs:m,currentTab:C}),Object(s.b)(y.a,{padded:!0},t,Object(s.b)(O,{relativePagePath:l})),Object(s.b)(j.a,{pageContext:e,location:a,slug:x,tabs:m,currentTab:C}),Object(s.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ZBO4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return g}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},d=c("Row"),p=c("Column"),m=c("Caption"),o={_frontmatter:i},s=b.a;function g(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(s,l({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Note: The UI Shell does not currently use the Carbon theme tokens; theming\noptions for the shell will be available in the future. All color used in the UI\nShell is from the\n",Object(n.b)("a",l({parentName:"em"},{href:"https://www.ibm.com/design/language/elements/color#specifications"}),"IBM Design Language palette"),".")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 80")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__name")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__nav::before")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 80")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.708333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAbElEQVQY062POwoAIQxEBa+gKP5QK7G182IeQkxh5203sd7tNvCagXlDGPv7Ukqn1jqdc6C1hpwztNYghADGGLDWglLqE+/9QjYyhBCcxRhPKWVicAUk7L0DDl0Z5VSksTdweCEbGVJK/vvHDwdgIno1gu+5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ui shell header",title:"ui shell header",src:"/static/4cadac4c63ea082a793765881d00f9b3/3cbba/header-style-1.png",srcSet:["/static/4cadac4c63ea082a793765881d00f9b3/7fc1e/header-style-1.png 288w","/static/4cadac4c63ea082a793765881d00f9b3/a5df1/header-style-1.png 576w","/static/4cadac4c63ea082a793765881d00f9b3/3cbba/header-style-1.png 1152w","/static/4cadac4c63ea082a793765881d00f9b3/0b124/header-style-1.png 1728w","/static/4cadac4c63ea082a793765881d00f9b3/99571/header-style-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,"Menu-trigger"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"White")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 80")))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABUUlEQVQoz2Nob29noBb4//8/hJGTk8NaW1vLMX/+fOZ58+axNDc3s9y7d48pISGBPT4+nn3p0qXMc+bMYWlra2O5c+cOU0VFBUd9fT37ggULmGfOnMnS2dnJcv36dSZkk5lIcUlhYSF+BSYmJhGmpqYnlZSUdmlra+/h4+M7CHTxGiCepqWldUBVVXWPpqbmHgEBgUMTJkxYWlJSMsfY2PigsrLyHjU1td1iYmKHgb6YB3QYG9hAc3Nzfxsbm01AjUuACpcJCwuvqq6unl5XV9eqq6u7GmjYMkNDw2UiIiKre3t7JwK93G1tbb0aaNgyfX39pZKSkmsWLlzYDTSQlcHPz4+RgdrAzc2NMTIyksnIyIgpKCiISUhIiGn27NlMYWFhjBwcHExA1zMBLWYCupBp+fLlTBMnTmSKiopiMjMzY/Ly8mICupDp0KFDTKBYBgAX4XcLEwLcawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Menu trigger interactive states",title:"Menu trigger interactive states",src:"/static/95988cf25cffad49a3c12fba5b798d9c/3cbba/header-style-5.png",srcSet:["/static/95988cf25cffad49a3c12fba5b798d9c/7fc1e/header-style-5.png 288w","/static/95988cf25cffad49a3c12fba5b798d9c/a5df1/header-style-5.png 576w","/static/95988cf25cffad49a3c12fba5b798d9c/3cbba/header-style-5.png 1152w","/static/95988cf25cffad49a3c12fba5b798d9c/392b1/header-style-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Menu-trigger interactive states"))),Object(n.b)("h3",null,"Menu-item"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"svg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"svg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"White")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 80")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"svg"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.9861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAACd0lEQVQ4y7WTy27aUBCGoaiLQCOS2piAwZRgcw2pTamQcCt2XVTKpSAuSgClVVZFLFqrUislXlV9n1ZeRc42b8E2Id4nJATi/p6GqMqimyZHGs14fM5/Zj6PXa4/yw3z/G1zc3Oeu7l/WbFY9FxfX7tJzbZtt+s+VyQSKSWTyR8rKyt7iPclSdJLpZKeSCR0QRB05PRYLKbzPK8vLy9THAqFyJDbn5+f32s2m9+n0+kLElxaWtqF4Pnq6uoJNpzikFWpVKxMJmPh2QqHwxaELQhY8Xic4mAwaHEcZ+HsqdfrPdnc3Dy/vLx8T4LlcvnRDYv/WkB3J7ivhVbegdcRWjxAe2YulzPRvpnNZs1oNGo6uZkHP4rRqom2KYeWD8DwCIWtzQTX0un0oSzLP8HMwMcxMAbkIWDg0K0HX4ohZoChAWHD5/P9Wl9fPxyNRm9dD7K2traeNBqNCG5hUDrT6/UY5JharUZ+e3ubabVaTLvdZur1Ou3pdDpk3W6X9vT7fXYwGDyetbybSqXO8vn8MdoaguGwWq0OgWDoPDuGUSGPsaEYLZPh7BAMj3HRGeZwhwTBQgGXr+D4CUw0eA3VaYVCQcMhzcmBLcUQ0zDoWiAQIHNy+E0/b2xsfLu4uJAfhiHGQ0B7b2T5+SspmSyLibiaS4uqJCZUoFBFUbz1qJ5ijBkZflMVVZbB9/VkMgnOGH6BqI3Zm0QivB3io7aUztuhMG/HBMHGe1u48RgbioGJDDhsMJzio9rj8fjjjCG3uLj40u9fkFlmQRFyFeWZ+kHhRUVhnvoVjgsqLMsqDmuGYShGVWS4RMEcKmBevLq6Yl14ea/4fgOanuRtF8GMjwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Menu item interactive states",title:"Menu item interactive states",src:"/static/ea28a64f84c2d8f2195dd33cbc49bc5e/3cbba/header-style-6.png",srcSet:["/static/ea28a64f84c2d8f2195dd33cbc49bc5e/7fc1e/header-style-6.png 288w","/static/ea28a64f84c2d8f2195dd33cbc49bc5e/a5df1/header-style-6.png 576w","/static/ea28a64f84c2d8f2195dd33cbc49bc5e/3cbba/header-style-6.png 1152w","/static/ea28a64f84c2d8f2195dd33cbc49bc5e/392b1/header-style-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Sub-menu interactive states"))),Object(n.b)("h3",null,"Sub-menu"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 90")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 90-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"White")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABpElEQVQoz7VQvU7CYBRtNDaIgykJP4Hw//+XBlrAtkKVQiBK2IyJg7IwOhgwPgDpI+jgaBwcfQp3Ex/A6ODAYhwcCuTzXGh4A7/kpv3OPd8591yO+4+TTqczsiy39nAymYzidrsPhsNhu9/v75dKpXq1WlWSyaTi8/mM0Wh0aBiGXqlUtHK5rEajUQXVNU2zshb0eDwnEGKFQsEKh8NMEIT3wWBwq+v6HcxYNpudBYNBwl/H47EJoed8Ps/QmwUCgbnX632ZTCbXa0GAfC6X+ywWi0Ri8Xj8gXCIiMDmqAUZYsorwjHRGczJaBGLxRjuLcIdDscmZxOciPxRq9WYJElUj4R3u10JU1qNRsPSNI3V6/XlFM1m87zX67FOp2OBw9rt9hHhuG8sBRHTKYriF4nhyxDniXCsVCYT7JDBkCHqDeHY3wWMmKqqDBzqHRMO3mpC7GAbkd4g9I24M0x8bxuJwKdUiDaPRCKXdqJTYL+pVGoK7Ae8ls1fTcjzPIfGbiKREPx+vwu1Yz/cxN4EKuzTFQqFHPZDHvtzQVDAP9UW4ehzf/cUfLhrZYnPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sub-menu interactive states",title:"Sub-menu interactive states",src:"/static/4c9a2558047019a9f82eea639279ad36/3cbba/header-style-7.png",srcSet:["/static/4c9a2558047019a9f82eea639279ad36/7fc1e/header-style-7.png 288w","/static/4c9a2558047019a9f82eea639279ad36/a5df1/header-style-7.png 576w","/static/4c9a2558047019a9f82eea639279ad36/3cbba/header-style-7.png 1152w","/static/4c9a2558047019a9f82eea639279ad36/0b124/header-style-7.png 1728w","/static/4c9a2558047019a9f82eea639279ad36/99571/header-style-7.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"}),Object(n.b)("h3",null,"Action"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"White")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 80")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10")))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.9861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y7WUO2vCUBiGU4ODYrQoXkK8xEuoijrUQZCALjpJqcYKnfwFLlKc+wcKBaVDbX+FXcRBEDtUt9jL5tyldK3SevoewbWcthp4CIecPHzfey4cIYTv9/s8x3H/wmq18mazmdv+gwq74/G463K5bkRR7FI8Hg8Tfr+fcq0oym0mk7lMpVImKlxA+G6323VMegQzt9v9I5s5kK2JRCIv+Xz+vl6vC1RomM/n/FbblmXZOJlMTFROF+mP0H/XGT6PRqOZw+GgLc9YWt5A2/V6vXo8Hn9Kp9MPzWbTRYVDVHcHYRsL0qFAygSEHZ/P104mk1fZbPai1WrZdrJt5MFgcJDL5RKqqiq/BdtFKRQKSqlUCmFsoEIyHA4/sW0+0MYS2TCDlpfIcJFIJFblcvm1WCzaqPBc1/UzCCuYpEFaxZsJSZKqyFCLxWIntVrtqNFoGHeS4XGv16ui/NNgMKgFAoEKK5hfCYVCFZwULRqNlsLhsHGdIW4bIgjCF7YMQSvMoAgC8QoHg4A3i8WyT4XqdDo9xEDCRwmZSAiaCUglXCqS0+n0Yg1EXBJ7W4/wG88OKNud2WVmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Header action interactive states",title:"Header action interactive states",src:"/static/56e97a05456666532ee4c842170b063f/3cbba/header-style-8.png",srcSet:["/static/56e97a05456666532ee4c842170b063f/7fc1e/header-style-8.png 288w","/static/56e97a05456666532ee4c842170b063f/a5df1/header-style-8.png 576w","/static/56e97a05456666532ee4c842170b063f/3cbba/header-style-8.png 1152w","/static/56e97a05456666532ee4c842170b063f/392b1/header-style-8.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Header action interactive states"))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"Menu labels and text should be set in sentence case."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__name")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SemiBold / 600"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__name--prefix")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The header should span the full width of the browser window. The header can\neither stay sticky to the top of the browser or scroll away."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px/rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-trigger")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__name")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__name")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-07"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__nav")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left, padding right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__menu-arrow")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left, padding right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--header__action")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABP0lEQVQoz2NgoDYwrq8VNLG3l3Ca0C9t5uYpquntI2WYli6joWcgpikqIaJn7SimGhIqLczFJSIuKSkqLi6OgUXFxMT0JRU5/8f/Z2BwKyrK1dTVvRXS33/K3NntjJGV7Wn7iKgzWmpap1XFpE4Z6ZmeMXJxPyMkwH9KXELiFNAAdHwCaN4VZQmZcLALHVJSWUUZGDi8pkzmUQ8J5zXXNuSwDwjh1FZQ5ZTgF+IMUTThCbX25OHk5+GUlJDkBBoAxkBDOMWAtIKMLCePpCgngxg3M8Lf//9THHT/daBmuOhapBlYWB1RU1fbKCEpuRlo82agCyBYTBzOhokj0xISEptl5eQ2OiroHMhQsAoAGxin46BuY2LlrKSsZAX0kg1QoQ1QA2EMVCcqLmatKafk4KWg75ykYCFB9RTDwMjAAAAu2lPWSGuRjAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ui shell header spec",title:"ui shell header spec",src:"/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/3cbba/header-style-2.png",srcSet:["/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/7fc1e/header-style-2.png 288w","/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/a5df1/header-style-2.png 576w","/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/3cbba/header-style-2.png 1152w","/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/0b124/header-style-2.png 1728w","/static/3dfb8d3b0e65f129ffd0492b1cb0f7d8/99571/header-style-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Structure and spacing measurements for UI shell header | px | rem"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABVElEQVQoz2NgoCIQFxdnZFBUVIzQ1tZeLCMjM01KSmqGrKzsDGlJyRlKWloz7AICJtgEBEwxCAycIsDFNVFCQmImUNMMMTGxGSAaiqcD8TwgNgWbKi0tbaOgoJAnKSmZBtSQDjQ0Q1RAIFXdyjLXNjT0n6mV1X8DK8v/WlaWL2S1tVKFhQTTgZozgIaCaBBOA+JsIFbB6/z///8zeCcm37M0Mv5nqm/w3ycrezdRXga6iFFOTo4Z6EJmoAuZVQ0NWUCSE5++53eJjX1orK//X1db+79DTMxBoCVsQCkWcV0tZklxcWagK5mBhsAwI1ZbIiZMANNr/v/ndIyOfmOgp/dfW1Pzv11MzEmYmpL1W4iLpYvqqQz+nZ1g9qT//zlswsM3amtoHFVTUTllFRU5HRQMIBC/eRNYLXEgMhRCZ6YyMthbscDFY8JZGNKTId5KjsepHQCmn19WlT2h6gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ui shell header submenu spec",title:"ui shell header submenu spec",src:"/static/8f5750e466c9425b8f28ef6c0711250a/3cbba/header-style-3.png",srcSet:["/static/8f5750e466c9425b8f28ef6c0711250a/7fc1e/header-style-3.png 288w","/static/8f5750e466c9425b8f28ef6c0711250a/a5df1/header-style-3.png 576w","/static/8f5750e466c9425b8f28ef6c0711250a/3cbba/header-style-3.png 1152w","/static/8f5750e466c9425b8f28ef6c0711250a/0b124/header-style-3.png 1728w","/static/8f5750e466c9425b8f28ef6c0711250a/99571/header-style-3.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Structure and spacing measurements for header submenu | px | rem"),Object(n.b)("h3",null,"Responsive behavior"),Object(n.b)("p",null,"In smaller broswer windows, ",Object(n.b)("inlineCode",{parentName:"p"},"menu items")," in the header should collapse into the\nleft side nav menu. Items that were once in the header should stack at the top\nof the side nav panel if other items were already present in the panel."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB1UlEQVQoz62Sy0uiURiHy0FUXKl4v6IiqMi4awpcRdAQzKZNMIsWrWYltOuCFRLUpsvkMNNlgpDatRokaDeblqLCfH9AKzeSE4pp6NdzPsVNJQYd+H2/c3nPc973nG8kmUyOvFdLJBLdjt/v/xqJRE4dDsd3l8uVEXK73Rmn05nx+XwZu93+w2w2H1gslt9Wq/UcZekrIu7M6/Ve4t/6ZAbzQC9YOGLziZDNZlPEIUJi/oxxEsgkwBn8sxCHTpPAF/xjH0jAHNDDQCCwYzAY9oxG4x7B+0Ks7bO26/F4TtDEoJLZ3+2EQqHFWCx2E4/Hr5i8JttrQDmAObLKkcEfoH/xWRFPxmrWVEL0VWQnfLRPliQp22g05HK5LFcqFblUKsnBYPDUZDL9otRD9JMNWTTVA6oGvk6tVjuSu+1BfJrN5h2PtE7pS8BWyHYJpdFY74oGA+v1+rEAtdvtlvBqtXofDoc3Aa4B3KDsFNpGyh3ig4EwFGCn01GA9zQBpOQU5a33gFtofCggmT0DRqPRTf69NR5iA2iKi9/GJ4a6wxeA/wVIrVav6PX6VZ1Ot6zRaNJarfaTiMffBmy1Wo+8tFQsFqVCofAPFfP5/C3jBRGPf3iN9QTai+6A0h/fRAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"responsive behavior example",title:"responsive behavior example",src:"/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/3cbba/header-style-4.png",srcSet:["/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/7fc1e/header-style-4.png 288w","/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/a5df1/header-style-4.png 576w","/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/3cbba/header-style-4.png 1152w","/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/0b124/header-style-4.png 1728w","/static/c2b804afbb6c37a78cfbe1d8c10ab0ee/99571/header-style-4.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Responsive behavior for UI shell header"))}g.isMDXComponent=!0}}]);
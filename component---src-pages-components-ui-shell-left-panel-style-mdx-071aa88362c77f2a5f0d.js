(window.webpackJsonp=window.webpackJsonp||[]).push([[2045],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),d=a("a7k6"),p=a("TSYQ"),m=a.n(p),o=a("QH2O"),s=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:m()(o.pageHeader,{[o.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:o.text},e))))),u=a("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+u.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("I8xM");class y extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(s.b)("li",{key:e,className:m()({[N.selectedItem]:b},N.listItem)},Object(s.b)(i.Link,{className:N.link,to:""+c},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var A=y,v=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:p}=e,{tabs:m,title:o,theme:u,description:N,keywords:y}=b,{site:{pathPrefix:h}}=Object(i.useStaticQuery)("2456312558"),f=h?a.pathname.replace(h,""):a.pathname,x=m?f.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(s.b)(d.a,{tabs:m,homepage:!1,theme:u,pageTitle:o,pageDescription:N,pageKeywords:y,titleType:p},Object(s.b)(g,{title:n?Object(s.b)(n,null):o,label:"label",tabs:m}),m&&Object(s.b)(A,{slug:f,tabs:m,currentTab:x}),Object(s.b)(v.a,{padded:!0},t,Object(s.b)(O,{relativePagePath:l})),Object(s.b)(j.a,{pageContext:e,location:a,slug:f,tabs:m,currentTab:x}),Object(s.b)(c.a,null))}},"9k1K":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return g}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},d=c("Row"),p=c("Column"),m=c("Caption"),o={_frontmatter:i},s=b.a;function g(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(s,l({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Note: The UI Shell does not currently use the Carbon theme tokens; theming\noptions for the shell will be available in the future. All color used in the UI\nShell is from the\n",Object(n.b)("a",l({parentName:"em"},{href:"https://www.ibm.com/design/language/elements/color#specifications"}),"IBM Design Language palette"),".")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__navigation")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"White")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu-chevron")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 70")))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQ4y62RsW7CMBRF2RGgEsQGCJgQM2sH93/6GZX6K/2IipmhqIhItBBgoaQSJSQRiCTg2/cMgVJI6NAnHfnJsY+vnUQymUz8e91QZTIZkc/nRaFQEJqmiVQqJdLp9FVyudwdKW5brdY9gEclrFQqolqtol6vo9FooFaroVgsolQqqTGOcrmMbDaLZrMJLiXs9/uCQK/Xk4ZhyNFoJIfDoWIwGMhutxuJruuy0+lgPp8H5POVkBrhOA5ms5mk/gzP864SBIE8JHx+tcTbu4F2+0WdOh6PMZ1OMZlMYJombNuOZbFYgKTHK398ecJ2XHyapiSB5EWr1QrL5VLB6V3XPSOc5/FEyFfebDZ8miSB3G63CIt73nBJGimk+wuObVkWyyQVQujbyeaopL7vH4VkF/xBmXY/ArsW4ORxsosJyS54IhSG6X4KozgTEg+0+Wn/ZHIvPQj5DXlxHOv1Wh0cCo+mveT3+Nfi9d9dEQmqN/SrpwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"UI shell side-nav example.",title:"UI shell side-nav example.",src:"/static/31d5a5f6ad69019a7d74310e5cc35e95/3cbba/left-nav-style-1.png",srcSet:["/static/31d5a5f6ad69019a7d74310e5cc35e95/7fc1e/left-nav-style-1.png 288w","/static/31d5a5f6ad69019a7d74310e5cc35e95/a5df1/left-nav-style-1.png 576w","/static/31d5a5f6ad69019a7d74310e5cc35e95/3cbba/left-nav-style-1.png 1152w","/static/31d5a5f6ad69019a7d74310e5cc35e95/392b1/left-nav-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"UI shell side-nav example."))),Object(n.b)("h3",null,"Link"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Blue 60")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link--current")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link--current")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":before")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Blue 60")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABqklEQVQoz7WTu07DMBSG2Vm4lavEMyAVVEEm2q2qBH2Drn0ALnv3LkBZEWtBrJTXACEBKyptSt0k5NrYOfx2HJSBESz9+n3+HH/HiZSZmX9ac9ASNA8tyLrdbm/e9x5K2C/m86Oj4/Ver2dgv5LPG43GBhFtKVq5XL6qVqtxrVYbVSoVViwWx61W66tzcT419nZZ/fCAVcr7bGe7OD49OXEuO53YMIxxvV5nsr9UKo2azWYE4JsC9vv9O8452bZNjuMo9zyPxrZP5sQn2+NkQcyJ6Mv1yPy0aDgcqj7LsogxRnEc0w9wMBh0JTCKoqnv+wIwEYZhwpwAikTISQQxCTeEh1ECYGKaIxGg13VdKS6EoCRJUiAm3VC61Bg8IIAp8D0KAl8/SigRHJmvMgyk3BLyDPSqgKDfaJACytvKVxZpk5I6hVuoPL3Nj1BzvX9RQGy6GjhNzwn52jFqoaeLXM5/yWP5DVE/Z8A7+oMFznsGvEY9hZvwCfwDE7vwJ9QO/FPnQ+S38Ecoy5nuf4CfKSDCORRr8FXtBZ3Pol6Hr+h8OcuhjVxeyP6Qb7UkZrhpDeayAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Link states",title:"Link states",src:"/static/aad156e1c7b18d32f4f99bc37e18eb19/3cbba/left-nav-style-4.png",srcSet:["/static/aad156e1c7b18d32f4f99bc37e18eb19/7fc1e/left-nav-style-4.png 288w","/static/aad156e1c7b18d32f4f99bc37e18eb19/a5df1/left-nav-style-4.png 576w","/static/aad156e1c7b18d32f4f99bc37e18eb19/3cbba/left-nav-style-4.png 1152w","/static/aad156e1c7b18d32f4f99bc37e18eb19/0b124/left-nav-style-4.png 1728w","/static/aad156e1c7b18d32f4f99bc37e18eb19/99571/left-nav-style-4.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Link states"),Object(n.b)("h3",null,"Sub-menu"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 10-hover")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Blue 60")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Blue 60")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item--current")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 30")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item--current")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":before")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Blue 60")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABqklEQVQoz7WTu07DMBSG2Vm4lavEMyAVVEEm2q2qBH2Drn0ALnv3LkBZEWtBrJTXACEBKyptSt0k5NrYOfx2HJSBESz9+n3+HH/HiZSZmX9ac9ASNA8tyLrdbm/e9x5K2C/m86Oj4/Ver2dgv5LPG43GBhFtKVq5XL6qVqtxrVYbVSoVViwWx61W66tzcT419nZZ/fCAVcr7bGe7OD49OXEuO53YMIxxvV5nsr9UKo2azWYE4JsC9vv9O8452bZNjuMo9zyPxrZP5sQn2+NkQcyJ6Mv1yPy0aDgcqj7LsogxRnEc0w9wMBh0JTCKoqnv+wIwEYZhwpwAikTISQQxCTeEh1ECYGKaIxGg13VdKS6EoCRJUiAm3VC61Bg8IIAp8D0KAl8/SigRHJmvMgyk3BLyDPSqgKDfaJACytvKVxZpk5I6hVuoPL3Nj1BzvX9RQGy6GjhNzwn52jFqoaeLXM5/yWP5DVE/Z8A7+oMFznsGvEY9hZvwCfwDE7vwJ9QO/FPnQ+S38Ecoy5nuf4CfKSDCORRr8FXtBZ3Pol6Hr+h8OcuhjVxeyP6Qb7UkZrhpDeayAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sub-menu states",title:"Sub-menu states",src:"/static/aad156e1c7b18d32f4f99bc37e18eb19/3cbba/left-nav-style-4.png",srcSet:["/static/aad156e1c7b18d32f4f99bc37e18eb19/7fc1e/left-nav-style-4.png 288w","/static/aad156e1c7b18d32f4f99bc37e18eb19/a5df1/left-nav-style-4.png 576w","/static/aad156e1c7b18d32f4f99bc37e18eb19/3cbba/left-nav-style-4.png 1152w","/static/aad156e1c7b18d32f4f99bc37e18eb19/0b124/left-nav-style-4.png 1728w","/static/aad156e1c7b18d32f4f99bc37e18eb19/99571/left-nav-style-4.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Sub-menu states"),Object(n.b)("h3",null,"Icon"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__icon:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__icon:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__icon--current")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Gray 100")))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"Menu labels and text should be set in sentence case."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SemiBold / 600"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SemiBold / 600"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The panel spans the full height of the browser and is fixed to the left edge of\nthe window."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px/rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__navigation")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"256 / 16"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding left, padding right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__submenu")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding left, padding right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-07"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__menu-item")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":before")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 / 0.25"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--side-nav__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"size"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACCklEQVQoz5WRzWsTQRTAI3pQJPUjbmlFFHW9VASpEPwrPOvRi0gR/Lr4AbV6sFQbMPHgTa2HVqRpRYmmDR4EL714sCIEqyh+7m6auN3NzszOznu+ye4e4iX44O3szvzm997OZHZt7sv0ilMjpzP/FRsHjdxWwyjsOWDe3T44UNy0pa9E05OVF5UaIp7UzNDQwd07DOOOaZqlfqO/mM1mNVOoURBzQjM0ru8IR67fPly4/xCny/M4M/cUp2bnsPRgCmXAEAFvaqby/Fl+vlzG6sICLtYWsfqyirMzjzHkgjx4STOKhxs6wkffLNPioUcLijLUaSMGmpRue0wz390g70tFFTBKGUwYiNQFzYBSsbBYX9n/2bIZCqomI1ChhE+tlt6gY1QzSx+/Hv3SWJV/7AYyrw2cCfjRbMmEuZj8ciycfvLq0GvLYR/aDJfXfHjr+bBkO6nwSgIPr7mu9H0fFQDoxjhjqfBcp0OAWHhvub7vHQmbTKDTZvCT8n1jNRVe1gyJjlCmgljIefp9tqvDid+/9lpCeMn5CKLFiueJBL6qGRGGwzKKAupCUupigjGWFj3fJXzjeyZgdzRlWjy+QcF5/h8EVRRhsu9Ml7Du2Dkm5RhN3KC8Rmc04XJ2nN53goJtmom8YACEHJUtfzx03HHFxC3g4TFicnS72USYPHqEEuG6XgwdQ2f8C7OWAgIS/GfOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ui shell side-nav",title:"ui shell side-nav",src:"/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/3cbba/left-nav-style-2.png",srcSet:["/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/7fc1e/left-nav-style-2.png 288w","/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/a5df1/left-nav-style-2.png 576w","/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/3cbba/left-nav-style-2.png 1152w","/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/0b124/left-nav-style-2.png 1728w","/static/61cc904ef4f6882dbe6d2ba2e7bb50dd/99571/left-nav-style-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Structure and spacing measurements for the side-nav | px | rem."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACHklEQVQoz4WRTWsTQRjHN+KlpgdbadWNRSUqptBSvOoH8OAHqFokEQt+A68ePXlrIgiCh1bUtlZLCWkhbbWIErxWqFGRgnWbZF+yu7NvM/P4PLPxYC8dWJ55+c1v/jOrnRoYzGjY+vSTZ4b10zP50cKTEzm90jdwvHKsv3+m0WjUAeA6MXoudzU3MvKsUCiUh4eGKtlstpzP55+aprmGzDlitIcLr5XwwePytUev5mF26R0srlThxfIKPH+zBCAEslAiZrVavf9pawtqtRpsvt+Eer0OG+vrkCQJMaNKuAxSCde2f1353PUDxgKOizF9hpARkTgxRcxeLO61aRwl4T8mpmUpAwlwWQlnI08J55o/J1YNI3YCRqmkx7ncsW0VT/SE20Z7ejfh4Jg2921Huj6T+44DUgg6OBUutlpHqL60zLENy0pYGl8GKG12u0qIp98kBneWaGzZFo/iWEqMFoYhcM4p8UUlfOs4SjhvmuMffZ+uoEIFUpKQ94STxODmuwnnEEURzSMhBWOMhHgtuJAmtO00oWmOffC8MEKKngmFyXfPg57wNjFCpAl770dSjnOQboFLStgMAiXcYWyiA/83Mwxb+D5fEb9BDPanDyD4V+JdlH7B7lkl/NFpq/qt1Rrcd7tFvNIULk5iLRmuO05rrucfpcq77Dz3wzvR704x/mMVhR/eAhbpyGdij6mfq9qeY2uHNRRlDmMwrfYXdRD32nsbT0UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ui shell side-nav with icons",title:"ui shell side-nav with icons",src:"/static/177b607ea456988009f3a7b9681c8be4/3cbba/left-nav-style-3.png",srcSet:["/static/177b607ea456988009f3a7b9681c8be4/7fc1e/left-nav-style-3.png 288w","/static/177b607ea456988009f3a7b9681c8be4/a5df1/left-nav-style-3.png 576w","/static/177b607ea456988009f3a7b9681c8be4/3cbba/left-nav-style-3.png 1152w","/static/177b607ea456988009f3a7b9681c8be4/0b124/left-nav-style-3.png 1728w","/static/177b607ea456988009f3a7b9681c8be4/99571/left-nav-style-3.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Structure and spacing measurements for side-nav with icons | px | rem."))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
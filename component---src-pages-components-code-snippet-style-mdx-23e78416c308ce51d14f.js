(window.webpackJsonp=window.webpackJsonp||[]).push([[1951],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),p=a("a7k6"),d=a("TSYQ"),m=a.n(d),o=a("QH2O"),s=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:m()(o.pageHeader,{[o.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:o.text},e))))),u=a("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+u.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(s.b)("li",{key:e,className:m()({[N.selectedItem]:b},N.listItem)},Object(s.b)(i.Link,{className:N.link,to:""+c},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var A=h,x=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:d}=e,{tabs:m,title:o,theme:u,description:N,keywords:h}=b,{site:{pathPrefix:y}}=Object(i.useStaticQuery)("2456312558"),f=y?a.pathname.replace(y,""):a.pathname,C=m?f.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(s.b)(p.a,{tabs:m,homepage:!1,theme:u,pageTitle:o,pageDescription:N,pageKeywords:h,titleType:d},Object(s.b)(g,{title:n?Object(s.b)(n,null):o,label:"label",tabs:m}),m&&Object(s.b)(A,{slug:f,tabs:m,currentTab:C}),Object(s.b)(x.a,{padded:!0},t,Object(s.b)(O,{relativePagePath:l})),Object(s.b)(j.a,{pageContext:e,location:a,slug:f,tabs:m,currentTab:C}),Object(s.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pqMt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const i={},c=(p="Caption",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var p;const d={_frontmatter:i},m=b.a;function o(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(m,l({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("h3",null,"Single & multi-line"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$field-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet-button:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-ui"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--light")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$field-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--light:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-ui"))))),Object(n.b)("h3",null,"Inline snippet"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$field-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-ui"))))),Object(n.b)("h3",null,"Syntax colors"),Object(n.b)("p",null,"Carbon has defined a set of accessible syntax colors. View an incontext\n",Object(n.b)("a",l({parentName:"p"},{href:"https://codepen.io/team/carbon/full/eKMBLw/"}),"example")," on CodePen."),Object(n.b)("h2",null,"Typography"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet.code")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12 / 0.75"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$code-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline.code")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12 / 0.75"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$code-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("h3",null,"Single line"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--single")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"40 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--single")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"max-width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"768 / 48"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--single")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-09"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--single")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVQY02NgAIJ3G88xPATSh3dcYvj//z8jGH//zvTk+TOmt2/eML1+/Zrp5cuXTK9evQLjp8+eMcHV/f/PkAfU+696FQMYXFRPZaAWgJs1d/Y6hv9AumLxRp7V1656XXn4wP3Bi+eOr1+/snv99o396zev7V++emX/6vVr+xdA+uPbt7bnnj11mXbmbGDFyk2CIDOWVUxnhJu8d/0hRqCBLItXH1C8+PjJzbfPnz98/uz5/WdPnz149fLlg5fPXzwA8Z8/e/YAKHb/xZMnDx68fPnw0I07D7ftPKkF1Mt4pGouC4aXz1oXMd5NnshxNXsy++3gVu5bTpUiNxwrhG+5Vgvedq4WAdHX7ctFbvnU897JmsJ+N2cGx97eFYwYXgaBY141ZIfdqagOhlsMomA2AEhar3zazzmNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"code snippet style 1",title:"code snippet style 1",src:"/static/255e24540c568408168ce1fa1571705c/3cbba/code-snippet-style-1.png",srcSet:["/static/255e24540c568408168ce1fa1571705c/7fc1e/code-snippet-style-1.png 288w","/static/255e24540c568408168ce1fa1571705c/a5df1/code-snippet-style-1.png 576w","/static/255e24540c568408168ce1fa1571705c/3cbba/code-snippet-style-1.png 1152w","/static/255e24540c568408168ce1fa1571705c/392b1/code-snippet-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for code snippet | px / rem"),Object(n.b)("h3",null,"Multi-line code snippet"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--multi")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"min-height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"288 / 18"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--multi")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"max-height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Varies based on content"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--multi")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"max-width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"768 / 48"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet-container")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-top, padding-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet-container")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-09"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet-container")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16px"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet-button")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7klEQVQoz62SO2/TUBTHXWdAYmBB8BUYwQtLxcICFYQFiW/AF+iMEBJDRyQkJMRQgQRLJVQeAsqz0A60lUCA4jhJQ/1IEzu279OOE8exD/ZNGqKOiKP707lXuud//0f3SFIeACCJzKDYzxU4HpYZCWRK+JTizGggI0TlyT0J7v6SDjR+nrouTQMoSP8tbq+OX1l8+P3Ec7V5vo3Z2ThKzsT9kZLEmTIcpErAIoXiQMGIK8Ogf/pZRTt3a+3j/L0bD44UtVfb9b8OP1muXOSXFlpotB0wf+upbXfBMluClrUPvoeAswBYTsjD1GIhfN41tLXlt8eL2qezLW8gXwi+43Sh6XZBUytZvdEAVVWhVq8JdF0Hw9DBdpxckKd2PIAdSrSlrHdUmHGcuWnLm3gs+IbiiwZCsNdsDqtaNdE0Lel0OgnGOKGUJoTghFCSRGEYt6IebBNcuRPgsaA9I7jRQULwdZuUySgD7Pnguh50uy4MBjFAlq8DUoB+LwI8HMHWvm2uPHkvWl6ZbXl9m4m8+oGdNB1+hePgMqdRmeGwTHyeE0wyL+Mcc9e8tPmjeu3VjnqhtvhIfMry4bF58ZX885Qcg0Mjt/5t4vALlQyHlRjipdyJgKCCYEruulSr75XA78lDL5aXbt4XtY8nDv8AAP6b5xasMgsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for multi-line snippet",title:"Structure and spacing measurements for multi-line snippet",src:"/static/5492b85d79a8ed2787ed197fb794fcf8/3cbba/code-snippet-style-2.png",srcSet:["/static/5492b85d79a8ed2787ed197fb794fcf8/7fc1e/code-snippet-style-2.png 288w","/static/5492b85d79a8ed2787ed197fb794fcf8/a5df1/code-snippet-style-2.png 576w","/static/5492b85d79a8ed2787ed197fb794fcf8/3cbba/code-snippet-style-2.png 1152w","/static/5492b85d79a8ed2787ed197fb794fcf8/392b1/code-snippet-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for multi-line snippet | px / rem"),Object(n.b)("h3",null,"Inline code snippet"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Varies based on content"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border-radius"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--snippet--inline code")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-right, padding-left"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"\\$spacing-03")))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQY02NgQAMyE3vh7P///zP8//OX8dKNG4xP791jBPFBIH31SgbiQG0lmGKb1MfAEBrAiE3JtMVrwOLGGSXEG8jg68nA0t/DNfXIYb1DFy4YPrp/X/3clSu6TYcOKINd/uQHA8OiJuIcOef+PTCt/f8/05nbt/3v3b2beufOnfjrN2+mHTxxzgEktxvo9atqqcS7UP3ta5xKztbMZgLR5zSJNHD961dgpur/fwynb91ivnvnDjPQhczXr15j3vPpJTj8LjQvxGkEAF8oW2BOBBM0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for inline snippet",title:"Structure and spacing measurements for inline snippet",src:"/static/a3c2480b6a2d269cd5134df67f1a2c05/3cbba/code-snippet-style-3.png",srcSet:["/static/a3c2480b6a2d269cd5134df67f1a2c05/7fc1e/code-snippet-style-3.png 288w","/static/a3c2480b6a2d269cd5134df67f1a2c05/a5df1/code-snippet-style-3.png 576w","/static/a3c2480b6a2d269cd5134df67f1a2c05/3cbba/code-snippet-style-3.png 1152w","/static/a3c2480b6a2d269cd5134df67f1a2c05/392b1/code-snippet-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for inline code snippet | px / rem"))}o.isMDXComponent=!0}}]);
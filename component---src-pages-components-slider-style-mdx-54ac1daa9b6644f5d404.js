(window.webpackJsonp=window.webpackJsonp||[]).push([[2010],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),d=a("a7k6"),m=a("TSYQ"),p=a.n(m),o=a("QH2O"),s=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:p()(o.pageHeader,{[o.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:o.text},e))))),O=a("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+O.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:O.link,href:r},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(s.b)("li",{key:e,className:p()({[N.selectedItem]:b},N.listItem)},Object(s.b)(i.Link,{className:N.link,to:""+c},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var x=h,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:m}=e,{tabs:p,title:o,theme:O,description:N,keywords:h}=b,{site:{pathPrefix:f}}=Object(i.useStaticQuery)("2456312558"),C=f?a.pathname.replace(f,""):a.pathname,v=p?C.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(s.b)(d.a,{tabs:p,homepage:!1,theme:O,pageTitle:o,pageDescription:N,pageKeywords:h,titleType:m},Object(s.b)(u,{title:n?Object(s.b)(n,null):o,label:"label",tabs:p}),p&&Object(s.b)(x,{slug:C,tabs:p,currentTab:v}),Object(s.b)(y.a,{padded:!0},t,Object(s.b)(j,{relativePagePath:l})),Object(s.b)(g.a,{pageContext:e,location:a,slug:C,tabs:p,currentTab:v}),Object(s.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sE4y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const i={},c={_frontmatter:i},d=b.a;function m(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(d,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__filled-track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__range-label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))))),Object(n.b)("h3",null,"Interactive states"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$focus"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$interactive-04"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__filled-track:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$interactive-04"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label:disabled")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb:disabled")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__track:disabled")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Slider")," labels should be set in sentence case, with only the first word in a\nphrase and any proper nouns capitalized, and no more than three words."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12 / 0.75"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$label-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__range-label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The width of a slider varies based on page content and layout."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__thumb:active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"20 / 1.25"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 / 0.25"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-left, margin-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider__range-label:last-of-type")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABb0lEQVQoz2NgAIIpQf8ZwHTwf4bZ0f8ZerSUGRZE1DPsdS9iWJdUxzCxo5uho7uLYcWqVWB1Fx4/YXj3/j3TuwdPGUH851uPg8UvqqcywEF/+D8GSsBpFl8EpzXoGoQOviVVH7ZHbZKmtsBW52LBA84FvOsTazlm1razdLe2s6yev5iFgY2P6dqTp5JAFwa8u/9UE6Tv6bK9jCguTInbD6bTko6JhJauUc8wsVZtLKsXmtTXzz1h6mTe1lmTuetmT+CaumUNL0NuqvDGWzcjX75+/fL1vcdlIH2P5m9nQTFwjhWU1mNg9In05/zPPYvlDVc0+33+aPaHXJHsD3mi2F/xRHMckonjLPDIEUzzzxG4VbuA+0ZKHxvMlxe10hFevqbYBaavqHYx/me4zHBYK4HznFYa73mtNJ7z2um8QMwF4l/STON+ppjC80Mwlh2kPhOI7yb2MZxiMMWMlP8MblDGf6Ii4RdQ3X+o2v9IegDaoI/QMgkdLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for slider",title:"Structure and spacing measurements for slider",src:"/static/ca7cedf29252263e3ba55f271b4bbf49/3cbba/slider-style-1.png",srcSet:["/static/ca7cedf29252263e3ba55f271b4bbf49/7fc1e/slider-style-1.png 288w","/static/ca7cedf29252263e3ba55f271b4bbf49/a5df1/slider-style-1.png 576w","/static/ca7cedf29252263e3ba55f271b4bbf49/3cbba/slider-style-1.png 1152w","/static/ca7cedf29252263e3ba55f271b4bbf49/392b1/slider-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h3",null,"Recommended"),Object(n.b)("p",null,"The following specs are not built into the slider component but are recommended\nby design as the proper sizing for the slider tracking line."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider-track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"min-width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"200 / 12.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--slider-track")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"max-width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"640 / 40"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))))}m.isMDXComponent=!0}}]);
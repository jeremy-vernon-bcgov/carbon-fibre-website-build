(window.webpackJsonp=window.webpackJsonp||[]).push([[1937],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),c=a("Wbzz"),i=a("Xrax"),d=a("a7k6"),o=a("TSYQ"),p=a.n(o),m=a("QH2O"),O=a("qKvR");var j=({title:e,tabs:t=[]})=>Object(O.b)("div",{className:p()(m.pageHeader,{[m.withTabs]:t.length})},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.text},e))))),u=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(O.b)("div",{className:"bx--row "+u.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},s=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),i=t.replace(l,n);return Object(O.b)("li",{key:e,className:p()({[N.selectedItem]:b},N.listItem)},Object(O.b)(c.Link,{className:N.link,to:""+i},e))});return Object(O.b)("div",{className:N.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:N.list},n))))))}}var y=h,x=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:o}=e,{tabs:p,title:m,theme:u,description:N,keywords:h}=b,{site:{pathPrefix:C}}=Object(c.useStaticQuery)("2456312558"),f=C?a.pathname.replace(C,""):a.pathname,w=p?f.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(O.b)(d.a,{tabs:p,homepage:!1,theme:u,pageTitle:m,pageDescription:N,pageKeywords:h,titleType:o},Object(O.b)(j,{title:n?Object(O.b)(n,null):m,label:"label",tabs:p}),p&&Object(O.b)(y,{slug:f,tabs:p,currentTab:w}),Object(O.b)(x.a,{padded:!0},t,Object(O.b)(g,{relativePagePath:l})),Object(O.b)(s.a,{pageContext:e,location:a,slug:f,tabs:p,currentTab:w}),Object(O.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},MtNI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const c={},i=(d="Caption",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var d;const o={_frontmatter:c},p=b.a;function m(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(p,l({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table-header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table-header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table thead")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-header-label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table tbody")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--zebra")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--expandable-row-v2")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-sort-v2__icon")," ",Object(n.b)("br",null)," ",Object(n.b)("inlineCode",{parentName:"td"},".bx--table-expand-v2__svg")," ",Object(n.b)("br",null)," ",Object(n.b)("inlineCode",{parentName:"td"},".bx--overflow-menu__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--batch-actions--active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$interactive-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--batch-summary__para")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-04"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--batch-actions .bx--btn")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-04"))))),Object(n.b)("h3",null,"Interactive states"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table tr:hover td")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-row"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td:focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$focus"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--selected")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$selected-ui"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--selected td")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--selected:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-selected-ui"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--batch-actions .bx--btn:hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-primary"))))),Object(n.b)("h3",null,"Style options"),Object(n.b)("p",null,"Specific styling on the data table component can be toggled on/off based on user\nor team preference."),Object(n.b)("h4",null,"Row dividers, zebra striping, & table border"),Object(n.b)("p",null,"If zebra striping is turned off, you must have row dividers."),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACKklEQVQoz4WTy4oTURCGm/S4GMwMbsQ4IwqCrkZm51Z8gLxFAq6SF0hgcCHiRsS8gAYE11kHsoqTTcAIuUCuEnKb3K/d6XS3Xx2TqMjogaLrnP/8f/1VydG07UqlUtq/luu6/8XK5bKmBQIBLZlMqoNoNHoYi8W84XD4ZigUOvL7/R4uPyd8gsfj8aNIJKJw4jiRSBzsxPYFC4WClk6nPZJns9mLTCaTL5VK6WKxeCnRaDQmg8HgMWcPuPc1l8tdkmfy+fwX8G/kL4TLV1cOO52OVqvVdDlsNpufV6uVy5k7HA7d2Wzmtloto16vn0wmk3PBEHen06kKWf1+/71w+R4owfl8rkFWDiF9ME3Tvbq6MsbjsQUmootut3sC98y2bRFaLxaLjWVZpghy/7Vw2evValXTuKAhoARHo1FcBBGwKGJDdCky7/V6vuVy+UT2YDZuHHiWCFL4lXDZ/xKEsBc0DENaFkFHHIKb7O/vHHLHxrWzXq+trcO3O4eVSuWnIBV3gh/FIQVM8o3MEHxBB6cInEkxZmjhStyrlin6RrjsdWa9b1nfCn5yHEdmqIZOVdVyu92+TaFzwRATEVd+IFkUfSlczvRgMPhXyzFmtKLFJi23wToQJuQP4T7CxYAC3yE3KVbbbDYGzt8Jl1wHVyLSsvpP0s4t8lPiLuf3+A8eQ7zA2VPBcenDmbi9Q/teZvoMLCIYX88frwmx657VIXHjuidHeH9/KT8AWNNWz3J3RuYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Data table: row styling",title:"Data table: row styling",src:"/static/6371e088ac5fdb4042d72ae1875d20f2/3cbba/data-table-style-1.png",srcSet:["/static/6371e088ac5fdb4042d72ae1875d20f2/7fc1e/data-table-style-1.png 288w","/static/6371e088ac5fdb4042d72ae1875d20f2/a5df1/data-table-style-1.png 576w","/static/6371e088ac5fdb4042d72ae1875d20f2/3cbba/data-table-style-1.png 1152w","/static/6371e088ac5fdb4042d72ae1875d20f2/392b1/data-table-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(i,{mdxType:"Caption"},"Data table with various row styling"),Object(n.b)("h2",null,"Typography"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table-header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"18 / 1.125"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-header-label")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SemiBold / 600"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"Tables are a configurable and customizable component. Designers can pick and\nchoose certain elements and interactions."),Object(n.b)("h3",null,"Row sizes"),Object(n.b)("p",null,"Short and Default are offered as ",Object(n.b)("strong",{parentName:"p"},"user preferences")," that can be accessed from\nthe table settings menu."),Object(n.b)("p",null,"Row sizes are customizable. The column header row ",Object(n.b)("inlineCode",{parentName:"p"},".bx--data-table thead")," should\nalways match the row size of the table. Tall row heights are only recommended if\nyour data is expected to have 2 lines of content in a single row."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Size"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Row Height (px/rem)"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--compact")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Compact"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"24 / 1.5")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--short")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Short"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table tr")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Default"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table--tall")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Tall"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"64 / 4")))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABvklEQVQoz3WRP2vbUBTFhePQqRSyNGs/RNd8hk4dOnbJ0rQEf4kSSp0OzdB4SBMKXTuEDHEyFFKwaRdPtuQY27Isg/yenv689/SvvjkKtTGBXniIe3XeT+ceGQaq1Wq96XQ6DdOyDpyp88NxnD3MPliWVe/f3n5ljH1ut9t70BxjdjgYDA6Gw+ErzD71+/26aZpHuLNrLGs0Gt0kSUI6khRwn3zuf5vNZqSVorKEEL9c1/29WCwoy3OK45h83/8+n89Jab3U3KyAuHw+nU6Je/MkDkIlY3lsT+xg5rpZKhVpra84501fCBIey+MwDAD6AqgMhEgznZBS6nwdeIG1iHH+N4qiBA4ak8kkwrxIs5SUlNdw02Scle6zKIwiKWXD8zzNGStyANFfrAMvYZmCICAACwBPIS6d3a8D8U84/EP/ChrCFielJgzDpeZyBRyPx897vd4L5LSTpulHnLcI/yWCfo3L+3men8DhO7w/Avg91mvi1AE00Q8AFQCe3cNqtZqxXvjYY5xHD2bbD/qn+EFbeG6WWkTypCiKZyuBbduVbrdbQcgbyxkyrMJRFc4qZQ83FWyygTiqxn8Kmxl3G+O3UGk0r4QAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Data table: row styling",title:"Data table: row styling",src:"/static/4aea265e618c2f327203f1f65d6e3c75/3cbba/data-table-style-3.png",srcSet:["/static/4aea265e618c2f327203f1f65d6e3c75/7fc1e/data-table-style-3.png 288w","/static/4aea265e618c2f327203f1f65d6e3c75/a5df1/data-table-style-3.png 576w","/static/4aea265e618c2f327203f1f65d6e3c75/3cbba/data-table-style-3.png 1152w","/static/4aea265e618c2f327203f1f65d6e3c75/0b124/data-table-style-3.png 1728w","/static/4aea265e618c2f327203f1f65d6e3c75/99571/data-table-style-3.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(i,{mdxType:"Caption"},"Data table: varying row sizes"),Object(n.b)("h3",null,"Basics"),Object(n.b)("p",null,"The basic table style is the required base from which tables can be developed.\nBasic tables are composed of a header row followed by rows of data below. At a\nminimum, tables require three or more columns."),Object(n.b)("p",null,"Column widths can vary by content and only requires a minimum spacing between\ncolumns."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table-header")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-sort-v2__icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td:first-of-type")," ",Object(n.b)("br",null)," ",Object(n.b)("inlineCode",{parentName:"td"},".bx--data-table td:last-of-type")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left, padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("h3",null,"Enhancements"),Object(n.b)("p",null,"After the simple table structure, tables can be enhanced by adding any of the\nfollowing: selectable rows, expanding rows, nested tables, row menus, table\nbatch actions, overall table menu, and/or table filter."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-toolbar")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-toolbar--small")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--table-expand-v2__svg")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--checkbox-appearance")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"20 / 1.25"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Structure and spacing measurements for a basic and an enhanced data table | px\n/ rem")),Object(n.b)("h3",null,"Recommended"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing between"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Columns"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 /1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("h3",null,"Toolbar"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px/rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--toolbar-action")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--toolbar")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-top, margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--toolbar-action--small")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 / 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--toolbar--small")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"margin-top, margin-bottom"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Structure and spacing measurements for toolbar icons | px / rem")))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
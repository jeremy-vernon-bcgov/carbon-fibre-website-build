(window.webpackJsonp=window.webpackJsonp||[]).push([[2065],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),r=a.n(l),s=a("Wbzz"),o=a("Xrax"),b=a("a7k6"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),m=a("qKvR");var h=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:p()(d.pageHeader,{[d.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},e))))),g=a("BAC9");var u=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:i,branch:l}=t||a,r=`${n}/edit/${l}${i}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),A=a("I8xM");class O extends i.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),i=n===a,l=new RegExp(a+"/?(#.*)?$"),o=t.replace(l,n);return Object(m.b)("li",{key:e,className:p()({[A.selectedItem]:i},A.listItem)},Object(m.b)(s.Link,{className:A.link,to:""+o},e))});return Object(m.b)("div",{className:A.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:A.list},n))))))}}var j=O,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:i={},relativePagePath:l,titleType:c}=e,{tabs:p,title:d,theme:g,description:A,keywords:O}=i,{site:{pathPrefix:w}}=Object(s.useStaticQuery)("2456312558"),N=w?a.pathname.replace(w,""):a.pathname,v=p?N.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:g,pageTitle:d,pageDescription:A,pageKeywords:O,titleType:c},Object(m.b)(h,{title:n?Object(m.b)(n,null):d,label:"label",tabs:p}),p&&Object(m.b)(j,{slug:N,tabs:p,currentTab:v}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(u,{relativePagePath:l})),Object(m.b)(f.a,{pageContext:e,location:a,slug:N,tabs:p,currentTab:v}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},anmW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return O}));a("3bBZ"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},b=o("PageDescription"),c=o("AnchorLinks"),p=o("AnchorLink"),d=o("Row"),m=o("Column"),h=o("DoDontRow"),g=o("DoDont"),u=o("Caption"),f={_frontmatter:s},A=i.a;function O(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(A,l({},f,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"This header is part of the Carbon UI shell. A shell is a collection of\ncomponents shared by all products within a platform. It provides a common set of\ninteraction patterns that persist between and across products.")),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(p,{mdxType:"AnchorLink"},"Formatting"),Object(n.b)(p,{mdxType:"AnchorLink"},"Content"),Object(n.b)(p,{mdxType:"AnchorLink"},"Behaviors"),Object(n.b)(p,{mdxType:"AnchorLink"},"Related"),Object(n.b)(p,{mdxType:"AnchorLink"},"References"),Object(n.b)(p,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"The UI shell header is the foundation for navigating and orienting your user to\nthe UI. The UI shell header can be used by itself or combined with the UI shell\nleft and right panels for more complex UI navigation."),Object(n.b)("p",null,"The UI shell is made up of three components—the header, the\n",Object(n.b)("a",l({parentName:"p"},{href:"/components/UI-shell-left-panel/usage"}),"left panel"),", and the\n",Object(n.b)("a",l({parentName:"p"},{href:"/components/UI-shell-right-panel/usage"}),"right panel"),". All three can be used\nindependently, but the components were designed to work together."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Shell UI component"),Object(n.b)("th",l({parentName:"tr"},{align:null})))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Header"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The highest level of navigation. The header can be used on its own for simple products or be used to trigger the left and right panels.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Left panel"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"An optional panel that is used for a product’s navigation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Right panel"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"An optional panel that shows additional system-level actions or content associated with a system icon in the header.")))),Object(n.b)("h3",null,"When to use"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Identify the UI by name."),Object(n.b)("li",{parentName:"ul"},"Globally persistent location for navigational links and utilities.")),Object(n.b)("h3",null,"Types"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Purpose"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Header base"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Has a persistent site title that can be used to identify a single page UI.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Header with navigation"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Includes links and dropdowns for a simple navigation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Header with actions"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Actions or utilities appear in the header as icon buttons to give users quick access to common utilities.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Header with sidenav"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The header can be paired with the ",Object(n.b)("a",l({parentName:"td"},{href:"/components/UI-shell-left-panel/usage"}),"UI shell left panel")," to offer a deeper level of navigation in a UI.")))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{mdxType:"Column"},Object(n.b)("iframe",{loading:"lazy",src:"https://codesandbox.io/embed/header-with-actions-and-nav-m0lo2?fontsize=14&hidenavigation=1&view=preview",title:"header-with-actions-and-nav",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(n.b)("h2",null,"Formatting"),Object(n.b)("h3",null,"Anatomy"),Object(n.b)("p",null,"The header spans the full width of the viewport and is the topmost element in\nthe browser window. The header is persistent throughout the product experience."),Object(n.b)("p",null,"For each UI shell component, left-to-right translates to product-to-global. The\nleft side of the header contains items relevant at the product level. Moving to\nthe right along the header, the functions become more global. Elements in the\nmiddle of the header should represent system-level controls. Elements on the\nright side of the header, such as the switcher, are the most global in their\nscope and span multiple products."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colLg:12,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4klEQVQoz11Qy27TQBQd1w5p1BREldAEhAqqEBLs+Q/2lSok+Ai2vNQFid2URVMrqFIllvxBv4ENa6LIKIvYSRy/Zcc+3DsJbtSRrs6Zc+6cuTMCb/8IufaFIrFdV188PtSIyf2rw5faqkEozx4eaI1mU91rP1DF03sqi7tPWqqoiC3meP1z1Ymj6xaACo5/t9aHBRxU8QENyd9nDfLviFsL734dSOSzR9ft0mhqO8d3te3L541Hg6qi9kj6uisqF/eV7QHxDvmDHaH1Wec9lV4T2rd9rX5ZU7ReXa1+39uqvSkDv5ycXPVNE8bZGYzTHrrdLrq6jo7ehU6onxqSdzodWewbBmkG+YTn/T4+fv7042Z04JwKM9ePgyhNiXJl60o38HaxHmO1LspA152bRZFj6jiZ49hYLBaI4xhJkpS4yRnn8zls24bveRwK13UHZaDv+yaLFJRx43Q6lYeiKJIYBAGoR/IwDKXu+wFmsxnxRAaSZm5M6JrcSDfShA4sy8JkMsF4PAbvR6MRhsOhnMj6a8Ge2PKSdJkiy7EODPtlIKezSBNkRVEgy2QPUvmdWD2TpsrJi4kvyecB2F+WgdFNIJllYJ7nspGRg/mC/08tSEviSPqe5yGMQ9CDZWC8nvAf59X6s6eTKSQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Header anatomy",title:"Header anatomy",src:"/static/49fb2174cd7fb465b227b4138d777c42/3cbba/header_anatomy.png",srcSet:["/static/49fb2174cd7fb465b227b4138d777c42/7fc1e/header_anatomy.png 288w","/static/49fb2174cd7fb465b227b4138d777c42/a5df1/header_anatomy.png 576w","/static/49fb2174cd7fb465b227b4138d777c42/3cbba/header_anatomy.png 1152w","/static/49fb2174cd7fb465b227b4138d777c42/0b124/header_anatomy.png 1728w","/static/49fb2174cd7fb465b227b4138d777c42/0c3f5/header_anatomy.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Hamburger menu"),": The hamburger icon is used to open product navigation\nsuch as the ",Object(n.b)("a",l({parentName:"p"},{href:"/components/UI-shell-left-panel/usage"}),"left panel.")," The\nhamburger menu is only needed when there is a collapsable left navigation.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Header name"),": For IBM products, the header name is always preceded by\n“IBM.”")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Header links"),": Links in the header are supported as product navigation, if\nrequired. These links move to the side menu in narrow screen widths.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sub-menu"),": Sub-menus are supported as product navigation, if required.\nInclude the down-pointing chevron after the link label. Sub-menus open on\nclick and are closed by either selecting an item in the menu, clicking\noutside the menu area, or clicking on the menu label. When open, the chevron\nshould point up. Sub-menu labels serve only to open the dropdown; they cannot\nlink to another page in the product.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Header utilities"),": These utilities are reserved for universal,\nsystem-level functions such as profile, search, notifications, and similar\nfunctions. Not every product on a system is required to show the same\nutilities, but it is recommended for a better cross-product user experience.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Switcher"),": The switcher provides a way for the user to easily navigate\n",Object(n.b)("em",{parentName:"p"},"between")," products and systems. Recommended uses for this component include\nrecently used apps, frequently used apps, or all apps attached to the user’s\naccount. If the list is a manageable size, include all apps or products\navailable on the system."))),Object(n.b)("h3",null,"Placement"),Object(n.b)("p",null,"Icons are not a required element of the header and a product may choose to use\nany set of icons for their UI. Icons should always be aligned to the right of\nthe header with no gaps between icons."),Object(n.b)(h,{mdxType:"DoDontRow"},Object(n.b)(g,{caption:"Header utilities are right aligned with no gaps",mdxType:"DoDont"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACfklEQVQ4y7WT3U4aURDHD6wuCWgpyO4CS1Ebg/gRaJtGb5v2yqu+gQpccN/UXjQ8Su9qfIA+QBuue28CJirEpEAgfAnC7mGnMwe3IWZNaNJO8mfOx8zvzJ45MFVVmaKpTPOHWHBXZ56PKeb5hDq5906y9zB2+f0GI5M/pxmx6EdSFUVSIqoUlgNuYPMbxa4zt4vBNEsA/5ndQ4l6qpAU5asa0c6eJNQf/mS4uLIbKwa2IsXlhFoM7uioaNG3ESrae+i/P90M/1Ti4Q/ECaZiLlFhNBoFW7gAr1IvYSe5DUpgBZ6vrsP+6z2IqGGIRXR49+YtbCeSuBeCnc0t1DaEVkLfCBhVI25N0xjzer2mLY/HY+oxncdX43xRlnlIUXj6RZp7fT7uW1rie/v7XNd1vrC4wNfW1kbP4nGQZfmMgG5Jcvn9fsay2SzM6ujoCI6PjyGXy0EmkxFjWqexvUdz9GY+n4fDw8NTAhYKBffBwQFjnHOwLEtoMpk4jh+RCWiY/2XaE5C63S5jnU4Her0e4ET4eYXxAthutwUQwdLV1RVjtHl7ewv9fl/4eYXxAohgAcSKpUql8p+Bf6n5KrQT5qjaGUhdHo1GItk0RYww6iQZdZtiyM8K15yBlDgej8Wp5C8vL4Wur6+hVCqJgx4ecj92BtJps0CCXFxcAD4BKJfLAlytVqHZbD6s3BlIi4ZhiEro04bD4R/RVZCntzpAPxew1WqJR00Vzt6hs02QOJVlPQKkz6vX6zAYDESFtXoNGvUG3PRrYOIcs2FsWvCrbcFNy4Le0ILBCNeMR4DUgEajIYB0n3TA+fk53BkjsFvAsajuAP9mqDtjOufcGfgbe38TPWcx+MsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of header icons right aligned with no gaps.",title:"Example of header icons right aligned with no gaps.",src:"/static/76ac6702816c491055355087ba54289f/a5df1/utility_placement_do.png",srcSet:["/static/76ac6702816c491055355087ba54289f/7fc1e/utility_placement_do.png 288w","/static/76ac6702816c491055355087ba54289f/a5df1/utility_placement_do.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(g,{type:"dont",caption:"Header utilities with a gap between the account and help icons.",mdxType:"DoDont"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACVUlEQVQ4y7WSS4saQRDH211FHTXsmhlnxhcmRyWHSPCQqx/EJ57yVXLMKaewhhAIueSWS2A/hKCCiixERVnfrx6nUtW7momMYAgp+E91V3f9qmZqWCgUYlZpKEmR2WtVZ+8iz9j7yHP2NpxgTxSFqUd3FYyRJ9vH6HFplawolxH0TH56wSymYwwBQkc54p4V/s8WjUZ/b5BaJWEF4a+vrqrXweBNOKR+eqlqP16p2u0LVfuOnd8EAoFqMBisqqpK/gPqK+a8eeQ4RIfhcBj2wgCk02lIpVJiHQrroOg6hHQNsAvIZrOQTCYBi4s7JFmWvxFQ07QLFGOSJPG93G43j0QiPBaLcY/Hw32SZJAkr9fw+/08k8mIc6fTyROJxCoej4PL5fpIQJ/Pd+H1ehkrFotgVS6Xg3w+D8fxQqHwxxl6XqlUoFQqfSYgnjnK5TJjhmGAaZpCu93Odn1CHNA4518IiEvHdDplbDweAy5gMpkIf67wvgBi/gHY6/UYo8P5fA6z2Uz4c4X3BRDBB2C/3//PwL/UeR3uE87o2h5IU16v1yIZJwZ7o0mS0bTpDnmrMGYPpMTNZiOqkm+1WkKdTgfq9boodFzkcW0PpGpWIEGazSa0221oNBoC3O12YTgcHnduD6TgdrsVndCrLZfLg+hTkKd/dYH+LOBoNBI/NXVo/Yb2tkPig0zzBJBeDxewWCxEh71+Dwb9AdzNesBxj9mw4Sb8vDfhbmTCdGnCYo2x7QkgDWAwGAggfU8qUKvVYLVdw34EBjY1WQDco1bbh71h2AN/AbadC8uw0AtJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of the header icons with a gap between the account and help icons.",title:"Example of the header icons with a gap between the account and help icons.",src:"/static/d9453ba2dcbde0108bbe4c3bb67eeb83/a5df1/utility_placement_dont.png",srcSet:["/static/d9453ba2dcbde0108bbe4c3bb67eeb83/7fc1e/utility_placement_dont.png 288w","/static/d9453ba2dcbde0108bbe4c3bb67eeb83/a5df1/utility_placement_dont.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Example placement"),Object(n.b)("p",null,"The example below shows a header with a switcher, typical platform utility\nicons, and search."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABSklEQVQoz2MQExNjxIZFREUZGfgYGFJUHBgZiARvdRqIU/jEutX6lWWb+lOrVpPnli0Gr2w7tJ/Ztpm9dujWfu3Yrf3Uts36rX4TL1ixj48PPw4sEOrlLygWacO90TTbc6V5pvl6s2ynVcZptitM0qzWm2a5rDBNt1phkm61yTzXa75hohDYQDY2tvd48DtWVtb33AJ8z9m5OF6y83C94BHge8HDz/eSk5f7Ba8g/0sgfsbGzfmVk4crDmxgWVnZ//Ly8v8gGsZGxiCx6qqq/1VAXF1d/b+mpgZCV9dA2FXV/5oaG/9XVFSkgw389+/f3////1OCfwHxf6A5aWADP3/+/P/r16//v3z58h/GJhH/Bhn4/v17iAv//v37D2TBnz9//v3+/RvMJhGDDfzw4QPEQKBBIP5/EP3rF9j1IOcTjTEMBLqQqgYCADB04lKmWihjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"icon placement.",title:"icon placement.",src:"/static/bdad0a4f5265803fbea7cc2aaf722877/3cbba/example_placement.png",srcSet:["/static/bdad0a4f5265803fbea7cc2aaf722877/7fc1e/example_placement.png 288w","/static/bdad0a4f5265803fbea7cc2aaf722877/a5df1/example_placement.png 576w","/static/bdad0a4f5265803fbea7cc2aaf722877/3cbba/example_placement.png 1152w","/static/bdad0a4f5265803fbea7cc2aaf722877/92c65/example_placement.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Icon"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Placement"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"1. Search"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Search should always be positioned as the furthest left icon. This is to allow for an expanding search field that does not disrupt other icon positions.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"2. Other"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The number of header icons a product uses may vary. This placement will help avoid disrupting the position of the core icons and inconsistencies as your user navigates between other product shell headers.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"3. Help"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Help is positioned 4th from the right.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"4. Notifications"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Notifications should be 3rd from the right when paired with the account and switcher icon.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"5. Account"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The account should be the 2nd from the right. This global link gives a user quick access to their account from anywhere in the product UI.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"6. Switcher"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"The switcher should always be positioned as the furthest right icon. This ensures the icon does not shift when navigating across systems.")))),Object(n.b)("h2",null,"Content"),Object(n.b)("h3",null,"Main Elements"),Object(n.b)("h4",null,"Header name"),Object(n.b)("p",null,"The header name should be the name of the parent domain and be as brief as\npossible while giving the user a sense of place. The header name is always\npreceded by “IBM” for IBM products."),Object(n.b)("h4",null,"Header links"),Object(n.b)("p",null,"Header links should be unique and clearly describe the content and location that\nit will link to. Avoid using verbs as header links which could imply that an\naction will be taken when clicking a header link."),Object(n.b)("h2",null,"Behaviors"),Object(n.b)("h3",null,"Interactions"),Object(n.b)("h4",null,"Mouse"),Object(n.b)("p",null,"The header element target areas span the full height of the header. See the\nStyle tab for detailed visual information about the various states."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colLg:12,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABu0lEQVQoz2OI8wthoBZwd3eHMLxUTVM91c02Bps4LnZXM1mmICa1TExcfJmEhMQyMTGxZbKyssskgHxBQUEwFhUVXSYlJbVMUlJymbS09BIZGZn1QHVpcJMn1bTW9Vc135hQ23qit6rpdGVx6emi4qLTxcXFQLr4dElpKZguKCw8XQjERUVFp0uBYiBcVlZ2EoivAdn1YMPWLV7OSC0vz58/H2KWoYFBp5GR0Wc7W7sHegb6T+z0TJ+Em7s+CTZzBmKnJ2FWrmDaWEvviaq62hNtbe0nBvoGQKz/xNDQ8CEQf9DR0emBm7x48eLARYsW9SxdurRxwcIFzasWLm3eumxN85alqyEYyN4MpJcsWNQ8b9685nnz5zfPWwDB8xcuaALirnkL5weDDfv//z+I4gBiPiDmJROD9HJAzWJgsLW1nefi4vIfGO3/7ezs/ltYWPy3sbEBY2tr6//29vZg2tzc/L+Jmen/QHu3/+keof+T3YL/p7gH/8/2ifyf6BywEO7lp0+f6j958iT40aNHvkDaD8jHi589feb34tkzv+fPQPRz3+dPnwU9f/rUAGzYrVu3qJawb127wQAAQejlyvZS+Z0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"UI shell header click targets.",title:"UI shell header click targets.",src:"/static/bf4065297f9957bd2c6190e5fc2babc8/3cbba/header_click_target.png",srcSet:["/static/bf4065297f9957bd2c6190e5fc2babc8/7fc1e/header_click_target.png 288w","/static/bf4065297f9957bd2c6190e5fc2babc8/a5df1/header_click_target.png 576w","/static/bf4065297f9957bd2c6190e5fc2babc8/3cbba/header_click_target.png 1152w","/static/bf4065297f9957bd2c6190e5fc2babc8/0b124/header_click_target.png 1728w","/static/bf4065297f9957bd2c6190e5fc2babc8/0c3f5/header_click_target.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h4",null,"Keyboard"),Object(n.b)("p",null,"Some users may use a keyboard to navigate your site. Starting focus in the main\nnavigation lets them quickly navigate to other areas in your UI, but could block\nthem from the main content if there is a large number of navigation items to tab\nthrough first."),Object(n.b)("p",null,Object(n.b)("a",l({parentName:"p"},{href:"https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G1"}),"Success Criterion 2.4.1 (Bypass Blocks)"),"\nsuggest bypassing these blocks by providing a “Skip to main” link at the start\nof the navigation’s focusable controls. This lets users easily skip the\nnavigation region and begin interacting with the page’s main content area."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colLg:8,colMd:8,colSm:6,mdxType:"Column"},Object(n.b)("img",{src:"/5d3277cc05d3ea02ae87c04f103a4bae/skip-to-main-content.gif",alt:"hint text"}),Object(n.b)(u,{mdxType:"Caption"},'The "Skip to main content link" is the first focusable element on the Carbon website.'))),Object(n.b)("h4",null,"Screen readers"),Object(n.b)("p",null,"VoiceOver: Users can trigger a state change by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Control-Option-Space"),"\nor ",Object(n.b)("inlineCode",{parentName:"p"},"Space")," while the header area has screen reader focus."),Object(n.b)("p",null,"JAWS: Users can trigger a state change by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter")," or ",Object(n.b)("inlineCode",{parentName:"p"},"Space")," while the\nheader area has screen reader focus."),Object(n.b)("p",null,"NVDA: Users can trigger a state change by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter")," or ",Object(n.b)("inlineCode",{parentName:"p"},"Space")," while the\nheader area has screen reader focus."),Object(n.b)("h3",null,"Responsive behavior"),Object(n.b)("p",null,"As a header scales down to fit smaller screen sizes, header links and menus\nshould collapse into a left-panel hamburger menu. See the examples below to\nbetter understand the header’s responsive behavior."),Object(n.b)("p",null,"If your UI includes a left panel, the header links should be added above the\nleft panel items, pushing them down accordingly."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colLg:12,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABxUlEQVQ4y52Sy2rCUBCGj49R+gLtG3TTB+hCadXiHUFBfIIuNRDRKgoSxGX3vUEXXXTbxynW+yWa5GT6zzEGaxWhBz7m5D+T/0wyI4QQJ4FA4BYxDCL/5AYkwKmIx+PXxWKRCoUCpVIpyuVylMlkKJvNUjKZVHvWt7VYLOaTTqcV+Xye4BUTUsrgarUi4BCR3GBZljRN8w/L5fIXnr7COzSfz6NisVgEe70eDQYD23VdG7qDSxwcOpPJxJlOpyoewWTD0WgUFbPZLEwHFowVjuP4+33wF/Lq9/sJgXgB3sAzeNmBtVfc/In4Dp725DCP4ANcojHiDOhA26Hs6Xdiva5AAxNR2pPL2j04F+VyOdJqtajT6Sjq9To1Gg0Vm80mlUolyW6apj10u11qt9vqXNd1qlQqVKvVqFqtkmEYBK84f3LQ+2UWsLewPP2LDREN79ncybM9jZfqcgg/kzsk8fNd27YV6K5Ep2k4HH6zIaag43XSAi50Be9Z4zPkRAVmKcQvjsdjNEy6m+5C4zkjjIQyxLkyxLMFaAuXNX9sMJQh3MSV8EAfNUTlFqAdlCFy1oZcIRtwhVi+Ic44SRni9kMV0naFP95n/YWNMjB1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"An example of the header responding to different screen sizes.",title:"An example of the header responding to different screen sizes.",src:"/static/03db9c2fae6ff35278d2c97ae3eddec9/3cbba/responsive_header_1.png",srcSet:["/static/03db9c2fae6ff35278d2c97ae3eddec9/7fc1e/responsive_header_1.png 288w","/static/03db9c2fae6ff35278d2c97ae3eddec9/a5df1/responsive_header_1.png 576w","/static/03db9c2fae6ff35278d2c97ae3eddec9/3cbba/responsive_header_1.png 1152w","/static/03db9c2fae6ff35278d2c97ae3eddec9/0b124/responsive_header_1.png 1728w","/static/03db9c2fae6ff35278d2c97ae3eddec9/0c3f5/responsive_header_1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Related"),Object(n.b)("p",null,"The following components are additional ways to organize and navigate data."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",l({parentName:"p"},{href:"/components/UI-shell-left-panel/usage/"}),"UI Shell left panel"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",l({parentName:"p"},{href:"/components/UI-shell-right-panel/usage/"}),"UI shell right panel")))),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Susan Farrell,\n",Object(n.b)("a",l({parentName:"li"},{href:"https://www.nngroup.com/articles/utility-navigation/"}),"Utility Navigation: What It Is and How to Design It"),"\n(Nielsen Norman Group, 2015)"),Object(n.b)("li",{parentName:"ul"},"WebAIM, ",Object(n.b)("a",l({parentName:"li"},{href:"https://webaim.org/techniques/skipnav/"}),Object(n.b)("em",{parentName:"a"},"“Skip Navigation” Links")),"\n(2013)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://www.w3.org/WAI/standards-guidelines/wcag/"}),"Web Content Accessibility Guidelines"),"\n(W3C, 2018)")),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",l({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}O.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2071],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("NmYn"),r=n.n(i),c=n("Wbzz"),l=n("Xrax"),b=n("a7k6"),s=n("TSYQ"),d=n.n(s),m=n("QH2O"),p=n("qKvR");var h=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:d()(m.pageHeader,{[m.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.text},e))))),u=n("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:o,branch:i}=t||n,r=`${a}/edit/${i}${o}/src/pages${e}`;return a?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},O=n("FCXl"),j=n("I8xM");class y extends o.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=r()(e,{lower:!0,strict:!0}),o=a===n,i=new RegExp(n+"/?(#.*)?$"),l=t.replace(i,a);return Object(p.b)("li",{key:e,className:d()({[j.selectedItem]:o},j.listItem)},Object(p.b)(c.Link,{className:j.link,to:""+l},e))});return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:j.list},a))))))}}var x=y,f=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:o={},relativePagePath:i,titleType:s}=e,{tabs:d,title:m,theme:u,description:j,keywords:y}=o,{site:{pathPrefix:v}}=Object(c.useStaticQuery)("2456312558"),w=v?n.pathname.replace(v,""):n.pathname,T=d?w.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"";return Object(p.b)(b.a,{tabs:d,homepage:!1,theme:u,pageTitle:m,pageDescription:j,pageKeywords:y,titleType:s},Object(p.b)(h,{title:a?Object(p.b)(a,null):m,label:"label",tabs:d}),d&&Object(p.b)(x,{slug:w,tabs:d,currentTab:T}),Object(p.b)(f.a,{padded:!0},t,Object(p.b)(g,{relativePagePath:i})),Object(p.b)(O.a,{pageContext:e,location:n,slug:w,tabs:d,currentTab:T}),Object(p.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},oijp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return g}));n("3bBZ"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},b=l("AnchorLinks"),s=l("AnchorLink"),d=l("DoDontRow"),m=l("DoDont"),p=l("Video"),h={_frontmatter:c},u=o.a;function g(e){let{components:t}=e,n=r(e,["components"]);return Object(a.b)(u,i({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Paths"),Object(a.b)(s,{mdxType:"AnchorLink"},"Composition")),Object(a.b)("h2",null,"Paths"),Object(a.b)("p",null,"Elements in Carbon dance on the grid. Motion paths trace lines along the grid\nwhich never run diagonally."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"When expanding or moving elements across the screen, stagger the timing of horizontal and vertical animations to create a path with a rounded corner.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582887",mdxType:"Video"}))),Object(a.b)("br",null),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,type:"dont",caption:"Not staggering horizontal and vertical animations create a straight diagonal path. It breaks the grid and is harsh to the eye.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582699",mdxType:"Video"}))),Object(a.b)("br",null),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{aspectRatio:"1:1",caption:"When removing an item from the grid, thumbnails on the edge existing and re-entering container create a smooth transition.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582738",mdxType:"Video"})),Object(a.b)(m,{type:"dont",aspectRatio:"1:1",caption:"Thumbnails moving on diagonal paths feels sporadic and harsh.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582775",mdxType:"Video"}))),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{aspectRatio:"1:1",caption:"When sorting or shuffling items on the grid, always using rounded corner paths to visually organize the movements.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582816",mdxType:"Video"})),Object(a.b)(m,{type:"dont",aspectRatio:"1:1",caption:"Criss cross sorting appears disorganized. Avoid this motion path.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582851",mdxType:"Video"}))),Object(a.b)("h2",null,"Composition"),Object(a.b)("p",null,"When multiple animated elements coexist or interact with each other within the\nsame view, it is vital to make the many moving elements work together and form a\ncoherent experience, to better provide way-finding and focus."),Object(a.b)("h3",null,"Consistency"),Object(a.b)("h4",null,"Semantic consistency"),Object(a.b)("p",null,"When elements convey the same meaning or perform the same function, use the same\nmotion for them, and vice-versa. This helps to reinforce the meaning behind a\nmovement and improves the user’s proficiency using the interface."),Object(a.b)("p",null,"In the example below, both expanding a row of a data table and opening a\ndropdown use a chevron and share a similar intent—to reveal content hidden in a\nseam. Therefore, they should use the same motion style (productive) and easing\n(entrance, standard). However, they should use slightly different durations due\nto their difference in size."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"Comparing data table expansion and dropdown",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310581970",mdxType:"Video"}))),Object(a.b)("h4",null,"Spatial consistency"),Object(a.b)("p",null,"Pay attention to the spatial relationships between elements and screens, and\ninformation hierarchy. Visually similar elements may need the different motions\nto clarify their respective spatial locations."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"When the new content panel is on a higher layer, motion is “sliding”, moving content within with the panel.  Also always dim the content below when new layer is introduced above.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310581999",mdxType:"Video"}))),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"When the new content panel is on the same layer, motion is “pushing”, revealing content within with a mask.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582064",mdxType:"Video"}))),Object(a.b)("h4",null,"Intentional inconsistency"),Object(a.b)("p",null,"Conscientious use of inconsistency in motion highlights a difference in meaning\nor intent behind actions with similar visual appearance. Usually, forward motion\nin the direction of entrance signals affirmation, while reversing entrance\nmotion signals cancellation."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{aspectRatio:"1:1",caption:"Use motion to reinforce meaning. Affirmative action here triggers a different exit motion for the modal than negation.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582134",mdxType:"Video"})),Object(a.b)(m,{type:"dont",aspectRatio:"1:1",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582167",mdxType:"Video"}))),Object(a.b)("h3",null,"Continuity"),Object(a.b)("p",null,"Motion can help establish a sense of continuity between screens and experiences.\nPay attention to shared elements across screens, such as title panels or\nbuttons, to create a graceful transition."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"Shared elements can effectively guide users through a multi-layered information architecture.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582206",mdxType:"Video"}))),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,type:"dont",caption:"Continuous elements are for guidance and should not distract. Always finish a sequence with the important content on page.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582279",mdxType:"Video"}))),Object(a.b)("h3",null,"Sequence and stagger"),Object(a.b)("p",null,"When multiple elements need to animate, distribute their entrances over time\ninstead of introducing everything at once. This will help the user understand\nthe content and orientation."),Object(a.b)("p",null,"For example, staggering the entrance of table content by 20 ms significantly\nreduces the cognitive load. Depending on the number of staggered elements, the\ndelay should be adjusted to ensure that total time is still within 500 ms."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"Table with rows loading in at staggered timing.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582972",mdxType:"Video"}))),Object(a.b)("p",null,"Sequence the loading of page content when possible. Start with the most stable\ncontent, such as static content and header, and end with the most important\ninformation, such as the primary button or a calculation result, to focus the\nuser’s attention on them."),Object(a.b)(d,{mdxType:"DoDontRow"},Object(a.b)(m,{colLg:12,colMd:8,caption:"Sequencing of this interface prioritizes the primary button, and reserves data visualization for later when users begin to scroll, indicating intention to dive deeper.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582919",mdxType:"Video"}))),Object(a.b)("p",null,"Follow this recommended sequence of different types of content when\nchoreographing content entrance. Not all categories will be present in every\nexperience."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Seq"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Category"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Examples"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Static content"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"UI shell, top and side navigation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"2"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Static content (body)"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Headers, written content, images")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"3"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Dynamic content"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Content of a data table, query results from database")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"4"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Primary action"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Primary action button")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"5"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Animated content"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Data visualizations")))))}g.isMDXComponent=!0}}]);
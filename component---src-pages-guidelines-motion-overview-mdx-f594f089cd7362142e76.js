(window.webpackJsonp=window.webpackJsonp||[]).push([[2141],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),o=n.n(r),b=n("Wbzz"),l=n("Xrax"),c=n("a7k6"),s=n("TSYQ"),m=n.n(s),d=n("QH2O"),p=n("qKvR");var u=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:m()(d.pageHeader,{[d.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},e))))),O=n("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(b.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:i,branch:r}=t||n,o=`${a}/edit/${r}${i}/src/pages${e}`;return a?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=n("FCXl"),h=n("I8xM");class N extends i.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=o()(e,{lower:!0,strict:!0}),i=a===n,r=new RegExp(n+"/?(#.*)?$"),l=t.replace(r,a);return Object(p.b)("li",{key:e,className:m()({[h.selectedItem]:i},h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+l},e))});return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},a))))))}}var v=N,y=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:i={},relativePagePath:r,titleType:s}=e,{tabs:m,title:d,theme:O,description:h,keywords:N}=i,{site:{pathPrefix:x}}=Object(b.useStaticQuery)("2456312558"),f=x?n.pathname.replace(x,""):n.pathname,T=m?f.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:O,pageTitle:d,pageDescription:h,pageKeywords:N,titleType:s},Object(p.b)(u,{title:a?Object(p.b)(a,null):d,label:"label",tabs:m}),m&&Object(p.b)(v,{slug:f,tabs:m,currentTab:T}),Object(p.b)(y.a,{padded:!0},t,Object(p.b)(j,{relativePagePath:r})),Object(p.b)(g.a,{pageContext:e,location:n,slug:f,tabs:m,currentTab:T}),Object(p.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},azdr:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return f}));n("3bBZ"),n("q1tI");var a=n("7ljp"),i=n("013z"),r=n("6zbs");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},s=c("PageDescription"),m=c("AnchorLinks"),d=c("AnchorLink"),p=c("Video"),u=c("Tabs"),O=c("Row"),j=c("Column"),g=c("DoDontRow"),h=c("DoDont"),N=c("ResourceCard"),v=c("MdxIcon"),y={_frontmatter:l},x=i.a;function f(e){let{components:t}=e,n=b(e,["components"]);return Object(a.b)(x,o({},y,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Motion can bring the screen to life, guide users through complex experiences,\nand help move them forward—from here to there, now to next, start to finish—and\nmake progress.")),Object(a.b)(m,{mdxType:"AnchorLinks"},Object(a.b)(d,{mdxType:"AnchorLink"},"Carbon in motion"),Object(a.b)(d,{mdxType:"AnchorLink"},"Style"),Object(a.b)(d,{mdxType:"AnchorLink"},"Easing"),Object(a.b)(d,{mdxType:"AnchorLink"},"Duration"),Object(a.b)(d,{mdxType:"AnchorLink"},"Implementation"),Object(a.b)(d,{mdxType:"AnchorLink"},"Resources")),Object(a.b)(p,{vimeoId:"281513709",mdxType:"Video"}),Object(a.b)("h2",null,"Carbon in motion"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"../../components/overview/"}),"Carbon components")," have motion built in for\nmicrointeractions. However, the motion design of the overarching UI — that is,\nhow the components interact with each other and enter and exit the page itself —\nis up to each product team to implement. Use this guidance to customize,\ncombine, coordinate, and choreograph this aspect of motion in the UI."),Object(a.b)("h2",null,"Style"),Object(a.b)("p",null,"Carbon recognizes different types of moments in users’ experience and offers two\nstyles of motion—",Object(a.b)("em",{parentName:"p"},"productive")," motion, and ",Object(a.b)("em",{parentName:"p"},"expressive")," motion. The motion curves\nare designed to reflect the duality of man and machine."),Object(a.b)("p",null,"Productivity and expression are both essential to an interface. Reserve\nexpressive motion for occasional, important moments, to better capture the\nuser’s attention and offer a rhythmic break to the productive experience."),Object(a.b)(u,{mdxType:"Tabs"},Object(a.b)(r.a,{label:"Curves",mdxType:"Tab"},Object(a.b)(O,{mdxType:"Row"},Object(a.b)(j,{colSm:6,colMd:4,colLg:6,mdxType:"Column"},Object(a.b)("p",{className:"tab--columns_label"}," Productive "),Object(a.b)("img",{src:"/88eb36164b01911cdfbbfcadf25d450c/Motion_overview_Curves_productive.svg",alt:"Curve graphs representing differences between productive and expressive animation curves"})),Object(a.b)(j,{colSm:6,colMd:4,colLg:6,mdxType:"Column"},Object(a.b)("p",{className:"tab--columns_label"},"Expressive"),Object(a.b)("img",{src:"/dc374d592da23460cf0079bb133577d6/Motion_overview_Curves_expressive.svg",alt:"Curve graphs representing differences between productive and expressive animation curves"})))),Object(a.b)(r.a,{label:"Abstract",mdxType:"Tab"},Object(a.b)(p,{vimeoId:"310583009",mdxType:"Video"})),Object(a.b)(r.a,{label:"In-situ",mdxType:"Tab"},Object(a.b)(p,{vimeoId:"310583036",mdxType:"Video"}))),Object(a.b)("h3",null,"Productive motion"),Object(a.b)("p",null,"Productive motion creates a sense of efficiency and responsiveness, while remain\nsubtle and out of the way. Productive motion is appropriate for moments when the\nuser needs to focus on completing tasks. Microinteractions in Carbon such as\nbutton states, dropdowns, revealing additional information, or rendering data\ntables and visualizations were all designed with productive motion."),Object(a.b)("h3",null,"Expressive motion"),Object(a.b)("p",null,"Expressive motion delivers enthusiastic, vibrant, and highly visible movement.\nUse expressive motion for significant moments such as opening a new page,\nclicking the primary action button, or when the movement itself conveys a\nmeaning. System alerts and the appearance of notification boxes are great cases\nfor expressive motion."),Object(a.b)(g,{mdxType:"DoDontRow"},Object(a.b)(h,{colLg:12,colMd:8,fullWidth:!0,caption:"Productive moments are labeled in blue, and expressive moments are labeled in magenta.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310583077",mdxType:"Video"}))),Object(a.b)("h2",null,"Easing"),Object(a.b)("p",null,"Strictly linear movement appears unnatural to the human eye. Elements on the\nscreen should speed up quickly and slow down smoothly, obeying the physics of a\nlight-weight material. “Easing curves” describe the precise amount of\naccelerations in motion. We commonly use one of these three types of easing."),Object(a.b)(g,{mdxType:"DoDontRow"},Object(a.b)(h,{colLg:12,colMd:8,fullWidth:!0,caption:"Elements on the screen speed up quickly and slow down smoothly, obeying the physics of a light-weight material.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582370",mdxType:"Video"}))),Object(a.b)("br",null),Object(a.b)("p",null,"Avoid easing curves that are unnatural, distracting, or purely decorative. IBM\nmotion is essential and efficient, guiding users to value as quickly as\npossible."),Object(a.b)(g,{mdxType:"DoDontRow"},Object(a.b)(h,{colLg:12,colMd:8,type:"dont",fullWidth:!0,caption:"Do not use easing curves that suggest bounce, stretch, or sudden stops.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582418",mdxType:"Video"}))),Object(a.b)("h3",null,"Standard easing"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"standard-easing")," when an element is visible from the beginning to the end\nof a motion. Expanding tiles and the sorting of table rows are good examples."),Object(a.b)(u,{mdxType:"Tabs"},Object(a.b)(r.a,{label:"Curves",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582611",mdxType:"Video"}))),Object(a.b)(r.a,{label:"Examples",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582667",mdxType:"Video"})))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Style"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"IBM Motion package"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"After Effects"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Productive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(standard, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.2, 0, 0.38, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 20%, incoming 62%")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Expressive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(standard, expressive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.4, 0.14, 0.3, 1)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 40%, incoming 70%")))),Object(a.b)("h3",null,"Entrance easing"),Object(a.b)("p",null,"With this style, an element quickly appears and slows down to a stop. Use\n",Object(a.b)("inlineCode",{parentName:"p"},"entrance-ease")," when adding elements to the view, such as a modal or toaster\nappearing. Elements moving in response to the user’s input, such as a dropdown\nopening or toggle switching should also use this style."),Object(a.b)(u,{mdxType:"Tabs"},Object(a.b)(r.a,{label:"Curves",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582467",mdxType:"Video"}))),Object(a.b)(r.a,{label:"Examples",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582503",mdxType:"Video"})))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Style"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"IBM Motion package"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"After Effects"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Productive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(entrance, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0, 0, 0.38, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 0%, incoming 62%")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Expressive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(entrance, expressive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0, 0, 0.3, 1)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 0%, incoming 70%")))),Object(a.b)("h3",null,"Exit easing"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"exit-easing")," when removing elements from view, such as closing a modal or\ntoaster. The element speeds up as it exits from view, implying that its\ndeparture from the screen is permanent."),Object(a.b)("p",null,"An exception to exits: if an element leaves the view but stays nearby, ready to\nreappear upon user action, use standard easing instead. A good example of this\nis a side panel. The panel leaves the view, but slows down as it exits, implying\nthat it would come to rest just outside the view, and ready to be recalled."),Object(a.b)(u,{mdxType:"Tabs"},Object(a.b)(r.a,{label:"Curves",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582530",mdxType:"Video"}))),Object(a.b)(r.a,{label:"Examples",mdxType:"Tab"},Object(a.b)("div",null,Object(a.b)(p,{vimeoId:"310582574",mdxType:"Video"})))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Style"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"IBM motion package"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"After Effects"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Productive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(exit, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.2, 0, 1, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 20%, incoming 0%")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Expressive"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(exit, expressive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.4, 0.14, 1, 1)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"outgoing 40%, incoming 0%")))),Object(a.b)("h3",null,"Summary on easing"),Object(a.b)("p",null,"The\n",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/tree/master/packages/motion"}),"IBM motion package"),"\nhas the easing curves stored for fast access. This is the recommended method to\ncall an easing curve and stay connected to receive any future updates."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Easing curve"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Productive"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Expressive"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Standard easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(standard, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(standard, expressive)"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Entrance easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(entrance, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(entrance, expressive)"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Exit easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(exit, productive)")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"motion(exit, expressive)"))))),Object(a.b)("p",null,"If you are unable to use the above method, cubic-bezier curve notation is the\nstandard way to express easing curves."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Easing curve"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Productive"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Expressive"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Standard easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.2, 0, 0.38, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.4, 0.14, 0.3, 1)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Entrance easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0, 0, 0.38, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0, 0, 0.3, 1)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"Exit easing"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.2, 0, 1, 0.9)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"cubic-bezier(0.4, 0.14, 1, 1)")))),Object(a.b)("h2",null,"Duration"),Object(a.b)("p",null,"Duration is calculated based on the style and size of the motion. Among the two\nmotion styles, productive motion is significantly faster than expressive motion.\nMotion’s duration should be dynamic based on the size of the animation; the\nlarger the change in distance (traveled) or size (scaling) of the element, the\nlonger the animation takes."),Object(a.b)(g,{mdxType:"DoDontRow"},Object(a.b)(h,{colLg:8,colMd:8,caption:"Duration contrast between a taller and a shorter component.",mdxType:"DoDont"},Object(a.b)(p,{vimeoId:"310582312",mdxType:"Video"}))),Object(a.b)("br",null),Object(a.b)("p",null,"When custom duration is possible, please use the\n",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/motion/"}),"Motion Generator")," to get the customized duration\ncalculated for your element. Carbon uses a non-linear duration scale to achieve\nbetter perceived consistency across all distances."),Object(a.b)(O,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(j,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(N,{subTitle:"Motion Generator",href:"https://ibm.github.io/motion/",mdxType:"ResourceCard"}))),Object(a.b)("br",null),Object(a.b)("h3",null,"Duration tokens"),Object(a.b)("p",null,"Dynamic duration is an upcoming built-in feature for Carbon components and a\npart of the motion package. Currently, there are six static value tokens for\neasier implementation."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Token"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Usage"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"),Object(a.b)("th",o({parentName:"tr"},{align:null})))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--fast-01")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Micro-interactions such as button and toggle"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"70ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--fast-02")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Micro-interactions such as fade"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"110ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--moderate-01")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Micro-interactions, small expansion, short distance movements"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"150ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--moderate-02")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Expansion, system communication, toast"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"240ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--slow-01")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Large expansion, important system notifications"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"400ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"duration--slow-02")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Background dimming"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"700ms"),Object(a.b)("td",o({parentName:"tr"},{align:null}))))),Object(a.b)("h2",null,"Implementation"),Object(a.b)("h3",null,"Motion design strategy"),Object(a.b)("p",null,"Follow these steps to assess your interface for purposeful motion:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Define the goals and values of the product."),Object(a.b)("li",{parentName:"ol"},"Establish information hierarchy within the view."),Object(a.b)("li",{parentName:"ol"},"Identify the journey you will guide users through."),Object(a.b)("li",{parentName:"ol"},"Identify key moments and opportunities for UI motion in the journey.\nExamples:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Give feedback, such as hover states and active state component behaviors\nlike opening a dropdown menu"),Object(a.b)("li",{parentName:"ul"},"Solutions to a UX need, such as reducing cognitive load with progressive\ndisclosure"),Object(a.b)("li",{parentName:"ul"},"Providing guidance, such as revealing a call to action to draw users’\nattention"))),Object(a.b)("li",{parentName:"ol"},"Assign or determine either productive or expressive motion"),Object(a.b)("li",{parentName:"ol"},"Prototype and test")),Object(a.b)("h3",null,"Evaluation checklist"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Is your motion purposeful?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"What problem is motion solving?"),Object(a.b)("li",{parentName:"ul"},"Does it enhance the user’s understanding of an action?"))),Object(a.b)("li",{parentName:"ol"},"Is your motion responsive?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Do user actions receive immediate feedback that’s seen and felt?"),Object(a.b)("li",{parentName:"ul"},"Do micro-interactions use ",Object(a.b)("inlineCode",{parentName:"li"},"ease-out")," on user input?"),Object(a.b)("li",{parentName:"ul"},"Do micro-interactions fall within a static duration ranging from 90–120 ms?"),Object(a.b)("li",{parentName:"ul"},"If there are large, or full screen, transitions in your product, are there\ncontinuous elements in your transition to guide the user?"))),Object(a.b)("li",{parentName:"ol"},"Is your motion meticulous?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Did you use the appropriate easing curves?"),Object(a.b)("li",{parentName:"ul"},"Is each motion individually considered?"),Object(a.b)("li",{parentName:"ul"},"Do related movements have a unified relationship with each other?"),Object(a.b)("li",{parentName:"ul"},"Is the motion effective across all screen sizes? Keep in mind that on\nmobile screens, subtle motions may be easily missed."))),Object(a.b)("li",{parentName:"ol"},"Is your motion unobtrusive?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The best interface motion may go unnoticed, because it often keeps users\nengaged with their tasks. Is your motion frequently noticed by average\nusers? If so, consider removing or minimizing it.")))),Object(a.b)("h3",null,"Adaptive interface motion design"),Object(a.b)("p",null,"A large population of users exist with impaired vision or impaired ability to\nperceive and handle motion in UI. In addition, not all devices are powerful\nenough to smoothly perform all the motion you would like, no matter how\nessential the motion design is. Always provide alternatives for interface state\ntransitions. Consider simplified or reduced motion designs for mobile and\ntablet. Make sure there is always a way to communicate similar messages\nstatically."),Object(a.b)("h2",null,"Resources"),Object(a.b)(O,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(j,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(N,{subTitle:"IBM Motion Generator",href:"https://ibm.github.io/motion/",mdxType:"ResourceCard"},Object(a.b)(v,{name:"bee",mdxType:"MdxIcon"}))),Object(a.b)(j,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(N,{subTitle:"Elements package: Motion",href:"https://github.com/carbon-design-system/carbon/tree/master/packages/motion",mdxType:"ResourceCard"},Object(a.b)(v,{name:"github",mdxType:"MdxIcon"})))))}f.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2179],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),b=a("a7k6"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a("qKvR");var m=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:d()(p.pageHeader,{[p.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},e))))),h=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:o}=t||a,i=`${n}/edit/${o}${r}/src/pages${e}`;return n?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("I8xM");class O extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=i()(e,{lower:!0,strict:!0}),r=n===a,o=new RegExp(a+"/?(#.*)?$"),s=t.replace(o,n);return Object(u.b)("li",{key:e,className:d()({[x.selectedItem]:r},x.listItem)},Object(u.b)(c.Link,{className:x.link,to:""+s},e))});return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:x.list},n))))))}}var j=O,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:o,titleType:l}=e,{tabs:d,title:p,theme:h,description:x,keywords:O}=r,{site:{pathPrefix:w}}=Object(c.useStaticQuery)("2456312558"),k=w?a.pathname.replace(w,""):a.pathname,v=d?k.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:d,homepage:!1,theme:h,pageTitle:p,pageDescription:x,pageKeywords:O,titleType:l},Object(u.b)(m,{title:n?Object(u.b)(n,null):p,label:"label",tabs:d}),d&&Object(u.b)(j,{slug:k,tabs:d,currentTab:v}),Object(u.b)(y.a,{padded:!0},t,Object(u.b)(g,{relativePagePath:o})),Object(u.b)(f.a,{pageContext:e,location:a,slug:k,tabs:d,currentTab:v}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},a2q2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},b=s("PageDescription"),l=s("InlineNotification"),d=s("CardGroup"),p=s("MiniCard"),u={_frontmatter:c},m=r.a;function h(e){let{components:t}=e,a=i(e,["components"]);return Object(n.b)(m,o({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"An opportunity to see early Carbon concepts and ideas, and experiment with work\nin progress.")),Object(n.b)(l,{mdxType:"InlineNotification"},"This work in progress is not actively supported by the Carbon team, and is not approved for production use. We gratefully accept feedback or comment."),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"The Carbon team is always exploring different ways to serve our users. We work\nin the open, and this page is here to give you early previews of what we’re\nworking on."),Object(n.b)("p",null,"That could mean making an unfinished Sketch kit available for download, linking\nto GitHub issues for proposed components and patterns, or sharing graphics files\nof concepts for how we might present content."),Object(n.b)("p",null,"Not everything here may make it into production, while other pieces might become\ncentral pieces of the design system. It’s an early opportunity for you to\nprovide feedback and have a say in Carbon’s direction."),Object(n.b)("h3",null,"Tools and resources"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"React Native Sketch kits for mobile")),Object(n.b)(d,{mdxType:"CardGroup"},Object(n.b)(p,{title:"Light theme",href:"sketch://add-library/cloud/a3343128-adb6-489c-9e62-709d89ba76e9",actionIcon:"launch",onClick:()=>fathom.trackGoal("GZNMLWPV",0),mdxType:"MiniCard"}),Object(n.b)(p,{title:"Dark theme",href:"sketch://add-library/cloud/1f59f590-6915-47b0-bf06-6fd66209b3b3",actionIcon:"launch",onClick:()=>fathom.trackGoal("BHFADJ59",0),mdxType:"MiniCard"}),Object(n.b)(p,{title:"IBM Grid template",href:"https://www.sketch.com/s/42e694ee-4b37-41c9-8c8f-480e2415d9de",actionIcon:"launch",onClick:()=>fathom.trackGoal("TWMSHNQP",0),mdxType:"MiniCard"})),Object(n.b)("h3",null,"Components and patterns"),Object(n.b)(d,{mdxType:"CardGroup"},Object(n.b)(p,{onClick:()=>fathom.trackGoal("B3AN6GVA",0),title:"Tree view component",href:"https://carbon-website-git-fork-designertyler-treeview03092020.carbon-design-system.now.sh/components/tree-view/usage",mdxType:"MiniCard"})),Object(n.b)("h3",null,"Website design and content"),Object(n.b)(d,{mdxType:"CardGroup"},Object(n.b)(p,{onClick:()=>fathom.trackGoal("ZASURK2Q",0),title:"Activation concepts",href:"https://github.com/carbon-design-system/carbon-website/issues/1519",mdxType:"MiniCard"})))}h.isMDXComponent=!0}}]);
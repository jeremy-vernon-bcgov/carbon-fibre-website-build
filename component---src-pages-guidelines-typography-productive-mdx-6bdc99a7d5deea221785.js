(window.webpackJsonp=window.webpackJsonp||[]).push([[2086],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("NmYn"),o=a.n(s),i=a("Wbzz"),c=a("Xrax"),l=a("a7k6"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),p=a("qKvR");var m=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:u()(d.pageHeader,{[d.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},e))))),x=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:s}=t||a,o=`${n}/edit/${s}${r}/src/pages${e}`;return n?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("I8xM");class f extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=o()(e,{lower:!0,strict:!0}),r=n===a,s=new RegExp(a+"/?(#.*)?$"),c=t.replace(s,n);return Object(p.b)("li",{key:e,className:u()({[O.selectedItem]:r},O.listItem)},Object(p.b)(i.Link,{className:O.link,to:""+c},e))});return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},n))))))}}var v=f,j=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:s,titleType:b}=e,{tabs:u,title:d,theme:x,description:O,keywords:f}=r,{site:{pathPrefix:y}}=Object(i.useStaticQuery)("2456312558"),T=y?a.pathname.replace(y,""):a.pathname,w=u?T.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:x,pageTitle:d,pageDescription:O,pageKeywords:f,titleType:b},Object(p.b)(m,{title:n?Object(p.b)(n,null):d,label:"label",tabs:u}),u&&Object(p.b)(v,{slug:T,tabs:u,currentTab:w}),Object(p.b)(j.a,{padded:!0},t,Object(p.b)(g,{relativePagePath:s})),Object(p.b)(h.a,{pageContext:e,location:a,slug:T,tabs:u,currentTab:w}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WvQ6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z"),s=a("E8Q3");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c={},l={_frontmatter:c},b=r.a;function u(e){let{components:t}=e,a=i(e,["components"]);return Object(n.b)(b,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"IBM Productive type set"),Object(n.b)("p",null,"Productive type is reserved for use in web-based product design, where the user\nneeds to focus on tasks. The Productive styles are curated to create a series of\nclear user expectations about hierarchy."),Object(n.b)("p",null,"The Productive styles below introduce the new IBM Design Language tokens. The\ndifference between the Productive and Expressive styles is mainly evident in the\nHeadings. Aside from the token names, which are specifically calibrated for\nproduct vs. editorial designers (e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"$label-01")," vs. ",Object(n.b)("inlineCode",{parentName:"p"},"$caption-01"),") — the\nSupporting and Body styles have the same values in both the Productive and\nExpressive sets."),Object(n.b)("p",null,"Even though IBM Plex contains a wide range of scales, it’s important to use\ncurated sets below for their specified purpose. For consistent, reliable\nperformance across various screen sizes, do not use fluid type in components or\nin product UI."),Object(n.b)(s.a,{breakpointControls:!1,typesets:"supportingStyles,body,fixedHeadings",mdxType:"TypesetStyle"}))}u.isMDXComponent=!0}}]);
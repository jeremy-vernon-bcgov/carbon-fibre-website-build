(window.webpackJsonp=window.webpackJsonp||[]).push([[2084],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),o=a("Xrax"),c=a("a7k6"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a("qKvR");var m=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:d()(p.pageHeader,{[p.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},e))))),g=a("BAC9");var h=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:s,branch:r}=t||a,i=`${n}/edit/${r}${s}/src/pages${e}`;return n?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},x=a("FCXl"),y=a("I8xM");class O extends s.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=i()(e,{lower:!0,strict:!0}),s=n===a,r=new RegExp(a+"/?(#.*)?$"),o=t.replace(r,n);return Object(u.b)("li",{key:e,className:d()({[y.selectedItem]:s},y.listItem)},Object(u.b)(l.Link,{className:y.link,to:""+o},e))});return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},n))))))}}var f=O,j=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:s={},relativePagePath:r,titleType:b}=e,{tabs:d,title:p,theme:g,description:y,keywords:O}=s,{site:{pathPrefix:v}}=Object(l.useStaticQuery)("2456312558"),T=v?a.pathname.replace(v,""):a.pathname,w=d?T.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:g,pageTitle:p,pageDescription:y,pageKeywords:O,titleType:b},Object(u.b)(m,{title:n?Object(u.b)(n,null):p,label:"label",tabs:d}),d&&Object(u.b)(f,{slug:T,tabs:d,currentTab:w}),Object(u.b)(j.a,{padded:!0},t,Object(u.b)(h,{relativePagePath:r})),Object(u.b)(x.a,{pageContext:e,location:a,slug:T,tabs:d,currentTab:w}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BxKB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("3bBZ"),a("q1tI");var n=a("7ljp"),s=a("013z"),r=a("E8Q3");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const o={},c={_frontmatter:o},b=s.a;function d(e){let{components:t}=e,a=l(e,["components"]);return Object(n.b)(b,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Expressive type sets"),Object(n.b)("p",null,"Expressive type is reserved for use in editorial and digital marketing\nexperiences which may require more dynamic typographic hierarchies and more\nvariety in the Heading scale. The Expressive styles are curated to create a\nseries of clear user expectations while still allowing for a more dramatic,\ngraphic use of type."),Object(n.b)("p",null,"The Expressive styles below introduce the new IBM Design Language tokens. The\ndifference between the Productive and Expressive styles is mainly evident in the\nHeadings. Aside from the token names, which are specifically calibrated for\nproduct vs. editorial designers (e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"$label-01")," vs. ",Object(n.b)("inlineCode",{parentName:"p"},"$caption-01"),") — the\nsupporting and body styles have the same values in both the Productive and\nExpressive sets."),Object(n.b)(r.a,{breakpointControls:!1,typesets:"supportingStyle,body",mdxType:"TypesetStyle"}),Object(n.b)("h2",null,"Fluid type sets"),Object(n.b)("p",null,"Fluid type is applied to large headline and display type styles. We set up fixed\ntype scales at the breakpoints and are fluid in between. This helps us to\nmaintain the quality of typography. Display styles are reserved only for\ngraphic/visual elements. These should be used sparingly and thoughtfully within\na user journey. It is not suitable for complex messaging, does not need to\nappear on every page."),Object(n.b)(r.a,{breakpointControls:!0,typesets:"headings,paragraphsAndQuotes,display",mdxType:"TypesetStyle"}))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
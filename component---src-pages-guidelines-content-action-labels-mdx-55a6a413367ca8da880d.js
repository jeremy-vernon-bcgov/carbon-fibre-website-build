(window.webpackJsonp=window.webpackJsonp||[]).push([[2132],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),s=a.n(o),c=a("Wbzz"),l=a("Xrax"),i=a("a7k6"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a("qKvR");var p=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(u.pageHeader,{[u.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},e))))),x=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:o}=t||a,s=`${n}/edit/${o}${r}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("I8xM");class f extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=s()(e,{lower:!0,strict:!0}),r=n===a,o=new RegExp(a+"/?(#.*)?$"),l=t.replace(o,n);return Object(m.b)("li",{key:e,className:d()({[j.selectedItem]:r},j.listItem)},Object(m.b)(c.Link,{className:j.link,to:""+l},e))});return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},n))))))}}var v=f,T=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:o,titleType:b}=e,{tabs:d,title:u,theme:x,description:j,keywords:f}=r,{site:{pathPrefix:h}}=Object(c.useStaticQuery)("2456312558"),w=h?a.pathname.replace(h,""):a.pathname,y=d?w.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(m.b)(i.a,{tabs:d,homepage:!1,theme:x,pageTitle:u,pageDescription:j,pageKeywords:f,titleType:b},Object(m.b)(p,{title:n?Object(m.b)(n,null):u,label:"label",tabs:d}),d&&Object(m.b)(v,{slug:w,tabs:d,currentTab:y}),Object(m.b)(T.a,{padded:!0},t,Object(m.b)(g,{relativePagePath:o})),Object(m.b)(O.a,{pageContext:e,location:a,slug:w,tabs:d,currentTab:y}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},EZMH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z"),o=a("jnXu");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={},i=(b="PageDescription",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var b;const d={_frontmatter:l},u=r.a;function m(e){let{components:t}=e,a=c(e,["components"]);return Object(n.b)(u,s({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"Users rely on consistent labels for common actions to predict how to interact\nwith an interface. This list includes the common UI terms and recommended action\nlabels for use in IBM UI content and documentation.")),Object(n.b)(o.a,{mdxType:"GlossaryComponent"}))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
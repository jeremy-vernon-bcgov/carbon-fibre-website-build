(window.webpackJsonp=window.webpackJsonp||[]).push([[2055],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),r=a.n(l),c=a("Wbzz"),s=a("Xrax"),b=a("a7k6"),i=a("TSYQ"),m=a.n(i),d=a("QH2O"),u=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:m()(d.pageHeader,{[d.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},e))))),p=a("BAC9");var x=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:o,branch:l}=t||a,r=`${n}/edit/${l}${o}/src/pages${e}`;return n?Object(u.b)("div",{className:"bx--row "+p.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:p.link,href:r},"Edit this page on GitHub"))):null},y=a("FCXl"),h=a("I8xM");class O extends o.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),o=n===a,l=new RegExp(a+"/?(#.*)?$"),s=t.replace(l,n);return Object(u.b)("li",{key:e,className:m()({[h.selectedItem]:o},h.listItem)},Object(u.b)(c.Link,{className:h.link,to:""+s},e))});return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:h.list},n))))))}}var j=O,T=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:o={},relativePagePath:l,titleType:i}=e,{tabs:m,title:d,theme:p,description:h,keywords:O}=o,{site:{pathPrefix:f}}=Object(c.useStaticQuery)("2456312558"),v=f?a.pathname.replace(f,""):a.pathname,w=m?v.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:p,pageTitle:d,pageDescription:h,pageKeywords:O,titleType:i},Object(u.b)(g,{title:n?Object(u.b)(n,null):d,label:"label",tabs:m}),m&&Object(u.b)(j,{slug:v,tabs:m,currentTab:w}),Object(u.b)(T.a,{padded:!0},t,Object(u.b)(x,{relativePagePath:l})),Object(u.b)(y.a,{pageContext:e,location:a,slug:v,tabs:m,currentTab:w}),Object(u.b)(s.a,null))}},B7dt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));a("3bBZ"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const c={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},b=s("PageDescription"),i=s("Row"),m=s("Column"),d=s("ResourceCard"),u=s("MdxIcon"),g=s("ComponentDemo"),p=s("ComponentVariant"),x={_frontmatter:c},y=o.a;function h(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(y,l({},x,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Preview the toggle component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),Object(n.b)("h2",null,"Documentation"),Object(n.b)(i,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(d,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/toggle--default",mdxType:"ResourceCard"},Object(n.b)(u,{name:"react",mdxType:"MdxIcon"}))),Object(n.b)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(d,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-toggle--basic",mdxType:"ResourceCard"},Object(n.b)(u,{name:"angular",mdxType:"MdxIcon"}))),Object(n.b)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(d,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoggle--default",mdxType:"ResourceCard"},Object(n.b)(u,{name:"vue",mdxType:"MdxIcon"})))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(g,{components:[{id:"default-toggle",label:"Toggle"},{id:"small-toggle",label:"Toggle small"}],mdxType:"ComponentDemo"},Object(n.b)(p,{id:"default-toggle",links:{React:"https://react.carbondesignsystem.com/?path=/story/toggle--toggled",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-toggle--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoggle--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=toggle"},mdxType:"ComponentVariant"},'\n    <Toggle\n      aria-label="toggle button"\n      defaultToggled\n      id="toggle-1"\n      labelText="Label text"\n    />\n  '),Object(n.b)(p,{id:"small-toggle",links:{React:"https://react.carbondesignsystem.com/?path=/story/togglesmall--toggled",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-toggle--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoggle--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=toggle"},mdxType:"ComponentVariant"},'\n    <ToggleSmall\n      aria-label="toggle button"\n      defaultToggled\n      id="toggle-2"\n      labelText="Label text"\n    />\n  ')))}h.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
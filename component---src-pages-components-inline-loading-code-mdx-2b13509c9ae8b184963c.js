(window.webpackJsonp=window.webpackJsonp||[]).push([[1956],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),c=n.n(r),i=n("Wbzz"),l=n("Xrax"),s=n("a7k6"),b=n("TSYQ"),d=n.n(b),m=n("QH2O"),u=n("qKvR");var p=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:d()(m.pageHeader,{[m.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},e))))),g=n("BAC9");var x=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:o,branch:r}=t||n,c=`${a}/edit/${r}${o}/src/pages${e}`;return a?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=n("FCXl"),j=n("I8xM");class y extends o.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=c()(e,{lower:!0,strict:!0}),o=a===n,r=new RegExp(n+"/?(#.*)?$"),l=t.replace(r,a);return Object(u.b)("li",{key:e,className:d()({[j.selectedItem]:o},j.listItem)},Object(u.b)(i.Link,{className:j.link,to:""+l},e))});return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},a))))))}}var h=y,T=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:o={},relativePagePath:r,titleType:b}=e,{tabs:d,title:m,theme:g,description:j,keywords:y}=o,{site:{pathPrefix:f}}=Object(i.useStaticQuery)("2456312558"),v=f?n.pathname.replace(f,""):n.pathname,w=d?v.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:g,pageTitle:m,pageDescription:j,pageKeywords:y,titleType:b},Object(u.b)(p,{title:a?Object(u.b)(a,null):m,label:"label",tabs:d}),d&&Object(u.b)(h,{slug:v,tabs:d,currentTab:w}),Object(u.b)(T.a,{padded:!0},t,Object(u.b)(x,{relativePagePath:r})),Object(u.b)(O.a,{pageContext:e,location:n,slug:v,tabs:d,currentTab:w}),Object(u.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"ds9/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return j}));n("3bBZ"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},s=l("PageDescription"),b=l("Row"),d=l("Column"),m=l("ResourceCard"),u=l("MdxIcon"),p=l("ComponentDemo"),g=l("ComponentVariant"),x={_frontmatter:i},O=o.a;function j(e){let{components:t}=e,n=c(e,["components"]);return Object(a.b)(O,r({},x,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Preview the accordion component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),Object(a.b)("h2",null,"Documentation"),Object(a.b)(b,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(m,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/inlineloading--inline-loading",mdxType:"ResourceCard"},Object(a.b)(u,{name:"react",mdxType:"MdxIcon"}))),Object(a.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(m,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",mdxType:"ResourceCard"},Object(a.b)(u,{name:"angular",mdxType:"MdxIcon"}))),Object(a.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(m,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default",mdxType:"ResourceCard"},Object(a.b)(u,{name:"vue",mdxType:"MdxIcon"})))),Object(a.b)("h2",null,"Live demo"),Object(a.b)(p,{components:[{id:"inline-loading",label:"Inline loading"}],mdxType:"ComponentDemo"},Object(a.b)(g,{id:"inline-loading",knobs:{InlineLoading:["status"]},links:{React:"http://react.carbondesignsystem.com/?path=/story/inlineloading--inline-loading",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=inline-loading"},mdxType:"ComponentVariant"},'\n    <InlineLoading description="Loading..." />\n  ')))}j.isMDXComponent=!0}}]);
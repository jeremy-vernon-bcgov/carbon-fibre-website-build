(window.webpackJsonp=window.webpackJsonp||[]).push([[1938],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),c=a.n(o),b=a("Wbzz"),s=a("Xrax"),l=a("a7k6"),m=a("TSYQ"),i=a.n(m),d=a("QH2O"),u=a("qKvR");var p=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:i()(d.pageHeader,{[d.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},e))))),x=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(b.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:n,branch:o}=t||a,c=`${r}/edit/${o}${n}/src/pages${e}`;return r?Object(u.b)("div",{className:"bx--row "+x.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("I8xM");class j extends n.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],r=e.map(e=>{const r=c()(e,{lower:!0,strict:!0}),n=r===a,o=new RegExp(a+"/?(#.*)?$"),s=t.replace(o,r);return Object(u.b)("li",{key:e,className:i()({[h.selectedItem]:n},h.listItem)},Object(u.b)(b.Link,{className:h.link,to:""+s},e))});return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:h.list},r))))))}}var y=j,f=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:r})=>{const{frontmatter:n={},relativePagePath:o,titleType:m}=e,{tabs:i,title:d,theme:x,description:h,keywords:j}=n,{site:{pathPrefix:T}}=Object(b.useStaticQuery)("2456312558"),v=T?a.pathname.replace(T,""):a.pathname,w=i?v.split("/").filter(Boolean).slice(-1)[0]||c()(i[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:i,homepage:!1,theme:x,pageTitle:d,pageDescription:h,pageKeywords:j,titleType:m},Object(u.b)(p,{title:r?Object(u.b)(r,null):d,label:"label",tabs:i}),i&&Object(u.b)(y,{slug:v,tabs:i,currentTab:w}),Object(u.b)(f.a,{padded:!0},t,Object(u.b)(g,{relativePagePath:o})),Object(u.b)(O.a,{pageContext:e,location:a,slug:v,tabs:i,currentTab:w}),Object(u.b)(s.a,null))}},"7PYi":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return h}));a("3bBZ"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const b={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)},l=s("PageDescription"),m=s("Row"),i=s("Column"),d=s("ResourceCard"),u=s("MdxIcon"),p=s("ComponentDemo"),x=s("ComponentVariant"),g={_frontmatter:b},O=n.a;function h(e){let{components:t}=e,a=c(e,["components"]);return Object(r.b)(O,o({},g,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"Preview the breadcrumb component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),Object(r.b)("h2",null,"Documentation"),Object(r.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(r.b)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/breadcrumb--default",mdxType:"ResourceCard"},Object(r.b)(u,{name:"react",mdxType:"MdxIcon"}))),Object(r.b)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",mdxType:"ResourceCard"},Object(r.b)(u,{name:"angular",mdxType:"MdxIcon"}))),Object(r.b)(i,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default",mdxType:"ResourceCard"},Object(r.b)(u,{name:"vue",mdxType:"MdxIcon"})))),Object(r.b)("h2",null,"Live demo"),Object(r.b)(p,{components:[{id:"breadcrumb",label:"Breadcrumb"}],mdxType:"ComponentDemo"},Object(r.b)(x,{id:"breadcrumb",knobs:{Breadcrumb:["noTrailingSlash"]},links:{React:"http://react.carbondesignsystem.com/?path=/story/breadcrumb--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=breadcrumb"},mdxType:"ComponentVariant"},'\n<Breadcrumb>\n  <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>\n  <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>\n  <BreadcrumbItem isCurrentPage href="/">Breadcrumb 3</BreadcrumbItem>\n</Breadcrumb>\n')))}h.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1931],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),s=n("NmYn"),r=n.n(s),c=n("Wbzz"),b=n("Xrax"),l=n("a7k6"),o=n("TSYQ"),u=n.n(o),d=n("QH2O"),p=n("qKvR");var m=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:u()(d.pageHeader,{[d.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},e))))),h=n("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:i,branch:s}=t||n,r=`${a}/edit/${s}${i}/src/pages${e}`;return a?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},j=n("FCXl"),x=n("I8xM");class g extends i.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=r()(e,{lower:!0,strict:!0}),i=a===n,s=new RegExp(n+"/?(#.*)?$"),b=t.replace(s,a);return Object(p.b)("li",{key:e,className:u()({[x.selectedItem]:i},x.listItem)},Object(p.b)(c.Link,{className:x.link,to:""+b},e))});return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:x.list},a))))))}}var w=g,y=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:i={},relativePagePath:s,titleType:o}=e,{tabs:u,title:d,theme:h,description:x,keywords:g}=i,{site:{pathPrefix:f}}=Object(c.useStaticQuery)("2456312558"),v=f?n.pathname.replace(f,""):n.pathname,T=u?v.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:h,pageTitle:d,pageDescription:x,pageKeywords:g,titleType:o},Object(p.b)(m,{title:a?Object(p.b)(a,null):d,label:"label",tabs:u}),u&&Object(p.b)(w,{slug:v,tabs:u,currentTab:T}),Object(p.b)(y.a,{padded:!0},t,Object(p.b)(O,{relativePagePath:s})),Object(p.b)(j.a,{pageContext:e,location:n,slug:v,tabs:u,currentTab:T}),Object(p.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},aFzA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return j}));n("3bBZ"),n("q1tI");var a=n("7ljp"),i=n("013z"),s=n("CpY+");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const b={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},o=l("PageDescription"),u=l("AnchorLinks"),d=l("AnchorLink"),p=l("Row"),m=l("Column"),h={_frontmatter:b},O=i.a;function j(e){let{components:t}=e,n=c(e,["components"]);return Object(a.b)(O,r({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o,{mdxType:"PageDescription"},Object(a.b)("p",null,"The content switcher React Carbon component has been tested against the latest\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/"}),"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),Object(a.b)(u,{mdxType:"AnchorLinks"},Object(a.b)(d,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(a.b)(d,{mdxType:"AnchorLink"},"Resources"),Object(a.b)(d,{mdxType:"AnchorLink"},"Accessibility testing")),Object(a.b)("h2",null,"Accessibility considerations"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Each content switcher tab must have a unique title that clearly describes the\ncontent panel. This is particularly helpful for users of assistive\ntechnologies so they have the necessary information to efficiently navigate\nthe content."),Object(a.b)("li",{parentName:"ol"},"Carbon components should be used to create the content that displays within\neach content panel."),Object(a.b)("li",{parentName:"ol"},"Content authors need to ensure the content that is added to the tab panel is\naccessible. For example, if you add an image to the panel you need to include\nalternative text to pass accessibility testing.")),Object(a.b)("h2",null,"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"}),"W3C WAI-ARIA Tab Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint"),":"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",Object(a.b)("a",r({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}),"1.3.1"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/meaningful_sequence.html"}),"1.3.2 Meaningful Sequence"),"\n(WCAG Success Criteria\n",Object(a.b)("a",r({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"}),"1.3.2"),")")))),Object(a.b)("h2",null,"Accessibility testing"),Object(a.b)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the Content Switcher React Carbon Component.\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/"}),"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),Object(a.b)("h3",null,"Automated test"),Object(a.b)(p,{mdxType:"Row"},Object(a.b)(m,{noGutterSm:!0,mdxType:"Column"},Object(a.b)(s.f,{mdxType:"StructuredListWrapper"},Object(a.b)(s.c,{mdxType:"StructuredListHead"},Object(a.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(a.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(a.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(a.b)(s.a,{mdxType:"StructuredListBody"},Object(a.b)(s.e,{mdxType:"StructuredListRow"},Object(a.b)(s.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",Object(a.b)("br",null),"- Chrome version 77.0.3865.90",Object(a.b)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(a.b)("br",null),"- Carbon React version 7.7.1"),Object(a.b)(s.b,{mdxType:"StructuredListCell"},Object(a.b)("strong",null,"DAP test:"),Object(a.b)("br",null),"- Violations")))))))}j.isMDXComponent=!0}}]);
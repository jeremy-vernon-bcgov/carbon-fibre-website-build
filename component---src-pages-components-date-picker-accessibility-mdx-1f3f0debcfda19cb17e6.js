(window.webpackJsonp=window.webpackJsonp||[]).push([[1939],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),s=a.n(r),b=a("Wbzz"),c=a("Xrax"),l=a("a7k6"),o=a("TSYQ"),d=a.n(o),u=a("QH2O"),m=a("qKvR");var p=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(u.pageHeader,{[u.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},e))))),h=a("BAC9");var w=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(b.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:i,branch:r}=t||a,s=`${n}/edit/${r}${i}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("I8xM");class g extends i.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=s()(e,{lower:!0,strict:!0}),i=n===a,r=new RegExp(a+"/?(#.*)?$"),c=t.replace(r,n);return Object(m.b)("li",{key:e,className:d()({[j.selectedItem]:i},j.listItem)},Object(m.b)(b.Link,{className:j.link,to:""+c},e))});return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},n))))))}}var x=g,f=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:i={},relativePagePath:r,titleType:o}=e,{tabs:d,title:u,theme:h,description:j,keywords:g}=i,{site:{pathPrefix:A}}=Object(b.useStaticQuery)("2456312558"),y=A?a.pathname.replace(A,""):a.pathname,C=d?y.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:d,homepage:!1,theme:h,pageTitle:u,pageDescription:j,pageKeywords:g,titleType:o},Object(m.b)(p,{title:n?Object(m.b)(n,null):u,label:"label",tabs:d}),d&&Object(m.b)(x,{slug:y,tabs:d,currentTab:C}),Object(m.b)(f.a,{padded:!0},t,Object(m.b)(w,{relativePagePath:r})),Object(m.b)(O.a,{pageContext:e,location:a,slug:y,tabs:d,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Xidj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return O}));a("3bBZ"),a("q1tI");var n=a("7ljp"),i=a("013z"),r=a("CpY+");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const c={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},o=l("PageDescription"),d=l("AnchorLinks"),u=l("AnchorLink"),m=l("Row"),p=l("Column"),h={_frontmatter:c},w=i.a;function O(e){let{components:t}=e,a=b(e,["components"]);return Object(n.b)(w,s({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"PageDescription"},Object(n.b)("p",null,"The date picker React Carbon component has been tested against the latest\n",Object(n.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/"}),"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),Object(n.b)(d,{mdxType:"AnchorLinks"},Object(n.b)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(n.b)(u,{mdxType:"AnchorLink"},"Resources"),Object(n.b)(u,{mdxType:"AnchorLink"},"Accessibility testing")),Object(n.b)("h2",null,"Accessibility considerations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The date picker labels should clearly describe the dates that the user needs\nto input, such as arrival date or departure date when making travel\narrangements.")),Object(n.b)("h2",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html"}),"W3C WAI-ARIA Authoring Practices Date Picker Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard intractions."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}),"1.3.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/meaningful_sequence.html"}),"1.3.2 Meaningful Sequence"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"}),"1.3.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/keyboard.html"}),"2.1.1 Keyboard"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"}),"2.1.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/no_keyboard_trap.html"}),"2.1.2 No Keyboard Trap"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap"}),"2.1.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/focus_order.html"}),"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"}),"2.4.3"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/headings_and_labels.html"}),"2.4.6 Headings and Labels"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"}),"2.4.6"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/focus_visible.html"}),"2.4.7 Focus Visible"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"}),"2.4.7"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/name_role_value.html"}),"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"}),"4.1.2"),")")))),Object(n.b)("h2",null,"Accessibility testing"),Object(n.b)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the date picker React Carbon component.\n",Object(n.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/"}),"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),Object(n.b)("h3",null,"Automated test"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.c,{mdxType:"StructuredListHead"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"DAP test:"),Object(n.b)("br",null),"- No violations")))))))}O.isMDXComponent=!0}}]);
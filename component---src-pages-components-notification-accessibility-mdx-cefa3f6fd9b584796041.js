(window.webpackJsonp=window.webpackJsonp||[]).push([[1997],{"013z":function(e,t,i){"use strict";var n=i("q1tI"),r=i.n(n),a=i("NmYn"),b=i.n(a),c=i("Wbzz"),o=i("Xrax"),s=i("a7k6"),l=i("TSYQ"),u=i.n(l),d=i("QH2O"),m=i("qKvR");var p=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:u()(d.pageHeader,{[d.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},e))))),O=i("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:i}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:a}=t||i,b=`${n}/edit/${a}${r}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},h=i("FCXl"),y=i("I8xM");class x extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=b()(e,{lower:!0,strict:!0}),r=n===i,a=new RegExp(i+"/?(#.*)?$"),o=t.replace(a,n);return Object(m.b)("li",{key:e,className:u()({[y.selectedItem]:r},y.listItem)},Object(m.b)(c.Link,{className:y.link,to:""+o},e))});return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},n))))))}}var T=x,w=i("MjG9");t.a=({pageContext:e,children:t,location:i,Title:n})=>{const{frontmatter:r={},relativePagePath:a,titleType:l}=e,{tabs:u,title:d,theme:O,description:y,keywords:x}=r,{site:{pathPrefix:f}}=Object(c.useStaticQuery)("2456312558"),g=f?i.pathname.replace(f,""):i.pathname,v=u?g.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:O,pageTitle:d,pageDescription:y,pageKeywords:x,titleType:l},Object(m.b)(p,{title:n?Object(m.b)(n,null):d,label:"label",tabs:u}),u&&Object(m.b)(T,{slug:g,tabs:u,currentTab:v}),Object(m.b)(w.a,{padded:!0},t,Object(m.b)(j,{relativePagePath:a})),Object(m.b)(h.a,{pageContext:e,location:i,slug:g,tabs:u,currentTab:v}),Object(m.b)(o.a,null))}},BAC9:function(e,t,i){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FQpV:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return l})),i.d(t,"default",(function(){return y}));i("3bBZ"),i("q1tI");var n=i("7ljp"),r=i("013z"),a=i("CpY+"),b=i("5sAZ"),c=i("EQQr");i("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const l={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},d=u("AnchorLinks"),m=u("AnchorLink"),p=u("Row"),O=u("Column"),j={_frontmatter:l},h=r.a;function y(e){let{components:t}=e,i=s(e,["components"]);return Object(n.b)(h,o({},j,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)(d,{mdxType:"AnchorLinks"},Object(n.b)(m,{mdxType:"AnchorLink"},"How it works"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(n.b)(m,{mdxType:"AnchorLink"},"Resources"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility testing")),Object(n.b)("h2",null,"How it works"),Object(n.b)("p",null,"Notification Carbon components are messages that communicate information to a\nuser. The WAI-ARIA ",Object(n.b)("inlineCode",{parentName:"p"},'role="alert"')," is equivalent to ",Object(n.b)("inlineCode",{parentName:"p"},'aria-live="assertive"'),". It\nis used to display a message to the user in a way that attracts the user’s\nattention without receiving focus to communicate the message without\ninterrupting the users current task. If the notification does not contain an\nurgent message, consider changing it to ",Object(n.b)("inlineCode",{parentName:"p"},'aria-live="polite"')," so the notification\nis queued until whatever task the user is currently working on is complete."),Object(n.b)("p",null,"The close button contains an ARIA label of ",Object(n.b)("inlineCode",{parentName:"p"},'aria-label="close"'),", and the icon\nhas ",Object(n.b)("inlineCode",{parentName:"p"},'aria-hidden="true"')," so it is ignored by assistive technologies. The ",Object(n.b)("inlineCode",{parentName:"p"},"Tab"),"\nkey is used to move focus to the close button within the notification and the\n",Object(n.b)("inlineCode",{parentName:"p"},"Space")," key or ",Object(n.b)("inlineCode",{parentName:"p"},"Enter")," key activate the button to close the notification."),Object(n.b)("h2",null,"Accessibility considerations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Avoid using a toast notification for critical alerts or long messages because\nthey are timed and will disappear automatically making it difficult for\npeople with various disabilities to get the entire message. An alert that\ndisappears too quickly can lead to failure of the optional\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html"}),"WCAG 2.0 success criterion 2.2.3 (AAA)"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide a means to turn off nonessential alerts to enhance usability for\npeople with visual and cognitive disabilities. Additional information is\navailable in\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html"}),"WCAG 2.0 success criterion 2.2.4 (AAA)"),".\nNote: Providing this functionality is optional.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Ensure the use of color and hidden icons are not used as the only means of\nconveying the importance of the notification."))),Object(n.b)("h2",null,"Resources"),Object(n.b)("h4",null,"Helpful resources for creating customized accessible implementations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#alert"}),"W3C W3C WAI-ARIA Authoring Practices Alert Design Pattern"),"\ncovers the usage of ARIA names, state and roles."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/WAI/tutorials/forms/notifications/"}),"W3C W3C Web Accessibility Tutorial - User Notifications"),"\nprovides a tutorial on notification accessibility."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/error_id.html"}),"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"}),"3.3.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/labels_or_instructions.html"}),"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"}),"3.3.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/error_suggestion.html"}),"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"}),"3.3.3"),")")))),Object(n.b)("h2",null,"Accessibility testing"),Object(n.b)("p",null,"Accessibility issues are tracked in the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(n.b)("h3",null,"Automated test"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(a.f,{mdxType:"StructuredListWrapper"},Object(n.b)(a.c,{mdxType:"StructuredListHead"},Object(n.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(a.a,{mdxType:"StructuredListBody"},Object(n.b)(a.e,{mdxType:"StructuredListRow"},Object(n.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(a.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"DAP Test"),Object(n.b)("br",null),"- Violations")))))),Object(n.b)("h3",null,"macOS screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(a.f,{mdxType:"StructuredListWrapper"},Object(n.b)(a.c,{mdxType:"StructuredListHead"},Object(n.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(a.a,{mdxType:"StructuredListBody"},Object(n.b)(a.e,{mdxType:"StructuredListRow"},Object(n.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(a.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Press Control-Option-Shift keys to enter the Web content."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Tab key. VO announces the notification text and the close button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))),Object(n.b)(a.e,{mdxType:"StructuredListRow"},Object(n.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.0.2",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(a.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Press Control-Option-Shift keys to enter the Web content."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Tab key. VO announces the notification text and the close button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))))))),Object(n.b)("h3",null,"Windows screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(a.f,{mdxType:"StructuredListWrapper"},Object(n.b)(a.c,{mdxType:"StructuredListHead"},Object(n.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(a.a,{mdxType:"StructuredListBody"},Object(n.b)(a.e,{mdxType:"StructuredListRow"},Object(n.b)(a.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Firefox version 68",Object(n.b)("br",null),"- JAWS version 18",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(a.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Press H, JAWS announce the notification title."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press Alt-Down Arrow, JAWS announces each line of the notification text."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Tab, JAWS announces the close button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))))))),Object(n.b)("h3",null,"iOS screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(a.f,{mdxType:"StructuredListWrapper"},Object(n.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(n.b)(a.a,{mdxType:"StructuredListBody"},Object(n.b)(a.e,{mdxType:"StructuredListRow"},Object(n.b)(a.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.1.3",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(a.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe right to the notification and to read the notification text."),Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe right to the X icon. VO announces the close button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Double tap to close the notification.")))))))))}y.isMDXComponent=!0},I8xM:function(e,t,i){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,i){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
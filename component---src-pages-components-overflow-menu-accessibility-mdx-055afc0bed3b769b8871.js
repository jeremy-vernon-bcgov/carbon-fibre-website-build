(window.webpackJsonp=window.webpackJsonp||[]).push([[1983],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),b=n.n(a),r=n("NmYn"),i=n.n(r),s=n("Wbzz"),c=n("Xrax"),o=n("a7k6"),l=n("TSYQ"),u=n.n(l),d=n("QH2O"),p=n("qKvR");var m=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:u()(d.pageHeader,{[d.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},e))))),h=n("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:b,branch:r}=t||n,i=`${a}/edit/${r}${b}/src/pages${e}`;return a?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},j=n("FCXl"),w=n("I8xM");class y extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=i()(e,{lower:!0,strict:!0}),b=a===n,r=new RegExp(n+"/?(#.*)?$"),c=t.replace(r,a);return Object(p.b)("li",{key:e,className:u()({[w.selectedItem]:b},w.listItem)},Object(p.b)(s.Link,{className:w.link,to:""+c},e))});return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:w.list},a))))))}}var x=y,T=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:b={},relativePagePath:r,titleType:l}=e,{tabs:u,title:d,theme:h,description:w,keywords:y}=b,{site:{pathPrefix:g}}=Object(s.useStaticQuery)("2456312558"),f=g?n.pathname.replace(g,""):n.pathname,v=u?f.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"";return Object(p.b)(o.a,{tabs:u,homepage:!1,theme:h,pageTitle:d,pageDescription:w,pageKeywords:y,titleType:l},Object(p.b)(m,{title:a?Object(p.b)(a,null):d,label:"label",tabs:u}),u&&Object(p.b)(x,{slug:f,tabs:u,currentTab:v}),Object(p.b)(T.a,{padded:!0},t,Object(p.b)(O,{relativePagePath:r})),Object(p.b)(j.a,{pageContext:e,location:n,slug:f,tabs:u,currentTab:v}),Object(p.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BFKY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return w}));n("3bBZ"),n("q1tI");var a=n("7ljp"),b=n("013z"),r=n("CpY+"),i=n("5sAZ"),s=n("EQQr");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}const l={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},d=u("AnchorLinks"),p=u("AnchorLink"),m=u("Row"),h=u("Column"),O={_frontmatter:l},j=b.a;function w(e){let{components:t}=e,n=o(e,["components"]);return Object(a.b)(j,c({},O,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(d,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"How it works"),Object(a.b)(p,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(a.b)(p,{mdxType:"AnchorLink"},"Resources"),Object(a.b)(p,{mdxType:"AnchorLink"},"Accessibility testing")),Object(a.b)("h2",null,"How it works"),Object(a.b)("p",null,"The Carbon overflow menu component is used when there is limited space to\nprovide a pop-up list of actions that are available to the user. The overflow\nmenu button uses ",Object(a.b)("inlineCode",{parentName:"p"},'tabindex="0"')," to ensure it is in the tab order for keyboard\nonly users."),Object(a.b)("p",null,"When the button has focus, Space key as well as the Enter key activates the\npop-up menu. WAI-ARIA roles and states are used to ensure the component is\naccessible to people using assistive technologies. The pop-up menu has the ARIA\nrole of ",Object(a.b)("inlineCode",{parentName:"p"},'role="menu"'),", a label of ",Object(a.b)("inlineCode",{parentName:"p"},'aria-label="Menu"')," and includes\n",Object(a.b)("inlineCode",{parentName:"p"},'aria-haspopup="true"')," to let the user know it is a pop-up menu."),Object(a.b)("p",null,"When the menu button is collapsed the pop-up menu is hidden so the ARIA state is\nset to ",Object(a.b)("inlineCode",{parentName:"p"},'aria-expanded="false"')," to advise users of assistive technologies that\nthe pop-up menu is not visible. When the pop-up menu is expanded the ARIA state\nchanges to ",Object(a.b)("inlineCode",{parentName:"p"},'aria-expanded="true"')," and the menu is displayed."),Object(a.b)("p",null,"Each menu option contains an ARIA role of ",Object(a.b)("inlineCode",{parentName:"p"},'role="menuitem"')," and unique ARIA\nlabels for each option. When focus is on each option there is a prominent style\nchange to the border to ensure the focus is clearly displayed."),Object(a.b)("h2",null,"Accessibility considerations"),Object(a.b)("p",null,"This component has been validated to meet the\n",Object(a.b)("a",c({parentName:"p"},{href:"https://www.w3.org/TR/WCAG21/"}),"WCAG 2.1 AA")," and\n",Object(a.b)("a",c({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Labels should be clear and concise."),Object(a.b)("li",{parentName:"ol"},"If a colored button is used in the menu, be sure color is not the only way\nthe information is conveyed."),Object(a.b)("li",{parentName:"ol"},"If a menu item is disabled it should not be in the tab order.")),Object(a.b)("h2",null,"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton"}),"W3C WAI-ARIA Authoring Practices Dialog Menu Button Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}),"1.3.1"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/meaningful_sequence.html"}),"1.3.2 Meaningful Sequence"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"}),"1.3.2"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/keyboard.html"}),"2.1.1 Keyboard"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"}),"2.1.1"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/focus_order.html"}),"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"}),"2.4.3"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/headings_and_labels.html"}),"2.4.6 Headings and Labels"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"}),"2.4.6"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/focus_visible.html"}),"2.4.7 Focus Visible"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"}),"2.4.7"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/name_role_value.html"}),"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",Object(a.b)("a",c({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"}),"4.1.2"),")")))),Object(a.b)("h2",null,"Accessibility testing"),Object(a.b)("p",null,"Accessibility issues are tracked in the\n",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(a.b)("h3",null,"Automated test"),Object(a.b)(m,{mdxType:"Row"},Object(a.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(a.b)(r.f,{mdxType:"StructuredListWrapper"},Object(a.b)(r.c,{mdxType:"StructuredListHead"},Object(a.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(a.b)(r.a,{mdxType:"StructuredListBody"},Object(a.b)(r.e,{mdxType:"StructuredListRow"},Object(a.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(a.b)("br",null),"- Chrome version 77.0.3865.90",Object(a.b)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(a.b)("br",null),"- Carbon React version 7.7.1"),Object(a.b)(r.b,{mdxType:"StructuredListCell"},Object(a.b)("strong",null,"DAP test:"),Object(a.b)("br",null),"- No violations")))))),Object(a.b)("h3",null,"macOS screen reader tests"),Object(a.b)(m,{mdxType:"Row"},Object(a.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(a.b)(r.f,{mdxType:"StructuredListWrapper"},Object(a.b)(r.c,{mdxType:"StructuredListHead"},Object(a.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(a.b)(r.a,{mdxType:"StructuredListBody"},Object(a.b)(r.e,{mdxType:"StructuredListRow"},Object(a.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(a.b)("br",null),"- Chrome version 77.0.3865.90",Object(a.b)("br",null),"- Carbon React version 7.7.1"),Object(a.b)(r.b,{mdxType:"StructuredListCell"},Object(a.b)("strong",null,"VoiceOver(VO) test:"),Object(a.b)(i.a,{mdxType:"OrderedList"},Object(a.b)(s.a,{mdxType:"ListItem"},"Tab to the Overflow Menu. VO announces the menu label and pop-up button."),Object(a.b)(s.a,{mdxType:"ListItem"},"The Enter or Space key opens the menu. VO announces the menu item label the number and the total number of options."),Object(a.b)(s.a,{mdxType:"ListItem"},"The Up and Down Arrow keys navigate through the list of options and VO announces each menu item label."),Object(a.b)(s.a,{mdxType:"ListItem"},"The Escape key closes the menu. (Note: Space and Enter key also close the menu.)")))))))),Object(a.b)("h3",null,"Windows screen reader tests"),Object(a.b)(m,{mdxType:"Row"},Object(a.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(a.b)(r.f,{mdxType:"StructuredListWrapper"},Object(a.b)(r.c,{mdxType:"StructuredListHead"},Object(a.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(a.b)(r.a,{mdxType:"StructuredListBody"},Object(a.b)(r.e,{mdxType:"StructuredListRow"},Object(a.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(a.b)("br",null),"- Firefox version 68",Object(a.b)("br",null),"- JAWS 18",Object(a.b)("br",null),"- Carbon React version 7.7.1"),Object(a.b)(r.b,{mdxType:"StructuredListCell"},Object(a.b)("strong",null,"JAWS test:"),Object(a.b)(i.a,{mdxType:"OrderedList"},Object(a.b)(s.a,{mdxType:"ListItem"},"Tab to the Overflow Menu. JAWS announces the menu label and pop-up button, as well as press Space to expand."),Object(a.b)(s.a,{mdxType:"ListItem"},"The Space key opens the menu briefly and then it disappears. The Enter key opens the menu and JAWS announces the menu item label"),Object(a.b)(s.a,{mdxType:"ListItem"},"The Up and Down Arrow keys navigate through the list of options and JAWS announces each menu item label."),Object(a.b)(s.a,{mdxType:"ListItem"},"The Escape key closes the menu. (Note: Space and Enter key also close the menu.)")))))))),Object(a.b)("h3",null,"iOS screen reader tests"),Object(a.b)(m,{mdxType:"Row"},Object(a.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(a.b)(r.f,{mdxType:"StructuredListWrapper"},Object(a.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(a.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(a.b)(r.a,{mdxType:"StructuredListBody"},Object(a.b)(r.e,{mdxType:"StructuredListRow"},Object(a.b)(r.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(a.b)("br",null),"- Safari version 13.1.3",Object(a.b)("br",null),"- Carbon React version 7.7.1"),Object(a.b)(r.b,{mdxType:"StructuredListCell"},Object(a.b)("strong",null,"VoiceOver test:"),Object(a.b)(i.a,{mdxType:"OrderedList"},Object(a.b)(s.a,{mdxType:"ListItem"},"Swipe right to the Overflow Menu. VO announces the main landmark, menu label, and that the pop-up button is collapsed."),Object(a.b)(s.a,{mdxType:"ListItem"},"Double tap to open the menu. VO announces the menu item label."),Object(a.b)(s.a,{mdxType:"ListItem"},"Swipe right or left to navigate through the list of options and VO announces each menu item label."),Object(a.b)(s.a,{mdxType:"ListItem"},"Double tap closes the menu. (Note: Space and Enter key also close the menu.)")))))))))}w.isMDXComponent=!0},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
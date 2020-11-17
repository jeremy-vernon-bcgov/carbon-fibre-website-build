(window.webpackJsonp=window.webpackJsonp||[]).push([[1993],{"/iF0":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return y}));o("3bBZ"),o("q1tI");var n=o("7ljp"),a=o("013z"),r=o("CpY+"),b=o("5sAZ"),c=o("EQQr");o("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},u=d("AnchorLinks"),m=d("AnchorLink"),p=d("Row"),h=d("Column"),O={_frontmatter:l},j=a.a;function y(e){let{components:t}=e,o=i(e,["components"]);return Object(n.b)(j,s({},O,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)(u,{mdxType:"AnchorLinks"},Object(n.b)(m,{mdxType:"AnchorLink"},"How it works"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(n.b)(m,{mdxType:"AnchorLink"},"Resources"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility testing")),Object(n.b)("h2",null,"How it works"),Object(n.b)("p",null,"The modal Carbon component is a secondary window that displays over the primary\nwindow to allow the user to maintain the context of a particular task. When the\nmodal is displayed the primary window is inert, so users cannot interact with\ncontent outside an active modal."),Object(n.b)("p",null,"The modal dialog contains the tab sequence so that ",Object(n.b)("inlineCode",{parentName:"p"},"Tab")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Shift-Tab")," keys do\nnot move the focus outside of the modal. To support screen reader users each\nmodal component includes a WAI ARIA ",Object(n.b)("inlineCode",{parentName:"p"},'role="dialog"')," and ",Object(n.b)("inlineCode",{parentName:"p"},'aria-modal="true"')," so\nassistive technologies understand that the windows underneath the current dialog\nare not available for interaction (inert). Focus, accessible descriptions, and\nlabels are set based on the content of each modal. Modals that contain static\ntext have the ",Object(n.b)("inlineCode",{parentName:"p"},"aria-describeby")," property set on the element with the ARIA\n",Object(n.b)("inlineCode",{parentName:"p"},'role="dialog"')," to indicate which element or elements in the dialog contain\ncontent describes the primary purpose or message of the dialog. A value is also\nset for the ",Object(n.b)("inlineCode",{parentName:"p"},"aria-labelledby")," property that refers to a visible dialog title."),Object(n.b)("h2",null,"Accessibility considerations"),Object(n.b)("p",null,"This component has been validated to meet the\n",Object(n.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(n.b)("a",s({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"After the modal opens, initial focus should be set on the first focusable\nelement in the modal. See WAI-ARIA Authoring Practices\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"}),"Modal Dialog Example, Accessibility Features section"),"\nfor best practices on setting focus."),Object(n.b)("li",{parentName:"ol"},"After a modal closes, focus should retain the user’s point of regard and\nreturn to the element that invoked the modal."),Object(n.b)("li",{parentName:"ol"},"Focus must not move outside the modal until it is closed."),Object(n.b)("li",{parentName:"ol"},"It is strongly recommended that the tab sequence of all modal dialogs include\na visible element with button role that closes the dialog, such as a close\nicon or cancel button."),Object(n.b)("li",{parentName:"ol"},"Use the Alert modal dialog for special case that interrupts user’s workflow\nto communicate a brief, important message and require a user’s response,")),Object(n.b)("h2",null,"Resources"),Object(n.b)("h4",null,"Helpful resources for creating customized accessible implementations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"}),"W3C WAI-ARIA Authoring Practices Dialog Modal Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard intractions."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/no_keyboard_trap.html"}),"1.4.13 Content on Hover or Focus"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"}),"1.4.13"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/no_keyboard_trap.html"}),"2.1.2 No Keyboard Traps"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html"}),"2.1.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/link_purpose.html"}),"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",Object(n.b)("a",s({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"}),"2.4.3"),")")))),Object(n.b)("h2",null,"Accessibility testing"),Object(n.b)("p",null,"Accessibility issues are tracked in the\n",Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(n.b)("h3",null,"Automated test"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.c,{mdxType:"StructuredListHead"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"DAP test"),Object(n.b)("br",null),"- No violations")))))),Object(n.b)("h3",null,"macOS Screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.c,{mdxType:"StructuredListHead"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Tab to Launch modal button. VO announces the button label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Enter or Space key to launch the modal. VO announces the button label, headings, and text."),Object(n.b)(c.a,{mdxType:"ListItem"},"Tab or Shift-Tab navigate through the modal buttons and announces each label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Control-Option-Right Arrow or Left Arrow to navigate through the modal message."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select the Esc key, Close button or Cancel button to close the modal and return focus to the Launch modal button in the primary window.")))),Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.0.2",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Tab to Launch modal button. VO announces the button label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Enter or Space key to launch the modal. VO announces the Button label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Tab or Shift-Tab navigate through the modal buttons and announces each label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Control-Option-Right Arrow or Left Arrow to navigate through the modal message."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select the Esc key, Close button or Cancel button to close the modal and return focus to the Launch modal button in the primary window.")))))))),Object(n.b)("h3",null,"Windows screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.c,{mdxType:"StructuredListHead"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Firefox version 67",Object(n.b)("br",null),"- JAWS version 19.1810.64",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Tab to Launch modal button. JAWS announces the button label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Enter or Space key to launch the modal."),Object(n.b)(c.a,{mdxType:"ListItem"},"Tab or Shift-Tab to navigate through the modal buttons and announces each label. Focus does not move out of the modal when tabbing."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Control-Option-Right Arrow or Left Arrow to navigate through the modal message."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press Close button or Cancel button to close the modal and return focus to the Launch modal button in the primary window.")))),Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Chrome version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- JAWS version 19.1810.64",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Tab to Launch modal button. JAWS announces the button label."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Enter or Space key to launch the modal."),Object(n.b)(c.a,{mdxType:"ListItem"},"Tab or Shift-Tab to navigate through the modal buttons and announces each label. Focus does not move out of the modal when tabbing."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Control-Option-Right Arrow or Left Arrow to navigate through the modal message."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press Close button or Cancel button to close the modal and return focus to the Launch modal button in the primary window.")))),Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Chrome version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- NVDA Version 2018.4.1",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"NVDA test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Tab to Launch modal button. NVDA announces the button label"),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Enter or Space key to launch the modal. NVDA announces the text and buttons automatically."),Object(n.b)(c.a,{mdxType:"ListItem"},"Tab or Shift-Tab to navigate through the modal buttons and announces each label. Focus does not move out of the modal when tabbing."),Object(n.b)(c.a,{mdxType:"ListItem"},"Select Control-Option-Right Arrow or Left Arrow to navigate through the modal message."),Object(n.b)(c.a,{mdxType:"ListItem"},"Press Close button or Cancel button to close the modal and return focus to the Launch modal button in the primary window.")))))))),Object(n.b)("h3",null,"Android screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",Object(n.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"Talkback test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe left or right, or use the Alt+Arrow keys in quick nav mode until you find the Launch modal button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Double tap the button or press the Alt-Enter keys to launch the modal. The close modal button is announces and has focus."),Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe Left or Right to explore the modal. VO announces the text, and focus on the Cancel and Save buttons."),Object(n.b)(c.a,{mdxType:"ListItem"},"Note: that navigation is not restricted to the modal only, after the modal is open there is no way to know if there is an open modal present, the user needs to remember it. Doubletap or press Alt+Enter on the Close or Cancel buttons to close the modal.")))))))),Object(n.b)("h3",null,"iOS screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(r.f,{mdxType:"StructuredListWrapper"},Object(n.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(n.b)(r.a,{mdxType:"StructuredListBody"},Object(n.b)(r.e,{mdxType:"StructuredListRow"},Object(n.b)(r.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.1.3",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(r.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe left or right, or use the Arrow keys in quick nav mode until you find the Launch modal button."),Object(n.b)(c.a,{mdxType:"ListItem"},"Double tap the button to launch the modal. The close modal button is announces and has focus."),Object(n.b)(c.a,{mdxType:"ListItem"},"Swipe Left or Right to explore the modal. VO announces the text, and focus on the Cancel and Save buttons."),Object(n.b)(c.a,{mdxType:"ListItem"},"After Double tapping on the close or cancel button, the modal closes but focus is stuck on the selected button. Touch the screen anywhere to move out of the focus trap.")))))))))}y.isMDXComponent=!0},"013z":function(e,t,o){"use strict";var n=o("q1tI"),a=o.n(n),r=o("NmYn"),b=o.n(r),c=o("Wbzz"),s=o("Xrax"),i=o("a7k6"),l=o("TSYQ"),d=o.n(l),u=o("QH2O"),m=o("qKvR");var p=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(u.pageHeader,{[u.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},e))))),h=o("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:o}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:a,branch:r}=t||o,b=`${n}/edit/${r}${a}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=o("FCXl"),y=o("I8xM");class x extends a.a.Component{render(){const{tabs:e,slug:t}=this.props,o=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=b()(e,{lower:!0,strict:!0}),a=n===o,r=new RegExp(o+"/?(#.*)?$"),s=t.replace(r,n);return Object(m.b)("li",{key:e,className:d()({[y.selectedItem]:a},y.listItem)},Object(m.b)(c.Link,{className:y.link,to:""+s},e))});return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},n))))))}}var T=x,w=o("MjG9");t.a=({pageContext:e,children:t,location:o,Title:n})=>{const{frontmatter:a={},relativePagePath:r,titleType:l}=e,{tabs:d,title:u,theme:h,description:y,keywords:x}=a,{site:{pathPrefix:g}}=Object(c.useStaticQuery)("2456312558"),f=g?o.pathname.replace(g,""):o.pathname,L=d?f.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"";return Object(m.b)(i.a,{tabs:d,homepage:!1,theme:h,pageTitle:u,pageDescription:y,pageKeywords:x,titleType:l},Object(m.b)(p,{title:n?Object(m.b)(n,null):u,label:"label",tabs:d}),d&&Object(m.b)(T,{slug:f,tabs:d,currentTab:L}),Object(m.b)(w.a,{padded:!0},t,Object(m.b)(O,{relativePagePath:r})),Object(m.b)(j.a,{pageContext:e,location:o,slug:f,tabs:d,currentTab:L}),Object(m.b)(s.a,null))}},BAC9:function(e,t,o){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,o){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,o){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
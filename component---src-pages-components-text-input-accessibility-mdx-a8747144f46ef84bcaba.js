(window.webpackJsonp=window.webpackJsonp||[]).push([[2024],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),s=a("Wbzz"),o=a("Xrax"),c=a("a7k6"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),m=a("qKvR");var p=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(u.pageHeader,{[u.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},e))))),h=a("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:i}=t||a,b=`${n}/edit/${i}${r}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("I8xM");class w extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=b()(e,{lower:!0,strict:!0}),r=n===a,i=new RegExp(a+"/?(#.*)?$"),o=t.replace(i,n);return Object(m.b)("li",{key:e,className:d()({[j.selectedItem]:r},j.listItem)},Object(m.b)(s.Link,{className:j.link,to:""+o},e))});return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},n))))))}}var T=w,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:i,titleType:l}=e,{tabs:d,title:u,theme:h,description:j,keywords:w}=r,{site:{pathPrefix:g}}=Object(s.useStaticQuery)("2456312558"),S=g?a.pathname.replace(g,""):a.pathname,L=d?S.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:h,pageTitle:u,pageDescription:j,pageKeywords:w,titleType:l},Object(m.b)(p,{title:n?Object(m.b)(n,null):u,label:"label",tabs:d}),d&&Object(m.b)(T,{slug:S,tabs:d,currentTab:L}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(O,{relativePagePath:i})),Object(m.b)(x.a,{pageContext:e,location:a,slug:S,tabs:d,currentTab:L}),Object(m.b)(o.a,null))}},"7Q5v":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return j}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z"),i=a("CpY+"),b=a("5sAZ"),s=a("EQQr");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},u=d("AnchorLinks"),m=d("AnchorLink"),p=d("Row"),h=d("Column"),O={_frontmatter:l},x=r.a;function j(e){let{components:t}=e,a=c(e,["components"]);return Object(n.b)(x,o({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(u,{mdxType:"AnchorLinks"},Object(n.b)(m,{mdxType:"AnchorLink"},"How it works"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(n.b)(m,{mdxType:"AnchorLink"},"Resources"),Object(n.b)(m,{mdxType:"AnchorLink"},"Accessibility testing")),Object(n.b)("h2",null,"How it works"),Object(n.b)("p",null,"The text input components are form fields that are provided for user input of\ntext information. The validation message should be included to advise the user\nof text that is input incorrectly or a required field that is missing. The\noptional helper text should be used to provide instructions to help users\nunderstand how to complete the text field as well as indicate any required and\noptional input, data formats, and other relevant information."),Object(n.b)("h2",null,"Accessibility considerations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Provide labels and instructions that are clear and concise."),Object(n.b)("li",{parentName:"ol"},"Provide ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/WAI/tutorials/forms/instructions/"}),"instructions"),"\nfor completing the field. For example, Passwords must contain at least 8\nletters and/or numbers."),Object(n.b)("li",{parentName:"ol"},"If the text input is a required field include the\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"}),Object(n.b)("inlineCode",{parentName:"a"},"aria-required")," property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),Object(n.b)("h2",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/WAI/tutorials/forms/labels/"}),"W3C Web Tutorial: Labeling Controls")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/WAI/tutorials/forms/instructions/"}),"W3C Web Tutorial: Form Instructions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/content-structure-separation-programmatic.html"}),"1.3.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/error_id.html"}),"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"}),"3.3.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/labels_or_instructions.html"}),"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"}),"3.3.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/error_suggestion.html"}),"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"}),"3.3.3"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/name_role_value.html"}),"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}),"4.2.1"),")")))),Object(n.b)("h2",null,"Accessibility testing"),Object(n.b)("p",null,"Accessibility issues are tracked in the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(n.b)("h3",null,"Automated test"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(i.f,{mdxType:"StructuredListWrapper"},Object(n.b)(i.c,{mdxType:"StructuredListHead"},Object(n.b)(i.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(i.a,{mdxType:"StructuredListBody"},Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"DAP test:"),Object(n.b)("br",null),"- No violations")))))),Object(n.b)("h3",null,"macOS screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(i.f,{mdxType:"StructuredListWrapper"},Object(n.b)(i.c,{mdxType:"StructuredListHead"},Object(n.b)(i.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(i.a,{mdxType:"StructuredListBody"},Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) text input fully controlled toggle password visibility test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Shift Down Arrow to enter the Web area."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the text input label. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the optional helper text. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the text input field. VO announces the number of characters, and that it is a secure text field that will not be spoken by VO."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the icon and VO announces that it is a show password button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Press Space and the password is displayed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Left Arrow to the Text Input field and VO announces the password."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the Hide Password button. VO announces the label and that it is a button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the Show Password button. VO announces the label and that it is a button.")))),Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome version 77.0.3865.90",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) text area test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Shift Down Arrow to enter the Web area."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the Text Area label. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the Optional helper text. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Control-Option-Right Arrow to the Text Area. VO announces the placeholder text and that it is a text area."),Object(n.b)(s.a,{mdxType:"ListItem"},"Enter text in the text field. VO announces each character as it is typed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab out of the Text Area and then tab back. VO announces the entered text.")))))))),Object(n.b)("h3",null,"Windows screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(i.f,{mdxType:"StructuredListWrapper"},Object(n.b)(i.c,{mdxType:"StructuredListHead"},Object(n.b)(i.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(i.a,{mdxType:"StructuredListBody"},Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Firefox version 68",Object(n.b)("br",null),"- JAWS 18",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS text input fully controlled toggle password visibility test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Alt-Down area. JAWS announces the labels."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the text input field. JAWS announces that it is the main region, password, label, type and text."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the icon and JAWS announces that it is a show password button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Space and Enter key can be used to show and hide the password."),Object(n.b)(s.a,{mdxType:"ListItem"},"Shift-Tab to go back to the text input field and JAWS announces the password when it is displayed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the Show Password button. JAWS announces the label and that it is a button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Press Space on the Show Password button. The password displays."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the Hide Password button. JAWS announces the label and that it is a button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Press Space on the Hide Password button. The password is hidden.")))),Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Firefox 68",Object(n.b)("br",null),"- JAWS 18",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS text area test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Alt-Down Arrow. JAWS announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to the text area. JAWS announces the main region, text area label and that it contains text."),Object(n.b)(s.a,{mdxType:"ListItem"},"Enter text in the text area. JAWS announces each character as it is typed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Tab to move out of the text area and then Shift-Tab to go back. Press Insert-Up Arrow. VO announces the entered text.")))))))),Object(n.b)("h3",null,"iOS screen reader tests"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(i.f,{mdxType:"StructuredListWrapper"},Object(n.b)(i.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(n.b)(i.a,{mdxType:"StructuredListBody"},Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.1.3",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) text input fully controlled toggle password visibility Test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the text input label. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the optional helper text. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the text input field. VO announces the number of characters, and that it is a secure text field that will not be spoken by VO. As well as character mode and insertion point at end of text."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the icon and VO announces that it is a show password button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Double Tap and the password is displayed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Left to go back to the text input field and VO announces the password."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the Hide Password button. VO announces the label and that it is a button."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the Show Password button. VO announces the label and that it is a button.")))),Object(n.b)(i.e,{mdxType:"StructuredListRow"},Object(n.b)(i.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(n.b)("br",null),"- Safari version 13.1.3",Object(n.b)("br",null),"- Carbon React version 7.7.1"),Object(n.b)(i.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) text area test:"),Object(n.b)(b.a,{mdxType:"OrderedList"},Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the text area label. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the Optional helper text. VO announces the label and that its a text element."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to the text area. VO announces the placeholder text and that it is a text area."),Object(n.b)(s.a,{mdxType:"ListItem"},"Enter text in the text field. VO announces each character as it is typed."),Object(n.b)(s.a,{mdxType:"ListItem"},"Swipe Right to move out of the text area and then Swipe Left to go back. VO announces the entered text.")))))))))}j.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
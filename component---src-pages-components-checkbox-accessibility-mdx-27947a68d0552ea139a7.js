(window.webpackJsonp=window.webpackJsonp||[]).push([[1945],{"013z":function(e,t,c){"use strict";var b=c("q1tI"),n=c.n(b),a=c("NmYn"),s=c.n(a),r=c("Wbzz"),i=c("Xrax"),o=c("a7k6"),l=c("TSYQ"),d=c.n(l),u=c("QH2O"),h=c("qKvR");var m=({title:e,tabs:t=[]})=>Object(h.b)("div",{className:d()(u.pageHeader,{[u.withTabs]:t.length})},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.text},e))))),p=c("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:c}}}=Object(r.useStaticQuery)("1364590287"),{baseUrl:b,subDirectory:n,branch:a}=t||c,s=`${b}/edit/${a}${n}/src/pages${e}`;return b?Object(h.b)("div",{className:"bx--row "+p.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:p.link,href:s},"Edit this page on GitHub"))):null},x=c("FCXl"),j=c("I8xM");class y extends n.a.Component{render(){const{tabs:e,slug:t}=this.props,c=t.split("/").filter(Boolean).slice(-1)[0],b=e.map(e=>{const b=s()(e,{lower:!0,strict:!0}),n=b===c,a=new RegExp(c+"/?(#.*)?$"),i=t.replace(a,b);return Object(h.b)("li",{key:e,className:d()({[j.selectedItem]:n},j.listItem)},Object(h.b)(r.Link,{className:j.link,to:""+i},e))});return Object(h.b)("div",{className:j.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:j.list},b))))))}}var T=y,k=c("MjG9");t.a=({pageContext:e,children:t,location:c,Title:b})=>{const{frontmatter:n={},relativePagePath:a,titleType:l}=e,{tabs:d,title:u,theme:p,description:j,keywords:y}=n,{site:{pathPrefix:w}}=Object(r.useStaticQuery)("2456312558"),g=w?c.pathname.replace(w,""):c.pathname,f=d?g.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(h.b)(o.a,{tabs:d,homepage:!1,theme:p,pageTitle:u,pageDescription:j,pageKeywords:y,titleType:l},Object(h.b)(m,{title:b?Object(h.b)(b,null):u,label:"label",tabs:d}),d&&Object(h.b)(T,{slug:g,tabs:d,currentTab:f}),Object(h.b)(k.a,{padded:!0},t,Object(h.b)(O,{relativePagePath:a})),Object(h.b)(x.a,{pageContext:e,location:c,slug:g,tabs:d,currentTab:f}),Object(h.b)(i.a,null))}},BAC9:function(e,t,c){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,c){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,c){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gQkd:function(e,t,c){"use strict";c.r(t),c.d(t,"_frontmatter",(function(){return l})),c.d(t,"default",(function(){return j}));c("3bBZ"),c("q1tI");var b=c("7ljp"),n=c("013z"),a=c("CpY+"),s=c("5sAZ"),r=c("EQQr");c("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var b in c)Object.prototype.hasOwnProperty.call(c,b)&&(e[b]=c[b])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var c,b,n=function(e,t){if(null==e)return{};var c,b,n={},a=Object.keys(e);for(b=0;b<a.length;b++)c=a[b],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)c=a[b],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}const l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)},u=d("AnchorLinks"),h=d("AnchorLink"),m=d("Row"),p=d("Column"),O={_frontmatter:l},x=n.a;function j(e){let{components:t}=e,c=o(e,["components"]);return Object(b.b)(x,i({},O,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)(u,{mdxType:"AnchorLinks"},Object(b.b)(h,{mdxType:"AnchorLink"},"How it works"),Object(b.b)(h,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(b.b)(h,{mdxType:"AnchorLink"},"Resources"),Object(b.b)(h,{mdxType:"AnchorLink"},"Accessibility testing")),Object(b.b)("h2",null,"How it works"),Object(b.b)("p",null,"The Checkbox component is used to provide a list of options where the user can\nselect multiple options, including all or none. A checkbox control has three\npossible states indicated by the value of its ",Object(b.b)("inlineCode",{parentName:"p"},"aria-checked")," attribute, “true”\nwhen selected, “false” when unselected and “mixed” when in the indeterminate\nstate. The indeterminate state comes into play when the checkbox contains a\nsublist of selections, some of which are selected, and some unselected."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Tab")," key is used to move focus to each checkbox. Checkboxes identified as\ndisabled are ignored in the tab order. The ",Object(b.b)("inlineCode",{parentName:"p"},"Space")," key is used to select and\ndeselect each checkbox when the checkbox has focus. When the checkbox is\nselected the ARIA state is set to ",Object(b.b)("inlineCode",{parentName:"p"},'aria-checked="true"')," and when it is\ndeselected ",Object(b.b)("inlineCode",{parentName:"p"},'aria-checked="false"'),". An indeterminable checkbox has an ARIA state\nthat is set to ",Object(b.b)("inlineCode",{parentName:"p"},'aria-checked="mixed"')," until it is selected or deselected by the\nuser. Fieldset and Legend elements are used for labeling the checkbox group."),Object(b.b)("h2",null,"Accessibility considerations"),Object(b.b)("p",null,"This component has been validated to meet the\n",Object(b.b)("a",i({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(b.b)("a",i({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Checkboxes must have a clear and concise label."),Object(b.b)("li",{parentName:"ol"},"Users should be warned if selecting a checkbox will cause a change in\ncontext."),Object(b.b)("li",{parentName:"ol"},"If the checkbox is a required field include the\n",Object(b.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"}),"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),Object(b.b)("h2",null,"Resources"),Object(b.b)("h4",null,"Helpful resources for creating customized accessible implementations"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/checkbox-1.html"}),"W3C WAI-ARIA Authoring Practices Checkbox Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard intractions."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",Object(b.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/content-structure-separation-programmatic.html"}),"1.3.1"),")"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/labels_or_instructions.html"}),"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",Object(b.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"}),"3.3.2"),")"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/name_role_value.html"}),"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",Object(b.b)("a",i({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}),"4.2.1"),")")))),Object(b.b)("h2",null,"Accessibility testing"),Object(b.b)("p",null,"Accessibility issues are tracked in the\n",Object(b.b)("a",i({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(b.b)("h3",null,"Automated test"),Object(b.b)(m,{mdxType:"Row"},Object(b.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(b.b)(a.f,{mdxType:"StructuredListWrapper"},Object(b.b)(a.c,{mdxType:"StructuredListHead"},Object(b.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(b.b)(a.a,{mdxType:"StructuredListBody"},Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(b.b)("br",null),"- Chrome Version 77.0.3865.90",Object(b.b)("br",null),"- Dynamic Assessment Plugin Version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"DAP Test"),Object(b.b)("br",null),"- Violations")))))),Object(b.b)("h3",null,"macOS Screen reader tests"),Object(b.b)(m,{mdxType:"Row"},Object(b.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(b.b)(a.f,{mdxType:"StructuredListWrapper"},Object(b.b)(a.c,{mdxType:"StructuredListHead"},Object(b.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(b.b)(a.a,{mdxType:"StructuredListBody"},Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(b.b)("br",null),"- Chrome Version 77.0.3865.90",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"VoiceOver(VO) Test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the first checkbox. VO announces the label, the state as checked, that it is a checkbox input and the label group."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the indeterminable checkbox. VO announces the label, and the state as mixed."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key and the disabled checkbox is skipped."),Object(b.b)(r.a,{mdxType:"ListItem"},'Control-Option-Left Arrow key to read the disabled field. VO announces, "Disabled checkbox, dimmed unchecked checkbox".'),Object(b.b)(r.a,{mdxType:"ListItem"},"Tab to the next group of checkboxes with the same results.")))),Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(b.b)("br",null),"- Safari Version 13.0.2",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"VoiceOver(VO) Test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the first checkbox. VO announces the label, the state as checked, the checkbox legend and the group."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the indeterminable checkbox. VO announces the label, and the state as unchecked (Note: The mixed state is not announced)."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Tab key and the disabled checkbox is skipped."),Object(b.b)(r.a,{mdxType:"ListItem"},'Control-Option-Left Arrow key to read the disabled field. VO announces, "Off off dimmed unchecked checkbox".'),Object(b.b)(r.a,{mdxType:"ListItem"},"Tab to the next group of checkboxes with the same results.")))))))),Object(b.b)("h3",null,"Windows screen reader tests"),Object(b.b)(m,{mdxType:"Row"},Object(b.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(b.b)(a.f,{mdxType:"StructuredListWrapper"},Object(b.b)(a.c,{mdxType:"StructuredListHead"},Object(b.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(b.b)(a.a,{mdxType:"StructuredListBody"},Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(b.b)("br",null),"- Firefox Version 67",Object(b.b)("br",null),"- JAWS 19.1810.64",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"JAWS test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(b.b)(r.a,{mdxType:"ListItem"},"When navigating to a checkbox, JAWS announces the label, checkbox, and the status of the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"Disabled checkboxes can only be found by using the Up and Down Arrow keys, when JAWS."),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox. JAWS announces the status of checked or unchecked.")))),Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(b.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(b.b)("br",null),"- JAWS Version 19.1810.64",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"JAWS test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(b.b)(r.a,{mdxType:"ListItem"},"When navigating to a checkbox, JAWS announces the label, checkbox, and the status of the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},'Disabled checkboxes can only be found by using the Up and Down Arrow keys, when JAWS announces "disabled checkbox checkbox unchecked unavailable".'),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox. JAWS announces the status of checked or unchecked.")))),Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(b.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(b.b)("br",null),"- NVDA Version 2018.4.1",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"NVDA test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(b.b)(r.a,{mdxType:"ListItem"},"When navigating to a checkbox, NVDA announces the label, checkbox, and the status of the checkbox, but repeats the information twice."),Object(b.b)(r.a,{mdxType:"ListItem"},'When navigating to an indeterminable checkbox NVDA announces, "indeterminate checkbox indeterminate checkbox checkbox half checked".'),Object(b.b)(r.a,{mdxType:"ListItem"},'Disabled checkboxes can only be found by using the Up and Down Arrow keys, or the the X and Shift+X keys. NVDA announces "checkbox unavailable not checked disabled checkbox".'),Object(b.b)(r.a,{mdxType:"ListItem"},"Press the Space or Enter key to select or deselect the checkbox. NVDA announces the status of checked or unchecked.")))))))),Object(b.b)("h3",null,"Android screen reader tests"),Object(b.b)(m,{mdxType:"Row"},Object(b.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(b.b)(a.f,{mdxType:"StructuredListWrapper"},Object(b.b)(a.c,{mdxType:"StructuredListHead"},Object(b.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(b.b)(a.a,{mdxType:"StructuredListBody"},Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- Android Version 9 with Talkback",Object(b.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"Talkback Test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Navigate to the checkbox by swiping left or right, or press the Left or Right Arrow keys. Talkback announces,the label, field type, and the status of the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"The status of indeterminate checkboxes is not announced properly, Talkback only announces checked or unchecked."),Object(b.b)(r.a,{mdxType:"ListItem"},"When tapping on a checkbox, or pressing the Alt-Enter keys, Talkback announces the new status of the checkbox as checked or not checked.")))))))),Object(b.b)("h3",null,"iOS screen reader tests"),Object(b.b)(m,{mdxType:"Row"},Object(b.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(b.b)(a.f,{mdxType:"StructuredListWrapper"},Object(b.b)(a.e,{head:!0,mdxType:"StructuredListRow"},Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(b.b)(a.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(b.b)(a.a,{mdxType:"StructuredListBody"},Object(b.b)(a.e,{mdxType:"StructuredListRow"},Object(b.b)(a.b,{mdxType:"StructuredListCell"},"- iOS Version 13.1.3 with VoiceOver",Object(b.b)("br",null),"- Safari Version 13.1.3",Object(b.b)("br",null),"- Carbon React Version 7.7.1"),Object(b.b)(a.b,{mdxType:"StructuredListCell"},Object(b.b)("strong",null,"VoiceOver Test:"),Object(b.b)(s.a,{mdxType:"OrderedList"},Object(b.b)(r.a,{mdxType:"ListItem"},"Navigate to the checkbox by swiping left or right, or press the Left-Arrow or Right-Arrow keys when quick navigation is turned on. VO announces,the label, field type, and the status of the checkbox."),Object(b.b)(r.a,{mdxType:"ListItem"},"The status of indeterminate checkboxes is not announced properly, VoiceOver only announces checked or unchecked."),Object(b.b)(r.a,{mdxType:"ListItem"},"VoiceOver announces the beginning of the list, nesting level, content of the list item, the end of the list."),Object(b.b)(r.a,{mdxType:"ListItem"},"When tapping on a checkbox, or pressing VO+Space, VoiceOver announces the new status of the checkbox as checked or unchecked.")))))))))}j.isMDXComponent=!0}}]);
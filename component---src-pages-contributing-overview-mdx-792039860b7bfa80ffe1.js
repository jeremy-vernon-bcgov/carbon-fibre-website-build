(window.webpackJsonp=window.webpackJsonp||[]).push([[2078],{"013z":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("NmYn"),i=n.n(r),s=n("Wbzz"),b=n("Xrax"),c=n("a7k6"),l=n("TSYQ"),u=n.n(l),p=n("QH2O"),m=n("qKvR");var d=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:u()(p.pageHeader,{[p.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},e))))),h=n("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:a,branch:r}=t||n,i=`${o}/edit/${r}${a}/src/pages${e}`;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},j=n("FCXl"),O=n("I8xM");class f extends a.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],o=e.map(e=>{const o=i()(e,{lower:!0,strict:!0}),a=o===n,r=new RegExp(n+"/?(#.*)?$"),b=t.replace(r,o);return Object(m.b)("li",{key:e,className:u()({[O.selectedItem]:a},O.listItem)},Object(m.b)(s.Link,{className:O.link,to:""+b},e))});return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:O.list},o))))))}}var y=f,w=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:o})=>{const{frontmatter:a={},relativePagePath:r,titleType:l}=e,{tabs:u,title:p,theme:h,description:O,keywords:f}=a,{site:{pathPrefix:x}}=Object(s.useStaticQuery)("2456312558"),k=x?n.pathname.replace(x,""):n.pathname,v=u?k.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:h,pageTitle:p,pageDescription:O,pageKeywords:f,titleType:l},Object(m.b)(d,{title:o?Object(m.b)(o,null):p,label:"label",tabs:u}),u&&Object(m.b)(y,{slug:k,tabs:u,currentTab:v}),Object(m.b)(w.a,{padded:!0},t,Object(m.b)(g,{relativePagePath:r})),Object(m.b)(j.a,{pageContext:e,location:n,slug:k,tabs:u,currentTab:v}),Object(m.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},PEMG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("3bBZ"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},c=b("PageDescription"),l=b("AnchorLinks"),u=b("AnchorLink"),p={_frontmatter:s},m=a.a;function d(e){let{components:t}=e,n=i(e,["components"]);return Object(o.b)(m,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Interested in contributing to Carbon? This design system is the result of\ncommunity contributions, large and small—of code, design, ideas, and guidance.\nHere’s how you can contribute too.")),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(u,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(u,{mdxType:"AnchorLink"},"Working in the open"),Object(o.b)(u,{mdxType:"AnchorLink"},"The Carbon community"),Object(o.b)(u,{mdxType:"AnchorLink"},"Project workflow"),Object(o.b)(u,{mdxType:"AnchorLink"},"Contributor License Agreement")),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"Carbon is free to use for anybody building a product or website, and the Carbon\ncommunity is always working to make it better. Contributors like you help to\nmake Carbon great, and so we’re glad you’re here."),Object(o.b)("p",null,"Contributions are not limited to code. We also encourage feedback,\ndocumentation, new designs, and tools."),Object(o.b)("p",null,"All you need is a ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/join"}),"public GitHub account")," to get\nstarted. Most contributions begin with a GitHub issue using one of these\ntemplates:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+question+%3Aquestion%3A&template=question.md&title="}),"Ask a question")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+bug+%F0%9F%90%9B&template=bug-report.md&title="}),"Report a bug")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+enhancement+%F0%9F%92%A1&template=feature-request-or-enhancement.md&title="}),"Request a feature"))),Object(o.b)("h2",null,"Working in the open"),Object(o.b)("p",null,"Carbon lives on GitHub. All work, discussion, issues, bugs, features,\nimprovements, and comments happen right out in the open where everyone can see.\nAs we mentioned, you’ll need a ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/join"}),"public GitHub account"),"\nto contribute."),Object(o.b)("p",null,"If you’re looking for something that we don’t have, or you notice something\ncould be improved, you have two options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Open an issue for the request.")," We’ll review the issue and get back to you\nwith next steps. If we decide the request should be part of our pipeline,\nwe’ll add it to our roadmap. There are never timeline guarantees for\nrequests, but we’ll do our best to give you an estimate.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Begin the work yourself and contribute it back to Carbon.")," We appreciate\ncomplete contributions but also works in progress. You’re welcome to open an\nissue to surface your work and we’ll weigh in and help where we can."))),Object(o.b)("p",null,"Regardless of how you choose to contribute, we encourage you to open an issue as\nearly as possible in the process."),Object(o.b)("p",null,"If working with GitHub sounds like a lot, check out\n",Object(o.b)("a",r({parentName:"p"},{href:"https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github"}),"this free video series"),".\nIt’s one of our favorite resources."),Object(o.b)("h2",null,"The Carbon community"),Object(o.b)("h3",null,"Users"),Object(o.b)("p",null,"Users are members of the community who use Carbon guidelines, assets, and\ntooling. Anyone can be a user, and we encourage users to participate in the\ncommunity as much as possible."),Object(o.b)("h3",null,"Contributors"),Object(o.b)("p",null,"Contributors are members of the community who contribute to Carbon in a material\nway. Anyone can be a contributor. In addition to participating as a user, you\ncan also contribute by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reporting bugs or missing features through GitHub issues"),Object(o.b)("li",{parentName:"ul"},"Fixing bugs, adding features, and improving documentation")),Object(o.b)("h3",null,"Maintainers"),Object(o.b)("p",null,"Maintainers are members of the community who are committed to the success of\nindividual Carbon projects. In addition to their participation as a contributor,\nmaintainers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Label, close, and manage GitHub issues"),Object(o.b)("li",{parentName:"ul"},"Close and merge GitHub pull requests")),Object(o.b)("h2",null,"Project workflow"),Object(o.b)("p",null,"Carbon Design System projects typically use a\n",Object(o.b)("a",r({parentName:"p"},{href:"https://guides.github.com/activities/forking/"}),"fork and pull request workflow"),"\nfor contributions. Specific instructions can be found in each project’s GitHub\n",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file."),Object(o.b)("h2",null,"Contributor License Agreement"),Object(o.b)("p",null,"The Carbon core team works for IBM. To accept contributions, we need a signed\nContributor License Agreement (CLA) from you before code contributions can be\nreviewed and merged. If you have questions, please don’t hesitate\nto ",Object(o.b)("a",r({parentName:"p"},{href:"/help/contact-us"}),"reach out"),"."))}d.isMDXComponent=!0},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2116],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),b=a("Xrax"),s=a("a7k6"),c=a("TSYQ"),u=a.n(c),p=a("QH2O"),d=a("qKvR");var m=({title:e,tabs:t=[]})=>Object(d.b)("div",{className:u()(p.pageHeader,{[p.withTabs]:t.length})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},e))))),h=a("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:o}=t||a,l=`${n}/edit/${o}${r}/src/pages${e}`;return n?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("I8xM");class f extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=l()(e,{lower:!0,strict:!0}),r=n===a,o=new RegExp(a+"/?(#.*)?$"),b=t.replace(o,n);return Object(d.b)("li",{key:e,className:u()({[O.selectedItem]:r},O.listItem)},Object(d.b)(i.Link,{className:O.link,to:""+b},e))});return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},n))))))}}var y=f,v=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:o,titleType:c}=e,{tabs:u,title:p,theme:h,description:O,keywords:f}=r,{site:{pathPrefix:x}}=Object(i.useStaticQuery)("2456312558"),w=x?a.pathname.replace(x,""):a.pathname,N=u?w.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:u,homepage:!1,theme:h,pageTitle:p,pageDescription:O,pageKeywords:f,titleType:c},Object(d.b)(m,{title:n?Object(d.b)(n,null):p,label:"label",tabs:u}),u&&Object(d.b)(y,{slug:w,tabs:u,currentTab:N}),Object(d.b)(v.a,{padded:!0},t,Object(d.b)(g,{relativePagePath:o})),Object(d.b)(j.a,{pageContext:e,location:a,slug:w,tabs:u,currentTab:N}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eFe7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return g}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z"),o=a("V8m9");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const b={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},c=s("PageDescription"),u=s("InlineNotification"),p=s("AnchorLinks"),d=s("AnchorLink"),m={_frontmatter:b},h=r.a;function g(e){let{components:t}=e,a=i(e,["components"]);return Object(n.b)(h,l({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Welcome to Carbon! This tutorial will guide you in creating a Vue app with the\nCarbon Design System. We’ll teach you the ins and outs of using Carbon\ncomponents, while introducing web development best practices along the way.")),Object(n.b)(u,{mdxType:"InlineNotification"},Object(n.b)("p",null,"The Vue tutorial is maintained by members of the Carbon community. For support,\ncontact the\n",Object(n.b)("a",l({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-vue/issues/new"}),"Carbon Vue team"),".")),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(d,{mdxType:"AnchorLink"},"Audience"),Object(n.b)(d,{mdxType:"AnchorLink"},"Prerequisites"),Object(n.b)(d,{mdxType:"AnchorLink"},"Outline")),Object(n.b)("p",null,"Here’s a ",Object(n.b)("a",l({parentName:"p"},{href:"https://vue-step-6--carbon-tutorial-vue.netlify.com"}),"preview")," of what\nyou will build:"),Object(n.b)(o.a,{height:"400",title:"Carbon Tutorial",src:"https://vue-step-6--carbon-tutorial-vue.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),Object(n.b)("h2",null,"Audience"),Object(n.b)("p",null,"This tutorial is intended for people with all amounts of web development\nexperience. If you want to jump straight to code, you may want to skip this\ntutorial and go to the ",Object(n.b)("a",l({parentName:"p"},{href:"/developing/get-started"}),"developers getting started"),"\npage."),Object(n.b)("h2",null,"Prerequisites"),Object(n.b)("h3",null,"Vue"),Object(n.b)("p",null,"This is a web development tutorial that uses the Carbon Vue components. If\nyou’re just getting started with Vue and enjoy learning-by-doing, check out the\nofficial Vue ",Object(n.b)("a",l({parentName:"p"},{href:"https://vuejs.org/v2/guide/"}),"guide"),"."),Object(n.b)("h3",null,"ES6/ES2015"),Object(n.b)("p",null,"Vue apps often use the latest and greatest from JavaScript (ES6/ES2015). You’ll\nwant to be up to speed on the most commonly used features of the language.\n",Object(n.b)("a",l({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX"}),"Let’s Learn ES6"),"\ncovers those features in depth."),Object(n.b)("h3",null,"GitHub"),Object(n.b)("p",null,"We’ll be using GitHub to build an app together, so if you’re new to GitHub, make\nsure you’ve ",Object(n.b)("a",l({parentName:"p"},{href:"https://github.com/join"}),"made an account"),". Their\n",Object(n.b)("a",l({parentName:"p"},{href:"https://guides.github.com/activities/hello-world"}),"getting started guide")," is a\ngreat way to learn GitHub."),Object(n.b)("h3",null,"Yarn"),Object(n.b)("p",null,"This tutorial uses ",Object(n.b)("a",l({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn")," for dependency management so we\ncan take advantage of offline installs. Make sure that you have\n",Object(n.b)("a",l({parentName:"p"},{href:"https://yarnpkg.com/en/docs/install"}),"Yarn installed")," prior to starting the\ntutorial so you can follow along step-by-step."),Object(n.b)("h2",null,"Outline"),Object(n.b)("p",null,"Each step in this tutorial illustrates a different aspect of developing web\napplications with Carbon. We recommend starting with step 1, but you can pick up\nany step and take it from there."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"/developing/vue-tutorial/step-1"}),Object(n.b)("strong",{parentName:"a"},"Installing Carbon")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Create a web app with the UI shell component."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"/developing/vue-tutorial/step-2"}),Object(n.b)("strong",{parentName:"a"},"Building pages")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Build out pages with the grid and various components."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"/developing/vue-tutorial/step-3"}),Object(n.b)("strong",{parentName:"a"},"Using APIs")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Populate the data table with an external data source."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"/developing/vue-tutorial/step-4"}),Object(n.b)("strong",{parentName:"a"},"Creating components")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Extend Carbon by creating your own components."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"/developing/vue-tutorial/step-5"}),Object(n.b)("strong",{parentName:"a"},"Deploying to IBM Cloud")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Build and host your app in a production environment.")))))}g.isMDXComponent=!0}}]);
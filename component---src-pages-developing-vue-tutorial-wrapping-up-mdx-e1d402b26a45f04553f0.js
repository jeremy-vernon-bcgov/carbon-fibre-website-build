(window.webpackJsonp=window.webpackJsonp||[]).push([[2122],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),s=a("a7k6"),c=a("TSYQ"),p=a.n(c),m=a("QH2O"),u=a("qKvR");var d=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:p()(m.pageHeader,{[m.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},e))))),g=a("BAC9");var h=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:r,branch:o}=t||a,i=`${n}/edit/${o}${r}/src/pages${e}`;return n?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("I8xM");class O extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=i()(e,{lower:!0,strict:!0}),r=n===a,o=new RegExp(a+"/?(#.*)?$"),b=t.replace(o,n);return Object(u.b)("li",{key:e,className:p()({[j.selectedItem]:r},j.listItem)},Object(u.b)(l.Link,{className:j.link,to:""+b},e))});return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},n))))))}}var y=O,w=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:r={},relativePagePath:o,titleType:c}=e,{tabs:p,title:m,theme:g,description:j,keywords:O}=r,{site:{pathPrefix:v}}=Object(l.useStaticQuery)("2456312558"),x=v?a.pathname.replace(v,""):a.pathname,N=p?x.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:p,homepage:!1,theme:g,pageTitle:m,pageDescription:j,pageKeywords:O,titleType:c},Object(u.b)(d,{title:n?Object(u.b)(n,null):m,label:"label",tabs:p}),p&&Object(u.b)(y,{slug:x,tabs:p,currentTab:N}),Object(u.b)(w.a,{padded:!0},t,Object(u.b)(h,{relativePagePath:o})),Object(u.b)(f.a,{pageContext:e,location:a,slug:x,tabs:p,currentTab:N}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KWfa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return j}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},s=b("PageDescription"),c=b("AnchorLinks"),p=b("AnchorLink"),m=b("Row"),u=b("Column"),d=b("Caption"),g=b("InlineNotification"),h={_frontmatter:l},f=r.a;function j(e){let{components:t}=e,a=i(e,["components"]);return Object(n.b)(f,o({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Thanks for completing our tutorial and helping us improve it along the way. If\nyou want to show the world your new skills, you can apply for an IBM Digital\nBadge.")),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Application form"),Object(n.b)(p,{mdxType:"AnchorLink"},"Badge information")),Object(n.b)("h2",null,"Application form"),Object(n.b)("p",null,"Once you complete all five steps of the tutorial, you can apply for an\n",Object(n.b)("a",o({parentName:"p"},{href:"https://badges.carbondesignsystem.com"}),"IBM Digital Badge"),". These badges are\navailable to anybody who completes the tutorial, not just IBM employees."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(u,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y2NgwAK2325j+P77I5h98skSIPsz0////5kef7zIBFNz9dUOht5j9gwEwc03++HsF59vggxCkQfyma+92sUIYv/795fh2KP5DEQBoEZGGPv1tztxn3+9nHvjzW51mNjjjxcYoepwGwLzAsywyy+3mX788XzPfyj49uvjt1dfbrfOOxcriGwYXq+//HKTGUT//vMjEGbQh7ff/9y68ejX/78wkf+Xr73ayw1S9/brQzwuPG4Ld93mm3UrLn9Y8//k4yU/Tj5e+u/Uk2X/Tzxe8hdI/z75YsH/ueciXUHqFl5IZHr0PxSHgUecwYY17TUVnHLS5/3Ms0H/55+P+bfwQsK/2WfD/807H/N/zrnIn3Ou+/yfeNy9A6R2yilv5o6DdtgNjJ9sCmMyLj3ceeLZt/P/rzzd8/Pmq4P/rr888P/q831/b70+/Ovm24P/c2d7xoIUlsyKY6rebI3b2zceX2IBJ587T6NhAfb0yes/jx6+/PX5ww8w/9OnHzdENKK5QOp65s3Gbdih/34osbz/3B77Z6+fHv/159f/f0D49sObX7cf3+ptXFgmApI/eOIiWF0NLhcq+Koip0M4+9aj29lPXj1dte/Mfn245ecPgw2rnlrHoBightuVW49sh7Ov3r3GjCXBM+88sRts2LPXzxl6FvcRziUz185muHT7MoS9bjYwTf4G5+Uz184ywVx/+uoZhojKaAy9AOXCWeAmmJT7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"carbon badge",title:"carbon badge",src:"/static/b458aa5d47f7a1fc00ab3069fe649275/a7549/carbon-badge.png",srcSet:["/static/b458aa5d47f7a1fc00ab3069fe649275/7fc1e/carbon-badge.png 288w","/static/b458aa5d47f7a1fc00ab3069fe649275/a5df1/carbon-badge.png 576w","/static/b458aa5d47f7a1fc00ab3069fe649275/a7549/carbon-badge.png 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(d,{mdxType:"Caption"},"IBM Digital Badge"))),Object(n.b)("h2",null,"Badge information"),Object(n.b)("h3",null,Object(n.b)("a",o({parentName:"h3"},{href:"https://www.youracclaim.com/org/ibm/badge/ibm-carbon-design-system-developer-essentials-vue"}),"IBM Carbon Design System Developer Essentials - Vue")),Object(n.b)("p",null,"This badge demonstrates knowledge about Carbon’s Vue components. To earn the\nbadge:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Complete steps 1 through 5 of the Carbon Vue tutorial",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Step 1. ",Object(n.b)("a",o({parentName:"li"},{href:"/developing/vue-tutorial/step-1"}),"Installing Carbon")),Object(n.b)("li",{parentName:"ul"},"Step 2. ",Object(n.b)("a",o({parentName:"li"},{href:"/developing/vue-tutorial/step-2"}),"Building pages")),Object(n.b)("li",{parentName:"ul"},"Step 3. ",Object(n.b)("a",o({parentName:"li"},{href:"/developing/vue-tutorial/step-3"}),"Using APIs")),Object(n.b)("li",{parentName:"ul"},"Step 4. ",Object(n.b)("a",o({parentName:"li"},{href:"/developing/vue-tutorial/step-4"}),"Creating components")),Object(n.b)("li",{parentName:"ul"},"Step 5. ",Object(n.b)("a",o({parentName:"li"},{href:"/developing/vue-tutorial/step-5"}),"Deploying to IBM Cloud")))),Object(n.b)("li",{parentName:"ol"},"Have approved pull requests for steps 1 through 5 in the\n",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/carbon-design-system/carbon-tutorial-vue"}),"carbon-tutorial-vue repository")),Object(n.b)("li",{parentName:"ol"},"Complete the ",Object(n.b)("a",o({parentName:"li"},{href:"https://badges.carbondesignsystem.com"}),"badge application"))),Object(n.b)(g,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," To quickly find your submitted PRs, you can\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-vue/pulls?utf8=%E2%9C%93&q=author%3Ausername"}),"filter by author"),"\n(e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"author:${username}"),").")),Object(n.b)("h3",null,"FAQ and help"),Object(n.b)("p",null,"Badge issuer contact: ",Object(n.b)("a",o({parentName:"p"},{href:"mailto:matt.rosno@ibm.com"}),"matt.rosno@ibm.com"),"."),Object(n.b)("p",null,"For questions related to your Acclaim badge earner account and profile, as well\nas issues related to claiming your badge after receiving a notification, go to\n",Object(n.b)("a",o({parentName:"p"},{href:"http://support.youracclaim.com"}),"http://support.youracclaim.com")," for account\nissues."),Object(n.b)("h3",null,"Privacy statement"),Object(n.b)("p",null,"NOTICE: IBM leverages the services of Credly’s Acclaim platform, a 3rd party\ndata processor authorized by IBM and located in the United States, to assist in\nthe administration of the IBM Digital Badge program. In order to issue you an\nIBM Digital Badge, your personal information (name, email address, and badge\nearned) will be shared with the Credly’s Acclaim platform. You will receive an\nemail notification from Acclaim with instructions for claiming the badge. Your\npersonal information is used to issue your badge and for program reporting and\noperational purposes. It will be handled in a manner consistent with IBM privacy\npractices. The IBM Privacy Statement can be viewed here:\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/privacy/us/en/"}),"https://www.ibm.com/privacy/us/en/"),". IBM\nemployees can view the IBM Internal Privacy Statement here:\n",Object(n.b)("a",o({parentName:"p"},{href:"https://w3.ibm.com/w3publisher/w3-privacy-notice"}),"https://w3.ibm.com/w3publisher/w3-privacy-notice"),"."),Object(n.b)("h3",null,"Application form"),Object(n.b)("p",null,"To apply for the IBM Digital Badge, please complete the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://badges.carbondesignsystem.com"}),"form and survey"),"."))}j.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2023],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),o=a("Xrax"),b=a("a7k6"),c=a("TSYQ"),g=a.n(c),p=a("QH2O"),d=a("qKvR");var m=({title:e,tabs:t=[]})=>Object(d.b)("div",{className:g()(p.pageHeader,{[p.withTabs]:t.length})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},e))))),u=a("BAC9");var f=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:s,branch:i}=t||a,r=`${n}/edit/${i}${s}/src/pages${e}`;return n?Object(d.b)("div",{className:"bx--row "+u.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},y=a("FCXl"),A=a("I8xM");class x extends s.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),s=n===a,i=new RegExp(a+"/?(#.*)?$"),o=t.replace(i,n);return Object(d.b)("li",{key:e,className:g()({[A.selectedItem]:s},A.listItem)},Object(d.b)(l.Link,{className:A.link,to:""+o},e))});return Object(d.b)("div",{className:A.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:A.list},n))))))}}var h=x,O=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:s={},relativePagePath:i,titleType:c}=e,{tabs:g,title:p,theme:u,description:A,keywords:x}=s,{site:{pathPrefix:j}}=Object(l.useStaticQuery)("2456312558"),w=j?a.pathname.replace(j,""):a.pathname,T=g?w.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:g,homepage:!1,theme:u,pageTitle:p,pageDescription:A,pageKeywords:x,titleType:c},Object(d.b)(m,{title:n?Object(d.b)(n,null):p,label:"label",tabs:g}),g&&Object(d.b)(h,{slug:w,tabs:g,currentTab:T}),Object(d.b)(O.a,{padded:!0},t,Object(d.b)(f,{relativePagePath:i})),Object(d.b)(y.a,{pageContext:e,location:a,slug:w,tabs:g,currentTab:T}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XRGf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return A}));a("3bBZ"),a("q1tI");var n=a("7ljp"),s=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const l={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},b=o("PageDescription"),c=o("AnchorLinks"),g=o("AnchorLink"),p=o("Row"),d=o("Column"),m=o("ComponentDemo"),u=o("ComponentVariant"),f={_frontmatter:l},y=s.a;function A(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(y,i({},f,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use tags to label, categorize, or organize items using keywords that describe\nthem.")),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(g,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(g,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(g,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Multiple or single tags can be used to categorize items."),Object(n.b)("p",null,"Use short labels for easy scanning. Use two words only if necessary to describe\nthe status and differentiate it from other tags."),Object(n.b)("h3",null,"When to use"),Object(n.b)("p",null,"Use tags when content is mapped to multiple categories, and the user needs a way\nto differentiate between them."),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVQoz61SzW7TQBBeb6+IB2h7BSoeKucceYyo4iG4YVrcIiRyjiIVoiqkqUki/6EQu4DiNHa867WL180wNs02IHFBjPRpZr7dnfl2dwhBMwyDNJtN0mg0at9qtUgURcSyLOK6LvE876/YXlcGAH9CG41G1DRN2ul0KG6meFD5brdLsZnK79bItu0gHiIe3HmN/IONx2MV7Pb7/aNer3cyHA4N7H6MXXXk9cFgoDuOo2Dbtv7pwtQ929U/e7buujZyzhGu7arK8/n8wPd9mE6nsFgsgDFWo4pns5nKkySpvRW4ECy/QbjkcB0xEGkKfhA8VQWFEI/iOM7xQIlxwTmXaZpKzCXydVxxG/59fCnPo5G0r6QMwkxmgt8mLH2iCuKmx6jmJgzDW1RQFSrRl/jTJXJ1XHMJq+MP4bDsX49LJ8jlRy8rJ362Thi/L4idD1AZFEUB6/UaNialhDzP63ibN288sIoZfF8BLMUvbpXw3668j0peocq3qOAdqjlG/wav28b3NTA/RVT8a+RPLsJJ+3JhGU6QGV9D3k55chqv2J6awf9ljPH7wd4MLl5RwzetPEXVWjXAVS4yoYlU0DzL6TPnuXb45QV9eQa0Myk0+SOlwZzVtX4Cm/AQmFXcAwwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of tags in a data table.",title:"Example of tags in a data table.",src:"/static/4a53a400bd7177aaa950ff9d2df21502/3cbba/tag-usage-2.png",srcSet:["/static/4a53a400bd7177aaa950ff9d2df21502/7fc1e/tag-usage-2.png 288w","/static/4a53a400bd7177aaa950ff9d2df21502/a5df1/tag-usage-2.png 576w","/static/4a53a400bd7177aaa950ff9d2df21502/3cbba/tag-usage-2.png 1152w","/static/4a53a400bd7177aaa950ff9d2df21502/392b1/tag-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"Tags can also be used as a method of filtering data, to show only items within\nthat particular category."),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABHUlEQVQoz6WRzUrEMBSFk7yIG5+k+BDudOHSnSufwQdwNVuh/sHMWBF3CjPVKIy4ESym6jRN006apC24GJ2aRgWpOAge+Dj3QjicS4DjOKARIQSGYYgYY4hzjpIkQVEU2Z1SivI8R2VZoqIorLewGV8O1jdWwX9VVdXH0PX2rE9EtinyrC9VvqsL6Sol96USrlTywLTraa27pkGbnuHQsPDZEIK+e2YD43G6Q595EUf8IXriWUx5OH5MUkb5fRxTXwhxKaX8zoUBGwaGxSbDOAQj7wU2SzCcrgX+6xbBbyuBP+2EV7Nl49sEz5b+cnJd161hjs5PR/bdPH6EYi8D+DiFd0MF8VEKyU0Jr08ySG41mEgOGEuA+flfadT4O9WXGFxZfpDqAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of tags in search.",title:"Example of tags in search.",src:"/static/a15f7145d5b3f91893cfaf3e36977659/3cbba/tag-usage-1.png",srcSet:["/static/a15f7145d5b3f91893cfaf3e36977659/7fc1e/tag-usage-1.png 288w","/static/a15f7145d5b3f91893cfaf3e36977659/a5df1/tag-usage-1.png 576w","/static/a15f7145d5b3f91893cfaf3e36977659/3cbba/tag-usage-1.png 1152w","/static/a15f7145d5b3f91893cfaf3e36977659/392b1/tag-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(m,{components:[{id:"tag",label:"Tag"}],mdxType:"ComponentDemo"},Object(n.b)(u,{id:"tag",knobs:{Tag:["filter","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tag--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tag--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtag--filter",Vanilla:"https://the-carbon-components.netlify.com/?nav=tag"},mdxType:"ComponentVariant"},'\n  <>\n<Tag type="red" title="Clear Filter"> Red </Tag>\n<Tag type="magenta" title="Clear Filter"> Magenta </Tag>\n<Tag type="purple" title="Clear Filter"> Purple </Tag>\n<Tag type="blue" title="Clear Filter"> Blue </Tag>\n<Tag type="cyan" title="Clear Filter"> Cyan </Tag>\n<Tag type="teal" title="Clear Filter"> Teal </Tag>\n<Tag type="green" title="Clear Filter"> Green </Tag>\n<Tag type="gray" title="Clear Filter"> Gray </Tag>\n<Tag type="cool-gray" title="Clear Filter"> Cool gray </Tag>\n<Tag type="warm-gray" title="Clear Filter"> Warm gray </Tag>\n</>\n  ')),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}A.isMDXComponent=!0}}]);
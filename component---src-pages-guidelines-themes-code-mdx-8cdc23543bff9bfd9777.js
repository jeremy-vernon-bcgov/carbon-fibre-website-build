(window.webpackJsonp=window.webpackJsonp||[]).push([[2081],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("NmYn"),o=n.n(c),s=n("Wbzz"),b=n("Xrax"),l=n("a7k6"),i=n("TSYQ"),m=n.n(i),u=n("QH2O"),p=n("qKvR");var d=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:m()(u.pageHeader,{[u.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},e))))),h=n("BAC9");var g=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:r,branch:c}=t||n,o=`${a}/edit/${c}${r}/src/pages${e}`;return a?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=n("FCXl"),O=n("I8xM");class x extends r.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=o()(e,{lower:!0,strict:!0}),r=a===n,c=new RegExp(n+"/?(#.*)?$"),b=t.replace(c,a);return Object(p.b)("li",{key:e,className:m()({[O.selectedItem]:r},O.listItem)},Object(p.b)(s.Link,{className:O.link,to:""+b},e))});return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},a))))))}}var y=x,f=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:r={},relativePagePath:c,titleType:i}=e,{tabs:m,title:u,theme:h,description:O,keywords:x}=r,{site:{pathPrefix:w}}=Object(s.useStaticQuery)("2456312558"),v=w?n.pathname.replace(w,""):n.pathname,T=m?v.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:h,pageTitle:u,pageDescription:O,pageKeywords:x,titleType:i},Object(p.b)(d,{title:a?Object(p.b)(a,null):u,label:"label",tabs:m}),m&&Object(p.b)(y,{slug:v,tabs:m,currentTab:T}),Object(p.b)(f.a,{padded:!0},t,Object(p.b)(g,{relativePagePath:c})),Object(p.b)(j.a,{pageContext:e,location:n,slug:v,tabs:m,currentTab:T}),Object(p.b)(b.a,null))}},"1Qw9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return x}));n("3bBZ"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},l=b("PageDescription"),i=b("InlineNotification"),m=b("AnchorLinks"),u=b("AnchorLink"),p=b("Row"),d=b("Column"),h=b("ResourceCard"),g=b("MdxIcon"),j={_frontmatter:s},O=r.a;function x(e){let{components:t}=e,n=o(e,["components"]);return Object(a.b)(O,c({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use the themes package to customize your product while maintaining consistency.")),Object(a.b)(i,{mdxType:"InlineNotification"},Object(a.b)("p",null,"If you’re using carbon-components there’s no reason to install the themes\npackage separately. See our ",Object(a.b)("a",c({parentName:"p"},{href:"/get-started/develop/react"}),"get started")," guide to\nstart building.")),Object(a.b)(m,{mdxType:"AnchorLinks"},Object(a.b)(u,{mdxType:"AnchorLink"},"Get started"),Object(a.b)(u,{mdxType:"AnchorLink"},"Usage"),Object(a.b)(u,{mdxType:"AnchorLink"},"Resources")),Object(a.b)("h2",null,"Get started"),Object(a.b)("p",null,"To install ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/themes")," in your project, you will need to run the following\ncommand using ",Object(a.b)("a",c({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),":"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install -S @carbon/themes\n")),Object(a.b)("p",null,"If you prefer ",Object(a.b)("a",c({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"Yarn"),", use the following command\ninstead:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn add @carbon/themes\n")),Object(a.b)("h2",null,"Usage"),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/themes")," in JavaScript or Sass by including this package in\nyour project. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/themes")," provides a set of color tokens that\nare pre-defined for a specific theme. Currently, we offer the following color\nthemes: white, gray 10, gray 90, gray 100 ."),Object(a.b)("p",null,"You can preview all of the token values for this on the\n",Object(a.b)("a",c({parentName:"p"},{href:"https://www.carbondesignsystem.com/guidelines/color/usage"}),"Carbon Design System website"),"\n."),Object(a.b)("h3",null,"Sass"),Object(a.b)("p",null,"If you’re project is using Sass, you can include this package and the\ncorresponding default theme by writing the following in your Sass file:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/themes/scss/themes';\n")),Object(a.b)("p",null,"By default, the white theme will be initialized. If you would like to include\nanother theme, you can do so by calling our mixin. For example:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/themes/scss/themes';\n\n// Use the gray 10 theme\n@include carbon--theme($carbon--theme--g10);\n\n// Use the gray 90 theme\n@include carbon--theme($carbon--theme--g90);\n\n// Use the gray 100 theme\n@include carbon--theme($carbon--theme--g100);\n")),Object(a.b)("p",null,"Alternatively, you can set the global theme variable then call the mixin without\npassing in a theme name."),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/themes/scss/themes';\n\n$carbon--theme: $carbon--theme--g10;\n\n// Use the gray 10 theme\n@include carbon--theme();\n")),Object(a.b)("p",null,"Inline theming can be done by using the mixin. For example:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/themes/scss/themes';\n\n// Use the default white theme here\n\n.my-dark-theme {\n  @include carbon--theme($carbon--theme--g90) {\n    // Use the dark theme here\n  }\n}\n\n.my-darker-theme {\n  @include carbon--theme($carbon--theme--g100) {\n    // Use the darker theme here\n  }\n}\n")),Object(a.b)("h3",null,"JavaScript"),Object(a.b)("p",null,"If you’re looking to use these themes in JavaScript, we export a variety of\nbindings for you to use, including:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),"import {\n  // An object of all themes\n  themes,\n\n  // Direct theme values\n  white,\n  g10,\n  g90,\n  g100,\n\n  // Specific token values\n  interactive01,\n  interactive02,\n} from '@carbon/themes';\n")),Object(a.b)("h2",null,"Resources"),Object(a.b)(p,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(h,{subTitle:"Carbon theme package",href:"https://github.com/carbon-design-system/carbon/blob/master/packages/themes",mdxType:"ResourceCard"},Object(a.b)(g,{name:"bee",mdxType:"MdxIcon"}))),Object(a.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(h,{subTitle:"Themes package demo",href:"https://carbon-elements.netlify.app/themes/examples/preview/",mdxType:"ResourceCard"},Object(a.b)(g,{name:"bee",mdxType:"MdxIcon"})))))}x.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
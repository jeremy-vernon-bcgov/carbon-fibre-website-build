(window.webpackJsonp=window.webpackJsonp||[]).push([[2083],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("NmYn"),r=n.n(o),c=n("Wbzz"),b=n("Xrax"),s=n("a7k6"),i=n("TSYQ"),p=n.n(i),u=n("QH2O"),d=n("qKvR");var m=({title:e,tabs:t=[]})=>Object(d.b)("div",{className:p()(u.pageHeader,{[u.withTabs]:t.length})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},e))))),y=n("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:l,branch:o}=t||n,r=`${a}/edit/${o}${l}/src/pages${e}`;return a?Object(d.b)("div",{className:"bx--row "+y.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:y.link,href:r},"Edit this page on GitHub"))):null},O=n("FCXl"),f=n("I8xM");class g extends l.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=r()(e,{lower:!0,strict:!0}),l=a===n,o=new RegExp(n+"/?(#.*)?$"),b=t.replace(o,a);return Object(d.b)("li",{key:e,className:p()({[f.selectedItem]:l},f.listItem)},Object(d.b)(c.Link,{className:f.link,to:""+b},e))});return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},a))))))}}var h=g,N=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:l={},relativePagePath:o,titleType:i}=e,{tabs:p,title:u,theme:y,description:f,keywords:g}=l,{site:{pathPrefix:x}}=Object(c.useStaticQuery)("2456312558"),w=x?n.pathname.replace(x,""):n.pathname,v=p?w.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:p,homepage:!1,theme:y,pageTitle:u,pageDescription:f,pageKeywords:g,titleType:i},Object(d.b)(m,{title:a?Object(d.b)(a,null):u,label:"label",tabs:p}),p&&Object(d.b)(h,{slug:w,tabs:p,currentTab:v}),Object(d.b)(N.a,{padded:!0},t,Object(d.b)(j,{relativePagePath:o})),Object(d.b)(O.a,{pageContext:e,location:n,slug:w,tabs:p,currentTab:v}),Object(d.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"s+no":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return g}));n("3bBZ"),n("q1tI");var a=n("7ljp"),l=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},s=b("PageDescription"),i=b("InlineNotification"),p=b("AnchorLinks"),u=b("AnchorLink"),d=b("Row"),m=b("Column"),y=b("ResourceCard"),j=b("MdxIcon"),O={_frontmatter:c},f=l.a;function g(e){let{components:t}=e,n=r(e,["components"]);return Object(a.b)(f,o({},O,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Type is a core part of any offering. Use the Carbon type package to leverage IBM\nPlex across your product.")),Object(a.b)(i,{mdxType:"InlineNotification"},Object(a.b)("p",null,"If you’re using carbon-components there’s no reason to install the type package\nseparately. See our ",Object(a.b)("a",o({parentName:"p"},{href:"/get-started/develop/react"}),"get started")," guide to start\nbuilding.")),Object(a.b)(p,{mdxType:"AnchorLinks"},Object(a.b)(u,{mdxType:"AnchorLink"},"Get started"),Object(a.b)(u,{mdxType:"AnchorLink"},"Usage"),Object(a.b)(u,{mdxType:"AnchorLink"},"Resources")),Object(a.b)("h2",null,"Get started"),Object(a.b)("p",null,"To install ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," in your project, you will need to run the following\ncommand using ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install -S @carbon/type\n")),Object(a.b)("p",null,"If you prefer ",Object(a.b)("a",o({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"Yarn"),", use the following command\ninstead:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @carbon/type\n")),Object(a.b)("h2",null,"Usage"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," provides a variety of ways to work with typography from the IBM\nDesign Language. You can use all of these features either in JavaScript or Sass.\nThese features include:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Feature"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#font-face"}),"Font face")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Include IBM Plex™ font faces in your application. Uses Google fonts")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#type-classes"}),"Type classes")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Helpers to use type styles directly. Not included by default")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#font-family"}),"Font family")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Defines the font stack for IBM Plex™ in your application, provides helpers for working with font definitions")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#reset"}),"Reset")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Provides a high-level CSS Reset to use in your project")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#type-scale"}),"Scale")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Provides the type scale. Can access the size at any given step (step 1, 2, 3, etc)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"#type-styles"}),"Styles")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Provides type styles for your application (heading-01, body-long-01, etc)")))),Object(a.b)("p",null,"To include ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," in your project, you can write the following in your\nSass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/type';\n@import '@carbon/type/scss/font-face/mono';\n@import '@carbon/type/scss/font-face/sans';\n\n@include carbon--type-reset();\n@include carbon--font-face-mono();\n@include carbon--font-face-sans();\n")),Object(a.b)("p",null,"This should include the default type reset from the project, in addition to\nfont-face definitions for IBM Plex Mono and IBM Plex Sans that come from Google\nFonts."),Object(a.b)("p",null,"If you are using ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/elements"),", the import paths become:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/elements/scss/type/path-to-import';\n")),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/elements/scss/type/styles';\n")),Object(a.b)("p",null,"In addition, you will need to setup ",Object(a.b)("inlineCode",{parentName:"p"},"node-sass")," so that ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," is\nincluded in the ",Object(a.b)("inlineCode",{parentName:"p"},"includePaths")," option. Often times, the tool that you are using\nto build Sass files in your project should expose this option for you to set."),Object(a.b)("p",null,"For example, if you are using Webpack you would use ",Object(a.b)("inlineCode",{parentName:"p"},"node-sass")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"sass-loader")," with the following configuration for ",Object(a.b)("inlineCode",{parentName:"p"},"includePaths"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"{\n  loader: 'sass-loader',\n  options: {\n    includePaths: ['node_modules'],\n  },\n}\n")),Object(a.b)("h3",null,"Type styles"),Object(a.b)("p",null,"Instead of using a type scale, ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," provides tokens that represent\nwhat we call type styles. These tokens have a variety of properties for styling\nhow text is rendered on a page."),Object(a.b)("p",null,"You can find a full reference of the type styles that are available on the\n",Object(a.b)("a",o({parentName:"p"},{href:"https://www.carbondesignsystem.com/guidelines/typography/productive"}),"Carbon Design System website"),"\n."),Object(a.b)("p",null,"You can include a token in your Sass file by writing:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/styles';\n\n@include carbon--type-style('productive-heading-01');\n")),Object(a.b)("p",null,"In addition, if the type style you are using has a fluid style then you can pass\nin ",Object(a.b)("inlineCode",{parentName:"p"},"true")," as the second argument to ",Object(a.b)("inlineCode",{parentName:"p"},"carbon--type-style")," to enable fluid styles.\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/styles';\n\n@include carbon--type-style('token-name', true);\n")),Object(a.b)("h3",null,"Font-face"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," supports three font-face definitions that you can use to add IBM\nPlex to your project. These font-face definitions include support for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"IBM Plex Mono"),Object(a.b)("li",{parentName:"ul"},"IBM Plex Sans"),Object(a.b)("li",{parentName:"ul"},"IBM Plex Serif")),Object(a.b)("p",null,"For most projects, only IBM Plex Mono and IBM Plex Sans is necessary. We also\nprovide IBM Plex Serif if you are building an editorial or marketing project."),Object(a.b)("p",null,"These font-face definitions are pulling the above fonts from Google Fonts. As a\nresult, they are not intended to be used as a production asset for your project.\nWhile you can depend on these for bootstrapping your project, we highly\nrecommend using the fonts from the ",Object(a.b)("inlineCode",{parentName:"p"},"@ibm/plex")," package and hosting them on a\nglobal CDN."),Object(a.b)("p",null,"You can include each font-face definition by including the corresponding file\nand calling its mixin. For example, if you wanted to include IBM Plex Mono in\nyour project you would write the following in your Sass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/font-face/mono';\n\n@include carbon--font-face-mono();\n")),Object(a.b)("p",null,"Similarly, you can include IBM Plex Sans and IBM Plex Serif by writing:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/font-face/mono';\n@import '@carbon/type/scss/font-face/sans';\n@import '@carbon/type/scss/font-face/serif';\n\n@include carbon--font-face-mono();\n@include carbon--font-face-sans();\n@include carbon--font-face-serif();\n")),Object(a.b)("h3",null,"Type classes"),Object(a.b)("p",null,"The recommended way to style your application will be to use our\n",Object(a.b)("a",o({parentName:"p"},{href:"#type-styles"}),"type styles"),". However, we also offer helper CSS classes for\nspecific use-cases. These are also helpful when quickly prototyping a project."),Object(a.b)("p",null,"You can include type classes in your project by writing the following in your\nSass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/classes';\n")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Selector"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-mono")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font face as IBM Plex Mono")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-sans")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font face as IBM Plex Sans")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-serif")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font face as IBM Plex Serif")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-light")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font weight as light (300)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-regular")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font weight as regular (400)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-semibold")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font weight as semibold (600)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-italic")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify the font style as italic")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},".bx--type-<type-style>")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Set styles for the given type style")))),Object(a.b)("h3",null,"Font family"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@carbon/type")," provides the font stacks for all the IBM Plex fonts available.\nYou can access the font family information by including the following import in\nyour Sass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/font-family';\n")),Object(a.b)("p",null,"The font stacks are available under the ",Object(a.b)("inlineCode",{parentName:"p"},"$carbon--font-families")," variable. You\ncan also access a specific font family by using the ",Object(a.b)("inlineCode",{parentName:"p"},"carbon--font-family"),"\nfunction by doing:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),".my-selector {\n  font-family: carbon--font-family('mono');\n}\n")),Object(a.b)("p",null,"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"carbon--font-family")," mixin to automatically set the\n",Object(a.b)("inlineCode",{parentName:"p"},"font-family")," property for you:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),".my-selector {\n  @include carbon--font-family('mono');\n}\n")),Object(a.b)("p",null,"You can see all the available font families in ",Object(a.b)("inlineCode",{parentName:"p"},"$carbon--font-families")," ."),Object(a.b)("h3",null,"Reset"),Object(a.b)("p",null,"An optional type reset is provided under the ",Object(a.b)("inlineCode",{parentName:"p"},"carbon--type-reset")," mixin. You can\ninclude this mixin by writing the following in your Sass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/reset';\n\n@include carbon--type-reset();\n")),Object(a.b)("p",null,"This reset sets some top-level properties on ",Object(a.b)("inlineCode",{parentName:"p"},"html")," and ",Object(a.b)("inlineCode",{parentName:"p"},"body"),", namely\n",Object(a.b)("inlineCode",{parentName:"p"},"font-size"),", ",Object(a.b)("inlineCode",{parentName:"p"},"font-family"),", and some ",Object(a.b)("inlineCode",{parentName:"p"},"text-rendering")," options. We also map the\n",Object(a.b)("inlineCode",{parentName:"p"},"strong")," tag to the semibold font weight."),Object(a.b)("h3",null,"Type scale"),Object(a.b)("p",null,"A type scale is provided through the ",Object(a.b)("inlineCode",{parentName:"p"},"$carbon--type-scale")," variable and\ncorresponding ",Object(a.b)("inlineCode",{parentName:"p"},"carbon--type-scale")," function and mixin. However, for specifying\ntype styles, the recommendation is to use ",Object(a.b)("a",o({parentName:"p"},{href:"#type-styles"}),"type styles")," ."),Object(a.b)("p",null,"If you are looking to use the type scale, you can include all the scale-related\nutilities and variables by writing the following in your Sass file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/scale';\n")),Object(a.b)("p",null,"You can access a specific step in the type scale by using the\n",Object(a.b)("inlineCode",{parentName:"p"},"carbon--type-scale")," function:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/scale';\n\n.my-selector {\n  font-size: carbon--type-scale(1);\n}\n")),Object(a.b)("p",null,"There is also a ",Object(a.b)("inlineCode",{parentName:"p"},"type-scale")," mixin that will set ",Object(a.b)("inlineCode",{parentName:"p"},"font-size")," for your directly:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-scss"}),"@import '@carbon/type/scss/scale';\n\n.my-selector {\n  @include carbon--type-scale(1);\n}\n")),Object(a.b)("h2",null,"Resources"),Object(a.b)(d,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(y,{subTitle:"Carbon type package",href:"https://github.com/carbon-design-system/carbon/blob/master/packages/type",mdxType:"ResourceCard"},Object(a.b)(j,{name:"bee",mdxType:"MdxIcon"}))),Object(a.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(y,{subTitle:"Type package demo",href:"https://carbon-elements.netlify.app/type/examples/preview/",mdxType:"ResourceCard"},Object(a.b)(j,{name:"bee",mdxType:"MdxIcon"})))))}g.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2067],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),c=n.n(r),l=n("Wbzz"),b=n("Xrax"),i=n("a7k6"),s=n("TSYQ"),p=n.n(s),d=n("QH2O"),u=n("qKvR");var m=({title:e,tabs:t=[]})=>Object(u.b)("div",{className:p()(d.pageHeader,{[d.withTabs]:t.length})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},e))))),j=n("BAC9");var O=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:o,branch:r}=t||n,c=`${a}/edit/${r}${o}/src/pages${e}`;return a?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=n("FCXl"),h=n("I8xM");class f extends o.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],a=e.map(e=>{const a=c()(e,{lower:!0,strict:!0}),o=a===n,r=new RegExp(n+"/?(#.*)?$"),b=t.replace(r,a);return Object(u.b)("li",{key:e,className:p()({[h.selectedItem]:o},h.listItem)},Object(u.b)(l.Link,{className:h.link,to:""+b},e))});return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:h.list},a))))))}}var y=f,x=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:a})=>{const{frontmatter:o={},relativePagePath:r,titleType:s}=e,{tabs:p,title:d,theme:j,description:h,keywords:f}=o,{site:{pathPrefix:N}}=Object(l.useStaticQuery)("2456312558"),w=N?n.pathname.replace(N,""):n.pathname,C=p?w.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"";return Object(u.b)(i.a,{tabs:p,homepage:!1,theme:j,pageTitle:d,pageDescription:h,pageKeywords:f,titleType:s},Object(u.b)(m,{title:a?Object(u.b)(a,null):d,label:"label",tabs:p}),p&&Object(u.b)(y,{slug:w,tabs:p,currentTab:C}),Object(u.b)(x.a,{padded:!0},t,Object(u.b)(O,{relativePagePath:r})),Object(u.b)(g.a,{pageContext:e,location:n,slug:w,tabs:p,currentTab:C}),Object(u.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},L8KW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return h}));n("3bBZ"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},i=b("PageDescription"),s=b("AnchorLinks"),p=b("AnchorLink"),d=b("Row"),u=b("Column"),m=b("ResourceCard"),j=b("MdxIcon"),O={_frontmatter:l},g=o.a;function h(e){let{components:t}=e,n=c(e,["components"]);return Object(a.b)(g,r({},O,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i,{mdxType:"PageDescription"},Object(a.b)("p",null,"Carbon icons are provided through a set of packages allowing the use of icons in\nmultiple frameworks. Icons are supported in vanilla, React, Angular, and Vue.")),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Get started"),Object(a.b)(p,{mdxType:"AnchorLink"},"Usage"),Object(a.b)(p,{mdxType:"AnchorLink"},"Resources")),Object(a.b)("h2",null,"Get started"),Object(a.b)("p",null,"To install ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/icons-react")," in your project, you will need to run the\nfollowing command using ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install -S @carbon/icons-react\n")),Object(a.b)("p",null,"If you prefer ",Object(a.b)("a",r({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"Yarn"),", use the following command\ninstead:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn add @carbon/icons-react\n")),Object(a.b)("h2",null,"Usage"),Object(a.b)("p",null,"Icons in this package support the following sizes: ",Object(a.b)("inlineCode",{parentName:"p"},"16"),", ",Object(a.b)("inlineCode",{parentName:"p"},"20"),", ",Object(a.b)("inlineCode",{parentName:"p"},"24"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"32"),"\npixels. These sizes refer to the width and height of the icon. You can import an\nicon component into your project by referring to its name and size:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { Add24 } from '@carbon/icons-react';\n")),Object(a.b)("p",null,"We also provide CommonJS and UMD files in the ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," and ",Object(a.b)("inlineCode",{parentName:"p"},"umd")," directories,\nrespectively."),Object(a.b)("p",null,"To import using CommonJS, you can do the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"const { Add24 } = require('@carbon/icons-react');\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: if you would like to find the import path for an icon, you can reference\nour\n",Object(a.b)("a",r({parentName:"em"},{href:"https://www.carbondesignsystem.com/guidelines/iconography/library"}),"Icon Library"))),Object(a.b)("h3",null,"Icon fill"),Object(a.b)("p",null,"All icons from the library support being styled by the ",Object(a.b)("inlineCode",{parentName:"p"},"fill")," property. You can\nchange the color of an icon by passing in a custom class name that sets this\nproperty (preferred), or by passing in an inline style. For example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-css"}),"// CSS custom class name to set the fill of the icon to `rebeccapurple`\nsvg.my-custom-class {\n  fill: rebeccapurple;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'import { Add16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Add16 aria-label="Add" className="my-custom-class" />\n    </button>\n  );\n}\n')),Object(a.b)("h4",null,"Two-tone icons"),Object(a.b)("p",null,"Certain icons in the library support two distinct fill colors. You can target\nthe inner path by using the ",Object(a.b)("inlineCode",{parentName:"p"},'[data-icon-path="inner-path"]')," attribute selector.\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-scss"}),"// CSS custom class name to set the fill of the icon to `yellow`\nsvg.outer-icon-fill {\n  fill: yellow;\n}\n\n// Use the `data-icon-path` attribute selector to target the inner path\n// where we want to set the fill to `black`. We also set `opacity` to `1` so\n// that this inner-path is visible.\nsvg.outer-icon-fill [data-icon-path='inner-path'] {\n  fill: black;\n  opacity: 1;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'import { WarningFilled16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return <WarningFilled16 aria-label="Add" className="my-custom-class" />;\n}\n')),Object(a.b)("h3",null,"Focus and ",Object(a.b)("inlineCode",{parentName:"h3"},"aria-label")),Object(a.b)("p",null,"By default, the icon components from ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/icons-react")," are treated as\ndecorative content. This means that we set ",Object(a.b)("inlineCode",{parentName:"p"},'aria-hidden="true"')," unless certain\nprops are passed to the component."),Object(a.b)("p",null,"If you would like the icon to be announced by a screen reader, you can supply an\n",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," or ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { Add16 } from '@carbon/icons-react';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Add16 aria-label=\"Add\" />\n    </button>\n  );\n}\n")),Object(a.b)("p",null,"Doing this will add the appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"role")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," node, as well."),Object(a.b)("p",null,"If you would like the ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," to receive focus, you will need to pass in a\n",Object(a.b)("inlineCode",{parentName:"p"},"tabIndex")," value. For example:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'import { Add16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return <Add16 aria-label="Add" tabIndex="0" />;\n}\n')),Object(a.b)("p",null,"Including ",Object(a.b)("inlineCode",{parentName:"p"},"tabIndex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby"),") will set the\ncorresponding ",Object(a.b)("inlineCode",{parentName:"p"},"tabindex")," on the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," and verify support in older\nbrowsers like Internet Explorer 11 by setting ",Object(a.b)("inlineCode",{parentName:"p"},"focusable")," to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h2",null,"Resources"),Object(a.b)(d,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(m,{subTitle:"Carbon icons package",href:"https://github.com/carbon-design-system/carbon/blob/master/packages/icons",mdxType:"ResourceCard"},Object(a.b)(j,{name:"bee",mdxType:"MdxIcon"}))),Object(a.b)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(m,{subTitle:"Icon package demo",href:"https://github.com/carbon-design-system/carbon/blob/master/packages/icons",mdxType:"ResourceCard"},Object(a.b)(j,{name:"bee",mdxType:"MdxIcon"})))))}h.isMDXComponent=!0},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
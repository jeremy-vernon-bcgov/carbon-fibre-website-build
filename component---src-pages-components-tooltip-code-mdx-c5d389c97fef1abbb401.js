(window.webpackJsonp=window.webpackJsonp||[]).push([[2059],{"013z":function(t,e,o){"use strict";var n=o("q1tI"),a=o.n(n),i=o("NmYn"),r=o.n(i),l=o("Wbzz"),c=o("Xrax"),s=o("a7k6"),b=o("TSYQ"),p=o.n(b),d=o("QH2O"),m=o("qKvR");var u=({title:t,tabs:e=[]})=>Object(m.b)("div",{className:p()(d.pageHeader,{[d.withTabs]:e.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},t))))),x=o("BAC9");var g=({relativePagePath:t,repository:e})=>{const{site:{siteMetadata:{repository:o}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:a,branch:i}=e||o,r=`${n}/edit/${i}${a}/src/pages${t}`;return n?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:r},"Edit this page on GitHub"))):null},h=o("FCXl"),y=o("I8xM");class f extends a.a.Component{render(){const{tabs:t,slug:e}=this.props,o=e.split("/").filter(Boolean).slice(-1)[0],n=t.map(t=>{const n=r()(t,{lower:!0,strict:!0}),a=n===o,i=new RegExp(o+"/?(#.*)?$"),c=e.replace(i,n);return Object(m.b)("li",{key:t,className:p()({[y.selectedItem]:a},y.listItem)},Object(m.b)(l.Link,{className:y.link,to:""+c},t))});return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},n))))))}}var T=f,O=o("MjG9");e.a=({pageContext:t,children:e,location:o,Title:n})=>{const{frontmatter:a={},relativePagePath:i,titleType:b}=t,{tabs:p,title:d,theme:x,description:y,keywords:f}=a,{site:{pathPrefix:j}}=Object(l.useStaticQuery)("2456312558"),v=j?o.pathname.replace(j,""):o.pathname,w=p?v.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:x,pageTitle:d,pageDescription:y,pageKeywords:f,titleType:b},Object(m.b)(u,{title:n?Object(m.b)(n,null):d,label:"label",tabs:p}),p&&Object(m.b)(T,{slug:v,tabs:p,currentTab:w}),Object(m.b)(O.a,{padded:!0},e,Object(m.b)(g,{relativePagePath:i})),Object(m.b)(h.a,{pageContext:t,location:o,slug:v,tabs:p,currentTab:w}),Object(m.b)(c.a,null))}},BAC9:function(t,e,o){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,o){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,o){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},i1Am:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return c})),o.d(e,"default",(function(){return f}));o("3bBZ"),o("q1tI");var n=o("7ljp"),a=o("013z"),i=o("42eT");o("qKvR");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}const c={},s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)},b=s("PageDescription"),p=s("Row"),d=s("Column"),m=s("ResourceCard"),u=s("MdxIcon"),x=s("ComponentDemo"),g=s("ComponentVariant"),h={_frontmatter:c},y=a.a;function f(t){let{components:e}=t,o=l(t,["components"]);return Object(n.b)(y,r({},h,o,{components:e,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Preview the tooltip component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),Object(n.b)("h2",null,"Documentation"),Object(n.b)(p,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/tooltip--default",mdxType:"ResourceCard"},Object(n.b)(u,{name:"react",mdxType:"MdxIcon"}))),Object(n.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip--basic",mdxType:"ResourceCard"},Object(n.b)(u,{name:"angular",mdxType:"MdxIcon"}))),Object(n.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-interactive-tootlip",mdxType:"ResourceCard"},Object(n.b)(u,{name:"vue",mdxType:"MdxIcon"})))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(x,{components:[{id:"tooltip",label:"Tooltip"},{id:"icon-tooltip",label:"Icon tooltip"},{id:"definition-tooltip",label:"Definition tooltip"}],scope:{Filter16:i.h},mdxType:"ComponentDemo"},Object(n.b)(g,{id:"tooltip",links:{React:"https://react.carbondesignsystem.com/?path=/story/tooltip--default-bottom",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-interactive-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip"},mdxType:"ComponentVariant"},'\n    <Tooltip\n      direction="bottom"\n      tabIndex={0}\n      triggerText="Tooltip label"\n    >\n      <p>\n        This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.\n      </p>\n      <div className="bx--tooltip__footer">\n        <Link href="#">Learn more</Link>\n        <Button size="small">\n          Create\n        </Button>\n      </div>\n    </Tooltip>\n  '),Object(n.b)(g,{id:"icon-tooltip",knobs:{TooltipIcon:["direction","align"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tooltipicon--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip-icon--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip"},mdxType:"ComponentVariant"},'\n    <TooltipIcon\n      tooltipText="Filter"\n    >\n      <Filter16/>\n    </TooltipIcon>\n  '),Object(n.b)(g,{id:"definition-tooltip",knobs:{TooltipDefinition:["direction","align"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tooltipdefinition--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip-definition--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-definition-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip"},mdxType:"ComponentVariant"},'\n    <TooltipDefinition\n      tooltipText="Brief description of the dotted, underlined word above."\n    >\n      Definition Tooltip\n    </TooltipDefinition>\n  ')))}f.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2051],{"013z":function(e,t,n){"use strict";var l=n("q1tI"),a=n.n(l),o=n("NmYn"),i=n.n(o),c=n("Wbzz"),s=n("Xrax"),r=n("a7k6"),b=n("TSYQ"),d=n.n(b),m=n("QH2O"),p=n("qKvR");var u=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:d()(m.pageHeader,{[m.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.text},e))))),h=n("BAC9");var x=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:a,branch:o}=t||n,i=`${l}/edit/${o}${a}/src/pages${e}`;return l?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},g=n("FCXl"),y=n("I8xM");class T extends a.a.Component{render(){const{tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],l=e.map(e=>{const l=i()(e,{lower:!0,strict:!0}),a=l===n,o=new RegExp(n+"/?(#.*)?$"),s=t.replace(o,l);return Object(p.b)("li",{key:e,className:d()({[y.selectedItem]:a},y.listItem)},Object(p.b)(c.Link,{className:y.link,to:""+s},e))});return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:y.list},l))))))}}var v=T,O=n("MjG9");t.a=({pageContext:e,children:t,location:n,Title:l})=>{const{frontmatter:a={},relativePagePath:o,titleType:b}=e,{tabs:d,title:m,theme:h,description:y,keywords:T}=a,{site:{pathPrefix:f}}=Object(c.useStaticQuery)("2456312558"),j=f?n.pathname.replace(f,""):n.pathname,k=d?j.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(p.b)(r.a,{tabs:d,homepage:!1,theme:h,pageTitle:m,pageDescription:y,pageKeywords:T,titleType:b},Object(p.b)(u,{title:l?Object(p.b)(l,null):m,label:"label",tabs:d}),d&&Object(p.b)(v,{slug:j,tabs:d,currentTab:k}),Object(p.b)(O.a,{padded:!0},t,Object(p.b)(x,{relativePagePath:o})),Object(p.b)(g.a,{pageContext:e,location:n,slug:j,tabs:d,currentTab:k}),Object(p.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},"E/4F":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return y}));n("3bBZ"),n("q1tI");var l=n("7ljp"),a=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)},r=s("PageDescription"),b=s("Row"),d=s("Column"),m=s("ResourceCard"),p=s("MdxIcon"),u=s("ComponentDemo"),h=s("ComponentVariant"),x={_frontmatter:c},g=a.a;function y(e){let{components:t}=e,n=i(e,["components"]);return Object(l.b)(g,o({},x,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(r,{mdxType:"PageDescription"},Object(l.b)("p",null,"Preview the tile component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),Object(l.b)("h2",null,"Documentation"),Object(l.b)(b,{className:"resource-card-group",mdxType:"Row"},Object(l.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)(m,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/tile--default",mdxType:"ResourceCard"},Object(l.b)(p,{name:"react",mdxType:"MdxIcon"}))),Object(l.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)(m,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--basic",mdxType:"ResourceCard"},Object(l.b)(p,{name:"angular",mdxType:"MdxIcon"}))),Object(l.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)(m,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--default",mdxType:"ResourceCard"},Object(l.b)(p,{name:"vue",mdxType:"MdxIcon"})))),Object(l.b)("h2",null,"Live demo"),Object(l.b)(u,{components:[{id:"tile",label:"Default tile"},{id:"clickable-tile",label:"Clickable tile"},{id:"radio-tile",label:"Radio tile"},{id:"selectable-tile",label:"Selectable tile"},{id:"expandable-tile",label:"Expandable tile"}],mdxType:"ComponentDemo"},Object(l.b)(h,{id:"tile",knobs:{Tile:["light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tile--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=tile"},mdxType:"ComponentVariant"},"\n    <Tile>\n      Default tile\n    </Tile>\n  "),Object(l.b)(h,{id:"clickable-tile",knobs:{ClickableTile:["light","clicked"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tile--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=tile"},mdxType:"ComponentVariant"},'\n    <ClickableTile\n      href="#"\n    >\n      Clickable tile\n    </ClickableTile>\n  '),Object(l.b)(h,{id:"radio-tile",knobs:{RadioTile:["light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tile--clickable",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--clickable",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--clickable",Vanilla:"https://the-carbon-components.netlify.com/?nav=tile"},mdxType:"ComponentVariant"},'\n    <TileGroup\n      defaultSelected="default-selected"\n      legend="Radio tile group"\n      name="tile-group"\n    >\n      <RadioTile\n        id="tile-1"\n        name="tiles"\n        tabIndex={0}\n        value="standard"\n      >\n        Radio tile\n      </RadioTile>\n      <RadioTile\n        id="tile-2"\n        name="tiles"\n        tabIndex={0}\n        value="default-selected"\n      >\n        Radio tile\n      </RadioTile>\n      <RadioTile\n        id="tile-3"\n        name="tiles"\n        tabIndex={0}\n        value="selected"\n      >\n        Radio tile\n      </RadioTile>\n    </TileGroup>\n  '),Object(l.b)(h,{id:"selectable-tile",knobs:{SelectableTile:["light","selected"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tile--multi-select",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--selectable",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--selectable",Vanilla:"https://the-carbon-components.netlify.com/?nav=tile"},mdxType:"ComponentVariant"},'\n    <div\n      aria-label="selectable tiles"\n      role="group"\n    >\n      <SelectableTile\n        id="tile-1"\n        name="tiles"\n        tabIndex={0}\n        title="title"\n        value="value"\n      >\n        Multiselect tile\n      </SelectableTile>\n      <SelectableTile\n        id="tile-2"\n        name="tiles"\n        tabIndex={0}\n        title="title"\n        value="value"\n      >\n        Multiselect tile\n      </SelectableTile>\n      <SelectableTile\n        id="tile-3"\n        name="tiles"\n        tabIndex={0}\n        title="title"\n        value="value"\n      >\n        Multiselect tile\n      </SelectableTile>\n    </div>\n  '),Object(l.b)(h,{id:"expandable-tile",knobs:{ExpandableTile:["light","expanded"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/tile--expandable",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tiles--expandable",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtile--expandable",Vanilla:"https://the-carbon-components.netlify.com/?nav=tile"},mdxType:"ComponentVariant"},"\n    <ExpandableTile\n      tabIndex={0}\n      tileCollapsedIconText=\"Interact to Expand tile\"\n      tileExpandedIconText=\"Interact to Collapse tile\"\n      tileMaxHeight={0}\n      tilePadding={0}\n    >\n      <TileAboveTheFoldContent>\n        <div style={{ height: '64px'}}>\n          Above the fold content here\n        </div>\n      </TileAboveTheFoldContent>\n      <TileBelowTheFoldContent>\n        <div style={{ height: '64px'}}>\n          Below the fold content here\n        </div>\n      </TileBelowTheFoldContent>\n    </ExpandableTile>\n  ")))}y.isMDXComponent=!0},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
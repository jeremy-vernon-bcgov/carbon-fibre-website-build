(window.webpackJsonp=window.webpackJsonp||[]).push([[2013],{"013z":function(t,e,r){"use strict";var n=r("q1tI"),u=r.n(n),s=r("NmYn"),l=r.n(s),i=r("Wbzz"),a=r("Xrax"),o=r("a7k6"),c=r("TSYQ"),d=r.n(c),b=r("QH2O"),m=r("qKvR");var p=({title:t,tabs:e=[]})=>Object(m.b)("div",{className:d()(b.pageHeader,{[b.withTabs]:e.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:b.text},t))))),L=r("BAC9");var g=({relativePagePath:t,repository:e})=>{const{site:{siteMetadata:{repository:r}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:u,branch:s}=e||r,l=`${n}/edit/${s}${u}/src/pages${t}`;return n?Object(m.b)("div",{className:"bx--row "+L.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:L.link,href:l},"Edit this page on GitHub"))):null},C=r("FCXl"),S=r("I8xM");class x extends u.a.Component{render(){const{tabs:t,slug:e}=this.props,r=e.split("/").filter(Boolean).slice(-1)[0],n=t.map(t=>{const n=l()(t,{lower:!0,strict:!0}),u=n===r,s=new RegExp(r+"/?(#.*)?$"),a=e.replace(s,n);return Object(m.b)("li",{key:t,className:d()({[S.selectedItem]:u},S.listItem)},Object(m.b)(i.Link,{className:S.link,to:""+a},t))});return Object(m.b)("div",{className:S.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:S.list},n))))))}}var h=x,w=r("MjG9");e.a=({pageContext:t,children:e,location:r,Title:n})=>{const{frontmatter:u={},relativePagePath:s,titleType:c}=t,{tabs:d,title:b,theme:L,description:S,keywords:x}=u,{site:{pathPrefix:y}}=Object(i.useStaticQuery)("2456312558"),v=y?r.pathname.replace(y,""):r.pathname,O=d?v.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:d,homepage:!1,theme:L,pageTitle:b,pageDescription:S,pageKeywords:x,titleType:c},Object(m.b)(p,{title:n?Object(m.b)(n,null):b,label:"label",tabs:d}),d&&Object(m.b)(h,{slug:v,tabs:d,currentTab:O}),Object(m.b)(w.a,{padded:!0},e,Object(m.b)(g,{relativePagePath:s})),Object(m.b)(C.a,{pageContext:t,location:r,slug:v,tabs:d,currentTab:O}),Object(m.b)(a.a,null))}},BAC9:function(t,e,r){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,r){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,r){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"t5+8":function(t,e,r){"use strict";r.r(e),r.d(e,"_frontmatter",(function(){return a})),r.d(e,"default",(function(){return x}));r("3bBZ"),r("q1tI");var n=r("7ljp"),u=r("013z"),s=r("Pet4");r("qKvR");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,u=function(t,e){if(null==t)return{};var r,n,u={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(u[r]=t[r]);return u}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(u[r]=t[r])}return u}const a={},o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)},c=o("PageDescription"),d=o("Row"),b=o("Column"),m=o("ResourceCard"),p=o("MdxIcon"),L=o("ComponentDemo"),g=o("ComponentVariant"),C={_frontmatter:a},S=u.a;function x(t){let{components:e}=t,r=i(t,["components"]);return Object(n.b)(S,l({},C,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Preview the structured list component with the React live demo. For detailed\ncode usage documentation, see the Storybooks for each framework below.")),Object(n.b)("h2",null,"Documentation"),Object(n.b)(d,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/structuredlist--simple",mdxType:"ResourceCard"},Object(n.b)(p,{name:"react",mdxType:"MdxIcon"}))),Object(n.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-structured-list--basic",mdxType:"ResourceCard"},Object(n.b)(p,{name:"angular",mdxType:"MdxIcon"}))),Object(n.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvstructuredlist--default",mdxType:"ResourceCard"},Object(n.b)(p,{name:"vue",mdxType:"MdxIcon"})))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(L,{components:[{id:"default-structured-list",label:"Default structured list"},{id:"select-structured-list",label:"Selectable structured list"}],scope:{CheckmarkFilled16:s.b},mdxType:"ComponentDemo"},Object(n.b)(g,{id:"default-structured-list",links:{React:"https://react.carbondesignsystem.com/?path=/story/structuredlist--simple",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-structured-list--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvstructuredlist--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=structured-list"},mdxType:"ComponentVariant"},'\n    <StructuredListWrapper ariaLabel="Structured list">\n      <StructuredListHead>\n        <StructuredListRow\n          head\n          tabIndex={0}\n        >\n          <StructuredListCell head>\n            ColumnA\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnB\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnC\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListHead>\n      <StructuredListBody>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListBody>\n    </StructuredListWrapper>\n  '),Object(n.b)(g,{id:"select-structured-list",links:{React:"https://react.carbondesignsystem.com/?path=/story/structuredlist--selection",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-structured-list--with-selection",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvstructuredlist--selectable-with-events",Vanilla:"https://the-carbon-components.netlify.com/?nav=structured-list"},mdxType:"ComponentVariant"},'\n    <StructuredListWrapper selection ariaLabel="Structured list">\n      <StructuredListHead>\n        <StructuredListRow\n          head\n          tabIndex={0}\n        >\n          <StructuredListCell head>\n            ColumnA\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnB\n          </StructuredListCell>\n          <StructuredListCell head>\n            ColumnC\n          </StructuredListCell>\n          <StructuredListCell head/>\n        </StructuredListRow>\n      </StructuredListHead>\n      <StructuredListBody>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 1\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-1"\n            value="row-1"\n            title="row-1"\n            name="row-1"\n            defaultChecked\n          />\n         <StructuredListCell>\n            <CheckmarkFilled16\n              className="bx--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled16>\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 2\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-2"\n            value="row-2"\n            title="row-2"\n            name="row-2"\n          />\n         <StructuredListCell>\n            <CheckmarkFilled16\n              className="bx--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled16>\n          </StructuredListCell>\n        </StructuredListRow>\n        <StructuredListRow tabIndex={0}>\n          <StructuredListCell>\n            Row 3\n          </StructuredListCell>\n          <StructuredListCell>\n            Row 3\n          </StructuredListCell>\n          <StructuredListCell>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n          </StructuredListCell>\n          <StructuredListInput\n            id="row-3"\n            value="row-3"\n            title="row-3"\n            name="row-3"\n          />\n         <StructuredListCell>\n            <CheckmarkFilled16\n              className="bx--structured-list-svg"\n              aria-label="select an option">\n              <title>select an option</title>\n            </CheckmarkFilled16>\n          </StructuredListCell>\n        </StructuredListRow>\n      </StructuredListBody>\n    </StructuredListWrapper>\n  ')))}x.isMDXComponent=!0}}]);
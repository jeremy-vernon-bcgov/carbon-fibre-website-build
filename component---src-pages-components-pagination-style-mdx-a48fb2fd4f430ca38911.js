(window.webpackJsonp=window.webpackJsonp||[]).push([[1990],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),o=a("a7k6"),d=a("TSYQ"),p=a.n(d),s=a("QH2O"),m=a("qKvR");var u=({title:t,tabs:e=[]})=>Object(m.b)("div",{className:p()(s.pageHeader,{[s.withTabs]:e.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:s.text},t))))),g=a("BAC9");var O=({relativePagePath:t,repository:e})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=e||a,r=`${n}/edit/${l}${b}/src/pages${t}`;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("I8xM");class x extends b.a.Component{render(){const{tabs:t,slug:e}=this.props,a=e.split("/").filter(Boolean).slice(-1)[0],n=t.map(t=>{const n=r()(t,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=e.replace(l,n);return Object(m.b)("li",{key:t,className:p()({[N.selectedItem]:b},N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+c},t))});return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},n))))))}}var f=x,h=a("MjG9");e.a=({pageContext:t,children:e,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:d}=t,{tabs:p,title:s,theme:g,description:N,keywords:x}=b,{site:{pathPrefix:y}}=Object(i.useStaticQuery)("2456312558"),A=y?a.pathname.replace(y,""):a.pathname,v=p?A.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:p,homepage:!1,theme:g,pageTitle:s,pageDescription:N,pageKeywords:x,titleType:d},Object(m.b)(u,{title:n?Object(m.b)(n,null):s,label:"label",tabs:p}),p&&Object(m.b)(f,{slug:A,tabs:p,currentTab:v}),Object(m.b)(h.a,{padded:!0},e,Object(m.b)(O,{relativePagePath:l})),Object(m.b)(j.a,{pageContext:t,location:a,slug:A,tabs:p,currentTab:v}),Object(m.b)(c.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Qs6u:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return i})),a.d(e,"default",(function(){return s}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function r(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}const i={},c=(o="Caption",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)});var o;const d={_frontmatter:i},p=b.a;function s(t){let{components:e}=t,a=r(t,["components"]);return Object(n.b)(p,l({},d,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"background-color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border-top"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination__text")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination__button-icon")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"Pagination text should be set in set in sentence case with the first letter of\neach word capitalized."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination__text")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12 / 0.75"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$caption-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The Pagination bar is most commonly used in data tables. The width can vary\ndepending on content and layout, but should span the entire width of the table\nit’s being paired with."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 / 3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1px"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left, padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination .bx--select-input")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-left, padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--pagination__button")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arrow")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"icon size"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"20 x 20px"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"–")))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABPUlEQVQY06WPzU7CQBCAhz149Ck0vIKv4ANYTDzoQY6+gndPetKToumJg5roSSMhkhgUBEFAKdqWbbdQ2m5/AIlBybrUGh+ASb7M7Ga+yQxAFApjMEtMvvFvsb28BekuiU3rg3xxUTLIOnXpSkHW1lpmbzXoBwL1PWE4+hC84UAoW3bCcR3h1XISjzd4w3iyBcbY3NQPBn2A5kISMuNhODBTbCxhFYu6io/uVS3V1IwTS9XEblsXA9MWXU4JE1FX2qm6bqQkpXvsEXu/55jzU592zP+Vz2c8efznV+NJOIwelyqGit9BNUpQ1jZRjbEY5dgcFpHjPHsEFT599OKOkPs1Qf3ID3Mlvgn5bCn8uL1+AKv2DrSuQFlSQbq4A7J3BngnDTrP7d1TqHJopQVvDRlk3uvzXnJVCH0rV4Uf+xnPuSVoxncAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing for pagination",title:"Structure and spacing for pagination",src:"/static/fdefb605fe82ff349b92b57566f0dba6/3cbba/pagination-style-1.png",srcSet:["/static/fdefb605fe82ff349b92b57566f0dba6/7fc1e/pagination-style-1.png 288w","/static/fdefb605fe82ff349b92b57566f0dba6/a5df1/pagination-style-1.png 576w","/static/fdefb605fe82ff349b92b57566f0dba6/3cbba/pagination-style-1.png 1152w","/static/fdefb605fe82ff349b92b57566f0dba6/0b124/pagination-style-1.png 1728w","/static/fdefb605fe82ff349b92b57566f0dba6/99571/pagination-style-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for Pagination | px / rem"))}s.isMDXComponent=!0}}]);
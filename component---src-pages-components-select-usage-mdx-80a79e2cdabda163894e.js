(window.webpackJsonp=window.webpackJsonp||[]).push([[2007],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("NmYn"),b=a.n(s),c=a("Wbzz"),o=a("Xrax"),i=a("a7k6"),r=a("TSYQ"),p=a.n(r),m=a("QH2O"),d=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(d.b)("div",{className:p()(m.pageHeader,{[m.withTabs]:t.length})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},e))))),g=a("BAC9");var h=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:l,branch:s}=t||a,b=`${n}/edit/${s}${l}/src/pages${e}`;return n?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("I8xM");class j extends l.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=b()(e,{lower:!0,strict:!0}),l=n===a,s=new RegExp(a+"/?(#.*)?$"),o=t.replace(s,n);return Object(d.b)("li",{key:e,className:p()({[f.selectedItem]:l},f.listItem)},Object(d.b)(c.Link,{className:f.link,to:""+o},e))});return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},n))))))}}var A=j,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:l={},relativePagePath:s,titleType:r}=e,{tabs:p,title:m,theme:g,description:f,keywords:j}=l,{site:{pathPrefix:x}}=Object(c.useStaticQuery)("2456312558"),w=x?a.pathname.replace(x,""):a.pathname,N=p?w.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"";return Object(d.b)(i.a,{tabs:p,homepage:!1,theme:g,pageTitle:m,pageDescription:f,pageKeywords:j,titleType:r},Object(d.b)(u,{title:n?Object(d.b)(n,null):m,label:"label",tabs:p}),p&&Object(d.b)(A,{slug:w,tabs:p,currentTab:N}),Object(d.b)(y.a,{padded:!0},t,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(O.a,{pageContext:e,location:a,slug:w,tabs:p,currentTab:N}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},i1Jl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return f}));a("3bBZ"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const c={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},i=o("PageDescription"),r=o("AnchorLinks"),p=o("AnchorLink"),m=o("ComponentDemo"),d=o("ComponentVariant"),u=o("Row"),g=o("Column"),h={_frontmatter:c},O=l.a;function f(e){let{components:t}=e,a=b(e,["components"]);return Object(n.b)(O,s({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The select component allows users to choose one option from a list. It is used\nin forms for users to submit data.")),Object(n.b)(r,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(p,{mdxType:"AnchorLink"},"Variations"),Object(n.b)(p,{mdxType:"AnchorLink"},"Best practices"),Object(n.b)(p,{mdxType:"AnchorLink"},"Accessibility"),Object(n.b)(p,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Select is a type of input that is used in forms, where a user is submitting data\nand chooses one option from a list."),Object(n.b)("h3",null,"Select versus Dropdown"),Object(n.b)("p",null,"While the select and dropdown components look similar, they have different\nfunctions."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use the select component inside a form where users are selecting from a list\nof options and submitting data."),Object(n.b)("li",{parentName:"ul"},"Use the dropdown component to filter or sort content on a page.")),Object(n.b)("p",null,"Another important difference between the two components is the underlying code.\nThe select component’s appearance will be determined by the browser being used,\nwhile the dropdown component can be styled as needed."),Object(n.b)("h2",null,"Live demo"),Object(n.b)(m,{components:[{id:"select",label:"Select"}],mdxType:"ComponentDemo"},Object(n.b)(d,{id:"select",knobs:{Select:["disabled","inline","invalid","light"],SelectItem:["disabled","hidden"],SelectItemGroup:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/select--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-select--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvselect--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=select"},mdxType:"ComponentVariant"},'\n<Select\n  defaultValue="placeholder-item"\n  helperText="Optional helper text"\n  id="select-1"\n  invalidText="A valid value is required"\n  labelText="Select"\n>\n  <SelectItem\n    text="Choose an option"\n    value="placeholder-item"\n  />\n  <SelectItemGroup\n    label="Category 1"\n  >\n    <SelectItem\n      text="Option 1"\n      value="option-1"\n    />\n    <SelectItem\n      text="Option 2"\n      value="option-2"\n    />\n  </SelectItemGroup>\n  <SelectItemGroup\n    label="Category 2"\n  >\n    <SelectItem\n      text="Option 3"\n      value="option-3"\n    />\n    <SelectItem\n      text="Option 4"\n      value="option-4"\n    />\n  </SelectItemGroup>\n</Select>\n  ')),Object(n.b)("h2",null,"Variations"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Select type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Purpose"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Default")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Typically used in forms with a variety of other components.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Small select")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"When vertical space is a concern, or select is being paired with a larger component like ",Object(n.b)("a",s({parentName:"td"},{href:"/components/data-table/usage"}),"data tables"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Inline select")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"When multiple selects are grouped together.")))),Object(n.b)("h4",null,"Small select"),Object(n.b)("p",null,"Small selects are commonly used in ",Object(n.b)("a",s({parentName:"p"},{href:"/components/data-table/usage"}),"data tables"),".\nWhen using a small select for a number selection, the increments in the select\nshould be 10, 25, 50 and 100. The maximum amount of items a user can see per\npage is 100."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQoz5WSO07EMBCGHfYItFRUIG0Eh+IanGJbCjpqzoDIFomUBkU5QN7vl3DikJh/THa1AQoYafTPjMff2E4YOzHOOfuLSSnPFr2TXyYWlarBtm0mhFCx7/vUqJGnaapZlqU5jqNy13U10zQ1DN5Q7zzPzwSBfqyATdOwsizV1Lqu7xG/FUXxUlWVgTUDNQM1pcj3qO+Rvw7DIBbg/AOIps0CfKKFruskNshxHJWfxriNynHS77xfgY+0ABWozVhTjhPNqKmYlPK+76l1AnAiJT8CwzBUwCzLHnBd6Xlei/fkcRxzAHie5yqOouhQewfw+DFWJ2zbluEDqBiTL7DhNgiCbZIkOuA6Nuuo64Ae9AaDL6dp2i13rumVyFe/AwDsPwbAOWBb6BX8mvwTC0Si/cyhTQAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a small select",title:"Example of a small select",src:"/static/507c49e5464a887be38252d0acbd577b/3cbba/select-usage-3.png",srcSet:["/static/507c49e5464a887be38252d0acbd577b/7fc1e/select-usage-3.png 288w","/static/507c49e5464a887be38252d0acbd577b/a5df1/select-usage-3.png 576w","/static/507c49e5464a887be38252d0acbd577b/3cbba/select-usage-3.png 1152w","/static/507c49e5464a887be38252d0acbd577b/392b1/select-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h4",null,"Inline select"),Object(n.b)("p",null,"Inline select is useful when you have multiple select fields within a form.\nInline selects have less visual weight on a page because they are borderless."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyElEQVQY041QywqDMBDUxHMP/ZQeKkKP/Wu/QHsRxBfqwRAK8f3Wm90ELBa0OLBMsswMuytJGyzL8mUomdc0TXKapqhtW1QUBSrLEtV1LXddJ7QrH2INPYNxHP8LHMcR7Pu+Ytv2w3XdJ6VUq6pKhQnvMJ0K02lN09yGYVC4tu/740C+Cud5ni9Zlpl5nr8ZYzGsTCE0hjeBPoPgF/yvW88uLMsSrOu6lCQJ9jwPgxnD7XAQBDgMQ9EjhGDDMH48h4ii6PQN97Qf8myWzeiW9fIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a small select",title:"Example of a small select",src:"/static/0e7f91451e6f36cb66a8f1146a776832/3cbba/select-usage-4.png",srcSet:["/static/0e7f91451e6f36cb66a8f1146a776832/7fc1e/select-usage-4.png 288w","/static/0e7f91451e6f36cb66a8f1146a776832/a5df1/select-usage-4.png 576w","/static/0e7f91451e6f36cb66a8f1146a776832/3cbba/select-usage-4.png 1152w","/static/0e7f91451e6f36cb66a8f1146a776832/392b1/select-usage-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Best practices"),Object(n.b)("h3",null,"Labels"),Object(n.b)("p",null,"Labels are essential to the usability of forms. Do not place a label inside a\n",Object(n.b)("em",{parentName:"p"},"select")," element. Use sentence case and no more than three words."),Object(n.b)("h3",null,"Validation"),Object(n.b)("p",null,"Real-time validation helps to streamline the process and keep data clean when\nthe user is filling out forms. For full guidelines, refer to the\n",Object(n.b)("a",s({parentName:"p"},{href:"/components/form/usage"}),"forms")," usage page."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA+0lEQVQoz2NgQAMn1q2H0KvWMJ7atp3x6OYtjPdPnmL8fPMW47tLlxnfnTvPcBKq9nnPRAaiwIV1GwiqOcpAJNgwdTqYXtM/QXTP4qWKm+bNV3p0+KjY9/MXBT88fCT84fBRvm1QtU+bOwkb+OTsORYQ/eL02Rn3L176df/SpecPL11++f7hw6dvT535+Pb6jX3XGBjAap5PnkHYwKfTZzOC6GdTZ+o9nD3P59GqtXZAF5oBDTN/s2ef5evDR3WvMjBA1LT1EOft558+ElRzk9gwfPfjO5j+8OkT45v//xlf3rnL+PzAIaa3J04xvQHSQMx4Aar2WQtmGAIAgvV8/1hyQj4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a small select",title:"Example of a small select",src:"/static/be5a78f2b2c03e1e8a030b2af53da740/3cbba/select-usage-1.png",srcSet:["/static/be5a78f2b2c03e1e8a030b2af53da740/7fc1e/select-usage-1.png 288w","/static/be5a78f2b2c03e1e8a030b2af53da740/a5df1/select-usage-1.png 576w","/static/be5a78f2b2c03e1e8a030b2af53da740/3cbba/select-usage-1.png 1152w","/static/be5a78f2b2c03e1e8a030b2af53da740/392b1/select-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Order"),Object(n.b)("p",null,"The order of the select list should be based on the frequency of use. If\napplicable, the list should be in increasing order relative to the content. In\ncases of forms, alternative orders such as alphabetical may be more fitting. A\nhorizontal rule can be used to group similar items together."),Object(n.b)("h2",null,"Accessibility"),Object(n.b)("h3",null,"Styling select dropdowns"),Object(n.b)("p",null,"To maximize accessibility, it is strongly recommended not to style select\ndropdowns. One of the\n",Object(n.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20-TECHS/G202.html"}),"WCAG 2.0 standards")," for\naccessibility is “ensuring keyboard control for all functionality”. CSS\nalternatives to select elements do not meet this requirement."),Object(n.b)("p",null,"While you can make a select element easily usable by a mouse, making it usable\nwith keyboard navigation is complex. The default select element should follow\nthis process:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"State"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Mouse"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Keyboard"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},":hover")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"move your cursor over the select element"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"use the tab key to focus the select element")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},":focus")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"click on the select element"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"press enter")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},":")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"move your cursor over the desired option"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"use the top and bottom arrow keys to pick an option")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),":select"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"click on the desired option"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"press enter")))),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}f.isMDXComponent=!0}}]);
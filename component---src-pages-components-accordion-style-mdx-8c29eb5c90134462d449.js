(window.webpackJsonp=window.webpackJsonp||[]).push([[1913],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),c=a("Wbzz"),i=a("Xrax"),o=a("a7k6"),d=a("TSYQ"),p=a.n(d),m=a("QH2O"),s=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:p()(m.pageHeader,{[m.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:m.text},e))))),O=a("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:r}=t||a,l=`${n}/edit/${r}${b}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+O.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},u=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=l()(e,{lower:!0,strict:!0}),b=n===a,r=new RegExp(a+"/?(#.*)?$"),i=t.replace(r,n);return Object(s.b)("li",{key:e,className:p()({[N.selectedItem]:b},N.listItem)},Object(s.b)(c.Link,{className:N.link,to:""+i},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var x=h,y=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:r,titleType:d}=e,{tabs:p,title:m,theme:O,description:N,keywords:h}=b,{site:{pathPrefix:f}}=Object(c.useStaticQuery)("2456312558"),C=f?a.pathname.replace(f,""):a.pathname,A=p?C.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"";return Object(s.b)(o.a,{tabs:p,homepage:!1,theme:O,pageTitle:m,pageDescription:N,pageKeywords:h,titleType:d},Object(s.b)(g,{title:n?Object(s.b)(n,null):m,label:"label",tabs:p}),p&&Object(s.b)(x,{slug:C,tabs:p,currentTab:A}),Object(s.b)(y.a,{padded:!0},t,Object(s.b)(j,{relativePagePath:r})),Object(s.b)(u.a,{pageContext:e,location:a,slug:C,tabs:p,currentTab:A}),Object(s.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},MbBs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const c={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},o=i("Row"),d=i("Column"),p=i("Caption"),m={_frontmatter:c},s=b.a;function g(e){let{components:t}=e,a=l(e,["components"]);return Object(n.b)(s,r({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__title")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__content")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__arrow")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__item")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"border-top"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-03"))))),Object(n.b)("h3",null,"Interactive states"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__heading:hover")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"background"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-ui"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__title:focus")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$focus"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__title:disabled")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"background"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__arrow:disabled")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))))),Object(n.b)(o,{mdxType:"Row"},Object(n.b)(d,{colLg:12,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVQoz42Sz2sTURDH9+2+zW4jxjZVjBf/AP8D8epNvAlebMGIRPBU6MmTWFtPQoMmCOZq8FJiVFAowRD0EJsfEJKWzW52s5sfdiNN2KgliuX53WcVezILH+btzDBvvjNPEKb4bNsWm82mNE2uwBgTksmkXK1WabfblSzL4rTbbd/Ser0updNpod/vH4PvBnKWe73ekk+n01nCZf55Gf6bQOFFo9HofDabDXqep5imqaKQikQVXamZTCbo50wmk+O1Wm0NsSQKrIO44zjxVqvlnxO4bAUxniukUimlUqkEEJDh5CCB20ajQTVNE8fjsTiV5G3NIhvbjKQ298mjF7sk8eozSbwcwA7Ik9cDcvvpvrCj25BvBjAeyXVdGVIpLqfokKJD/yxjJBSqiDDaNShjXwljJZGxd6DwD+99HznwdNkw2zOV8paIbiUUkQzDOIKu63zmgnCOkVNXPp6ORPdORG6xUCT285CD0JnYj9DswnD2/J1v6G5H/OTuzQyHQwXyZcz7CPAHuORLzxi5cP352aurzZOLj7/PXVsfh3/zJbwY98KX79rzCw9dLvfeyv25XC4XHI1GCuQpkMzBCNR8Pq8WCoU/T+ciJG+ATfAGvD3E/48hvkUsp08frK1KpVJJQgEuGy/iL+VyWSoWi365D/9dXF1zRCyFTrPkX7UceP+J2uAFAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"accordion interactives states",title:"accordion interactives states",src:"/static/cf218ac1b60d06b7a9349c3abcc24238/3cbba/accordion-style-2.png",srcSet:["/static/cf218ac1b60d06b7a9349c3abcc24238/7fc1e/accordion-style-2.png 288w","/static/cf218ac1b60d06b7a9349c3abcc24238/a5df1/accordion-style-2.png 576w","/static/cf218ac1b60d06b7a9349c3abcc24238/3cbba/accordion-style-2.png 1152w","/static/cf218ac1b60d06b7a9349c3abcc24238/0b124/accordion-style-2.png 1728w","/static/cf218ac1b60d06b7a9349c3abcc24238/0c3f5/accordion-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(p,{mdxType:"Caption"},"Examples of enabled, hover, focus, and disabled states"),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"All accordion titles are set in sentence case. See the accordion\n",Object(n.b)("a",r({parentName:"p"},{href:"/components/accordion/usage#content"}),"content guidelines")," for more details."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__title")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-long-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__content")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-long-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"There is no max-height for an open panel but an accordion may\n",Object(n.b)("a",r({parentName:"p"},{href:"/components/accordion/usage#scrolling-content"}),"scroll")," if constrained by\nvertical space. The width of an accordion varies based on the content, layout,\nand page design. The icon used in the header is a ",Object(n.b)("inlineCode",{parentName:"p"},"chevron"),"."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"px/rem"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__heading")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"40 / 2.5"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__item")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"border-top"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__arrow")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"size"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__arrow")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__title")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"margin-left"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__content")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"25%"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__content")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padding-top"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__content")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--accordion__item--active")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padding-bottom"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"24 / 1.5"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-06"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADLElEQVQ4y62UbUhTURjHj9u917l7ndtS812WWWCfwigyqMzXYfMFbaVZiImhpFC+TmsSlB9MCwqNKLUXCPqQYBDYB/2STpeyF51Op+7qNtPMCoNUcnk656ZLk/rUA39+/2fPOX/OPXdcANYr7EETkDXUgZTWZgAhBPrRUcCy7F81ZbWCUZsNNLJWbi8ovwJcdeubBfyXKikAoGXlK+d516+JQpruSs53vKag3cHr7Onha7VaXn9/Pw9To9HwN6hBM53JxFsaGedxm+tqGDBQ7eYKzoTQLa//3ZEzNerAiooKT/TI5BqEFKbT6cTk/CaScOU72ba4QN/o1R0t7+yOMckuuLsCxejOKnsn0mITimSo9QCAxEMSiUIi1ilwkSCw56WjYJVxOOXmwJBiPryAcgV2oBNe0g7I90UdjZB6MjL/gIBdfn5+YUiYu9c9Vjgmmu+lUXg9OnGJwx5bMT93fMtdPsOBg7q4kAMRexjKPUS6QxookUiC1hUsFov9MXGPvdTbOxhtY5TdbwWlNlucym6PcYW1gVnuMtXNH67UKj4WY5+cmM0kJsiF8fHxQrlcLlQoFB7YR0dH05hJqanCQ+HhdGlXJ1NptydUz8zEbnvjqq6JjMtZ7VFVqhzx2g/ogS5esKHV1dUt/bLTiXvq1eysRD05maJmWTnO2B8aBAArzCbeKO8LqwcNJ5PuZUhz5On0wKCeNBgNpF6PaDCQRqOR8zqdjmMf6mFfH79ximUqWTa5enpa7jrZUHChQH+ilq7p1BxOPp8bejYtTWK3OSjWMkFZB82UdWiUYk1jFIvIeSQLmi2PjZPtjhlaPTZ2sMZiicRZAQz9+5ELjx0k4hLjvZXnskTTi/OEAy4TnyHkfUFaQNrwn5DscImY/DxHOCHkf3n5hD9Sksv9wcuuqgAwR1aBPsE5YCp+xAyXtYrMJS0ic/ljz5Gih16mUw07h5VImXd8hk/f9uU8Ip6Zy9Ca0laRqfKpF96LAyevPv91OkfVi20vSQMC3Ay+Fz0NPvmMXponNHjn09hj9oAgtz/X4w8KV/rMetcPLNIS0vuN4T9qFq2Bm4RrEfEnfXeyaWt66DgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for accordion",title:"Structure and spacing measurements for accordion",src:"/static/2aa2aaffb6c819e1a860fcca39d4b0d4/3cbba/accordion-style-3.png",srcSet:["/static/2aa2aaffb6c819e1a860fcca39d4b0d4/7fc1e/accordion-style-3.png 288w","/static/2aa2aaffb6c819e1a860fcca39d4b0d4/a5df1/accordion-style-3.png 576w","/static/2aa2aaffb6c819e1a860fcca39d4b0d4/3cbba/accordion-style-3.png 1152w","/static/2aa2aaffb6c819e1a860fcca39d4b0d4/92c65/accordion-style-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(p,{mdxType:"Caption"},"Structure and spacing measurements for accordion | px / rem"),Object(n.b)("h3",null,"Margin right"),Object(n.b)("p",null,"Accordions have a variable right margin that changes based on its width.\nAccordions that are 640px and wider have a ",Object(n.b)("inlineCode",{parentName:"p"},"margin-right: 25%")," with the\npercentage being based off the width of the container it is placed in. At\nsmaller widths, the ",Object(n.b)("inlineCode",{parentName:"p"},"margin-right")," is a fixed size."),Object(n.b)("p",null,"Body copy, including titles, in an accordion always follows the margin-right\nrules. However, inputs and other components may still expand to the full width\nof the accordion panel."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Accordion width"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Margin-right"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"> 640"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"25%"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"420-640px"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"64px / 4rem"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-10"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"< 420"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16px / 1rem"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))))}g.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
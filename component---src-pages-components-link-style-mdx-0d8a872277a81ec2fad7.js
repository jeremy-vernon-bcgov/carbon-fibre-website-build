(window.webpackJsonp=window.webpackJsonp||[]).push([[1961],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),o=a("a7k6"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:d()(p.pageHeader,{[p.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},e))))),g=a("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:b,branch:l}=t||a,r=`${n}/edit/${l}${b}/src/pages${e}`;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},O=a("FCXl"),N=a("I8xM");class h extends b.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),b=n===a,l=new RegExp(a+"/?(#.*)?$"),c=t.replace(l,n);return Object(m.b)("li",{key:e,className:d()({[N.selectedItem]:b},N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+c},e))});return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},n))))))}}var y=h,x=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:b={},relativePagePath:l,titleType:s}=e,{tabs:d,title:p,theme:g,description:N,keywords:h}=b,{site:{pathPrefix:A}}=Object(i.useStaticQuery)("2456312558"),f=A?a.pathname.replace(A,""):a.pathname,v=d?f.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:d,homepage:!1,theme:g,pageTitle:p,pageDescription:N,pageKeywords:h,titleType:s},Object(m.b)(u,{title:n?Object(m.b)(n,null):p,label:"label",tabs:d}),d&&Object(m.b)(y,{slug:f,tabs:d,currentTab:v}),Object(m.b)(x.a,{padded:!0},t,Object(m.b)(j,{relativePagePath:l})),Object(m.b)(O.a,{pageContext:e,location:a,slug:f,tabs:d,currentTab:v}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xmTx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("3bBZ"),a("q1tI");var n=a("7ljp"),b=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}const i={},c=(o="Caption",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var o;const s={_frontmatter:i},d=b.a;function p(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(d,l({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$link-01"))))),Object(n.b)("h3",null,"Interactive states"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":hover")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$hover-primary-text"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":active")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":focus")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"border"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$focus"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":visited")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$visited-link"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},":disabled")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVQoz52ST0sCQRTAZ2d3RxCF/nySDh36BH2Agm7dVMSPoOseVFDwIBghXTp3LwwjEQ9BS4WRq7s7626mYpCQmXWQYBqXVqy1WHow8OYt85v3m7cAfEUoFAL/CV3XnQUbFo/HuXQ6zQ8GA0bTNNjSMWyqOjy+eICXtwY0DQwx1iE9Yy2MMWMzZuB5oCiK/mw2uzQej3lVVZCq6ahzryFCJI4MG3xD0RG9BNEz9mIdQFfKW8QHNgjnWjkYDFq5IAh8Pp/nCSHMXb0JX/oKPKp02XXx3bu7/0zrNaYmtyxtqjvVdirTDyASiVh5KpXyFQoF/2Qy4RWliej7oaeuSkFZhpArjsKQ0Zoq42/KU4aj03A4/IsvAWCHrIBN4nGtHAgErDwWi6FoNOotFotsu/sIX/t1eFjqsWvCm387N/QQcs3c1I35STOODqeJrZzJZLyJRGK1Wq16Op0O31Q01Gtjqiwz5EPj5NmUXSjb0J+R2zsAp6Xz5ZPiGXKlPD8U2iFIJpOAdghM0wSj0QhIkgQqlQpLa5aeLMuzqdqwhf/hoiiXy3/uF8UnG1I25FNclQ0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of enabled, hover, and disabled link states",title:"Example of enabled, hover, and disabled link states",src:"/static/9d5315b85c2b722b73952f10347c074d/3cbba/link-style-1.png",srcSet:["/static/9d5315b85c2b722b73952f10347c074d/7fc1e/link-style-1.png 288w","/static/9d5315b85c2b722b73952f10347c074d/a5df1/link-style-1.png 576w","/static/9d5315b85c2b722b73952f10347c074d/3cbba/link-style-1.png 1152w","/static/9d5315b85c2b722b73952f10347c074d/392b1/link-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Normal, hover, disabled link states"),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"Links should not exceed three words."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Text style"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("h3",null,"Recommended"),Object(n.b)("p",null,"Links can be grouped horizontally or vertically and must be underlined. The\nfollowing specs are not built into the Link component but are recommended by\ndesign as the proper distance between grouped Links."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--link")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"padding-right"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz2NgQALx8fEM6OD///8Mly5dYrh37x7DnTt3sGIQgNFwUFBQwEAuwDBs6tSpDL6+vmB2W1sbb2trq3BvTw9/U3OL8LSZc3ievnjLev7yDbYr128D8V22O3dus92+fQdI32HF6sLXr18z2NnZgdmnT59mPHLoIOPOA8cZ/9+czAjyMipuYbh64x7j3Tu3GYGGMN6+fRu7K0EgNDQUVUDlP5vRgkfyFsseyuvNeSDtsPq5AoPcf3Z0fTBD4YCNjY0hISEBzJaXl2cUlldmlAJxXCYyMzdN52dqn8HL0DyDm617KSdRYbhw4UIGf39/MLujo4O3q6tTqKu7V2BiV73g/6ebWP///8Py/+0j1v9vHrI+uXuF7fbNW6DwA4bjbVasXgaFjaurK9z5h05dA4bdKgbdyrcs2kWv2XY9PQ9SxJALDcfHQHz78jWGO/fu4k42IBAcHAxhSPyH0En/xbnjvqq+kvHnvKCawntBJZn7IggrJrLh9fLu3bvhyWbGjBkMIpkfoQb+YwNiLpDxZ7SzGC9oZTBc1EpnvKiTAZa+VjcPvwtRQNJ/vNIX1VOxigMAvefyz+UPkU0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Link structure and spacing measurements",title:"Link structure and spacing measurements",src:"/static/f646f0c33af35ddb8c5aeb920b82e191/3cbba/link-style-2.png",srcSet:["/static/f646f0c33af35ddb8c5aeb920b82e191/7fc1e/link-style-2.png 288w","/static/f646f0c33af35ddb8c5aeb920b82e191/a5df1/link-style-2.png 576w","/static/f646f0c33af35ddb8c5aeb920b82e191/3cbba/link-style-2.png 1152w","/static/f646f0c33af35ddb8c5aeb920b82e191/392b1/link-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for Link | px / rem"))}p.isMDXComponent=!0}}]);
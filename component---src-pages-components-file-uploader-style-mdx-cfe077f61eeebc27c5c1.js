(window.webpackJsonp=window.webpackJsonp||[]).push([[1949],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),b=a("NmYn"),r=a.n(b),i=a("Wbzz"),c=a("Xrax"),d=a("a7k6"),o=a("TSYQ"),p=a.n(o),m=a("QH2O"),s=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(s.b)("div",{className:p()(m.pageHeader,{[m.withTabs]:t.length})},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:m.text},e))))),O=a("BAC9");var j=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:l,branch:b}=t||a,r=`${n}/edit/${b}${l}/src/pages${e}`;return n?Object(s.b)("div",{className:"bx--row "+O.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:O.link,href:r},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("I8xM");class h extends l.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),l=n===a,b=new RegExp(a+"/?(#.*)?$"),c=t.replace(b,n);return Object(s.b)("li",{key:e,className:p()({[N.selectedItem]:l},N.listItem)},Object(s.b)(i.Link,{className:N.link,to:""+c},e))});return Object(s.b)("div",{className:N.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:N.list},n))))))}}var f=h,x=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:l={},relativePagePath:b,titleType:o}=e,{tabs:p,title:m,theme:O,description:N,keywords:h}=l,{site:{pathPrefix:y}}=Object(i.useStaticQuery)("2456312558"),C=y?a.pathname.replace(y,""):a.pathname,w=p?C.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"";return Object(s.b)(d.a,{tabs:p,homepage:!1,theme:O,pageTitle:m,pageDescription:N,pageKeywords:h,titleType:o},Object(s.b)(u,{title:n?Object(s.b)(n,null):m,label:"label",tabs:p}),p&&Object(s.b)(f,{slug:C,tabs:p,currentTab:w}),Object(s.b)(x.a,{padded:!0},t,Object(s.b)(j,{relativePagePath:b})),Object(s.b)(g.a,{pageContext:e,location:a,slug:C,tabs:p,currentTab:w}),Object(s.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},N81k:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));a("3bBZ"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={},c=(d="Caption",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var d;const o={_frontmatter:i},p=l.a;function m(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(p,b({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Color"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label-description")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-filename")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$text-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file__selected-file")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"background"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$ui-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-close")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"fill"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$icon-01"))))),Object(n.b)("h3",null,"Interactive states"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Color token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"File name: invalid"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$disabled-02"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Error message"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"text color"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$support-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-filename")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"border-bottom"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$support-01"))))),Object(n.b)("h2",null,"Typography"),Object(n.b)("p",null,"The file uploader label and instruction text should be set in sentence case,\nwith only the first letter of the first word in the sentence capitalized."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Font-size (px/rem)"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Font-weight"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Type token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Semi-bold / 600"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$heading-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--label-description")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-filename")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"14 / 0.875"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Regular / 400"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$body-short-01"))))),Object(n.b)("h2",null,"Structure"),Object(n.b)("p",null,"The width of an uploaded file varies based on the content and layout of a\ndesign. Refer to the ",Object(n.b)("a",b({parentName:"p"},{href:"/components/button/usage"}),"button")," guidelines for usage and\nstyling of the “Add files” button."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-filename")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"40 / 2.5"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-filename")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"224 / 14"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file__selected-file")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"padding-left"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-03"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file__selected-file")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"margin-bottom"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"8 / 0.5"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))),Object(n.b)("div",{className:"image--fixed"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAADVklEQVQ4y42Ta0gUURTHz6RlLx8V7m5BpdWamUXPD0EvKCoIwtLG0QqM0FXL7IFED2rLssjsgYl9iuhTGIREUGgvK6PHZu4qpa27s+7szM5rnd0207K8zdw00FbYA5dzOPfwm/85cw/AgJnNZtDr9TjW/PAzmA/bLqzuHfGusLAQ0tLSgKIoIEkS5zQ/GIdjo8ZOiIiaFDc5KjomOmr4ZVigs2t6YcuqQ4QWZ645Z5yXvNI4LWH2rJmzUxK3bssYk0VRo7dvJ6NUWGRYCutSeuAMWYzjsoyT8cfTFxtKMgzxt7NhPEWmx5Nk5hQVoFNPTFjAfZt/wV7KN0qL95P+XRtzXWnGg9Zls4qEBQihIbUP29pxJ1r+niCEBibmIkgsRLidBBOqnHsEoekliJ1YgFoBOkcPr/cU3wDLJBJsxj1gnZuLc4Me2/H0Hji7sw8DS6m+62UH+iuO0ch46i5a/hshPUK/4llF0TX7A/qG3u6Y4R8YAtNsra8G3rI+DKzjhMuCX0FexhnkOeYH7aL7u2QZyd3dfc2ijF58oe9WAES2rjgYa00xRauwyP+gVw4FwIG8eIb37PJFpyzafJL8RJTkBlGSnn9VlKfeYPDFSy/vqHd7KlMBiA7qfOTHJUURIVu+eFqCD0iI0OL7LvHSJ3dnF+NyfWYYxk7TtF1V+EUMBu2Nouh/xnK3nkJS7Of1R8eN2HJFiQKfEI8V1jrkcjvPdQgc1yiI4jvO630XUJQ3fDD4/pUoeh7zfJVW91PuIuqqakP/lNNlLFiQhBU+YMTydobpYRnGxbKsp9Pt9ig+n0dV6HktCL3PJPEmBvZ8I2q+fw39bK4eDkD7wAxr7fI1pyS4FEl+qyps4nmhSZ2hRVXY3ChJ4hNJqsZAf4Co4bxY2X8tA4qFRqbr7wwlztRK0xZnR8cjN8PUO5zOenWG9eK3YN0rL/dGbdms1fUFAsQdlg2tcKy5AgZfP+SY4kZcqXUbYyEzO+7f9hTlha6zJQ0MVr8DbCkm/cdUk8EyP29a08J8nSXVpLMu2mtoWVqksy0smNoyP9/QNiMHr19L8kjAeSbsW3VZYF19hGjJr4S2TScIZ3E1OPKuQfu2UmDzq8CWXU40bzhBNMzZjeubFhQM4fwByNzC7svhStEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for file uploader",title:"Structure and spacing measurements for file uploader",src:"/static/dc0381aee571b331604945d7ba1ef970/377f4/file-uploader-style-1.png",srcSet:["/static/dc0381aee571b331604945d7ba1ef970/7fc1e/file-uploader-style-1.png 288w","/static/dc0381aee571b331604945d7ba1ef970/a5df1/file-uploader-style-1.png 576w","/static/dc0381aee571b331604945d7ba1ef970/377f4/file-uploader-style-1.png 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(c,{mdxType:"Caption"},"Structure and spacing measurements for file uploader | px / rem"),Object(n.b)("h3",null,"Recommended"),Object(n.b)("p",null,"The following specs are not built into the file uploader component but are\nrecommended by design as the proper amount between file uploader elements."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Class"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"px / rem"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Spacing token"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-close")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"height, width"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"–")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},".bx--file-close")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"margin-left, margin-right"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"16 / 1"),Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"$spacing-05"))))))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
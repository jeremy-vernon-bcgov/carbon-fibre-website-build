(window.webpackJsonp=window.webpackJsonp||[]).push([[2089],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),c=a("NmYn"),r=a.n(c),s=a("Wbzz"),b=a("Xrax"),i=a("a7k6"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a("qKvR");var u=({title:e,tabs:t=[]})=>Object(p.b)("div",{className:d()(m.pageHeader,{[m.withTabs]:t.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.text},e))))),g=a("BAC9");var h=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:o,branch:c}=t||a,r=`${n}/edit/${c}${o}/src/pages${e}`;return n?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},x=a("FCXl"),y=a("I8xM");class O extends o.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=r()(e,{lower:!0,strict:!0}),o=n===a,c=new RegExp(a+"/?(#.*)?$"),b=t.replace(c,n);return Object(p.b)("li",{key:e,className:d()({[y.selectedItem]:o},y.listItem)},Object(p.b)(s.Link,{className:y.link,to:""+b},e))});return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:y.list},n))))))}}var j=O,f=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:n})=>{const{frontmatter:o={},relativePagePath:c,titleType:l}=e,{tabs:d,title:m,theme:g,description:y,keywords:O}=o,{site:{pathPrefix:A}}=Object(s.useStaticQuery)("2456312558"),k=A?a.pathname.replace(A,""):a.pathname,T=d?k.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"";return Object(p.b)(i.a,{tabs:d,homepage:!1,theme:g,pageTitle:m,pageDescription:y,pageKeywords:O,titleType:l},Object(p.b)(u,{title:n?Object(p.b)(n,null):m,label:"label",tabs:d}),d&&Object(p.b)(j,{slug:k,tabs:d,currentTab:T}),Object(p.b)(f.a,{padded:!0},t,Object(p.b)(h,{relativePagePath:c})),Object(p.b)(x.a,{pageContext:e,location:a,slug:k,tabs:d,currentTab:T}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},PEJv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return y}));a("3bBZ"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},i=b("PageDescription"),l=b("AnchorLinks"),d=b("AnchorLink"),m=b("Row"),p=b("Column"),u=b("ResourceCard"),g=b("MdxIcon"),h={_frontmatter:s},x=o.a;function y(e){let{components:t}=e,a=r(e,["components"]);return Object(n.b)(x,c({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"Everything you need to learn about and work with Carbon, Sketch libraries and\ntemplates, color palettes, GitHub repos, and design tools.")),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(d,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(d,{mdxType:"AnchorLink"},"Elements"),Object(n.b)(d,{mdxType:"AnchorLink"},"Extensions"),Object(n.b)(d,{mdxType:"AnchorLink"},"Fonts"),Object(n.b)(d,{mdxType:"AnchorLink"},"GitHub repos")),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Carbon expresses the ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/design/language/"}),"IBM Design Language"),"\nin product and delivers it through tools for designers and developers including\nguidance, tooling, components, and support. Take the time to read the design\nlanguage site so that you fully understand what drives IBM’s design philosophy\nand principles, and can make informed decisions in your product design work."),Object(n.b)("p",null,"To use the Sketch libraries you’ll find here, you need the ",Object(n.b)("strong",{parentName:"p"},"most recent\nversion")," of ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.sketch.com/"}),"Sketch")," installed. If you’re new to the\ndesign kit, visit the ",Object(n.b)("a",c({parentName:"p"},{href:"/designing/kits/sketch"}),"Design kits")," page."),Object(n.b)("h2",null,"Elements"),Object(n.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"RGB color palettes (.ase and .clr)",href:"https://github.com/carbon-design-system/carbon/raw/master/packages/colors/artifacts/IBM_Colors.zip",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"560px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVQ4y52Se0zTVxTHj/RdKcJQdKBFQIYKxoABzRa2uT9cJmxiMmeZGw9DImWbmUYe5Y0wHOpEIMKQGEW0POY2siUScCBvFkbGgL5LgdJ3aekb2v5+LbtE4/bfkt187sn3nHu+uTc3B+x2x8b/Wg6HA6w2G1JerxeF/+Ll8nhwr9djtdrAZLKg3OnEtRpcrcL1OtxsxuVLm6zoNytiISYRYYYVbGHeKRKu8wU6s9nucrkMhlUwGFc3NnCV0l1wEbuYhV0rxTq52Adv4yfewq9XYuzz9kCaZSfDUvedI+7QPJ3M3RFYOzW17HI51Got6PUG7wa2LHchZ1YqVpaHtd13J8bibx7CKzhY2lkbAUxUMNdU2cNC2wEqKeQbY2Myu90il6tAq9V7PC6VYr2qCC++jNdfx35+4mZ9uHHm5Eb9DfxSzlr4rvU3Qtw3a3QJ8XeDApsi9raMj88bV42yRTmoNTq326lW25sbDfW1hocPVsdGjbduLN/8VvFrt/6nJ4tVV2fLSnq7uyevVXfm5d4vKW6bmZWoNVrJ/AIolRqPx/nXtCmAIfQB/v590qrKeQI8A+hjnZlJZf0CkA1wKi/3XigzBeAonXq8v39Co9UIRRJQKNS4Z336TxODIgTg7WNKK8qkyIn4OGXu9OnbAEkAKZe+vrt7dzLAETI5sffZqFKt4glEsKxQud1rfJ4p8ZgsNkZ6KmmpuWkpLmbi8MFxdvZw9oW6yPAvoyK/qq5uf+/dnMiIs7GH058/n1iSy2d5AlheVqIhM5utBoMFYTRaTCar0WiVLSp4fAFfIJrjCRF8oXiOL3yhhSKxWCKdmeOBXK60WOxoVCxWK9qbWG1yhZIvEPJFYuQRiDZ5JRDowSidnpkDrU6FYY51p9XptCFcrjWtXiORiaULEqkM/agUCRQ3hUzyCpTyhTzo65OMDK8MD2mHh/RI9PTMdnQMcbmDXT+MdnaOPGrtb+8Y5j4efPRwoKNrpBMV/2EIIpg9DPJUAP13f/qUH7WVRirw21rKjLhFI3EY9JLo+JagXdUo3R/3/TZGGY1cSKcUbaUWUYiFzJAKYL7+lLpl0pf0B43QSiHmAVw+kNCSz9W9tv2bj74YZHEm94TXshukydkD2/zKiZBHJhRQCAUEyA8OKoPQ4Kc0n2k6qZVCyKWSirbAlZNZv+W2qY8ldUXFNbMKJ6OP3suukySm/EgjFZJ9OBQCh0rkEKEgZGc5urmXBI/JPlfQARHyGb7laZUzJzL6Uounwg40nK/hJ18YQPH9zL4A/0rUsOn34RCgIDioHMJDG+nkQj96EYNW7EspDAyoCIuqpRLyIg7WxcQ3x73zwN+vNDqh+cjx1h3br6IGBq0INSPL3j0VwM5pSk+7k5HR+AKkPz/XkJnZ9Nmn9edYdamf1Kan33kp/t2W3shmN/8NrhDb+/RNhusAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ase",title:"ase",src:"/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png",srcSet:["/static/cde57da39cf470f47832ecc5eb6899c0/7fc1e/ase.png 288w","/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png 560w"],sizes:"(max-width: 560px) 100vw, 560px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"IBM Design Language library",href:"sketch://add-library/cloud/nwqmk",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"IBM Icons (16px, 20px) library",href:"sketch://add-library/cloud/KW2yr",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"IBM Icons (24px, 32px) library",href:"sketch://add-library/cloud/2bwkM",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"IBM Grid template",href:"https://www.sketch.com/s/3a3f3f2d-94d7-4c16-8e2e-88ba80a6382e",actionIcon:"launch",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"Color contrast checker",href:"https://marijohannessen.github.io/color-contrast-checker/",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVQ4y0WUCVBWVRiGL8jygwtGmpoKMy5YjrsO2oimjKZluGsZ5jKpoRhpKpaNG1nmVg6CpSOGprhliWsumEZuuCtYuGeCOgoobvzLfZ8OP1pn5s6cuXPOM+97vu97rS1lvhb0scrXeTugkvVslRVZzT0F/kn2ZccxnQsu5WiwR/uDCrU9cIs2+I1UmlW9/JwWp1hM8/Up3zM1wLISaOIFZOHwwpxPrXoeZ+AGlVaDstpwOxzyG8KpRnC4ARysD7tqovQqt7XEb8JzAUyq5Pt8b60l0As75PTpel2VS+BleBohFbd2qbCDrStR4nwn6VhHaX+kh60t3Kw38JU1YLZjp8ZbQV7oOF9f6xvb3wtb7vSJylQV5RLOPVo58URJj3qiu32lG4Ok/MHi1ECRHSN2dkPrOtikNnWywLj42HFATa3/FY58aIUm2cGFqwljn9q48onmCf2Fc7h0P87YTkBXJ0DuR3B0NOyNFRtiYKlRntTMyeRaEBuQ/B+wvycgeSK1WaAWzg0GdliDdJMx8thT4MksVDQXbs5D+V/CyemQZeAbR4ilvY3ljiI+QgwKgW4+7aw6D61akXaV+4NpRKI62qnqp20arbP6jBLmg/t7VJqO7qw2KleiM0tg/xwD/ARSh4kZb0JcWxcD6kKUI91yuP1j61OTzjR3D1M3zdRQ/cAk9msel0mjTD+bau9Gxfvgn53o3HoDXArrZ0NyPEwz7/pBJ5tejaFN1QIrwBOeUoeWtFMXd4wGaBwf8rWms54UjmgTtzmA7DPoUR4qPAHn9qB9a9CaRbDQPMnk90VsNxHdDF4JleVQ1K4w+tBBwz19maixJJGkFFYog13s4bxOU8pNcBUb4CV0Mhvt2AQrklHSp2jscOj7hmjfHOq9aBvgu3vCiDfAzz39tEjxxvAcMklTNjuVxyluUagyyh4JXXtgmjsfbf4NpWSgaQth5CTU8z3RsivUiLCtQE1Kq8s8IpXq7q0MjeFXZiqH73SJXyjikO3hwn24dkWUnDE1yrJhXRF8m4sSjf1hq0X3eaLZBBQ6WJafFsW9xGpasdndw5RiuE4rUddZaIyucomt90wN8sUfh0TeXlGwGR4uB88cJyTcgsEnpde320SkQbUviizLXtuomjKdEWTTSbkaQIF5xydMf2pEmPNpF0RGtumSzWLvj3BimbhoBN1JNC06EuntxxB53U3YaRSUmeltbIdyNtalgNbcdXWXiyEPUfwNMe2c+OogLPpJLE4V6QvEtiT4fYo4O1q62l+61xk5m8pNqAtVuvJWxajoWpOqlLjMuBNZjKfHVfHOKWlUFkrYKCYvFYlmQOaYXl4Wr/Ih0e7+6IipQ14rOUtNT5cEsbVC3eNSbzj4ORnxgrHZ8CK0y5E7ejfErDNPlIJiZ6KhY2DsEDRzIFpshiPdhM+WlnIeMWl2vLL+/sty1axQNx4r5GqxNyn8LmhcyHEI3wvN1sjdPhl35xnY0XEoujfq3QWNisIztS2uuU1MJNaBjMq6vMOiQfn9HH89C+g/XVboJZcX6rudrsGrlFsjBcJmQeOx8Go/87WHtk2gl8naEcZiQvXyKCR9vkVI+b3dAVTA/ApVAfXIqpzz7GcMvn4zGBIUx5aq/bge8hrOkHBUqxoPWlXhbI9AkmN9aPM8rdb54xWzK1jWv7eeA44S7vPdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"color contrast icon",title:"color contrast icon",src:"/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png",srcSet:["/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(n.b)("h2",null,"Extensions"),Object(n.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"Data visualization master Sketch file",href:"https://www.sketch.com/s/1a36060a-7a5d-4ddb-aab1-639caa1f74d4",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"Carbon mobile Sketch kit",href:"https://www.sketch.com/s/a3343128-adb6-489c-9e62-709d89ba76e9",actionIcon:"launch",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"UI Shell template",href:"https://www.sketch.com/s/6a8e1d7b-f00a-4d8d-9d83-79ecf4dc12a0",actionIcon:"launch",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"}))),Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"Text toolbar pattern library",href:"sketch://add-library/cloud/f32b7e90-d97e-48ef-ae53-beabf75f5846",actionIcon:"download",mdxType:"ResourceCard"},Object(n.b)(g,{name:"sketch",mdxType:"MdxIcon"})))),Object(n.b)("h2",null,"Fonts"),Object(n.b)("p",null,"Carbon uses the open-source typeface ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm/plex"}),"IBM Plex")," –\ncarefully designed to meet IBM’s needs as a global technology company and\nreflect IBM’s spirit, beliefs, and design principles."),Object(n.b)("h2",null,"GitHub repos"),Object(n.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"Carbon design kit",href:"https://github.com/carbon-design-system/carbon-design-kit",mdxType:"ResourceCard"},Object(n.b)(g,{name:"github",mdxType:"MdxIcon"}))),Object(n.b)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(u,{subTitle:"IBM Design Language and Icon Kits",href:"https://github.com/IBM/design-kit",mdxType:"ResourceCard"},Object(n.b)(g,{name:"github",mdxType:"MdxIcon"})))),Object(n.b)("br",null))}y.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
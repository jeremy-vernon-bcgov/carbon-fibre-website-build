(window.webpackJsonp=window.webpackJsonp||[]).push([[2085],{"013z":function(e,a,t){"use strict";var l=t("q1tI"),i=t.n(l),o=t("NmYn"),r=t.n(o),n=t("Wbzz"),c=t("Xrax"),s=t("a7k6"),b=t("TSYQ"),g=t.n(b),p=t("QH2O"),d=t("qKvR");var m=({title:e,tabs:a=[]})=>Object(d.b)("div",{className:g()(p.pageHeader,{[p.withTabs]:a.length})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},e))))),A=t("BAC9");var u=({relativePagePath:e,repository:a})=>{const{site:{siteMetadata:{repository:t}}}=Object(n.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:o}=a||t,r=`${l}/edit/${o}${i}/src/pages${e}`;return l?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},f=t("FCXl"),h=t("I8xM");class y extends i.a.Component{render(){const{tabs:e,slug:a}=this.props,t=a.split("/").filter(Boolean).slice(-1)[0],l=e.map(e=>{const l=r()(e,{lower:!0,strict:!0}),i=l===t,o=new RegExp(t+"/?(#.*)?$"),c=a.replace(o,l);return Object(d.b)("li",{key:e,className:g()({[h.selectedItem]:i},h.listItem)},Object(d.b)(n.Link,{className:h.link,to:""+c},e))});return Object(d.b)("div",{className:h.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:h.list},l))))))}}var x=y,w=t("MjG9");a.a=({pageContext:e,children:a,location:t,Title:l})=>{const{frontmatter:i={},relativePagePath:o,titleType:b}=e,{tabs:g,title:p,theme:A,description:h,keywords:y}=i,{site:{pathPrefix:O}}=Object(n.useStaticQuery)("2456312558"),j=O?t.pathname.replace(O,""):t.pathname,v=g?j.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:g,homepage:!1,theme:A,pageTitle:p,pageDescription:h,pageKeywords:y,titleType:b},Object(d.b)(m,{title:l?Object(d.b)(l,null):p,label:"label",tabs:g}),g&&Object(d.b)(x,{slug:j,tabs:g,currentTab:v}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(u,{relativePagePath:o})),Object(d.b)(f.a,{pageContext:e,location:t,slug:j,tabs:g,currentTab:v}),Object(d.b)(c.a,null))}},"2d7g":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return n})),t.d(a,"default",(function(){return x}));t("3bBZ"),t("q1tI");var l=t("7ljp"),i=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,l,i=function(e,a){if(null==e)return{};var t,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const n={},c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",a)},s=c("PageDescription"),b=c("InlineNotification"),g=c("AnchorLinks"),p=c("AnchorLink"),d=c("ColorPalette"),m=c("Row"),A=c("Column"),u=c("ImageGallery"),f=c("ImageGalleryImage"),h={_frontmatter:n},y=i.a;function x(e){let{components:a}=e,t=r(e,["components"]);return Object(l.b)(y,o({},h,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"PageDescription"},Object(l.b)("p",null,"The color palette for data visualizations is a select subset of the IBM Design\nLanguage color palette. It is designed to maximize accessibility and harmony\nwithin a page.")),Object(l.b)(b,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," This guidance is a work in progress. To see our roadmap, make feature\nrequests, or contribute, please go to carbon-charts\n",Object(l.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-charts"}),"GitHub repository"),".")),Object(l.b)(g,{mdxType:"AnchorLinks"},Object(l.b)(p,{mdxType:"AnchorLink"},"Categorical palettes"),Object(l.b)(p,{mdxType:"AnchorLink"},"Sequential palettes"),Object(l.b)(p,{mdxType:"AnchorLink"},"Alert palette"),Object(l.b)(p,{mdxType:"AnchorLink"},"Gradient use"),Object(l.b)(p,{mdxType:"AnchorLink"},"Color in action")),Object(l.b)("h2",null,"Categorical palettes"),Object(l.b)("p",null,"Categorical (or qualitative) palettes are best when you want to distinguish\ndiscrete categories of data that do not have an inherent correlation."),Object(l.b)("p",null,"The colors of this palette should be applied in sequence strictly as described\nbelow. The sequence is carefully curated to maximize contrast between\nneighboring colors to help with visual differentiation."),Object(l.b)(d,{type:"categorical",mdxType:"ColorPalette"}),Object(l.b)("p",null,"You can override the categorical sequence with one of the following palettes if\nthe exact number of data categories is predictable."),Object(l.b)(d,{type:"grouped",mdxType:"ColorPalette"}),Object(l.b)("h2",null,"Sequential palettes"),Object(l.b)("h3",null,"Monochromatic"),Object(l.b)("p",null,"The monochromatic palettes are good for relationship charts and trend charts. In\nlight themes, the darkest color denotes the largest values. In dark themes, the\nlightest color denotes the largest values."),Object(l.b)(d,{type:"sequential",isMono:!0,mdxType:"ColorPalette"}),Object(l.b)("h3",null,"Diverging palettes"),Object(l.b)("p",null,"Please note that diverging palettes do not differentiate between light and dark\nthemes."),Object(l.b)("h4",null,"Palette 1"),Object(l.b)("p",null,"The red-cyan palette has a natural association with temperature. Use this\npalette for data representing hot-vs-cold."),Object(l.b)("h4",null,"Palette 2"),Object(l.b)("p",null,"The purple-teal palette is good for data with no temperature associations, such\nas performance, sales, and rates of change."),Object(l.b)(d,{type:"sequential",isDiverging:!0,mdxType:"ColorPalette"}),Object(l.b)("h2",null,"Alert palette"),Object(l.b)("p",null,"Alert colors are used to reflect status. Typically, red represents danger or\nerror; orange represents a serious warning; yellow represents a regular warning,\nand green represents normal or success."),Object(l.b)(d,{type:"alert",mdxType:"ColorPalette"}),Object(l.b)("h2",null,"Gradient use"),Object(l.b)(b,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Gradients are not yet supported in Carbon Charts. This exploration is\nsubject to change.")),Object(l.b)("p",null,"Gradients are good for highlighting extremes in a range of values. Use a\ngradient on single category visualizations only if needed. Multiple gradients\nare often inaccessible and are discouraged in our system. Gradients should not\nbe used to represent any meaningful progression or divergence. Never use a\ngradient in place of a sequential palette."),Object(l.b)("p",null,"For the full list of approved gradient options, see the IBM Design Language\n",Object(l.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/design/language/elements/color#gradients"}),"Color page"),"."),Object(l.b)(m,{mdxType:"Row"},Object(l.b)(A,{colLg:8,colMd:6,colSm:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"115.27777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVQ4y6WSX2hbVRzH89YkbdOkuTf/mvQv3VDLxiyOzW1atkmxD0rp9jCmNIMhDmTMB/EPDsH6IMOo+KCuKIIOWh/0YS86FAUFYQUVJ4rrpF3/t+maJW2WNLn3no/n3tukzZo+eeDDOef3O+d7fn+OQwjBJuww25hD13Xy6wWKxYJca5at5DNnBxVDVO6E2LZeXcuyspJkcmaJqbnkNr8jl7tHJpPeIlY55/M5Muk0hmFQ0p+9A3/chnRWp7CeQ9P0zQi/GdM5k9B45TPBxS9gaFRw6St4/6rgo2/h8jWdkZ81cgVbbSEluH4TS6hQWJcUyeVy1oNWhKk1GJ+FiQXB5KLg9hJMJwUzMoq5FcF8CpZXZe0MO+obk4K1PCwuLfDPvxNk7+XQNU3WtGgLbq/hVthW01LaxaLGWjYrHzIqaygwDVpVAdMm0OUJvaIpC8tLzCcXSS6vbIhtEUwt5BkfS7F4q0hqClLTgruzgvScILMoazaRZW4iLb+IsfGmQSapMf27xt3lPOuFfLl+VlPGfxB8fcHg2pDBd28b/PiewU8fCn75VDB2RfDrl/CXbE5x3Y44Jz/EzG+yKXlddleTggWrKeUIDaFZKYsqGCXkGa1o22b/LJK9YzA1P8XfN2+RWV2VXytviZqf3sH/GEaVsjsSiQQW7+xA4j7erWLbgsPpdOF0uXG5a3HfT22tZXeZfpfLxunaXEuczpqKvSMSVokEG1B8bvxem8YGNz6J1+PC76snoPoIhYKSkEUwGCQQCFjr1vZOwuFw2efo3NPD/r4X6ToSZ29PnO6jcfYfj3Ow9wyHegfpHThH34nnaIrGUBUFVZUBSIFYLEq4qZlY6y5C4SZpV6xHHB3dAxw4/TlHTn/MsfgwT54d5qnnhznxwjCnLlwm/tInPHs+Qay5DUXxW4Kt7bvZ/dDDRKItMqqwFG617Jag4m+g0VODz+PEV1+DV9JgUleDx6TWnF0bEZiXZLrBEKq8bKUetGdVDdiC1oFAWBoj8rWmMuGwTTBk+kLWYTOKEvZekWciW/YqjmBIIRT14/XXUdfgtPHY1NY78SteAvKMakanboqa6Ufkg53tD1hpl1N+onuQoWe+5+WTo7x6aoTXB0d54+wob54b5a3zI3xw8SqXXrtCW0uHFLdr2NHWSdeDe4nJ2kXCUaKRls2m7GrZx+GuAQ7veZrH9vXzeHc/PY/0c/RAP8ce7ef4Ibk/2GdFU7oUjTTTHG0rfxfbtxFho2xKvdcpcVVN2aTO4y6L2SkrKKpSUbuyoNmUYCBkE9yZ0kVzrobtU/kPL8C3IMrEsAsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Gradient palette",title:"Gradient palette",src:"/static/e631551a496246f7ca78c1ba264b8f14/3cbba/gradient.png",srcSet:["/static/e631551a496246f7ca78c1ba264b8f14/7fc1e/gradient.png 288w","/static/e631551a496246f7ca78c1ba264b8f14/a5df1/gradient.png 576w","/static/e631551a496246f7ca78c1ba264b8f14/3cbba/gradient.png 1152w","/static/e631551a496246f7ca78c1ba264b8f14/92c65/gradient.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("h2",null,"Color in action"),Object(l.b)("p",null,"See the IBM Design color palette in action across multiple business units and\napplications. Deliberate hits of color are composed with rich neutrals for a\nwell-balanced cohesive experience."),Object(l.b)(u,{mdxType:"ImageGallery"},Object(l.b)(f,{col:6,title:"Bubble chart in action",alt:"example of a bubble chart",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACb0lEQVQ4y51U247aMBDl/z+mr+1jH1pRtRIqUqWVtt3VUigECLnZseNLfDrjEJKwWVWq0eDx2D45c/MihCDQjYB/DDr75tZ1zhf0J2hgt9uFJElwOBxwOp3A+vF4jGuWtm1voDMyBazr+ga43+8jIIOMde/9lGVgvZOeIe3li7HLPYu33J1IxOjkFUPWiEHQWkfXeJ/nsfRAPYh3AdkuwKi4HgDHDK21k8v3wkC66nTbBGxWATIbAEPPkA8YYwLHchaIGV/1RhI73+mtD7fwTVzO8xzkbnDO0WF2cQr2VJXRNtwdsiHJq6xphqQwYFEUaMjIgP3H+sDzz1MYPFoYdJlWdI6BeFwajd9STAGZYVlWwRqN5KTw/CIibkuBb233gdXPFO+/7aJuqYQMl9FQN6/r0Bi+6bB5sPjxyaDVQFFbbC4SvgKWH0t8eHfBHy1g246pobm9L+xxlo01cBQOWwON6VhIZyGlg9VkV2RvXZwt3UqVjuGYBaRyoSwr1uiQx5f1kaibeGG5TiCVuXn2+FDj6+cCtTYxiZM67AubrY4Cra1DaQye8hL7vMbzsYzn+SITOZxrbBOBX9siXmJPau3mW880TZfR6wcd1RlfGI+8MpP1NpFYP8bq5ngSw5HL3HqcICkkP0EUO0FriaoS0a6Ugla0L2UUISquDhRUIbNJufY0vRIeXJPcis5bYu2QZRnSNCWbQ9cAnruL1iz2rg7JqNgYWljncSkafnpiUXN2HXlZK2ZaRaDpYzHzwK4uKV7SNGhZ4XwRWH4/oKTuqWSBbO9x3ikIWVJ7NtFV7qyyLGNYrk/efFLwn2Nch38BXBEdKUHRzg8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"example of a bubble chart",title:"example of a bubble chart",src:"/static/83d22dee0f122627e4469b1fbe2203b8/929af/color_gallery_1.png",srcSet:["/static/83d22dee0f122627e4469b1fbe2203b8/7fc1e/color_gallery_1.png 288w","/static/83d22dee0f122627e4469b1fbe2203b8/a5df1/color_gallery_1.png 576w","/static/83d22dee0f122627e4469b1fbe2203b8/929af/color_gallery_1.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:6,title:"Radar chart in action",alt:"example of a radar chart",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACVUlEQVQ4y51Ua3PSQBTN//8hftDCB8dWhUFaqm3VFqcKA4RnSgMB0uZF3tkc924J8gg4muGy2SR795xzz10pTVPkXYee/+2S6E/XdYzHY2iaBkVREATBVlIaN+PYhiKhbdsioaqqYvQ8byvRv6CXjlHO3iVJAsdxROyiz0W4S2mXVhzHcF0PURSJ5Ltr9hLm6ZXdM8b4yPiM0QP6rSJfT+nQboylSBglStGdBviheC9JkeYyytbmarhGxWP26OPdJx3F0gzndRvPmg8WJwd1FwjDMIRhGFwnV2jEWALfizHtLHF5baJcHOCq0MXpxylOLw206ya04ZJrGsM0TbGWdN6iTKiIJo304UPDQqtuoVya4OK1jGqxi898PHs7RuWrCXPq8SQJLMuC7/t/EO5Spjlpp7YdNG4NlE96qBV6KL2SUXsj48vNDD2L5VpnTXlTVEJJwk/6Llq1Gao8SfWkj0qhg59XD7htGFAmGvTFQiAjK23myLUNJZzzqrY+KDjjyG5KIzSvFdxVZXxr6ujLHfT7gz26W5TX5Wcvc320hFyQ0a4M0a2r+CXbeF8foXJ+j8lkKtqUWpYKuglIOtRGRnMO/WLIbxzeKrzqfKMnn6Hx6PBeDw7bJl25n6pLtqHwSJsnBymvNst8ybJuYaKf6QDJguZ7xqaRXpImcegjr/XTVdAG9F0WRHuLsmNEiMJEfB5xakbA/cgNnnCDMy9E4gZIODIy/bGja13lwb2NhWbCsQ3MTRffVR+OxTvA4aKrz/CGMxhLG7ZlC3THTijpf476Y2t+A6YgEIMcq2cwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"example of a radar chart",title:"example of a radar chart",src:"/static/2c940f7b75f3cd978d6b5240980b076c/6e9cd/color_gallery_2.png",srcSet:["/static/2c940f7b75f3cd978d6b5240980b076c/7fc1e/color_gallery_2.png 288w","/static/2c940f7b75f3cd978d6b5240980b076c/a5df1/color_gallery_2.png 576w","/static/2c940f7b75f3cd978d6b5240980b076c/6e9cd/color_gallery_2.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:6,title:"Donut chart in action",alt:"exmaple of a donut chart",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADGklEQVQ4y41UTUwTURBeovy2tLv79re7LS3bllL6L6VpoJLwo4gSjBJiiNGLkQshHsADHkw0MZqo0cTEhAMaD3g3GhNvGgkHz56MHox3Tsbj5+wrRaAUPEzmvezON9/M+2YETdPAGIMkSZBleY+pqgr3e83/jwkuWDweRy6XQzKZRF9fH1KpFLdAIHAg2GEJOKDjOCgUChwwm81y0HQ6Ddu2ebCu69tA2pGshVrJoijyMmulu15zwcjcu6LKMHST26EMG300iZVPIzDTRLTbQdDqhm5RElOkRHpDlsL+vrjeJBBfwMBMdxIbjx5j89MX3BjaxOKJzyiEz0FkHfTvvzbUAe7O5J5FyY+Hk/PYWljFnbNTGJ+YRKbrFGZTz3D/5B+MxhfhZ+3QNYNi1D3x+xjqMOgcTGXw4eYaprMVCG0t8Ho8xMqLNlFAKXIJ9yq/kbDLkFXfLqZqPaBKfQtTCW1zM2i6MAXR0wHLsrh8rIANywzBIwu4ln+Dy/k16EE/9dNoXDIHlRl8iytgw2PQiFkuX0CxWESlUsFAsQSv1IwziVtY6P8IH2vZLvuAR9kBZDKyqz8QvXIXUmsTYoleDlYqlRAJO/DKx3A++QDzhffoZM0ckMftL5mbYYJ1HEd8cRWZ1e9Q/B7I/k5IigpGJsmkUUXCSvkbxuNLxLC1McPao6hMgtGdQG59C4nb75DIFDCQiiHXE6PpCeHqwHMsD3zdjlEa65AbfxjKKHUiUp5A/uUvnH7xFUNPNlB+uonKq5+Ym3yLqJqmF/ZXCewTd92k8Nk16VU1Rt5CfOo6okvriC2/RtfFJci2RaPqysVoPCku9Wpj6ezeFUZe555526F6WsA8zdw0mvsas9qU7BF2tQ/BakZtWz5WCDIPpLMRAKOFYLs6JFOPWGWCqHRiLDqNTKwfYaeLpBFGdHQW/aUynFAIVi4NY7CAkXgew5kirFAQkUiErzzDqC9bcCUxGu5CgoBCrhFIT8zB+MgIbMuGk4yidzCNYDAEM2DuaG639upm2QVVdv2kuJqjfVg9K2A0PTxI1Y7c3n8BCU8vE1nZ3EkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exmaple of a donut chart",title:"exmaple of a donut chart",src:"/static/979feb02238caecf12cf6fbb9f214db3/6e9cd/color_gallery_3.png",srcSet:["/static/979feb02238caecf12cf6fbb9f214db3/7fc1e/color_gallery_3.png 288w","/static/979feb02238caecf12cf6fbb9f214db3/a5df1/color_gallery_3.png 576w","/static/979feb02238caecf12cf6fbb9f214db3/6e9cd/color_gallery_3.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:6,title:"Stream chart in action",alt:"exmaple of a stream chart",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADtklEQVQ4y3VUW0yURxT+peDC3ve/zf/vwv6wwobLXlgi1khJrNEYY6JJiZdEo5A0WPtovDyoL5omxRCv0GB6eaqXNNYmwIKwLAsWwUti1PSJhz5VffShiU1D8euZYf/lJg9fzpmZM9+c78yckXRdh6Io8Pv9CAQCyyDLcsHavqqq4Hs0TRN2JSROFo1G0dzcjMbGRqRSKSQSCeHX1dUJv76+XqCpqQmVlZUigY+R8UMEYXV1NeLxuEAymRSWE3ISPm5oaEAsFhOElmUVCDmBAPc5KSe0JduylsKeF5YQIF+leGYY0BmDbpoCLE/GSSW7FowCGF9cimBQBDOK4SQG1Y/5fGBUS50OYG43WFmZ2KvTupBcKC7fxIO9XjCPpxAsAkmmHpChVVVBbv0MKpVDo7r7jx6B5/RJuK9fhRqPQaeLlWztzDChtrRA2boV8sED8F28gMCxTnh7e+C+/TO83ZfguvcLnJM5OIcG4bx/D6XTv2P9k2mU5saIMJ4npAyY0wVXx1EUPZmCI5fFuqkJSI8nIc08hDSVhfRwFNI0jSfIjg1CGn+AkoksijPDKMuM0AEDi4S8qGqpAzUnTsOceQrHcD9qRkbxZfoZokNZHO5/js7+l4gPZLFn+DHOD85iR3oGnpFhqEMP6IA0imiPYks2SKrTWYyOjm6Mjs6h684sTvX9hct9/2Dq/ju8zszjbQZ4OfAe6bvv8efQPF6k/8ad397gWfY/7M2+QkUmBzORhOb3UYZGELLnE8S+uI72XuBAN7CtC9h88V8cvAac/wk4++MHHLoBtH4zh/Ye4OubwJErtHbmV/xw+RG6vk0jEonS8wrkCd1FSO3/DjuIcOPxHFpP/oHdRJA4dAvJznEkj02gvq0XO+mw+OG7qNv3PY17UOZ2wK9o1I70sPMtKenMpAyLkWy7htiuc1C8JbBi2/DpV1l6g3T7mgxDV6EFXLDi22HQm9N8DmiyR/iMLbzhQusJR5VRXrNJWJWgaUSgKvnWyvepzqD4XQufAiXBx3zNfse2LTzsipBJjV8lmt+yCMustTBfWLdW2VAotNgpQWoxTsYXIpGICOKoos7g4H44HF425rBjuV0k5J1CfakqCxIVkqoKubqQrioyTDMoiOzfZanEVZJ1uh3eowadoNMlWGGeaUT4RsiCWR4hBQZlsWFZ8deyks6/py1bYNXWopw2NqdasJEQCmqorN2ESOJzhMsNVIQtUZK1fuvFS+ETRMrfkZCsyAJCMpdv+/ZnuiKrlfgfq0SEJgNBWpAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exmaple of a stream chart",title:"exmaple of a stream chart",src:"/static/c3586e695e515f66012671d3b6692e3d/6e9cd/color_gallery_4.png",srcSet:["/static/c3586e695e515f66012671d3b6692e3d/7fc1e/color_gallery_4.png 288w","/static/c3586e695e515f66012671d3b6692e3d/a5df1/color_gallery_4.png 576w","/static/c3586e695e515f66012671d3b6692e3d/6e9cd/color_gallery_4.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:12,title:"Heat map in action",alt:"exmaple of a heat map",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACk0lEQVQoz32TTUgVURTHX0GL6ANbtIp2fYC2ql2tKiqCaNVG3OiqRURhEbXpc1VEEWZgLsIILMkyErWUvowwK/RRmJklfuVHPt+89+a9mTvz5vw6M+OiIhrmzx3m3nvu7/zPuQljDJlMBtu2yeWyZPXbcQrEjyzof4/8sTbheR6WZZG2MsxbOdKZHFnbwQ9QCTlHyDpgu0LewM+cMGUJ0xnh+yx8HBd6vwlPkgGz+i8RxvY8pbQN87oxvaApnRyagYEf8GYYOj4KbUmh+T3c6hYutwmn7wtVN4U9l4TSE/BqkDhg0VdK22XOFlKqdEGYTEPfqPBuRGj5ANc74UILnLwnHL0Dhxqg/AbsvQxbz8LqSouupEciyjwIIsJUHiylm0gLg1PwfgSaeuFqh3CqSWnqhW3nhI3VRUqrXcqUam3FF0q2P2Lx5gbaX0+QcF0XPyI0zGRhNCW8VU9ak3D3LdQ9g4utwolGYd8VDXYMlpenWbLrHUt3vmTZlhpWrDvIolXbaevsUUKRKOVZy/B1JibrGhAefhAe9wsPdKx7rn41C+W1ISGUHsmxvvIzJfv7WLa7m5U7Wlm86Rrt3SOxh4W8zXy2oB5qQbRjhrV6yXHoH1Ojv8DLwfAQqH8Rq0b9PNOMEkNZdYE1VXOsqpijs9/EhMa4UVHClggLM6vj+HxIK3yakKg1kmOiwYXGHqG2SyJfz7cEHL4NB2pgw3E9+PNClYOgiNF+dIxP3vGxCx6240VjaMWM5TE55zI0aegb8egZMvQOezzVqj5JGjqUrOG5y0Qq0Mb2wwAuqYxuTNkY1/x1S+KbIIEfNtg/5v5Uwi8WcU2RdF7TnM6SLzjxFrVC3wVJvFzCbERFpOJv8vUsneIXdRBTAY+0LwIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exmaple of a heat map",title:"exmaple of a heat map",src:"/static/9696f82e439488bdb250757f4d930cc0/3cbba/color_gallery_5.png",srcSet:["/static/9696f82e439488bdb250757f4d930cc0/7fc1e/color_gallery_5.png 288w","/static/9696f82e439488bdb250757f4d930cc0/a5df1/color_gallery_5.png 576w","/static/9696f82e439488bdb250757f4d930cc0/3cbba/color_gallery_5.png 1152w","/static/9696f82e439488bdb250757f4d930cc0/0b124/color_gallery_5.png 1728w","/static/9696f82e439488bdb250757f4d930cc0/0c3f5/color_gallery_5.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:12,title:"Proportional diagram in action",alt:"exmaple of a proportional diagram",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABd0lEQVQoz32T61LCMBCFeQMppRfa0vudXtDiBWZUxsF/6Pu/zTG7mpoK44+ddJPNl5OT7czzPGRZhjiOOZIkgWVZMAwDpmmOI4fxnatrVOs4Do80N6MkiiIEQTCGbdtjwRRqwHXd3wN+YgKk4uVyOYamaVivPXFIDF3XuZBy+o7CGFVViXw9Ua5+z+QHbdS0OYZ+j9PrGWEUYLVaMaRpOuRZiffjJ5pNizzPWBUJmFiiAikWCw1NtcXu9oAwDITKEM/7N7RNj4fdAafjGffDk/A8Zd9Jqer3BCgnCTqf37CXRVGwmrbtUZYF9o8v6Ls7ZGKuKEqGkt9XgeOrmRYX0emsbDig/NlM8LzIxZjz49C1/72yXCRAXW+w7QaEQSzgPnzfR5qmYr7mw6R/ahtdACmosKk78QAfQoErcp0fhxRRUJ9SLiGyxWR+4SEB4ygR6nbQBcy2bO5TuYkA0jdSTVZcBartQ4WO64xz9Df9rSMAXZ3W1Ct/AfQ3I2TH22r+AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exmaple of a proportional diagram",title:"exmaple of a proportional diagram",src:"/static/6f832a8b483abaf73c4414d5429d624b/3cbba/color_gallery_6.png",srcSet:["/static/6f832a8b483abaf73c4414d5429d624b/7fc1e/color_gallery_6.png 288w","/static/6f832a8b483abaf73c4414d5429d624b/a5df1/color_gallery_6.png 576w","/static/6f832a8b483abaf73c4414d5429d624b/3cbba/color_gallery_6.png 1152w","/static/6f832a8b483abaf73c4414d5429d624b/0b124/color_gallery_6.png 1728w","/static/6f832a8b483abaf73c4414d5429d624b/0c3f5/color_gallery_6.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)(f,{col:12,title:"Alluvial diagram in action",alt:"exmaple of an alluvial diagram",mdxType:"ImageGalleryImage"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACtklEQVQoz4WTWU9TURSF+9N8MjHR+KI8GKMGDQ5EHFCIihSjRiEgtA6VAC0VVMAi1ErscKmIVqiWQSAKDZOkYJGxxUJbeu/nLmDgQeNJVtY5NznfXrn7bF0ymWR5aYlIWsvLaKrK35amaaIdrv6RtuGquJzQxdfWmBXQQiJBOBolKgUSAk3JLXVLacgWdodrO8ttFQVdKpWi2eXCPzVFWD7OrK8TEk0L+IdoQcqHIjECbRGGvfC1XeOb+HCHxkinRvBD2uX8aUluq+iSksw/Po5fUvavRBlbXWUsHmdIvDcWozcR5/30PM9uTqIYwWPUxDflMWi4DSpKObhqpiXnOjpVEtZ5vbwKh1EE8DoSwSHwNvHWpWUaViJYJme4efYFtpJJfGbwmlTemqCzCny14ChfxF49tPkP137FMPv9VEhK29xPmufnqJoNUzYd4nxwhEODfRxo76ShOMRHC/Q7YKofxgMJfM8jOCtWKM58R8XV1k3gL2lE0WsHJ/v70IemuDUxRl5wmKzeAMecb7jY5qDkjULbw1mcZQmaCqK03Ihju7GIJf8bpdlurmbYKM1rIqUm0aWfyS17K3vM1WQNDXBCQIc9Lk4oHvRfvnBt5CuXfZ/I2neP0qwOPI8XabfMU5P7ncqccYwXurmf30Gz2bfRaV261/onVvYX6TlurSWvs4Nst4tcp5OcxiZy6+u4bqnHcEnBkN1F0VE75zIekH+wEUfZPL4acBrWcD4Z3exymnrHZGL/mdMUWK3cFUhpSyt6gRYGAtweDVLc08feXZkc2ZtPyZU6Xj3tQmkIUn+nh/s53ZzaXUlhduVWQlkGo5Gz5y/Q/sFHYGCAgWCQwYkJXLKvDXymXPFifvQSm1XB1eLHY/fjdnThcXTjtnfjaenB/25oG/iPWdvey1uVmeF/Kz1RvwGoszJ9hoqwOgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exmaple of an alluvial diagram",title:"exmaple of an alluvial diagram",src:"/static/4dd20cb69d27b44e96ec12d919ce2217/3cbba/color_gallery_7.png",srcSet:["/static/4dd20cb69d27b44e96ec12d919ce2217/7fc1e/color_gallery_7.png 288w","/static/4dd20cb69d27b44e96ec12d919ce2217/a5df1/color_gallery_7.png 576w","/static/4dd20cb69d27b44e96ec12d919ce2217/3cbba/color_gallery_7.png 1152w","/static/4dd20cb69d27b44e96ec12d919ce2217/0b124/color_gallery_7.png 1728w","/static/4dd20cb69d27b44e96ec12d919ce2217/0c3f5/color_gallery_7.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}x.isMDXComponent=!0},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
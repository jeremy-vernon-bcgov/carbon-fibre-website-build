(window.webpackJsonp=window.webpackJsonp||[]).push([[1925],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),c=a.n(s),i=a("NmYn"),b=a.n(i),n=a("Wbzz"),o=a("Xrax"),r=a("a7k6"),d=a("TSYQ"),l=a.n(d),p=a("QH2O"),m=a("qKvR");var g=({title:e,tabs:t=[]})=>Object(m.b)("div",{className:l()(p.pageHeader,{[p.withTabs]:t.length})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},e))))),u=a("BAC9");var A=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=Object(n.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:c,branch:i}=t||a,b=`${s}/edit/${i}${c}/src/pages${e}`;return s?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),y=a("I8xM");class f extends c.a.Component{render(){const{tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],s=e.map(e=>{const s=b()(e,{lower:!0,strict:!0}),c=s===a,i=new RegExp(a+"/?(#.*)?$"),o=t.replace(i,s);return Object(m.b)("li",{key:e,className:l()({[y.selectedItem]:c},y.listItem)},Object(m.b)(n.Link,{className:y.link,to:""+o},e))});return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},s))))))}}var x=f,O=a("MjG9");t.a=({pageContext:e,children:t,location:a,Title:s})=>{const{frontmatter:c={},relativePagePath:i,titleType:d}=e,{tabs:l,title:p,theme:u,description:y,keywords:f}=c,{site:{pathPrefix:w}}=Object(n.useStaticQuery)("2456312558"),j=w?a.pathname.replace(w,""):a.pathname,T=l?j.split("/").filter(Boolean).slice(-1)[0]||b()(l[0],{lower:!0}):"";return Object(m.b)(r.a,{tabs:l,homepage:!1,theme:u,pageTitle:p,pageDescription:y,pageKeywords:f,titleType:d},Object(m.b)(g,{title:s?Object(m.b)(s,null):p,label:"label",tabs:l}),l&&Object(m.b)(x,{slug:j,tabs:l,currentTab:T}),Object(m.b)(O.a,{padded:!0},t,Object(m.b)(A,{relativePagePath:i})),Object(m.b)(h.a,{pageContext:e,location:a,slug:j,tabs:l,currentTab:T}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jS0G:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return h}));a("3bBZ"),a("q1tI");var s=a("7ljp"),c=a("013z"),i=a("CpY+"),b=a("2msF"),n=a("EQQr");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,s,c=function(e,t){if(null==e)return{};var a,s,c={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}const d={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)},p=l("AnchorLinks"),m=l("AnchorLink"),g=l("Caption"),u={_frontmatter:d},A=c.a;function h(e){let{components:t}=e,a=r(e,["components"]);return Object(s.b)(A,o({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(p,{mdxType:"AnchorLinks"},Object(s.b)(m,{mdxType:"AnchorLink"}," Anatomy "),Object(s.b)(m,{mdxType:"AnchorLink"}," Requesting information "),Object(s.b)(m,{mdxType:"AnchorLink"}," Best practices ")),Object(s.b)("h2",null,"Anatomy"),Object(s.b)("p",null,"The following diagram outlines the primary components within the chatbot\npattern."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABVElEQVQoz4VSTWvCQBD1p/fWQwuF4m/wmBYKvZmTh2qhUKJgUhJjU6WJSQQ1m91NNq+z6wdKRQeGTZh5b2beTAs7a5rGvEo1qGqFY1Oy0gkmJoRAXdcH32P3+NYp4RYUTEL0+28YvA/g+z6ogskpWInfOMFqvQJjDFLKa4SErSp4ngfbtmF3u/DGY13HWFmWSNPUkH1RThiG2wkuEWpQEASI4xjFZoOaxq3WzMTSNMdsNkecJAim3/S/uN4h59yM6TgOPNdFlixQM2FijjuF9Wrj43OIh84TJr63010dSP8RatGXyyV6vR4sy8JoODpo+EPdPXaecdN+wd3tPZJ5tMXuCM+PTMK71FkURcjz3Ehw3P2G4kwQAS1PUvGmOt302Q6zLENRFMb1AvYgTrEV6Sl4aTYsSg4l5GVC/epk7VobRbemuDR3qO9OCG4uQX/r+DFW2x98vLT8ZOTh4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"chatbot 4",title:"chatbot 4",src:"/static/ceb4b74400230b108d02631bd8c9a432/3cbba/chatbot-4.png",srcSet:["/static/ceb4b74400230b108d02631bd8c9a432/7fc1e/chatbot-4.png 288w","/static/ceb4b74400230b108d02631bd8c9a432/a5df1/chatbot-4.png 576w","/static/ceb4b74400230b108d02631bd8c9a432/3cbba/chatbot-4.png 1152w","/static/ceb4b74400230b108d02631bd8c9a432/0b124/chatbot-4.png 1728w","/static/ceb4b74400230b108d02631bd8c9a432/99571/chatbot-4.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(i.f,{mdxType:"StructuredListWrapper"},Object(s.b)(i.c,{mdxType:"StructuredListHead"},Object(s.b)(i.e,{head:!0,mdxType:"StructuredListRow"},Object(s.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Component"),Object(s.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Usage"),Object(s.b)(i.b,{head:!0,mdxType:"StructuredListCell"},"Variants"))),Object(s.b)(i.a,{mdxType:"StructuredListBody"},Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Chatbot header"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"The chatbot header contains the title of the chat and up to four action buttons that control the chatbot application. Typically, the “close” icon must always be included."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Default"),Object(s.b)(n.a,{mdxType:"ListItem"},"With avatar"),Object(s.b)(n.a,{mdxType:"ListItem"},"Large")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"System message"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"System Messages represent the bot's response to the user. Past messages will have a faded treatment, whereas active messages have an indicator applied (see below)"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Default")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"User message"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"A user message indicates what the user has input via text input, structured response, or voice."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Default")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Structured response"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Structured responses present choices to the user that are easy for the bot to understand. When selected, a structured response will change its visual appearance and a user message will appear with the same content."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Default")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Chatbot input"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"The Chatbot input is comprised of a text input field, a configurable button for other input (e.g., voice) and a submit button."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Default"),Object(s.b)(n.a,{mdxType:"ListItem"},"Without action button")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Launch button (not shown)"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Launch buttons are the means by which a user initiates a conversation with your bot and are the first interaction of the bot experience."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Primary"),Object(s.b)(n.a,{mdxType:"ListItem"},"Alternate")))),Object(s.b)(i.e,{mdxType:"StructuredListRow"},Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Chatbot cards"),Object(s.b)(i.b,{mdxType:"StructuredListCell"},"Cards are used to display more information (including text and images) about a significant action that a user can take. They can also be used to display text and image together for a purely informational purpose."),Object(s.b)(i.b,{mdxType:"StructuredListCell"},Object(s.b)(b.a,{mdxType:"UnorderedList"},Object(s.b)(n.a,{mdxType:"ListItem"},"Card with text (Hero)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with text (Large)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with text (Mini)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with image (Avatar)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with image (Large)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with image (Mini)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with data (Table)"),Object(s.b)(n.a,{mdxType:"ListItem"},"Card with data (Visualization)")))))),Object(s.b)("h2",null,"Requesting information"),Object(s.b)("p",null,"The following flow shows a typical exchange between a user and a bot. This model\ncan be used as a baseline to start building useful conversational experiences."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABNElEQVQoz5WSzWqEMBSF7Vi6GbqcWRX6AqXVTV9hWuhrdCdd+0I+gc/hxrXbgtQikvifxNuTGEsZCqMXLkdJ7sc5SRznrIjoyuo9+g39onuaplf0Cd+3y17f952LNY6Dq1WK8QPDVNc1SSnJlkiS5ITlfRiGN6ugRcndWeuANQMxXoum6ZQFdnmeP+v1KIrcVUDeTWYj66ZAE0ZFQigyQKVUD3lcjsbzvMuRiWYgBgyQcybRahgGwhn2iO/NRzPuVjlU6hzIAeSq73vjENAnvQ7dOWsKG3+BQggqy1JWVaUYY8gudORtQERx7UCgXeGWR4Ak/s2lbHa4ABHPPJu2bf8+GwWQZxNsAwLyjpgDHOaAfAHwDf2EPmxyWBSFUcD2aZrexXF8yLLsCNARrg8AXVvgv/M/Z7ZSMv/fwKkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Requesting information from a chatbot",title:"Requesting information from a chatbot",src:"/static/3971374d16e1697d4d71cb890a6613c2/3cbba/chatbot-1.png",srcSet:["/static/3971374d16e1697d4d71cb890a6613c2/7fc1e/chatbot-1.png 288w","/static/3971374d16e1697d4d71cb890a6613c2/a5df1/chatbot-1.png 576w","/static/3971374d16e1697d4d71cb890a6613c2/3cbba/chatbot-1.png 1152w","/static/3971374d16e1697d4d71cb890a6613c2/0b124/chatbot-1.png 1728w","/static/3971374d16e1697d4d71cb890a6613c2/99571/chatbot-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"Best practices"),Object(s.b)("p",null,"At a minimum, use these best practices to help ensure a successful\nconversational experience. For more in-depth conversational principles, see\n",Object(s.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/design/ai/conversation"}),"IBM Design for Conversational AI"),"."),Object(s.b)("h4",null,"Introduction"),Object(s.b)("p",null,"Ensure your users know they are talking to a bot and that the bot has stated its\npurpose. Set the context for what questions users can ask about."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAp0lEQVQoz62R4QqDMAyEff9HFP9acaND2yhtY70tGQ4nDoYauF5Dy8e1KbBT8zzLqs5TBnOSTvv3Gb726yp+A4HEEx6dg7V3hBgwjqPqODAleO9ARHDOqYiGc8AF5L1XH4YLgAK7FLjWaSCRV4hIUsp/ngK27Q1N06Cu69e0rU55gR0CVlWlKssSxhhNehjIzOj7Tp8aQkCMUX1772+geM75o22yPeATpmhkEn1Ub14AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Chatbot greeting",title:"Chatbot greeting",src:"/static/02c727b3289fc520636c5fb404856660/3cbba/chatbot-7.png",srcSet:["/static/02c727b3289fc520636c5fb404856660/7fc1e/chatbot-7.png 288w","/static/02c727b3289fc520636c5fb404856660/a5df1/chatbot-7.png 576w","/static/02c727b3289fc520636c5fb404856660/3cbba/chatbot-7.png 1152w","/static/02c727b3289fc520636c5fb404856660/0b124/chatbot-7.png 1728w","/static/02c727b3289fc520636c5fb404856660/99571/chatbot-7.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(g,{mdxType:"Caption"},"chatbot greeting"),Object(s.b)("h4",null,"User intent"),Object(s.b)("p",null,"Typically, a user inputs an intent, which can be request for information or a\ntask for the bot to complete. This can take the form of a text (shown here) as\nwell as a structured response (see next section)"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAvUlEQVQoz62R3QqDMAyF974+guBD+Sp66Z0OL0ZLaetfaz1bIo45toF2gdMkpP1Imgs+2LIsdLL3c4D3jjLO1xp28atdvgMB52dIpSHEDeM0ou971nmgczBGw1oLrTXL2i4OuIGMMey77k/ATdFAGpcgpHVkGwGcHJrm+lCDuq4hpcQwDLtNH+6wqiqUZYmiKDhWSp3rkBRCQNu2yLIMaZoiSRLkec53qHa4Q+89b1cI8dx01B9uXb4//PWHd3z8XjHCgwoDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"User Intent",title:"User Intent",src:"/static/3657a2a47a4fde852678725e5b5bac1c/3cbba/chatbot-8.png",srcSet:["/static/3657a2a47a4fde852678725e5b5bac1c/7fc1e/chatbot-8.png 288w","/static/3657a2a47a4fde852678725e5b5bac1c/a5df1/chatbot-8.png 576w","/static/3657a2a47a4fde852678725e5b5bac1c/3cbba/chatbot-8.png 1152w","/static/3657a2a47a4fde852678725e5b5bac1c/0b124/chatbot-8.png 1728w","/static/3657a2a47a4fde852678725e5b5bac1c/99571/chatbot-8.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(g,{mdxType:"Caption"},"User intent"),Object(s.b)("h4",null,"Structured responses"),Object(s.b)("p",null,"Prompt for additional details with a menu of structured responses. This narrows\nthe scope to more specific information to answer the user’s question."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1klEQVQoz6VRWwqDQAz0zt5AvJPHUPDDDyuKFsQHLT7ZddWpSbHUYj/UQDYJWYaZjIadmOeZXq5qnKDUQBPP7x02/Xdo/wGBQY14PGuUZQEhBfq+5zwPOAxo22bJFnVdo6oq7i8BpmmKPM+QFzmapoEQYiP7MGAcx3AcB7Ztw3VdZFl2luGMaZqYoWmaMAwDuq7Dsiz+Q7vDDKWUCMNoyRBJcuc7kimXJPs3H0EQIIqixe3yA3jaFGLneR5XAuy67jygUoplrlLJ4UsuU6Xjrwb8stoDfAHx9Vxbd5/vTAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Structured Responses",title:"Structured Responses",src:"/static/59d021f4a53d3036625cffbce69be0cd/3cbba/chatbot-9.png",srcSet:["/static/59d021f4a53d3036625cffbce69be0cd/7fc1e/chatbot-9.png 288w","/static/59d021f4a53d3036625cffbce69be0cd/a5df1/chatbot-9.png 576w","/static/59d021f4a53d3036625cffbce69be0cd/3cbba/chatbot-9.png 1152w","/static/59d021f4a53d3036625cffbce69be0cd/0b124/chatbot-9.png 1728w","/static/59d021f4a53d3036625cffbce69be0cd/99571/chatbot-9.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(g,{mdxType:"Caption"},"Structured responses"),Object(s.b)("h4",null,"Reflection"),Object(s.b)("p",null,"The bot should reflect its understanding of the query in the response (when\nappropriate) to ensure understanding, or before performing a significant action.\nNote: This process of slotfilling may need to be repeated until the bot has all\nthe information required to answer the user’s initial question."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQoz6WSTQqDQAyFvf8FRLcWvIkLwbXgQrT+LKyOVUEdZ8bXzoAuxJZ2DIQsEj5eXmLgJNZ13SvjAkLwj/1jGN+AC+NoSIc8z/DsWjRNg77v95m/gZxzPKoKruvCcW6wbRu+76ueEEJD4bKgKAokSYIsy1DX9TWFEhjHsQKmaQpCCMZx3GHawDAMFVQCp2nSB1JKMc8zPM+DZVkwTRNBEFzwkC7vVe+IokiplD62bXvdw7IsFUgeZPNQ6w8ZYxiGQaVcfbPgOPczUFbp1ZbHY5wBX3WYWv9tcbRoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Reflection",title:"Reflection",src:"/static/a8006c66705a45da9536b2daf310afa7/3cbba/chatbot-10.png",srcSet:["/static/a8006c66705a45da9536b2daf310afa7/7fc1e/chatbot-10.png 288w","/static/a8006c66705a45da9536b2daf310afa7/a5df1/chatbot-10.png 576w","/static/a8006c66705a45da9536b2daf310afa7/3cbba/chatbot-10.png 1152w","/static/a8006c66705a45da9536b2daf310afa7/0b124/chatbot-10.png 1728w","/static/a8006c66705a45da9536b2daf310afa7/99571/chatbot-10.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(g,{mdxType:"Caption"},"Reflection"),Object(s.b)("h4",null,"Provide a response and request feedback"),Object(s.b)("p",null,"The bot should provide a thoughtful, informative response to the user’s intent,\nbased on the information they have provided throughout the conversation. When\nappropriate, be sure to provide an opportunity for users to give feedback.\nConsider allowing the user to input a custom response. Provide an opportunity\nfor users to give feedback where possible. Consider allowing the user to input a\ncustom response."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxklEQVQoz6WS2Q6DIBBF/f8P9MUlPmhkadyigCLedmg0tbEPlUmGgZCcuZchwkVs20arr3Z1sNYe5/cdTvvPiH4DgcWuaNoB8iGgjcI0KSilAoDLgrIsUdcMnHP0fY95nk8q/wZKKdF1HbTWL3CNLMsCFM4LBBdgjHlwnueI4/g+kOwRJE1Tr4ygpDrI8g4risJbHscxbChJknggKSXrNOUddstyVVUQQqBpGrRtG6aQPvQwDD6NMb4B1dtvSNU5d+S31SvgE9C5YLX88M79AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Provide a response and request feedback",title:"Provide a response and request feedback",src:"/static/6ec5558ec899343bc16f9508de5604c4/3cbba/chatbot-11.png",srcSet:["/static/6ec5558ec899343bc16f9508de5604c4/7fc1e/chatbot-11.png 288w","/static/6ec5558ec899343bc16f9508de5604c4/a5df1/chatbot-11.png 576w","/static/6ec5558ec899343bc16f9508de5604c4/3cbba/chatbot-11.png 1152w","/static/6ec5558ec899343bc16f9508de5604c4/0b124/chatbot-11.png 1728w","/static/6ec5558ec899343bc16f9508de5604c4/99571/chatbot-11.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)(g,{mdxType:"Caption"},"Provide a response and request feedback"))}h.isMDXComponent=!0}}]);
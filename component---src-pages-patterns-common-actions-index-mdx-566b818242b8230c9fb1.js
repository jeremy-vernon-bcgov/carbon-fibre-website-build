(window.webpackJsonp=window.webpackJsonp||[]).push([[2162],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),i=t("NmYn"),c=t.n(i),s=t("Wbzz"),l=t("Xrax"),b=t("a7k6"),r=t("TSYQ"),m=t.n(r),d=t("QH2O"),p=t("qKvR");var g=({title:e,tabs:a=[]})=>Object(p.b)("div",{className:m()(d.pageHeader,{[d.withTabs]:a.length})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},e))))),A=t("BAC9");var u=({relativePagePath:e,repository:a})=>{const{site:{siteMetadata:{repository:t}}}=Object(s.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:o,branch:i}=a||t,c=`${n}/edit/${i}${o}/src/pages${e}`;return n?Object(p.b)("div",{className:"bx--row "+A.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},f=t("FCXl"),h=t("I8xM");class w extends o.a.Component{render(){const{tabs:e,slug:a}=this.props,t=a.split("/").filter(Boolean).slice(-1)[0],n=e.map(e=>{const n=c()(e,{lower:!0,strict:!0}),o=n===t,i=new RegExp(t+"/?(#.*)?$"),l=a.replace(i,n);return Object(p.b)("li",{key:e,className:m()({[h.selectedItem]:o},h.listItem)},Object(p.b)(s.Link,{className:h.link,to:""+l},e))});return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},n))))))}}var O=w,y=t("MjG9");a.a=({pageContext:e,children:a,location:t,Title:n})=>{const{frontmatter:o={},relativePagePath:i,titleType:r}=e,{tabs:m,title:d,theme:A,description:h,keywords:w}=o,{site:{pathPrefix:j}}=Object(s.useStaticQuery)("2456312558"),x=j?t.pathname.replace(j,""):t.pathname,v=m?x.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:A,pageTitle:d,pageDescription:h,pageKeywords:w,titleType:r},Object(p.b)(g,{title:n?Object(p.b)(n,null):d,label:"label",tabs:m}),m&&Object(p.b)(O,{slug:x,tabs:m,currentTab:v}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(u,{relativePagePath:i})),Object(p.b)(f.a,{pageContext:e,location:t,slug:x,tabs:m,currentTab:v}),Object(p.b)(l.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},aR6J:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return u}));t("3bBZ"),t("q1tI");var n=t("7ljp"),o=t("013z");t("qKvR");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={},l=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)},b=l("PageDescription"),r=l("AnchorLinks"),m=l("AnchorLink"),d=l("Row"),p=l("Column"),g={_frontmatter:s},A=o.a;function u(e){let{components:a}=e,t=c(e,["components"]);return Object(n.b)(A,i({},g,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Common actions frequently appear across different components and workflows. For\nplatform consistency, these actions should only be applied in the ways described\nbelow.")),Object(n.b)(r,{mdxType:"AnchorLinks"},Object(n.b)(m,{mdxType:"AnchorLink"},"Add"),Object(n.b)(m,{mdxType:"AnchorLink"},"Cancel"),Object(n.b)(m,{mdxType:"AnchorLink"},"Clear"),Object(n.b)(m,{mdxType:"AnchorLink"},"Close"),Object(n.b)(m,{mdxType:"AnchorLink"},"Copy"),Object(n.b)(m,{mdxType:"AnchorLink"},"Delete"),Object(n.b)(m,{mdxType:"AnchorLink"},"Edit"),Object(n.b)(m,{mdxType:"AnchorLink"},"Errors"),Object(n.b)(m,{mdxType:"AnchorLink"},"Next"),Object(n.b)(m,{mdxType:"AnchorLink"},"Refresh"),Object(n.b)(m,{mdxType:"AnchorLink"},"Remove"),Object(n.b)(m,{mdxType:"AnchorLink"},"Reset")),Object(n.b)("h2",null,"Add"),Object(n.b)("p",null,"Add inserts an existing object to a list, set, or system. For example, adding a\ndocument to a folder."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABQElEQVQoz5WRuU7DQBRF/SkUFFDR8ROk4m+oERJyQUUBAr4jSokQER1FFDteEsVLosR2HG9D8RzN5c2EIFdIWDo+1vWbO16MqqrumVvG/Iu6rjWiqc0kr803W5ivltAeToT5zgwdcWrgH4f8OX9GwJkJnN/tfXwNnNwAR1fy0sjzHL7vf3meR2EYUhAEmvl8TrZtk2VZ2rPZjLOAPHdCH58OPQ+W9DKI6WmwoIf+on3sa18YQghMp1NyHAdcgiiKEMcxuBxchvF4jNFoBC7EcrmE67rwXQdlFmObhCiSSJZphCKNJNPTr1yWJWVZhjRNwd8JTdNoq6dXbDYbjcqLosCWKavmgOx4X8iLaLVaQcHl4J+gvV6vNSpPkkRvojZWqGs1x8iOe4aUEm3bSiKCYrfb/XLIuvd4VtOZkwdz3vsGcPX6FRtcuYEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of add as a button with an icon in a data table",title:"Example of add as a button with an icon in a data table",src:"/static/7927f89f354d68723ab8ca037b83f46b/3cbba/common-action-7.png",srcSet:["/static/7927f89f354d68723ab8ca037b83f46b/7fc1e/common-action-7.png 288w","/static/7927f89f354d68723ab8ca037b83f46b/a5df1/common-action-7.png 576w","/static/7927f89f354d68723ab8ca037b83f46b/3cbba/common-action-7.png 1152w","/static/7927f89f354d68723ab8ca037b83f46b/392b1/common-action-7.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Hierarchy and placement"),Object(n.b)("p",null,"Depending on the importance of the add action on the page, the emphasis can be\nhigh, medium, or low. For example, a high emphasis action should use a single\nprimary button with all others being secondary."),Object(n.b)("h3",null,"Considerations"),Object(n.b)("p",null,"Small adjustments in your messaging will reduce user uncertainty. Consider the\nfollowing:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"What are the implications of the add action for the user? Are there financial,\naccess, or legal considerations?"),Object(n.b)("li",{parentName:"ul"},"Does the user have the correct permissions for this action?"),Object(n.b)("li",{parentName:"ul"},"Is the action permanent?"),Object(n.b)("li",{parentName:"ul"},"What timeframe will the action take (seconds, minutes, hours, days)?"),Object(n.b)("li",{parentName:"ul"},"What should a user do if the action fails?"),Object(n.b)("li",{parentName:"ul"},"Is this a single or bulk action?")),Object(n.b)("h2",null,"Cancel"),Object(n.b)("p",null,"Cancel stops the current action and closes the component or item. Warn the user\nof any negative consequences if the process doesn’t progress, such as data\ncorruption or data loss."),Object(n.b)("p",null,"Use a secondary button or a link for cancel actions."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1klEQVQoz62TzY7SUBSASwdqjI4kBAz1DTSBiQlLE+Po0qUrjW4wMHHDygfwAZzoozBjhyY8A7+TlL8UnAQJrdRp6aXtEHqPp3cKYZSdNvlyzj259+tp7inHcdwJchrGf2Ht2CSn0Wj0WywWYwT5Nuv6LrYdXCQSYYt4PH5WrVa1er1u1Wq1y1arZa5pNpsm1hmNRoOB+WW73bZkWdaSyWQFHWXmCoXlVCpV6fV6V5qmwXg8Bl3XGdPpFCzLguChlILv+7BarWC5XLIa7r0SRVH+Sxi8BbtZDIdD6Pf7/mAwoAGYU1VVGd8vLujP2Ywaxi9qmqa/WDigqsNFOp2Wd3aIn+KgABRFoZ1OB7DjDR1FgW63C5PJBAxjBvP5nHqeB6PRyBHFHcJEIlHB7hzXdYPNfnDAtu0NbI0QYlNiz6llmb7rOjDCMzc6DG+oLAhCJZ/Pe6VSCQqFAhSLReQIjgrvIf/hI7w8JvDiC8CzzwCHx9fx+VeAJ58MT7j3gAm5LeEJz/Nn2WzWyOVyTiaTIZgjB+Qg84g8fPyU7L8+J7F3OuHf/EAm1/Gt7vCvzg3u9n12yxy3JQznUArA2bqJIEi8cFfau7UvRf9gT7gjhaL1cP/fP+U3th+VdIFR8dcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of cancel in a modal",title:"Example of cancel in a modal",src:"/static/2cc8e3b9cd8421385a55f0456b649d12/3cbba/common-action-1.png",srcSet:["/static/2cc8e3b9cd8421385a55f0456b649d12/7fc1e/common-action-1.png 288w","/static/2cc8e3b9cd8421385a55f0456b649d12/a5df1/common-action-1.png 576w","/static/2cc8e3b9cd8421385a55f0456b649d12/3cbba/common-action-1.png 1152w","/static/2cc8e3b9cd8421385a55f0456b649d12/392b1/common-action-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Clear"),Object(n.b)("p",null,"Clear removes data from a field or removes selections. Clear can also delete the\ncontents of a document, such as a log. For controls that have a default\nselection or value, such as radio buttons, the default selection or value is\nreset."),Object(n.b)("p",null,"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"close")," icon on the right side of a field, item, or value."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVQoz41Ty2rCQBTNBJr+SaG7rkuhv+B/mE277S4/UtvionUt2Rgr7gpGMRqJWNGIr/hMfCQqlOnJkBShRDNwmMU9c+6ZuWc47mhRSrm46yw3JGAngHCM1WolOI4j2LYteJ53eTgcLs6KyrJM/F3X9RtJkgxVVfXRaKSbpqmv1+sQGoRN4NXnzmYzPlIwl8uxYqFQuMvn87TValHLsuhwOKSTyYQBDajruhRNvnzudruNFlQUhRWz2extqVT6qdVqe03T9s1mc28YRgi30+nQRqPx6XN3u120YL1eZ8VqtXo/nU6ZI7wZcxQCV6b+gtNy8IbRgoPBgAT7FfDW7/dTy+UyNZ/PX47wDLyj4VM4wJOThgMSNzaY/GnuYrFgBLi6hoOHXq+XhEtxPB6Lm81GRDMRQ0hiso+oJXxuu92OFoUIH0QhAREDj1/udrsViFbQhAFxUTH1b0TrI4gYf9IlDse9MY+mXCwxOOUQFZJOp0kmkyHFYpEEv+cP4Rnk9J/OL66tZLBBMJtEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of clear in multiselect dropdown and in a search field",title:"Example of clear in multiselect dropdown and in a search field",src:"/static/6f5487cba4e3b9415a696d3f69c8203a/3cbba/common-action-2.png",srcSet:["/static/6f5487cba4e3b9415a696d3f69c8203a/7fc1e/common-action-2.png 288w","/static/6f5487cba4e3b9415a696d3f69c8203a/a5df1/common-action-2.png 576w","/static/6f5487cba4e3b9415a696d3f69c8203a/3cbba/common-action-2.png 1152w","/static/6f5487cba4e3b9415a696d3f69c8203a/392b1/common-action-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Close"),Object(n.b)("p",null,"Close terminates the current page, window, or menu. Close is also used to\ndismiss information, such as notifications."),Object(n.b)("p",null,"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"close")," icon, which is typically placed on the upper right side of the\nelement. Do not use close in a button."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0ElEQVQoz62STwqCQBjFtRN5hq4X1K4rdAkZayHVMsEw0iwrs3S0LLU/1muUKIiKWfTBY77F4zfvMSMIbwNA4BkuHy+smFqj+dvQ6uyfe39I64bldvWxK5tOQIL9jWx2OfHjK1mFJ8WLzlLhW28v4ndg+wXs6YFqLyk0w8FouoG1CGEvI0QpkF4BP86rhY9dVOECanamHll/luCpApbkQHYD6AElkJ0VrsqDSVqfulHXdKhszimZeTEJE5TVmRQm6ZFQ/NujsHTC/75Dme6z7w6+Qqrj4tVWsAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of close in an toast notification",title:"Example of close in an toast notification",src:"/static/f93e2e7bde277de34250ff87570b5e03/3cbba/common-action-3.png",srcSet:["/static/f93e2e7bde277de34250ff87570b5e03/7fc1e/common-action-3.png 288w","/static/f93e2e7bde277de34250ff87570b5e03/a5df1/common-action-3.png 576w","/static/f93e2e7bde277de34250ff87570b5e03/3cbba/common-action-3.png 1152w","/static/f93e2e7bde277de34250ff87570b5e03/392b1/common-action-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Copy"),Object(n.b)("p",null,"Copy creates a new identical instance of the selected object(s)."),Object(n.b)("p",null,"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"copy")," icon with a confirmation “copied” tooltip appearing post-click or\ntap."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.208333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABAUlEQVQY05VQu2qEQBQdlyRDylQmX+EnaOxstxOx8mPyGfEDLNRCXNDKddtgIQQEBRERRHygKDbmzsAmWaz2wOFw7uWeuXcQAnRdRwT1fY/atmXA37BpGqaua4b0hmFgsixj0D+Iooh2mKYJ3QkSigVBeCCG47h92DiOz8uyvK7ryl45zzMLfRa2ox42fNu27UXTtA9Zlk88z7+TWUmSDr+BcA41cNqxLMsv4LkoigvopaoqqoSkluc5qQVpmn5blvVJ5uABpOv634ZxHFNNkuTg+z52XffJtm3sOA4OwxAHQYCjKMKmaWLDMLDneRhCHoH0L1VV3X/INfReKIpy438AfBao6P79ECMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of copy in a code snippet",title:"Example of copy in a code snippet",src:"/static/641899c670a50315e63c7ef49ba015e8/3cbba/common-action-8.png",srcSet:["/static/641899c670a50315e63c7ef49ba015e8/7fc1e/common-action-8.png 288w","/static/641899c670a50315e63c7ef49ba015e8/a5df1/common-action-8.png 576w","/static/641899c670a50315e63c7ef49ba015e8/3cbba/common-action-8.png 1152w","/static/641899c670a50315e63c7ef49ba015e8/392b1/common-action-8.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Delete"),Object(n.b)("p",null,"Delete destroys an object. Delete actions cannot be easily undone and are\ntypically permanent. Warn the user of any negative consequences if an object is\ndestroyed, such as loss of data. Use either the ",Object(n.b)("inlineCode",{parentName:"p"},"delete")," or ",Object(n.b)("inlineCode",{parentName:"p"},"trash can")," icon, a\ndanger button, or a danger option in a menu. A danger modal is used when a\nwarning is needed to confirm an action."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"111.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAADbUlEQVQ4y7WUT2wbRRTGd7OxnQYU6uBIboRwLuQATXzKjTOnVhyQ4FSEgggkuUUVSBUHThzohTM1rSjqFZrW6lqlVD00Uv4qkSLlr7N1pCiund31Ovaud9e78/hm47hraC4FRvrpzXye+fxmZ94IgiDcA/db8d9w6tHu3O/q6mojimJAWDuLsIfAF/FBX1/fA1mWi4uLi5X5+XltZWVFX15e1jE+Cz6nks1mi4lEQobHbODVMpwdGBiQNzY2nGKxSKVSiXhUVZV836dwY4wFWrPZDMYHBwfO4OBg7h+G/F/W1tbMfD5POzs7PmC7u7tMURRWKBTYXj7P9hHVoyOmaRozDMO3TJOUvT0zmUzmXprh6uqqtb29TciUbW5u0tbWFp1GaEE8PDwMMj8+PmZ2w6ZnyjPrpYb9/f0yMrEcx6F6vc5M0+ygBo5BvdFgNctiBuY0XJeU/X0reeHCC8PWCc3GYjF5YmLCnpmZocnJSZqamqJp8NX0NH395SQpn3xB+kefU+nSFSpf/pRKl6+Q8eFntPHBx3Yydu7E8MQrOO5ZHP+DdDqtjY2NWSMjI/XR0VEzDd5Lj5rvv3vRfDQwbK7F3zEXe982l3pTPNZXe1PWw3NvaQlRkluGwT3MtrLMRiIRORqN5pBtBz3gvNSdi3Mi0Tb94I3uiCyGPLjh7yF+e0XCHkLqFHzUlCRJQ9j+EO9z0E91Q4uJXUM9ICaIqTBREPYQ/o/WHR4MDw/3/F0bHx+P9KChK53hIcbjcZFHYWlp6Taq4gYHlzozNzd3BzV6G1USaLjYP2P868LCwp319fVfoP3EdfzO481yuXzdtu3Xuauu64KAS9tRqygpsiyrQ2s0GrwyiF963hzbJkPXiXk+VTTd0FU1ERiqqihgsYc5vNKbKPwmFnqolBcaMG3bQ/16yCTQrabbPDQqbhWVUvf9/eeG8SY3rNi2KGCxi9cjwPM8Fxm6tVrNhXkAb9Vq1cV2XNdxXBi61Z1dV7l7zyn+8Sepj58UCrmHgWHx0WNRoFdpT+fJ/u57Yj/8SMo339aeX70WbPng6jVRwBYzyC4Ab1wGmWTCmu95GTxTGbwwgc64RsS5AW7hu1zHX7zGDfF5/ru7R6dmOEEJgzbIQsJBdWjIXKpUKlJ7Lo/lI4lUTXKhU6l8Yqpqwl8z9GZdVYnrgAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of delete in a modal and overflow menu",title:"Example of delete in a modal and overflow menu",src:"/static/cc4af9cb629f0da1db6170d6ab9e56c7/3cbba/common-action-4.png",srcSet:["/static/cc4af9cb629f0da1db6170d6ab9e56c7/7fc1e/common-action-4.png 288w","/static/cc4af9cb629f0da1db6170d6ab9e56c7/a5df1/common-action-4.png 576w","/static/cc4af9cb629f0da1db6170d6ab9e56c7/3cbba/common-action-4.png 1152w","/static/cc4af9cb629f0da1db6170d6ab9e56c7/392b1/common-action-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Low-impact deletion"),Object(n.b)("p",null,"Use when it’s trivial to undo deletion or recreate the data. Delete the data\nupon click or tap without further warning."),Object(n.b)("h3",null,"Moderate-impact deletion"),Object(n.b)("p",null,"Use when an action cannot be undone or the data cannot be recreated easily. This\npattern is also useful if you’re deleting more than one thing."),Object(n.b)("p",null,"Ask for confirmation of the delete, with guidance about what will occur if they\ndelete."),Object(n.b)("h3",null,"High-impact deletion"),Object(n.b)("p",null,"Use when it would be very expensive or time-consuming to recreate data. Also use\nif the action deletes a large amount of data, or if other important items would\nbe deleted as a result of the action."),Object(n.b)("p",null,"In addition to presenting a dialog, have the user type the name of the resource\nthey are deleting (manual confirmation)."),Object(n.b)("h3",null,"Post-deletion"),Object(n.b)("p",null,"After the user deletes data, return to the page that lists the data deleted.\nAnimate the removal of the data from the list or page and present a success\nnotification."),Object(n.b)("p",null,"If the deletion fails, raise a notification to tell the user that deletion\nfailed. Send a second notification on another communication channel, like email,\nif possible. Animate the data back onto the page if possible."),Object(n.b)("h2",null,"Edit"),Object(n.b)("p",null,"Edit allows data or values to be changed. Edit commonly triggers a state change\nto the targeted object or input item."),Object(n.b)("p",null,"Offer edit as an option in a menu, or as a button or ",Object(n.b)("inlineCode",{parentName:"p"},"edit")," icon."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQY01VQxwrFMAzL//9bKT12770XXQc/JEjpO4jEiiLLVuu6Sl3X0jSN5HnO84uiKCTLMr5pHVBV1Z8eNbxU3/fi+74EQSCWZfEehiERRRE5wzAI27bJAbibpvnqPM+TrutEnecpy7LQHeZIMU0Ta819sW0b+XmeZRiGVwcPeCl8TtOU8ZHSdV2J45ijgkMCdEdyx3FYYwV6KmighQe8FDpiB4hbluW7K9SA3hXekiRhMz0JuLZtqYMHvNTzPHJdF+Mi+jiOsu+73PdNXo8H4K754zjeMfV/eP0AgOG/smKOQLIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of edit in a data table cell",title:"Example of edit in a data table cell",src:"/static/dc2fc382540a8cb4781e17b574f64a11/3cbba/common-action-9.png",srcSet:["/static/dc2fc382540a8cb4781e17b574f64a11/7fc1e/common-action-9.png 288w","/static/dc2fc382540a8cb4781e17b574f64a11/a5df1/common-action-9.png 576w","/static/dc2fc382540a8cb4781e17b574f64a11/3cbba/common-action-9.png 1152w","/static/dc2fc382540a8cb4781e17b574f64a11/392b1/common-action-9.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz6VSSWrEQAzsV8xn8s8ckicEhhznAzka7IPxxRt431ewsRtrVAIb5poxFN1dLZVKaqtpmqgoCsqyTFBVFZVlKQAfx7EgTdOLB5IkkfjznOc5QUs1TUO+75PjOGTbNgVBIAjDkFzXJcMwBKZpvtxZliU52IPzPI/quia1riuN40h930slOEQlYBgGCWrbVviu6647cLjHHvnYL8tCCkJoKYoicYRKaAcAf3JY4ea8O52ibYwDhUVwnuednQk4UMBudg6QFWdOkJXnJDzAQsjR7O5gl4fWmrZt04re/LhVzaPQLLbjDMGvf+Cb8ckid7wuZosZ8gP/qXc+/q1uLPLD7/DL83vw+D6ewigavGoPFc8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of edit in an overflow menu",title:"Example of edit in an overflow menu",src:"/static/f771a7be2301340f5b0c1e4a457d29f4/3cbba/common-action-10.png",srcSet:["/static/f771a7be2301340f5b0c1e4a457d29f4/7fc1e/common-action-10.png 288w","/static/f771a7be2301340f5b0c1e4a457d29f4/a5df1/common-action-10.png 576w","/static/f771a7be2301340f5b0c1e4a457d29f4/3cbba/common-action-10.png 1152w","/static/f771a7be2301340f5b0c1e4a457d29f4/392b1/common-action-10.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Errors"),Object(n.b)("p",null,"Errors occur when an action or process does not succeed. Error notifications can\noccupy full pages, form fields, notifications, and modals. Error notifications\nshould provide context of what happened and a clear path to continue."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"113.54166666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAADgUlEQVQ4y62VXU/bZhTHcYKWqV13E5ogxUBFRyckEBLc7KZTJS62D4Aaab1wXwSTKu0D7AK2kd70BmmTBhO0QqiaNhVBgTGgpEko4s1tx0hEaWpKgmMnsRO/J2lTyPCOH9Ipq1NVVD3ST//nRec85/E5tisqiuZ0OhGl49L5O5vL5frfvLq6+t0CNTc3I21ra7M0NjbWNDU14V1dXTZd1y0sy1o1TUNkMplSkM8rNRk4HzmRbDZbfiMajSLlOO5YOBy+xDDMV8lk8nw6nXbncjk3ZIGAAAbngQuAqxgUMwVUVRUrZnkSApFwQIim6Q0Yh2AvJMtyKRvANnDO8AG1vLcrFwoFrOwGXA1tKIpih6zmE4lEANQvCMIsZPgnXHemhGnAB3xWLIo5QwiENJ/Pf5RKpb6FgD08z3cbCod9J4piTwndwDXgU8MH1Jyl2+1G2t7ebunt7bUZ4+Hh4bc+hjfuS5KETins71fH43EGqp3OaBoH1+Vfw1hLABrwRbGgVlNAMrKDNKjK1kVy7VR4ZwdPShJOcxweicfxaMIggUdYBt9VFVfsxfOaXVn60PChc2V6kfp9FOlm30/HIyurnamtJwQfDBHi462L6lOKUMIGTwl1+xkhP/yLEBaXrojLqzXoGQbum5+hePfeYZVv/VYlhDbXIGCQp7ZJMbpLqjGGVGIxUqFjpMrGSXnryaqw/ndQ3Ah+jnwfPLJUvC/L6Hr5PhSkw9IXDv6pohlmOcnza9lcbhk+CCvQZ6+zBAVbBz37xj4Us4dfjH394BgrCpcTHPe1oqpdkqIAclEPSQlCZ1oUr6YFoc7wgbk5y+TtcbT4bGjYnr2/NKbuRKeESHRC2aUnVTo2mWHjkxmGndRizMSBJN/ZS6Xn9tICelNgbvH7/eUbFNSmR2M/6rnnv+gv8v36y70BfW9/IM/xAxB0IBdP9MP6z7qq3dQP9DPIR9XMV65yONCiw+n88mPHyb7jJ058b62s9MCS5wObzTM4NOTx+f2emdlZzx/T0z/MzM1d997zdho+v47erjBliOO4tfgL+KahoSH1yenTWzCmnA4HVVdXR42MjFALCwvU/Pw85fV6w36fj4UgNwyfQCCAmQIa1tLScuS2gUPKb7S2tv73byEIAuvo6MDq6+sxu92O1dbWYoODg9jU1BQ2NjaGjY+PY5ClkRUqpM/nQxj2LzdknTwpjRI0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Form example with inline notification",title:"Form example with inline notification",src:"/static/11e50d48eba544efc3f65f57474db584/3cbba/notification-usage-3.png",srcSet:["/static/11e50d48eba544efc3f65f57474db584/7fc1e/notification-usage-3.png 288w","/static/11e50d48eba544efc3f65f57474db584/a5df1/notification-usage-3.png 576w","/static/11e50d48eba544efc3f65f57474db584/3cbba/notification-usage-3.png 1152w","/static/11e50d48eba544efc3f65f57474db584/392b1/notification-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"Consider redirecting the user to a previous state, a support page, or offering\nrecommendations. Be honest and helpful."),Object(n.b)("p",null,"Some components, like text input and form field errors, are quite small and\nrequire more thoughtful approaches to the space and placement of error handling.\nConsider inline error notifications for these instances."),Object(n.b)("h3",null,"Content guidelines"),Object(n.b)("p",null,"Be brief, honest, and supportive. Explain what happened and what can the user do\nto resolve the error."),Object(n.b)("p",null,"For full-page and large modals, keep error messages no longer than three\nparagraph lines. For form errors, keep error messages no longer than two lines."),Object(n.b)("h2",null,"Next"),Object(n.b)("p",null,"Next advances the user to the next step in a sequence of steps, like in a\nwizard."),Object(n.b)("p",null,"Represent next with a ",Object(n.b)("a",i({parentName:"p"},{href:"/components/button/usage"}),"button with icon")," or a\nstandalone ",Object(n.b)("inlineCode",{parentName:"p"},"forward")," icon."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz62Rz4vTQBTHp8nBbZVd0D0IHjx5ENFDz16lEWFRZG3Am7gKu+qePAriakFUEEHUg7iIQm9VECyuUBAvwrbFLq2m1qRN0qQ/kmyamfy09Tkpsn/BPvjynfk++MxjHkJx3YIEWmgzN/NRAgAQVaLRaDD1ep2Jz3EmiiLT6XR2+pVKZacnyzIjCELCNE2EDl/rHVpYfbvv7DvY86oo7c3dvT3/7PmLOcMwkpZlJfP5/NydtXv7fzZ/p34IrdSDh48OvFx/M+sF0UyhUJjN5XLzzWYzpWnaTLlcRrtflfLmpe+12tVqtXqltrW1RAhZpJPx1HnHwbzrEl7SRhdEDfO6FfHq0OWroptVdCuLHTsbBOGi4zgXqTiMMYtarRboug5hGMJ4PAYHE5CkNmzbNkRRNM1U3QCRZoZhQhD4MLD/gCRr0O2qQEEQF3WBApOI/hUZDgcT3w+i0HcnAbE8tfMrNAfa2Pf9KUDrW6B2dTDMbXA9H0bYA4XeVUUBmz78H9iYAkul0vLGxufVTx8/rBS/qUuvv0bX178EN95v+pddgjMYO5w69DM9+y/XNUOu3cNcUyUZ03Y5z3NPY0w4CjtDYSepGJROp+8fPXbiyfEjB9fQqeIy4uExOj95is7Byq4vrG9i1iUOK/cxSyebukIl6oQdmCPWGdksnY6Nl0GdoY7+AYwlmO56BfxYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of next as a button with icon",title:"Example of next as a button with icon",src:"/static/42f8976931b73ea1acd8bb04f7e69d6c/3cbba/common-action-11.png",srcSet:["/static/42f8976931b73ea1acd8bb04f7e69d6c/7fc1e/common-action-11.png 288w","/static/42f8976931b73ea1acd8bb04f7e69d6c/a5df1/common-action-11.png 576w","/static/42f8976931b73ea1acd8bb04f7e69d6c/3cbba/common-action-11.png 1152w","/static/42f8976931b73ea1acd8bb04f7e69d6c/0b124/common-action-11.png 1728w","/static/42f8976931b73ea1acd8bb04f7e69d6c/99571/common-action-11.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Refresh"),Object(n.b)("p",null,"This action reloads the view of an object, list, or data set when the displayed\nview has become unsynchronized with the source."),Object(n.b)("p",null,"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"refresh")," icon or a button."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVQoz5WRSW/TUBSF/ePYwKJIVREI/g4rFkRVGBb9FUgoygJSqISqxrHjEJp4eB4yyLGTtI6Hxk4cOLz7IketxIbF0bnny/XxlSMVmw2iVYw4ToSn2R3WefHfulvn2G5LSMU6wWzCMPc9+GOGLArwZ5Ngl6+wK2KhMt/rX/PuMK/wu8whsXCHC73EpbXFD7PE118FvvRzoRafKX+7znExoMx9SCrE/J2zc/5b65r21zD8LaSzVoZHrwO8fHeLk9MIR7UUT2uZ0JM3ER5zvXif4tXHFCf1DM/rEY5rNzg+5exDimd1UoajtwnOzgtIjm2h8fkTNLWDnz0VI8eER7JNdJUr9FQZLt9xGHELPU1Bp33Jsw6H77j2njNziJtFCMm2HTSbTXS7XWiaBsuyYJomDC6504GiqAdGTjuyLEPXjQM3uQ+HOsJwToU2Go0GVFUVy4wxvrRflGUqVO4VMvHidrsNw6gKLeG6rmM+54VBEKDf74six3EwnU6FJpOJWCReZXI6gHiVK43HY0RRBClNU35qCCpeLpegnCSJEDF6a8XIF4uF4HEcP+CUi4L/KfTAYDAQbx6NRuIBYqTq6oqRe54nLqQj7nPKVCzRQN+Oykiz2UxcQE5lVEBzxSm7rvuAkfu+L678C+DBFboZqQYIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of edit in a data table cell",title:"Example of edit in a data table cell",src:"/static/bc68bca9d0b3d860eab3129c56f6d5eb/3cbba/common-action-12.png",srcSet:["/static/bc68bca9d0b3d860eab3129c56f6d5eb/7fc1e/common-action-12.png 288w","/static/bc68bca9d0b3d860eab3129c56f6d5eb/a5df1/common-action-12.png 576w","/static/bc68bca9d0b3d860eab3129c56f6d5eb/3cbba/common-action-12.png 1152w","/static/bc68bca9d0b3d860eab3129c56f6d5eb/392b1/common-action-12.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Remove"),Object(n.b)("p",null,"This action removes an object from a list or item. Remove is distinct from\ndelete, as a removed item is not destroyed. Multiple objects can be removed at\nonce."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABU0lEQVQoz62SvWrCUBSAT1qTWBqpUGchkME8iQ6iq0NWwTVblzxDVhdbIdAhxSeIP0gcXBIkCZQsajIlmz+bDvbcqFitdGg98HG4557z3XvhAtwg1uv1abHb7f4t3G635wUijaKoPZvNPoMgsJbL5QRPnaxWq9+wscdHWsSx2WwAaydhHMfKfD7/QKG2WCza2PiKvB3yNVooeEdeiMO27f3Ty+Xy98veH/h7MAyTZFmWHyVJytVqtVyj0chOp1PGcRzW87wfuK7L+r7PDgaDdKfTSQSFQgFwD4DjuERYr9fT1Wo1W6lUnhRFSY/H41S/36dx6Cqj0Sil6zrTbDZpMi8IAmAdIJPJHIUPxWIxVyqVnnu9Hm2aJt3tdmkiJetLUEhrmsaqqpoIeZ4HrO+fnc/nz77PcDikDMO4QxmFTRTJl5B9y7KoMAyp4xzWAURRhFvGF4KOB+Cf/YHrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of remove in a structured list",title:"Example of remove in a structured list",src:"/static/3d6c58682b459ea4c4fc231f1ae9f55f/3cbba/common-action-5.png",srcSet:["/static/3d6c58682b459ea4c4fc231f1ae9f55f/7fc1e/common-action-5.png 288w","/static/3d6c58682b459ea4c4fc231f1ae9f55f/a5df1/common-action-5.png 576w","/static/3d6c58682b459ea4c4fc231f1ae9f55f/3cbba/common-action-5.png 1152w","/static/3d6c58682b459ea4c4fc231f1ae9f55f/392b1/common-action-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Hierarchy and placement"),Object(n.b)("p",null,"Represent remove as a button or ",Object(n.b)("inlineCode",{parentName:"p"},"subtract")," icon or glyph. The remove action is\nrarely the primary action on the page and should not be overly emphasized."),Object(n.b)("h3",null,"Considerations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"What are the implications of the remove action for the user? Are there\nfinancial, access, or legal considerations?"),Object(n.b)("li",{parentName:"ul"},"This action can be confused with deleting."),Object(n.b)("li",{parentName:"ul"},"A user may not have the correct permissions for this action."),Object(n.b)("li",{parentName:"ul"},"Inform the user if the result is permanent."),Object(n.b)("li",{parentName:"ul"},"How long will the action take? Seconds, minutes, hours, or days?"),Object(n.b)("li",{parentName:"ul"},"What should the user do if the removal fails?"),Object(n.b)("li",{parentName:"ul"},"Is this a single or bulk action?")),Object(n.b)("h2",null,"Reset"),Object(n.b)("p",null,"Reset reverts values back to their last saved state. The last saved state\nincludes the values stored the last time the user clicked or triggered\n",Object(n.b)("strong",{parentName:"p"},"Apply"),"."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("p",null,"Reset is typically applied as a link."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.86111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABQElEQVQY023PwUoCQRwG8Fk3NS9bFIZtEia7HQpZJCkyEAzBosgoJAkhQUQIOvQolRcvnetQl+joAyS4h32APe9lFXZh19v0/QeJiAZ+fN/MzgyzjNFocxGsxSXW4Qrrwi2PsF/DcZwF3/d1z/NWkFnYnM1JHr2A3BGbq92+yPr9c6TYfFTipd58KlebozVN0+4QBc55GTgO9XCYvKO/IN/gCkpQERdtrKsis5l0LJNOplOLsqImFXGhYRjLiNh0Os3hglegw5fQhhtoYY3mZ1Bjk8lEGgwG4vc0XV9aVdW9xnUzjsdIw+GXWEeXR6NRlDr9MtDrPuFjln14gCf2Z8iwBgmQ2D8jDMMoXnIOdbiARhAEiZ8NeGERylChbtv2qWmaJ5Zl0fwIDsbj8SEco+8D9bzrulvou+jbszuq9P0bFH/rWSelcTkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of reset in a filter",title:"Example of reset in a filter",src:"/static/a64401d3669a840cbb254150a5de6b1c/3cbba/common-action-6.png",srcSet:["/static/a64401d3669a840cbb254150a5de6b1c/7fc1e/common-action-6.png 288w","/static/a64401d3669a840cbb254150a5de6b1c/a5df1/common-action-6.png 576w","/static/a64401d3669a840cbb254150a5de6b1c/3cbba/common-action-6.png 1152w","/static/a64401d3669a840cbb254150a5de6b1c/392b1/common-action-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}u.isMDXComponent=!0}}]);
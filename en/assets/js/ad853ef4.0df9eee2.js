"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={slug:"release/3.12.0",title:"Release 3.12.0",authors:["harry"],tags:["release"]},i=void 0,o={permalink:"/en/blog/release/3.12.0",source:"@site/blog/2023-08-14-release-3.12.md",title:"Release 3.12.0",description:"\u5347\u7ea7\u8bf7\u53c2\u8003  \u5982\u4f55\u66f4\u65b0 Midway \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002",date:"2023-08-14T00:00:00.000Z",formattedDate:"August 14, 2023",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:2.485,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.12.0",title:"Release 3.12.0",authors:["harry"],tags:["release"]},nextItem:{title:"\u79fb\u9664 Node.js v14 \u7684 CI \u73af\u5883",permalink:"/en/blog/remove-node-14-ci"}},p={authorsImageUrls:[void 0]},s=[{value:"Breaking",id:"breaking",level:2},{value:"Features",id:"features",level:2},{value:"1\u3001ESM \u7684\u652f\u6301",id:"1esm-\u7684\u652f\u6301",level:3},{value:"2\u3001FaaS \u67b6\u6784\u53d8\u66f4",id:"2faas-\u67b6\u6784\u53d8\u66f4",level:3},{value:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316",id:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316",level:2},{value:"\u4f9d\u8d56\u66f4\u65b0",id:"\u4f9d\u8d56\u66f4\u65b0",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,n.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,n.kt)("p",null,"\u5728\u7ecf\u8fc7\u4e86\u51e0\u4e2a\u6708\u7684\u52aa\u529b\u66f4\u65b0\u4e4b\u540e\uff0cMidway \u8fce\u6765\u4e86 3.12 \u7248\u672c\uff0c\u8fd9\u662f\u4e00\u4e2a\u6539\u52a8\u6bd4\u8f83\u5927\u7684\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"breaking"},"Breaking"),(0,n.kt)("p",null,"\u4ece v3.12.0 \u5f00\u59cb\uff0cMidway \u79fb\u9664\u4e86 Node.js v14 \u7684 CI\uff0c\u539f\u56e0\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/blog/remove-node-14-ci"},"\u8fd9\u91cc"),"\u3002"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("h3",{id:"1esm-\u7684\u652f\u6301"},"1\u3001ESM \u7684\u652f\u6301"),(0,n.kt)("p",null,"\u4ece v3.12.0 \u5f00\u59cb\uff0cmidway \u652f\u6301\u521b\u5efa ESModule \u9879\u76ee\uff0c\u4f7f\u7528\u65f6\u548c\u4f20\u7edf CJS \u9879\u76ee\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u7531\u4e8e\u65f6\u95f4\u7d27\u8feb\uff0c\u6211\u4eec\u6ca1\u6709\u9488\u5bf9\u6240\u6709\u7684\u7ec4\u4ef6\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5982\u6709\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u8bf7\u63d0\u4ea4 issue\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u7531\u4e8e\u539f\u6709\u7684\u5de5\u5177\u4f53\u7cfb\u5df2\u7ecf\u65e0\u6cd5\u5f88\u597d\u7684\u517c\u5bb9 ESM \u73af\u5883\uff0c\u4e3a\u4e86\u51cf\u5c11\u7ef4\u62a4\u6210\u672c\uff0c\u6211\u4eec\u542f\u7528\u4e86\u4e00\u5957\u5168\u65b0\u7684\u5de5\u5177\u94fe\uff0c\u540e\u7eed\u666e\u901a CJS \u9879\u76ee\u4e5f\u4f1a\u7edf\u4e00\u5230\u8fd9\u4e00\u5957\u4e0a\u6765\u3002"),(0,n.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b ",(0,n.kt)("a",{parentName:"p",href:"/docs/esm"},"ESM \u6587\u6863"),"\u3002"),(0,n.kt)("h3",{id:"2faas-\u67b6\u6784\u53d8\u66f4"},"2\u3001FaaS \u67b6\u6784\u53d8\u66f4"),(0,n.kt)("p",null,"\u4ece v3.12.0 \u5f00\u59cb\uff0cMidway FaaS \u4f7f\u7528\u5168\u65b0\u7684\u4e00\u5957\u67b6\u6784\u652f\u6301\u73b0\u6709\u7684 Serverless \u5e73\u53f0\uff0c\u8fd9\u4e00\u90e8\u5206\u540e\u7eed\u5c06\u4f1a\u5728\u6587\u6863\u4e2d\u4f53\u73b0\u3002"),(0,n.kt)("p",null,"\u4e3b\u8981\u7684\u53d8\u5316\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Midway \u4e0d\u518d\u63d0\u4f9b \u201c\u5e94\u7528\u90e8\u7f72\u5230\u5f39\u6027\u5bb9\u5668\u201d \u7684\u517c\u5bb9\u65b9\u6848\uff0c\u5982\u679c\u5e73\u53f0\u652f\u6301\u4f7f\u7528\u4f20\u7edf\u5e94\u7528\u90e8\u7f72 Serverless \u5bb9\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6807\u51c6\u9879\u76ee\u90e8\u7f72"),(0,n.kt)("li",{parentName:"ul"},"Midway \u4e0d\u518d\u63d0\u4f9b f.yml \u7684\u7ef4\u62a4\u5de5\u4f5c\uff0c\u4e5f\u4e0d\u518d\u63d0\u4f9b\u90e8\u7f72\u529f\u80fd\uff0c\u4ec5\u63d0\u4f9b\u5c06\u73b0\u6709\u51fd\u6570\u4fe1\u606f\u5199\u5165\u5e73\u53f0\u914d\u7f6e\u7684\u80fd\u529b\uff0c\u6240\u6709\u7684\u51fd\u6570\u90e8\u7f72\u5c06\u7531\u5e73\u53f0\u81ea\u5df1\u7684\u5de5\u5177\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("li",{parentName:"ul"},"\u79fb\u9664\u4e86\u539f\u6709\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"@midwayjs/serverless-app")," \u542f\u52a8\u548c\u5f00\u53d1\u7684\u6a21\u5f0f\uff0c\u4f5c\u4e3a\u66ff\u4ee3\uff0c\u5c06\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"@midwayjs/fc-starter")," \u6765\u8fdb\u884c\u5f00\u53d1")),(0,n.kt)("h2",{id:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316"},"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1\u3001\u6dfb\u52a0\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"ctx.getApp()")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u4ece ctx \u62ff\u5230\u81ea\u5df1 app\uff0c\u6253\u901a\u4e86\u6574\u6761\u4ece framework\uff0c\u5230 app \u548c ctx \u7684\u94fe\u8def")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2\u3001core \u4e2d\u7684 httpClient \u73b0\u5728\u652f\u6301\u4e86\u6240\u6709\u7684 http method")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3\u3001\u589e\u52a0\u4e86\u4e00\u4e2a\u5185\u90e8\u8df3\u8f6c URL \u7684 api\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"ctx.forward"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4\u3001IoC \u5bb9\u5668\u589e\u52a0\u4e86\u4e00\u4e2a\u83b7\u53d6\u5bf9\u8c61\u4f5c\u7528\u57df\u7684 API\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"container.getInstanceScope(xxx)")))),(0,n.kt)("h2",{id:"\u4f9d\u8d56\u66f4\u65b0"},"\u4f9d\u8d56\u66f4\u65b0"),(0,n.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u67e5\u770b ",(0,n.kt)("a",{parentName:"p",href:"https://midwayjs.org/changelog/v3.12.0"},"Changelog"),"\u3002"))}m.isMDXComponent=!0}}]);
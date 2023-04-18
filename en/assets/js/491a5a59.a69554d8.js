"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,y=m["".concat(o,".").concat(h)]||m[h]||s[h]||i;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},15799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={date:"2023-02-02T20:00",authors:["abnerCrack","czy88840616","luckyscript"]},l="v3.10.6",c={permalink:"/en/changelog/v3.10.6",source:"@site/changelog/source/v3.10.6.md",title:"v3.10.6",description:"Bug Fix",date:"2023-02-02T20:00:00.000Z",formattedDate:"February 2, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"C",alias:"abnerCrack",url:"https://github.com/abnerCrack",imageURL:"https://github.com/abnerCrack.png",key:"abnerCrack"},{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"\u4e0b\u96e8\u5c31\u50cf\u5f39\u94a2\u7434",alias:"luckyscript",url:"https://github.com/luckyscript",imageURL:"https://github.com/luckyscript.png",key:"luckyscript"}],frontMatter:{date:"2023-02-02T20:00",authors:["abnerCrack","czy88840616","luckyscript"]},prevItem:{title:"v3.10.7",permalink:"/en/changelog/v3.10.7"},nextItem:{title:"v3.10.5",permalink:"/en/changelog/v3.10.5"},listPageLink:"/en/changelog/"},o={authorsImageUrls:[void 0,void 0,void 0]},p=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"Committers: 3",id:"committers-3",level:2}],u={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2697"},"#2697")," fix: RouterService match router method all (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/luckyscript"},"@luckyscript"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"validate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2703"},"#2703")," fix: @valid with other decorator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"typeorm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2704"},"#2704")," fix: typeorm logging property (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cross-domain"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2699"},"#2699")," fix: repair the impact of JSONP on normal requests(#2692) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/abnerCrack"},"@abnerCrack"),")")))),(0,n.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"otel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2701"},"#2701")," feat: add ctx.traceId (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"committers-3"},"Committers: 3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/abnerCrack"},"@abnerCrack"),")"),(0,n.kt)("li",{parentName:"ul"},"Harry Chen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u96e8\u5c31\u50cf\u5f39\u94a2\u7434 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/luckyscript"},"@luckyscript"),")")))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=d(a),u=n,f=l["".concat(c,".").concat(u)]||l[u]||p[u]||i;return a?r.createElement(f,m(m({ref:t},s),{},{components:a})):r.createElement(f,m({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,m=new Array(i);m[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:n,m[1]=o;for(var d=2;d<i;d++)m[d]=a[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={date:"2022-10-10T20:00"},m="v3.6.0",o={permalink:"/changelog/v3.6.0",source:"@site/changelog/source/v3.6.0.md",title:"v3.6.0",description:"Bug Fixes",date:"2022-10-10T20:00:00.000Z",formattedDate:"2022\u5e7410\u670810\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-10-10T20:00"},prevItem:{title:"v3.6.1",permalink:"/changelog/v3.6.1"},nextItem:{title:"v3.5.3",permalink:"/changelog/v3.5.3"},listPageLink:"/changelog/page/3"},c={authorsImageUrls:[]},d=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:d},l="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add default generic type to MikroConfigOptions (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2342"},"#2342"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d5fbab666dabbae6fad0e0946b733ea73ac1a9d5"},"d5fbab6"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency amqp-connection-manager to v4.1.7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2354"},"#2354"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/79d4d5bede926be2c00e21250f8edffca747d932"},"79d4d5b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency body-parser to v1.20.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2355"},"#2355"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4cf6bdaa8b10b4ae40598305e1df9ad29dd701ed"},"4cf6bda"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency sequelize to v6.24.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2356"},"#2356"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ecc43d0b96ad7fcc6766831b6db0cb8ca204580c"},"ecc43d0"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add casbin module (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2358"},"#2358"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a7d27863b756dcf81abc4d7dedaf35c517c2c1e3"},"a7d2786"),")"),(0,n.kt)("li",{parentName:"ul"},"add filter params for add controller (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2359"},"#2359"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/1805011d3b2d86f04d6a887f4a86afb093a2a75f"},"1805011"),")"),(0,n.kt)("li",{parentName:"ul"},"add guard (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2345"},"#2345"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/1b952a1b09adbb88ff3cff9a2974eb1e37ce53a5"},"1b952a1"),")"),(0,n.kt)("li",{parentName:"ul"},"add new bull component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2275"},"#2275"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0a37b491720c5d5f0b98e9e42835ba263dd8b975"},"0a37b49"),")")))}p.isMDXComponent=!0}}]);
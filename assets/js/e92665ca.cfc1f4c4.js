"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={date:"2020-12-28T20:00"},o="v2.6.0",c={permalink:"/changelog/v2.6.0",source:"@site/changelog/source/v2.6.0.md",title:"v2.6.0",description:"Bug Fixes",date:"2020-12-28T20:00:00.000Z",formattedDate:"2020\u5e7412\u670828\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2020-12-28T20:00"},prevItem:{title:"v2.6.1",permalink:"/changelog/v2.6.1"},nextItem:{title:"v2.5.5",permalink:"/changelog/v2.5.5"},listPageLink:"/changelog/page/9"},s={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"egg layer x forwarded for (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/768"},"#768"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/568379fca58744410b273cc6fdb40cec83700d08"},"568379f"),")"),(0,n.kt)("li",{parentName:"ul"},"ouput console in serverless environment (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/759"},"#759"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bad20d7950d1ed96a0448aedfac5ae8f909a7960"},"bad20d7"),")"),(0,n.kt)("li",{parentName:"ul"},"parse http is type (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/763"},"#763"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ee77af5e32b36807ddc5d05555826b8562ec6769"},"ee77af5"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add midway logger (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/743"},"#743"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/13e8cc753d994e6f9f073688e22527f75d39984a"},"13e8cc7"),")"),(0,n.kt)("li",{parentName:"ul"},"support https config for web/koa/express (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/742"},"#742"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a0c07b9e3cc2eec7e88e49085f1e66242fa1ec50"},"a0c07b9"),")")))}u.isMDXComponent=!0}}]);
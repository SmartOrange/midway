"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={date:"2021-02-08T20:00"},o="v2.7.5",c={permalink:"/changelog/v2.7.5",source:"@site/changelog/source/v2.7.5.md",title:"v2.7.5",description:"Bug Fixes",date:"2021-02-08T20:00:00.000Z",formattedDate:"2021\u5e742\u67088\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-02-08T20:00"},prevItem:{title:"v2.7.6",permalink:"/changelog/v2.7.6"},nextItem:{title:"v2.7.4",permalink:"/changelog/v2.7.4"},listPageLink:"/changelog/page/8"},m={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ctx logger overwrite in egg extend (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/846"},"#846"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a9d7a0dab8db24c970fe6528deb62afcf24c11b0"},"a9d7a0d"),")"),(0,n.kt)("li",{parentName:"ul"},"load ready after super.load (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/840"},"#840"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/e3293338514909179da31847027f46f23cdc1759"},"e329333"),")"),(0,n.kt)("li",{parentName:"ul"},"stack missing in context logger (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/841"},"#841"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/7b27145ec49c1f89740f8d6f811a00308e90e498"},"7b27145"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add configuration functional support (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/843"},"#843"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bfaa0aad9e8ce667a4bb98af60f1c706e09e7810"},"bfaa0aa"),")"),(0,n.kt)("li",{parentName:"ul"},"add enable method (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/847"},"#847"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a85b99dd775b9cf69dec3a7fa78248d4d82ad814"},"a85b99d"),")"),(0,n.kt)("li",{parentName:"ul"},"add logger.write method (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/844"},"#844"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0051d07d22e9cf88828b723861925d75b00a985f"},"0051d07"),")")))}p.isMDXComponent=!0}}]);
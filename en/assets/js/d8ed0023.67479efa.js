"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80026],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,f=d["".concat(m,".").concat(u)]||d[u]||l[u]||i;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={date:"2022-02-17T20:00"},o="v3.0.7",c={permalink:"/en/changelog/v3.0.7",source:"@site/changelog/source/v3.0.7.md",title:"v3.0.7",description:"Bug Fixes",date:"2022-02-17T20:00:00.000Z",formattedDate:"February 17, 2022",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-02-17T20:00"},prevItem:{title:"v3.0.8",permalink:"/en/changelog/v3.0.8"},nextItem:{title:"v3.0.6",permalink:"/en/changelog/v3.0.6"},listPageLink:"/en/changelog/page/5"},m={authorsImageUrls:[]},p=[{value:"Bug Fixes",id:"bug-fixes",level:3}],s={toc:p},d="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"benchmark (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1719"},"#1719"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/088e3066962b5ad9c5ecae3ba602a3ca5b215f5d"},"088e306"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency body-parser to v1.19.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1708"},"#1708"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/01626e882710108cc9bede8c6f2adcfd142f72f0"},"01626e8"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency express to v4.17.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1713"},"#1713"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c781eca27586b1d07cf672e71776ad9a521e149f"},"c781eca"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency nanoid to v3.3.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1704"},"#1704"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/7e31d41d9d66a3667b21c5c6aa7fedc675ed38aa"},"7e31d41"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency raw-body to v2.4.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1705"},"#1705"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d4a6b8c0a17d5187ac21afd72e8dbf86424fb14f"},"d4a6b8c"),")"),(0,n.kt)("li",{parentName:"ul"},"export asyncWrapper from runtime-engine (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1717"},"#1717"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/f40d0b9bbd05025f0472ae0a0e62fd9accb84937"},"f40d0b9"),")"),(0,n.kt)("li",{parentName:"ul"},"passport middleware definition (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1701"},"#1701"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bca38603437f7645603feba3cd47ad9b696f8db7"},"bca3860"),")")))}l.isMDXComponent=!0}}]);
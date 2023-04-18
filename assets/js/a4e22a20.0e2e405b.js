"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={slug:"jest_update",title:"Jest v29 \u66f4\u65b0",authors:["harry"],tags:["\u66f4\u65b0","jest"]},l=void 0,i={permalink:"/blog/jest_update",source:"@site/blog/2022-10-29-update-jest.md",title:"Jest v29 \u66f4\u65b0",description:"\u6700\u8fd1\u7531\u4e8e axios \u7ec4\u4ef6\u7684\u5347\u7ea7\uff0c\u53ef\u80fd\u5728\u5355\u6d4b\u65f6\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u62a5\u9519\u3002",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[{label:"\u66f4\u65b0",permalink:"/blog/tags/\u66f4\u65b0"},{label:"jest",permalink:"/blog/tags/jest"}],readingTime:.53,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"jest_update",title:"Jest v29 \u66f4\u65b0",authors:["harry"],tags:["\u66f4\u65b0","jest"]},prevItem:{title:"Release 3.7.0",permalink:"/blog/release/3.7.0"},nextItem:{title:"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd",permalink:"/blog/core-decorator-merge"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u7531\u4e8e axios \u7ec4\u4ef6\u7684\u5347\u7ea7\uff0c\u53ef\u80fd\u5728\u5355\u6d4b\u65f6\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u62a5\u9519\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01G4Ze0F1qVxwcNwYeF_!!6000000005502-2-tps-2080-1158.png",alt:null})),(0,a.kt)("p",null,"\u539f\u56e0\u4e3a\u811a\u624b\u67b6\u81ea\u5e26\u7684 jest v26 \u4e0d\u652f\u6301 package.json \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," \u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u7684 jest \u7248\u672c\u4ece v26 \u66f4\u65b0\u4e3a v29"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"@midwayjs/cli")," \u7684\u7248\u672c\u5347\u7ea7\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1.3.16")," \u7248\u672c\u4ee5\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5347\u7ea7\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"2.0"))),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^2.0.1",\n    "@types/jest": "^29.2.0",\n    "jest": "^29.2.2",\n    "ts-jest": "^29.0.3",\n    // ...\n  }\n}\n')))}m.isMDXComponent=!0}}]);
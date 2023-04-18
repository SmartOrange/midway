"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const a={},o="\u5e38\u89c1 TS \u95ee\u9898",s={unversionedId:"faq/ts_problem",id:"faq/ts_problem",title:"\u5e38\u89c1 TS \u95ee\u9898",description:"TS \u6709\u5f88\u591a\u7f16\u8bd1\u9759\u6001\u68c0\u67e5\uff0c\u6bd4\u5982\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5bf9\u8c61\u672a\u5b9a\u4e49\u7b49\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u6700\u4f73\u7684\uff0c\u5e0c\u671b\u7528\u6237\u5408\u7406\u8003\u8651\u7f16\u7801\u98ce\u683c\u548c\u4e60\u60ef\uff0c\u8c28\u614e\u5f00\u5173\u914d\u7f6e\uff0c\u4eab\u53d7 TS \u9759\u6001\u68c0\u67e5\u5e26\u6765\u7684\u597d\u5904\u3002",source:"@site/docs/faq/ts_problem.md",sourceDirName:"faq",slug:"/faq/ts_problem",permalink:"/docs/faq/ts_problem",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/faq/ts_problem.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"\u5e38\u89c1 npm \u95ee\u9898",permalink:"/docs/faq/npm_problem"},next:{title:"\u5173\u4e8e Alias Path",permalink:"/docs/faq/alias_path"}},p={},i=[{value:"\u4f9d\u8d56\u5305\u5b9a\u4e49\u9519\u8bef",id:"\u4f9d\u8d56\u5305\u5b9a\u4e49\u9519\u8bef",level:2},{value:"TS2564 \u521d\u59cb\u5316\u672a\u8d4b\u503c\u9519\u8bef",id:"ts2564-\u521d\u59cb\u5316\u672a\u8d4b\u503c\u9519\u8bef",level:2},{value:"TS6133 \u5bf9\u8c61\u58f0\u660e\u672a\u4f7f\u7528\u9519\u8bef",id:"ts6133-\u5bf9\u8c61\u58f0\u660e\u672a\u4f7f\u7528\u9519\u8bef",level:2},{value:"tsconfig \u4e2d\u5b9a\u4e49 typings \u4e0d\u751f\u6548",id:"tsconfig-\u4e2d\u5b9a\u4e49-typings-\u4e0d\u751f\u6548",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e38\u89c1-ts-\u95ee\u9898"},"\u5e38\u89c1 TS \u95ee\u9898"),(0,l.kt)("p",null,"TS \u6709\u5f88\u591a\u7f16\u8bd1\u9759\u6001\u68c0\u67e5\uff0c\u6bd4\u5982\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5bf9\u8c61\u672a\u5b9a\u4e49\u7b49\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u6700\u4f73\u7684\uff0c\u5e0c\u671b\u7528\u6237\u5408\u7406\u8003\u8651\u7f16\u7801\u98ce\u683c\u548c\u4e60\u60ef\uff0c\u8c28\u614e\u5f00\u5173\u914d\u7f6e\uff0c\u4eab\u53d7 TS \u9759\u6001\u68c0\u67e5\u5e26\u6765\u7684\u597d\u5904\u3002"),(0,l.kt)("h2",{id:"\u4f9d\u8d56\u5305\u5b9a\u4e49\u9519\u8bef"},"\u4f9d\u8d56\u5305\u5b9a\u4e49\u9519\u8bef"),(0,l.kt)("p",null,"\u5982\u679c\u4f9d\u8d56\u5305\u548c\u9879\u76ee\u672c\u8eab\u7684 TS \u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u5728\u7f16\u8bd1\u65f6\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u5173\u95ed\u4f9d\u8d56\u5305\u7684\u68c0\u67e5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "compilerOptions": {\n    "skipLibCheck": true\n  },\n}\n')),(0,l.kt)("h2",{id:"ts2564-\u521d\u59cb\u5316\u672a\u8d4b\u503c\u9519\u8bef"},"TS2564 \u521d\u59cb\u5316\u672a\u8d4b\u503c\u9519\u8bef"),(0,l.kt)("p",null,"\u9519\u8bef\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.\n")),(0,l.kt)("p",null,"\u539f\u56e0\u4e3a\u5f00\u542f\u4e86 TS \u7684\u521d\u59cb\u5316\u5c5e\u6027\u68c0\u67e5\uff0c\u5982\u679c\u6ca1\u6709\u521d\u59cb\u5316\u8d4b\u503c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u5904\u7406\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e00\u79cd\uff1a\u79fb\u9664 tsconfig.json \u7684\u68c0\u67e5\u89c4\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "strictPropertyInitialization": false // \u6216\u8005\u79fb\u9664\n}\n')),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\uff1a\u5c5e\u6027\u52a0\u611f\u53f9\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class HomeController {\n  @Inject()\n  userService!: UserService;\n}\n")),(0,l.kt)("h2",{id:"ts6133-\u5bf9\u8c61\u58f0\u660e\u672a\u4f7f\u7528\u9519\u8bef"},"TS6133 \u5bf9\u8c61\u58f0\u660e\u672a\u4f7f\u7528\u9519\u8bef"),(0,l.kt)("p",null,"\u9519\u8bef\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"error TS6133: 'app' is declared but its value is never read.\n")),(0,l.kt)("p",null,"\u539f\u56e0\u4e3a\u5f00\u542f\u4e86 TS \u7684\u5bf9\u8c61\u672a\u4f7f\u7528\u68c0\u67e5\uff0c\u5982\u679c\u58f0\u660e\u4e86\u4f46\u662f\u6ca1\u6709\u4f7f\u7528\u5c31\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u5904\u7406\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e00\u79cd\uff1a\u79fb\u9664\u672a\u5b9a\u4e49\u7684\u53d8\u91cf"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\uff1a\u79fb\u9664 tsconfig.json \u7684\u68c0\u67e5\u89c4\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "noUnusedLocals": false\n  },\n}\n')),(0,l.kt)("h2",{id:"tsconfig-\u4e2d\u5b9a\u4e49-typings-\u4e0d\u751f\u6548"},"tsconfig \u4e2d\u5b9a\u4e49 typings \u4e0d\u751f\u6548"),(0,l.kt)("p",null,"\u5728 tsconfig.json \u4e2d\uff0c\u5982\u679c\u5b9a\u4e49\u4e86 typeRoots\uff0c\u4e14\u5b9a\u4e49\u4e86 include\uff0c\u5982\u679c include \u4e2d\u4e0d\u5305\u542b typeRoot \u4e2d\u7684\u5185\u5bb9\uff0c\u5219\u4f1a\u5728 dev/build \u65f6\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u6b64\u4e3a ts/ts-node \u7684\u95ee\u9898\uff0cissue \u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node/issues/782"},"#782")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/22217"},"#22217")),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"typeRoots": [\n  "./node_modules/@types",\n  "./typings"\n],\n"include": [\n  "src",\n  "typings"\n],\n"exclude": [\n  "dist",\n  "node_modules"\n],\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\uff0c\u5982\u679c include \u4e2d\u4e0d\u5199 typings\uff0c\u5219\u4f1a\u5728 dev/build \u65f6\u627e\u4e0d\u5230\u5b9a\u4e49\u800c\u62a5\u9519\u3002"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528",p={unversionedId:"quickstart",id:"quickstart",title:"\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528",description:"\u6280\u672f\u9009\u578b",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"2.x \u5347\u7ea7\u6307\u5357",permalink:"/docs/upgrade_v3"},next:{title:"\u8def\u7531\u548c\u63a7\u5236\u5668",permalink:"/docs/controller"}},o={},m=[{value:"\u6280\u672f\u9009\u578b",id:"\u6280\u672f\u9009\u578b",level:2},{value:"\u5feb\u901f\u521d\u59cb\u5316",id:"\u5feb\u901f\u521d\u59cb\u5316",level:2},{value:"\u5f00\u53d1\u4e60\u60ef",id:"\u5f00\u53d1\u4e60\u60ef",level:2},{value:"Web \u6846\u67b6\u9009\u62e9",id:"web-\u6846\u67b6\u9009\u62e9",level:2},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"Python \u7684\u7f16\u8bd1\u9519\u8bef",id:"python-\u7684\u7f16\u8bd1\u9519\u8bef",level:3},{value:"Deprecated \u63d0\u793a",id:"deprecated-\u63d0\u793a",level:3},{value:"windows eslint \u62a5\u9519",id:"windows-eslint-\u62a5\u9519",level:3}],d={toc:m},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528"},"\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528"),(0,r.kt)("h2",{id:"\u6280\u672f\u9009\u578b"},"\u6280\u672f\u9009\u578b"),(0,r.kt)("p",null,"Midway \u6709\u591a\u5957\u6280\u672f\u65b9\u6848\u53ef\u4ee5\u9009\u62e9\uff0c\u6211\u4eec\u4ee5\u90e8\u7f72\u7684\u65b9\u5f0f\u6765\u505a\u533a\u5206\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6280\u672f\u9009\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7eaf Node.js \u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway \u4f20\u7edf\u9879\u76ee\uff0c\u7eaf Node.js \u7814\u53d1\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/koa")," \u4e3a\u4ee3\u8868\u7684\u6a21\u5757\uff0c\u6700\u5b8c\u6574\u7684\u652f\u6301\u540e\u7aef\u9879\u76ee\uff0c\u91c7\u7528 ",(0,r.kt)("strong",{parentName:"td"},"\u4f9d\u8d56\u6ce8\u5165 + Class")," \u4e3a\u6280\u672f\u6808\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Serverless \u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway \u4e3a Serverless \u573a\u666f\u5355\u72ec\u5f00\u53d1\u7684\u6280\u672f\u6808\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/faas")," \u4e3a\u4ee3\u8868\u7684\u6a21\u5757\uff0c\u4f7f\u7528\u8f7b\u91cf\u7684\u65b9\u5f0f\u63a5\u5165\u4e0d\u540c\u7684 Serverless \u5e73\u53f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4f53\u5316\u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"Midway \u521b\u65b0\u6280\u672f\u65b9\u6848\uff0c\u91c7\u7528\u524d\u540e\u7aef\u4e00\u4f53\u5316\u5f00\u53d1\u65b9\u5f0f\uff0c\u8282\u7701\u524d\u540e\u7aef\u8054\u8c03\u65f6\u95f4\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"@midwayjs/hooks")," \u4e3a\u4ee3\u8868\u7684\u6a21\u5757\uff0c\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"td"},"\u51fd\u6570\u5f0f")," \u4e3a\u4e3b\u8981\u7f16\u7801\u8303\u5f0f\u3002")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u7ae0\u8282\u53ca\u540e\u7eed\u7684\u6587\u6863\u5c06\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},"\u7eaf Node.js \u9879\u76ee")," \u4f5c\u4e3a\u57fa\u7840\u793a\u4f8b\uff0c\u5982\u9700\u4f7f\u7528 Serverless \u9879\u76ee\uff0c\u8bf7\u8df3\u8f6c\u5230 ",(0,r.kt)("a",{parentName:"p",href:"serverless/serverless_intro"},"Serverless"),"\uff0c\u5982\u9700\u4e86\u89e3\u4e00\u4f53\u5316\u9879\u76ee\uff0c\u8bf7\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"hooks/intro"},"\u4e00\u4f53\u5316")," \u3002")),(0,r.kt)("h2",{id:"\u5feb\u901f\u521d\u59cb\u5316"},"\u5feb\u901f\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init midway")," \u67e5\u770b\u5b8c\u6574\u7684\u811a\u624b\u67b6\u5217\u8868\uff0c\u9009\u4e2d\u67d0\u4e2a\u9879\u76ee\u540e\uff0cMidway \u4f1a\u81ea\u52a8\u521b\u5efa\u793a\u4f8b\u76ee\u5f55\uff0c\u4ee3\u7801\uff0c\u4ee5\u53ca\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway\n")),(0,r.kt)("p",null,"\u9488\u5bf9 v3 \u9879\u76ee\uff0c\u8bf7\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-v3"),"\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u5c06\u521b\u5efa\u4e00\u4e2a\u7c7b\u4f3c\u4e0b\u9762\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u5176\u4e2d\u6700\u7cbe\u7b80\u7684 Midway \u9879\u76ee\u793a\u4f8b\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src                            ## midway \u9879\u76ee\u6e90\u7801\n\u2502   \u2514\u2500\u2500 controller                 ## Web Controller \u76ee\u5f55\n\u2502       \u2514\u2500\u2500 home.controller.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"\u6574\u4e2a\u9879\u76ee\u5305\u62ec\u4e86\u4e00\u4e9b\u6700\u57fa\u672c\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src"),"  \u6574\u4e2a Midway \u9879\u76ee\u7684\u6e90\u7801\u76ee\u5f55\uff0c\u4f60\u4e4b\u540e\u6240\u6709\u7684\u5f00\u53d1\u6e90\u7801\u90fd\u5c06\u5b58\u653e\u4e8e\u6b64"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test")," \u9879\u76ee\u7684\u6d4b\u8bd5\u76ee\u5f55\uff0c\u4e4b\u540e\u6240\u6709\u7684\u4ee3\u7801\u6d4b\u8bd5\u6587\u4ef6\u90fd\u5728\u8fd9\u91cc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"  Node.js \u9879\u76ee\u57fa\u7840\u7684\u5305\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"  TypeScript \u7f16\u8bd1\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,"\u9664\u4e86\u6574\u4e2a\u76ee\u5f55\uff0c\u6211\u4eec\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u76ee\u5f55\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"controller")," \u76ee\u5f55\u3002"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u4e60\u60ef"},"\u5f00\u53d1\u4e60\u60ef"),(0,r.kt)("p",null,"Midway \u5bf9\u76ee\u5f55\u6ca1\u6709\u7279\u522b\u7684\u9650\u5236\uff0c\u4f46\u662f\u6211\u4eec\u4f1a\u9075\u5b88\u4e00\u4e9b\u7b80\u5355\u7684\u5f00\u53d1\u4e60\u60ef\uff0c\u5c06\u4e00\u90e8\u5206\u5e38\u7528\u7684\u6587\u4ef6\u8fdb\u884c\u5f52\u7c7b\uff0c\u653e\u5230\u4e00\u4e9b\u9ed8\u8ba4\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b ts \u6e90\u7801\u6587\u4ef6\u5939\u5747\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("p",null,"\u5e38\u7528\u7684\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller")," Web Controller \u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"middleware")," \u4e2d\u95f4\u4ef6\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")," \u8fc7\u6ee4\u5668\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspect")," \u62e6\u622a\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service")," \u670d\u52a1\u903b\u8f91\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"model"),"  \u6570\u636e\u5e93\u5b9e\u4f53\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," \u4e1a\u52a1\u7684\u914d\u7f6e\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"util")," \u5de5\u5177\u7c7b\u5b58\u653e\u7684\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decorator")," \u81ea\u5b9a\u4e49\u88c5\u9970\u5668\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface.ts"),"  \u4e1a\u52a1\u7684 ts \u5b9a\u4e49\u6587\u4ef6")),(0,r.kt)("p",null,"\u968f\u7740\u4e0d\u540c\u573a\u666f\u7684\u51fa\u73b0\uff0c\u76ee\u5f55\u7684\u4e60\u60ef\u4e5f\u4f1a\u4e0d\u65ad\u7684\u589e\u52a0\uff0c\u5177\u4f53\u7684\u76ee\u5f55\u5185\u5bb9\u4f1a\u4f53\u73b0\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u529f\u80fd\u4e2d\u3002"),(0,r.kt)("h2",{id:"web-\u6846\u67b6\u9009\u62e9"},"Web \u6846\u67b6\u9009\u62e9"),(0,r.kt)("p",null,"Midway \u8bbe\u8ba1\u4e4b\u521d\u5c31\u53ef\u4ee5\u517c\u5bb9\u591a\u79cd\u4e0a\u5c42\u6846\u67b6\uff0c\u6bd4\u5982\u5e38\u89c1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Express"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"EggJS")," \u3002"),(0,r.kt)("p",null,"\u4ece v3 \u5f00\u59cb\uff0c\u6211\u4eec\u4f7f\u7528 Koa \u6765\u505a\u57fa\u7840\u793a\u4f8b\u7684\u6f14\u793a\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u4e0a\u5c42\u6846\u67b6\u5728 Midway \u4e2d\u90fd\u4ee5\u7ec4\u4ef6\u7684\u80fd\u529b\u63d0\u4f9b\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684\u88c5\u9970\u5668\u80fd\u529b\uff0c\u4f46\u662f Midway \u4e0d\u4f1a\u5bf9\u7279\u6709\u7684\u80fd\u529b\u505a\u51fa\u5c01\u88c5\uff0c\u6bd4\u5982 Egg.js \u7684\u63d2\u4ef6\u4f53\u7cfb\uff0c\u6216\u8005 Express \u7684\u4e2d\u95f4\u4ef6\u80fd\u529b\uff0c\u5982\u679c\u4f60\u5bf9\u5176\u4e2d\u7684\u67d0\u4e2a\u6846\u67b6\u6bd4\u8f83\u719f\u6089\uff0c\u6216\u8005\u5e0c\u671b\u4f7f\u7528\u7279\u5b9a\u6846\u67b6\u7684\u80fd\u529b\uff0c\u5c31\u53ef\u4ee5\u9009\u62e9\u5b83\u4f5c\u4e3a\u4f60\u7684\u4e3b\u529b Web \u6846\u67b6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\uff0cKoa \u662f\u4e00\u4e2a Express \u7684\u66ff\u4ee3\u6846\u67b6\uff0c\u5b83\u9ed8\u8ba4\u652f\u6301\u4e86\u5f02\u6b65\u4e2d\u95f4\u4ef6\u7b49\u80fd\u529b\uff0c\u662f\u7b2c\u4e8c\u5927\u901a\u7528\u7684 Node.js Web \u6846\u67b6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"Egg.js \u662f\u56fd\u5185\u76f8\u5bf9\u5e38\u7528\u7684 Web \u6846\u67b6\uff0c\u5305\u542b\u4e00\u4e9b\u9ed8\u8ba4\u63d2\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"Express \u662f\u4e00\u4e2a\u4f17\u6240\u5468\u77e5\u7684 node.js \u7b80\u7ea6 Web \u6846\u67b6\u3002 \u8fd9\u662f\u4e00\u4e2a\u7ecf\u8fc7\u5b9e\u6218\u8003\u9a8c\uff0c\u9002\u7528\u4e8e\u751f\u4ea7\u7684\u5e93\uff0c\u62e5\u6709\u5927\u91cf\u793e\u533a\u8d44\u6e90\u3002")))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u66ff\u4ee3\u9ed8\u8ba4\u7684 Web \u6846\u67b6\uff0c\u8bf7\u53c2\u8003\u5bf9\u5e94\u7684 ",(0,r.kt)("a",{parentName:"p",href:"extensions/egg"},"egg")," \u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"extensions/express"},"express")," \u7ae0\u8282\u3002"),(0,r.kt)("h2",{id:"\u542f\u52a8\u9879\u76ee"},"\u542f\u52a8\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,r.kt)("p",null,"Midway \u4f1a\u542f\u52a8 HTTP \u670d\u52a1\u5668\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7001")," \uff0c\u6d4f\u89c8\u5668\u4f1a\u6253\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello midwayjs!"),"  \u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01KoUxO91jydMw41Vv4_!!6000000004617-2-tps-1268-768.png",alt:"image.png"})),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u5f00\u53d1\u7684\u542f\u52a8\u7aef\u53e3\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"  \u7684 scripts \u6bb5\u843d\u91cc\u4fee\u6539\uff0c\u5982\u4fee\u6539\u4e3a 6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'"scripts": {\n  //...\n  "dev": "cross-env NODE_ENV=local midway-bin dev --ts --port=6001",\n},\n')),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"python-\u7684\u7f16\u8bd1\u9519\u8bef"},"Python \u7684\u7f16\u8bd1\u9519\u8bef"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"1\u3001\u5728 node15/npm7 \u4e0b\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install/i")," \u547d\u4ee4\u5b89\u88c5\u4f9d\u8d56\u53ef\u80fd\u4f1a\u6709 Python \u7f16\u8bd1\u9519\u8bef"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 npm init midway \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56\uff0c\u65e0\u6b64\u95ee\u9898\u3002")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848"),"\uff1anpm i \u65f6\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--legacy-peer-deps"),"  \u53c2\u6570\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u6d4b\u8bd5\u6846\u67b6 Jest \u4f9d\u8d56 jsdom\uff0cnpm7 \u4f1a\u81ea\u52a8\u5b89\u88c5\u5176 peerDependencies \u4e2d\u4f9d\u8d56\u7684 canvas \u5305\uff0c \u800c canvas \u7684\u5b89\u88c5\u7f16\u8bd1\u9700\u8981\u6709python3\u73af\u5883\u3002")),(0,r.kt)("h3",{id:"deprecated-\u63d0\u793a"},"Deprecated \u63d0\u793a"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"2\u3001\u5728\u5b89\u88c5\u4f9d\u8d56\u65f6\u4f1a\u6709 npm warn: deprecated \u8f93\u51fa"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u539f\u56e0"),"\uff1a\u6d4b\u8bd5\u6846\u67b6 Jest \u4f9d\u8d56 jsdom\uff0c\u5176\u4f9d\u8d56\u4e86\u5df2\u5e9f\u5f03\u7684\u6a21\u5757 request\uff0c\u76ee\u524djsdom\u5c1a\u672a\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u6211\u4eec\u4f1a\u6301\u7eed\u8fdb\u884c\u8ddf\u8e2a\uff0c\u76f8\u5173\u95ee\u9898\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/issues/2792"},"https://github.com/jsdom/jsdom/issues/2792"))),(0,r.kt)("h3",{id:"windows-eslint-\u62a5\u9519"},"windows eslint \u62a5\u9519"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"3\u3001windows \u53ef\u80fd\u4f1a\u78b0\u5230 eslint \u62a5\u9519\u7684\u95ee\u9898\uff0c\u8bf7\u5173\u6ce8 ",(0,r.kt)("a",{parentName:"p",href:"faq/git_problem#XCAgm"},"windows \u4e0b\u6362\u884c\u95ee\u9898"),"\u3002")))}k.isMDXComponent=!0}}]);
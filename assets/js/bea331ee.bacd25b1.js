"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},l="\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF",p={unversionedId:"serverless/deploy_to_tencent",id:"serverless/deploy_to_tencent",title:"\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF",description:"\u914d\u7f6e",source:"@site/docs/serverless/deploy_to_tencent.md",sourceDirName:"serverless",slug:"/serverless/deploy_to_tencent",permalink:"/docs/serverless/deploy_to_tencent",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/deploy_to_tencent.md",tags:[],version:"current",frontMatter:{}},c={},i=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03\u5230\u817e\u8baf\u4e91-scf"},"\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," \u6bb5\u843d\u5904\u786e\u4fdd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"tencent"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u8fd0\u884c\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  runtime: nodejs12\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u51fd\u6570\u8d85\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  timeout: 60 # \u5355\u4f4d\u79d2\n")),(0,a.kt)("p",null,"\u590d\u7528 HTTP \u7f51\u5173"),(0,a.kt)("p",null,"\u817e\u8baf\u4e91\u5728\u6bcf\u6b21\u90e8\u7f72 HTTP \u7c7b\u578b\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7f51\u5173\u7ed1\u5b9a\uff0c\u5bf9\u4e8e\u5f00\u53d1\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u590d\u7528\u540c\u4e00\u4e2a id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  serviceId: ********\n")),(0,a.kt)("p",null,"\u5177\u4f53\u5199\u6cd5\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"deploy_tencent_faq#NGqUs"},"\u590d\u7528\u7f51\u5173 id"),"\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u5373\u53ef\uff0cDeploy \u547d\u4ee4\u4f1a\u81ea\u52a8\u6253\u5305\uff0c\u5e76\u8c03\u7528\u817e\u8baf\u4e91\u5b98\u65b9\u90e8\u7f72\u5de5\u5177\u53d1\u5e03\u3002"),(0,a.kt)("p",null,"\u89c6\u9891\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/attachments/yuque/0/2021/mov/501408/1616730670232-05605683-d88e-4e27-a393-9d8f2dfa489f.mov?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fmov%2F501408%2F1616730670232-05605683-d88e-4e27-a393-9d8f2dfa489f.mov%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B62021-03-25+%E4%B8%8B%E5%8D%884.47.41.mov%22%2C%22size%22%3A19344722%2C%22type%22%3A%22video%2Fquicktime%22%2C%22ext%22%3A%22mov%22%2C%22status%22%3A%22done%22%2C%22uid%22%3A%221616730664011-0%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22percent%22%3A0%2C%22id%22%3A%22dWRP5%22%2C%22card%22%3A%22file%22%7D"},"\u5c4f\u5e55\u5f55\u5236 2021-03-25 \u4e0b\u5348 4.47.41.mov")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"\u8bf7\u67e5\u8be2 ",(0,a.kt)("a",{parentName:"p",href:"deploy_tencent_faq"},"\u817e\u8baf\u4e91\u53d1\u5e03 FAQ"),"\u3002"))}u.isMDXComponent=!0}}]);
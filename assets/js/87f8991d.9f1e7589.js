"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="ESModule \u4f7f\u7528\u6307\u5357",i={unversionedId:"esm",id:"esm",title:"ESModule \u4f7f\u7528\u6307\u5357",description:"\u5728\u8fc7\u53bb\u7684\u51e0\u5e74\u4e2d\uff0cNode.js\u4e00\u76f4\u81f4\u529b\u4e8e\u652f\u6301\u8fd0\u884c ECMAScript\u6a21\u5757 (ESM)\u3002\u8fd9\u662f\u4e00\u4e2a\u5f88\u96be\u652f\u6301\u7684\u529f\u80fd\uff0c\u56e0\u4e3a Node.js \u751f\u6001\u7cfb\u7edf\u7684\u57fa\u7840\u662f\u5efa\u7acb\u5728\u4e00\u4e2a\u4e0d\u540c\u7684\u6a21\u5757\u7cfb\u7edf\uff0c\u79f0\u4e3a CommonJS (CJS)\u3002",source:"@site/docs/esm.md",sourceDirName:".",slug:"/esm",permalink:"/docs/esm",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/esm.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u6846\u67b6\u9519\u8bef\u7801",permalink:"/docs/error_code"},next:{title:"\u62e6\u622a\u5668\uff08AOP\uff09",permalink:"/docs/aspect"}},p={},s=[{value:"\u811a\u624b\u67b6",id:"\u811a\u624b\u67b6",level:2},{value:"\u548c CJS \u9879\u76ee\u7684\u5dee\u5f02",id:"\u548c-cjs-\u9879\u76ee\u7684\u5dee\u5f02",level:2},{value:"1\u3001package.json \u7684\u53d8\u5316",id:"1packagejson-\u7684\u53d8\u5316",level:3},{value:"2\u3001tsconfig.json \u4e2d\u7684\u53d8\u5316",id:"2tsconfigjson-\u4e2d\u7684\u53d8\u5316",level:3},{value:"3\u3001\u5de5\u5177\u94fe\u7684\u53d8\u5316",id:"3\u5de5\u5177\u94fe\u7684\u53d8\u5316",level:3},{value:"4\u3001\u4e00\u4e9b\u4ee3\u7801\u5dee\u5f02",id:"4\u4e00\u4e9b\u4ee3\u7801\u5dee\u5f02",level:3}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esmodule-\u4f7f\u7528\u6307\u5357"},"ESModule \u4f7f\u7528\u6307\u5357"),(0,a.kt)("p",null,"\u5728\u8fc7\u53bb\u7684\u51e0\u5e74\u4e2d\uff0cNode.js\u4e00\u76f4\u81f4\u529b\u4e8e\u652f\u6301\u8fd0\u884c ECMAScript\u6a21\u5757 (ESM)\u3002\u8fd9\u662f\u4e00\u4e2a\u5f88\u96be\u652f\u6301\u7684\u529f\u80fd\uff0c\u56e0\u4e3a Node.js \u751f\u6001\u7cfb\u7edf\u7684\u57fa\u7840\u662f\u5efa\u7acb\u5728\u4e00\u4e2a\u4e0d\u540c\u7684\u6a21\u5757\u7cfb\u7edf\uff0c\u79f0\u4e3a CommonJS (CJS)\u3002"),(0,a.kt)("p",null,"\u4e24\u4e2a\u6a21\u5757\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u5e26\u6765\u4e86\u5de8\u5927\u7684\u6311\u6218\uff0c\u5e76\u5177\u6709\u8bb8\u591a\u529f\u80fd\u5dee\u5f02\u3002"),(0,a.kt)("p",null,"\u81ea Node.js v16 \u4e4b\u540e\uff0cESM \u7684\u652f\u6301\u76f8\u5bf9\u5df2\u7ecf\u7a33\u5b9a\uff0cTypeScript \u7684\u4e00\u4e9b\u914d\u5408\u529f\u80fd\u4e5f\u76f8\u7ee7\u843d\u5730\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u57fa\u7840\u4e0a\uff0cMidway \u652f\u6301\u4e86 ESM \u683c\u5f0f\u7684\u6587\u4ef6\u52a0\u8f7d\uff0c\u4e1a\u52a1\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u5168\u65b0\u7684\u6a21\u5757\u52a0\u8f7d\u65b9\u5f0f\u6765\u6784\u5efa\u81ea\u5df1\u7684\u4e1a\u52a1\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u6ca1\u6709\u4e86\u89e3 ESM \u524d\uff0c\u4e0d\u5efa\u8bae\u7528\u6237\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u63a8\u8350\u9605\u8bfb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"TypeScript \u5b98\u65b9 ESM \u6307\u5357")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html"},"Node.js \u5b98\u65b9 ESM \u6587\u6863"))),(0,a.kt)("h2",{id:"\u811a\u624b\u67b6"},"\u811a\u624b\u67b6"),(0,a.kt)("p",null,"\u7531\u4e8e\u6539\u52a8\u8f83\u591a\uff0cMidway \u63d0\u4f9b\u4e86\u5168\u65b0\u7684 ESM \u683c\u5f0f\u7684\u811a\u624b\u67b6\uff0c\u5982\u6709 ESM \u7684\u9700\u6c42\uff0c\u6211\u4eec\u63a8\u8350\u7528\u6237\u91cd\u65b0\u521b\u5efa\u540e\u518d\u6765\u5f00\u53d1\u4e1a\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway@latest -y\n")),(0,a.kt)("p",null,"\u9009\u62e9 esm \u5206\u7ec4\u4e2d\u7684\u811a\u624b\u67b6\u3002"),(0,a.kt)("h2",{id:"\u548c-cjs-\u9879\u76ee\u7684\u5dee\u5f02"},"\u548c CJS \u9879\u76ee\u7684\u5dee\u5f02"),(0,a.kt)("h3",{id:"1packagejson-\u7684\u53d8\u5316"},"1\u3001package.json \u7684\u53d8\u5316"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 type \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-package",\n  "type": "module",\n  // ...\n  "dependencies": {\n  }\n}\n')),(0,a.kt)("h3",{id:"2tsconfigjson-\u4e2d\u7684\u53d8\u5316"},"2\u3001tsconfig.json \u4e2d\u7684\u53d8\u5316"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions")," \u7f16\u8bd1\u76f8\u5173\u7684\u9009\u9879\u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Node16")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeNext"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "Node16",\n    "esModuleInterop": true,\n    // ...\n  }\n}\n')),(0,a.kt)("h3",{id:"3\u5de5\u5177\u94fe\u7684\u53d8\u5316"},"3\u3001\u5de5\u5177\u94fe\u7684\u53d8\u5316"),(0,a.kt)("p",null,"\u7531\u4e8e\u539f\u6709\u5f00\u53d1\u5de5\u5177\u94fe\u4ec5\u652f\u6301 CJS \u4ee3\u7801\uff0c\u4e14\u793e\u533a\u7684\u90e8\u5206\u6a21\u5757\u5e76\u6ca1\u6709\u505a\u597d ESM \u7684\u652f\u6301\uff0cMidway \u5728 ESM \u6a21\u5f0f\u4e0b\uff0c\u4f7f\u7528\u65b0\u7684\u5de5\u5177\u94fe\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u547d\u4ee4\uff0c\u4f7f\u7528 mwtsc \uff08\u4ec5\u505a\u4e86 tsc \u5fc5\u8981\u7684\u5305\u88f9\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u548c\u8986\u76d6\u7387\u547d\u4ee4\uff0c\u4f7f\u7528 mocha + ts-node\uff0c\u540c\u65f6\u6d4b\u8bd5\u4ee3\u7801\u548c\u6d4b\u8bd5\u7684\u914d\u7f6e\u90fd\u6709\u6240\u8c03\u6574"),(0,a.kt)("li",{parentName:"ul"},"\u6784\u5efa\u547d\u4ee4\uff0c\u4f7f\u7528 tsc")),(0,a.kt)("p",null,"\u4e00\u4e9b\u4e0d\u518d\u652f\u6301\u7684\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alias path\uff0c\u8bf7\u7528 Node.js \u81ea\u5e26\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/packages.html#subpath-exports"},"\u5b50\u8def\u5f84\u5bfc\u51fa")," \u4ee3\u66ff"),(0,a.kt)("li",{parentName:"ul"},"\u6784\u5efa\u65f6\u975e js \u6587\u4ef6\u7684\u62f7\u8d1d\uff0c\u5c06\u975e\u4ee3\u7801\u6587\u4ef6\u653e\u5230 src \u5916\u90e8\uff0c\u6216\u8005\u5728 build \u65f6\u6dfb\u52a0\u81ea\u5b9a\u4e49\u547d\u4ee4")),(0,a.kt)("p",null,"\u5177\u4f53\u5dee\u5f02\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway-boilerplate/blob/master/v3/midway-framework-koa-esm/boilerplate/_package.json"},"\u811a\u624b\u67b6")," \u8fdb\u884c\u6838\u5bf9\u3002"),(0,a.kt)("h3",{id:"4\u4e00\u4e9b\u4ee3\u7801\u5dee\u5f02"},"4\u3001\u4e00\u4e9b\u4ee3\u7801\u5dee\u5f02"),(0,a.kt)("p",null,"\u4e0b\u9762\u5feb\u901f\u5217\u51fa\u4e00\u4e9b\u5f00\u53d1\u4e2d ESM \u548c CJS \u7684\u5dee\u5f02\u3002"),(0,a.kt)("p",null,"1\u3001ts \u4e2d\uff0cimport \u7684\u6587\u4ef6\u5fc5\u987b\u6307\u5b9a\u540e\u7f00\u540d\uff0c\u4e14\u540e\u7f00\u540d\u4e3a js\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { helper } from "./foo.js"; // works in ESM & CJS\n')),(0,a.kt)("p",null,"2\u3001\u4f60\u4e0d\u80fd\u518d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"exports.")," \u6765\u5bfc\u51fa\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// ./foo.ts\nexport function helper() {\n    // ...\n}\n// ./bar.ts\nimport { helper } from "./foo"; // only works in CJS\n')),(0,a.kt)("p",null,"3\u3001\u4f60\u4e0d\u80fd\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"require")),(0,a.kt)("p",null,"\u53ea\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u3002"),(0,a.kt)("p",null,"4\u3001\u4f60\u4e0d\u80fd\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"__dirname"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"__filename")," \u7b49\u548c\u8def\u5f84\u76f8\u5173\u5173\u952e\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ESM solution\nimport { dirname } from 'node:path'\nimport { fileURLToPath } from 'node:url'\n\nconst __filename = fileURLToPath(import.meta.url)\nconst __dirname = dirname(fileURLToPath(import.meta.url))\n")),(0,a.kt)("p",null,"\u6240\u6709\u914d\u7f6e\u7684\u90e8\u5206\uff0c\u5fc5\u987b\u4f7f\u7528\u5bf9\u8c61\u6a21\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport DefulatConfig from './config/config.default.js';\nimport UnittestConfig from './config/config.unittest.js';\n\n@Configuration({\n  importConfigs: [\n    {\n      default: DefulatConfig,\n      unittest: UnittestConfig,\n    },\n  ],\n})\nexport class MainConfiguration {\n  // ...\n}\n")))}c.isMDXComponent=!0}}]);
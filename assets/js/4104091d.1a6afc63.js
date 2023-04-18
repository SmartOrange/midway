"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42492],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),s=m(t),u=i,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||p;return t?a.createElement(c,l(l({ref:n},d),{},{components:t})):a.createElement(c,l({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,l=new Array(p);l[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[s]="string"==typeof e?e:i,l[1]=r;for(var m=2;m<p;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const p={},l="\u6587\u4ef6\u4e0a\u4f20",r={unversionedId:"extensions/upload",id:"extensions/upload",title:"\u6587\u4ef6\u4e0a\u4f20",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 file (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6) \u548c stream \uff08\u6d41\uff09\u4e24\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/extensions/upload.md",sourceDirName:"extensions",slug:"/extensions/upload",permalink:"/docs/extensions/upload",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/upload.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/docs/extensions/render"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/extensions/passport"}},o={},m=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u542f\u7528\u7ec4\u4ef6",id:"\u542f\u7528\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u4e0a\u4f20\u6a21\u5f0f - file",id:"\u4e0a\u4f20\u6a21\u5f0f---file",level:3},{value:"\u4e0a\u4f20\u6a21\u5f0f - stream",id:"\u4e0a\u4f20\u6a21\u5f0f---stream",level:3},{value:"\u4e0a\u4f20\u767d\u540d\u5355",id:"\u4e0a\u4f20\u767d\u540d\u5355",level:3},{value:"MIME \u7c7b\u578b\u68c0\u67e5",id:"mime-\u7c7b\u578b\u68c0\u67e5",level:3},{value:"\u914d\u7f6e match \u6216 ignore",id:"\u914d\u7f6e-match-\u6216-ignore",level:3},{value:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",level:2},{value:"\u5b89\u5168\u63d0\u793a",id:"\u5b89\u5168\u63d0\u793a",level:2},{value:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b",id:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b",level:2},{value:"1. html form \u7684\u5f62\u5f0f",id:"1-html-form-\u7684\u5f62\u5f0f",level:3},{value:"2. fetch FormData \u65b9\u5f0f",id:"2-fetch-formdata-\u65b9\u5f0f",level:3},{value:"Postman \u6d4b\u8bd5\u793a\u4f8b",id:"postman-\u6d4b\u8bd5\u793a\u4f8b",level:2}],d={toc:m},s="wrapper";function k(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,i.kt)("p",null,"\u9002\u7528\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6) \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \uff08\u6d41\uff09\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/upload@3 --save\n")),(0,i.kt)("p",null,"\u6216\u8005\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/upload": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,i.kt)("h2",{id:"\u542f\u7528\u7ec4\u4ef6"},"\u542f\u7528\u7ec4\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as upload from '@midwayjs/upload';\n\n@Configuration({\n  imports: [\n    // ...other components\n    upload\n  ],\n  // ...\n})\nexport class MainConfiguration {}\n")),(0,i.kt)("p",null,"3\u3001\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Inject, Post, Files, Fields } from '@midwayjs/core';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx;\n\n  @Post('/upload')\n  async upload(@Files() files, @Fields() fields) {\n    /*\n    files = [\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: '/var/tmp/xxx.pdf',    // mode \u4e3a file \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test1',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: ReadStream,    // mode \u4e3a stream \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test2',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      // ...file \u4e0b\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\n    ]\n\n    */\n    return {\n      files,\n      fields\n    }\n  }\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u5f00\u542f\u4e86 swagger \u7ec4\u4ef6\uff0c\u8bf7\u52a1\u5fc5\u6dfb\u52a0\u4e0a\u4f20\u53c2\u6570\u7684\u7c7b\u578b\uff08\u88c5\u9970\u5668\u5bf9\u5e94\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca @ApiBody \u4e2d\u7684 type\uff09\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff0c\u66f4\u591a\u8bf7\u53c2\u8003 swagger \u7684\u6587\u4ef6\u4e0a\u4f20\u7ae0\u8282\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { uploadWhiteList } from '@midwayjs/upload';\nimport { tmpdir } from 'os';\nimport { join } from 'path';\n\nexport default {\n  // ...\n  upload: {\n    // mode: UploadMode, \u9ed8\u8ba4\u4e3afile\uff0c\u5373\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e34\u65f6\u76ee\u5f55\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e3a stream\n    mode: 'file',\n    // fileSize: string, \u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a 10mb\n    fileSize: '10mb',\n    // whitelist: string[]\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u767d\u540d\u5355\n    whitelist: uploadWhiteList.filter(ext => ext !== '.pdf'),\n    // tmpdir: string\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u4e34\u65f6\u5b58\u50a8\u8def\u5f84\n    tmpdir: join(tmpdir(), 'midway-upload-files'),\n    // cleanTimeout: number\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u4e34\u65f6\u76ee\u5f55\u4e2d\u591a\u4e45\u4e4b\u540e\u81ea\u52a8\u5220\u9664\uff0c\u9ed8\u8ba4\u4e3a 5 \u5206\u949f\n    cleanTimeout: 5 * 60 * 1000,\n    // base64: boolean\uff0c\u8bbe\u7f6e\u539f\u59cbbody\u662f\u5426\u662fbase64\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3afalse\uff0c\u4e00\u822c\u7528\u4e8e\u817e\u8baf\u4e91\u7684\u517c\u5bb9\n    base64: false,\n    // \u4ec5\u5728\u5339\u914d\u8def\u5f84\u5230 /api/upload \u7684\u65f6\u5019\u53bb\u89e3\u6790 body \u4e2d\u7684\u6587\u4ef6\u4fe1\u606f\n    match: /\\/api\\/upload/,\n  },\n}\n\n")),(0,i.kt)("h3",{id:"\u4e0a\u4f20\u6a21\u5f0f---file"},"\u4e0a\u4f20\u6a21\u5f0f - file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u4e3a\u9ed8\u8ba4\u503c\uff0c\u4e5f\u662f\u6846\u67b6\u7684\u63a8\u8350\u503c\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadMode.File")," \u6765\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u670d\u52a1\u5668\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e34\u65f6\u6587\u4ef6\u5730\u5740"),"\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.createReadStream")," \u7b49\u65b9\u5f0f\u6765\u83b7\u53d6\u5230\u6b64\u6587\u4ef6\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\uff0c\u591a\u4e2a\u6587\u4ef6\u4f1a\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5b58\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u91c7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u6a21\u5f0f\u65f6\uff0c\u7531\u4e8e\u4e0a\u4f20\u7ec4\u4ef6\u4f1a\u5728\u63a5\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u4f1a\u6839\u636e\u8bf7\u6c42\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u4e2d\u7684\u90e8\u5206\u6807\u5fd7\u6027\u5185\u5bb9\u8fdb\u884c\u5339\u914d\uff0c\u5982\u679c\u8ba4\u4e3a\u662f\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u8bf7\u6c42\uff0c\u5c31\u4f1a\u5bf9\u8bf7\u6c42\u8fdb\u884c\u89e3\u6790\uff0c\u5c06\u5176\u4e2d\u7684\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5199\u5165")," \u5230\u670d\u52a1\u5668\u7684\u4e34\u65f6\u7f13\u5b58\u76ee\u5f55\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u672c\u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," \u914d\u7f6e\u6765\u8bbe\u7f6e\u5141\u8bb8\u89e3\u6790\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore"),"\u540e\uff0c\u5219\u53ef\u4ee5\u4fdd\u8bc1\u60a8\u7684\u666e\u901a post \u7b49\u8bf7\u6c42\u63a5\u53e3\uff0c\u4e0d\u4f1a\u88ab\u7528\u6237\u975e\u6cd5\u7528\u4f5c\u4e0a\u4f20\uff0c\u53ef\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u907f\u514d")," \u670d\u52a1\u5668\u7f13\u5b58\u88ab\u5145\u6ee1\u7684\u98ce\u9669\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u4ee5\u67e5\u770b\u4e0b\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e \u5141\u8bb8(match) \u6216 \u5ffd\u7565(ignore)\u7684\u4e0a\u4f20\u8def\u5f84")," \u7ae0\u8282\uff0c\u6765\u8fdb\u884c\u914d\u7f6e\u3002")),(0,i.kt)("h3",{id:"\u4e0a\u4f20\u6a21\u5f0f---stream"},"\u4e0a\u4f20\u6a21\u5f0f - stream"),(0,i.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadMode.Stream")," \u6765\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadStream"),"\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"pipe")," \u7b49\u65b9\u5f0f\u7ee7\u7eed\u5c06\u6570\u636e\u6d41\u8f6c\u81f3\u5176\u4ed6 ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteStream")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformStream"),"\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u4ec5\u540c\u65f6\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u6570\u7ec4\u4e2d\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u6570\u636e\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0cstream \u6a21\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0d\u4f1a")," \u5728\u670d\u52a1\u5668\u4e0a\u4ea7\u751f\u4e34\u65f6\u6587\u4ef6\uff0c\u6240\u4ee5\u83b7\u53d6\u5230\u4e0a\u4f20\u7684\u5185\u5bb9\u540e\u65e0\u9700\u624b\u52a8\u6e05\u7406\u4e34\u65f6\u6587\u4ef6\u7f13\u5b58\u3002"),(0,i.kt)("h3",{id:"\u4e0a\u4f20\u767d\u540d\u5355"},"\u4e0a\u4f20\u767d\u540d\u5355"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"whitelist")," \u5c5e\u6027\uff0c\u914d\u7f6e\u5141\u8bb8\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u5219\u4e0d\u6821\u9a8c\u540e\u7f00\u540d\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u914d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5219\u4e0d\u5bf9\u4e0a\u4f20\u6587\u4ef6\u540e\u7f00\u540d\u8fdb\u884c\u6821\u9a8c\uff0c\u5982\u679c\u91c7\u53d6\u6587\u4ef6\u4e0a\u4f20\u6a21\u5f0f (mode=file)\uff0c\u5219\u4f1a\u6709\u53ef\u80fd\u88ab\u653b\u51fb\u8005\u6240\u5229\u7528\uff0c\u4e0a\u4f20 ",(0,i.kt)("inlineCode",{parentName:"p"},".php"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".asp")," \u7b49\u540e\u7f00\u7684 WebShell \u5b9e\u73b0\u653b\u51fb\u884c\u4e3a\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u7ec4\u4ef6\u4f1a\u5bf9\u4e0a\u4f20\u540e\u7684\u4e34\u65f6\u6587\u4ef6\u91c7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u91cd\u65b0\u968f\u673a\u751f\u6210")," \u6587\u4ef6\u540d\u5199\u5165\uff0c\u53ea\u8981\u5f00\u53d1\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0d\u5c06")," \u4e0a\u4f20\u540e\u7684\u4e34\u65f6\u6587\u4ef6\u5730\u5740\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u90a3\u4e48\u5373\u4f7f\u7528\u6237\u4e0a\u4f20\u4e86\u4e00\u4e9b\u4e0d\u88ab\u9884\u671f\u7684\u6587\u4ef6\uff0c\u90a3\u4e5f\u65e0\u9700\u8fc7\u591a\u62c5\u5fc3\u4f1a\u88ab\u5229\u7528\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u4e0d\u5339\u914d\uff0c\u4f1a\u54cd\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"400")," error\uff0c\u9ed8\u8ba4\u503c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'.jpg',\n'.jpeg',\n'.png',\n'.gif',\n'.bmp',\n'.wbmp',\n'.webp',\n'.tif',\n'.psd',\n'.svg',\n'.js',\n'.jsx',\n'.json',\n'.css',\n'.less',\n'.html',\n'.htm',\n'.xml',\n'.pdf',\n'.zip',\n'.gz',\n'.tgz',\n'.gzip',\n'.mp3',\n'.mp4',\n'.avi',\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u4e2d\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadWhiteList")," \u83b7\u53d6\u5230\u9ed8\u8ba4\u7684\u540e\u7f00\u540d\u767d\u540d\u5355\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0cmidway \u4e0a\u4f20\u7ec4\u4ef6\uff0c\u4e3a\u4e86\u907f\u514d\u90e8\u5206 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6076\u610f\u7528\u6237"),"\uff0c\u901a\u8fc7\u67d0\u4e9b\u6280\u672f\u624b\u6bb5\u6765",(0,i.kt)("inlineCode",{parentName:"p"},"\u4f2a\u9020"),"\u4e00\u4e9b\u53ef\u4ee5\u88ab\u622a\u65ad\u7684\u6269\u5c55\u540d\uff0c\u6240\u4ee5\u4f1a\u5bf9\u83b7\u53d6\u5230\u7684\u6269\u5c55\u540d\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\uff0c\u4ec5\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"0x2e"),"\uff08\u5373\u82f1\u6587\u70b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"0x30-0x39"),"\uff08\u5373\u6570\u5b57 ",(0,i.kt)("inlineCode",{parentName:"p"},"0-9"),"\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"0x61-0x7a"),"\uff08\u5373\u5c0f\u5199\u5b57\u6bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"a-z"),"\uff09 \u8303\u56f4\u5185\u7684\u5b57\u7b26\u4f5c\u4e3a\u6269\u5c55\u540d\uff0c\u5176\u4ed6\u5b57\u7b26\u5c06\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\u3002"),(0,i.kt)("h3",{id:"mime-\u7c7b\u578b\u68c0\u67e5"},"MIME \u7c7b\u578b\u68c0\u67e5"),(0,i.kt)("p",null,"\u90e8\u5206",(0,i.kt)("inlineCode",{parentName:"p"},"\u6076\u610f\u7528\u6237"),"\uff0c\u4f1a\u5c1d\u8bd5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},".php")," \u7b49 WebShell \u4fee\u6539\u6269\u5c55\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),"\uff0c\u6765\u7ed5\u8fc7\u57fa\u4e8e\u6269\u5c55\u540d\u7684\u767d\u540d\u5355\u8fc7\u6ee4\u89c4\u5219\uff0c\u5728\u67d0\u4e9b\u670d\u52a1\u5668\u73af\u5883\u5185\uff0c\u8fd9\u4e2a jpg \u6587\u4ef6\u4f9d\u7136\u4f1a\u88ab\u4f5c\u4e3a PHP \u811a\u672c\u6765\u6267\u884c\uff0c\u9020\u6210\u5b89\u5168\u98ce\u9669\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u7ec4\u4ef6\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"mimeTypeWhiteList")," \u914d\u7f6e\u53c2\u6570 ",(0,i.kt)("strong",{parentName:"p"},"\u3010\u8bf7\u6ce8\u610f\uff0c\u6b64\u53c2\u6570\u65e0\u9ed8\u8ba4\u503c\u8bbe\u7f6e\uff0c\u5373\u9ed8\u8ba4\u4e0d\u6821\u9a8c\u3011"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6b64\u914d\u7f6e\u8bbe\u7f6e\u5141\u8bb8\u7684\u6587\u4ef6 MIME \u683c\u5f0f\uff0c\u89c4\u5219\u4e3a\u7531\u6570\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"[\u6269\u5c55\u540d, mime, [...moreMime]]")," \u7ec4\u6210\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e8c\u7ea7\u6570\u7ec4"),"\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { uploadWhiteList } from '@midwayjs/upload';\nexport default {\n  // ...\n  upload: {\n    // ...\n    // \u6269\u5c55\u540d\u767d\u540d\u5355\n    whitelist: uploadWhiteList,\n    // \u4ec5\u5141\u8bb8\u4e0b\u9762\u8fd9\u4e9b\u6587\u4ef6\u7c7b\u578b\u53ef\u4ee5\u4e0a\u4f20\n    mimeTypeWhiteList: {\n      '.jpg': 'image/jpeg',\n      // \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a MIME type\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u5141\u8bb8 .jpeg \u540e\u7f00\u7684\u6587\u4ef6\u662f jpg \u6216\u8005\u662f png \u4e24\u79cd\u7c7b\u578b\n      '.jpeg': ['image/jpeg', 'image/png'],\n      // \u5176\u4ed6\u7c7b\u578b\n      '.gif': 'image/gif',\n      '.bmp': 'image/bmp',\n      '.wbmp': 'image/vnd.wap.wbmp',\n      '.webp': 'image/webp',\n    }\n  },\n}\n")),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u7ec4\u4ef6\u63d0\u4f9b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultUploadFileMimeType")," \u53d8\u91cf\uff0c\u4f5c\u4e3a\u9ed8\u8ba4\u7684 MIME \u6821\u9a8c\u89c4\u5219\uff0c\u5b83\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".png"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".psd")," \u7b49\u6587\u4ef6\u6269\u5c55\u540d\u7684 MIME \u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { uploadWhiteList, DefaultUploadFileMimeType } from '@midwayjs/upload';\nexport default {\n  // ...\n  upload: {\n    // ...\n    // \u6269\u5c55\u540d\u767d\u540d\u5355\n    whitelist: uploadWhiteList,\n    // \u4ec5\u5141\u8bb8\u4e0b\u9762\u8fd9\u4e9b\u6587\u4ef6\u7c7b\u578b\u53ef\u4ee5\u4e0a\u4f20\n    mimeTypeWhiteList: DefaultUploadFileMimeType,\n  },\n}\n")),(0,i.kt)("p",null,"\u6587\u4ef6\u683c\u5f0f\u4e0e\u5bf9\u5e94\u7684 MIME \u6620\u5c04\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mimetype.io/")," \u8fd9\u4e2a\u7f51\u7ad9\u6765\u67e5\u8be2\uff0c\u5bf9\u4e8e\u6587\u4ef6\u7684 MIME \u8bc6\u522b\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/file-type"},"file-type@16")," \u8fd9\u4e2a npm \u5305\uff0c\u8bf7\u6ce8\u610f\u5b83\u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"MIME \u7c7b\u578b\u6821\u9a8c\u89c4\u5219\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528 \u6587\u4ef6\u4e0a\u4f20\u6a21\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"mode=file"),"\uff0c\u540c\u65f6\u8bbe\u7f6e\u6b64\u6821\u9a8c\u89c4\u5219\u4e4b\u540e\uff0c\u7531\u4e8e\u9700\u8981\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u8fdb\u884c\u5339\u914d\uff0c\u6240\u4ee5\u4f1a\u7a0d\u5fae\u5f71\u54cd\u4e0a\u4f20\u6027\u80fd\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u6211\u4eec\u4f9d\u7136\u5efa\u8bae\u60a8\u5728\u6761\u4ef6\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\uff0c\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"mimeTypeWhiteList")," \u53c2\u6570\uff0c\u8fd9\u5c06\u63d0\u5347\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u6027\u3002")),(0,i.kt)("h3",{id:"\u914d\u7f6e-match-\u6216-ignore"},"\u914d\u7f6e match \u6216 ignore"),(0,i.kt)("p",null,"\u5f53\u5f00\u542f\u4e86 upload \u7ec4\u4ef6\u540e\uff0c\u5f53\u8bf7\u6c42\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST/PUT/DELETE/PATCH")," \u4e4b\u4e00\u65f6\uff0c\u5982\u679c\u5224\u65ad\u8bf7\u6c42\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers['content-type']")," \u4e2d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"boundary")," \u65f6\uff0c\u5c06\u4f1a ",(0,i.kt)("inlineCode",{parentName:"p"},"**\u81ea\u52a8\u8fdb\u5165**")," \u4e0a\u4f20\u6587\u4ef6\u89e3\u6790\u903b\u8f91\u3002"),(0,i.kt)("p",null,"\u8fd9\u4f1a\u9020\u6210\uff1a\u5982\u679c\u7528\u6237\u53ef\u80fd\u624b\u52a8\u5206\u6790\u4e86\u7f51\u7ad9\u7684\u8bf7\u6c42\u4fe1\u606f\uff0c\u624b\u52a8\u8c03\u7528\u4efb\u4e00\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," \u7b49\u7c7b\u578b\u7684\u63a5\u53e3\uff0c\u5c06\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20\uff0c\u5c31\u4f1a\u89e6\u53d1 ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," \u7ec4\u4ef6\u7684\u89e3\u6790\u903b\u8f91\uff0c\u5728\u4e34\u65f6\u76ee\u5f55\u521b\u5efa\u4e34\u65f6\u7684\u5df2\u4e0a\u4f20\u6587\u4ef6\u7f13\u5b58\uff0c\u5bf9\u7f51\u7ad9\u670d\u52a1\u5668\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u8d1f\u8377"),"\uff0c\u4e25\u91cd\u65f6\u53ef\u80fd\u4f1a",(0,i.kt)("inlineCode",{parentName:"p"},"\u5f71\u54cd"),"\u670d\u52a1\u5668\u6b63\u5e38\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u60a8\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," \u914d\u7f6e\uff0c\u6765\u8bbe\u7f6e\u54ea\u4e9b api \u8def\u5f84\u662f\u5141\u8bb8\u8fdb\u884c\u4e0a\u4f20\u7684\u3002"),(0,i.kt)("h2",{id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"},"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u6a21\u5f0f\u6765\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u90a3\u4e48\u4e0a\u4f20\u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u5728\u60a8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," \u7ec4\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpdir")," \u9009\u9879\u6307\u5411\u7684\u6587\u4ef6\u5939\u5185\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanTimeout")," \u6765\u63a7\u5236\u81ea\u52a8\u7684\u4e34\u65f6\u6587\u4ef6\u6e05\u7406\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"5 * 60 * 1000"),"\uff0c\u5373\u4e0a\u4f20\u7684\u6587\u4ef6\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"5 \u5206\u949f")," \u540e\u81ea\u52a8\u6e05\u7406\uff0c\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u5219\u89c6\u4e3a\u4e0d\u5f00\u542f\u81ea\u52a8\u6e05\u7406\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"await ctx.cleanupRequestFiles()")," \u6765\u4e3b\u52a8\u6e05\u7406\u5f53\u524d\u8bf7\u6c42\u4e0a\u4f20\u7684\u4e34\u65f6\u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u5b89\u5168\u63d0\u793a"},"\u5b89\u5168\u63d0\u793a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\u662f\u5426\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6269\u5c55\u540d\u767d\u540d\u5355")," \uff08whiteList\uff09\uff0c\u5982\u679c\u6269\u5c55\u540d\u767d\u540d\u5355\u88ab\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"\uff0c\u5219\u4f1a\u6709\u53ef\u80fd\u88ab\u653b\u51fb\u8005\u6240\u5229\u7528\u4e0a\u4f20 ",(0,i.kt)("inlineCode",{parentName:"li"},".php"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},".asp")," \u7b49WebShell\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\u662f\u5426\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"ignore")," \u89c4\u5219\uff0c\u5426\u5219\u666e\u901a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"POST/PUT")," \u7b49\u63a5\u53e3\u4f1a\u6709\u53ef\u80fd\u88ab\u653b\u51fb\u8005\u5229\u7528\uff0c\u9020\u6210\u670d\u52a1\u5668\u8d1f\u8377\u52a0\u91cd\u548c\u7a7a\u95f4\u5927\u91cf\u5360\u7528\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\u662f\u5426\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6587\u4ef6\u7c7b\u578b\u89c4\u5219")," \uff08fileTypeWhiteList\uff09,\u5426\u5219\u53ef\u80fd\u4f1a\u88ab\u653b\u51fb\u8005\u4f2a\u9020\u6587\u4ef6\u7c7b\u578b\u8fdb\u884c\u4e0a\u4f20\u3002")),(0,i.kt)("h2",{id:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b"},"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b"),(0,i.kt)("h3",{id:"1-html-form-\u7684\u5f62\u5f0f"},"1. html form \u7684\u5f62\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/api/upload" method="post" enctype="multipart/form-data">\n  Name: <input type="text" name="name" /><br />\n  File: <input type="file" name="testFile" /><br />\n  <input type="submit" value="Submit" />\n</form>\n')),(0,i.kt)("h3",{id:"2-fetch-formdata-\u65b9\u5f0f"},"2. fetch FormData \u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fileInput = document.querySelector('#your-file-input') ;\nconst formData = new FormData();\nformData.append('file', fileInput.files[0]);\n\nfetch('/api/upload', {\n  method: 'POST',\n  body: formData,\n});\n")),(0,i.kt)("h2",{id:"postman-\u6d4b\u8bd5\u793a\u4f8b"},"Postman \u6d4b\u8bd5\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01iv9ESW1uIShNiRjBF_!!6000000006014-2-tps-2086-1746.png",alt:null})))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i="Tencent Cloud Object Storage (COS)",c={unversionedId:"extensions/cos",id:"extensions/cos",title:"Tencent Cloud Object Storage (COS)",description:"This article describes how to use midway to access Tencent Cloud COS.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/cos.md",sourceDirName:"extensions",slug:"/extensions/cos",permalink:"/en/docs/extensions/cos",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cos.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Alibaba Cloud Object Storage (OSS)",permalink:"/en/docs/extensions/oss"},next:{title:"TableStore",permalink:"/en/docs/extensions/tablestore"}},s={},l=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Use COS service",id:"use-cos-service",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tencent-cloud-object-storage-cos"},"Tencent Cloud Object Storage (COS)"),(0,a.kt)("p",null,"This article describes how to use midway to access Tencent Cloud COS."),(0,a.kt)("p",null,"Related information:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cos@3 --save\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/cos": "^3.0.0",\n    // ...\n  },\n}\n')),(0,a.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,a.kt)("p",null,"First, introduce components and import them in ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as cos from '@midwayjs/cos';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    cos // import cos components\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Single-client configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  cos: {\n    client: {\n      SecretId: '***********',\n      SecretKey: '***********',\n    },\n  },\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configure multiple clients.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  cos: {\n    clients: {\n      instance1: {\n        SecretId: '***********',\n        SecretKey: '***********',\n      },\n      instance2: {\n        SecretId: '***********',\n        SecretKey: '***********',\n      },\n    },\n  },\n}\n")),(0,a.kt)("p",null,"For more parameters, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tencentyun/cos-nodejs-sdk-v5"},"cos-nodejs-sdk-v5")," document."),(0,a.kt)("h2",{id:"use-cos-service"},"Use COS service"),(0,a.kt)("p",null,"We can inject it into any code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/core';\nimport { COSService } from '@midwayjs/cos';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cosService: COSService;\n\n  async invoke() {\n    await this.cosService.sliceUploadFile({\n      Bucket: 'test-1250000000',\n      Region: 'ap-guangzhou',\n      Key: '1.zip',\n      FilePath: './1.zip'\n    },\n  }\n}\n")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"COSServiceFactory")," to get different instances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { COSServiceFactory } from '@midwayjs/cos';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cosServiceFactory: COSServiceFactory;\n\n  async save() {\n    const cos1 = await this.cosServiceFactory.get('instance1');\n    const cos2 = await this.cosServiceFactory.get('instance3');\n\n    //...\n\n  }\n}\n")))}d.isMDXComponent=!0}}]);
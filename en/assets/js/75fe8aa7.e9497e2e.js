"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Cache",l={unversionedId:"extensions/cache",id:"extensions/cache",title:"Cache",description:"Midway Cache is a component that facilitates developers to perform caching operations, and it is beneficial to improve the performance of the project. It provides us with a data center for efficient data access.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/cache.md",sourceDirName:"extensions",slug:"/extensions/cache",permalink:"/en/docs/extensions/cache",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cache.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"MongoDB",permalink:"/en/docs/extensions/mongodb"},next:{title:"Alibaba Cloud Object Storage (OSS)",permalink:"/en/docs/extensions/oss"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Use Cache",id:"use-cache",level:2},{value:"Set cache",id:"set-cache",level:3},{value:"Get cache",id:"get-cache",level:3},{value:"Remove cache",id:"remove-cache",level:3},{value:"Empty the overall store data (here is the overall clear, need to focus on\u26a0)",id:"empty-the-overall-store-data-here-is-the-overall-clear-need-to-focus-on",level:3},{value:"Global configuration",id:"global-configuration",level:2},{value:"Other Cache",id:"other-cache",level:2},{value:"Related documents",id:"related-documents",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. Can set and get not get the same value?",id:"1-can-set-and-get-not-get-the-same-value",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Midway Cache is a component that facilitates developers to perform caching operations, and it is beneficial to improve the performance of the project. It provides us with a data center for efficient data access."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First install the relevant component modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cache@3 cache-manager --save\n$ npm i @types/cache-manager --save-dev\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/cache": "^3.0.0",\n    "cache-manager": "^3.4.1 ",\n    // ...\n  },\n  "devDependencies": {\n    "@types/cache-manager": "^3.4.0 ",\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"use-cache"},"Use Cache"),(0,r.kt)("p",null,"Midway provides a unified API for different cache stores. By default, a data center based on memory data storage is built in. If you want to use another data center, developers can also switch to modes such as mongodb and fs."),(0,r.kt)("p",null,"First, the Cache component is introduced and imported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/core';\nimport * as cache from '@midwayjs/cache';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    cache // import cache component\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("p",null,"It can then be injected into the business code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/core';\nimport { IUserOptions } from '../interface';\nimport { CacheManager } from '@midwayjs/cache';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cacheManager: CacheManager;               // inject CacheManager\n}\n")),(0,r.kt)("p",null,"Set through the provided API to obtain cached data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/core';\nimport { IUserOptions } from '../interface';\nimport { CacheManager } from '@midwayjs/cache';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cacheManager: CacheManager;\n\n  async getUser(options: IUserOptions) {\n    // Set cache content\n    await this.cacheManager.set('name', 'stone-jin');\n\n    // Get cached content\n    let result = await this.cacheManager.get('name');\n\n    return result;\n  }\n\n  async getUser2() {\n    // Get cached content\n    let result = await this.cacheManager.get('name');\n    return result;\n  }\n\n  async reset() {\n    Await this.cacheManager.reset(); // Clear the contents of the corresponding store\n  }\n}\n")),(0,r.kt)("h3",{id:"set-cache"},"Set cache"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"await this.cache.set(key, value)")," method to set this parameter. The default expiration time is 10s."),(0,r.kt)("p",null,"You can also manually set TTL (Expiration Time), as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Await this.cacheManager.set(key, value, {ttl: 1000}); // ttl is in seconds\n")),(0,r.kt)("p",null,"If you want to prohibit Cache from expiring, set TTL to null."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.set(key, value, {ttl: null});\n")),(0,r.kt)("p",null,"At the same time, you can also set it through the global ",(0,r.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  cache: {\n    store: 'memory',\n    options: {\n      max: 100\n      Ttl: 10, // Modify the default ttl configuration\n    },\n  }\n}\n")),(0,r.kt)("h3",{id:"get-cache"},"Get cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = await this.cacheManager.get(key);\n")),(0,r.kt)("p",null,"If not, undefined."),(0,r.kt)("h3",{id:"remove-cache"},"Remove cache"),(0,r.kt)("p",null,"To remove the cache, you can use the del method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.del(key);\n")),(0,r.kt)("h3",{id:"empty-the-overall-store-data-here-is-the-overall-clear-need-to-focus-on"},"Empty the overall store data (here is the overall clear, need to focus on\u26a0)"),(0,r.kt)("p",null,"For example, if the user sets a redis as store, the call will be cleared, including those set by non-cache modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.reset(); // This piece needs attention\n")),(0,r.kt)("h2",{id:"global-configuration"},"Global configuration"),(0,r.kt)("p",null,"When we refer to this cache component, we can configure it globally. The configuration method is similar to other components."),(0,r.kt)("p",null,"Default configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  cache: {\n    store: 'memory',\n    options: {\n      max: 100\n      ttl: 10\n    },\n  }\n}\n")),(0,r.kt)("p",null,"For example, users can modify the default TTL, that is, the expiration time."),(0,r.kt)("h2",{id:"other-cache"},"Other Cache"),(0,r.kt)("p",null,"You can also modify the store method to configure components in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.default.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as redisStore from 'cache-manager-ioredis';\n\nexport default {\n  // ...\n  cache: {\n    store: redisStore\n    options: {\n      host: 'localhost', // default value\n      port: 6379, // default value\n      password: '',\n      db: 0\n      keyPrefix: 'cache :',\n      ttl: 100\n    },\n  }\n}\n")),(0,r.kt)("p",null,"Or modify it to the mongodb cache."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"note again\u26a0\ufe0f: When using redis as cache, the reset method is used with caution in the code, because the entire redis will be flushdb, or the data will be cleared for short. "))),(0,r.kt)("h2",{id:"related-documents"},"Related documents"),(0,r.kt)("p",null,"Because Midway Cache is based on cache-manager encapsulation, users can also query ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cache-manager"},"cache-manger"),"."),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"1-can-set-and-get-not-get-the-same-value"},"1. Can set and get not get the same value?"),(0,r.kt)("p",null,"The user uses the cache module, which is in memory by default. For example, the dev mode is used locally. Since it is single-process, the set and ge t can eventually reach the same value. However, after the user is deployed to the server, there will be many workers, which is equivalent to the first request, falling on process 1, and then falling on process 2 for the second time, thus getting empty."),(0,r.kt)("p",null,"Solution: Refer to other cache sections to configure the store to be distributed, such as the store for redis."))}u.isMDXComponent=!0}}]);
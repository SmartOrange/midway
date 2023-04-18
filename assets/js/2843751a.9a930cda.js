"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64693],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11827:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="HTTP \u8bf7\u6c42",s={unversionedId:"extensions/axios",id:"extensions/axios",title:"HTTP \u8bf7\u6c42",description:"\u7b80\u5355\u7684 HTTP \u8bf7\u6c42",source:"@site/docs/extensions/axios.md",sourceDirName:"extensions",slug:"/extensions/axios",permalink:"/docs/extensions/axios",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/axios.md",tags:[],version:"current",frontMatter:{},sidebar:"component",next:{title:"\u591a\u8bed\u8a00",permalink:"/docs/extensions/i18n"}},l={},p=[{value:"\u7b80\u5355\u7684 HTTP \u8bf7\u6c42",id:"\u7b80\u5355\u7684-http-\u8bf7\u6c42",level:2},{value:"\u7b80\u5355\u65b9\u6cd5\u5f62\u5f0f",id:"\u7b80\u5355\u65b9\u6cd5\u5f62\u5f0f",level:3},{value:"\u5b9e\u4f8b\u5f62\u5f0f",id:"\u5b9e\u4f8b\u5f62\u5f0f",level:3},{value:"Axios \u652f\u6301",id:"axios-\u652f\u6301",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u9ed8\u8ba4 Axios \u5b9e\u4f8b",id:"\u4f7f\u7528\u9ed8\u8ba4-axios-\u5b9e\u4f8b",level:3},{value:"\u914d\u7f6e\u9ed8\u8ba4 Axios \u5b9e\u4f8b",id:"\u914d\u7f6e\u9ed8\u8ba4-axios-\u5b9e\u4f8b",level:3},{value:"\u521b\u5efa\u4e0d\u540c\u5b9e\u4f8b",id:"\u521b\u5efa\u4e0d\u540c\u5b9e\u4f8b",level:3},{value:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",level:3}],c={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-\u8bf7\u6c42"},"HTTP \u8bf7\u6c42"),(0,r.kt)("h2",{id:"\u7b80\u5355\u7684-http-\u8bf7\u6c42"},"\u7b80\u5355\u7684 HTTP \u8bf7\u6c42"),(0,r.kt)("p",null,"Midway \u5185\u7f6e\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 HTTP \u8bf7\u6c42\u5ba2\u6237\u7aef\uff0c\u65e0\u9700\u5f15\u5165\u4e09\u65b9\u5305\u5373\u53ef\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4 Get \u8bf7\u6c42\uff0c\u8fd4\u56de\u6570\u636e\u4e3a Buffer\u3002"),(0,r.kt)("h3",{id:"\u7b80\u5355\u65b9\u6cd5\u5f62\u5f0f"},"\u7b80\u5355\u65b9\u6cd5\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nconst result = await makeHttpRequest('http://127.1:7001/');\n\n// Buffer.isBuffer(result.data)  => true\n")),(0,r.kt)("p",null,"Get \u8bf7\u6c42\uff0c\u5e26\u4e0a Query\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3a JSON\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nconst result = await makeHttpRequest('http://127.1:7001/', {\n  data: {\n    a: 1,\n    b: 2\n  },\n  dataType: 'json', // \u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\n});\n\n// typeof result.data => 'object'\n// result.data.url => /?a=1&b=2\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nconst result = await makeHttpRequest('http://127.1:7001/', {\n  method: 'GET',\n  dataType: 'json',\n});\n")),(0,r.kt)("p",null,"\u8fd4\u56de text \u683c\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nconst result = await makeHttpRequest('http://127.1:7001/', {\n  method: 'GET',\n  dataType: 'text',\n});\n")),(0,r.kt)("p",null,"POST \u8bf7\u6c42\u5e76\u8fd4\u56de JSON\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nconst result = await makeHttpRequest('http://127.1:7001/', {\n  method: 'POST',\n  data: {\n    a: 1,\n    b: 2\n  },\n  dataType: 'json',\n  contentType:'json',   // \u53d1\u9001\u7684 post \u4e3a json\n});\n\n// result.data ...\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u8bf7\u4e0d\u8981\u5728\u8bf7\u6c42\u4e2d\u76f4\u63a5\u8fd4\u56de result \u5bf9\u8c61\uff0cresult \u5bf9\u8c61\u662f\u6807\u51c6\u7684 httpResponse\uff0c\u5728\u5927\u90e8\u5206\u573a\u666f\u4e0b\u65e0\u6cd5\u88ab\u76f4\u63a5\u5e8f\u5217\u5316\uff0c\u4f1a\u629b\u51fa\u5bf9\u8c61\u5faa\u73af\u7684\u9519\u8bef\u3002")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeHttpRequest } from '@midwayjs/core';\n\nlet err;\n// \u8d85\u65f6\u4f1a\u62a5\u9519\uff0c\u6ce8\u610f catch\ntry {\n  const result = await makeHttpRequest('http://127.1:7001/', {\n    method: 'GET',\n    dataType: 'text',\n    timeout: 500,\n  });\n} catch (e) {\n  err = e;\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5185\u7f6e\u7684 Http \u5ba2\u6237\u7aef\u53ea\u63d0\u4f9b\u6700\u7b80\u5355\u7684\u80fd\u529b\uff0c\u5982\u9700\u590d\u6742\u7684\u529f\u80fd\uff08\u524d\u540e\u62e6\u622a\u6216\u662f\u5176\u4ed6\u989d\u5916\u7684\u914d\u7f6e\uff09\uff0c\u8bf7\u4f7f\u7528 axios\u3002")),(0,r.kt)("h3",{id:"\u5b9e\u4f8b\u5f62\u5f0f"},"\u5b9e\u4f8b\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpClient } from '@midwayjs/core';\n\nconst httpclient = new HttpClient();\nconst result = await httpclient.request('http://127.1:7001/');\n\n// Buffer.isBuffer(result.data)  => true\n")),(0,r.kt)("p",null,"\u548c\u65b9\u6cd5\u5f62\u5f0f\u53c2\u6570\u76f8\u540c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpClient } from '@midwayjs/core';\n\nconst httpclient = new HttpClient();\nconst result = await httpclient.request('http://127.1:7001/', {\n  method: 'POST',\n  data: {\n    a: 1,\n    b: 2\n  },\n  dataType: 'json',\n  contentType:'json',   // \u53d1\u9001\u7684 post \u4e3a json\n});\n\n// result.data ...\n")),(0,r.kt)("p",null,"\u793a\u4f8b\u5f62\u5f0f\uff0c\u53ef\u4ee5\u590d\u7528\u521b\u5efa\u51fa\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u6bcf\u6b21\u8bf7\u6c42\uff0c\u90fd\u53ef\u4ee5\u5e26\u4e0a\u4e00\u4e9b\u56fa\u5b9a\u7684\u53c2\u6570\uff0c\u6bd4\u5982 header\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpClient } from '@midwayjs/core';\n\nconst httpclient = new HttpClient({\n  headers: {\n    'x-timeout': '5'\n  },\n  method: 'POST',\n  timeout: 2000\n});\n\n// \u6bcf\u6b21\u90fd\u4f1a\u5e26\u4e0a headers\nconst result = await httpclient.request('http://127.1:7001/');\n\n")),(0,r.kt)("h2",{id:"axios-\u652f\u6301"},"Axios \u652f\u6301"),(0,r.kt)("p",null,"Midway \u5305\u88f9\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," \u5305\uff0c\u4f7f\u5f97\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u7b80\u5355\u7684\u4f7f\u7528 axios \u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u548c axios \u7684\u4e00\u4e9b\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u5b8c\u5168\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u914d\u4f9d\u8d56\u6ce8\u5165\u5199\u6cd5\uff0c\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u5b9e\u4f8b\u7ba1\u7406\u548c\u914d\u7f6e\u7edf\u4e00")),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/axios@3 --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/axios": "^3.0.0",\n    // ...\n  },\n}\n')),(0,r.kt)("h3",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as axios from '@midwayjs/axios';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    axios       // \u5bfc\u5165 axios \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u5373\u53ef\u6ce8\u5165\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u9ed8\u8ba4-axios-\u5b9e\u4f8b"},"\u4f7f\u7528\u9ed8\u8ba4 Axios \u5b9e\u4f8b"),(0,r.kt)("p",null,"\u63a5\u53e3\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," \u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.request(config)\naxios.get(url[, config])\naxios.delete(url[, config])\naxios.head(url[, config])\naxios.options(url[, config])\naxios.post(url[, data[, config]])\naxios.put(url[, data[, config]])\naxios.patch(url[, data[, config]])\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpService } from '@midwayjs/axios';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  httpService: HttpService;\n\n  async invoke() {\n    const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html';\n    const result = await this.httpService.get(url);\n    // TODO result\n  }\n}\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u9ed8\u8ba4-axios-\u5b9e\u4f8b"},"\u914d\u7f6e\u9ed8\u8ba4 Axios \u5b9e\u4f8b"),(0,r.kt)("p",null,"HttpService \u5b9e\u4f8b\u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"axios.create")," \uff0c\u6240\u4ee5\u53ef\u4ee5\u6709\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e86 axios \u672c\u8eab\u7684\u53c2\u6570\u76f8\u540c\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config.default.ts")," \u4e2d\u914d\u7f6e\u5b83\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  axios: {\n    default: {\n      // \u6240\u6709\u5b9e\u4f8b\u590d\u7528\u7684\u914d\u7f6e\n    },\n    clients: {\n      // \u9ed8\u8ba4\u5b9e\u4f8b\u7684\u914d\u7f6e\n      default: {\n        baseURL: 'https://api.example.com',\n        // `headers` are custom headers to be sent\n        headers: {\n          'X-Requested-With': 'XMLHttpRequest'\n        },\n        timeout: 1000, // default is `0` (no timeout)\n\n        // `withCredentials` indicates whether or not cross-site Access-Control requests\n        // should be made using credentials\n        withCredentials: false, // default\n      },\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u53c2\u6570\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#config-defaults"},"axios global config"),"\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u4e0d\u540c\u5b9e\u4f8b"},"\u521b\u5efa\u4e0d\u540c\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u548c\u5176\u4ed6\u7684\u670d\u52a1\u591a\u5b9e\u4f8b\u76f8\u540c\uff0c\u914d\u7f6e\u4e0d\u540c\u7684 key \u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  axios: {\n    default: {\n      // \u6240\u6709\u5b9e\u4f8b\u590d\u7528\u7684\u914d\u7f6e\n    },\n    clients: {\n      default: {\n        // \u9ed8\u8ba4\u5b9e\u4f8b\n      },\n      customAxios: {\n        // \u81ea\u5b9a\u4e49\u5b9e\u4f8b\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpServiceFactory, HttpService } from '@midwayjs/axios';\nimport { InjectClient } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n\n  @InjectClient(HttpServiceFactory, 'customAxios')\n  customAxios: HttpService;\n\n  async invoke() {\n    const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html';\n    const result = await this.customAxios.get(url);\n    // TODO result\n  }\n}\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"},"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u7684 Axios \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u5982\u4e0b\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Configuration, IMidwayContainer } from '@midwayjs/core';\nimport * as axios from '@midwayjs/axios';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    axios       // \u5bfc\u5165 axios \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class ContainerLifeCycle {\n\n  async onReady(container: IMidwayContainer) {\n    const httpService = await container.getAsync(axios.HttpService);\n    httpService.interceptors.request.use(\n      config => {\n        // Do something before request is sent\n        return config;\n      },\n      error => {\n        // Do something with request error\n        return Promise.reject(error);\n      }\n    );\n  }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u8981\u7ed9\u5176\u4ed6\u5b9e\u4f8b\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, IMidwayContainer } from '@midwayjs/core';\nimport * as axios from '@midwayjs/axios';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    axios       // \u5bfc\u5165 axios \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class ContainerLifeCycle {\n\n  async onReady(container: IMidwayContainer) {\n    const httpServiceFactory = await container.getAsync(axios.HttpServiceFactory);\n    const customAxios = httpServiceFactory.get('customAxios');\n    customAxios.interceptors.request.use(\n      config => {\n        //...\n      },\n      error => {\n        //...\n      }\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);
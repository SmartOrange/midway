"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4331],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef"},p=void 0,s={unversionedId:"hooks/client",id:"hooks/client",title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef",description:"\u5728 Midway Hooks \u7684\u5168\u6808\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 @midwayjs/rpc \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u8bf7\u6c42\u5ba2\u6237\u7aef\u3002\u6240\u6709\u751f\u6210\u7684\u63a5\u53e3\u90fd\u4f1a\u901a\u8fc7 @midwayjs/rpc \u6765\u8c03\u7528\u670d\u52a1\u7aef\u3002",source:"@site/docs/hooks/client.md",sourceDirName:"hooks",slug:"/hooks/client",permalink:"/docs/hooks/client",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/client.md",tags:[],version:"current",frontMatter:{title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef"},sidebar:"hooks",previous:{title:"\u5168\u6808\u5957\u4ef6",permalink:"/docs/hooks/fullstack"},next:{title:"\u90e8\u7f72",permalink:"/docs/hooks/deploy"}},c={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"baseURL: string",id:"baseurl-string",level:3},{value:"withCredentials: boolean",id:"withcredentials-boolean",level:3},{value:"fetcher: Fetcher",id:"fetcher-fetcher",level:3},{value:"middleware: Middleware[]",id:"middleware-middleware",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 Midway Hooks \u7684\u5168\u6808\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rpc")," \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u8bf7\u6c42\u5ba2\u6237\u7aef\u3002\u6240\u6709\u751f\u6210\u7684\u63a5\u53e3\u90fd\u4f1a\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rpc")," \u6765\u8c03\u7528\u670d\u52a1\u7aef\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rpc")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"setupHttpClient")," \u65b9\u6cd5\u6765\u914d\u7f6e\u8bf7\u6c42\u5ba2\u6237\u7aef\uff08\ud83d\udce2 ",(0,i.kt)("inlineCode",{parentName:"p"},"setupHttpClient")," \u5e94\u653e\u7f6e\u4e8e\u524d\u7aef\u4ee3\u7801\u7684\u5165\u53e3\u5904\u3002\uff09\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u7684\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type SetupOptions = {\n  baseURL?: string;\n  withCredentials?: boolean;\n  fetcher?: Fetcher;\n  middleware?: Middleware[];\n};\n\ntype Fetcher = (\n  req: HttpRequestOptions,\n  options: SetupOptions\n) => Promise<any>;\n\ntype Middleware = (\n  ctx: Context,\n  next: () => Promise<any>\n) => void;\n\ntype Context = {\n  req: HttpRequestOptions;\n  res: any;\n};\n\ntype HttpRequestOptions = {\n  url: string;\n  method: HttpMethod;\n  data?: {\n    args: any[];\n  };\n\n  // query & headers\n  query?: Record<string, string>;\n  headers?: Record<string, string>;\n};\n")),(0,i.kt)("h3",{id:"baseurl-string"},"baseURL: string"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u7684\u57fa\u7840 URL\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setupHttpClient } from '@midwayjs/rpc';\n\nsetupHttpClient({\n  baseURL:\n    process.env.NODE_ENV ===\n    'development'\n      ? 'http://localhost:7001'\n      : 'https://api.example.com',\n});\n")),(0,i.kt)("h3",{id:"withcredentials-boolean"},"withCredentials: boolean"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u5177\u4f53\u53ef\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials"},"MDN")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setupHttpClient } from '@midwayjs/rpc';\n\nsetupHttpClient({\n  withCredentials: true,\n});\n")),(0,i.kt)("h3",{id:"fetcher-fetcher"},"fetcher: Fetcher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rpc")," \u9ed8\u8ba4\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/developit/redaxios"},"redaxios")," \u4f5c\u4e3a\u8bf7\u6c42\u5ba2\u6237\u7aef\uff0c\u4e00\u4e2a\u9075\u5faa axios api \u7684 mini \u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher"),"\uff0c\u53ef\u4ee5\u66ff\u6362\u9ed8\u8ba4\u7684\u8bf7\u6c42\u5ba2\u6237\u7aef\u3002\u6b64\u5904\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u8bf7\u6c42\u5ba2\u6237\u7aef\u4e3a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios';\nimport { setupHttpClient } from '@midwayjs/rpc';\nimport type { Fetcher } from '@midwayjs/rpc';\n\nconst fetcher: Fetcher = async (\n  req,\n  options\n) => {\n  const response = await axios({\n    method: req.method,\n    url: req.url,\n    data: req.data,\n    params: req.query,\n    headers: req.headers,\n    baseURL: options.baseURL,\n    withCredentials:\n      options.withCredentials,\n  });\n  return response.data;\n};\n\nsetupHttpClient({ fetcher });\n")),(0,i.kt)("h3",{id:"middleware-middleware"},"middleware: Middleware[]"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/rpc")," \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e2d\u95f4\u4ef6\u6765\u7528\u4e8e\u6253\u5370\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u5904\u7406\u9519\u8bef\u7b49\u3002"),(0,i.kt)("p",null,"\u4ee5\u6253\u5370\u5f53\u524d\u8bf7\u6c42\u7684\u5730\u5740\u4e0e\u8fd4\u56de\u503c\u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setupHttpClient } from '@midwayjs/rpc';\nimport type { Middleware } from '@midwayjs/rpc';\n\nconst logger: Middleware = async (\n  ctx,\n  next\n) => {\n  console.log(`<-- ${ctx.req.url}`);\n  await next();\n  console.log(\n    `--\x3e ${ctx.req.url} ${ctx.res}`\n  );\n};\n\nsetupHttpClient({\n  middleware: [logger],\n});\n")),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528\u4e8e\u7edf\u4e00\u5904\u7406\u9519\u8bef\uff1a"),(0,i.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher")," \u7684\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"err")," \u7c7b\u578b\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/res_schema"},"Axios Response Schema"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setupHttpClient } from '@midwayjs/rpc';\nimport type { Middleware } from '@midwayjs/rpc';\n\nconst ErrorHandler: Middleware = async (\n  ctx,\n  next\n) => {\n  try {\n    await next();\n  } catch (err) {\n    switch (err.status) {\n      case 401:\n        location.href = '/login';\n        break;\n      case 500:\n        alert('Internal Server Error');\n        break;\n      default:\n        alert(\n          `Unknown Error, status: ${err.status}`\n        );\n        break;\n    }\n  }\n};\n\nsetupHttpClient({\n  middleware: [ErrorHandler],\n});\n")))}m.isMDXComponent=!0}}]);
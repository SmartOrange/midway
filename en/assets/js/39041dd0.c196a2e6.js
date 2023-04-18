"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,y=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="API Gateway\uff08HTTP\uff09",i={unversionedId:"serverless/tencent_trigger_apigw",id:"serverless/tencent_trigger_apigw",title:"API Gateway\uff08HTTP\uff09",description:"API Gateway is similar to HTTP functions in Tencent Cloud Function System, through which we publish functions as HTTP services.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/tencent_trigger_apigw.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_apigw",permalink:"/en/docs/serverless/tencent_trigger_apigw",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/tencent_trigger_apigw.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Local test",id:"local-test",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-gatewayhttp"},"API Gateway\uff08HTTP\uff09"),(0,a.kt)("p",null,"API Gateway is similar to HTTP functions in Tencent Cloud Function System, through which we publish functions as HTTP services."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {\n    path: '/api_gateway_tencent',\n    method: 'post',\n  })\n  async handleAPIGatewayEvent(@Body() name) {\n    return 'hello ${name}';\n  }\n}\n")),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),", you can access the link that is output from the console."),(0,a.kt)("h2",{id:"local-test"},"Local test"),(0,a.kt)("p",null,"Same as the traditional application HTTP test, the function app is created by createFunctionApp and tested by createHttpRequest method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/serverless-app';\nimport { createFunctionApp, createHttpRequest } from '@midwayjs/mock';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from http trigger', async () => {\n    const result = await createHttpRequest(app).post('api_gateway_tencent').send({\n      name: 'zhangting',\n    });\n\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")))}m.isMDXComponent=!0}}]);
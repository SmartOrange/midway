"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4515],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},c=void 0,s={unversionedId:"serverless/tencent_trigger_cos",id:"serverless/tencent_trigger_cos",title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",description:"COS \u662f\u817e\u8baf\u4e91\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\u7684\u670d\u52a1\u3002",source:"@site/docs/serverless/tencent_trigger_cos.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_cos",permalink:"/docs/serverless/tencent_trigger_cos",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/tencent_trigger_cos.md",tags:[],version:"current",frontMatter:{title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},sidebar:"serverless",previous:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",permalink:"/docs/serverless/tencent_trigger_timer"},next:{title:"CMQ \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",permalink:"/docs/serverless/tencent_trigger_cmq"}},p={},u=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"COS \u89e6\u53d1\u5668\u914d\u7f6e",id:"cos-\u89e6\u53d1\u5668\u914d\u7f6e",level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1-1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"COS \u662f\u817e\u8baf\u4e91\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\u7684\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  Inject,\n  ServerlessTrigger,\n  ServerlessTriggerType,\n} from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*,\n    filter: {\n      prefix: 'filterdir/',\n      suffix: '.jpg',\n    },\n  })\n  async handleCOSEvent(event: SCF.COSEvent) {\n    // xxx\n  }\n}\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"cos-\u89e6\u53d1\u5668\u914d\u7f6e"},"COS \u89e6\u53d1\u5668\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b58\u50a8\u7684 bucket \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u51fd\u6570\u6267\u884c\u7684\u4e8b\u4ef6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"{",(0,l.kt)("br",null),"prefix: string;",(0,l.kt)("br",null),"   suffix: string;",(0,l.kt)("br",null)," }"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u8fc7\u6ee4\u53c2\u6570\uff0c\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684 \u5bf9\u8c61\u624d\u53ef\u4ee5\u89e6\u53d1\u51fd\u6570\uff0c\u5305\u542b\u4e00\u4e2a\u914d\u7f6e\u5c5e\u6027 key\uff0c\u8868\u793a\u8fc7\u6ee4\u5668\u652f\u6301\u8fc7\u6ee4\u7684\u5bf9\u8c61\u952e (key)\u3002")))),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76d1\u542c\u5bf9\u8c61\u521b\u5efa\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"  @ServerlessTrigger(ServerlessTriggerType.OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*,\n    filter: {\n      prefix: 'filterdir/',\n      suffix: '.jpg',\n    },\n  })\n")),(0,l.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,l.kt)("p",null,"COS \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SCF.COSEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Records": [\n    {\n      "cos": {\n        "cosSchemaVersion": "1.0",\n        "cosObject": {\n          "url": "http://testpic-1253970026.cos.ap-chengdu.myqcloud.com/testfile",\n          "meta": {\n            "x-cos-request-id": "NWMxOWY4MGFfMjViMjU4NjRfMTUyMV8yNzhhZjM=",\n            "Content-Type": ""\n          },\n          "vid": "",\n          "key": "",\n          "size": 1029\n        },\n        "cosBucket": {\n          "region": "cd",\n          "name": "testpic",\n          "appid": "1253970026"\n        },\n        "cosNotificationId": "unkown"\n      },\n      "event": {\n        "eventName": "cos:ObjectCreated:*",\n        "eventVersion": "1.0",\n        "eventTime": 1545205770,\n        "eventSource": "qcs::cos",\n        "requestParameters": {\n          "requestSourceIP": "192.168.15.101",\n          "requestHeaders": {\n            "Authorization": "****************"\n          }\n        },\n        "eventQueue": "qcs:0:lambda:cd:appid/1253970026:default.printevent.$LATEST",\n        "reservedInfo": "",\n        "reqid": 179398952\n      }\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,l.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1-1"},"\u672c\u5730\u5f00\u53d1"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,l.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"createCOSEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createCOSEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleCOSEvent(createCOSEvent())).toEqual('hello world');\n  });\n});\n")))}d.isMDXComponent=!0}}]);
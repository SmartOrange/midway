"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(c,".").concat(d)]||u[d]||l[d]||s;return n?r.createElement(v,i(i({ref:t},m),{},{components:n})):r.createElement(v,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"midway \u9ad8\u7ea7\u6d4b\u8bd5\u65b9\u6848"},c=void 0,p={unversionedId:"test_more",id:"version-1.0.0/test_more",title:"midway \u9ad8\u7ea7\u6d4b\u8bd5\u65b9\u6848",description:"\u6d4b\u8bd5\u5e94\u7528",source:"@site/versioned_docs/version-1.0.0/test_more.md",sourceDirName:".",slug:"/test_more",permalink:"/en/docs/1.0.0/test_more",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/test_more.md",tags:[],version:"1.0.0",frontMatter:{title:"midway \u9ad8\u7ea7\u6d4b\u8bd5\u65b9\u6848"},sidebar:"common",previous:{title:"\u4f9d\u8d56\u6ce8\u5165\u624b\u518c",permalink:"/en/docs/1.0.0/injection"},next:{title:"Docker \u4e2d\u8fdb\u7a0b\u8fc7\u591a",permalink:"/en/docs/1.0.0/docker"}},m={},l=[{value:"\u6d4b\u8bd5\u5e94\u7528",id:"\u6d4b\u8bd5\u5e94\u7528",level:3},{value:"\u6d4b\u8bd5 Service",id:"\u6d4b\u8bd5-service",level:3}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u6d4b\u8bd5\u5e94\u7528"},"\u6d4b\u8bd5\u5e94\u7528"),(0,s.kt)("p",null,"\u666e\u901a\u573a\u666f\u4e0b\uff0c\u4ece Controller \u5f00\u59cb\u6d4b\u8bd5\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u542f\u52a8\u6574\u4e2a\u5e94\u7528\u6765\u6d4b\u8bd5\u8def\u7531\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { app, assert } from 'midway-mock/bootstrap';\ndescribe('test/controller/home.test.ts', () => {\n  it('should GET /', () => {\n    // \u5bf9 app \u53d1\u8d77 `GET /` \u8bf7\u6c42\n    return app\n      .httpRequest()\n      .get('/')\n      .expect('Welcome to midwayjs!') // \u671f\u671b body \u662f hello world\n      .expect(200); // \u671f\u671b\u8fd4\u56de status 200\n  });\n});\n")),(0,s.kt)("h3",{id:"\u6d4b\u8bd5-service"},"\u6d4b\u8bd5 Service"),(0,s.kt)("p",null,"\u5982\u679c\u5355\u72ec\u6d4b\u8bd5 Service\uff0c\u5206\u4e24\u79cd\u60c5\u51b5\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1\u3001\u6d4b\u8bd5\u5355\u4f8b\uff08\u65e0 ctx \u5173\u8054\uff09"),"\n","*","*","\n\u76f4\u63a5\u4ece app \u4e0a\u6302\u8f7d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"applicationContext"),"\xa0 \u5c5e\u6027\u4e2d\u83b7\u53d6 Service \u5b9e\u4f8b\uff0c\u8fdb\u800c\u8c03\u7528\u65b9\u6cd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { app, assert } from 'midway-mock/bootstrap';\nimport { IUserService } from '../../src/interface';\n\ndescribe('test/service/user.test.ts', () => {\n  it('#getUser', async () => {\n    // \u53d6\u51fa userService\n    const user = await app.applicationContext.getAsync<IUserService>('userService');\n    const data = await user.getUser({ id: 1 });\n    assert(data.id === 1);\n    assert(data.username === 'mockedName');\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2\u3001\u6d4b\u8bd5\u8bf7\u6c42\u4f5c\u7528\u57df\uff08\u5e26\u6709 ctx\uff09")),(0,s.kt)("p",null,"\u4e00\u822c\u573a\u666f\u4e0b\uff0cService \u4e2d\u53ef\u80fd\u542b\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"@inject() ctx"),"\xa0 \u7684\u4ee3\u7801\uff0c\u4f1a\u6709\u4ece ctx \u53d6\u4e1c\u897f\uff0c\u8fd9\u6837\u7684 Service \u5fc5\u987b\u548c\u4e00\u4e2a\u8bf7\u6c42\u76f8\u5173\u8054\uff0c\u800c\u5728 egg \u4f53\u7cfb\u4e2d\uff0c\u5fc5\u987b\u5148\u521b\u5efa\u4e00\u4e2a\u533f\u540d\u4e0a\u4e0b\u6587\u624d\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { app, assert } from 'midway-mock/bootstrap';\nimport { IUserService } from '../../src/interface';\n\ndescribe('test/service/user.test.ts', () => {\n  it('#getUser', async () => {\n    // \u521b\u5efa\u533f\u540d\u4e0a\u4e0b\u6587\n    const ctx = app.mockContext();\n    // \u53d6\u51fa userService\n    const user = await ctx.requestContext.getAsync<IUserService>('userService');\n    const data = await user.getUser({ id: 1 });\n    assert(data.id === 1);\n    assert(data.username === 'mockedName');\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3\u3001\u8986\u76d6\u67d0\u4e9b\u670d\u52a1\u7684\u65b9\u6cd5"),"\n","*","*","\n\u5982\u679c\u60f3\u5728\u6d4b\u8bd5\u65f6\u8986\u76d6\u67d0\u4e9b\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"app.mockClassFunction"),"\xa0 \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { app, assert } from 'midway-mock/bootstrap';\nimport { IUserService } from '../../src/interface';\n\n// service\uff0c\u653e\u5728\u6587\u4ef6\u4e2d\n@provide('userService')\nexport class UserService {\n  async getUser() {\n    return 'zhang';\n  }\n}\n\ndescribe('test/service/user.test.ts', () => {\n  it('#getUser', async () => {\n    app.mockClassFunction('userService', 'getUser', () => {\n      return 'chen';\n    });\n    // \u53d6\u51fa userService\n    const user = await app.applicationContext.getAsync<IUserService>('userService');\n    const data = await user.getUser(); // chen\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4\u3001\u4f7f\u7528 IoC \u67d0\u4e9b\u670d\u52a1\u7684\u65b9\u6cd5")),(0,s.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u4f1a\u6709\u8986\u76d6\u67d0\u4e9b Service \u7684\u7279\u5b9a\u5c5e\u6027\uff0c\u6a21\u62df\u8fd4\u56de\u503c\u7684\u9700\u6c42\u3002\u5229\u7528 IoC \u7684\u7279\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u4e00\u4e2a\u5047\u7684\u670d\u52a1\u53bb\u66ff\u6362\u539f\u672c\u7684\u90a3\u4e2a\uff0c\u53ea\u8981",(0,s.kt)("strong",{parentName:"p"},"\u4fdd\u6301 id \u76f8\u7b49"),"\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u6211\u4eec\u628a\u771f\u7684\u670d\u52a1\u653e\u5728 src \u4e2d\uff0c\u5047\u7684\u653e\u5728 test \u76ee\u5f55\u4e2d\uff0c\u8fd9\u6837\u5bf9\u7ebf\u4e0a\u670d\u52a1\u5c31\u4e0d\u4f1a\u6709\u5f71\u54cd\u3002"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u771f\u6b63\u7684 service\uff0c\u653e\u5728 service/user.ts\n@provide('userService')\nexport class UserService {\n  async getUser() {\n    return 'zhang';\n  }\n}\n\n// \u5047\u7684\u670d\u52a1\uff0c\u6211\u4eec\u653e\u5728 test/service/user.ts \u4e2d\n// \u7ee7\u627f\u53ef\u4ee5\u65b9\u4fbf\u7684\u53ea\u505a\u7279\u5b9a\u903b\u8f91\u7684\u8986\u76d6\n// \u4fdd\u6301 @provide \u51fa\u539f\u672c\u7684 id\n@provide('userService')\nexport class MockUserService extends UserService {\n  async getUser() {\n    return 'chen';\n  }\n}\n")),(0,s.kt)("p",null,"\u6d4b\u8bd5\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mm, assert } from 'midway-mock';\nimport { IUserService } from '../../src/interface';\nimport { MockUserService } from '../service/user';\n\ndescribe('test/service/user.test.ts', () => {\n  it('#getUser', async () => {\n    const app = mm.app();\n    await app.ready();\n\n    // \u7528\u540c\u6837\u7684 id \u66ff\u6362\u771f\u7684 service\uff0c\u540e\u7eed\u903b\u8f91\u548c\u5176\u4ed6\u6d4b\u8bd5\u76f8\u540c\n    app.applicationContext.bindClass(MockUserService);\n\n    // \u521b\u5efa\u533f\u540d\u4e0a\u4e0b\u6587\n    const ctx = app.mockContext();\n    // \u53d6\u51fa userService\n    const user = await ctx.requestContext.getAsync<IUserService>('userService');\n    const data = await user.getUser({ id: 1 });\n    assert(data.id === 1);\n    assert(data.username === 'mockedName');\n  });\n});\n")))}d.isMDXComponent=!0}}]);